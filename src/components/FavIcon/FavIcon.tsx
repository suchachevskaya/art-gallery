
import { ReactComponent as FavIconSVG } from '@/assets/FavIcon.svg?react';
import favStyle from '@/components/FavIcon/FavIcon.module.scss';

type FavIconProps = {
    isFavorite: boolean
}

export function FavIcon({isFavorite}: FavIconProps ) {
    return(
        <div className={favStyle.svgWrapper}>
        <FavIconSVG
          className={`${favStyle.favIcon} ${isFavorite ? favStyle.favorite : ''}`}
        />
      </div>
    );
};

