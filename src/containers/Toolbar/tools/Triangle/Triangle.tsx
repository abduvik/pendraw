import TriangleIcon from './triangle.svg';
import { Button } from "../../../../components/Button"
import { Icon } from '../../../../components/Icon';

export const Triangle = () => {
    return <Button>
        <Icon src={TriangleIcon} />
    </Button>;
}