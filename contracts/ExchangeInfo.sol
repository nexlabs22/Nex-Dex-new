// SPDX-License-Identifier: MIT

pragma solidity ^0.8.17;
pragma abicoder v2;


import {Exchange} from "./Exchange.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

contract ExchangeInfo is Ownable {

    struct Pool {
    uint256 vBaycPoolSize;
    uint256 vUsdPoolSize;
    }

    Exchange public exchange;

    constructor(address exchangeAddress){
        exchange = Exchange(exchangeAddress);
    }

    function changeExchangeAddress(address exchangeAddress) public onlyOwner {
        exchange = Exchange(exchangeAddress);
    }

  

  //get minimum long bayc amount that user receives
  function getMinimumLongBaycOut(uint256 _usdAmount) public view returns (uint256) {
    int256 vBaycPoolSize = int256(exchange.vBaycPoolSize());
    int256 vUsdPoolSize = int256(exchange.vUsdPoolSize());
    int256 k = vBaycPoolSize * vUsdPoolSize;
    int256 newvUsdPoolSize = vUsdPoolSize + int256(_usdAmount);
    int256 newvBaycPoolSize = k / newvUsdPoolSize;

    address[] memory activeUsers = exchange.getAllActiveUsers();
    for (uint256 i; i < activeUsers.length; i++) {
      if (activeUsers[i] != address(0)) {
        bool isHardLiquidatable = exchange._isHardLiquidatable(
          activeUsers[i],
          uint256(newvBaycPoolSize),
          uint256(newvUsdPoolSize)
        );
        if (isHardLiquidatable == true) {
          //update new pool
          k = newvBaycPoolSize * newvUsdPoolSize;
          newvBaycPoolSize += exchange.uservBaycBalance(activeUsers[i]);
          newvUsdPoolSize = k / newvBaycPoolSize;
          //update pool
          k = vBaycPoolSize * vUsdPoolSize;
          vBaycPoolSize += exchange.uservBaycBalance(activeUsers[i]);
          vUsdPoolSize = k / vBaycPoolSize;
        }
      }
    }

    for (uint256 i = 0; i < activeUsers.length; i++) {
      if (activeUsers[i] != address(0)) {
        bool isPartialLiquidatable = exchange._isPartialLiquidatable(
          activeUsers[i],
          uint256(newvBaycPoolSize),
          uint256(newvUsdPoolSize)
        );
        if (isPartialLiquidatable == true) {
          uint256 vUsdPartialLiquidateAmount = exchange._calculatePartialLiquidateValue(
            activeUsers[i],
            uint256(newvBaycPoolSize),
            uint256(newvUsdPoolSize)
          );
          if (exchange.uservBaycBalance(activeUsers[i]) > 0) {
            //update new pool
            k = newvBaycPoolSize * newvUsdPoolSize;
            newvUsdPoolSize -= int256(vUsdPartialLiquidateAmount);
            newvBaycPoolSize = k / newvUsdPoolSize;
            //update pool
            k = vBaycPoolSize * vUsdPoolSize;
            vUsdPoolSize -= int256(vUsdPartialLiquidateAmount);
            vBaycPoolSize = k / vUsdPoolSize;
          } else if (exchange.uservBaycBalance(activeUsers[i]) < 0) {
            //update new pool
            k = newvBaycPoolSize * newvUsdPoolSize;
            newvUsdPoolSize += int256(vUsdPartialLiquidateAmount);
            newvBaycPoolSize = k / newvUsdPoolSize;
            //update pool
            k = vBaycPoolSize * vUsdPoolSize;
            vUsdPoolSize += int256(vUsdPartialLiquidateAmount);
            vBaycPoolSize = k / vUsdPoolSize;
          }
        }
      }
    }

    k = vBaycPoolSize * vUsdPoolSize;
    int256 finalvUsdPoolSize = vUsdPoolSize + int256(_usdAmount);
    int256 finalvBaycPoolSize = k / finalvUsdPoolSize;
    int256 userBaycOut = vBaycPoolSize - finalvBaycPoolSize;
    return uint256(userBaycOut);
  }


  //get minimum short bayc amount that user receives
  function getMinimumShortBaycOut(uint256 _usdAmount) public view returns (uint) {
    int256 vBaycPoolSize = int256(exchange.vBaycPoolSize());
    int256 vUsdPoolSize = int256(exchange.vUsdPoolSize());
    int256 k = vBaycPoolSize * vUsdPoolSize;
    int256 newvUsdPoolSize = vUsdPoolSize - int256(_usdAmount);
    int256 newvBaycPoolSize = k / newvUsdPoolSize;

    address[] memory activeUsers = exchange.getAllActiveUsers();
    for (uint256 i; i < activeUsers.length; i++) {
      if (activeUsers[i] != address(0)) {
        bool isHardLiquidatable = exchange._isHardLiquidatable(
          activeUsers[i],
          uint256(newvBaycPoolSize),
          uint256(newvUsdPoolSize)
        );
        if (isHardLiquidatable == true) { 
          //update new pool
          k = newvBaycPoolSize * newvUsdPoolSize;
          newvBaycPoolSize += exchange.uservBaycBalance(activeUsers[i]);
          newvUsdPoolSize = k / newvBaycPoolSize;
          //update pool
          k = vBaycPoolSize * vUsdPoolSize;
          vBaycPoolSize += exchange.uservBaycBalance(activeUsers[i]);
          vUsdPoolSize = k / vBaycPoolSize;
          
        }
      }
    }
    for (uint256 i = 0; i < activeUsers.length; i++) {
      if (activeUsers[i] != address(0)) {
        bool isPartialLiquidatable = exchange._isPartialLiquidatable(
          activeUsers[i],
          uint256(newvBaycPoolSize),
          uint256(newvUsdPoolSize)
        );
        if (isPartialLiquidatable == true) {
          
          uint256 vUsdPartialLiquidateAmount = exchange._calculatePartialLiquidateValue(
            activeUsers[i],
            uint256(newvBaycPoolSize),
            uint256(newvUsdPoolSize)
          );
          if (exchange.uservBaycBalance(activeUsers[i]) > 0) {
            //update new pool
            k = newvBaycPoolSize * newvUsdPoolSize;
            newvUsdPoolSize -= int256(vUsdPartialLiquidateAmount);
            newvBaycPoolSize = k / newvUsdPoolSize;
            //update pool
            k = vBaycPoolSize * vUsdPoolSize;
            vUsdPoolSize -= int256(vUsdPartialLiquidateAmount);
            vBaycPoolSize = k / vUsdPoolSize;
          } else if (exchange.uservBaycBalance(activeUsers[i]) < 0) {
            //update new pool
            k = newvBaycPoolSize * newvUsdPoolSize;
            newvUsdPoolSize += int256(vUsdPartialLiquidateAmount);
            newvBaycPoolSize = k / newvUsdPoolSize;
            //update pool
            k = vBaycPoolSize * vUsdPoolSize;
            vUsdPoolSize += int256(vUsdPartialLiquidateAmount);
            vBaycPoolSize = k / vUsdPoolSize;
          }
        }
      }
    }

    k = vBaycPoolSize * vUsdPoolSize;
    int256 finalvUsdPoolSize = vUsdPoolSize - int256(_usdAmount);
    int256 finalvBaycPoolSize = k / finalvUsdPoolSize;
    int256 userBaycOut = finalvBaycPoolSize - vBaycPoolSize;

    return uint256(userBaycOut);

  }

    
  //get minimum long usd amount that user receives
  function getMinimumLongUsdOut(uint256 _BaycAmount) public view returns (uint256) {
    int256 vBaycPoolSize = int256(exchange.vBaycPoolSize());
    int256 vUsdPoolSize = int256(exchange.vUsdPoolSize());
    int256 k = vBaycPoolSize * vUsdPoolSize;
    int256 newvBaycPoolSize = vBaycPoolSize - int256(_BaycAmount);
    int256 newvUsdPoolSize = k / newvBaycPoolSize;  

    address[] memory activeUsers = exchange.getAllActiveUsers();
    for (uint256 i; i < activeUsers.length; i++) {
      if (activeUsers[i] != address(0)) {
        bool isHardLiquidatable = exchange._isHardLiquidatable(
          activeUsers[i],
          uint256(newvBaycPoolSize),
          uint256(newvUsdPoolSize)
        );
        if (isHardLiquidatable == true) {
          
          //update new pool
          k = newvBaycPoolSize * newvUsdPoolSize;
          newvBaycPoolSize += exchange.uservBaycBalance(activeUsers[i]);
          newvUsdPoolSize = k / newvBaycPoolSize;
          //update pool
          k = vBaycPoolSize * vUsdPoolSize;
          vBaycPoolSize += exchange.uservBaycBalance(activeUsers[i]);
          vUsdPoolSize = k / vBaycPoolSize;
        }
      }
    }

    for (uint256 i = 0; i < activeUsers.length; i++) {
      if (activeUsers[i] != address(0)) {
        bool isPartialLiquidatable = exchange._isPartialLiquidatable(
          activeUsers[i],
          uint256(newvBaycPoolSize),
          uint256(newvUsdPoolSize)
        );
        if (isPartialLiquidatable == true) {
          uint256 vUsdPartialLiquidateAmount = exchange._calculatePartialLiquidateValue(
            activeUsers[i],
            uint256(newvBaycPoolSize),
            uint256(newvUsdPoolSize)
          );
          if (exchange.uservBaycBalance(activeUsers[i]) > 0) {
            //update new pool
            k = newvBaycPoolSize * newvUsdPoolSize;
            newvUsdPoolSize -= int256(vUsdPartialLiquidateAmount);
            newvBaycPoolSize = k / newvUsdPoolSize;
            //update pool
            k = vBaycPoolSize * vUsdPoolSize;
            vUsdPoolSize -= int256(vUsdPartialLiquidateAmount);
            vBaycPoolSize = k / vUsdPoolSize;
          } else if (exchange.uservBaycBalance(activeUsers[i]) < 0) {
            //update new pool
            k = newvBaycPoolSize * newvUsdPoolSize;
            newvUsdPoolSize += int256(vUsdPartialLiquidateAmount);
            newvBaycPoolSize = k / newvUsdPoolSize;
            //update pool
            k = vBaycPoolSize * vUsdPoolSize;
            vUsdPoolSize += int256(vUsdPartialLiquidateAmount);
            vBaycPoolSize = k / vUsdPoolSize;
          }
        }
      }
    }


    k = vBaycPoolSize * vUsdPoolSize;
    int256 finalvBaycPoolSize = vBaycPoolSize - int256(_BaycAmount);
    int256 finalvUsdPoolSize = k / finalvBaycPoolSize;
    int256 userUsdOut = finalvUsdPoolSize - vUsdPoolSize;
    return uint256(userUsdOut);
  }



  //get minimum short usd amount that user receives
  function getMinimumShortUsdOut(uint256 _BaycAmount) public view returns (uint256) {
    int256 vBaycPoolSize = int256(exchange.vBaycPoolSize());
    int256 vUsdPoolSize = int256(exchange.vUsdPoolSize());
    int256 k = vBaycPoolSize * vUsdPoolSize;
    int256 newvBaycPoolSize = vBaycPoolSize + int256(_BaycAmount);
    int256 newvUsdPoolSize = k / newvBaycPoolSize;  

    address[] memory activeUsers = exchange.getAllActiveUsers();
    for (uint256 i; i < activeUsers.length; i++) {
      if (activeUsers[i] != address(0)) {
        bool isHardLiquidatable = exchange._isHardLiquidatable(
          activeUsers[i],
          uint256(newvBaycPoolSize),
          uint256(newvUsdPoolSize)
        );
        if (isHardLiquidatable == true) {
          
          //update new pool
          k = newvBaycPoolSize * newvUsdPoolSize;
          newvBaycPoolSize += exchange.uservBaycBalance(activeUsers[i]);
          newvUsdPoolSize = k / newvBaycPoolSize;
          //update pool
          k = vBaycPoolSize * vUsdPoolSize;
          vBaycPoolSize += exchange.uservBaycBalance(activeUsers[i]);
          vUsdPoolSize = k / vBaycPoolSize;
        }
      }
    }

    for (uint256 i = 0; i < activeUsers.length; i++) {
      if (activeUsers[i] != address(0)) {
        bool isPartialLiquidatable = exchange._isPartialLiquidatable(
          activeUsers[i],
          uint256(newvBaycPoolSize),
          uint256(newvUsdPoolSize)
        );
        if (isPartialLiquidatable == true) {
          uint256 vUsdPartialLiquidateAmount = exchange._calculatePartialLiquidateValue(
            activeUsers[i],
            uint256(newvBaycPoolSize),
            uint256(newvUsdPoolSize)
          );
          if (exchange.uservBaycBalance(activeUsers[i]) > 0) {
            //update new pool
            k = newvBaycPoolSize * newvUsdPoolSize;
            newvUsdPoolSize -= int256(vUsdPartialLiquidateAmount);
            newvBaycPoolSize = k / newvUsdPoolSize;
            //update pool
            k = vBaycPoolSize * vUsdPoolSize;
            vUsdPoolSize -= int256(vUsdPartialLiquidateAmount);
            vBaycPoolSize = k / vUsdPoolSize;
          } else if (exchange.uservBaycBalance(activeUsers[i]) < 0) {
            //update new pool
            k = newvBaycPoolSize * newvUsdPoolSize;
            newvUsdPoolSize += int256(vUsdPartialLiquidateAmount);
            newvBaycPoolSize = k / newvUsdPoolSize;
            //update pool
            k = vBaycPoolSize * vUsdPoolSize;
            vUsdPoolSize += int256(vUsdPartialLiquidateAmount);
            vBaycPoolSize = k / vUsdPoolSize;
          }
        }
      }
    }

    k = vBaycPoolSize * vUsdPoolSize;
    int256 finalvBaycPoolSize = vBaycPoolSize + int256(_BaycAmount);
    int256 finalvUsdPoolSize = k / finalvBaycPoolSize;
    int256 userUsdOut = vUsdPoolSize - finalvUsdPoolSize;
    return uint256(userUsdOut);
  }



  //liquidation helper
  function getLiquidateList(int newvBaycPoolSize, int newvUsdPoolSize) public view returns (address[] memory, address[]memory) {
    int256 vBaycPoolSize = int256(exchange.vBaycPoolSize());
    int256 vUsdPoolSize = int256(exchange.vUsdPoolSize());
    int256 k = vBaycPoolSize * vUsdPoolSize;
    int256 newvBaycPoolSize = newvBaycPoolSize;
    int256 newvUsdPoolSize = newvUsdPoolSize;  

    address[] memory activeUsers = exchange.getAllActiveUsers();

    //create partial and hard liquidate list
    address[] memory hardLiquidateUsers = new address[](activeUsers.length);
    address[] memory partialLiquidateUsers = new address[](activeUsers.length);
    uint hardLiquidateUsersCount;
    uint partialLiquidateUsersCount;
    //first hardliquidateUsers
    for (uint256 i; i < activeUsers.length; i++) {
      if (activeUsers[i] != address(0)) {
        bool isHardLiquidatable = exchange._isHardLiquidatable(
          activeUsers[i],
          uint256(newvBaycPoolSize),
          uint256(newvUsdPoolSize)
        );
        if (isHardLiquidatable == true) {
          //store in hardLiquidate list
          hardLiquidateUsers[hardLiquidateUsersCount] = activeUsers[i];
          hardLiquidateUsersCount ++;
          //update new pool
          k = newvBaycPoolSize * newvUsdPoolSize;
          newvBaycPoolSize += exchange.uservBaycBalance(activeUsers[i]);
          newvUsdPoolSize = k / newvBaycPoolSize;
          //update pool
          k = vBaycPoolSize * vUsdPoolSize;
          vBaycPoolSize += exchange.uservBaycBalance(activeUsers[i]);
          vUsdPoolSize = k / vBaycPoolSize;
        }
      }
    }

    //Second partially liquidate users
    for (uint256 i = 0; i < activeUsers.length; i++) {
      if (activeUsers[i] != address(0)) {
        bool isPartialLiquidatable = exchange._isPartialLiquidatable(
          activeUsers[i],
          uint256(newvBaycPoolSize),
          uint256(newvUsdPoolSize)
        );
        if (isPartialLiquidatable == true) {
          //store in hardLiquidate list
          partialLiquidateUsers[partialLiquidateUsersCount] = activeUsers[i];
          partialLiquidateUsersCount ++;
          //calculate partial liquidate amount
          uint256 vUsdPartialLiquidateAmount = exchange._calculatePartialLiquidateValue(
            activeUsers[i],
            uint256(newvBaycPoolSize),
            uint256(newvUsdPoolSize)
          );
          if (exchange.uservBaycBalance(activeUsers[i]) > 0) {
            //update new pool
            k = newvBaycPoolSize * newvUsdPoolSize;
            newvUsdPoolSize -= int256(vUsdPartialLiquidateAmount);
            newvBaycPoolSize = k / newvUsdPoolSize;
            //update pool
            k = vBaycPoolSize * vUsdPoolSize;
            vUsdPoolSize -= int256(vUsdPartialLiquidateAmount);
            vBaycPoolSize = k / vUsdPoolSize;
          } else if (exchange.uservBaycBalance(activeUsers[i]) < 0) {
            //update new pool
            k = newvBaycPoolSize * newvUsdPoolSize;
            newvUsdPoolSize += int256(vUsdPartialLiquidateAmount);
            newvBaycPoolSize = k / newvUsdPoolSize;
            //update pool
            k = vBaycPoolSize * vUsdPoolSize;
            vUsdPoolSize += int256(vUsdPartialLiquidateAmount);
            vBaycPoolSize = k / vUsdPoolSize;
          }
        }
      }
    }
    

    address[] memory finalHardLiquidateUsers = new address[](hardLiquidateUsersCount);
    for (uint i = 0; i < hardLiquidateUsersCount; i++) {
      if(hardLiquidateUsers[i] != address(0)){
        finalHardLiquidateUsers[i] = hardLiquidateUsers[i]; 
      }
    }
    address[] memory finalPartialLiquidateUsers = new address[](partialLiquidateUsersCount);
    for (uint i = 0; i < partialLiquidateUsersCount; i++) {
      if(partialLiquidateUsers[i] != address(0)){
        finalPartialLiquidateUsers[i] = partialLiquidateUsers[i]; 
      }
    }
    // return these two list
    return (finalHardLiquidateUsers, finalPartialLiquidateUsers);
  }


  function openLongLiquidateList(uint _usdAmount) public view returns (address[] memory, address[]memory) {
    int256 vBaycPoolSize = int256(exchange.vBaycPoolSize());
    int256 vUsdPoolSize = int256(exchange.vUsdPoolSize());
    int256 k = vBaycPoolSize * vUsdPoolSize;
    int256 newvUsdPoolSize = vUsdPoolSize + int256(_usdAmount);
    int256 newvBaycPoolSize = k / newvUsdPoolSize;
    return getLiquidateList(newvBaycPoolSize, newvUsdPoolSize);
  }

  function openShortLiquidateList(uint _usdAmount) public view returns (address[] memory, address[]memory) {
    int256 vBaycPoolSize = int256(exchange.vBaycPoolSize());
    int256 vUsdPoolSize = int256(exchange.vUsdPoolSize());
    int256 k = vBaycPoolSize * vUsdPoolSize;
    int256 newvUsdPoolSize = vUsdPoolSize - int256(_usdAmount);
    int256 newvBaycPoolSize = k / newvUsdPoolSize;
    return getLiquidateList(newvBaycPoolSize, newvUsdPoolSize);
  }


  function closeLongLiquidateList(uint _BaycAmount) public view returns (address[] memory, address[]memory) {
    int256 vBaycPoolSize = int256(exchange.vBaycPoolSize());
    int256 vUsdPoolSize = int256(exchange.vUsdPoolSize());
    int256 k = vBaycPoolSize * vUsdPoolSize;
    int256 newvBaycPoolSize = vBaycPoolSize + int256(_BaycAmount);
    int256 newvUsdPoolSize = k / newvBaycPoolSize;  
    return getLiquidateList(newvBaycPoolSize, newvUsdPoolSize);
  }


  function closeShortLiquidateList(uint _BaycAmount) public view returns (address[] memory, address[]memory) {
    int256 vBaycPoolSize = int256(exchange.vBaycPoolSize());
    int256 vUsdPoolSize = int256(exchange.vUsdPoolSize());
    int256 k = vBaycPoolSize * vUsdPoolSize;
    int256 newvBaycPoolSize = vBaycPoolSize - int256(_BaycAmount);
    int256 newvUsdPoolSize = k / newvBaycPoolSize;
    return getLiquidateList(newvBaycPoolSize, newvUsdPoolSize);
  }
  
  
}