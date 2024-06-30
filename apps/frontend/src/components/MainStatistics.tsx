import { Container, StatGroup, Stat, StatLabel, StatNumber, StatHelpText, Box, Heading } from "@chakra-ui/react"; // Make sure to import required components

export const MainStatistics = () => {
    return (
        <Container
            textColor={"white"}
            width={"100%"}
            pl={"20px"} // Add padding to the left to move content slightly to the right
        >
            <Box textAlign={"center"} mb={4}>
                <Heading>B3TRBite</Heading>
            </Box>

            {
            // use the useConnex hook to grab data from the blockchain
            }

            <StatGroup
                textAlign={"center"}
            >
                <Stat>
                    <StatLabel>Files Uploaded</StatLabel>
                    <StatNumber>345</StatNumber>
                    <StatHelpText>files</StatHelpText>
                </Stat>
                <Stat>
                    <StatLabel>Files Processed</StatLabel>
                    <StatNumber>345</StatNumber>
                    <StatHelpText>files</StatHelpText>
                </Stat>
                <Stat>
                    <StatLabel>Files Failed</StatLabel>
                    <StatNumber>345</StatNumber>
                    <StatHelpText>files</StatHelpText>
                </Stat>
            </StatGroup>
        </Container>
    );
};
