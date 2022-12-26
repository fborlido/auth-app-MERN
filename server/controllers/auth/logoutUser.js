const logoutUser = (req, res) => {
  return res
    .status(200)
    .cookie("access_token", "", { maxAge: 0, httpOnly: true })
    .send("User logged out");
};

export default logoutUser;
