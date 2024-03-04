import { ReactNode } from 'react';
import sectionContainerStyles from './sectionContainer.module.css';
import clsx from 'clsx';

export const SectionContainer = ({
	actions,
	children,
	title,
	className,
}: {
	actions: ReactNode;
	children: ReactNode | ReactNode[];
	title: string;
	className?: string;
}) => {
	return (
		<section className={clsx(sectionContainerStyles.container, className)}>
			<div className={sectionContainerStyles.header_section}>
				<h3>{title}</h3>
				{actions}
			</div>

			{children}
		</section>
	);
};
