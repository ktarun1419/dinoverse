import React from "react";
import './Nevigation.css'
import logo from './images/logo.png';
import Web3 from "web3/dist/web3.min.js";
import Web3Modal, { CHAIN_DATA_LIST, Provider } from "web3modal";
const Nevigation = ()=>{
    const connect2 = async () => {
        // let providerOptions = {
        //    walletconnect: {
        //     package: WalletConnectProvider,
        //      options: {
        //        // infuraId: "b50bee145172497d9576a6f79b1209aa",
        //      infuraId: 'JuKirzHWDP97kprdQEkmzv0X7J8mz64emhs4Os70',
        //      chainId: 56,
        //       rpc: {
        //          // 1: "https://mainnet.infura.io/v3/b50bee145172497d9576a6f79b1209aa",
        //          56: "https://bsc-dataseed.binance.org",
        //        },
        //      }
        //    },
        // };
     
       let web3modal = new Web3Modal({
         network: "mainnet",
         cacheProvider: false,
         theme:"dark"
     
       });
       console.log('function called')
       let provider = await web3modal.connect()
       let web3 = new Web3(provider)
       let acc = web3.eth.getAccounts()
       acc.then((result) => {
         if (result[0] != null) {
           let nim = result[0].split("");
           let account = nim[0] + nim[1] + nim[2] + nim[3] + "..." + nim[37] + nim[38] + nim[39] + nim[40] + nim[41]
           let address=document.getElementById('address')
           if (address) {
             address.innerText=account
           }
         }
       })
     }
    return(
        <section className="Nevigation">

            <div className="main_nav">

            
            <div className="logo">
                <img src={logo}></img>
            </div>
            {/* <div className="links">
                <a href="#">Home</a>
                <a href="#">IVO</a>
                <a href="#">My account</a>
                <a href="#">Dashboard</a>
                <a href="#">Whitepaper</a>
                <a href="#">Language</a>

            </div> */}
            <div className="button_connect" onClick={connect2}>
            <a href="#" id="address">Connect Wallet</a>    
            </div> 

            </div>

        </section>
    )
}

export default Nevigation;