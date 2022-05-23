// SPDX-License-Identifier: APGL-3.0
pragma solidity ^0.8.0;

interface IEtherbase {
    receive() external payable;
    function retrieve(address payable receiver) external;
    function partiallyRetrieve(address payable receiver, uint amount) external;
}