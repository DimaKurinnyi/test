import { useState } from 'react';
import { ConnectEvmCustomButton, ConnectSolanaCustomButton } from '../ConnectHeaderMenu/ConnectHeaderMenu';

import style from './ClaimWindow.module.scss';

export const ClaimConnect = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  return (
    <div className={style.claimConnect}>
      <div className={style.connectButton} onClick={toggleDropdown}>
        Connect Wallet
      </div>
      {isDropdownOpen && (
        <div className={style.drop_wallets}>
          <ConnectEvmCustomButton />
          <ConnectSolanaCustomButton />
        </div>
      )}
    </div>
  );
};
