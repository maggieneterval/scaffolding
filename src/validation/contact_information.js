const validateContactInformation = values => {
  const errors = {};

  errors.firstName = !values.firstName ? 'Required' : null;
  errors.lastName = !values.lastName ? 'Required' : null;
  errors.address1 = !values.address1 ? 'Required' : null;
  errors.address2 = !values.address2 ? 'Required' : null;
  errors.city = !values.city ? 'Require' : null;
  errors.state = !values.state ? 'Required' : null;
  errors.phone = !values.phone ? 'Required' : null;
  errors.sex = !values.sex ? 'Required' : null;
  errors.dob = !values.dob ? 'Required' : null;

  if (!values.zip) {
    errors.zip = 'Required';
  } else if (!/(^\d{5}$)|(^\d{5}-\d{4}$)/.test(values.zip)) {
    errors.zip = 'Invalid zip code'
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};

export default validateContactInformation;

