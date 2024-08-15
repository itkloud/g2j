const { program } = require('commander');
const packageJSON = require('../package.json');

try {
    program
    .version(packageJSON.version, '-v, --version')
    .usage('<itkloud-api-key> [options]')
    .parse(process.argv);

    console.log('g2j!');
} catch (error) {
    console.error(error);
}