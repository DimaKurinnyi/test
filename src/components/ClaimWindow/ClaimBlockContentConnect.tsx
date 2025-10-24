import React, { useEffect, useMemo } from 'react';
import styles from './ClaimWindow.module.scss';

import FLFI from '../../assets/flary_coin.png';
import { ConnectEvmCustomButton, EvmConnectedButtonContent, SolanaConnectedButtonContent } from '../ConnectHeaderMenu/ConnectHeaderMenu';

export const ClaimBlockContentConnect: React.FC<{ isSolanaConnected: boolean; isEvmConnected: boolean }> = ({ isSolanaConnected, isEvmConnected }) => {
  const tokens = 1;

  // Record connection timestamps locally so we can determine which wallet connected first.
  // We set the timestamp when we detect a connection and remove it when disconnected so order
  // reflects the current session state.
  useEffect(() => {
    if (isSolanaConnected) {
      if (!localStorage.getItem('solanaConnectedAt')) {
        localStorage.setItem('solanaConnectedAt', Date.now().toString());
      }
    } else {
      localStorage.removeItem('solanaConnectedAt');
    }
  }, [isSolanaConnected]);

  useEffect(() => {
    if (isEvmConnected) {
      if (!localStorage.getItem('evmConnectedAt')) {
        localStorage.setItem('evmConnectedAt', Date.now().toString());
      }
    } else {
      localStorage.removeItem('evmConnectedAt');
    }
  }, [isEvmConnected]);

  // Compute which wallet was connected first. Returns 'solana', 'evm' or null.
  const firstConnected = useMemo(() => {
    if (isSolanaConnected && !isEvmConnected) return 'solana';
    if (!isSolanaConnected && isEvmConnected) return 'evm';
    if (!isSolanaConnected && !isEvmConnected) return null;

    // both connected: compare timestamps
    const s = localStorage.getItem('solanaConnectedAt');
    const e = localStorage.getItem('evmConnectedAt');

    if (s && e) {
      return Number(s) <= Number(e) ? 'solana' : 'evm';
    }
    if (s) return 'solana';
    if (e) return 'evm';
    // fallback
    return 'solana';
  }, [isSolanaConnected, isEvmConnected]);

  return (
    <div className={styles.content_connect}>
      <div className={styles.connect_header}>
        <h2 className={styles.title_connect}>Token Allocation</h2>
        <div className={styles.connect_wallet}>
          {firstConnected === 'solana' && <SolanaConnectedButtonContent weight={500} size={15} />}
          {firstConnected === 'evm' && <EvmConnectedButtonContent weight={500} size={15} />}
        </div>
      </div>

      <div className={styles.token_amount}>
        <img src={FLFI} alt="" />
        <span>{tokens} FLFI</span>
      </div>

      {isSolanaConnected && !isEvmConnected ? (
        <div className={styles.connect_evmbutton}>
          <p style={{ color: '#aeaeae' }}>You need connect EVM wallet</p>
          <div className={styles.connectButton}>
            <ConnectEvmCustomButton />
          </div>
        </div>
      ) : tokens <= 0 ? (
        <p className={styles.description}>You have no allocation. Try again next season</p>
      ) : (
        <div className={styles.connectButton}>Claim Tokens</div>
      )}
    </div>
  );
};
