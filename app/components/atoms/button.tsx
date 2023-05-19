import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

import { cn } from '~/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center border border-b-4 border-r-4 border-black font-medium transition-colors focus-visible:outline-none disabled:opacity-50 focus:outline-none hover:border-b-2 hover:border-r-2 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        default: 'bg-pink-600 text-white hover:bg-pink-500/90 shadow-pink-200/20 shadow-[5px_5px_black]',
        outline: 'border border-neutral-950 hover:bg-pink-600 hover:text-white',
        primary:
          'border-2 bg-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 font-medium hover:bg-lila-500 hover:text-black justify-center px-5 py-3 rounded-xl text-base text-white',
        secondary: 'bg-green-600 hover:bg-green-500/90 shadow-green-200/20 text-black shadow-[5px_5px_black]',
        link: 'underline-offset-4 hover:underline text-neutral-950',
      },
      size: {
        default: 'h-10 py-2 px-4',
        xs: 'h-6 py-1 px-2',
        sm: 'h-10 py-2 px-3',
        lg: 'h-11 py-3 px-5',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
