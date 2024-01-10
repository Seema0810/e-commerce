const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Customer = require("../models/customer_model");
const auth = require("../middleware/protectedresource");

// creating endpoint for signup or registration

router.post("/signup", async (req, res) => {
  // console.log("registration info", req.body);
  const { name, email, password, confirmPassword } = req.body;
 
  if (!name || !email || !password || !confirmPassword ) {
    return res.status(400).json({ error: "one or more field are empty" });
  }
  try {   
    const CustomerInDB = await Customer.findOne({ email}); // finding the Customer with this email in Customer Model
    console.log("Customer in DB");

    if (CustomerInDB) {
      return res.status(401).json({ error: "Customer already exists with this email-id " });
    }
    let hashedPassword;
    if(password===confirmPassword){
   hashedPassword = await bcryptjs.hash(password, 16); // encrypting the password using bcryptjs library
  }else{
    console.log("Password didn't match");
  }

    const newCustomer = new Customer({
      name,
      email,
      password: hashedPassword,
    });
    await newCustomer.save();
    console.log("Customer is", newCustomer);
    res.status(200).json({ result: "Customer signed up successfully" });
  } catch (error) {
    console.log("error in signup", error);
    res.status(400).json({ error: "Internal Server Error" });
  }
});
// creating the api for login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: "one or more field are empty" });
  }
  try {
    const CustomerInDB = await Customer.findOne({ email: email });
    if (!CustomerInDB) {
      return res.status(401).json({ error: "invalid credentials" });
    }
    const passwordMatch = await bcryptjs.compare(password, CustomerInDB.password); //  comparing the password with the password already in database
    if (passwordMatch) {
      const jwtToken = jwt.sign({ _id: CustomerInDB._id }, process.env.JWT_SECRET); // Creating the token
      const CustomerInfo = { email: CustomerInDB.email, _id: CustomerInDB._id };
      res.status(200).json({ result: { token: jwtToken, Customer: CustomerInfo } });
    } else {
      return res.status(401).json({ error: "invalid credentials " });
    }
  } catch (error) {
    console.log(error);
  }
});

// endpoint for updating the Customer details 
router.put("/api/Customer/:id", auth, async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;

   // Parse the dateOfBirth string into a Date object using moment
  //  const parsedDateOfBirth = moment(dateOfBirth, 'DD-MM-YYYY').toDate();
  try {
    if(password===confirmPassword){
    const Customer = await Customer.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          name: name,
          email: email,
         password:password
        },
      },
      { new: true }
    );
    }
    if (!Customer) {
      return res.status(404).json({ message: "Customer not found" });
    }

    res.status(200).json({Customer:Customer});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports= router;
