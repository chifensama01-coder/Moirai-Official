const fs = require('fs');
const path = require('path');

const filesToProcess = [
  'Footer.tsx',
  'FashionSchoolClient.tsx',
  'CollectionsClient.tsx',
  'BespokeClient.tsx',
  'AboutClient.tsx'
];

const colorMap = {
  '#050407': 'var(--bg)',
  '#0d0b10': 'var(--bg)',
  '#130f18': 'var(--bg)',
  '#1e1826': 'var(--bg)',
  '#B8A9C9': 'var(--muted)',
  '#7A6B8A': 'var(--muted)',
  '#F0EBF8': 'var(--text)',
  '#FAFAFA': 'var(--text)',
  '#E0AAFF': 'var(--accent-soft)',
  '#C77DFF': 'var(--accent-soft)',
  '#9B5DE5': 'var(--accent)',
  '#6B3FA0': 'var(--accent)',
  '#2D1B69': 'var(--accent-soft)',
  '#e0e0e0': 'var(--border)',
  '#2a2133': 'var(--border)'
};

const componentsDir = path.join(__dirname, 'src', 'components');

filesToProcess.forEach(file => {
  const filePath = path.join(componentsDir, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace hardcoded strings
    Object.keys(colorMap).forEach(hex => {
      // Case insensitive replacement
      const regex = new RegExp(hex, 'gi');
      content = content.replace(regex, colorMap[hex]);
    });

    // Also replace rgba for some of them.
    content = content.replace(/rgba\(5,4,7,[^\)]+\)/g, 'var(--bg)');
    content = content.replace(/rgba\(107,63,160,([^\)]+)\)/g, 'rgba(124, 58, 237, $1)');
    content = content.replace(/rgba\(155,93,229,([^\)]+)\)/g, 'rgba(168, 85, 247, $1)');
    content = content.replace(/rgba\(13,11,16,([^\)]+)\)/g, 'var(--bg)');
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Processed ${file}`);
  }
});
