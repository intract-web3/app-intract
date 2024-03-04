import heroVariant6Styles from './heroVariant6.module.css';

import clsx from 'clsx';
import gridPng from '../../../../../_assets/grid-inside.png';

export const HeroVariant6 = ({ banner }: { banner: string }) => {
	return (
		<div className={clsx(heroVariant6Styles.container)}>
			<img src={gridPng} alt="grid" />
			<img src={banner} alt="banner" />
		</div>
	);
};
