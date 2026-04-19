const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.js') || file.endsWith('.mjs')) {
      results.push(file);
    }
  });
  return results;
}

const files = [
  ...walk('node_modules/sanity/lib'),
  ...walk('node_modules/@sanity/vision/lib')
];

let modified = 0;
files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  if (content.includes('useEffectEvent')) {
    const newContent = content.replace(/useEffectEvent/g, 'useCallback');
    fs.writeFileSync(f, newContent);
    modified++;
  }
});

console.log('Sanity React 19 Patch applied to ' + modified + ' files.');
