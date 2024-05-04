const handleFormSubmit = (req, res) => {
  // Log the received data
  console.log("INVODKED CONTROLLER");
  console.log("Received form data:", req.body);
  // You can process the form data here (e.g., save to database)
  // Respond with a success message
  res.status(200).send("Form data received successfully!");
};

module.exports = {
  handleFormSubmit,
};
