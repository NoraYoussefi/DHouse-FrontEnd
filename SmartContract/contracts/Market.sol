// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;
pragma experimental ABIEncoderV2;

contract Market {

    address public admin=0x37BFb7C45D10dcD11572AD8F8Bbb437d8B053Cd0;

    struct Property{
        address  owner;
        string property_title;
        uint SoldnTimes;
    }


    mapping(string => Property) public Properties;


    modifier isAdmin() {
        require(msg.sender == admin,"You're not the Admin");
        _;
    }

    modifier hasEnoughEth(){
        require(msg.value < msg.sender.balance,"Not Enough Eth");
        _;
    }


    event propSold(address new_owner, string indexed propertyTitle); //emitted when a prop is sold
    event propRegistered(address owner, string indexed propertyTitle); //emitted when a new prop is registered



    constructor(){
        //admin=msg.sender;
    }




    //Register A new property after validation by the admin
    function registerProperty(address _owner,string memory prop_title) public isAdmin {
        Property storage property =  Properties[prop_title];

        property.owner=_owner;
        property.property_title=prop_title;

        Properties[prop_title]=property;

        emit propRegistered(_owner,prop_title);
    }



    //Function to transfer ownership of property when sold
    function BuyProperty(string memory prop_title) public payable hasEnoughEth{
        Property storage property =  Properties[prop_title];

        property.owner=msg.sender; //new owner is function caller
        property.property_title=prop_title;
        property.SoldnTimes++; //Inceremewnt Number of times that the property is sold

        Properties[prop_title]=property;

        emit propSold(msg.sender,prop_title);
    }



    //----------------------AUTO-VALIDATION OF NEW PROPERTIES


    //verify that the property exists
    //if not, must be validated by the admin
    //if yes, then verify the owner
    function verifyPropExistance(string memory prop_title) public view returns(bool) {

        string memory propToVerify=Properties[prop_title].property_title;

        return (keccak256(abi.encodePacked((propToVerify))) == keccak256(abi.encodePacked((prop_title))));
    }


    //verify owner of the property
    function isOwnerOfProperty(address _owner,string memory prop_title) public view returns(bool) {
        return Properties[prop_title].owner==_owner;
    }





}
