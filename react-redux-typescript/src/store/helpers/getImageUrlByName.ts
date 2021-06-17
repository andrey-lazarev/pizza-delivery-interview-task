export const getImageUrlByName = (
  name: string
): string => (
  'images/' + name.toLowerCase().split(' ').join('-') + '.png'
);
