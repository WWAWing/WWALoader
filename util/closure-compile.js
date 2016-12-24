// Original: https://www.npmjs.com/package/google-closure-compiler#plugin-authors-and-native-node-usage
if( process.argv.length < 4 ) {
  console.error("Usage: node clocure-compile.js SOURCE_FILE_NAME DESTINATION_FILE_NAME [SOURCE_MAP_FILE_NAME]");
  process.exit(0);
}
const srcFileName = process.argv[2];
const destFileName = process.argv[3];
const sourceMapFileName = process.argv.length > 4 ? process.argv[4] : destFileName + '.map';

var ClosureCompiler = require('google-closure-compiler').compiler;

console.log(ClosureCompiler.COMPILER_PATH); // absolute path the compiler jar
console.log(ClosureCompiler.CONTRIB_PATH); // absolute path the contrib folder which contains

var closureCompiler = new ClosureCompiler({
  js: srcFileName,
  js_output_file: destFileName,
  compilation_level: 'SIMPLE',
  create_source_map: sourceMapFileName
});

var compilerProcess = closureCompiler.run(function(exitCode, stdOut, stdErr) {
  //compilation complete
});
