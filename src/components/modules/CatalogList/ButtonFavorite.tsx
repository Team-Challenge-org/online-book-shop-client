import FavoriteActiveSvg from "components/elements/FavoriteActiveSvg/FavoriteActiveSvg";
import FavoriteInactiveSvg from "components/elements/FavoriteInactiveSvg/FavoriteInactiveSvg";
import { motion } from "framer-motion";
import { ButtonFavoriteOrCartType } from "types/common";

const ButtonFavorite = ({
  isAdded: isAddedToFavorite,
}: ButtonFavoriteOrCartType) => {
  return (
    <div>
      {isAddedToFavorite ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.1 }}
        >
          <FavoriteActiveSvg />
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.1 }}
        >
          <FavoriteInactiveSvg />
        </motion.div>
      )}
    </div>
  );
};

export default ButtonFavorite;
