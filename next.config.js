/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['img.wanqol.com','img.chongshe.cn','img.boqiicdn.com','img.cuowu.com','img.chongshe.cn'],
  },
  env:{
    API_HOST:'http://101.43.35.156:3001',
    // API_HOST:'http://127.0.0.1:3001',
    HOST:'https://rinkeby.infura.io/v3/770daaf97ee14e0aa77ac105bbcdd79f',
    CONTRACT_ABI:[
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
    ],
    CONTRACT_ADDRESS:'0xfD9DB996D0A7b91C4a19F832c46e57B8A24486a9',
    LOCATIONS:[
      {
        "value": "1",
        "label": "四川",
        "children": [
          {
            "label": "成都市",
            "value": "1-1",
            "children": [
              {
                "value": "1-1-1",
                "label": "锦江区"
              },
              {
                "value": "1-1-2",
                "label": "青羊区"
              },
              {
                "value": "1-1-3",
                "label": "金牛区"
              },
              {
                "value": "1-1-4",
                "label": "武侯区"
              },
              {
                "value": "1-1-5",
                "label": "成华区"
              }
            ]
          },
          {
            "value": "1-2",
            "label": "自贡市",
            "children": [
              {
                "value": "1-2-1",
                "label": "自流井区"
              },
              {
                "value": "1-2-2",
                "label": "贡井区"
              },
              {
                "value": "1-2-3",
                "label": "大安区"
              },
              {
                "value": "1-2-4",
                "label": "沿滩区"
              },
              {
                "value": "1-2-5",
                "label": "荣　县"
              },
              {
                "value": "1-2-6",
                "label": "富顺县"
              }
            ]
          },
          {
            "value": "1-3",
            "label": "攀枝花市",
            "children": [
              {
                "value": "1-3-1",
                "label": "东　区"
              },
              {
                "value": "1-3-2",
                "label": "西　区"
              },
              {
                "value": "1-3-3",
                "label": "仁和区"
              },
              {
                "value": "1-3-4",
                "label": "米易县"
              },
              {
                "value": "1-3-5",
                "label": "盐边县"
              }
            ]
          }
        ]
      },
      {
        "label": "贵州",
        "value": "2",
        "children": [
          {
            "value": "2-1",
            "label": "贵阳市",
            "children": [
              {
                "value": "2-1-1",
                "label": "南明区"
              },
              {
                "value": "2-1-2",
                "label": "云岩区"
              },
              {
                "value": "2-1-3",
                "label": "花溪区"
              },
              {
                "value": "2-1-4",
                "label": "乌当区"
              },
              {
                "value": "2-1-5",
                "label": "白云区"
              },
              {
                "value": "2-1-6",
                "label": "小河区"
              },
              {
                "value": "2-1-7",
                "label": "开阳县"
              },
              {
                "value": "2-1-8",
                "label": "息烽县"
              },
              {
                "value": "2-1-9",
                "label": "修文县"
              },
              {
                "value": "2-1-10",
                "label": "清镇市"
              }
            ]
          },
          {
            "value": "2-2",
            "label": "六盘水市",
            "children": [
              {
                "value": "2-2-1",
                "label": "钟山区"
              },
              {
                "value": "2-2-2",
                "label": "六枝特区"
              },
              {
                "value": "2-2-3",
                "label": "水城县"
              },
              {
                "value": "2-2-4",
                "label": "盘　县"
              }
            ]
          },
          {
            "value": "2-3",
            "label": "遵义市",
            "children": [
              {
                "value": "2-3-1",
                "label": "红花岗区"
              },
              {
                "value": "2-3-2",
                "label": "汇川区"
              },
              {
                "value": "2-3-3",
                "label": "遵义县"
              },
              {
                "value": "2-3-4",
                "label": "桐梓县"
              },
              {
                "value": "2-3-5",
                "label": "绥阳县"
              },
              {
                "value": "2-3-6",
                "label": "正安县"
              },
              {
                "value": "2-3-7",
                "label": "道真仡佬族苗族自治县"
              },
              {
                "value": "2-3-8",
                "label": "务川仡佬族苗族自治县"
              },
              {
                "value": "2-3-9",
                "label": "凤冈县"
              },
              {
                "value": "2-3-10",
                "label": "湄潭县"
              },
              {
                "value": "2-3-11",
                "label": "余庆县"
              },
              {
                "value": "2-3-12",
                "label": "习水县"
              },
              {
                "value": "2-3-13",
                "label": "赤水市"
              },
              {
                "value": "2-3-14",
                "label": "仁怀市"
              }
            ]
          },
          {
            "value": "2-4",
            "label": "安顺市",
            "children": [
              {
                "value": "2-4-1",
                "label": "西秀区"
              },
              {
                "value": "2-4-2",
                "label": "平坝县"
              },
              {
                "value": "2-4-3",
                "label": "普定县"
              },
              {
                "value": "2-4-4",
                "label": "镇宁布依族苗族自治县"
              },
              {
                "value": "2-4-5",
                "label": "关岭布依族苗族自治县"
              },
              {
                "value": "2-4-6",
                "label": "紫云苗族布依族自治县"
              }
            ]
          }
        ]
      }
    ]
  }
};

module.exports = nextConfig;
