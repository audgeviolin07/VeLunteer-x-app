import { Container, Stat, StatLabel, StatNumber, StatHelpText, StatGroup } from "@chakra-ui/react";

export const MainStatistics = () => {
    return (
        <Container
            textColor={"white"}
            width={"100%"}
        >
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