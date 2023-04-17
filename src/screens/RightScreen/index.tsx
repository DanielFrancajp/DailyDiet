import React from "react";

import {
    Container,
    TextTitle,
    Text,
    TextBold,
    ContentButton,
    ContentImage
}
    from "./styles";

    import { Image } from "react-native";
import { Button } from "../../components/Button";

export default function RightScreen() {
    return (

        <Container>
        <TextTitle>
            Continue Assim!
        </TextTitle>
        <Text> Você continua 
        <TextBold> dentro da dieta. </TextBold>
         Muito bem!</Text>
         
        <ContentImage>
        <Image
        source={require("../../../assets/Right.png")}
        />
        </ContentImage>

        <ContentButton>
        <Button
        title="Ir para a página inicial"
        />
        </ContentButton>

        </Container>
    )
}