import React from "react";
import Nevigation from "../Nevigation/Nevigation";
import Timer from "../TImer/TImer";
import './IVO.css';
import Web3 from "web3/dist/web3.min.js";
import Web3Modal from "web3modal";
const IVO = () => {
    const sendTransaction = async () => {
        let web3modal = new Web3Modal({
            network: "mainnet",
            cacheProvider: false,
            theme: "dark"

        });
        console.log('function called')
        let round
        let amount
        let tokencontractAddress = '0xB5047153afCc59523F7f6D6F492f716a21B04681'
        let tokenAbi = [
            {
                "inputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "constructor"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "spender",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "value",
                        "type": "uint256"
                    }
                ],
                "name": "Approval",
                "type": "event"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "spender",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    }
                ],
                "name": "approve",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "spender",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "subtractedValue",
                        "type": "uint256"
                    }
                ],
                "name": "decreaseAllowance",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "spender",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "addedValue",
                        "type": "uint256"
                    }
                ],
                "name": "increaseAllowance",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    }
                ],
                "name": "mint",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "previousOwner",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "newOwner",
                        "type": "address"
                    }
                ],
                "name": "OwnershipTransferred",
                "type": "event"
            },
            {
                "constant": false,
                "inputs": [],
                "name": "renounceOwnership",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "recipient",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    }
                ],
                "name": "transfer",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "value",
                        "type": "uint256"
                    }
                ],
                "name": "Transfer",
                "type": "event"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "sender",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "recipient",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    }
                ],
                "name": "transferFrom",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "newOwner",
                        "type": "address"
                    }
                ],
                "name": "transferOwnership",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "spender",
                        "type": "address"
                    }
                ],
                "name": "allowance",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "account",
                        "type": "address"
                    }
                ],
                "name": "balanceOf",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "decimals",
                "outputs": [
                    {
                        "internalType": "uint8",
                        "name": "",
                        "type": "uint8"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "getOwner",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "name",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "owner",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "symbol",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "totalSupply",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            }
        ]
        let owner
        let contractAddress = '0x735f6e949D39f02BaD26d1698A558a629D416265'
        let abi = [{ "inputs": [{ "internalType": "address", "name": "_usdt_add", "type": "address" }, { "internalType": "address", "name": "_buy_token_add", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [], "name": "buy_token_add", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_referral", "type": "address" }], "name": "buy_tokens", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_upper_limit", "type": "uint256" }, { "internalType": "uint256", "name": "_round", "type": "uint256" }], "name": "change_upperLimit", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_num", "type": "uint256" }], "name": "claim_bought_tokens", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "claim_ref_tokens", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "getAll_Buyings", "outputs": [{ "components": [{ "internalType": "uint256", "name": "investedAmount", "type": "uint256" }, { "internalType": "uint256", "name": "claim_Time", "type": "uint256" }, { "internalType": "uint256", "name": "buying_Time", "type": "uint256" }, { "internalType": "uint256", "name": "investmentNum", "type": "uint256" }, { "internalType": "uint256", "name": "unstakeTime", "type": "uint256" }, { "internalType": "bool", "name": "claimed", "type": "bool" }], "internalType": "struct DOI.allInvestments[]", "name": "", "type": "tuple[]" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "get_claim_ref_tokens", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "get_claimable_tokens", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "num", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "round", "outputs": [{ "internalType": "uint256", "name": "upper_limit", "type": "uint256" }, { "internalType": "uint256", "name": "quantity", "type": "uint256" }, { "internalType": "uint256", "name": "total_limit", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "time_end", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_owner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "usdt_address", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "user", "outputs": [{ "internalType": "uint256", "name": "tokens_for_claiming", "type": "uint256" }, { "internalType": "address", "name": "referralFrom", "type": "address" }, { "internalType": "bool", "name": "investBefore", "type": "bool" }, { "internalType": "uint256", "name": "ref_tokens_claiming", "type": "uint256" }, { "internalType": "uint256", "name": "total_investments", "type": "uint256" }], "stateMutability": "view", "type": "function" }]
        let provider = await web3modal.connect()
        let web3 = new Web3(provider)
        let contractInstance = new web3.eth.Contract(abi, contractAddress)
        let tokencontractinstance = new web3.eth.Contract(tokenAbi, tokencontractAddress)
        contractInstance.methods.num().call().then((result => {
            round = result
            console.log(result)
            contractInstance.methods.owner().call().then((result) => {
                owner = result
                console.log(owner)
            })
            if (round == 1) {
                amount = ((100000000000).toString()) + '000000000'
            }
            if (round == 2) {
                amount = ((500000000000).toString()) + '000000000'
            }
            if (round == 3) {
                amount = ((1000000000000).toString()) + '000000000'
            }
            let acc = web3.eth.getAccounts()
            let address = document.getElementById('addressValue').value
            console.log(address)
            acc.then((result) => {
                const txapprove = {
                    from: result[0],
                    to: tokencontractAddress,
                    data: tokencontractinstance.methods.approve(owner, '500000000000000000000').encodeABI()
                }
                web3.eth.sendTransaction(txapprove).then(console.log)
                const tx = {
                    from: result[0],
                    to: contractAddress,
                    data: contractInstance.methods.buy_tokens(address).encodeABI()
                }
                web3.eth.sendTransaction(tx).then(console.log)
            })
        }))
        

    }
    const buy = async () => {
        let web3modal = new Web3Modal({
            network: "mainnet",
            cacheProvider: false,
            theme:"dark"
        
          });
          let contractAddress = '0x735f6e949D39f02BaD26d1698A558a629D416265'
          let abi = [{ "inputs": [{ "internalType": "address", "name": "_usdt_add", "type": "address" }, { "internalType": "address", "name": "_buy_token_add", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [], "name": "buy_token_add", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_referral", "type": "address" }], "name": "buy_tokens", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_upper_limit", "type": "uint256" }, { "internalType": "uint256", "name": "_round", "type": "uint256" }], "name": "change_upperLimit", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_num", "type": "uint256" }], "name": "claim_bought_tokens", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "claim_ref_tokens", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "getAll_Buyings", "outputs": [{ "components": [{ "internalType": "uint256", "name": "investedAmount", "type": "uint256" }, { "internalType": "uint256", "name": "claim_Time", "type": "uint256" }, { "internalType": "uint256", "name": "buying_Time", "type": "uint256" }, { "internalType": "uint256", "name": "investmentNum", "type": "uint256" }, { "internalType": "uint256", "name": "unstakeTime", "type": "uint256" }, { "internalType": "bool", "name": "claimed", "type": "bool" }], "internalType": "struct DOI.allInvestments[]", "name": "", "type": "tuple[]" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "get_claim_ref_tokens", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "get_claimable_tokens", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "num", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "round", "outputs": [{ "internalType": "uint256", "name": "upper_limit", "type": "uint256" }, { "internalType": "uint256", "name": "quantity", "type": "uint256" }, { "internalType": "uint256", "name": "total_limit", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "time_end", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_owner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "usdt_address", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "user", "outputs": [{ "internalType": "uint256", "name": "tokens_for_claiming", "type": "uint256" }, { "internalType": "address", "name": "referralFrom", "type": "address" }, { "internalType": "bool", "name": "investBefore", "type": "bool" }, { "internalType": "uint256", "name": "ref_tokens_claiming", "type": "uint256" }, { "internalType": "uint256", "name": "total_investments", "type": "uint256" }], "stateMutability": "view", "type": "function" }]
          let provider = await web3modal.connect()
          let web3 = new Web3(provider)
          let contractInstance = new web3.eth.Contract(abi, contractAddress)
          web3.eth.getAccounts().then((result)=>{
              let tx={
                  from:result[0],
                  to:contractAddress,
                  data:contractInstance.methods.claim_bought_tokens().encodeABI()
              }
              web3.eth.sendTransaction(tx).then(console.log)
              getdata()
          })

    }
    const claim=async()=>{
        let web3modal = new Web3Modal({
            network: "mainnet",
            cacheProvider: false,
            theme:"dark"
        
          });
          let contractAddress = '0x735f6e949D39f02BaD26d1698A558a629D416265'
          let abi = [{ "inputs": [{ "internalType": "address", "name": "_usdt_add", "type": "address" }, { "internalType": "address", "name": "_buy_token_add", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [], "name": "buy_token_add", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_referral", "type": "address" }], "name": "buy_tokens", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_upper_limit", "type": "uint256" }, { "internalType": "uint256", "name": "_round", "type": "uint256" }], "name": "change_upperLimit", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_num", "type": "uint256" }], "name": "claim_bought_tokens", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "claim_ref_tokens", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "getAll_Buyings", "outputs": [{ "components": [{ "internalType": "uint256", "name": "investedAmount", "type": "uint256" }, { "internalType": "uint256", "name": "claim_Time", "type": "uint256" }, { "internalType": "uint256", "name": "buying_Time", "type": "uint256" }, { "internalType": "uint256", "name": "investmentNum", "type": "uint256" }, { "internalType": "uint256", "name": "unstakeTime", "type": "uint256" }, { "internalType": "bool", "name": "claimed", "type": "bool" }], "internalType": "struct DOI.allInvestments[]", "name": "", "type": "tuple[]" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "get_claim_ref_tokens", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "get_claimable_tokens", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "num", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "round", "outputs": [{ "internalType": "uint256", "name": "upper_limit", "type": "uint256" }, { "internalType": "uint256", "name": "quantity", "type": "uint256" }, { "internalType": "uint256", "name": "total_limit", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "time_end", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_owner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "usdt_address", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "user", "outputs": [{ "internalType": "uint256", "name": "tokens_for_claiming", "type": "uint256" }, { "internalType": "address", "name": "referralFrom", "type": "address" }, { "internalType": "bool", "name": "investBefore", "type": "bool" }, { "internalType": "uint256", "name": "ref_tokens_claiming", "type": "uint256" }, { "internalType": "uint256", "name": "total_investments", "type": "uint256" }], "stateMutability": "view", "type": "function" }]
          let provider = await web3modal.connect()
          let web3 = new Web3(provider)
          let contractInstance = new web3.eth.Contract(abi, contractAddress)
          web3.eth.getAccounts().then((result)=>{
              let tx={
                  from:result[0],
                  to:contractAddress,
                  data:contractInstance.methods.claim_ref_tokens().encodeABI()
              }
              web3.eth.sendTransaction(tx).then(console.log)
              getdata()
          })
    }
    const getdata=async()=>{
        let web3modal = new Web3Modal({
            network: "mainnet",
            cacheProvider: false,
            theme:"dark"
        
          });
          let contractAddress = '0x735f6e949D39f02BaD26d1698A558a629D416265'
          let abi = [{ "inputs": [{ "internalType": "address", "name": "_usdt_add", "type": "address" }, { "internalType": "address", "name": "_buy_token_add", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [], "name": "buy_token_add", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_referral", "type": "address" }], "name": "buy_tokens", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_upper_limit", "type": "uint256" }, { "internalType": "uint256", "name": "_round", "type": "uint256" }], "name": "change_upperLimit", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_num", "type": "uint256" }], "name": "claim_bought_tokens", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "claim_ref_tokens", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "getAll_Buyings", "outputs": [{ "components": [{ "internalType": "uint256", "name": "investedAmount", "type": "uint256" }, { "internalType": "uint256", "name": "claim_Time", "type": "uint256" }, { "internalType": "uint256", "name": "buying_Time", "type": "uint256" }, { "internalType": "uint256", "name": "investmentNum", "type": "uint256" }, { "internalType": "uint256", "name": "unstakeTime", "type": "uint256" }, { "internalType": "bool", "name": "claimed", "type": "bool" }], "internalType": "struct DOI.allInvestments[]", "name": "", "type": "tuple[]" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "get_claim_ref_tokens", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "get_claimable_tokens", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "num", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "round", "outputs": [{ "internalType": "uint256", "name": "upper_limit", "type": "uint256" }, { "internalType": "uint256", "name": "quantity", "type": "uint256" }, { "internalType": "uint256", "name": "total_limit", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "time_end", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_owner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "usdt_address", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "user", "outputs": [{ "internalType": "uint256", "name": "tokens_for_claiming", "type": "uint256" }, { "internalType": "address", "name": "referralFrom", "type": "address" }, { "internalType": "bool", "name": "investBefore", "type": "bool" }, { "internalType": "uint256", "name": "ref_tokens_claiming", "type": "uint256" }, { "internalType": "uint256", "name": "total_investments", "type": "uint256" }], "stateMutability": "view", "type": "function" }]
          let provider = await web3modal.connect()
          let web3 = new Web3(provider)
          let contractInstance = new web3.eth.Contract(abi, contractAddress)
          contractInstance.methods.get_claimable_tokens().call().then((result)=>{
              document.getElementById('balance').innerText=result
          })
          contractInstance.methods.get_claim_ref_tokens().call().then((result)=>{
              document.getElementById("ref").innerText=result
          })

    }
    return (
        <section className="main_section" onLoad={getdata}>
            <Nevigation></Nevigation>

            <Timer></Timer>

            <div className="participation">
                <div className="amount">
                    <h1>IVO Participation Amount</h1>
                    <h1>0USDT</h1>
                </div>
                <div className="person">
                    <h1>IVO Participation Persons</h1>
                    <h1>0</h1>
                </div>
            </div>


            <div className="rules_div">
                <h1>BASE IVO AMOUNT</h1>
                <div className="rule_box_1">
                    <h2>Referrer's Address</h2>
                    <h1>|</h1>
                    <input type='text' placeholder="Please fill in the reffer's address" id="addressValue"></input>

                </div>


                <div className="rule_box_2">
                    <h1>100USDT</h1>
                    <p>expeected</p>
                    <h1>1000000000<span>RAC</span></h1>
                </div>

                <div className="click" onClick={sendTransaction}>
                    <a href="#">click</a>
                </div>

                <div className="rule_price">
                    <h1>Price  1USTD = 100000000RAC</h1>
                </div>

                <hr></hr>


                <div className="rule_common_div">
                    <div className="text">$RAC Available</div>
                    <div className="number" id="balance">0</div>
                    <div className="btn" onClick={buy}><a href="#">Claim</a></div>

                </div>

                <div className="rule_common_div">
                    <div className="text">$RAC Awaiting Release</div>
                    <div className="number">0</div>
                    <div className="btn"></div>

                </div>


                <div className="rules">
                    <h1>IVO Rules</h1>
                    <p><span className="rule_number">1:</span>There is no limit to the amount of IVO, but the time limit is 10 days, and the initial price is 0.00000001 USDT. </p>
                    <p><span className="rule_number">2:</span> The quota for a single address is fixed at 100U (purchase at most). </p>
                    <p><span className="rule_number">3:</span>To participate in IVO, you need to fill in the address first to confirm the referral. The first batch of verified addresses is the address that has Freedom DAO NFTs. Your address will be verified if you have finished the IVO with your address  successfully.  </p>

                    <p><span className="rule_number">4:</span>You can get RAC and NFT rewards once you successfully invite friends to participate IVO. </p>
                    <p><span className="rule_number">5:</span>70 % of the funds raised by IVO will be added to LP and locked for 1 year. (35 % of which are added for the first time, and 35% are purchased in the secondary market) </p>
                    <p><span className="rule_number">6:</span>After $RAC is launched on PancakeSwap, you can go to the official website to receive the unlocked $RAC. </p>
                </div>

            </div>



            <div className="referals_div">
                <h1>BASE IVO AMOUNT</h1>
                <div className="rule_common_div">
                    <div className="text">$RAC Awaiting Release</div>
                    <div className="number">0</div>
                    <div className="btn"><a href="#">Claim</a></div>

                </div>
                <div className="rule_common_div">
                    <div className="text">$RAC Awaiting Release</div>
                    <div className="number">0</div>
                    <div className="btn"></div>

                </div>
                <div className="rule_common_div">
                    <div className="text">NFT to be claimed</div>
                    <div className="number" id="ref">0</div>
                    <div className="btn" onClick={claim}><a href="#">Claim</a></div>

                </div>


                <div className="scale_div">
                    <h2>Invite 10 more people to receive and NFT</h2>
                    <div className="scale_inner">
                        <div className="scale"></div>
                        <div className="rating">(1/10)</div>
                    </div>
                </div>


                <div className="rules">
                    {/* <h1>IVO Rules</h1> */}
                    <p><span className="rule_number">1:</span>ou will be rewarded 5% tokens of the amount of IVO that the invitee purchase if you invite him directly, or you could get 3% tokens of the amount of IVO that the user purchases if your invitee invites the people.</p>
                    <p><span className="rule_number">2:</span> You could get 1 NFT as the reward if you invite 10 users to participate in IVO. You could get 1 NFT per 10 valid referrals. No limit in this process, for instance, you may get 10 NFTs if you get 100 valid referrals. </p>
                    <p><span className="rule_number">3:</span> NFT was free casting during only in the IVO stage，so it's number is fixed. </p>

                    <p><span className="rule_number">4:</span>After $RAC is launched on PancakeSwap, you can go to the official website to receive the unlocked $RAC.</p>




                </div>


            </div>



            <div className="details_div">
                <h1>
                    DETAILS OF REFERALS AWARDS I RECEIVED
                </h1>
                <div className="details_inner">
                    <div className="details_steps">
                        <div className="step">
                            <h1>Total Team Size</h1>
                            <h1>0</h1>

                        </div>
                        <div className="step">
                            <h1>Total Team Buy</h1>
                            <h1>0RAC</h1>

                        </div>
                        <div className="step">
                            <h1>My Total Rewards</h1>
                            <h1>0RAC</h1>

                        </div>

                    </div>

                    <hr></hr>

                    <div className="details_link">
                        <ul>
                            <li>Referred user</li>
                            <li>Address</li>
                            <li>IVO amount</li>
                            <li>Buy time</li>
                            <li>Rewards</li>
                        </ul>
                    </div>

                    <hr className="last_line"></hr>
                </div>

            </div>

            <div className="my_nft">
                <h1>MY MFT <snap className="contract">NFT Contract Address</snap></h1>

                <h2> <span className="address">0xd888fB9c23297a080FE4881F4eb7F361cCD37B9F</span></h2>
            </div>


            <div className="last_div">
                <div className="rules">
                    <h3>Raccoon DAO NFTs are the core signals of the RAC ecosystem. With the development of the project, in addition to the fee dividends, it will also receive that as below:</h3>
                    <p><span className="rule_number">1:</span>Dividends from advertising platform revenue </p>
                    <p><span className="rule_number">2:</span> Earning dividends from NFTs trade platform  </p>
                    <p><span className="rule_number">3:</span>Metaverse dApps Token airdrop  </p>

                    <p><span className="rule_number">4:</span>Free file usage storage </p>
                    <p><span className="rule_number">5:</span>Dividends of other web3 dApps benefits in the future  </p>
                    <p><span className="rule_number">6:</span>A The preemptive right of purchase Metaverse Space(Space is more valuable than Land)  </p>







                    {/* <h2 className="rule_number">1:</h2><p>  Dividends from advertising platform revenue   </p>
                    <h2 className="rule_number">2:</h2><p>  Earning dividends from NFTs trade platform   </p>
                    <h2 className="rule_number">3:</h2><p>  Metaverse dApps Token airdrop   </p>
                    <h2 className="rule_number">4:</h2><p>  Free file usage storage  </p>
                    <h2 className="rule_number">5:</h2><p>  Dividends of other web3 dApps benefits in the future </p>
                    <h2 className="rule_number">6:</h2><p>  The preemptive right of purchase Metaverse Space(Space is more valuable than Land) </p> */}
                </div>


            </div>

        </section>
    )
}

export default IVO;