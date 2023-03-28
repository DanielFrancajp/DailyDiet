import {
    Container, UserInfo,

}
    from "./styles";

import { Image } from "react-native";

export function Header() {
    return (
        <Container>
            <Image
                source={require('../../../assets/Logo.png')}
            />
            <Image
                style={{ width: 45, height: 45 }}
                source={require('../../../assets/User.png')}
            />
        </Container>
    )
}