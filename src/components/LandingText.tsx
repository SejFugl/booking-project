import { FunctionComponent } from 'react';
import styles from './LandingText.module.css';


const LandingText:FunctionComponent = () => {
  	return (
    		<div className={styles.landingText}>
      			<div className={styles.text}>
        				<div className={styles.title}>Lorem ipsum dolor sit amet consectetur.</div>
        				<div className={styles.body}>Lorem ipsum dolor sit amet consectetur. Sed id consectetur interdum fringilla. Quis sem nunc hac consequat proin.</div>
      			</div>
      			<div className={styles.registerButton}>
        				<div className={styles.label}>Kom i gang</div>
      			</div>
    		</div>);
};

export default LandingText;
