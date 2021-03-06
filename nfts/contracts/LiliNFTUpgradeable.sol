// SPDX-License-Identifier: APGL-3.0

/**
 *   LiliNFT.sol - SChain Configuration
 *   Copyright (C) 2022-Present Lilius, Inc
 *   @author TheGreatAxios
 *
 *   LiliNFT is free software: you can redistribute it and/or modify
 *   it under the terms of the GNU Affero General Public License as published
 *   by the Free Software Foundation, either version 3 of the License, or
 *   (at your option) any later version.
 *
 *   LiliNFT is distributed in the hope that it will be useful,
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *   GNU Affero General Public License for more details.
 *
 *   You should have received a copy of the GNU Affero General Public License
 *   along with LiliNFT.  If not, see <https://www.gnu.org/licenses/>.
 */

import "./interfaces/ILiliNFTUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

contract LiliNFTUpgradeable is ERC721Upgradeable, OwnableUpgradeable, ILiliNFTUpgradeable {

    uint256 public tokenId;

    string constant public NAME = 'LiliNFT';
    string constant public SYMBOL = 'LILINFT';

    address public sFuel; 

    modifier topUpSFuel {
        _retrieveSFuel();
		_;
	}

    function initialize(address _owner, address _sFuel) external initializer {
        ERC721Upgradeable.__ERC721_init(NAME, SYMBOL);
        OwnableUpgradeable.__Ownable_init();
        transferOwnership(_owner);
        sFuel = _sFuel;
        tokenId = 0;
    }

    function updateSFuelAddress(address _address) external override onlyOwner {
        require(_address != address(0), "Address Cannot be 0 Address");
        require(_address != sFuel, "Please provide a new address");
        sFuel = _address;
    }

    function safeMintWithSFuel(address _reciever) external topUpSFuel {
        require(_reciever != address(0), "Invalid Minter");
        super._safeMint(_reciever, tokenId);
        tokenId = tokenId + 1;       
    }

    function _retrieveSFuel() internal {
        require(sFuel != address(0), "0 Address Not Valid");
		(bool success, ) = sFuel.call(abi.encodeWithSignature("retrieveSFuel(address)", msg.sender));
        require(success, 'Error Topping Up S-Fuel');
    }
}