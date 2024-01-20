import { Button, HStack, Heading, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react';
import useGenre, { Genre } from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';

interface Props {
  onSelectedGenre: (genre:Genre) => void,
  selectedGenre: Genre | null
}

const GenreList = ({selectedGenre ,onSelectedGenre}: Props) => {
    const { data, isLoading, error } = useGenre();

    if (error) return null
    if (isLoading) return <Spinner />

    
  return (
    <>
    <Heading fontSize="2xl" marginY={3}>Genre</Heading>
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
              objectFit="cover"
            />
            <Button
            fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"}
              onClick={() => onSelectedGenre(genre)}
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