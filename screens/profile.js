import { Heading, Center } from "native-base";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  const navigation = useNavigation();
  
  return (
    <>
        <Center flex={1}>
            <Heading>proff</Heading>
        </Center>
    </>
  );
};

export default Profile;