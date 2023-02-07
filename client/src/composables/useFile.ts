export const useFile = () => {
  const createFileURL = (file: File) => {
    return URL.createObjectURL(file);
  };

  return {
    createFileURL,
  };
};
