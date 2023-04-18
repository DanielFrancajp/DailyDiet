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

import { Header } from '../../components/Header';
import { Results } from '../../components/Restults';
import { Button } from '../../components/Button';



export default function Home() {

    const navigation = useNavigation()

    function handleNewMeal() {
        navigation.navigate('rightscreen')
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



        </Container>
    )
}