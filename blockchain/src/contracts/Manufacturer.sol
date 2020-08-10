pragma solidity ^0.6.6;

import './Product.sol';

contract Manufacturer is Product {

    struct manufacturer {
        string locationAddress;
        string manufacturerName;
        address mid;
        address[] productsArr;
    }

    mapping (address => manufacturer) public manufacturerMap;

    constructor() public {}

    function createManufacturer(string memory _name, string memory _addressName) public{
        address _mid = address(bytes20(sha256(abi.encodePacked(msg.sender, now))));
        manufacturerMap[msg.sender] = manufacturer(_addressName, _name, _mid, 0);
    }

    function addProductToManufacturer(string memory _itemName, uint _quantity) public returns(address) {
        address _id = createProduct(_itemName, _quantity);
        manufacturerMap[msg.sender].productsArr.push(_id);

        return _id;
    }
    
    function getItems() public view returns (address[] memory) {
        address[] memory ret = new address[](manufacturerMap[msg.sender].productsArr.length);
        for (uint i = 0; i < manufacturerMap[msg.sender].productsArr.length; i++) {
            ret[i] = manufacturerMap[msg.sender].productsArr[i];
        }
        return ret;
    }
}