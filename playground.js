/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const nftList = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(_name, _desc, _creator, _price) {
    const nft = {
        "name": _name,
        "description": _desc,
        "creator": _creator,
        "price": _price
    };
    nftList.push(nft);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
    console.log("NFT details:\n")
    const n = nftList.length;
    for (let i = 0; i < n; i++) {
        console.log("NFT ", i + 1);
        console.log("Name:", nftList[i].name);
        console.log("Description:", nftList[i].description);
        console.log("creator:", nftList[i].creator);
        console.log("price:", nftList[i].price);
        console.log('\n');
    }

}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    return nftList.length;
}

// call your functions below this line
mintNFT("Pikachu", "A thunder type pokemon", "Ash", 5);
mintNFT("Balbasaur", "A water pokemon", "Kane", 19);
listNFTs();
console.log("\nTotal NFTs=", getTotalSupply());
mintNFT("Charizard", "A fire type pokemon", "Misty", 15);
listNFTs();
console.log("\nTotal NFTs=", getTotalSupply());
