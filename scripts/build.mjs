import {mkdir,copyFile,rm} from 'node:fs/promises';
await rm('dist',{recursive:true,force:true});
await mkdir('dist',{recursive:true});
for(const name of ['index.html','style.css','app.js','data.js','later-days.js','fuji.svg']) await copyFile(`src/${name}`,`dist/${name}`);
await copyFile('.nojekyll','dist/.nojekyll');
console.log('Built static site in dist/ (relative assets, subpath safe)');
