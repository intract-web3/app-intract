import clsx from "clsx";
import cardStyles from "./card.module.css";
import {
  ForwardRefExoticComponent,
  HTMLAttributes,
  ReactNode,
  forwardRef,
} from "react";

interface ICard
  extends ForwardRefExoticComponent<HTMLAttributes<HTMLDivElement>> {
  Content?: React.FunctionComponent<{
    children: ReactNode;
    className?: string;
  }>;
  Actions?: React.FunctionComponent<{
    children: ReactNode;
    className?: string;
  }>;
  Hero?: React.FunctionComponent<{ children: ReactNode; className?: string }>;
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
Card.displayName = "Card";

const CardHero: React.FunctionComponent<{
  children: ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <div className={clsx(cardStyles.hero_section, className)}>{children}</div>
  );
};
CardHero.displayName = "CardHero";

const CardContent: React.FunctionComponent<{
  children: ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <div className={clsx(cardStyles.content_section, className)}>
      {children}
    </div>
  );
};
CardContent.displayName = "CardContent";

const CardActions: React.FunctionComponent<{
  children: ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <div className={clsx(cardStyles.actions_section, className)}>
      {children}
    </div>
  );
};
CardActions.displayName = "CardActions";

Card.Content = CardContent;
Card.Actions = CardActions;
Card.Hero = CardHero;
