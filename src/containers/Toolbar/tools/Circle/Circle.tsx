import CircleIcon from './circle.svg';
import { Button } from "../../../../components/Button"
import { Icon } from '../../../../components/Icon';

export const Circle = () => {
    return <Button>
        <Icon src={CircleIcon} />
    </Button>;
}