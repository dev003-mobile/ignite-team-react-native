import { useState } from "react"
import { Alert, Keyboard } from "react-native"
import { useRoute } from "@react-navigation/native"

import { Container, GroudParticipantsList, ContainerFilter, ContentFilter, CounterText } from "./styles"

import { Input } from "@components/input"
import { Header } from "@components/header"
import { Filter } from "@components/filter"
import { Button } from "@components/button"
import { Highlight } from "@components/highlight"
import { ListEmpty } from "@components/list-empty"
import { GroupParticipant } from "@components/group-participant"

type RouteParamsProps = {
   className: string
}

export function PlayersScreen() {
   const [team, setTeam] = useState<string>("TIME A")
   const [participantName, setParticipantName] = useState<string>("")
   const [groupParticipant, setGroupParticipant] = useState<Array<string>>([])

   const { className } = useRoute().params as RouteParamsProps

   function handleAddParticipant(particiapant: string) {
      Keyboard.dismiss()

      if (particiapant.length === 0) {
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

      return Alert.alert(
         "Particiapante adicionado",
         `O particiapante ´${particiapant}´ foi adicionado com sucesso na lista de ${groupParticipant.length} ${groupParticipant.length === 1 ? 'participante' : 'participantes'} actualmente.`,
         [
            {
               text: "Ok",
               style: "default",
               onPress: () => {
                  setGroupParticipant((prevState) => [...prevState, particiapant])
                  setParticipantName("")
               }
            }
         ]
      )
   }

   function handleRemoveParticipant(index: number) {
      setGroupParticipant((prevState) => prevState.filter((_, pk) => pk !== index))
   }

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

            <CounterText> {groupParticipant.length} </CounterText>
         </ContainerFilter>

         <GroudParticipantsList
            data={groupParticipant}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index }) => <GroupParticipant
               title={item as string}
               onPress={() => handleRemoveParticipant(index)}
            />}
            contentContainerStyle={groupParticipant.length === 0 && {flex: 1, paddingBottom: 100}}
            ListEmptyComponent={() => <ListEmpty title="Que tal adicionar um participante?"/>}
         >
         </GroudParticipantsList>

         <Button
            onPress={() => {}}
            type="SECONDARY"
            title="Remover turma"
         />
      </Container>
   )
}