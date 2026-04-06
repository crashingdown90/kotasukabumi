/**
 * PurityUtils.ts
 * Provides stable pseudo-random values to satisfy React 19 purity rules (react-hooks/purity).
 * These values are generated once at module load time, ensuring they are stable 
 * for component renders and hydration.
 */

export const generateStaticRandom = (count: number, seed: number = 0.5) => {
  const result = [];
  for (let i = 0; i < count; i++) {
    // Simple LCG-like pseudo-random generator for internal use if needed,
    // but for simple UI, we can just use a shifted Math.random() once here.
    result.push((Math.sin(i + seed) + 1) / 2);
  }
  return result;
};

// Pre-calculated pools for common uses
export const RANDOM_POOL_XY = generateStaticRandom(100, 1.1);
export const RANDOM_POOL_DUR = generateStaticRandom(100, 2.2);
export const RANDOM_POOL_SIZE = generateStaticRandom(100, 3.3);

export function getStaticRandom(index: number, pool: number[]) {
  return pool[index % pool.length];
}
