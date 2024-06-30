import { Container, StatGroup, Stat, StatLabel, StatNumber, StatHelpText, Box, Heading } from "@chakra-ui/react"; // Make sure to import required components

export const MainStatistics = () => {
    return (
        <Container
            textColor={"white"}
            width={"100%"}
            pl={"20px"} // Add padding to the left to move content slightly to the right
        >
            <Box textAlign={"center"} mb={4}>
                <Heading textShadow="0 0 20px rgba(255, 255, 255, 1)">B3TRBite</Heading>
            </Box>

            {
            // use the useConnex hook to grab data from the blockchain
            }

            <StatGroup
                textAlign={"center"}
            >
                <Stat>
                    <StatLabel textShadow="0 0 20px rgba(255, 255, 255, 1)">Files Uploaded</StatLabel>
                    <StatNumber textShadow="0 0 20px rgba(255, 255, 255, 1)">345</StatNumber>
                    <StatHelpText textShadow="0 0 20px rgba(255, 255, 255, 1)">files</StatHelpText>
                </Stat>
                <Stat>
                    <StatLabel textShadow="0 0 20px rgba(255, 255, 255, 1)">Files Processed</StatLabel>
                    <StatNumber textShadow="0 0 20px rgba(255, 255, 255, 1)">345</StatNumber>
                    <StatHelpText textShadow="0 0 20px rgba(255, 255, 255, 1)">files</StatHelpText>
                </Stat>
                <Stat>
                    <StatLabel textShadow="0 0 20px rgba(255, 255, 255, 1)">Files Failed</StatLabel>
                    <StatNumber textShadow="0 0 20px rgba(255, 255, 255, 1)">345</StatNumber>
                    <StatHelpText textShadow="0 0 20px rgba(255, 255, 255, 1)">files</StatHelpText>
                </Stat>
            </StatGroup>
        </Container>
    );
};
