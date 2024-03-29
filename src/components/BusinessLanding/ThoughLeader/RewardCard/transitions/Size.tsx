import { ReactNode } from 'react';
import rewardCardStyles from '../rewardCard.module.css';

export const SizeTransition = ({ children }: { children: ReactNode }) => {
	return (
		<div className={rewardCardStyles['image-transition-size']}>{children}</div>
	);
};
