// SPDX-License-Identifier: APGL-3.0

/**
 *   ILiliNFT.sol - SChain Configuration
 *   Copyright (C) 2022-Present Lilius, Inc
 *   @author TheGreatAxios
 *
 *   ILiliNFT is free software: you can redistribute it and/or modify
 *   it under the terms of the GNU Affero General Public License as published
 *   by the Free Software Foundation, either version 3 of the License, or
 *   (at your option) any later version.
 *
 *   ILiliNFT is distributed in the hope that it will be useful,
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *   GNU Affero General Public License for more details.
 *
 *   You should have received a copy of the GNU Affero General Public License
 *   along with ILiliNFT.  If not, see <https://www.gnu.org/licenses/>.
 */

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

interface ILiliNFT is IERC721 {

    function updateSFuelAddress(address _address) external;
    function safeMintWithSFuel(address _reciever) external;

}