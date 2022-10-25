export const homeController = (req, res) => {
  return res.send({ url: "home", userId: res.userId });
};
