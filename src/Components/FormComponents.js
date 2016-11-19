import React from 'react';
import { Input, Select, Button, Textarea, Checkbox } from 'rebass';

//------------------------------Reusable Form Components------------------------------//

export const TextInput = ({ input, type, label, placeholder, meta: { touched, error } }) => (
  <div>
    <Input {...input}
      label={label}
      placeholder={placeholder}
      type={type}
      message={(touched && error) ? error : null}
      rounded
    />
  </div>
);

export const TextArea = ({ input, label, meta: { touched, error } }) => (
  <Textarea {...input}
    label={label}
    message={(touched && error) ? error : null}
    rounded
  />
);

//------------------------------ContactInformation Form Components------------------------------//



export const Sex = ({ input, label, meta: { touched, error } }) => (
  <Select {...input}
    label={label}
    options={[{children:'', value: ''}, {children: 'Male', value: 'male'}, {children: 'Female', value: 'female'}]}
    message={(touched && error) ? error : null}
    rounded
  />
);

//------------------------------MedicalHistory Form Components------------------------------//



export const CheckConditions = (field) => (
  <Checkbox {...field.input}
    checked={field.input.value === true}
    label={field.condition}
    theme="success"
  />
);

//------------------------------ClientAgreement Form Components------------------------------//

export const PatientAgreementCheckbox = ({ input, meta: { touched, error } }) => (
  <div>
    <Checkbox {...input}
      checked={input.value === true}
      label="Yes, I agree."
      theme="success"
    />
    {(touched && error) ? <span>{error}</span> : null}
  </div>
);

//------------------------------Button Components------------------------------//

export const NextButton = ({ pristine, submitting, valid }) => (
  <Button backgroundColor="primary"
    color="white"
    inverted
    rounded
    type="submit"
    disabled={pristine || submitting || !valid}
    style={ (pristine || submitting || !valid) ? {opacity: 0.5} : {opacity: 1} }
  >Next
  </Button>
);

export const SubmitButton = ({ pristine, submitting, valid }) => (
  <Button backgroundColor="primary"
    color="white"
    inverted
    rounded
    type="submit"
    disabled={pristine || submitting || !valid}
    style={ (pristine || submitting || !valid) ? {opacity: 0.5} : {opacity: 1} }
  >Submit
  </Button>
);

export const ClearButton = ({ reset, restart }) => (
  <Button backgroundColor="primary"
    color="white"
    inverted
    rounded
    onClick={() => {
      reset();
      restart();
    }}
  >Exit
  </Button>
);
