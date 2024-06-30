import { Card, Flex } from "@chakra-ui/react";
import { Step } from "./Step";

const Steps = [
  {
    icon: "/steps/inimage1.png",
    title: "Purchase eco-friendly products",
    description: "Buy products that are eco-friendly and sustainable.",
    style: { width: "10px", height: "10px" } 
  },
  {
    icon: "/steps/inimage2.png",
    title: "Upload the receipt",
    description: "Upload your receipt and AI will verify the products.",
    style: { width: "50%", height: "50%" } 
  },
  {
    icon: "/steps/inimage3.png",
    title: "Earn rewards",
    description: "Earn B3TR for purchasing eco-friendly products.",
    style: { width: "50%", height: "50%" }
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
