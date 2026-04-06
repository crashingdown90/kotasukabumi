const fs = require('fs');
const path = require('path');

// 1. Fix page.tsx
const pageFile = path.join(__dirname, 'src/app/slide/[category]/page.tsx');
let pageContent = fs.readFileSync(pageFile, 'utf-8');
if (!pageContent.includes('SlideTypes')) {
  pageContent = pageContent.replace('import { PRIMARY', 'import { Slide, MasterData } from "./components/SlideTypes";\nimport { PRIMARY');
  fs.writeFileSync(pageFile, pageContent);
}

// 2. Fix LayoutHeroStrakom.tsx :4 (remove Shared import if it fails or fix it)
const heroFile = path.join(__dirname, 'src/app/slide/[category]/layouts/LayoutHeroStrakom.tsx');
if (fs.existsSync(heroFile)) {
  let heroContent = fs.readFileSync(heroFile, 'utf-8');
  heroContent = heroContent.replace(/import .* from "\.\.\/components\/Shared";\n/g, '');
  fs.writeFileSync(heroFile, heroContent);
}

// 3. Fix LayoutChart.tsx
const chartFile = path.join(__dirname, 'src/app/slide/[category]/layouts/LayoutChart.tsx');
if (fs.existsSync(chartFile)) {
  let chartContent = fs.readFileSync(chartFile, 'utf-8');
  if (!chartContent.includes('interface ChartDataItem')) {
    chartContent = chartContent.replace('interface LayoutProps', `export interface ChartDataItem {\n  name: string;\n  value: number;\n  color: string;\n  suffix: string;\n  description: string;\n  originalText: string;\n}\n\ninterface LayoutProps`);
    fs.writeFileSync(chartFile, chartContent);
  }
}

console.log('Final fixes applied.');
