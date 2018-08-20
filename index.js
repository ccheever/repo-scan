let spawnAsync = require("@expo/spawn-async");
// let minimist = require("minimist");
let moment = require("moment");
let path = require("path");

process.chdir(path.join(process.env.HOME, "universe"));
let since = moment().startOf("week").subtract(3, "days").format();
let cmd = "git log --pretty=format:'%aN  %ad %s' --after '" + since + "' | sort -f";
//let cmd = "git log --pretty=format:'%aN  %s' --after 'June 14' | sort -f";

let mainAsync = async () => {
  let result = await spawnAsync(cmd, { shell: true });
  console.log(result.stdout);
}

if (require.main === module) {
  mainAsync();
}

module.exports = mainAsync;
