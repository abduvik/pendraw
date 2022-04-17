import DownloadIcon from './download.svg';
import { Button } from "../../../../components/Button"
import { Icon } from '../../../../components/Icon';

export const Download = () => {
    return <Button>
        <Icon src={DownloadIcon} />
    </Button>;
}