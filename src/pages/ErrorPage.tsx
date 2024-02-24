import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();
  


  return (
    <>
      <NavBar />
      <Box ml={2}>
        <Heading>Ooops!</Heading>
        <Text>{isRouteErrorResponse(error) ? "Page not found" : "unexpected error occured"}</Text>
      </Box>
    </>
  );

}

export default ErrorPage