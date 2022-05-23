import {useState} from "react";

const callMetaMask = () => {
    const [account, setAccount] = useState('');

    const handleAccountConnect = async () => {
        console.log('handleGetAccount()');

        const accounts = await ethereum.request({method: 'eth_requestAccounts'});
        const account = accounts[0];
        setAccount(account);
        console.log({account})
    };

    const handleAccountDisconnect = () => {
        setAccount('');
    };

    return {
        account,
        handleAccountConnect,
        handleAccountDisconnect
    }

};

export default callMetaMask;