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
    } else if (file.endsWith('.js') || file.endsWith('.mjs') || file.endsWith('.cjs')) {
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
  if (content.includes('useEffectEvent') || content.includes('_patched_marker')) {
    // If we've already patched, we just skip it, but wait! My previous marker was added.
    // So let's just make sure we only process files containing 'useEffectEvent'.
    if (content.includes('_patched_marker')) {
       // Reset from original if needed. Actually we'll just run npm ci beforehand.
    }
  }

  if (content.includes('useEffectEvent')) {
    
    // Replace useEffectEvent with useCallback EVERYWHERE
    content = content.replace(/useEffectEvent/g, 'useCallback');

    // Deduplicate useCallback inside import { ... } from "react"
    content = content.replace(/import\s+([^"']+)from\s+["']react["']/g, match => {
      let startIndex = match.indexOf('{');
      let endIndex = match.lastIndexOf('}');
      if (startIndex !== -1 && endIndex !== -1) {
         let before = match.substring(0, startIndex + 1);
         let after = match.substring(endIndex);
         let inner = match.substring(startIndex + 1, endIndex);
         
         let tokens = inner.split(',').map(s => s.trim()).filter(Boolean);
         
         let uniqueTokens = [];
         let seen = new Set();
         for (let t of tokens) {
            let binding = t.split(' as ').pop().trim();
            if (!seen.has(binding)) {
                seen.add(binding);
                uniqueTokens.push(t);
            }
         }
         
         return before + ' ' + uniqueTokens.join(', ') + ' ' + after;
      }
      return match;
    });

    // Deduplicate useCallback inside require bindings
    content = content.replace(/(const|let|var)\s*{([^}]+)}\s*=\s*require\(["']react["']\)/g, match => {
      let startIndex = match.indexOf('{');
      let endIndex = match.indexOf('}');
      if (startIndex !== -1 && endIndex !== -1) {
         let before = match.substring(0, startIndex + 1);
         let after = match.substring(endIndex);
         let inner = match.substring(startIndex + 1, endIndex);
         
         let tokens = inner.split(',').map(s => s.trim()).filter(Boolean);
         
         let uniqueTokens = [];
         let seen = new Set();
         for (let t of tokens) {
            let binding = t.split(':').pop().trim();
            if (!seen.has(binding)) {
                seen.add(binding);
                uniqueTokens.push(t);
            }
         }
         return before + ' ' + uniqueTokens.join(', ') + ' ' + after;
      }
      return match;
    });

    fs.writeFileSync(f, content);
    modified++;
  }
});

console.log('Sanity React 19 Patch applied to ' + modified + ' files.');
