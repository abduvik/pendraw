import { FC, PropsWithChildren } from 'react';
import classes from './Button.module.scss';

export type ButtonProps = {
    onClick?: () => {}
}

export const Button: FC<PropsWithChildren<ButtonProps>> = ({ children, onClick }) => {
    return <button className={classes.Button} onClick={onClick}>{children}</button>
}