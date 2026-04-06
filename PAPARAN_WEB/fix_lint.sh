#!/bin/bash

# Fix LayoutReputationShield purity
sed -i '' 's/Math.random() \* 70/getStaticRandom(i, RANDOM_POOL_XY) * 70/g' src/app/slide/\[category\]/layouts/LayoutReputationShield.tsx
sed -i '' 's/Math.random() \* 4/getStaticRandom(i, RANDOM_POOL_SIZE) * 4/g' src/app/slide/\[category\]/layouts/LayoutReputationShield.tsx
sed -i '' 's/Math.random() \* 3/getStaticRandom(i, RANDOM_POOL_DUR) * 3/g' src/app/slide/\[category\]/layouts/LayoutReputationShield.tsx

# Fix LayoutTechnical metrics if any
sed -i '' 's/Math.random() \* 500/getStaticRandom(i, RANDOM_POOL_XY) * 500/g' src/app/slide/\[category\]/layouts/LayoutTechnical.tsx
sed -i '' 's/Math.random() \* 400/getStaticRandom(i, RANDOM_POOL_XY) * 400/g' src/app/slide/\[category\]/layouts/LayoutTechnical.tsx
sed -i '' 's/1 + Math.random() \* 2/1 + getStaticRandom(i, RANDOM_POOL_SIZE) * 2/g' src/app/slide/\[category\]/layouts/LayoutTechnical.tsx

# Fix LayoutSection any
sed -i '' 's/IconComp: any;/IconComp: React.ElementType;/' src/app/slide/\[category\]/layouts/LayoutSection.tsx

