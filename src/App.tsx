import { useEffect, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAccount } from 'wagmi';
import './App.css';
import { Footer1 } from './components';
import { Contact, Giveaway, Home, HowToBuy, SingUp1, SingUp2, SingUp3 } from './page';

import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';

import '@solana/wallet-adapter-react-ui/styles.css';
import { SingUp } from './page/SingUp/SingUp';
import { SingUp4 } from './page/SingUp3.1/SingUp3';

function App() {
  const { isConnected, address } = useAccount();

  useEffect(() => {
    // Parse the URL to get the ref value
    const params = new URLSearchParams(window.location.search);
    const ref = params.get('ref');

    if (ref) {
      // Save to localStorage
      localStorage.setItem('ref', ref);
    }
  }, []);

  useEffect(() => {
    const handleAuth = async () => {
      const referrerCode = new URLSearchParams(window.location.search).get('ref') ?? localStorage.getItem('ref');
      console.log(referrerCode);

      await fetch('https://back.flary.finance/api/user/registerUser', {
        method: 'POST',
        body: JSON.stringify({ address, referrerCode }),
      });

      localStorage.setItem('wagmi-connected', 'true');
    };
    const connectedStatus = localStorage.getItem('wagmi-connected');
    if (!connectedStatus && isConnected) {
      handleAuth();
    } else {
      localStorage.removeItem('wagmi-connected');
    }
  }, [isConnected]);

  const wallets = useMemo(() => [new PhantomWalletAdapter()], []);

  return (
    <div className="App">
      <div className="wrapper">
        <ConnectionProvider endpoint={'https://mainnet.helius-rpc.com/?api-key=f01b5d1a-f37f-462e-a59f-65a9e710f85a'}>
          <WalletProvider wallets={wallets} autoConnect>
            <WalletModalProvider>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/utm1" element={<Home />}></Route>
                <Route path="/how-to-buy" element={<HowToBuy />} />
                <Route path="/giveaway" element={<Giveaway />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/singup" element={<SingUp />} />
                <Route path="/singup1.1" element={<SingUp1 />} />
                <Route path="/singup2" element={<SingUp2 />} />
                <Route path="/singup3" element={<SingUp3 />} />
                <Route path="/singup3.1" element={<SingUp4 />} />

              </Routes>
            </WalletModalProvider>
          </WalletProvider>
        </ConnectionProvider>
      </div>
      <Footer1 />
    </div>
  );
}

export default App;
