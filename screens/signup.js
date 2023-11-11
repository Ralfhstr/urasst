import React, { useState } from "react";
import { Heading, Image, HStack, Input, Button, Text, Box, VStack, FormControl, Center, ScrollView, Card,} from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Alert } from "react-native";

const Signup = () => {
  const [Username, setUsername] = React.useState("");
  const [Email, setEmail] = React.useState("");
  const [Password, setPassword] = React.useState("");
  const [ConPassword, setConPassword] = React.useState("");

  const navigation = useNavigation();

  const validate = () => {
    if (
      Username === "" ||
      Email === "" ||
      Password === "" ||
      ConPassword === ""
    ) {
      Alert.alert("Sign Up Gagal", "Silahkan mengisi ulang data!");
    } else {
      Alert.alert("Sign Up Berhasil", "Silahkan login!", [
        { text: "OK", onPress: () => navigation.navigate("Login") },
      ]);
    }
  };

  return (
    <SafeAreaView flex={1} backgroundColor={"#176B87"}>
      <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.goBack()}>
        <Box mr={"3"}>
          <Ionicons name="arrow-back-outline" size={32} color="#DDF2FD" />
        </Box>
      </TouchableOpacity>
      <ScrollView>
      <Center>
        <Heading color={"#DDF2FD"} fontSize={45} fontFamily={"heading"}>
          SIGN UP
        </Heading>
        <Image
          source={require("../assets/regis.png")}
          alt="regis Image"
          size={220}
        />
          <Box>
            <Card backgroundColor={"white"} w={400} borderTopRightRadius={20} 
            borderTopLeftRadius={20} borderTopWidth={20} borderColor={"#DDF2FD"}>
              <VStack width="90%" mx="5" maxW="500px">
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
                    onChangeText={(value) =>
                      setUsername({ ...Username, name: value })
                    }
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
                    onChangeText={(value) =>
                      setEmail({ ...Email, name: value })
                    }
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
                    onChangeText={(value) =>
                      setPassword({ ...Password, name: value })
                    }
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
                    onChangeText={(value) =>
                      setConPassword({ ...ConPassword, name: value })
                    }
                  />
                </FormControl>
                <Button
                  onPress={validate}
                  marginBottom={3}
                  marginTop={5}
                  color={"#176B87"}
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
            </Card>
          </Box>
      </Center>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;
