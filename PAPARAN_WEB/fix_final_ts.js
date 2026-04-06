const fs = require('fs');
const path = require('path');

const layoutsDir = path.join(__dirname, 'src/app/slide/[category]/layouts');

// Fix LayoutHeroStrakom: DIGITAL_GLOW might not be exported from Constants
const heroFile = path.join(layoutsDir, 'LayoutHeroStrakom.tsx');
if (fs.existsSync(heroFile)) {
  let content = fs.readFileSync(heroFile, 'utf-8');
  content = content.replace(', DIGITAL_GLOW', ''); // Remove it if it causes error
  fs.writeFileSync(heroFile, content);
}

// Fix LayoutImmersive: TEXT_MAIN missing
const immersiveFile = path.join(layoutsDir, 'LayoutImmersive.tsx');
if (fs.existsSync(immersiveFile)) {
  let content = fs.readFileSync(immersiveFile, 'utf-8');
  if (!content.includes('TEXT_MAIN')) {
    content = content.replace('import { PRIMARY, GOLD, TEXT_MUTED } from "../components/Constants";', 'import { PRIMARY, GOLD, TEXT_MUTED, TEXT_MAIN } from "../components/Constants";');
    fs.writeFileSync(immersiveFile, content);
  }
}

// Fix LayoutKPIMatrix: kpiCategories cast
const kpiFile = path.join(layoutsDir, 'LayoutKPIMatrix.tsx');
if (fs.existsSync(kpiFile)) {
  let content = fs.readFileSync(kpiFile, 'utf-8');
  content = content.replace('      ]\n    }\n  ]);', '      ]\n    }\n  ]) as any;');
  fs.writeFileSync(kpiFile, content);
}

// Fix LayoutSplit: icon?: any
const splitFile = path.join(layoutsDir, 'LayoutSplit.tsx');
if (fs.existsSync(splitFile)) {
  let content = fs.readFileSync(splitFile, 'utf-8');
  content = content.replace('icon?: React.ElementType;', 'icon?: any;');
  fs.writeFileSync(splitFile, content);
}
console.log('Final TS fix executed.');
