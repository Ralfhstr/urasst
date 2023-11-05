import { Heading, Center } from "native-base";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();
  
  return (
    <>
        <Center flex={1}>
            <Heading>Homeee</Heading>
        </Center>
    </>
  );
};

export default Home;