import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Space, Section, Label } from 'rebass';
import { CheckConditions, TextArea, NextButton } from './FormComponents';
import { conditions } from '../utilities/filler_text';
import validateMedicalHistory from '../validation/medical_history';

class MedicalHistory extends React.Component {
  render () {
    const { handleSubmit, pristine, submitting, valid, nextPage } = this.props;
    return (
      <form onSubmit={handleSubmit(nextPage)}>
        <Field name="reasonForVisit" label="Please describe the reason for your visit.*" component={TextArea} />
        <Field name="medications" label="Please describe all medications and supplements you are currently taking." component={TextArea} />
        <Field name="hospitalizations" label="Please describe any recent hospitalizations or surgeries." component={TextArea} />
        <Label>Please select all conditions that apply to you:</Label>
        {conditions.map( (condition, i) => (
          <Field
            name={condition[0].toLowerCase() + condition.split(' ').join('').slice(1)}
            condition={condition}
            component={CheckConditions}
            key={i}
          />
        ))}
        <NextButton pristine={pristine} submitting={submitting} valid={valid} />
      </form>
    );
  }
}

export default reduxForm({
  form: 'patient_form',
  destroyOnUnmount: false,
  validate: validateMedicalHistory
})(MedicalHistory);
