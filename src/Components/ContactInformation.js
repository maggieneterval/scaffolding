import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { TextInput, NextButton, Sex } from './FormComponents';
import validateContactInformation from '../validation/contact_information';

class ContactInformation extends React.Component {
  render () {
    const { handleSubmit, pristine, submitting, nextPage, valid } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(nextPage)}>
          <Field type="text" name="firstName" label="First Name*" placeholder="First Name" component={TextInput} />
          <Field type="text" name="lastName" label="Last Name*" placeholder="Last Name" component={TextInput} />
          <Field type="text" name="address1" label="Address (Line 1)*" placeholder="Address (Line 1)" component={TextInput} />
          <Field type="text" name="address2" label="Address (Line 2)*" placeholder="Address (Line 2)" component={TextInput} />
          <Field type="text" name="city" label="City*" placeholder="City" component={TextInput} />
          <Field type="text" name="state" label="State*" placeholder="State" component={TextInput} />
          <Field type="number" name="zip" label="Zip Code*" placeholder="Zip Code" component={TextInput} />
          <Field type="date" name="dob" label="Date of Birth*" component={TextInput} />
          <Field type="tel" name="phone" label="Phone Number*" placeholder="Phone Number" component={TextInput} />
          <Field type="email" name="email" label="Email*" placeholder="Email" component={TextInput} />
          <Field name="sex" label="Sex*" component={Sex} />
          <NextButton pristine={pristine} valid={valid} submitting={submitting} />
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'patient_form',
  destroyOnUnmount: false,
  validate: validateContactInformation
})(ContactInformation);
