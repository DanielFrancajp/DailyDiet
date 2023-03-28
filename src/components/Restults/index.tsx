import {
    Container,
    TitleResults,
    SubTitleResults,
    Icon
}
    from "./styles";

import { ArrowUpRight } from 'phosphor-react-native'
import { View } from "react-native";

export function Results() {
    return (
        <Container>

            <Icon />
            <TitleResults>
                90,86%
            </TitleResults>

            <SubTitleResults>
                das refeições dentro da dieta
            </SubTitleResults>


        </Container>
    )
}