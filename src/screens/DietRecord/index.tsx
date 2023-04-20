import {
    ButtonIcon,
    Container,
    ContainerTitle,
    Icon,
    Title,
    ContentTitle,
    ContainerBody,
    TitleBody,
    ContentBody,
    ContentTitleBody,
    ContentLegs
} from "./styles";

import { View } from 'react-native';

import Input from "../../components/Input";
import WideInput from "../../components/WideInput";
import ReduceInput from "../../components/ReduceInput";
import CheckButton from "../../components/CheckButton";
import { Button } from "../../components/Button";

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

                <TitleBody>
                    Nome
                </TitleBody>

                <Input 
                title="Digite aqui"
                />

                <TitleBody>
                    Descrição
                </TitleBody>

                <WideInput
                title="Digite aqui" 
                />


                <ContentTitleBody>
                    <TitleBody>
                        Data
                    </TitleBody>
                    <View style={{ marginLeft: 30 }}>
                        <TitleBody>
                            Hora
                        </TitleBody>
                    </View>
                    <View />

                </ContentTitleBody>

                <ContentBody>

                    <ReduceInput
                    title="01/01/2023"
                    />
                    <View />
                    <ReduceInput
                    title="20:00"
                    />
                </ContentBody>

                <TitleBody>
                    Está dentro da dieta?
                </TitleBody>

                <ContentBody>

                    <CheckButton
                        title={'Sim'}
                    />

                    <View />

                    <CheckButton
                        title={'Não'}
                    />

                </ContentBody>

                <ContentLegs>
                <Button
                onPress={()=>{}}
                title="Cadastrar refeição"
                />
                </ContentLegs>

            </ContainerBody>


            









        </Container>
    )
}