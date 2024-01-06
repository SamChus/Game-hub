import {
    FaWindows,
    FaPlaystation,
    FaXbox,
    FaApple,
    FaLinux,
    FaAndroid
} from 'react-icons/fa'
import {MdPhoneIphone} from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Platform } from '../hooks/useGame'
import { HStack, Icon, Text } from '@chakra-ui/react';
import { IconType } from 'react-icons';

interface Props {
    platform: Platform[]
}

const PlatformIconList = ({platform}:Props) => {
    const iconMap: { [key: string]: IconType } = {
        playstation: FaPlaystation,
        pc: FaWindows,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux,
        ios: MdPhoneIphone,
        web: BsGlobe,
        android: FaAndroid
    }
  return (
    <HStack marginY={1}>
      {platform.map((platform) => (
        <Icon as={iconMap[platform.slug]} color='gray.500'/>
      ))}
    </HStack>
  );
}

export default PlatformIconList