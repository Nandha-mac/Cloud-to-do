const signup = async (req, res) => {
  res.json({msg: "signup works"});
};
const login = async (req, res) => {
  res.json({msg: "login works"});
};
const forgotPassword = async (req, res) => {
  res.json({msg: "forgotPassword works"});
};
const resetPassword = async (req, res) => {
  res.json({msg: "resetPassword works"});
};

module.exports = {
  signup,
  login,
  forgotPassword,
  resetPassword
};
