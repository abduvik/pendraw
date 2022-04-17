import RoundedRectangleIcon from './rounded-rectangle.svg';
import { Button } from "../../../../components/Button"
import { Icon } from '../../../../components/Icon';

export const RoundedRectangle = () => {
    return <Button>
        <Icon src={RoundedRectangleIcon} />
    </Button>;
}