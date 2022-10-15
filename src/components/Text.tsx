import { Slot } from '@radix-ui/react-slot';
// import {block} from 'bem-clsx'
import { clsx } from 'clsx';

export interface TextProps{
   size?: 'sm'| 'md' | 'lg';  
   children: ReactNode;
   asChield?: boolean;

}

export function Text({size = 'md', children, asChield}: TextProps){
    const Comp = asChield ? Slot : 'h2';

    return (
        <Comp
         className={clsx(
            'text-gray-100 font-bold font-sans',
        {
            'text-lg': size === 'sm',
            'text-xl': size === 'md',
            'text-2xl': size === 'lg',
        })}
        >
            {children}
        </Comp>
    )
}