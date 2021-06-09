const fs = require('fs');

const additionalTypes = `
export const idlFactory: any;
export const canisterId: string;`;

const typesFileName = './.dfx/local/canisters/Hello/Hello.d.ts';
const typesFile = fs.readFileSync(typesFileName).toString();

if(typesFile.indexOf(additionalTypes) === -1) {
  // append data to a file
  fs.appendFile(typesFileName, additionalTypes, (err) => {
      if (err) {
          throw err;
      }
      console.log("File is updated.");
  });
} else {
  console.log('already defined');
}
