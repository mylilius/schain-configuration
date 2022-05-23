#!/bin/bash

echo "Starting Install For SKALE MutliSig-Cli"

# 1. Move into packages folder
cd ../
# 2. Clone Repo
git clone https://github.com/skalenetwork/multisigwallet-cli

#3. Move into Directory
cd multisigwallet-cli

# 3. Set Python Virtual Env
rm -rf venv
python3.9 -m venv venv
yarn install

# rm -rf multisigwallet-cli
echo "Ending Install for SKALE MultiSig-Cli"