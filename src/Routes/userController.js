// #Task route solution
const userModel = require('../Models/User.js');
const { default: mongoose } = require('mongoose');

const createUser = async (req, res) => {
   //add a new user to the database with 
   //Name, Email and Age

   try {
      //
      const user = new userModel({
         Name: req.body.Name,
         Email: req.body.Email,
         Age: req.body.Age
      });
      //await user.save();
      res.status(201).send("user created successfully");
   }
   catch (error) {
      res.status(400).send("error creating user");
   }
}

const getUsers = async (req, res) => {
   //retrieve all users from the database
   try {
      const users = await userModel.find({});
      res.status(200).send("users");
   } catch (error) {
      res.status(500).send("error retrieving users");
   }
}

const updateUser = async (req, res) => {
   //update a user in the database
   try {
      const updates = req.body;
      const options = { new: true };

      const updatedUser = await userModel.findOneAndUpdate({ Email: req.body.Email }, updates, options);

      if (!updatedUser) {
         return res.status(404).send();
      }

      res.status(200).send("updatedUser");
   } catch (error) {
      res.status(500).send("error updating user");
   }
}

const deleteUser = async (req, res) => {
   //delete a user from the database
   try {
      const userId = req.params.id;
      const user = await userModel.findOne({Email: req.body.Email});

      if (!user) {
         return res.status(404).send("user not found");
      }

      res.status(200).send("user deleted");
   } catch (error) {
      res.status(500).send("error deleting user");
   }

}


module.exports = { createUser, getUsers, updateUser, deleteUser };
