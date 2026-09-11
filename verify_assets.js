const fs = require('fs');
const http = require('http');

const html = fs.readFileSync('index.html', 'utf-8');
const js = fs.readFileSync('js/main.js', 'utf-8');

// Find all assets/images/ references
const matches = Array.from(new Set([...(html.match(/assets\/images\/[a-zA-Z0-9\-_.]+/g) || []), ...(js.match(/assets\/images\/[a-zA-Z0-9\-_.]+/g) || [])]));

console.log('Verifying all referenced images:', matches.length);

let errors = 0;
let checked = 0;

matches.forEach(imgRel => {
  const fullUrl = `http://localhost:3000/${imgRel}`;
  http.get(fullUrl, res => {
    if (res.statusCode !== 200) {
      console.error(`[FAIL ${res.statusCode}] ${imgRel}`);
      errors++;
    } else {
      console.log(`[OK 200] ${imgRel} (${res.headers['content-length']} bytes)`);
    }
    checked++;
    if (checked === matches.length) {
      console.log(`\nVerification finished: ${matches.length - errors}/${matches.length} passed.`);
      if (errors === 0) {
        console.log('ALL REFERENCED ASSETS ARE 100% OPERATIONAL!');
      }
    }
  }).on('error', err => {
    console.error(`[ERR] ${imgRel}: ${err.message}`);
    errors++;
  });
});
