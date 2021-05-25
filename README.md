# IC Angular Cli Example

## Requirements

Install the DFINITY Canister SDK

```bash
DFX_VERSION=0.7.0-beta.8 sh -ci "$(curl -fsSL https://sdk.dfinity.org/install.sh)" 
```

## Getting Started

### Clone the repo

```bash
git clone https://github.com/yourkungfunogood/ic-angular-cli
cd ./ic-angular-cli
```

### Install dependencies

```bash
yarn install
```

### Deploy local backend

```bash
dfx start --clean --background
dfx canister create Hello
dfx deploy Hello
```

### Start the client

```bash
yarn start
```
