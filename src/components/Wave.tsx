import { FunctionComponent } from 'react';
import styles from './Wave.module.css';
import waveIcon from '../assets/wave.svg';

const Wave:FunctionComponent = () => {
  	return (
    		<img className={styles.waveIcon} alt="" src={waveIcon} />);
};

export default Wave;
