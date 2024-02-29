import clsx from "clsx";
import cardStyles from "./card.module.css";
import {
  Attributes,
  ForwardRefExoticComponent,
  FunctionComponent,
  HTMLAttributes,
  ReactNode,
  forwardRef,
} from "react";

interface ICard
  extends ForwardRefExoticComponent<HTMLAttributes<HTMLDivElement>> {
  Content?: FunctionComponent<{ children: ReactNode; className?: string }>;
  Actions?: FunctionComponent<{ children: ReactNode; className?: string }>;
  Hero?: FunctionComponent<{ children: ReactNode; className?: string }>;
}

export const Card: ICard = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement> & { link?: string }
>(({ children, className, ...rest }, ref) => {
  return (
    <div {...rest} ref={ref} className={clsx(cardStyles.container, className)}>
      {children}
    </div>
  );
});

const CardHero: FunctionComponent<{
  children: ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <div className={clsx(cardStyles.hero_section, className)}>{children}</div>
  );
};

const CardContent: FunctionComponent<{
  children: ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <div className={clsx(cardStyles.content_section, className)}>
      {children}
    </div>
  );
};

const CardActions: FunctionComponent<{
  children: ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <div className={clsx(cardStyles.actions_section, className)}>
      {children}
    </div>
  );
};

Card.Content = CardContent;
Card.Actions = CardActions;
Card.Hero = CardHero;
