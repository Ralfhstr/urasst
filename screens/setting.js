import { Heading, Center } from "native-base";
import { useNavigation } from "@react-navigation/native";

const Setting = () => {
  const navigation = useNavigation();
  
  return (
    <>
        <Center flex={1}>
            <Heading>sett</Heading>
        </Center>
    </>
  );
};

export default Setting;