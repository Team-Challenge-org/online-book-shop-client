import FavoriteInProductActiveSvg from 'components/elements/FavoriteInProductActiveSvg/FavoriteInProductActiveSvg';
import FavoriteInProductHoverSvg from 'components/elements/FavoriteInProductHoverSvg/FavoriteInProductHoverSvg';
import FavoriteInProductInactiveSvg from 'components/elements/FavoriteInProductInactiveSvg/FavoriteInProductInactiveSvg';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { ButtonFavoriteOrCartType } from 'types/commont';

const ButtonHoverFavorite = ({ isAdded: isAddedToFavorite }: ButtonFavoriteOrCartType) => {
  const [hiddenFavorite, setHiddenFavorite] = useState(true);

  return (
    <div onMouseEnter={() => setHiddenFavorite(false)} onMouseLeave={() => setHiddenFavorite(true)}>
      {hiddenFavorite ? (
        isAddedToFavorite ? (
          <motion.div transition={{ ease: 'easyOut', duration: 1 }}>
            <FavoriteInProductActiveSvg />
          </motion.div>
        ) : (
          <motion.div transition={{ ease: 'easyOut', duration: 1 }}>
            <FavoriteInProductInactiveSvg />
          </motion.div>
        )
      ) : (
        <motion.div transition={{ ease: 'easyOut', duration: 1 }}>
          <FavoriteInProductHoverSvg />
        </motion.div>
      )}
    </div>
  );
};

export default ButtonHoverFavorite;
