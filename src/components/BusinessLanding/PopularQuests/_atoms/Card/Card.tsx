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
  Content?: FunctionComponent<{ children: any; className?: any }>;
  Actions?: FunctionComponent<{ children: any; className?: any }>;
  Hero?: FunctionComponent<{ children: any; className?: any }>;
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

const CardHero = ({
  children,
  className,
}: {
  children: any;
  className?: any;
}) => {
  return (
    <div className={clsx(cardStyles.hero_section, className)}>{children}</div>
  );
};

const CardContent = ({
  children,
  className,
}: {
  children: any;
  className?: any;
}) => {
  return (
    <div className={clsx(cardStyles.content_section, className)}>
      {children}
    </div>
  );
};

const CardActions = ({
  children,
  className,
}: {
  children: any;
  className?: any;
}) => {
  return (
    <div className={clsx(cardStyles.actions_section, className)}>
      {children}
    </div>
  );
};

Card.Content = CardContent;
Card.Actions = CardActions;
Card.Hero = CardHero;
