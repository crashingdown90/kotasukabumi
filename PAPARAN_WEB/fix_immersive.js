const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'src/app/slide/[category]/layouts/LayoutImmersive.tsx');
if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf-8');
    content = content.replace(/import .* from "\.\.\/components\/Constants";/, 'import { PRIMARY, GOLD, TEXT_MAIN, TEXT_MUTED, GLASS_DARK, TEXT_SUBTLE, PRIMARY_LIGHT } from "../components/Constants";');
    fs.writeFileSync(file, content);
}
console.log("Fixed LayoutImmersive.");
