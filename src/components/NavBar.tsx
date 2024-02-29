import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import React from "react";
import ColoeModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";



const NavBar = () => {
  return (
    <HStack padding="10px">
      <Link to="/" >
        <Image src={logo} boxSize="60px" objectFit="cover"/>
      </Link>
      <SearchInput />
      <ColoeModeSwitch />
    </HStack>
  );
};

export default NavBar;
