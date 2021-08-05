#!/usr/bin/env node

const {blueBright, cyan} = require("chalk");

const args = process.argv.slice(2);
let cmd = args[0] || 'help';
// @ts-ignore
if (args.version || args.v) cmd = 'version';
// @ts-ignore
if (args.help) cmd = 'help';
switch (cmd) {
    case 'version':
        // @ts-ignore
        console.log(require('../package.json').version);
        break;
    case 'help':
        const menus = {main: `\n\nUso: util-tiempo [comando]\n\n${blueBright('version:')} -version / -v\n${blueBright('funciones:')} dataTime , dataDate , formatDate , diffDate , formatMs\n\n${cyan('Para mas información')} https://www.npmjs.com/package/util-tiempo\n\n`}
        const subCmd = args[0] === 'help' ? args[1] : args[0]
        console.log(menus[subCmd] || menus.main)
        break;
    default:
        console.error(`"${cmd}" no es un comando válido!`);
        break;
}