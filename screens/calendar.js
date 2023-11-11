import { Heading, Center } from "native-base";
import { useNavigation } from "@react-navigation/native";

const Calendar = () => {
  const navigation = useNavigation();
  
  return (
    <>
        <Center flex={1}>
            <Heading>Callel</Heading>
        </Center>
    </>
  );
};

export default Calendar;