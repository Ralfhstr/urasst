import { Box, Text, Button, Image, Center, HStack, ScrollView, VStack } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

const Awal = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView>
            <VStack m={5} h={'95%'} justifyContent={'space-between'}>
                <VStack>
                    <Text color={'#176B87'} fontSize={60} >Let's Start</Text>
                    <Text color={'#176B87'} fontSize={60} >UrAsst!</Text>
                </VStack>
                <Image source={require("../assets/urasst.png")} alt="urasst Image" size={350} mb={10} />
                <VStack space={3}>
                <TouchableOpacity>
                    <Button bg={'#176B87'} padding={1} borderRadius={40} onPress={() => navigation.navigate('Register')}>
                        <Text fontSize={22} fontWeight={"bold"} color={'#DDF2FD'}>Signup</Text>
                    </Button>
                </TouchableOpacity>
                <HStack space={2} justifyContent="center">
                    <Text color={'blue.400'}>Already have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text fontWeight={"bold"} color={'#176B87'}>Log in</Text>
                    </TouchableOpacity>
                </HStack>
                </VStack>
            </VStack>
        </SafeAreaView>
    );
};

export default Awal;