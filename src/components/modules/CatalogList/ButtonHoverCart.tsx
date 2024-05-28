import CartActiveSvg from 'components/elements/CartActiveSvg/CartActiveSvg';
import CartInactiveSvg from 'components/elements/CartInactiveSvg/CartInactiveSvg';
import React, { useState } from 'react';
import { ButtonHoverType } from 'types/commont';

const ButtonHoverCart = ({ hover, isAdded: isAddedToCart }: ButtonHoverType) => {
  const [hiddenCart, setHiddenCart] = useState(true);

  return (
    <div onMouseEnter={() => setHiddenCart(false)} onMouseLeave={() => setHiddenCart(true)}>
      {isAddedToCart ? <CartActiveSvg /> : hiddenCart ? <CartInactiveSvg /> : hover}
    </div>
  );
};

export default ButtonHoverCart;
