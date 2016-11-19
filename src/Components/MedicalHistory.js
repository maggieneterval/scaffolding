import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Space, Section, Label } from 'rebass';
import { CheckConditions, ReasonForVisit, NextButton, PreviousButton, Medications, Hospitalizations } from './FormComponents';

const conditions = ['Asthma', 'Diabetes', 'Heart Disease', 'High Blood Pressure', 'Kidney Disease', 'Seizures', 'Stroke'];

class MedicalHistory extends React.Component {
  render () {
    const { handleSubmit, pristine, reset, submitting, previousPage, nextPage } = this.props;
    return (
      <form onSubmit={handleSubmit(nextPage)}>
        <Field name="reasonForVisit" component={ReasonForVisit} />
        <Field name="medications" component={Medications} />
        <Field name="hospitalizations" component={Hospitalizations} />
        <Label>Please select all conditions that apply to you:</Label>
        {conditions.map( (condition, i) => (
          <Field
            name={condition[0].toLowerCase() + condition.split(' ').join('').slice(1)}
            condition={condition}
            component={CheckConditions}
            key={i} 
          />
        ))}
        <Section>
          <NextButton pristine={pristine} submitting={submitting} />
          <Space x={1} />
          <PreviousButton submitting={submitting} previousPage={previousPage} />
        </Section>
      </form>
    );
  }
}

export default reduxForm({
  form: 'patient_form',
  destroyOnUnmount: false,
})(MedicalHistory);
