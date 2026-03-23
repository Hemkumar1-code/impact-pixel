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
  
  // Texts
  content = content.replace(/Why Choose <span className="text-luxury-gold">LUXE Design<\/span>/g, 'Why Choose <span className="text-luxury-gold">Impact Pixel</span>');
  content = content.replace(/Why Choose LUXE Design/g, 'Why Choose Impact Pixel');
  content = content.replace(/hello@luxedesign\.com/g, 'hello@impactpixel.com');
  content = content.replace(/\+1 \(555\) 123-4567/g, '+91 84388 75850');
  content = content.replace(/New York, USA/g, 'Thirupur');
  // Also any stray LUXE Design in footer
  content = content.replace(/<span className="text-luxury-gold">LUXE<\/span>Design/g, '<span className="text-luxury-gold font-serif">Impact Pixel<\/span>');
  
  // Remove copyright
  content = content.replace(/<p>&copy; 2024 LUXE Design\. All rights reserved\.<\/p>/g, '');
  content = content.replace(/&copy; 2024 LUXE Design\. All rights reserved\./g, '');
  
  // Prices: Replaces $ followed by numbers (e.g. $500 -> ₹500)
  content = content.replace(/\$([0-9,]+)/g, '₹$1');
  
  fs.writeFileSync(file, content);
});

console.log('Text updated successfully');
