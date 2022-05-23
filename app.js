const express = require('express');
const app = express();
const port = 3001;

const Web3 = require("web3");
const web3 = new Web3('https://rinkeby.infura.io/v3/770daaf97ee14e0aa77ac105bbcdd79f');
const CONTRACT_ABI = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "enum pet.animalAction",
                "name": "action",
                "type": "uint8"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "opeator",
                "type": "address"
            },
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "gendor",
                        "type": "string"
                    },
                    {
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "internalType": "string",
                        "name": "location",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "birthday",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "noseLines",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "pictureHash",
                        "type": "string"
                    }
                ],
                "indexed": false,
                "internalType": "struct pet.Animal",
                "name": "animal",
                "type": "tuple"
            }
        ],
        "name": "ANIMALS_OPERATOR",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "transacionId",
                "type": "uint256"
            }
        ],
        "name": "SignSuccess",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "transactionId",
                "type": "uint256"
            }
        ],
        "name": "TransactionCreated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "bool",
                "name": "exist",
                "type": "bool"
            },
            {
                "indexed": false,
                "internalType": "enum pet.UserRole",
                "name": "role",
                "type": "uint8"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "opeator",
                "type": "address"
            }
        ],
        "name": "USER_EXIST",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "bool",
                "name": "valid",
                "type": "bool"
            },
            {
                "indexed": false,
                "internalType": "enum pet.UserRole",
                "name": "role",
                "type": "uint8"
            }
        ],
        "name": "VALID",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            }
        ],
        "name": "Apply",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            },
            {
                "internalType": "int256",
                "name": "isAgree",
                "type": "int256"
            }
        ],
        "name": "Ratificate",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "gendor",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "location",
                "type": "string"
            },
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "birthday",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "noseLines",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "pictureHash",
                "type": "string"
            }
        ],
        "name": "addAnimal",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_account",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "location",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "name",
                "type": "string"
            }
        ],
        "name": "addOpeator",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            },
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "location",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "name",
                "type": "string"
            }
        ],
        "name": "addUser",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            },
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            }
        ],
        "name": "getAnimal",
        "outputs": [
            {
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "gendor",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "location",
                "type": "string"
            },
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "birthday",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "noseLines",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "pictureHash",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_account",
                "type": "address"
            }
        ],
        "name": "getAnimalByUser",
        "outputs": [
            {
                "internalType": "uint256[]",
                "name": "",
                "type": "uint256[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getAnimalCounts",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            }
        ],
        "name": "getApplications",
        "outputs": [
            {
                "internalType": "address",
                "name": "applicant",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "petId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "timestamp",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "updateTime",
                "type": "uint256"
            },
            {
                "internalType": "int256",
                "name": "opinion",
                "type": "int256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_address",
                "type": "address"
            }
        ],
        "name": "getApplicationsFrom",
        "outputs": [
            {
                "internalType": "uint256[]",
                "name": "",
                "type": "uint256[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_address",
                "type": "address"
            }
        ],
        "name": "getApplicationsTo",
        "outputs": [
            {
                "internalType": "uint256[]",
                "name": "",
                "type": "uint256[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_account",
                "type": "address"
            }
        ],
        "name": "getUser",
        "outputs": [
            {
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "location",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "admin",
                "type": "address"
            }
        ],
        "name": "validAdmin",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_id",
                "type": "uint256"
            }
        ],
        "name": "validAnimals",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_opeator",
                "type": "address"
            }
        ],
        "name": "validOpeator",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_user",
                "type": "address"
            }
        ],
        "name": "validUser",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];
const CONTRACT_ADDRESS = '0xfD9DB996D0A7b91C4a19F832c46e57B8A24486a9';
const myContract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);


//查询，单个宠物，{}
app.get('/api/pets/:petId', (req, res) => {

    const petId = req.params.petId;

    myContract.methods.getAnimal(petId).call().then((result) => {

        console.log('pet的数据：', result);
        console.log('getAnimals(' + petId + ')');

        res.status(200).json({
            name: result.name,
            gendor: result.gendor,
            location: result.location,
            owner: result.owner,
            birthday: result.birthday,
            noseLines: result.noseLines,
            pictureHash: result.pictureHash,
        })
    });

});

//查询，单个用户，{}
app.get('/api/users/:address', (req, res) => {

    const address = req.params.address;

    myContract.methods.getUser(address).call().then((result) => {

        console.log('user的数据：', result);
        console.log('getUser(' + address + ')');

        res.status(200).json({
            name: result.name,
            location: result.location
        })
    });

});
/*---------------------------------------------------------------------------*/

//查询，单个用户作为发送方所有申请表，[]
app.get('/api/applications/from/list/:address', (req, res) => {
    const address = req.params.address;
    myContract.methods.getApplicationsFrom(address).call().then((result) => {

        console.log('applicationsFrom的数据：', result);
        console.log('getApplicationsFrom(' + address + ')');

        res.status(200).json(result)
    });
});

//查询，单个用户作为接受方所有申请表，[]
app.get('/api/applications/to/list/:address', (req, res) => {
    const address = req.params.address;
    myContract.methods.getApplicationsTo(address).call().then((result) => {

        console.log('ApplicationsTo的数据：', result);
        console.log('getApplicationsTo(' + address + ')');

        res.status(200).json(result)
    });
});

