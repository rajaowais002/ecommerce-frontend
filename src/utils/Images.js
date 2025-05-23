export const getImage = (imageName) => {
    try {
        return new URL(`../assets/${imageName}`, import.meta.url).href;
    } catch (e) {
      console.error(`Image not found: ${imageName}`);
      return e;
    }
};