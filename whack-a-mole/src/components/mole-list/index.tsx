import styles from './styles.module.css'
import { Mole } from "../mole";

export const MoleList: React.FC = () => {
    return (<div className={styles.root}>
       {Array(12).fill('').map((_,i) =><Mole isActive={false} key={i}/>)}
    </div>)
}