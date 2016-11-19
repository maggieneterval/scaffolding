import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { loremIpsum } from '../utilities/filler_text';
import { postData } from '../utilities/axios';

class ClientAgreement extends React.Component {

  render () {
    const { handleSubmit, pristine, reset, submitting, previousPage, nextPage, form } = this.props;
    return (
      <div>
        <p>{loremIpsum}</p>
        <form onSubmit={ handleSubmit(() => postData(form, nextPage))}>
          <div>
            <label htmlFor="agreement">Sign this agreement</label>
            <Field name="agreement" component="input" type="text" placeholder="First Name"/>
          </div>

          <button type="submit" disabled={pristine || submitting}>Submit</button>
          <button type="button" disabled={submitting} onClick={previousPage}>Previous</button>
        </form>
      </div>
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
