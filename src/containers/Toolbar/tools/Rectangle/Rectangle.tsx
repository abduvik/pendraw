import RectangleIcon from './rectangle.svg';
import { Button } from "../../../../components/Button"
import { Icon } from '../../../../components/Icon';

export const Rectangle = () => {
    return <Button>
        <Icon src={RectangleIcon} />
    </Button>;
}