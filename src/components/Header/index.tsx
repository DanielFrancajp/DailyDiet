import {
    Container, UserInfo,BorderUserInfo

}
    from "./styles";

import { Image } from "react-native";

export function Header() {
    return (
        <Container>
            <Image
                source={require('../../../assets/Logo.png')}
            />
            <BorderUserInfo>
            <UserInfo
                source={require('../../../assets/User.png')}
            />
            </BorderUserInfo>
        </Container>
    )
}