#!/bin/bash

PAGE_FILE="src/app/slide/[category]/page.tsx"
LAY_DIR="src/app/slide/[category]/layouts"

# 1. Clean up page.tsx
# Remove lines 72 to 85 (the local Slide interface)
sed -i '' '72,85d' "$PAGE_FILE"
# Insert the import at line 72
sed -i '' '72iimport { Slide, MasterData } from "./components/SlideTypes";
' "$PAGE_FILE"

# 2. Fix Layout props in all layouts (replace 'any' with interfaces)
for file in "$LAY_DIR"/*.tsx; do
    # Add SlideTypes import if missing
    if ! grep -q "SlideTypes" "$file"; then
        sed -i '' '2iimport { Slide, Metric, Feature } from "../components/SlideTypes";
' "$file"
    fi
    # Replace common 'any' patterns
    sed -i '' 's/IconComp: any/IconComp: React.ElementType/g' "$file"
    sed -i '' 's/item: any/item: string | Feature/g' "$file"
    sed -i '' 's/metrics?: any/metrics?: Metric\[\]/g' "$file"
    sed -i '' 's/features?: any/features?: Feature\[\]/g' "$file"
    sed -i '' 's/highlights?: any/highlights?: string\[\]/g' "$file"
done

# 3. Specific fix for LayoutChart Tooltip payload
sed -i '' 's/payload: any/payload: { payload: ChartDataItem }\[\]/g' "$LAY_DIR/LayoutChart.tsx"

