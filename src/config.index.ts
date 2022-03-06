import { writeFile } from 'fs';

import { name, version } from '../package.json';

const targetPath = './src/environments/environment.prod.ts';

const envConfigFile = `export const environment = {
   production: true,
   email: {
        Host: '${process.env.email}',
        Username: '${process.env.email}',
        Password: '${process.env.email}',
        To: '${process.env.email}'
    },
  
};
`;

writeFile(targetPath, envConfigFile, 'utf8', (err) => {
  if (err) {
    return console.log(err);
  }
});
