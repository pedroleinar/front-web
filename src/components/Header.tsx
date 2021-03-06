import {
  Flex,
  Icon,
  IconButton,
  Stack,
  Center,
  Tooltip,
  Text,
  HStack,
  ListItem,
  UnorderedList,
} from '@chakra-ui/react';
import { IoCartSharp } from 'react-icons/io5';
import { FaStoreAlt } from 'react-icons/fa';
import { FiChevronLeft } from 'react-icons/fi';
import { Link, useRouteMatch } from 'react-router-dom';
import { useCart } from '../hooks/useCart';

export const Header = () => {
  const { cart } = useCart();

  const isCart = useRouteMatch('/checkout');

  return (
    <Flex
      justifyContent="flex-end"
      px="28"
      bg="gray.200"
      as="header"
      h="28"
      align="center"
      position="relative"
    >
      {!!isCart && (
        <IconButton
          as={Link}
          to="/"
          bg="none"
          aria-label="voltar"
          marginRight="auto"
          icon={<Icon boxSize="8" as={FiChevronLeft} />}
        />
      )}

      <Icon
        position="absolute"
        left="50%"
        transform="auto"
        translateX="-50%"
        color="blackAlpha.800"
        boxSize="14"
        as={FaStoreAlt}
      />

      {!isCart && (
        <Tooltip
          isDisabled={cart.length === 0}
          bg="gray.200"
          border="1px"
          borderColor="gray.400"
          borderRadius="4"
          color="gray.900"
          fontSize="md"
          label={
            <UnorderedList textColor="gray.900">
              {cart.map((product) => (
                <ListItem key={product.id}>
                  <HStack borderBottom="ActiveBorder">
                    <Text>{product.amount}</Text>
                    <Text>{product.name}</Text>
                  </HStack>
                </ListItem>
              ))}
            </UnorderedList>
          }
        >
          <Stack
            direction="row"
            alignItems="center"
            position="relative"
            as={Link}
            to="/checkout"
          >
            (
            <IconButton
              aria-label="cart"
              boxSize="16"
              fontSize="x-large"
              bg="none"
              color="blackAlpha.800"
              icon={<Icon as={IoCartSharp} />}
            />
            )
            <Center
              border="2px"
              bg="white"
              borderColor="blackAlpha.800"
              color="blackAlpha.900"
              borderRadius="100%"
              boxSize="6"
              top="1"
              right="1"
              position="absolute"
            >
              {cart.length}
            </Center>
          </Stack>
        </Tooltip>
      )}
    </Flex>
  );
};
