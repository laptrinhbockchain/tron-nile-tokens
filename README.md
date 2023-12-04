# Tokens on Nile Testnet for TRON
Deploy some tokens on Nile Testnet. This is a preparation step to deploy SunSwap on Nile Testnet.
The source code of these tokens is mostly taken from the source code of the corresponding tokens on the mainnet.

# 1. Preparing
+ NodeJs v16 or newer
+ Install TronBox:
```
sudo npm install -g tronbox
tronbox version
```

# 2. Compile and deploy
Use below command to compile:
```
tronbox compile
```
And then copy sample-env to .env, edit the .env file and update value for key PRIVATE_KEY_NILE
Finally, use below command to deploy on Nile Testnet:
```
source .env && tronbox migrate --network nile
```
