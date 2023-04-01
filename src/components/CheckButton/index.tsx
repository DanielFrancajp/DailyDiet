import {
    Container,
    Title,
} from "./styles";

type Props = {
    title: string;
}


export default function CheckButton({ title, }: Props) {
    return (

        <Container>
            <Title>
                {title}
            </Title>
        </Container>
    )
}