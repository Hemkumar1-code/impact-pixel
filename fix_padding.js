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

const files = walkSync('./src/pages').filter(f => f.endsWith('.jsx'));

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  // Replace pt-24 with safe responsive padding pt-32 md:pt-48
  content = content.replace(/pt-24/g, 'pt-32 md:pt-48');
  fs.writeFileSync(file, content);
});

// Also fix Hero.jsx in components
const heroFile = './src/components/Hero.jsx';
if (fs.existsSync(heroFile)) {
  let heroContent = fs.readFileSync(heroFile, 'utf8');
  heroContent = heroContent.replace(/pt-16/g, 'pt-32 md:pt-40');
  fs.writeFileSync(heroFile, heroContent);
}

console.log('Padding fixed successfully.');