//查询，单个申请表，{}
app.get('/api/applications/:id', (req, res) => {
    const id = req.params.id;
    myContract.methods.getApplications(id).call().then((result) => {

        // console.log('getApplications的数据：', result);
        console.log('getApplications(' + id + ')');

        res.status(200).json({
            applicant: result.applicant,
            owner: result.applicant,
            petId: result.petId,
            timestamp: timeConvert(result.timestamp),
            updateTime: result.updateTime,
            opinion: opinionConvert(result.opinion),
        })
    });
});
/*---------------------------------------------------------------------------*/

//查询，是否为admin，{}
app.get('/api/is/admin/:address', (req, res) => {
    const address = req.params.address;
    myContract.methods.validAdmin(address).call().then((result) => {
        console.log('是否为admin：', result);
        res.status(200).json({isAdmin: result});
    });
});

//查询，是否为opeator，{}
app.get('/api/is/opeator/:address', (req, res) => {
    const address = req.params.address;
    myContract.methods.validOpeator(address).call().then((result) => {
        console.log('是否为opeator：', result);
        res.status(200).json({isOpeator: result});
    });
});

//查询，是否为user，{}
app.get('/api/is/user/:address', (req, res) => {
    const address = req.params.address;
    myContract.methods.validUser(address).call().then((result) => {
        console.log('是否为user：', result);
        res.status(200).json({isUser: result});
    });
});
/*---------------------------------------------------------------------------*/

//查询，所有宠物信息
app.get('/api/pets', (req, res) => {

    myContract.methods.getAnimalCounts().call().then((result) => {

        const counts = parseInt(result);
        // res.status(200).json(typeof counts);
        if (counts === 0){
            res.status(200).json([]);
        } else {
            let myArray = [];
            for (let petId = 1; petId < counts + 1; petId++) {
                myContract.methods.getAnimal(petId).call().then((detail) => {
                    myArray.push({
                        petId:petId,
                        name: detail.name,
                        gendor: detail.gendor,
                        location: detail.location,
                        owner: detail.owner,
                        birthday: detail.birthday,
                        noseLines: detail.noseLines,
                        pictureHash: detail.pictureHash,
                    });

                    console.log('petId',petId);
                    if (petId === counts){
                        console.log('遍历完毕');
                        res.status(200).json(myArray);
                    }
                });

            }
        }

    });

});

//查询，单个用户发送方所有申请表详情，[{}，{}]
app.get('/api/applications/from/:address', (req, res) => {
    const address = req.params.address;

    myContract.methods.getApplicationsFrom(address).call().then((result) => {
        console.log('发送方所有申请表详情：', result);

        if (result.length === 0) {
            res.status(200).json([]);
        } else {
            let myArray = [];
            result.forEach((id, index) => {
                myContract.methods.getApplications(id).call().then((detail) => {

                    const {applicant, owner, petId, timestamp, updateTime, opinion} = detail;
                    const timestamp_temp = timeConvert(timestamp,1);
                    const opinion_temp = opinionConvert(opinion);

                    myArray.push({id, applicant, owner, petId, timestamp:timestamp_temp, updateTime, opinion:opinion_temp});

                    if ((index + 1) === result.length) {
                        console.log('applicationsFrom all data遍历完毕');
                        res.status(200).json(myArray);
                    }
                });
            });
        }

    });
});

//查询，单个用户接受方所有申请表详情，[{}，{}]
app.get('/api/applications/to/:address', (req, res) => {
    const address = req.params.address;

    myContract.methods.getApplicationsTo(address).call().then((result) => {
        console.log('接受方所有申请表详情：', result);

        if (result.length === 0) {
            res.status(200).json([]);
        } else {
            let myArray = [];
            result.forEach((id, index) => {
                myContract.methods.getApplications(id).call().then((detail) => {

                    const {applicant, owner, petId, timestamp, updateTime, opinion} = detail;
                    const timestamp_temp = timeConvert(timestamp,1);
                    const opinion_temp = opinionConvert(opinion);

                    myArray.push({id, applicant, owner, petId, timestamp:timestamp_temp, updateTime, opinion:opinion_temp});

                    if ((index + 1) === result.length) {
                        console.log('applicationsTo all data遍历完毕');
                        res.status(200).json(myArray);
                    }
                });
            });
        }

    });
});
/*---------------------------------------------------------------------------*/
// console.log(timeConvert('1652965196',1));

function timeConvert(timestamp,num){//num:0 YYYY-MM-DD  num:1  YYYY-MM-DD hh:mm:ss // timestamp:时间戳
    timestamp = timestamp+'';
    timestamp = timestamp.length==10?timestamp*1000:timestamp;
    var date = new Date(timestamp);
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? ('0' + m) : m;
    var d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    var h = date.getHours();
    h = h < 10 ? ('0' + h) : h;
    var minute = date.getMinutes();
    var second = date.getSeconds();
    minute = minute < 10 ? ('0' + minute) : minute;
    second = second < 10 ? ('0' + second) : second;
    if(num==0){
        return y + '-' + m + '-' + d;
    }else{
        return y + '-' + m + '-' + d +' '+ h +':'+ minute +':' + second;
    }
}

function opinionConvert(opinion){
    if (parseInt(opinion) === 0){
        return '未核验';
    }
    if (parseInt(opinion) === 1){
        return '通过';
    }
    if (parseInt(opinion) === -1){
        return '拒绝';
    }
}

app.listen(port, () => {
    console.log(`Nodejs listening on port ${port}`)
});