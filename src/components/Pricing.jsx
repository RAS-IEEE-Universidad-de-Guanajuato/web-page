import React from "react";
import { chakra, Box, Flex, Link, Text, Stack } from "@chakra-ui/react";

export default function Pricing(){
  return (
    <Flex
      w="full"
      bg="#edf3f8"
      _dark={{ bg: "#3e3e3e" }}
      p={50}
      alignItems="center"
      justifyContent="center"
    >
      <Box
        maxW="7xl"
        px={4}
        mx="auto"
        textAlign={{ base: "left", md: "center" }}
        bg="white"
        _dark={{ bg: "gray.800" }}
        rounded="md"
        shadow="base"
      >
        <Box
          px={[0, , 4]}
          py={12}
          borderWidth="1"
          color="gray.400"
          _dark={{ color: "gray.700" }}
        >
            <chakra.h2
              _light={{ color: "brand.600" }}
              fontWeight="semibold"
              textTransform="uppercase"
              letterSpacing="wide"
            >
              Precios
            </chakra.h2>
          <Box w={["full", , "60%"]} mx="auto">
            <Text
              mb={2}
              fontSize="5xl"
              fontWeight={["bold", , "extrabold"]}
              lineHeight="tight"
            >
                $5
              <chakra.span
                fontSize="2xl"
                fontWeight="medium"
                color="gray.600"
                _dark={{ color: "gray.400" }}
              >
                {" "}
                por año
              </chakra.span>
            </Text>
            <chakra.p
              mb={6}
              fontSize={["lg", , "xl"]}
              color="gray.600"
              _dark={{ color: "gray.400" }}
            >
              Una membresía anual de la RAS IEEE te da acceso a todos los beneficios de la RAS IEEE y a la comunidad de la RAS IEEE.

            </chakra.p>
            <Stack
              display={["block", , "flex"]}
              spacing={2}
              justifyContent="center"
              direction={["column", , "row"]}
            >
              <Link
                w={["full", , "auto"]}
                display="inline-flex"
                alignItems="center"
                justifyContent="center"
                px={5}
                py={3}
                border="solid transparent"
                fontWeight="bold"
                rounded="md"
                shadow="md"
                _light={{ color: "white" }}
                bg="brand.500"
                _dark={{ bg: "brand.500" }}
                _hover={{
                  bg: "brand.700",
                  _dark: { bg: "brand.600" },
                }}
              >
                Registro
              </Link>
              <Link
                w={["full", , "auto"]}
                display="inline-flex"
                alignItems="center"
                justifyContent="center"
                px={5}
                py={3}
                border="solid transparent"
                fontWeight="bold"
                rounded="md"
                shadow="md"
                color="brand.500"
                bg="white"
                _hover={{
                  bg: "brand.50",
                }}
              >
                Contáctanos
              </Link>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

