import { Injectable } from '@angular/core';
import Web3 from "web3";
// @ts-ignore
import {contractABI,contractAddress} from '../../../abi.js';

declare let window: any;
declare let require:any;


@Injectable({
  providedIn: 'root'
})


export class Web3Service {

  public account: any = null;
  private web3: any;
  private LoggedInWithMask:boolean=false;

  private Contract:any; //wrapper for the contract

  private web3Provider:any;



  //login with metamask
  async LoginWithMetaMask(){
    if (typeof window.ethereum !== 'undefined') {
      this.web3Provider = window.web3.currentProvider
      this.web3 = new Web3(window.web3.currentProvider)
      console.log('MetaMask is installed!');
    }
    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        try {
            // Request account access if needed
            await window.ethereum.enable();
            // Acccounts now exposed
            this.web3.eth.sendTransaction({/* ... */});

            //logged in to true
            this.LoggedInWithMask=true;
        } catch (error) {
            // User denied account access...
        }
    }
    // Legacy dapp browsers...
    else if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider);
        // Acccounts always exposed
        this.web3.eth.sendTransaction({/* ... */});
          //getting the connected account

        //logged in to true
        this.LoggedInWithMask=true;
    }
    console.log(this.web3)


    //loading the account
    this.loadAccount()

    //loading the contract
    this.loadContract()

  }




  constructor() {}




  //get the current account
  async loadAccount(){

    if(this.account==null){

      console.log("Account is null -- Fetching account")

      const accounts =await window.ethereum.request({ method: 'eth_requestAccounts' });

      this.account = accounts[0];

      //the address of the current user
      this.web3.eth.Contract.defaultAccount = this.account

      console.log(this.account)

      window.sessionStorage.setItem("publickey", this.account);

    }

  }




  //load the contract & to get its methods
  async loadContract(){
    this.Contract=new this.web3.eth.Contract(contractABI,contractAddress,{gasPrice: '20000000', from: this.account})
  }






  //transfer eth from one account to another
  async transferEth(receiver:string,etherValue:string){

    this.web3.eth.sendTransaction({
      from: this.account,
      to: receiver, //receiver address
      value: Web3.utils.toWei(etherValue,"ether"),
    })

    .on('confirmation', function(){
      console.log("Eth Sent");
    })

    .on('error',function(){ console.log("Eth Sent")}); // If a out of gas error, the second parameter is the receipt.

  }



  //Regsitering a new property ---- method belongs to the ADMIN
  async RegisterProperty(owner:string,property_title:string){

    this.Contract.methods.registerProperty(owner,property_title)
    .send(
      {
        from: this.account,
        gas: '6721975'
      }
    )
    .then(console.log);

  }




  //Method called by the buyer
  async BuyProperty(title:string,etherValue:string,seller:string){
    console.log(etherValue)

    const buyProp=this.Contract.methods.BuyProperty(title) //ownership of property is changed
    .send(
      {
        from: this.account,
        gas: '6721975',
      }
    )

    console.log(buyProp);

    this.transferEth(seller,etherValue) //transfer funds After changing ownership

  }




  //Verify the ownership -- called when adding a new property
  async verifyOwner(prop_title:string){

    //(address of the supposed to be the muthufucking owner)
    const verification=await this.Contract.methods.isOwnerOfProperty(this.account,prop_title)

    .call({
      from:this.account,
      gas: '6721975',
      gasPrice: '20000000',
      to: contractAddress // contract address
    })

  //  .then(console.log)

   return verification

  }




  //Verify that the property exists -- called when adding a new property
  async verifyPropExistance(prop_title:string){

    //(address of the supposed to be the muthufucking owner)
    const verification=await this.Contract.methods.verifyPropExistance(prop_title)

    .call({
      from:this.account,
      gas: '6721975',
      gasPrice: '20000000',
      to: contractAddress // contract address
    })

    return verification
  }





  //get the balance of the current account
  async getCurrentAccountBalance(){
    return this.web3.eth.getBalance(this.account);
  }







//---------------------------------------------------------------------------------------------




  //add proprety to struct
  async addProperty(title:string,etherValue:any){

    const addProp=this.Contract.methods.addProperty(contractAddress,title)
    .send(
      {
        from: this.account,
        gas: '6721975'
      }
    )
    .then(
      this.transferEth("a",etherValue)
    )

    console.log(addProp)

  }




  async getPropretyByTitle(title:string){

    const getProp=this.Contract.methods.getPropertyByTitle(title).call({
      from:this.account,
      gas: '6721975',
      gasPrice: '20000000',
      to: contractAddress // contract address
    })

    .then(console.log);

  }




  async sayhi(){
    const getProp=this.Contract.methods.sayHi().call(
        {
          from:this.account,
          gas: '6721975',
          gasPrice: '20000000',
          to: "0x0850326c39132d99fECE20ab5F7B36b486E184A3" // contract address
        }
      )
      .then(console.log);
  }




  async getAllProps(){

    const getProp=this.Contract.methods.getAllProperties().call(
      {
        from:this.account,
        gas: '6721975',
        gasPrice: '20000000',
        to: "0x0850326c39132d99fECE20ab5F7B36b486E184A3" // contract address
      }
    )
    .then(console.log);
    // getAllProperties
  }









}












  // }
