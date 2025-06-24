const Grievance = require("../models/Grievance");

// Create a new grievance
const createGrievance = async (req, res) => {
  const { title, description } = req.body;

  try {
    const grievance = await Grievance.create({ title, description });
    res.status(201).json(grievance);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// Get all grievances
const getGrievances = async (req, res) => {
  try {
    const grievances = await Grievance.find();
    res.json(grievances);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = { createGrievance, getGrievances };
