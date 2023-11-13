import React, { useState } from "react";
import { Heading, Image, HStack, Input, Button, Text, Box, VStack, FormControl, Center, ScrollView, Card} from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
// import { color } from "native-base/lib/typescript/theme/styled-system";
// import Heading from "native-base/src/theme/components/heading";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const navigation = useNavigation();

  const handleLogin = () => {
    // Validate input
    const errors = {};
    if (!username.trim()) {
      errors.username = "Username is required";
    }
    if (!password.trim()) {
      errors.password = "Password is required";
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    navigation.navigate("Home");
  };

  return (
    <SafeAreaView flex={1} backgroundColor={"#176B87"}>
      <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.goBack()}>
        <Box mr={"3"}>
          <Ionicons name="arrow-back-outline" size={32} color="#DDF2FD" />
        </Box>
      </TouchableOpacity>
      <ScrollView>
      <Center mt={30}>
        <Heading color={"#DDF2FD"} fontSize={60} fontFamily={"heading"}>
          LOGIN
        </Heading>
        <Image
          source={require("../assets/login.png")}
          alt="login Image"
          size={270}
          mb={5}
        />
        <Box>
        <Card backgroundColor={"white"} w={400}  height={400} borderTopRightRadius={20} 
            borderTopLeftRadius={20} borderTopWidth={20} borderColor={"#DDF2FD"}>
          <VStack width="90%" mx="5" maxW="500px" mt={30}>
            <FormControl>
              <FormControl.Label
                _text={{
                  bold: true,
                  fontSize: "md",
                }}
              >
                Username
              </FormControl.Label>
              <Input
                placeholder="Username"
                onChangeText={(text) => setUsername(text)}
              />
              {errors.username && (
                <Text fontSize="sm" color="red.500">
                  {errors.username}
                </Text>
              )}
            </FormControl>
            <FormControl>
              <FormControl.Label
                _text={{
                  bold: true,
                  fontSize: "md",
                }}
                mt={5}
              >
                Password
              </FormControl.Label>
              <Input
                placeholder="Password"
                onChangeText={(text) => setPassword(text)}
                secureTextEntry
              />
              {errors.password && (
                <Text fontSize="sm" color="red.500">
                  {errors.password}
                </Text>
              )}
            </FormControl>
            <HStack justifyContent="flex-end">
              <TouchableOpacity onPress={() => navigation.navigate("FPass")}>
                <Text _text={{
                  fontWeight: "semi-bold",
                 }} color={"#176B87"}>
                  Forgot Password?
                </Text>
              </TouchableOpacity>
            </HStack>
            <Button
              onPress={handleLogin}
              marginBottom={3}
              marginTop={5}
              color={"#176B87"}
            >
              Login
            </Button>
            <HStack space={2} justifyContent="center">
              <Text color={"blue.400"}>
                Don't have an account?
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
                <Text 
                 _text={{
                  fontWeight: "bold",
                 }} color={"#176B87"}>
                  Sign Up
                </Text>
              </TouchableOpacity>
            </HStack>
          </VStack>
          </Card>
        </Box>
      </Center>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
