import { Container, SimpleGrid, Box, Flex, Text, UnorderedList, ListItem } from "@chakra-ui/react"
import React from "react"

export const LandingBody = () => (
    <Container>
        <SimpleGrid columns={2} spacing={10} p="64px 24px">
            <Box>
                <Box
                    backgroundColor="gray.300"
                    width="100%"
                    height="225px"
                    borderRadius="16px"
                ></Box>
            </Box>
            <Flex backgroundColor="tomato" flexDirection="column" justifyContent="center">
                <Text mb='8px'>Including the market standard technologies</Text>
                <UnorderedList>
                    <ListItem>Next.js</ListItem>
                    <ListItem>ChakraUI</ListItem>
                    <ListItem>Database</ListItem>
                </UnorderedList>
            </Flex>  
        </SimpleGrid>
    </Container>
)