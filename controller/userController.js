// Start Use 
const User = require('../model/User');
// End Use
// ****************************************************************************
// Start Code 


addNewUser = async (req, res) => {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    });
    try{
      const saveUser = await user.save();
      res.send(saveUser)
    }catch(err){
      res.status(404).send(err.message);
    }
  }



module.exports = {
    addNewUser: addNewUser,
};