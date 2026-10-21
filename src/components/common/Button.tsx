import type { CSSProperties, ReactNode } from 'react';
import { Icon } from './Icon';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'light' | 'text';
  className?: string;
  style?: CSSProperties;
}

export function Button({ children, href = '#', variant = 'primary', className = '', style }: ButtonProps) {
  return (
    <a className={`button button--${variant} ${className}`} href={href} style={style}>
      {children}
      <Icon name="arrow" size={18} />
    </a>
  );
}
