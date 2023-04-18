import {
    Container, Title,
} from "./styles";


type Props = {
    title: string;
    onPress: () => void;
}

export function Button({ title,onPress }: Props) {
    return (
        <Container>
            <Title>
                {title}
            </Title>
        </Container>
    )
}