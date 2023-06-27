const User = require('../models/userModel')


exports.createUser = async (req, res) => {
    try {
        const { name, email } = req.body;

        if (!name || !email) {
            throw new Error('Name and Email are required')
        }

        const userExist = await User.findOne({email})

        if(userExist) {
            throw new Error('This email already exists')
        }
        
        const user = new User.createUser({
            name,
            email,
            createdAt,
            updatedAt,
        })

        res.status(201).json({
            success: true,
            message: 'User created successsfully',
            user
      })
    } catch(err) {
        console.log(err);
        res.status(400).json({
        success: false,
        message: err.message,
    });
    }
    
}


exports.getUsers = async (req, res) => {
    try {
        const users = await User.findOne();

        res.status(200).json({
            success: true,
            users
        }) 
    } catch(err) {
        res.status(400).json({
            success: false,
            message: err.message
        })
    }
}

exports.editUser = async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, req.body);
  
      res.status(200).json({
        success: true,
        message: "User updated successfully",
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
};
  
exports.deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;

    const user = await User.findByIdAndDelete(userId);

    res.status(200).json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};