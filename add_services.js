import fs from 'fs';

const webDev = `    {
      id: 7,
      name: 'Web Development',
      description: 'Custom, high-performance websites built with modern technologies.',
      image: null,
    },`;
const appDev = `    {
      id: 8,
      name: 'Application Development',
      description: 'Robust and scalable mobile and web applications for your business.',
      image: null,
    },`;

['./src/pages/Home.jsx', './src/pages/Services.jsx'].forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Find id 6 block and append 7 and 8
  const id6Regex = /\{\s*id:\s*6,[\s\S]*?\},/;
  if (content.match(id6Regex)) {
    content = content.replace(id6Regex, match => match + '\n' + webDev + '\n' + appDev);
  }

  if (file.includes('Home.jsx')) {
    content = content.replace(/bg-luxury-dark/g, 'bg-gray-50 border-t border-gray-200');
    content = content.replace(/glass p-8/g, 'bg-white shadow-lg border border-gray-100 p-8');
  }
  
  fs.writeFileSync(file, content);
});

console.log("Services and Theme updated successfully.");
