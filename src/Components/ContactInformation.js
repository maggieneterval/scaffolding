import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { browserHistory } from 'react-router';

const date = (field) => (
  <div>
     <input {...field.input} type="date" name="dob" />
  </div>
)

class ContactInformation extends React.Component {

  constructor (props) {
    super(props);
  }

  render () {
    const { handleSubmit, pristine, reset, submitting, nextPage } = this.props;
    return (
      <form onSubmit={handleSubmit(nextPage)}>
          <div>
            <label htmlFor="firstName">First Name</label>
            <Field name="firstName" component="input" type="text" placeholder="First Name"/>
          </div>

          <div>
            <label htmlFor="lastName">Last Name</label>
            <Field name="lastName" component="input" type="text" placeholder="Last Name"/>
          </div>

          <div>
            <label htmlFor="dob">Date of Birth</label>
            <Field name="dob" component={date}/>
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <Field name="email" component="input" type="email"/>
          </div>

          <div>
            <label htmlFor="sex">Sex</label>
            <label><Field name="sex" component="input" type="radio" value="male"/> Male</label>
            <label><Field name="sex" component="input" type="radio" value="female"/> Female</label>
          </div>

          <div>
            <label htmlFor="reason_for_visit">Reason for Visit</label>
            <Field name="reason_for_visit" component="textarea" placeholder="Briefly describe the reason for your visit today."/>
          </div>

          <button type="submit" disabled={pristine || submitting}>Next</button>
        </form>
    );
  }

}

export default reduxForm({
  form: 'patient_form',
  destroyOnUnmount: false,
})(ContactInformation);
