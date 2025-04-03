import { useState } from 'react';
import { ethers } from 'ethers';

export default function Home() {
  const [tokenName, setTokenName] = useState('');
  const [tokenSymbol, setTokenSymbol] = useState('');
  const [tokenSupply, setTokenSupply] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const [provider, setProvider] = useState(null);

  // Metamask connect function
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const newProvider = new ethers.providers.Web3Provider(window.ethereum);
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        setProvider(newProvider);
        setIsConnected(true);
      } catch (error) {
        console.error("Error connecting:", error);
      }
    } else {
      alert("Please install Metamask!");
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto' }}>
      <h1>0G Token Creator</h1>
      
      {!isConnected ? (
        <button 
          onClick={connectWallet}
          style={{ padding: '10px 20px', background: '#f6851b', color: 'white', border: 'none', borderRadius: '5px' }}
        >
          Connect Metamask
        </button>
      ) : (
        <div>
          <p>Wallet Connected!</p>
          <div style={{ marginTop: '20px' }}>
            <input
              type="text"
              placeholder="Token Name"
              value={tokenName}
              onChange={(e) => setTokenName(e.target.value)}
              style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
            />
            <input
              type="text"
              placeholder="Token Symbol"
              value={tokenSymbol}
              onChange={(e) => setTokenSymbol(e.target.value)}
              style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
            />
            <input
              type="number"
              placeholder="Token Supply"
              value={tokenSupply}
              onChange={(e) => setTokenSupply(e.target.value)}
              style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
            />
            <button 
              style={{ padding: '10px 20px', background: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px' }}
            >
              Create Token
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
