#!/bin/bash

LAY_DIR="src/app/slide/[category]/layouts"

# Fix PageProps in SlidePage (check line 11 error)
PAGE_FILE="src/app/slide/[category]/page.tsx"
sed -i '' 's/: any/: unknown/g' "$PAGE_FILE"

# Process all layout files
find "$LAY_DIR" -name "*.tsx" | while read file; do
    # 1. Add missing imports if any 'any' exists
    if grep -q "any" "$file"; then
        if ! grep -q "SlideTypes" "$file"; then
            # Insert after first import line
            sed -i '' '2iimport { Slide, Metric, Feature } from "../components/SlideTypes";
' "$file"
        fi
        
        # 2. Replace 'any' with appropriate types based on context
        # Props: icons/components
        sed -i '' 's/icon?: any/icon?: React.ElementType/g' "$file"
        sed -i '' 's/IconComp: any/IconComp: React.ElementType/g' "$file"
        
        # Props: Arrays
        sed -i '' 's/features?: any/features?: Feature\[\]/g' "$file"
        sed -i '' 's/metrics?: any/metrics?: Metric\[\]/g' "$file"
        sed -i '' 's/highlights?: any/highlights?: string\[\]/g' "$file"
        
        # Map variables
        sed -i '' 's/item: any/item: string | Feature/g' "$file"
        sed -i '' 's/m: any/m: Metric/g' "$file"
        sed -i '' 's/d: any/d: string | Feature/g' "$file"
        sed -i '' 's/entry: any/entry: unknown/g' "$file"
        
        # Generic catch-all for remaining 'as any'
        sed -i '' 's/as any/as unknown/g' "$file"
    fi
done

