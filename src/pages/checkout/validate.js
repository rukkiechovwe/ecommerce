export const BillingDetailsValidation = (
  firstName,
  lastName,
  address,
  state,
  country
) => {
  const errors = {};

  if (!firstName) errors.firstName = "First Name is required";
  if (!lastName) errors.lastName = "Last Name is required";
  if (!address) errors.address = "Address is required";
  if (!state) errors.state = "State is required";
  if (!country) errors.country = "Country is required";

  return errors;
};

