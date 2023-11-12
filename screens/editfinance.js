import { Heading, Center, HStack, Box, Text, Divider, Input } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { TouchableOpacity } from "react-native";
import { useState } from "react";
import Gap from "../components/Gap";


const Edit = () => {
  const navigation = useNavigation();
  const [item, setItem] = useState("kuota");
  const [nominal, setNominal] = useState("40.000");
  const [ket, setKet] = useState("kuota bulanan");
  const [tanggal, setTanggal] = useState("20 Oct 2020");
  const [metodePembayaran, setMetodePembayaran] = useState("Tunai");

  
  return (
    <SafeAreaView flex={1} backgroundColor={"#427D9D"}>
    <HStack flexDirection="row" justifyContent="space-between" bg="#427D9D" p={2}>
    <Box bg="#427D9D" alignItems="center">
    <TouchableOpacity acitveOpacity={0.5} onPress={() => navigation.navigate('Detail')}>
      <Ionicons name="arrow-back-outline" size={30} color="#fff" />
    </TouchableOpacity>
    </Box>
    <Box>
    <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate('Wallet')}>
    <Text fontSize={20} fontWeight="bold" color="#fff">Simpan</Text>
    </TouchableOpacity>
    </Box>
    </HStack>
    <Box bg="#fff" alignItems="center" rounded={30}>
        
          <Box alignItems="center">

          <Input
            fontSize={28}
            color="#333"
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
            <HStack space={2}>
            <Ionicons name="reader-outline" size={40} />
            <Input
            fontSize={20}
            color="#333"
            width={330}
            value={ket}
            onChangeText={(text) => setKet(text)}
            />
            </HStack>
            <Gap height={20}/>
            <HStack space={2}>
            <Ionicons name="calendar-outline" size={40} />
            <Input
            fontSize={20}
            color="#333"
            width={330}
            value={tanggal}
            onChangeText={(text) => setTanggal(text)}
            />
            </HStack>
            <Gap height={20}/>
            <HStack space={2}>
            <Ionicons name="wallet-outline" size={40} />
            <Input
            fontSize={18}
            color="#333"
            width={330}
            value={metodePembayaran}
            onChangeText={(text) => setMetodePembayaran(text)}
            />
            </HStack>
          </Box>
        </Box>
    </SafeAreaView>
  );
};

export default Edit;