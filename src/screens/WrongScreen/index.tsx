import React from "react";

import {
    Container,
    Text,
    Text1,
    TextTitle,
    ContentButton,
    TextBold
} from "./styles";

import { Image } from "react-native";
import { Button } from "../../components/Button";

export default function WrongScreen() {
    return (

        <Container>
            <TextTitle>
                Que Pena!
            </TextTitle>

            <Text>
                Você
                <TextBold> saiu da dieta </TextBold>
                dessa vez,mas continue
            </Text>
            <Text1>  se esforçando e não desista!</Text1>

            <Image
                source={require('../../../assets/wrong.png')}
            />
            <ContentButton>
                <Button
                    title="Ir para a página inicial"
                />
            </ContentButton>
        </Container>
    )
}