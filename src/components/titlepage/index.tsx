"use client"

import Head from "next/head"
import {
    Box,
    Heading,
    Container,
    Text,
    Button,
    Stack,
    Icon,
    useColorModeValue,
    createIcon,
} from "@chakra-ui/react"

export default function TitlePage(props: { title: string }) {
    return (
        <>
            <Container maxW={"3xl"}>
                <Stack textAlign={"center"} spacing={{ base: 8, md: 14 }} py={{ base: 20, md: 10 }}>
                    <Heading
                        fontWeight={500}
                        fontSize={{ base: "2xl", sm: "4xl", md: "4xl" }}
                        lineHeight={"80%"}
                    >
                        {props.title}
                        <br />
                    </Heading>
                </Stack>
            </Container>
        </>
    )
}
