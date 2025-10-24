import { useWallet } from '@solana/wallet-adapter-react';
import React from 'react';
import { useAccount } from 'wagmi';
import styles from './ClaimWindow.module.scss';

import { ClaimBlockContentNoConnect } from './ClaimBlockContentNoConnect';
import { ClaimBlockContentConnect } from './ClaimBlockContentConnect';

export const ClaimBlock: React.FC = () => {
  const { isConnected: isEvmConnected } = useAccount();
  const { connected: isSolanaConnected } = useWallet();
  return (
    <div className={styles.claimBlock}>
      <div className={styles.blok}>
        <div className={styles.smallGlow} />
        {isEvmConnected || isSolanaConnected ? <ClaimBlockContentConnect isSolanaConnected={isSolanaConnected} isEvmConnected={isEvmConnected} /> : <ClaimBlockContentNoConnect />}
      </div>
    </div>
  );
};
