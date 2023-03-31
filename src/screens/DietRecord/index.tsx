import {
    ButtonIcon,
    Container,
    ContainerTitle,
    Icon,
    Title,
    ContentTitle,
    ContainerBody
} from "./styles";

import Input from "../../components/Input";

export default function DietRecord() {
    return (
        <Container>

            <ContainerTitle>
                <ButtonIcon>
                    <Icon />
                </ButtonIcon>
                <ContentTitle>
                    <Title>
                        Nova Refeição
                    </Title>
                </ContentTitle>
            </ContainerTitle>

            <ContainerBody>
                <Title>
                    Nome
                </Title>
                
                <Input />
            </ContainerBody>











        </Container>
    )
}