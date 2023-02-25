import { useNavigation } from "@react-navigation/native";
import { SectionList, View } from "react-native"
import { Divider } from "react-native-elements";
import { useTheme } from "styled-components/native";

import {
  Container,
  ItemContainer,
  ItemHour,
  ItemTitle,
  ItemStatus,
  HeaderContainer,
  SectionHeaderTitle,
} from "./styles"

type Meal = {
  hour: string;
  title: string;
  isOnTheDiet: boolean;
}

type MealsList = Array<{
  date: string;
  data: Array<Meal>
}>

const DATA = [
  {
    date: '12.08.22',
    data: [
      {
        hour: '20:00',
        title: 'X-tudo',
        isOnTheDiet: false,
      },
      {
        hour: '16:00',
        title: 'Whey protein com leite',
        isOnTheDiet: true,
      },
      {
        hour: '12:30',
        title: 'Salada cesar com frango grelhado',
        isOnTheDiet: true,
      },
      {
        hour: '09:30',
        title: 'Vitamina de banana com abacate',
        isOnTheDiet: true,
      },
    ]
  },
  {
    date: '11.08.22',
    data: [
      {
        hour: '20:00',
        title: 'X-tudo',
        isOnTheDiet: false,
      },
      {
        hour: '16:00',
        title: 'Whey protein com leite',
        isOnTheDiet: true,
      },
      {
        hour: '12:30',
        title: 'Salada cesar com frango grelhado',
        isOnTheDiet: true,
      },
      {
        hour: '09:30',
        title: 'Vitamina de banana com abacate',
        isOnTheDiet: true,
      },
    ]
  },
  {
    date: '10.08.22',
    data: [
      {
        hour: '20:00',
        title: 'X-tudo',
        isOnTheDiet: false,
      },
      {
        hour: '16:00',
        title: 'Whey protein com leite',
        isOnTheDiet: true,
      },
      {
        hour: '12:30',
        title: 'Salada cesar com frango grelhado',
        isOnTheDiet: true,
      },
      {
        hour: '09:30',
        title: 'Vitamina de banana com abacate',
        isOnTheDiet: true,
      },
    ]
  },
] satisfies MealsList;

export function Meals() {
  const { navigate } = useNavigation();

  const { COLORS } = useTheme();

  return (
    <Container>
      <SectionList
        sections={DATA}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => `${index}-${item.title}`}
        renderItem={({ item }) => (
          <ItemContainer activeOpacity={0.7} onPress={() => navigate('meal', { isInTheDiet: item.isOnTheDiet })}>
            <ItemHour>
              {item.hour}
            </ItemHour>

            <Divider orientation='vertical' width={1} color={COLORS.GRAY_400} />

            <ItemTitle numberOfLines={1}>
              {item.title}
            </ItemTitle>

            <ItemStatus status={item.isOnTheDiet} />

          </ItemContainer>
        )}
        renderSectionHeader={({ section: { date } }) => (
          <HeaderContainer>
            <SectionHeaderTitle>
              {date}
            </SectionHeaderTitle>
          </HeaderContainer>
        )}
        ItemSeparatorComponent={() => (
          <View style={{ height: 8 }} />
        )}
        contentContainerStyle={{
          paddingBottom: 300,
        }}
      />
    </Container>
  )
}