const handleFormSubmit = (req, res) => {
  console.log(req.body);
  console.log("Form data received successfully in the controller!");
  res
    .status(200)
    .json({ message: "Form data received successfully in the controller!" });
};

module.exports = {
  handleFormSubmit,
};
