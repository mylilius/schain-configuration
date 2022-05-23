# Initial Configuration Process

## The Setup (Current)

1. Upon installing this repository, begin by running ```npm install``` in the root of the directory
2. Move the .env.example file to the .env file by running ```mv .env.example .env```
2. Run ```chmod 700 ./create_outputs.sh && ./create_outputs.sh``` in the root directory which will create the proper folder structure for the outputs
3. Run ```chmod 700 ./install_msg.sh && ./install_msg.sh``` which will install the multisigwallet-cli in a local directory and should handle the issues that have arisen with something not working. It will probably fail at the end of the install but should work. 
4. Change the path in the .env file to your multisigwallet-cli installation in order to properly chain the call for encoding the assignment data
5. Visit the [SKALE Network Documentation](https://docs.skale.network) in order to understand the roles in-depth. All of the necessary toggles are preset to false and chainA (your chain goes there) in the .env.example file

