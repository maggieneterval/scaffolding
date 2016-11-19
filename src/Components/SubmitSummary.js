import React from 'react';
import { connect } from 'react-redux';

class SubmitSummary extends React.Component {

  render () {
    const patientData = this.props.form.patient_form.values;
    const { firstName, lastName } = patientData;
    console.log('Form data: ', patientData);
    return (
      <div>
        <p>Thank you. Your data has been successfully recorded.</p>
        <p>First name: {firstName}</p>
        <p>Last name: {lastName}</p>
      </div>
    );
  }

}

const mapStateToProps = ({ form }) => ({
  form
});

export default connect(mapStateToProps)(SubmitSummary);
