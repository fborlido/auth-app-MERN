const getUser = (req, res) => {
  return res.send(req.user);
};

export default getUser;
