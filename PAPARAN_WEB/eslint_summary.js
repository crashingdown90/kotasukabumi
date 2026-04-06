const fs = require('fs');
const report = JSON.parse(fs.readFileSync('eslint_report.json', 'utf8'));

let errorCount = 0;
let warningCount = 0;
const ruleCounts = {};

report.forEach(file => {
  errorCount += file.errorCount;
  warningCount += file.warningCount;
  file.messages.forEach(msg => {
    ruleCounts[msg.ruleId] = (ruleCounts[msg.ruleId] || 0) + 1;
  });
});

console.log(`Total Errors: ${errorCount}`);
console.log(`Total Warnings: ${warningCount}`);
console.log('Rule Counts:');
Object.entries(ruleCounts).sort((a,b) => b[1] - a[1]).forEach(([rule, count]) => {
  console.log(`${rule}: ${count}`);
});
