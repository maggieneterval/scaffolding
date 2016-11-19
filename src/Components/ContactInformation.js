import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Section } from 'rebass';
import { FirstName, LastName, Address1, Address2, City, State, ZipCode, DateOfBirth, Phone, Email, Sex, NextButton } from './FormComponents';

class ContactInformation extends React.Component {
  render () {
    const { handleSubmit, pristine, submitting, nextPage } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(nextPage)}>
          <Field name="firstName" component={FirstName} />
          <Field name="lastName" component={LastName} />
          <Field name="address1" component={Address1} />
          <Field name="address2" component={Address2} />
          <Field name="city" component={City} />
          <Field name="state" component={State} />
          <Field name="zip" component={ZipCode} />
          <Field name="dob" component={DateOfBirth} />
          <Field name="phone" component={Phone} />
          <Field name="email" component={Email} />
          <Field name="sex" component={Sex} />
          <Section>
            <NextButton pristine={pristine} submitting={submitting} />
          </Section>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'patient_form',
  destroyOnUnmount: false,
})(ContactInformation);
