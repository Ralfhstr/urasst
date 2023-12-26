import { Heading, Center, HStack, Box, Text, Divider, Input } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { TouchableOpacity } from "react-native";
import { useState } from "react";
import Gap from "../components/Gap";


const Edit = () => {
  const navigation = useNavigation();
  const [item, setItem] = useState("Breakfast");
  const [nominal, setNominal] = useState("-$30");
  const [tanggal, setTanggal] = useState("14 Sept");


  
  return (
    <SafeAreaView flex={1} >
    <HStack flexDirection="row" justifyContent="space-between"  p={2}>
    <Box alignItems="center">
    <TouchableOpacity acitveOpacity={0.5} onPress={() => navigation.navigate('Wallet')}>
      <Ionicons name="arrow-back-outline" size={30} color="#427D9D" />
    </TouchableOpacity>
    </Box>
    <Box>
    <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate('Wallet')}>
    <Text fontSize={20} fontWeight="bold" color="#427D9D">Simpan</Text>
    </TouchableOpacity>
    </Box>
    </HStack>
    
    <Center>
    <Box p={4} mt={5} rounded="2xl" overflow="hidden" borderColor="white" borderWidth="1" backgroundColor={'white'} shadow={1}>
      <Box alignItems="center">
        <Input
          fontSize={28}
          color="#427D9D"
          fontWeight="bold"
          textAlign="center"
          width={300}
          value={item}
          onChangeText={(text) => setItem(text)}
        />
        <Input
          fontSize={35}
          color="#ef4444"
          fontWeight="bold"
          textAlign="center"
          width={300}
          value={nominal}
          onChangeText={(text) => setNominal(text)}
        />
        </Box>
        <Divider my="$0.2" />
        <Box paddingTop={5} paddingBottom={5}>
          <Gap height={20}/>
          <HStack space={2}>
          <Ionicons name="calendar-outline" size={40} color={"#427D9D"}/>
          <Input
          fontSize={20}
          color="#427D9D"
          width={330}
          value={tanggal}
          onChangeText={(text) => setTanggal(text)}
          />
          </HStack>  
      </Box>
    </Box>
    </Center>

    </SafeAreaView>
  );
};


export default Edit;