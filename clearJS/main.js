const interpretor = require('./class/interpretor');
const parser = require('./class/parser');

const parsed = parser.lint(parser.concatenate_string(parser.decode_string(parser.rename_string(parser.beautify(require('fs').readFileSync('./dist/input_code.js', 'utf-8'))), require('fs').readFileSync('./dist/input_algo.js', 'utf-8'))));

try {
   const result = interpretor.remove_dead_code(parsed)
   require('fs').writeFileSync('./result.js', result);
} catch {
   require('fs').writeFileSync('./result.js', parsed);
}