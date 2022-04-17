import classes from './Toolbar.module.scss';
import { Circle } from './tools/Circle';
import { Download } from './tools/Download';
import { Pen } from './tools/Pen';
import { Rectangle } from './tools/Rectangle';
import { RoundedRectangle } from './tools/RoundedRectangle';
import { Triangle } from './tools/Triangle';

export const Toolbar = () => {
    return <div className={classes.ToolbarWraper}>
        <div className={classes.Toolbar}>
            <Pen/>
            <Triangle />
            <Circle />
            <Rectangle />
            <RoundedRectangle />
            <Download />
        </div>
    </div>
}