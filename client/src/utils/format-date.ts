export const formatDate = (date: number) => {
  return new Date(date).toLocaleString("en-us", { dateStyle: "long" });
};
