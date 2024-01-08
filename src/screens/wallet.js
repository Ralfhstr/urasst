import { Heading, Center, TouchableOpacity, Text, Box, Button } from "native-base";
import { useNavigation } from "@react-navigation/native";

const Wallet = () => {
  const navigation = useNavigation();

  return (
    <>
      <Center flex={1}>
        <Heading>
          wallet
        </Heading>
      </Center>
    </>
  );
};

export default Wallet;