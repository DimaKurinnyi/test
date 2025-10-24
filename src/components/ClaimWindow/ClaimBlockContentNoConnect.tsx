import { ClaimConnect } from './ClaimConnect';
import styles from './ClaimWindow.module.scss';

export const ClaimBlockContentNoConnect = () => {
  return (
    <div className={styles.content}>
      <h3 className={styles.title}>Claim your allocation</h3>
      <p className={styles.description}>Connect your wallet to view and claim your FLFI allocation</p>

      <ClaimConnect />
    </div>
  );
};
