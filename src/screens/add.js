import { Heading, Center } from "native-base";
import { useNavigation } from "@react-navigation/native";

const Create = () => {
  const navigation = useNavigation();
  
  return (
    <>
        <Center flex={1}>
            <Heading>Addd</Heading>
        </Center>
    </>
  );
};

export default Create;