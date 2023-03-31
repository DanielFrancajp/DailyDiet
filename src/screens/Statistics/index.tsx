import {
    Container,
    ContainerStatistics,
    ButtonIcon,
    Icon,
    SubTitleResults,
    TitleResults,
    ContentTitle,
    ContentGeneral,
    Title,
    BoxGray600,
    BoxGreenMid,
    BoxRedMid,
    ContentBoxColors
} from "./styles";

import { StatusBar } from "react-native";


export default function Statistics() {
    return (
        <Container>
            <StatusBar
                barStyle="light-content"
                backgroundColor='transparent'
                translucent
            />
            <ContainerStatistics>
                <ButtonIcon>

                    <Icon />
                </ButtonIcon>

                <ContentTitle>
                    <TitleResults>
                        90,86%
                    </TitleResults>

                    <SubTitleResults>
                        das refeições dentro da dieta
                    </SubTitleResults>
                </ContentTitle>
            </ContainerStatistics>



            <ContentGeneral>
                <Title>
                    Estatísticas gerais
                </Title>

                <BoxGray600>
                    <TitleResults>
                        22
                    </TitleResults>
                    <SubTitleResults>
                        melhor sequência de pratos dentro da dieta
                    </SubTitleResults>
                </BoxGray600>

                <BoxGray600>
                    <TitleResults>
                        109
                    </TitleResults>
                    <SubTitleResults>
                        refeições registradas
                    </SubTitleResults>
                </BoxGray600>

                <ContentBoxColors>
                    <BoxGreenMid>
                        <TitleResults>
                            99
                        </TitleResults>
                        <SubTitleResults>
                            refeições dentro da dieta
                        </SubTitleResults>

                    </BoxGreenMid>

                    <BoxRedMid>
                        <TitleResults>
                            10
                        </TitleResults>
                        <SubTitleResults>
                            refeições dentro da dieta
                        </SubTitleResults>
                    </BoxRedMid>
                </ContentBoxColors>
            </ContentGeneral>

        </Container>
    )
}