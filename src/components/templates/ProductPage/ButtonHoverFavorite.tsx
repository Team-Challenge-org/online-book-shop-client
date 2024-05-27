import FavoriteInProductActiveSvg from 'components/elements/FavoriteInProductActiveSvg/FavoriteInProductActiveSvg';
import FavoriteInProductInactiveSvg from 'components/elements/FavoriteInProductInactiveSvg/FavoriteInProductInactiveSvg';
import { useState } from 'react';
import { ButtonHoverType } from 'types/commont';

const ButtonHoverFavorite = ({ hover, isAdded: isAddedToFavorite }: ButtonHoverType) => {
  const [hiddenFavorite, setHiddenFavorite] = useState(true);

  return (
    <div onMouseEnter={() => setHiddenFavorite(false)} onMouseLeave={() => setHiddenFavorite(true)}>
      {hiddenFavorite ? (
        isAddedToFavorite ? (
          <FavoriteInProductActiveSvg />
        ) : (
          <FavoriteInProductInactiveSvg />
        )
      ) : (
        hover
      )}
    </div>
  );
};

export default ButtonHoverFavorite;
