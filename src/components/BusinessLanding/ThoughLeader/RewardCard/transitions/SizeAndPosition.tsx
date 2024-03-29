import { ReactNode } from 'react';
import rewardCardStyles from '../rewardCard.module.css';

export const SizeAndPositionTransition = ({ children }: { children: ReactNode }) => {
	return (
		<div className={rewardCardStyles['image-transition-size-and-position']}>
			{children}
		</div>
	);
};
