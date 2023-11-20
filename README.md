# Javascript Final Assessment

The code present in the playground.js file is used to simulate the act of minting and listing NFTs.
##Functionality
- Has the ability to "mint" NFTs and store them
- You should "mint" at least three NFT's
- Has the ability to print the details of your NFTs to the console
- Has the ability to print the total supply of your NFT collection to the console

## Description
simulates NFT creation and listing by writing some JavaScript code that will create an object that represents your NFT and that will hold its metadata.
## Getting Started
Compile the Program below using Javascript editor/compiler to run.

```javascript
// create a variable to hold your NFT's
const nftList=[];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_name,_desc,_creator,_price) {
    const nft={
        "name":_name,
        "description":_desc,
        "creator":_creator,
        "price":_price
    };
    nftList.push(nft);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    console.log("NFT details:\n")
    const n = nftList.length;
    for(let i=0;i<n;i++){
        console.log("NFT ",i+1);
        console.log("Name:",nftList[i].name);
        console.log("Description:",nftList[i].description);
        console.log("creator:",nftList[i].creator);
        console.log("price:",nftList[i].price);
        console.log('\n');
    }

}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    return nftList.length;
}

// call your functions below this line
mintNFT("Pikachu","A thunder type pokemon","Ash",5);
mintNFT("Balbasaur","A water pokemon","Kane",19);
listNFTs();
console.log("\nTotal NFTs=",getTotalSupply());
mintNFT("Charizard","A fire type pokemon","Misty",15);
listNFTs();
console.log("\nTotal NFTs=",getTotalSupply());


```


## Authors

Priyanshu Dwivedi 
[@metacraftersio](https://twitter.com/priDRoger)
