import { useState } from 'react';

import { StatisticsCard } from '../../components/StatisticsCard';
import { HeaderWithBackButton } from '../../components/HeaderWithBackButton';

import {
  Container,
  Content,
  Data,
  PageTitle,
  Title,
  Subtitle,
} from './styles';

export function Statistics() {
  const [type] = useState<'NEUTRAL' | 'PRIMARY' | 'SECONDARY'>('PRIMARY');

  return (
    <Container type={type}>
      <HeaderWithBackButton
        type={type}
      >
        <Title>
          {'90,86%'}
        </Title>

        {
          type !== 'NEUTRAL' &&
          <Subtitle>
            {type === 'PRIMARY' 
              ? 'das refeições dentro da dieta' 
              : 'das refeições fora da dieta'}
          </Subtitle>
        }
      </HeaderWithBackButton>

      <Content>
        <PageTitle>
          {'Estatísticas gerais'}
        </PageTitle>

        <Data direction='column' style={{ height: 200 }}>
          <StatisticsCard
            title='22'
            subtitle='melhor sequência de pratos dentro da dieta'
            type='FULL'
            variant='NEUTRAL'
          />
          <StatisticsCard
            title='109'
            subtitle='refeições registradas'
            type='FULL'
            variant='NEUTRAL'
          />
        </Data>

        <Data direction='row'>
          <StatisticsCard
            title='99'
            subtitle='refeições dentro da dieta'
            type='HALF'
            variant='PRIMARY'
          />
          <StatisticsCard
            title='10'
            subtitle='refeições fora da dieta'
            type='HALF'
            variant='SECONDARY'
          />
        </Data>
      </Content>
    </Container>
  )
}