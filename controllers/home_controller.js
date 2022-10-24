export const homeController = (req, res) => {
  res.send({ url: "home", userId: res.userId });
};
