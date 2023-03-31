import { useEffect, useState } from "react";
import moleHide from '../../assets/WAM_Hole.png';
import moleShow from '../../assets/WAM_Mole.png';
import styles from './styles.module.css'

interface IMoleProps {
    isActive: boolean;
}

export const Mole: React.FC<IMoleProps> = ({ isActive }) => {
    const [isMoleVisible, setIsMoleVisible] = useState(isActive);

    const hideMoleHandle = () => {
        setIsMoleVisible(false)
    }

    useEffect(() => {
        isActive && setTimeout(() => {
            setIsMoleVisible(false);
        }, 2000);

    }, [isActive])


    return (<div className={styles.root}>
        {isMoleVisible ?
            <img src={moleShow} alt="mole-show" onClick={hideMoleHandle} /> :
            <img src={moleHide} alt="mole-hide" />
        }
    </div>)
}