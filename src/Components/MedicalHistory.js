import React from 'react';
import { Field, reduxForm } from 'redux-form';

class MedicalHistory extends React.Component {

  render () {
    const { handleSubmit, pristine, reset, submitting, previousPage, nextPage } = this.props;
    return (
      <form onSubmit={handleSubmit(nextPage)}>

          <div>
            <label htmlFor="history">Medical History</label>
            <Field name="history" component="input" type="text" placeholder="First Name"/>
          </div>

          <button type="submit" disabled={pristine || submitting}>Next</button>
          <button type="button" disabled={submitting} onClick={previousPage}>Previous</button>
        </form>
    );
  }

}

export default reduxForm({
  form: 'patient_form',
  destroyOnUnmount: false,
})(MedicalHistory);
