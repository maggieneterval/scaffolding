const validateMedicalHistory = values => ({
  reasonForVisit: !values.reasonForVisit ? 'Required' : null
});

export default validateMedicalHistory;
