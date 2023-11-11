import React, { useState } from "react";
import { Heading, Image, Input, Button, Box, VStack, FormControl, Center, ScrollView, Card } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Alert } from "react-native";

const Fpass = () => {
  const [NewPassword, setNewPassword] = React.useState("");
  const [ConPassword, setConPassword] = React.useState("");

  const navigation = useNavigation();

  const validate = () => {
    if (
      NewPassword === "" ||
      ConPassword === ""
    ) {
      Alert.alert("Ganti Password Gagal", "Silahkan mengisi ulang password!");
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
      <Center mt={60}>
        <Heading color={"#DDF2FD"} fontSize={40} fontFamily={"heading"}>
          Reset Password
        </Heading>
        <Image
          source={require("../assets/fp.png")}
          alt="Forgot Password Image"
          size={350}
        />
          {/* <Ionicons color={'#DDF2FD'} size={150} name="person"></Ionicons> */}
          <Box>
            <Card backgroundColor={"white"} w={400} h={335} borderTopRightRadius={20} 
            borderTopLeftRadius={20} borderTopWidth={20} borderColor={"#DDF2FD"}>
              <VStack width="90%" mx="5" maxW="500px">
                <FormControl>
                  <FormControl.Label
                    _text={{
                      bold: true,
                      fontSize: "md",
                    }}
                  >
                    New Password
                  </FormControl.Label>
                  <Input
                    placeholder="New Password"
                    onChangeText={(value) =>
                      setNewPassword({ ...NewPassword, name: value })
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
                  Reset Password
                </Button>
              </VStack>
            </Card>
          </Box>
      </Center>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Fpass;
