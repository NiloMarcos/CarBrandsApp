import { Image } from "react-native";

import { useMyContext } from "../../context/UserContext";

import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { 
  Brand, 
  ButtnoProfile, 
  Container,
  Interprise, 
  ProfileContainer
} from "./styles";

export function Header() {
    const { logout } = useMyContext();

  return (
    <Container>
      <ProfileContainer>
        <Brand>
          <Image source={require("../../../assets/car.png")} style={{ width: 30, height: 30 }} />

          <Interprise>Motors Evolution</Interprise>
        </Brand>

        <ButtnoProfile onPress={() => logout()}>
          <MaterialIcons name="logout" size={24} color="black" />
        </ButtnoProfile>
      </ProfileContainer>
    </Container>
  );
}