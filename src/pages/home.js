import { Wrap } from "@chakra-ui/react";
import React, { useState } from "react";
import Cards from "../components/Cards";

function Home() {
  const [data, setData] = useState([1, 2, 3, 4, 5, 6]);
  return (
    <Wrap spacing="40px" justify="center" marginTop="30px">
      {data.map((item) => (
        <Cards />
      ))}
    </Wrap>
  );
}

export default Home;
