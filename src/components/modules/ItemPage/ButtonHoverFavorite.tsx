import FavoriteActiveSvg from 'components/elements/FavoriteActiveSvg/FavoriteActiveSvg';
import FavoriteInactiveSvg from 'components/elements/FavoriteInactiveSvg/FavoriteInactiveSvg';
import React, { useState } from 'react';
import { ButtonHoverType } from 'types/commont';

const ButtonHoverFavorite = ({ hover, isAdded: isAddedToFavorite }: ButtonHoverType) => {
  const [hiddenFavorite, setHiddenFavorite] = useState(true);

  return (
    <div onMouseEnter={() => setHiddenFavorite(false)} onMouseLeave={() => setHiddenFavorite(true)}>
      {hiddenFavorite ? isAddedToFavorite ? <FavoriteActiveSvg /> : <FavoriteInactiveSvg /> : hover}
    </div>
  );
};

export default ButtonHoverFavorite;
