import React from 'react';
import styles from './ClaimWindow.module.scss';

export const ModuleWindow: React.FC = () => {
  return (
    <div className={styles.window}>
      <div className={styles.blok}>
        <div className={styles.content}>
          <h2 className={styles.title}>Modal title</h2>
          <p className={styles.description}>This is a modular window using ClaimWindow.module.scss styles.</p>
          <div className={styles.actions}>
            <button className={styles.connectButton}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModuleWindow;
