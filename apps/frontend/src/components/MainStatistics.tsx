import { Container, Stat, StatLabel, StatNumber, StatHelpText, StatGroup } from "@chakra-ui/react";

export const MainStatistics = () => {
    return (
        <Container
            mt={{ base: 4, md: 10 }}
            maxW={"container.xl"}
            mb={{ base: 4, md: 10 }}
            display={"flex"}
            flex={1}
            alignItems={"flex-center"} // Align items to the left
            justifyContent={"flex-center"}
            flexDirection={"column"}
        >
            {
            // use the useConnex hook to grab data from the blockchain
            }

            <StatGroup>
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