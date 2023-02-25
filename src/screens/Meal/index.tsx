import { useNavigation, useRoute } from "@react-navigation/native";

import { HeaderWithBackButton } from "../../components/HeaderWithBackButton";
import { ButtonWithIcon } from "../../components/ButtonWithIcon";

import {
  Container,
  Content,
  DateAndHourContainer,
  DateAndHourDescription,
  DateAndHourTitle,
  DeleteMealButtonContainer,
  EditMealButtonContainer,
  Info,
  MealContainer,
  MealDescription,
  MealTitle,
  TagContainer,
  TagStatus,
  TagTitle,
  Title
} from "./styles";

interface RouteParams {
  isInTheDiet: boolean
}

export function Meal() {
  const { navigate } = useNavigation();
  const { params } = useRoute();
  const { isInTheDiet } = params as RouteParams
  
  return (
    <Container isOnTheDiet={isInTheDiet}>
      <HeaderWithBackButton
        type={'NEUTRAL'}
      >
        <Title>
          {'Refeição'}
        </Title>
      </HeaderWithBackButton>

      <Content>
        <Info>
          <MealContainer>
            <MealTitle>
              {'Sanduíche'}
            </MealTitle>

            <MealDescription>
              {'Sanduíche de pão integral com atum e salada de alface e tomate'}
            </MealDescription>
          </MealContainer>

          <DateAndHourContainer>
            <DateAndHourTitle>
              {'Data e hora'}
            </DateAndHourTitle>

            <DateAndHourDescription>
              {'12/08/2022 às 16:00'}
            </DateAndHourDescription>
          </DateAndHourContainer>

          <TagContainer>
            <TagStatus isOnTheDiet={isInTheDiet} />

            <TagTitle>
              {isInTheDiet ? 'dentro da dieta' : 'fora da dieta'}
            </TagTitle>
          </TagContainer>
        </Info>

        <EditMealButtonContainer>
          <ButtonWithIcon
            title='Editar refeição'
            icon='edit-3'
            onPress={() => navigate('manage-meal', { mode: 'edit' })}
          />
        </EditMealButtonContainer>

        <DeleteMealButtonContainer>
          <ButtonWithIcon
            title='Excluir refeição'
            icon='trash-2'
            type='SECONDARY'
          />
        </DeleteMealButtonContainer>
      </Content>
    </Container>
  )
}