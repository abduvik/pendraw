import PencilIcon from './pencil.svg';
import { Button } from "../../../../components/Button"
import { Icon } from '../../../../components/Icon';

export const Pen = () => {
    return <Button>
        <Icon src={PencilIcon} />
    </Button>;
}