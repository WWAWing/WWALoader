// Original: https://github.com/azu/multi-stage-sourcemap#multi-stage-sourcemap--this-library
if( process.argv.length < 4 ) {
  console.error("Usage: node clocure-compile.js MAP1_FILE_NAME MAP2_FILE_NAME DESTINATION_FILE_NAME");
  process.exit(0);
}

const fs = require('fs');
const transfer = require("multi-stage-sourcemap").transfer;
const bMapFile = process.argv[3];
const cMapFile = process.argv[2];
fs.readFile(cMapFile, (err, bMapTxt)=> {
  if( err ) throw err;
  fs.readFile( bMapFile, (err, cMapTxt) => {
    if( err ) throw err;
    let cToAMap = transfer({
      fromSourceMap: JSON.parse( bMapTxt ),
      toSourceMap: JSON.parse( cMapTxt ),
    });
    console.log(cToAMap);
  });
});
