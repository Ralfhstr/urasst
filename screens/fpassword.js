import React, { useState } from "react";
import { Heading, Image, Input, Button, Box, VStack, Center, ScrollView, Card, FormControl } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Alert } from "react-native";

// Functional component for FormControl
const MyFormControl = ({ label, placeholder, value, onChangeText }) => {
  return (
    <FormControl>
      <FormControl.Label
        _text={{
          bold: true,
          fontSize: "md",
        }}
      >
        {label}
      </FormControl.Label>
      <Input
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
      />
    </FormControl>
  );
};

const Fpass = () => {
  const [NewPassword, setNewPassword] = React.useState("");
  const [ConPassword, setConPassword] = React.useState("");

  const navigation = useNavigation();

  const validate = () => {
    if (NewPassword === "" || ConPassword === "") {
      Alert.alert("Ganti Password Gagal", "Silahkan mengisi ulang password!");
    } else {
      Alert.alert("Ganti Password Berhasil", "Silahkan login!", [
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
          <Heading color={"#DDF2FD"} fontSize={40}>
            Reset Password
          </Heading>
          <Image
            source={require("../assets/fp.png")}
            alt="Forgot Password Image"
            size={350}
          />
          <Box>
            <Card
              backgroundColor={"white"}
              w={400}
              h={335}
              borderTopRightRadius={20}
              borderTopLeftRadius={20}
              borderTopWidth={20}
              borderColor={"#DDF2FD"}
            >
              <VStack width="90%" mx="5" maxW="500px">
                {/* Using MyFormControl component */}
                <MyFormControl
                  label="New Password"
                  placeholder="New Password"
                  value={NewPassword}
                  onChangeText={(value) =>
                    setNewPassword({ ...NewPassword, name: value })
                  }
                />
                <MyFormControl
                  label="Confirm Password"
                  placeholder="Confirm Password"
                  value={ConPassword}
                  onChangeText={(value) =>
                    setConPassword({ ...ConPassword, name: value })
                  }
                />
                <Button
                  onPress={validate}
                  marginBottom={3}
                  marginTop={5}
                  color={"#176B87"}
                  _text={{ fontWeight: "bold" }}
                  _pressed={{ backgroundColor: "#144B63" }}
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