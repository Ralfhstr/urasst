import React, { useState } from "react";
import { Heading, Image, HStack, Input, Button, Text, Box, VStack, FormControl, Center, Modal, Alert } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { loginUser } from "../actions/AuthAction";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const navigation = useNavigation();

  const toggleAlert = (message) => {
    setShowAlert(!showAlert);
    setAlertMessage(message);
  };

  const handleLogin = () => {
    if (email && password) {
      loginUser(email, password)
        .then((user) => {
          // Pengguna berhasil login, lakukan sesuatu dengan data pengguna jika perlu
          navigation.replace("Tabs"); // Replace with the name of your home screen
        })
        .catch((error) => {
          // Terjadi kesalahan saat login, tampilkan pesan kesalahan
          console.log("Error", error.message);
          toggleAlert("Incorrect Email or Password", error.message);
        });
    } else {
      console.log("Error", "Data incomplete");
      toggleAlert("Data incomplete");
    }
  };

  return (
    <SafeAreaView flex={1} backgroundColor={"#176B87"}>
      <HStack justifyContent="flex-start" alignItems="center" m={5}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={40} color="white" />
        </TouchableOpacity>
        <Box alignItems="center" flex={1} mr={10}>
          <Heading color={"#DDF2FD"} fontSize={40}>
            LOGIN
          </Heading>
        </Box>
      </HStack>
      <Center>
        <Image
          source={require("../assets/login.png")}
          alt="login Image"
          size={200}
          mb={5}
        />
        <Box p={5} w={'100%'} h={500} backgroundColor={"white"} borderTopRadius={20}>
          <FormControl>
            <FormControl.Label
              _text={{
                bold: true,
                fontSize: "md",
              }}
            >
              Email
            </FormControl.Label>
            <Input
              placeholder="Email"
              onChangeText={(text) => setEmail(text)}
              value={email}
            />
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
              secureTextEntry={true}
              value={password}
            />
            {errors.password && (
              <Text fontSize="sm" color="red.500">
                {errors.password}
              </Text>
            )}
          </FormControl>
          <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate("Tabs")}>
            <Button
              onPress={handleLogin}
              marginBottom={3}
              marginTop={5}
              color={"#176B87"}
            >
              Login
            </Button>
          </TouchableOpacity>
          <HStack space={2} justifyContent="center">
            <Text color={"blue.400"}>
              Don't have an account?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
              <Text
                _text={{
                  fontWeight: "bold",
                }} color={"#176B87"}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </HStack>
          {showAlert && (
            <Modal isOpen={showAlert} onClose={() => toggleAlert()}>
              <Alert
                mx={4}
                action="error"
                variant="solid"
                bg="white"
                borderRadius={10}
                p={4}
              >
                <VStack alignItems="center">
                  <Ionicons name="alert-circle" size={60} color="red" />
                  <Text color="gray.700" mt={3} textAlign={"center"}>
                    {alertMessage}
                  </Text>
                </VStack>
              </Alert>
            </Modal>
          )}
        </Box>
      </Center>
    </SafeAreaView >
  );
};

export default Login;
