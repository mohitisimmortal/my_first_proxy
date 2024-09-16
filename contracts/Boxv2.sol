// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

contract Boxv2 {
    uint public value;

    function setvalue(uint _value)public  {
        value=_value;
    }

    function valuemultiplier(uint _multiplyBy)public  {
        value=value*_multiplyBy;
    }

}