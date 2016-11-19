const validateClientAgreement = values => ({
  clientAgreement: !values.clientAgreement ? 'You must agree to proceed' : null
});

export default validateClientAgreement;
