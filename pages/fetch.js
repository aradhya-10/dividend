const { Revise } = require("revise-sdk");
const revise = new Revise({
  auth: process.env.REVISE_AUTHKEY,
});

async function fetch() {
  const _nft = await revise.fetchNFT("fb14cbc5-22e0-4291-9094-7382b3df0eb2");
  // const ipfsLink = await revise.nft(nfts).export();
  // console.log(ipfsLink);
  // const result = await revise
  //   .nft(_nft)
  //   .setProperty("defense points", "70")
  //   .setProperty("attack points", "100")
  //   .save();
  console.log(_nft.metaData);
  // const 
  
}
fetch();
