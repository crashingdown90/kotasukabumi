const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src/app/slide/[category]/layouts');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

const importStatement = `import { Slide, Metric, Feature } from "../components/SlideTypes";\n`;

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  
  if (!content.includes('components/SlideTypes') && (content.includes('Feature') || content.includes('Metric') || content.includes('Slide'))) {
    // Insert after the first line (usually import React from "react";)
    const lines = content.split('\n');
    lines.splice(1, 0, importStatement);
    fs.writeFileSync(filePath, lines.join('\n'));
    console.log('Fixed ' + file);
  }
}
console.log('Done fixing imports.');
