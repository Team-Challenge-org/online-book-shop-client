import FavoriteInProductActiveSvg from 'components/elements/FavoriteInProductActiveSvg/FavoriteInProductActiveSvg';
import FavoriteInProductInactiveSvg from 'components/elements/FavoriteInProductInactiveSvg/FavoriteInProductInactiveSvg';
import { ButtonFavoriteOrCartType } from 'types/commont';

const ButtonFavorite = ({ isAdded: isAddedToFavorite }: ButtonFavoriteOrCartType) => {
  return (
    <div>
      {isAddedToFavorite ? <FavoriteInProductActiveSvg /> : <FavoriteInProductInactiveSvg />}
    </div>
  );
};

export default ButtonFavorite;
