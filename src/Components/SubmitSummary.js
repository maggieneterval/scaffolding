import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { ClearButton } from './FormComponents';
import { Table } from 'rebass';
import { conditions } from '../utilities/filler_text';

class SubmitSummary extends React.Component {

  render () {
    const { reset, restart, form } = this.props;
    const { firstName, lastName, address1, address2, city, state, zip, dob, phone, email, sex, reasonForVisit, medications, hospitalizations } = form.patient_form.values;
    const trueConditions = conditions.filter(condition => form.patient_form.values[condition[0].toLowerCase() + condition.split(' ').join('').slice(1)]).join(', ');
    return (
      <div>
        <p>Thank you. Your data has been successfully recorded.</p>
        <Table
          data={[
            ['First Name', firstName],
            ['Last Name', lastName],
            ['Address (Line 1)', address1],
            ['Address (Line 2)', address2],
            ['City', city],
            ['State', state],
            ['Zip Code', zip],
            ['DOB', dob],
            ['Phone', phone],
            ['Email', email],
            ['Sex', sex],
            ['Reason For Visit', reasonForVisit],
            ['Medications', medications],
            ['Hospitalizations', hospitalizations],
            ['Conditions', trueConditions]
          ]}
          headings={['Field', 'Response']}
        />
        <ClearButton reset={reset} restart={restart} />
      </div>
    );
  }
}

const mapStateToProps = ({ form }) => ({
  form
});

const connected = connect(mapStateToProps)(SubmitSummary);

export default reduxForm({
  form: 'patient_form'
})(connected);
