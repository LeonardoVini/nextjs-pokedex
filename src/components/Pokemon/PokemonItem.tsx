import { Badge, Flex, HStack, Image, Text } from "@chakra-ui/react";
import { IPokemon } from "../../pages";

interface PokemonProps {
  pokemon: IPokemon
}

export function PokemonItem({ pokemon }: PokemonProps) {
  return (
    <Flex
      as="button"
      direction="column"
      align="center"
      height="52"
      padding="6"
      bg="white"
      borderRadius="full"
      boxShadow="lg"
      rounded="lg"
      transition="all 0.2s"
      _hover={{ transform: "scale(1.05)", filter: "brightness(0.95)" }}
    >
      <Image boxSize="24" objectFit="contain" src={pokemon?.image_url} alt={pokemon.name} />
      <Text>{pokemon.id}</Text>
      <Text>{pokemon.name}</Text>
      <HStack spacing="4">
        {pokemon.types.map(type => (
          <Badge key={type.type.name} bg={type.color}>{type.type.name}</Badge>
        ))}
      </HStack>
    </Flex>
  );
}
