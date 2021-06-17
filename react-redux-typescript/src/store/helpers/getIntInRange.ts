export const getRandIntInRange = (
  min: number = 10,
  max: number = 50
): number => (
  Math.round(Math.random() * (max - min) + min)
)