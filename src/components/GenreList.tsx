import { Button, HStack, Heading, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react';
import useGenre, { Genre } from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';

interface Props {
  onSelectedGenreId: (genre:number) => void,
  selectedGenreId: number
}

const GenreList = ({selectedGenreId ,onSelectedGenreId}: Props) => {
    const { data, isLoading, error } = useGenre();
    
  return (
    <>
    <Heading fontSize="2xl" marginY={3}>Genre</Heading>
    <List>
      {data?.results.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
              objectFit="cover"
            />
            <Button
            fontWeight={selectedGenreId === genre.id ? "bold" : "normal"}
              onClick={() => onSelectedGenreId(genre.id)}
              fontSize="lg"
              variant="link"
              whiteSpace="normal"
              textAlign="left"
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
    </>
  );
}

export default GenreList