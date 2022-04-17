import classes from './Toolbar.module.scss';
import { Pen } from './tools/Pen';

export const Toolbar = () => {
    return <div className={classes.ToolbarWraper}>
        <div className={classes.Toolbar}>
            <Pen/>
        </div>
    </div>
}