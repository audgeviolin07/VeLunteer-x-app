import {
    Box,
    Card,
    HStack,
    Image,
    VStack,
    Text,
    Button,
    Flex,
    Link,
  } from "@chakra-ui/react";
  import { MdOutlineArrowOutward } from "react-icons/md";
  
  export const MainImage = () => {
    return (
        <Flex
              w={"half"}
              justifyContent={"space-between"}
              direction={{ base: "column", md: "row" }}
              alignItems={"center"}
            >

<Image
          src="/vlnlogo.png" // Replace with your image path
          alt="VLN Logo" // Provide an alt text for accessibility
          width="2000px" // Set a large width
          height="550px" // Set a large height
          borderRadius={16} // Keep the border radius
        />
        </Flex>
      
    );
  };
  