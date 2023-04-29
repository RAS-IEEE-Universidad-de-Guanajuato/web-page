import React from 'react';
import Heroe from '../../components/Heroe';
import Features from '../../components/Features';
import Pricing from '../../components/Pricing';
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Stack,
  SimpleGrid,
  Image,
} from '@chakra-ui/react';
import { FaLaptopCode } from 'react-icons/fa';
import { IoIosRocket } from 'react-icons/io';
import { MdPeople } from 'react-icons/md';
import { GiGraduateCap } from 'react-icons/gi';

const Home = () => {
  return (
    <>
        <Heroe />
        <Features />
        <Pricing />
    </>
);
};


export default Home;