import fs from 'fs';
import path from 'path';

const walkSync = function(dir, filelist) {
  const files = fs.readdirSync(dir);
  filelist = filelist || [];
  files.forEach(function(file) {
    if (fs.statSync(path.join(dir, file)).isDirectory()) {
      filelist = walkSync(path.join(dir, file), filelist);
    }
    else {
      filelist.push(path.join(dir, file));
    }
  });
  return filelist;
};

const files = walkSync('./src').filter(f => f.endsWith('.jsx'));

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Replace standard background colors
  content = content.replace(/bg-black\/30/g, 'bg-white/70 shadow-sm');
  content = content.replace(/bg-black\/50/g, 'bg-white/50');
  content = content.replace(/bg-black/g, 'bg-luxury-light');
  content = content.replace(/bg-gray-900/g, 'bg-white');
  content = content.replace(/bg-gray-800/g, 'bg-gray-100');
  
  // Replace text colors
  content = content.replace(/text-white/g, 'text-luxury-dark');
  content = content.replace(/text-gray-300/g, 'text-gray-700');
  content = content.replace(/text-gray-400/g, 'text-gray-600');
  
  // Optional borders and hover states
  content = content.replace(/border-luxury-gold\/10/g, 'border-luxury-gold/30');
  content = content.replace(/border-luxury-gold\/20/g, 'border-luxury-gold/40');
  content = content.replace(/hover:text-white/g, 'hover:text-luxury-dark');
  
  fs.writeFileSync(file, content);
});

console.log('Theme classes replaced successfully.');
