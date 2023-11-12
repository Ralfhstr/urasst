import { Heading, Center, HStack, Box, Text, VStack } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';

const Setting = () => {
  const navigation = useNavigation();

  return (
    <>
      <Center flex={1}>
        <Box w={300} h={90} borderRadius={10} borderWidth={2} mt={3} p={3} backgroundColor={"info.100"} justifyContent={'center'}>
          <HStack>
            <Ionicons name="happy-outline" size={30}/>
            <VStack flex={1} ml={5}>
              <Text bold >Pilih Psikolog</Text>
              <Text>Bantuan Konseling</Text>
            </VStack>
            <Ionicons name="chevron-forward-outline" size={30}></Ionicons>
          </HStack>
        </Box>
      </Center>
    </>
  );
};

export default Setting;