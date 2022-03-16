import { Flex, HStack, Image, Badge, Text, Heading, CircularProgress, CircularProgressLabel, SimpleGrid, Icon, theme } from "@chakra-ui/react";

import { IPokemon } from "../../models/IPokemon";

import { MdHeight } from 'react-icons/md';
import { GiWeight } from 'react-icons/gi';
import { GrVulnerability } from 'react-icons/gr';
import { IoStatsChartSharp } from 'react-icons/io5';
import { BsCheckCircle } from 'react-icons/bs';

interface PokemonInfoProps {
  pokemon: IPokemon;
}

export function PokemonInfo({ pokemon }: PokemonInfoProps) {
  console.log(pokemon.evolution_chain);

  return (
    // <Flex sx={{ position: 'sticky', top: '120' }} ml="8" direction="column" align="center" height="3xl" minWidth={400} bg="white" mt="32" borderRadius="16">
    <Flex position="relative" ml="8" direction="column" align="center" height="fit-content" minWidth={400} bg="white" mt="32" borderRadius="16">
      {/* <Flex position="absolute" left="6" top="6" direction="column" fontSize="12">
        <Text>Baby {pokemon.is_baby && <Icon as={BsCheckCircle} />}</Text>
        <Text>Legendary {pokemon.is_legendary && <Icon as={BsCheckCircle} />}</Text>
        <Text>Mythical {pokemon.is_mythical && <Icon as={BsCheckCircle} />}</Text>
      </Flex> */}
      
      <Image mt="-32" boxSize="64" src={pokemon.image_url} alt={pokemon.name} />
      
      <Text color="gray.400" mt="4">{pokemon.id}</Text>
      
      <Text as="strong" fontSize={"24"}>{pokemon.name}</Text>
      
      <HStack spacing="4">
        {pokemon.types.map(type => (
          <Badge key={type.type.name} bg={type.color} textAlign="center" borderRadius="4">{type.type.name}</Badge>
        )) }
      </HStack>

      <Heading as="h3" fontSize={"16"} mt="4">POKEDÉX ENTRY</Heading>
      <Text width={300} textAlign="center" mt="2" fontWeight="semibold">{pokemon.flavor_text}</Text>

      <Heading as="h3" fontSize={"16"} mt="4">ABILITIES</Heading>
      <SimpleGrid columns={pokemon.abilities.length >= 2 ? 2 : 1} spacing="4" mt="4">
        {pokemon.abilities.map(item => (
          <Badge key={item.ability.name} borderRadius="full" variant="outline" bg="gray.50" fontWeight={700} textAlign="center" width="32" p="2">
            {item.ability.name}
          </Badge>
        )) }
      </SimpleGrid>

      <SimpleGrid columns={2} spacing="4" mt="4">
        <Flex flexDirection="column" textAlign={"center"}>
          <Flex align="center" justify="center">
            <Heading as="h3" fontSize={"16"}>HEIGHT</Heading>
            <Icon as={MdHeight} />
          </Flex>
          <Badge textTransform="lowercase" borderRadius="full" variant="outline" bg="gray.50" fontWeight={700} textAlign="center" width="32" p="2">
            {pokemon.height}
          </Badge>
        </Flex>

        <Flex flexDirection="column" textAlign={"center"}>
          <Flex align="center" justify="center">
            <Heading as="h3" fontSize={"16"}>WEIGHT</Heading>
            <Icon as={GiWeight} />
          </Flex>
          <Badge textTransform="lowercase" borderRadius="full" variant="outline" bg="gray.50" fontWeight={700} textAlign="center" width="32" p="2">
            {pokemon.weight}
          </Badge>
        </Flex>

        <Flex flexDirection="column" textAlign={"center"}>
          <Flex align="center" justify="center">
            <Heading as="h3" fontSize={"16"}>WEAKNESSES</Heading>
            <Icon as={GrVulnerability} />
          </Flex>
          <Badge textTransform="lowercase" borderRadius="full" variant="outline" bg="gray.50" fontWeight={700} textAlign="center" width="32" p="2">
            1.7m
          </Badge>
        </Flex>

        <Flex flexDirection="column" textAlign={"center"}>
          <Flex align="center" justify="center">
            <Heading as="h3" fontSize={"16"}>BASE EXP</Heading>
            <Icon as={IoStatsChartSharp} />
          </Flex>
          <Badge textTransform="lowercase" borderRadius="full" variant="outline" bg="gray.50" fontWeight={700} textAlign="center" width="32" p="2">
            {pokemon.base_experience}
          </Badge>
        </Flex>
      </SimpleGrid>

      <Heading as="h3" fontSize={"16"} mt="4">STATS</Heading>
      <SimpleGrid columns={6} spacing="4" mt="4">
        {pokemon.stats.map(item => (
          <Flex key={item.stat.name} direction="column" align={"center"}>
            <CircularProgress value={item.base_stat} color={item.stat.color} size="36px">
              <CircularProgressLabel>{item.base_stat}</CircularProgressLabel>
            </CircularProgress>

            <Text fontSize={"12"}>{item.stat.label}</Text>
          </Flex>
        )) }
      </SimpleGrid>

      { pokemon.evolution_chain.length >= 2 && (
        <>
          <Heading as="h3" fontSize={"16"} mt="4">EVOLUTION</Heading>
          <HStack>
            {pokemon.evolution_chain.map(item => (
              <Image key={item.species_name} src={item.image_url} alt={item.species_name} boxSize="16" />
            )) }
          </HStack>
        </>
      )}
      
    </Flex>
  )
}