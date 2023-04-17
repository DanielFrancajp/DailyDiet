import { useState } from 'react';

import {
    Container,
    ContentTitle,
    Title,
    Dates,
    ContentDates
}
    from './styles';

import { Header } from '../../components/Header';
import { Results } from '../../components/Restults';
import { Button } from '../../components/Button';



export default function Home() {

    const [group, setGroup] = useState<string[]>(['']);

    return (
        <Container>

            <Header />
            <Results />
            <ContentTitle>
                <Title>
                    Refeições
                </Title>
            </ContentTitle>
            <Button
                title=' + Nova Refeição'
            />

            <ContentDates>
                <Dates>
                    28.03.23
                </Dates>
            </ContentDates>

          

        </Container>
    )
}