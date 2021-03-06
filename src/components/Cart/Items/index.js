import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";
import CartItem from "./CartItem";
import KeepBuyingButton from "./KeepBuyingButton";

const Items = ({ cart }) => {
  return (
    <S.Container>
      {cart.map((pokemon) => (
        <CartItem pokemon={pokemon} key={`cartItem-${pokemon.id}`} />
      ))}

      <KeepBuyingButton />
    </S.Container>
  );
};

Items.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Items;
