import { Card, Flex } from "@chakra-ui/react";
import { Step } from "./Step";

const Steps = [
  {
    icon: "/steps/inimage1.png",
    title: "Purchase eco-friendly products",
    description: "Buy products that are eco-friendly and sustainable.",
  },
  {
    icon: "/steps/inimage2.png",
    title: "Upload the receipt",
    description: "Upload your receipt and AI will verify the products.",
  },
  {
    icon: "/steps/inimage3.png",
    title: "Earn rewards",
    description: "Earn B3TR for purchasing eco-friendly products.",
  },
];

export const Instructions = () => {
  return (
    <Card mt={3} w={"full"}>
      <Flex
        p={{ base: 4 }}
        w="100%"
        direction={{ base: "column"}}
      >
        {Steps.map((step, index) => (
          <Step key={index} {...step} />
        ))}
      </Flex>
    </Card>
  );
};
