import React, { useState, useEffect } from "react";
import { Box, Flex, Heading, Text, Button, useMediaQuery } from "@chakra-ui/react";

function Heroe() {
  const messages = [
    "ingenieros",
    "desarrolladores",
    "estudiantes",
    "entusiastas de la tecnología",
    "investigadores",
    "emprendedores",
    "creadores",
    "líderes",
    "innovadores",
    "voluntarios",
  ];

  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [currentMessage, setCurrentMessage] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    const interval = setInterval(() => {
      const message = messages[currentMessageIndex];

      if (isDeleting) {
        setCurrentMessage(message.substring(0, currentMessage.length - 1));
      } else {
        setCurrentMessage(message.substring(0, currentMessage.length + 1));
      }

      if (!isDeleting && currentMessage === message) {
        setIsDeleting(true);
        setTypingSpeed(50);
      } else if (isDeleting && currentMessage === "") {
        setIsDeleting(false);
        setCurrentMessageIndex((currentMessageIndex + 1) % messages.length);
        setTypingSpeed(100);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [currentMessage, currentMessageIndex, isDeleting, messages, typingSpeed]);

  return (
    <Box bg="brand.300" w="100" minH={isLargerThan768 ? "400px" : "300px"} display="flex"
    justifyContent="center" alignItems="center">
      <Flex
        direction="column"
        justify="center"
        align="center"
        minH="400px"
        py={isLargerThan768 ? "20" : "10"}
        px={{ base: "6", md: "8", lg: "16" }}
        color="white"
      >
        <Box
          textAlign="left"
          w="100%"
          fontSize={{ base: "lg", md: "xl" }}
          fontWeight="light"
          mb={{ base: "6", md: "8" }}
          color = "gray.200"
          letterSpacing={{ base: "wide", md: "normal" }}
        >
          Para <Text as="span">{currentMessage}</Text>
          <Box as="span" animation="blink-caret">
            |
          </Box>
        </Box>
        <Heading
          as="h1"
          size={isLargerThan768 ? "4xl" : "3xl"}
          fontWeight="extrabold"
          textAlign="center"
          mb={{ base: "4", md: "6", lg: "8" }}
          letterSpacing="tight"
          textAlign="left"
        >
          Bienvenido al Capítulo Estudiantil RAS IEEE DICIS
        </Heading>
        <Text
          fontSize={{ base: "lg", md: "xl" }}
          textAlign="center"
          mb={{ base: "4", md: "6", lg: "8" }}
        >
          Descubre cómo nuestro Capítulo puede ayudarte a desarrollar tus habilidades profesionales y conectarte con otros ingenieros apasionados por la tecnología y la innovación.
        </Text>
        <Button
          colorScheme="brand"
          size={isLargerThan768 ? "lg" : "md"}
          px="8"
          py="4"
          fontWeight="medium"
          borderColor="white"
          mt={isLargerThan768 ? 6 : 4}
        >
          Únete a nuestra comunidad
        </Button>
      </Flex>
    </Box>
  );
}

export default Heroe;
