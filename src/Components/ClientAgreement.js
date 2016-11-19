import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import axios from 'axios';

class ClientAgreement extends React.Component {

  render () {
    const { handleSubmit, pristine, reset, submitting, previousPage, nextPage, form } = this.props;
    return (
      <form onSubmit={handleSubmit(() => {
        axios.post('/api/clients',form.patient_form.values)
        .then(nextPage)
        .catch(err => console.log(err));
      })}>
        <div>
          <label htmlFor="agreement">Sign this agreement</label>
          <Field name="agreement" component="input" type="text" placeholder="First Name"/>
        </div>

        <button type="submit" disabled={pristine || submitting}>Submit</button>
        <button type="button" disabled={submitting} onClick={previousPage}>Previous</button>
      </form>
    );
  }

}

const mapStateToProps = ({ form }) => ({
  form
});

const connected = connect(mapStateToProps)(ClientAgreement);

export default reduxForm({
  form: 'patient_form',
  destroyOnUnmount: false,
})(connected);
