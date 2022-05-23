import {useState} from "react";
import Web3 from "web3";

const web3 = new Web3(new Web3.providers.HttpProvider(process.env.HOST));
const CONTRACT_ABI = process.env.CONTRACT_ABI;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

const myContract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
console.log(myContract.methods);

const callContract = () => {

    const [petData, setPetData] = useState({});

    const handleSetPetData = (account, name, gendor, location, owner, birthday, noseLines, pictureHash) => {

        console.log('handleSetPetData()');

        const data = myContract.methods.addAnimal(name, gendor, location, owner, birthday, noseLines, pictureHash).encodeABI();
        const params = [{from: account, to: CONTRACT_ADDRESS, data}];

        ethereum
            .request({
                method: 'eth_sendTransaction',
                params,
            })
            .then((result) => {
                console.log('result：', result);
                if (result) {
                    alert(`已提交交易，回执：${result}`);
                }
            })
            .catch((error) => {
                console.log('error：', error);
            });

    };

    const handleSetUserData = (account, name, location) => {
        console.log('handleSetUserData()');
        const data = myContract.methods.addUser(location, name).encodeABI();
        const params = [{from: account, to: CONTRACT_ADDRESS, data}];
        ethereum
            .request({
                method: 'eth_sendTransaction',
                params,
            })
            .then((result) => {
                console.log('result：', result);
                if (result) {
                    alert(`已提交交易，回执：${result}`);
                }
            })
            .catch((error) => {
                console.log('error：', error);
            });
    };

    const handleSetOpeatorData = (account, opeator, name, location) => {
        console.log('handleSetOpeatorData()');
        const data = myContract.methods.addOpeator(opeator, location, name).encodeABI();
        const params = [{from: account, to: CONTRACT_ADDRESS, data}];
        ethereum
            .request({
                method: 'eth_sendTransaction',
                params,
            })
            .then((result) => {
                console.log('result：', result);
                if (result) {
                    alert(`已提交交易，回执：${result}`);
                }
            })
            .catch((error) => {
                console.log('error：', error);
            });
    };

    const handleApply = (account, petId) => {
        console.log('handleApply()');
        const data = myContract.methods.Apply(petId).encodeABI();
        const params = [{from: account, to: CONTRACT_ADDRESS, data}];
        ethereum
            .request({
                method: 'eth_sendTransaction',
                params,
            })
            .then((result) => {
                console.log('result：', result);
                if (result) {
                    alert(`已提交交易，回执：${result}`);
                }
            })
            .catch((error) => {
                console.log('error：', error);
            });
    };

    const handleRatificate = (account,id,isAgress) => {
        console.log('handleRatificate()');
        const data = myContract.methods.Ratificate(id,isAgress).encodeABI();
        const params = [{from: account, to: CONTRACT_ADDRESS, data}];
        ethereum
            .request({
                method: 'eth_sendTransaction',
                params,
            })
            .then((result) => {
                console.log('result：', result);
                if (result) {
                    alert(`已提交交易，回执：${result}`);
                }
            })
            .catch((error) => {
                console.log('error：', error);
            });
    };

    return {
        petData,
        handleSetPetData,
        handleSetUserData,
        handleSetOpeatorData,
        handleApply,
        handleRatificate
    }

};

export default callContract;