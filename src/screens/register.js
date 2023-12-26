import React, { useState } from "react";
import { Heading, Image, HStack, Input, Button, Text, Box, VStack, FormControl, Center, ScrollView, Modal, Alert } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { registerUser } from "../actions/AuthAction";

const Register = ({ navigation }) => {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [nohp, setNohp] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const toggleAlert = (message) => {
    setShowAlert(!showAlert);
    setAlertMessage(message);
  };

  const toggleSuccessModal = () => {
    setShowSuccessModal(!showSuccessModal);
  };


  const onRegister = async () => {
    if (nama && email && nohp && password && confirmPassword) {
      if (password !== confirmPassword) {
        toggleAlert("Password and Confirm Password do not match");
        return;
      }

      const data = {
        nama: nama,
        email: email,
        nohp: nohp,
        status: "user",
      };

      console.log(data);

      try {
        const user = await registerUser(data, password);
        console.log("Registration successful");
        toggleSuccessModal();
        setTimeout(() => {
          navigation.replace("Login");
        }, 2000);
      } catch (error) {
        console.log("Error", error.message);
        toggleAlert("Data does not match the format", error.message);
      }
    } else {
      console.log("Error", "Data incomplete");
      toggleAlert("Data incomplete");
    }
  };

  return (
    <SafeAreaView backgroundColor={"#176B87"}>
      <ScrollView>
        <HStack justifyContent="flex-start" alignItems="center" m={5}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back-outline" size={40} color="white" />
          </TouchableOpacity>
          <Box alignItems="center" flex={1} mr={10}>
            <Heading color={"#DDF2FD"} fontSize={40}>
              SIGN UP
            </Heading>
          </Box>
        </HStack>
        <Center>
          <Image
            source={require("../assets/regis.png")}
            alt="regis Image"
            size={200}
          />
          <Box p={5} w={'100%'} backgroundColor={"white"} borderTopRadius={20}>
            <VStack>
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
                  onChangeText={(nama) => setNama(nama)}
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
                  Email
                </FormControl.Label>
                <Input
                  placeholder="Email"
                  onChangeText={(email) => setEmail(email)}
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
                  Phone
                </FormControl.Label>
                <Input
                  placeholder="Phone"
                  onChangeText={(nohp) => setNohp(nohp)}
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
                  onChangeText={(password) => setPassword(password)}
                  secureTextEntry={true}
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
                  Confirm Password
                </FormControl.Label>
                <Input
                  placeholder="Confirm Password"
                  onChangeText={(confirmPassword) =>
                    setConfirmPassword(confirmPassword)
                  }
                  secureTextEntry={true}
                  value={confirmPassword}
                />
              </FormControl>
              <Button
                marginBottom={3}
                marginTop={5}
                color={"#176B87"}
                onPress={() => {
                  onRegister();
                }}
              >
                Register
              </Button>
              <HStack space={2} justifyContent="center">
                <Text color={"blue.400"}>
                  Already have an account?
                </Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Login")}
                >
                  <Text fontWeight={"bold"} color={"#176B87"}>
                    Log in
                  </Text>
                </TouchableOpacity>
              </HStack>
            </VStack>
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

            {showSuccessModal && (
              <Modal isOpen={showSuccessModal} onClose={() => toggleSuccessModal()}>
                <Alert
                  mx={4}
                  action="success"
                  variant="solid"
                  bg="white"
                  borderRadius={10}
                  p={4}
                >
                  <VStack alignItems="center">
                    <Ionicons name="checkmark-circle" size={60} color="green" />
                    <Text color="gray.700" mt={3} textAlign={"center"}>
                      Registration Successful!
                    </Text>
                  </VStack>
                </Alert>
              </Modal>
            )}
          </Box>
        </Center>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;