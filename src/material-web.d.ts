import type { HTMLAttributes } from 'react';

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'md-assist-chip': HTMLAttributes<HTMLElement>;
      'md-filled-button': HTMLAttributes<HTMLElement> & {
        href?: string;
        target?: string;
        rel?: string;
        type?: 'button' | 'submit' | 'reset';
      };
      'md-icon': HTMLAttributes<HTMLElement>;
      'md-outlined-button': HTMLAttributes<HTMLElement> & {
        href?: string;
        target?: string;
        rel?: string;
        type?: 'button' | 'submit' | 'reset';
      };
    }
  }
}
