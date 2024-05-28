import FavoriteActiveSvg from 'components/elements/FavoriteActiveSvg/FavoriteActiveSvg';
import FavoriteInactiveSvg from 'components/elements/FavoriteInactiveSvg/FavoriteInactiveSvg';
import { ButtonHoverType } from 'types/commont';

const ButtonHoverFavorite = ({ hover, isAdded: isAddedToFavorite }: ButtonHoverType) => {
  return <div>{isAddedToFavorite ? <FavoriteActiveSvg /> : <FavoriteInactiveSvg />}</div>;
};

export default ButtonHoverFavorite;
