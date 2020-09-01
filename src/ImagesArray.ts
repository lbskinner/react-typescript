const images: string[] = ["daniel", "david", "edgar", "ian", "linnea", "ray"];

const duplicateImages = (array: string[], times: number): string[] => {
  return array.reduce((res: string[], current) => {
    return res.concat(Array(times).fill(current));
  }, []);
};

export default duplicateImages(images, 2);
