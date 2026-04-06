#!/bin/bash

# Define the base directory
BASE_DIR="src/app/slide/[category]/layouts"

# List of files to process
FILES=(
    "$BASE_DIR/LayoutBasic.tsx"
    "$BASE_DIR/LayoutChart.tsx"
    "$BASE_DIR/LayoutTechnical.tsx"
    "$BASE_DIR/LayoutAdvanced.tsx"
    "$BASE_DIR/LayoutSNA.tsx"
    "$BASE_DIR/LayoutReputationShield.tsx"
    "$BASE_DIR/LayoutSplit.tsx"
    "$BASE_DIR/LayoutSection.tsx"
)

# Insert import at line 2 for all files
for file in "${FILES[@]}"; do
    if [ -f "$file" ]; then
        # Check if already imported
        if ! grep -q "SlideTypes" "$file"; then
            sed -i '' '2iimport { Slide, Metric, Feature } from "../components/SlideTypes";
' "$file"
        fi
    fi
done

# Specific replacements for 'any' in Props and logic
sed -i '' 's/IconComp: any;/IconComp: React.ElementType;/' "$BASE_DIR/LayoutBasic.tsx"
sed -i '' 's/item: any/item: string | Feature/g' "$BASE_DIR/LayoutBasic.tsx"

sed -i '' 's/item: any/item: string | Feature/g' "$BASE_DIR/LayoutChart.tsx"
sed -i '' 's/d: any/d: string | Feature/g' "$BASE_DIR/LayoutChart.tsx"
sed -i '' 's/entry: any/entry: ChartDataItem/g' "$BASE_DIR/LayoutChart.tsx"

sed -i '' 's/item: any/item: string | Feature/g' "$BASE_DIR/LayoutTechnical.tsx"

sed -i '' 's/item: any/item: string | Feature/g' "$BASE_DIR/LayoutAdvanced.tsx"
sed -i '' 's/m: any/m: Metric/g' "$BASE_DIR/LayoutAdvanced.tsx"

