import { TextInputProps } from "react-native";
import { useTheme } from "styled-components";
import { Container } from "./styles";

type Props = {
    title: string;
}


export default function ReduceInput({ title}: Props) {

    const { COLORS } = useTheme();



    return (
        <Container
            placeholder={title}
            placeholderTextColor={COLORS.GRAY_300}

        />
    )
}