import { Box, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props{
    term: string;
    children: ReactNode | ReactNode[]
}

const DefinitionText = ({term, children}:Props) => {
  return (
    <Box>
      <Heading as={"dd"} color={"gray.600"} fontSize={"xm"} mt={8}>
        {term}
      </Heading>
      <dt>{children}</dt>
    </Box>
  );
}

export default DefinitionText