import { TButtonFavoriteOrCartType } from "types/common";

import { motion } from "framer-motion";
import CartActiveSvg from "components/elements/CartActiveSvg/CartActiveSvg";
import CartInactiveSvg from "components/elements/CartInactiveSvg/CartInactiveSvg";

const ButtonCart = ({ isAdded: isAddedToCart }: TButtonFavoriteOrCartType) => {
  return (
    <div>
      {isAddedToCart ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.1 }}
        >
          <CartActiveSvg />
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.1 }}
        >
          <CartInactiveSvg />
        </motion.div>
      )}
    </div>
  );
};

export default ButtonCart;
