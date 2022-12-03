
const { Revise } = require("revise-sdk");
const revise = new Revise({auth: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjkyMzBmYjk4LWMyZGEtNDhiMS04YzI5LThiNzdmNTRjOWQzZSIsImtleSI6ImdtenRwcmwzIiwiaWF0IjoxNjY5ODEzNzE1fQ.0I83zALtKj2FmCkabu3dB44q40dSDLlqxSC4BkSPDpA'});

async function run() {

    // write your code here - this is where the next two snippets of code should be pasted
    const collection = await revise.addCollection({
      name: "Brand Name",
      uri: "trial1",
    });
  
    // Collection Name : Use any name you want for your collection (this gets shown in the marketplace))
    // Collection_URI  : Use a unique name (no spaces or special characters)
    //                   this will generate a unique link for your collection
    //                   for e.g. if you choose "myuniquecollection"
    //                   your baseURI wil be "myuniquecollection.revise.link"
  
    const nft = await revise.addNFT(
      {
        image:
          "https://revise-testing.fra1.digitaloceanspaces.com/sample-collection/2.jpg",
        name: "Hellll",
        tokenId: "2",
        description: "Nononono",
      },
      [{ attack: "80" }, { color: "maroon" }, { stamina: "50" }],
      collection.id
    );
    // console.log(collection.id)
    
    console.log(nft);
}
run()