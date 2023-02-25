import { useNavigation, useRoute } from "@react-navigation/native";

import { Container, Content, FeedbackImage, Subtitle, TextContainer, Title } from "./styles";

import { ButtonIcon } from "../../components/ButtonIcon";
import positiveFeedback from '../../assets/positive-feedback.png';
import negativeFeedback from '../../assets/negative-feedback.png';

type RouteParams = {
  isPositiveFeedback: boolean;
}

export function Feedback() {
  const { navigate } = useNavigation();
  const { params } = useRoute();
  const { isPositiveFeedback } = params as RouteParams

  return (
    <Container>
      <Content>
        <TextContainer>
          <Title isPositiveFeedback={isPositiveFeedback}>
            {isPositiveFeedback
              ? 'Continue assim!'
              : 'Que pena!'
            }
          </Title>

          <Subtitle>
            {isPositiveFeedback
              ? 'Você continua dentro da dieta. Muito bem!'
              : 'Você saiu da dieta dessa vez, mas continue se esforçando e não desista!'
            }
          </Subtitle>
        </TextContainer>

        <FeedbackImage
          source={isPositiveFeedback 
            ? positiveFeedback
            : negativeFeedback
          }
        />

        <ButtonIcon
          style={{ width: '60%' }}
          title='Ir para a página inicial'
          onPress={() => navigate('home')}
        />
      </Content>
    </Container>
  )
}