const { execSync } = require('child_process');

execSync('npm run generate');

require('./your-next-server-file.js');
