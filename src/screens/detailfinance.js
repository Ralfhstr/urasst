import {Box, Center, Text, HStack, Divider  } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import Gap from "../components/Gap";
import { TouchableOpacity } from "react-native";
import Edit from "./editfinance";



const Detail = () => {
  const navigation = useNavigation();
  
  return (
      <SafeAreaView flex={1} backgroundColor={"#427D9D"}>
      <HStack flexDirection="row" justifyContent="space-between" bg="#427D9D" p={2}>
      <Box bg="#427D9D" alignItems="center">
      <TouchableOpacity acitveOpacity={0.5} onPress={() => navigation.navigate('Wallet')}>
      <Ionicons name="arrow-back-outline" size={30} color="#fff" />
      </TouchableOpacity>
      </Box>
      <Box alignItems="center" paddingLeft={8}>
          <Text fontSize={40} color="#fff" fontWeight="bold">
            Detail
          </Text>
        </Box>
      <Box bg="#427D9D" alignItems="center" flexDirection="row">
      <TouchableOpacity acitveOpacity={0.5} onPress={() => navigation.navigate('Edit')}>
      <Ionicons name="create-outline" size={30} color="#fff"/>
      </TouchableOpacity>
      <TouchableOpacity acitveOpacity={0.5} onPress={() => navigation.navigate('Wallet')}>
      <Ionicons name="trash-outline" size={30} color="#fff" />
      </TouchableOpacity>
      </Box>
      </HStack>

      <Box flex={1} alignItems="center" bg>
        <Box bg="#fff" alignItems="center" rounded={30} >
          
          <Box alignItems="center">
            <Text fontSize={28} color="#333" fontWeight="bold">
            Kuota
            </Text>
            <Text fontSize={35} color="#ef4444" fontWeight="bold">
            40.000
            </Text>
          </Box>
          <Divider my="$0.2" />
          <Box marginRight={250} paddingTop={5} paddingBottom={5}>
            <HStack space={2}>
            <Ionicons name="reader-outline" size={20} />
            <Text fontSize={18} color="#333">
            Kuota bulanan 
            </Text>
            </HStack>
            <Gap height={20}/>
            <HStack space={2}>
            <Ionicons name="calendar-outline" size={20} />
            <Text fontSize={18} color="#333">
            20 Oct 2020 
            </Text>
            </HStack>
            <Gap height={20}/>
            <HStack space={2}>
            <Ionicons name="wallet-outline" size={20} />
            <Text fontSize={18} color="#333">
            Tunai
            </Text>
            </HStack>
          </Box>
        </Box>
      </Box>

    </SafeAreaView>
  );
};

export default Detail;