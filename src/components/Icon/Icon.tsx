import classes from "./Icon.module.scss";
import { FC } from "react";

export type IconProps = {
    src: string;
}

export const Icon: FC<IconProps> = ({src}) => {
    return <img className={classes.Icon} src={src} />
}