const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src/app/slide/[category]/layouts');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  
  let original = content;
  
  // Revert the aggressive type replacements back to 'any' for local variables and parameters that are causing TS errors
  content = content.replace(/item: string \| Feature/g, 'item: any');
  content = content.replace(/d: string \| Feature/g, 'd: any');
  content = content.replace(/entry: ChartDataItem/g, 'entry: any');
  content = content.replace(/entry: unknown/g, 'entry: any');
  content = content.replace(/m: Metric/g, 'm: any');
  content = content.replace(/highlights as unknown\[\]/g, 'highlights as any[]');
  content = content.replace(/Array<unknown>/g, 'Array<any>');
  content = content.replace(/unknown\[\]/g, 'any[]');
  
  if (content !== original) {
    fs.writeFileSync(filePath, content);
    console.log('Reverted types in ' + file);
  }
}
console.log('Revert complete.');
