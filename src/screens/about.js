import { TouchableOpacity, SafeAreaView } from 'react-native';
import { Box, Center, Heading, Text, HStack, VStack, Card, Divider, Image, ScrollView } from 'native-base';
import { NativeBaseProvider } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Gap from '../components/Gap';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const About = () => {
  const navigation = useNavigation();
  const [articleList, setArticleList] = useState([]);

  const fetchArticleList = () => {
    fetch('https://api-berita-indonesia.vercel.app/cnn/ekonomi')
    .then(response => response.json())
    .then(data => {
        // Pastikan data.article sudah didefinisikan dan berupa array
        if (data.article && Array.isArray(data.article)) {
          setArticleList(data.article);
        } else {
          console.error('Error fetching data from API: "article" is undefined or not an array');
        }
      })  
    .catch(error => console.log('error', error));
  };

  useEffect(() => {
    fetchArticleList();
  }, []);

  return (
    <NativeBaseProvider>
      <SafeAreaView flex={1}>
        <HStack ml={2}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Ionicons name="arrow-back-outline" size={40} color={'#176B87'} />
          </TouchableOpacity>
          <Box w={'78%'} alignItems={'center'}>
            <Heading mt={2} color={'#176B87'}>
              About
            </Heading>
          </Box>
        </HStack>
        <Box flexDirection={'row'} mt={5} bgColor={'info.200'} py={'1'}>
          <ScrollView horizontal={true}>
            {articleList.map((article, index) => (
              <Card key={index}>
                <Image
                  source={{ uri: article.featured_image_thumbnail_uri }}
                  w="40"
                  h="24"
                  alt="Article Image"
                  mb={'2'}
                />
                <Center>
                  <Heading size={'sm'}>{article.post_title}</Heading>
                  <Text mt={2}>{article.excerpt_first_sentence}</Text>
                </Center>
              </Card>
            ))}
          </ScrollView>
        </Box>
        <ScrollView>
          <Box flex={1} mb={20} mt={7} ml={5} mr={5} backgroundColor={'white'} borderWidth={1} borderColor={'white'} borderRadius={10}>
            <VStack mt={4} ml={2}>
              <Heading>App Description</Heading>
              <Text mt={3}>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              </Text>
              <Divider mt={5} />
              <Gap height={10} />
              <Heading mb={3}>App Info</Heading>
              <VStack mr={2}>
                <HStack mt={2} justifyContent={'space-between'}>
                  <Heading size={'xs'}>Version</Heading>
                  <Heading size={'xs'}>v0.0.1</Heading>
                </HStack>
                <HStack mt={1} justifyContent={'space-between'}>
                  <Heading size={'xs'}>Update on</Heading>
                  <Heading size={'xs'}>14 December 2023</Heading>
                </HStack>
                <HStack mt={1} mb={10} justifyContent={'space-between'}>
                  <Heading size={'xs'}>Created by</Heading>
                  <Heading size={'xs'}>Kelompok 3</Heading>
                </HStack>
              </VStack>
            </VStack>
          </Box>
        </ScrollView>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

export default About;