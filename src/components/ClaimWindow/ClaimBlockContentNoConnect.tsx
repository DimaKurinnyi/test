import { ClaimConnect } from './ClaimConnect';
import styles from './ClaimWindow.module.scss';

export const ClaimBlockContentNoConnect = () => {
  return (
    <div className={styles.content}>
      <h3 className={styles.title}>Check Your Allocation</h3>
      <p className={styles.description}>Connect your wallet to view your MET Allocation</p>

      <ClaimConnect />
    </div>
  );
};
