import {
    
  Image,
    
    Flex
  } from "@chakra-ui/react";
  
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
          height="450px" // Set a large height
          borderRadius={16} // Keep the border radius
        />
        </Flex>
      
    );
  };
  