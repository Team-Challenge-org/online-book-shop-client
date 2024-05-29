import CartActiveSvg from 'components/elements/CartActiveSvg/CartActiveSvg';
import CartInactiveSvg from 'components/elements/CartInactiveSvg/CartInactiveSvg';
import { motion } from 'framer-motion';
import React from 'react';
import { ButtonFavoriteOrCartType } from 'types/commont';

const ButtonCart = ({ isAdded: isAddedToCart }: ButtonFavoriteOrCartType) => {
  return (
    <div>
      {isAddedToCart ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: 'easeOut', duration: 0.1 }}>
          <CartActiveSvg />
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: 'easeOut', duration: 0.1 }}>
          <CartInactiveSvg />
        </motion.div>
      )}
    </div>
  );
};

export default ButtonCart;
