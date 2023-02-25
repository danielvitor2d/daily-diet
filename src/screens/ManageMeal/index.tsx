import { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

import { ButtonIcon } from '../../components/ButtonIcon';
import { HeaderWithBackButton } from '../../components/HeaderWithBackButton';

import {
  Container,
  Content,
  Fields,
  InputContainer,
  InputField,
  TitleField,
  Title,
  ButtonField,
  TextButton,
  StatusButton,
} from './styles';

interface RouteParams {
  mode: 'create' | 'edit';
}

export function ManageMeal() {
  const { navigate } = useNavigation();
  const { params } = useRoute();

  const { mode } = params as RouteParams;

  const [isOnTheDiet, setIsOnTheDiet] = useState(true)

  return (
    <Container type='NEUTRAL'>
      <HeaderWithBackButton
        type={'NEUTRAL'}
      >
        <Title>
          {mode === 'create' 
            ? 'Nova refeição' 
            : 'Editar refeição'
          }
        </Title>
      </HeaderWithBackButton>

      <Content>
        <Fields direction='VERTICAL'>
          <InputContainer variant='FULL'>
            <TitleField>
              {'Nome'}
            </TitleField>

            <InputField
              variant='NORMAL'
            />
          </InputContainer>

          <InputContainer variant='FULL'>
            <TitleField>
              {'Descrição'}
            </TitleField>

            <InputField
              multiline
              textAlignVertical='top'
              numberOfLines={8}
              variant='LARGER'
            />
          </InputContainer>

          <Fields direction='HORIZONTAL'>
            <InputContainer variant='HALF'>
              <TitleField>
                {'Data'}
              </TitleField>

              <InputField
                variant='NORMAL'
              />
            </InputContainer>

            <InputContainer variant='HALF'>
              <TitleField>
                {'Hora'}
              </TitleField>

              <InputField
                variant='NORMAL'
              />
            </InputContainer>
          </Fields>

          <Fields direction='HORIZONTAL'>
            <InputContainer variant='HALF'>
              <TitleField>
                {'Está dentro da dieta?'}
              </TitleField>

              <ButtonField
                onPress={() => setIsOnTheDiet(true)}
                isSelected={isOnTheDiet}
                type={'PRIMARY'}
              >
                <StatusButton type='PRIMARY' />

                <TextButton>
                  {'Sim'}
                </TextButton>
              </ButtonField>
            </InputContainer>

            <InputContainer variant='HALF'>
              <ButtonField
                onPress={() => setIsOnTheDiet(false)}
                isSelected={!isOnTheDiet}
                type={'SECONDARY'}
              >
                <StatusButton type='SECONDARY' />

                <TextButton>
                  {'Não'}
                </TextButton>
              </ButtonField>
            </InputContainer>
          </Fields>
        </Fields>

        <ButtonIcon
          title={mode === 'create'
          ? 'Cadastrar refeição'
          : 'Salvar alterações'
        }
          onPress={() => navigate('feedback', { isPositiveFeedback: isOnTheDiet })}
        />
      </Content>
    </Container>
  )
}