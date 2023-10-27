import { Box, Heading, Text, Input, Button } from "@chakra-ui/react"
import { CheckCircleIcon } from "@chakra-ui/icons"
import React, { useEffect, useState } from "react"

const Index = (props: { title?: any }) => {
    const [title, setTitle] = useState<string>(props.title)
    const [lengthTitle, setLengthTitle] = useState(0)
    useEffect(() => {
        setLengthTitle(props.title.length)
    }, [props.title])

    return (
        <Box textAlign="center" py={10} px={6}>
            <CheckCircleIcon boxSize={"50px"} color={"green.500"} />
            <Heading as="h2" size="xl" mt={6} mb={2}>
                {title}
            </Heading>
            <Text color={"gray.500"}>Nombre de caractère : {lengthTitle}</Text>
            <Input
                onChange={e => {
                    e.target.value.length == 0 ? setTitle(props.title) : setTitle(e.target.value)
                }}
                placeholder="Basic usage"
            />
        </Box>
    )
}

export default Index
