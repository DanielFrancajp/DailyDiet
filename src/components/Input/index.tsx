import { useTheme } from "styled-components";
import { Container } from "./styles";


type Props = {
    title: string;
}

export default function Input({ title}:Props) {

    const { COLORS } = useTheme();



    return (
        <Container
            placeholder={title}
            placeholderTextColor={COLORS.GRAY_300}

        />
    )
}