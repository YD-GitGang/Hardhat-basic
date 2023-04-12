import { ethers } from "ethers";
import helloWorldArtifact from '../artifacts/contracts/HelloWorld.sol/HelloWorld.json';

async function main(address: string) {
    const rpcUrl: string = process.env.SEPOLIA_URL ?? "";
    if (rpcUrl === "") {
        throw new Error('No value set for environement variable SEPOLIA_URL');
    }

    const provider = new ethers.providers.JsonRpcProvider(rpcUrl);
    const contract = new ethers.Contract(address, helloWorldArtifact.abi, provider);

    const message = await contract.getMessage();
    console.log(`HelloWorld contract message: ${message} `)
}

const address = "0x123456789";
main(address).catch((error) => {
    console.error(error);
    process.exitCode = 1;
});