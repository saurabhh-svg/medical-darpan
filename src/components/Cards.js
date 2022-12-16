import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  SimpleGrid,
  Text,
  Button,
  Heading,
  Image,
  Stack,
  Divider,
  ButtonGroup,
} from "@chakra-ui/react";
import TelegramIcon from "@mui/icons-material/Telegram";
import photo from "../images/photo.png";
import "./Cards.css";
function Cards() {
  return (
    <div className="cards">
      <Card maxW="sm">
        <CardBody>
          <Image src={photo} alt="Fabiflu Tablets" borderRadius="lg" />
          <Stack mt="6" spacing="1">
            <Heading size="md">Favipiravir 400mg (Fabiflu) Tablets</Heading>
            <Text color="brown" fontSize="2xl" fontWeight="bold">
              Rs 1,775{" "}
              <Text as="span" color="grey" fontSize="xl">
                /stripe
              </Text>
            </Text>
            <Text>Glenmark Pharmaceuticals Limited</Text>
            <Text color="grey" fontSize="0.5xl">
              PARVAT PATIYA, SURAT, GUJARAT
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <TelegramIcon style={{ color: "green" }} fontSize="large" />
            <Button variant="ghost" colorScheme="green" fontSize="2xl">
              Contact Supplier
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Cards;
