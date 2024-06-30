
import { DAppKitProvider } from "@vechain/dapp-kit-react";
import { ChakraProvider, Container, Flex, VStack, Button } from "@chakra-ui/react";
import {
  Dropzone,
  Footer,
  InfoCard,
  Instructions,
  Navbar,
  SubmissionModal,
} from "./components";
import { lightTheme } from "./theme";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { MainImage } from "./components/MainImage";
import { MainStatistics } from "./components/MainStatistics";
import { MainStatistics } from "./components/MainStatistics";

// RECaptcha V3 site key (https://developers.google.com/recaptcha/docs/v3)
const VITE_RECAPTCHA_V3_SITE_KEY = import.meta.env
  .VITE_RECAPTCHA_V3_SITE_KEY as string;

function App() {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={VITE_RECAPTCHA_V3_SITE_KEY}>
      <ChakraProvider theme={lightTheme}>
        <DAppKitProvider
          usePersistence
          requireCertificate={false}
          genesis="test"
          nodeUrl="https://testnet.vechain.org/"
          logLevel={"DEBUG"}
        >
          <Navbar />
          <Flex flex={1}>
            <Container
              mt={{ base: 4, md: 10 }}
              maxW={"container.xl"}
              mb={{ base: 4, md: 10 }}
              display={"flex"}
              flex={1}
              alignItems={"flex-start"} // Align items to the left
              justifyContent={"flex-start"}
              flexDirection={"row"}
            // width={"50%"} // Set container width to half
            >
              <VStack p={4}>
                <InfoCard />
                <Instructions />
                <Dropzone />
              </VStack>
              <VStack p={4} align={"center"} >
                <Flex>
                  <MainImage />
                </Flex>
                <MainStatistics />
          
     
              </VStack>

            </Container>
          </Flex>
          <Footer />
          {/* MODALS  */}
         
        </DAppKitProvider>
      </ChakraProvider>
    </GoogleReCaptchaProvider>
  );
}

export default App;
