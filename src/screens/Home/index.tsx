import { useNavigation } from '@react-navigation/native'

import {
    Container,
    ContentTitle,
    Title,
    Dates,
    ContentDates,
    ContenTitle
}
    from './styles';

    import { SectionList,View, Text } from 'react-native'

import { Header } from '../../components/Header';
import { Results } from '../../components/Restults';
import { Button } from '../../components/Button';



export default function Home() {

    const navigation = useNavigation()

    const DATA = [
        {
          title: '20/05/2023',
          data: [
            {
                hora: '12:00',
                comida: 'cuscuz'
            }
          ],
        },
        {
            title: '21/05/2023',
            data: [
              {
                  hora: '12:00',
                  comida: 'arroz'
              }
            ],
          },
          {
            title: '22/05/2023',
            data: [
              {
                  hora: '12:00',
                  comida: 'feijoao'
              }
            ],
          },
          {
            title: '23/05/2023',
            data: [
              {
                  hora: '12:00',
                  comida: 'mascarrao'
              }
            ],
          },
      ];

    function handleNewMeal() {
        navigation.navigate('dietrecord')
    }

    return (
        <Container>

            <Header />
            <Results />
            <ContentTitle>
                <Title>
                    Refeições
                </Title>
            </ContentTitle>

            <ContenTitle>
                <Button
                    title=' + Nova Refeição'
                    onPress={handleNewMeal}

                />
            </ContenTitle>

            <ContentDates>
                <Dates>
                    28.03.23
                </Dates>
            </ContentDates>

            <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item.hora + index}
      renderItem={({item}) => (
        <View style={{backgroundColor: "#c8c8c8", justifyContent: 'center', flexDirection: 'row'}} >
          <Text >{item.hora}</Text>
          <Text >{item.comida}</Text>
        </View>
      )}
      renderSectionHeader={({section: {title}}) => (
        <Text style={{backgroundColor: "#c2c2c2", textAlign: 'center'}} >{title}</Text>
      )}
    />


        </Container>
    )
}