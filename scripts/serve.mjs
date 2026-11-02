import http from 'node:http';
import {readFile} from 'node:fs/promises';
const base='/2026-tokyo-trip/';
http.createServer(async(req,res)=>{try{const path=new URL(req.url,'http://localhost').pathname;if(!path.startsWith(base)) {res.writeHead(404);return res.end();} const file=path.slice(base.length)||'index.html';if(!/^[\w.-]+$/.test(file))throw Error();res.setHeader('Content-Type',({'html':'text/html; charset=utf-8','js':'text/javascript; charset=utf-8','css':'text/css','svg':'image/svg+xml'})[file.split('.').pop()]||'text/plain');res.end(await readFile(`dist/${file}`));}catch{res.writeHead(404);res.end('Not found');}}).listen(4173,'0.0.0.0',()=>console.log('http://localhost:4173'+base));
