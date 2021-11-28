import {useRouter} from 'next/router';
import React, {useState, useEffect} from 'react';
import Web3 from 'web3';
import {Meta} from '../layout/Meta';
import {MarketingPage} from '../templates/MarketingPage';

const Index = () => {
  const router = useRouter();
  const [web3, setWeb3] = useState(null);
  const [address, setAddress] = useState(null);

  useEffect(() => {
    window.ethereum
      ? ethereum
          .request({method: 'eth_requestAccounts'})
          .then((accounts) => {
            setAddress(accounts[0]);
            let w3 = new Web3(ethereum);
            setWeb3(w3);
          })
          .catch((err) => console.log(err))
      : //(TODO): trigger popup to connect wallet
        console.log('Please install MetaMask');
  }, []);

  return (
    <MarketingPage
      meta={
        <Meta
          title="Level1"
          description="A fun and friendly space for DAO onboarding"
        />
      }
    >
      <h1 className="font-bold text-2xl text-secondary">
        Press start to begin
      </h1>
    </MarketingPage>
  );
};

export default Index;
