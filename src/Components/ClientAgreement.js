import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { loremIpsum } from '../utilities/filler_text';
import { postData } from '../utilities/axios';
import { SubmitButton, PatientAgreementCheckbox } from './FormComponents';
import { Section, Space, Label } from 'rebass';
import validateClientAgreement from '../validation/client_agreement';

class ClientAgreement extends React.Component {

  render () {
    const { handleSubmit, pristine, submitting, nextPage, form, valid } = this.props;
    return (
      <div>
        <form onSubmit={ handleSubmit(() => postData(form, nextPage))}>
          <Label>Please read and agree to our Client Agreement.</Label>
          <p>{loremIpsum}</p>
          <Field name="clientAgreement" component={PatientAgreementCheckbox} />
          <SubmitButton pristine={pristine} submitting={submitting} valid={valid} />
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
  validate: validateClientAgreement
})(connected);
