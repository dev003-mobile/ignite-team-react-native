import { useState } from "react"
import { useCallback } from "react"
import { Alert, Keyboard } from "react-native"
import { useNavigation, useRoute } from "@react-navigation/native"
import { useFocusEffect } from "@react-navigation/native"

import { Container, GroudParticipantsList, ContainerFilter, ContentFilter, CounterText } from "./styles"


import { Input } from "@components/input"
import { Header } from "@components/header"
import { Filter } from "@components/filter"
import { Button } from "@components/button"
import { Highlight } from "@components/highlight"
import { ListEmpty } from "@components/list-empty"
import { AppError } from "@utils/errors/app-error"
import { GroupParticipant } from "@components/group-participant"
import { PlayerDTO } from "@storage/player-storage/dto/player-dto"
import { deletePlayerByTeam } from "@storage/player-storage/delete-player-by-team"
import { getAllPlayersByClassName } from "@storage/player-storage/get-players-by-class"
import { createPlayerByClassName } from "@storage/player-storage/create-player-by-class"
import { deleteParticipantsByTeam } from "@storage/player-storage/delete-class"
import { deleteClassName } from "@storage/class-storage/delete-class"

type RouteParamsProps = {
   className: string
}

export function PlayersScreen() {
   const [team, setTeam] = useState<string>("TIME A")
   const [participantName, setParticipantName] = useState<string>("")
   const [allPlayersByTeam, setAllPlayersByTeam] = useState<Array<PlayerDTO>>([])

   const { navigate } = useNavigation()
   const { className } = useRoute().params as RouteParamsProps

   async function handleAddParticipant(particiapant: string) {
      Keyboard.dismiss()

      if (particiapant.trim().length === 0) {
         return Alert.alert(
            "Inválido",
            "Informe obrigatoriamente o nome de um particiapante!",
            [
               {
                  text: "Ok",
                  style: "default"
               }
            ]
         )
      }

      const newPlayer: PlayerDTO = {
         name: particiapant,
         team: team
      }

      try {
         await createPlayerByClassName(className, newPlayer)
         const allPlayers: Array<PlayerDTO> = await getAllPlayersByClassName(className)
         setAllPlayersByTeam(allPlayers.filter((player) => player.team === team))
         setParticipantName("")
      } catch (error) {
         if (error instanceof AppError) {
            return Alert.alert("Falha ao adicionar", error.message)
         } else {
            return Alert.alert("Falha", "Não foi possível adicionar um novo participante")
         }
      }
   }

   async function handleGetAllPlayersByTeam() : Promise<any> {
      try {
         const allPlayersByClassName: Array<PlayerDTO> = await getAllPlayersByClassName(className)
         const allPlayersByTeam: Array<PlayerDTO> = allPlayersByClassName.filter((players) => players.team === team)
         setAllPlayersByTeam(allPlayersByTeam)
      } catch (error) {
         Alert.alert("Falha", "Não foi possivel buscar os participantes por team")
      }
   }

   async function handleRemoveParticipant(player: PlayerDTO) {
      try {
         const allPlayers: Array<PlayerDTO> = await deletePlayerByTeam(className, player)
         setAllPlayersByTeam(allPlayers)
      } catch (error) {
         Alert.alert("Falha", "Não foi possivel buscar os participantes")
      }
   }

   async function handleDeleteClassNameAndParticipants(className: string) {
      try {
         await deleteParticipantsByTeam(className)
         await deleteClassName(className)
         navigate("/groups-screen")
      } catch (error) {
         Alert.alert("Falha", "Não foi possivel apagar a classe")
      }
   }

   useFocusEffect(useCallback(() => {
      handleGetAllPlayersByTeam()
   }, [team]))

   return (
      <Container>
         <Header type="SECONDARY"/>
         <Highlight
            title={className}
            subtitle="Adicione a galera e separe os times"
            style={{paddingTop: 50}}
         />
         <Input
            showButtonAdd
            value={participantName}
            onPress={() => handleAddParticipant(participantName)}
            placeholder="Nome do participante"
            onChangeText={setParticipantName}
         />

         <ContainerFilter>
            <ContentFilter>
               <Filter
                  title="TIME A"
                  isActive={team === "TIME A" ? true : false}
                  onPress={() => setTeam("TIME A")}
               />
               <Filter
                  title="TIME B"
                  isActive={team === "TIME B" ? true : false}
                  onPress={() => setTeam("TIME B")}
               />
            </ContentFilter>

            <CounterText> {allPlayersByTeam.length} </CounterText>
         </ContainerFilter>

         <GroudParticipantsList
            data={allPlayersByTeam}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index }) => <GroupParticipant
               title={(item as PlayerDTO).name}
               onPress={() => handleRemoveParticipant(item as PlayerDTO)}
            />}
            contentContainerStyle={allPlayersByTeam.length === 0 && {flex: 1, paddingBottom: 100}}
            ListEmptyComponent={() => <ListEmpty title="Que tal adicionar um participante?"/>}
         >
         </GroudParticipantsList>

         <Button
            onPress={() => handleDeleteClassNameAndParticipants(className)}
            type="SECONDARY"
            title="Remover turma"
         />
      </Container>
   )
}