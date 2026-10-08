import React from 'react';
import styles from './Card.module.css';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  highlighted?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, highlighted = false, className, ...props }, ref) => {
    const classes = [
      styles.card,
      highlighted && styles.highlighted,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div ref={ref} className={classes} {...props}>
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';
