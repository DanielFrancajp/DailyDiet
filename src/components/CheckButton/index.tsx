import {
    Container,
    Title,
    Icon
} from "./styles";

type Props = {
    title: string;
}


export default function CheckButton({ title, }: Props) {
    return (

        <Container>
            <Icon />
            <Title>
                {title}
            </Title>
        </Container>
    )
}