import { Image } from "react-native";

import { useForm, Controller } from "react-hook-form";

import { useMyContext } from '../../context/UserContext';

import {
  Container,
  ErrorMessage,
  Button,
  ButtonText,
  Input
} from "./styles";

export function SignIn() {
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      User: '',
      Password: ''
    }
  });

  const { login } = useMyContext();

  const onSubmit = ({ User, Password }: any) => {
    login(User, Password);
  };

  return (
    <Container>
      <Image source={require("../../../assets/car.png")} style={{ width: 100, height: 100, marginBottom: 50 }} />

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            placeholder="User"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholderTextColor="#919191"
          />
        )}
        name="User"
      />
      {errors.User && <ErrorMessage>User is required.</ErrorMessage>}

      <Controller
        control={control}
        rules={{
          required: true
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            placeholder="Password"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholderTextColor="#919191"
            secureTextEntry={true}
          />
        )}
        name="Password"
      />
      {errors.Password && <ErrorMessage>Password is required.</ErrorMessage>}

      <Button onPress={handleSubmit(onSubmit)} >
        <ButtonText>Submit</ButtonText>
      </Button>
    </Container>
  );
}
