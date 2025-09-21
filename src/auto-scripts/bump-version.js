const fs = require('fs');
const path = require('path');
const configPath = path.join(__dirname, 'src', 'config.json');

const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
let [major, minor, patch] = config["app-version"].split('.').map(Number);

// Allow bump type via env: 'major', 'minor', 'patch' (default: patch)
const bumpType = process.env.BUMP_TYPE || 'patch';

switch (bumpType) {
  case 'major':
    major += 1;
    minor = 0;
    patch = 0;
    break;
  case 'minor':
    minor += 1;
    patch = 0;
    break;
  case 'patch':
  default:
    patch += 1;
    break;
}

config["app-version"] = `${major}.${minor}.${patch}`;
const now = new Date();
const formatted = now.getFullYear() + '-' + String(now.getMonth()+1).padStart(2,'0') + '-' + String(now.getDate()).padStart(2,'0') + ' ' + String(now.getHours()).padStart(2,'0') + ':' + String(now.getMinutes()).padStart(2,'0') + ':' + String(now.getSeconds()).padStart(2,'0');
config["lastUpdated"] = formatted;
fs.writeFileSync(configPath, JSON.stringify(config, null, 4));
console.log('Version bumped to', config["app-version"], `(type: ${bumpType})`);
console.log('Last updated set to', config["lastUpdated"]);
