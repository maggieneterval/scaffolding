import React from 'react';
import { Input, Select, Button, Textarea, Checkbox } from 'rebass';

//------------------------------ContactInformation Form Components------------------------------//

export const FirstName = (field) => (
  <Input {...field.input} 
    label="First Name"
    placeholder="First Name"
    rounded
  />
);

export const LastName = (field) => (
  <Input {...field.input}
    label="Last Name"
    placeholder="Last Name"
    rounded
  />
);

export const Address1 = (field) => (
  <Input {...field.input}
    label="Address (Line 1)"
    placeholder="Address (Line 1)"
    rounded
  />
);

export const Address2 = (field) => (
  <Input {...field.input}
    label="Address (Line 2)"
    placeholder="Address (Line 2)"
    rounded
  />
);

export const City = (field) => (
  <Input {...field.input}
    label="City"
    placeholder="City"
    rounded
  />
);

export const State = (field) => (
  <Input {...field.input}
    label="State"
    placeholder="State"
    rounded
  />
);

export const ZipCode = (field) => (
  <Input {...field.input}
    label="Zip Code"
    placeholder="Zip Code"
    rounded
  />
);

export const DateOfBirth = (field) => (
  <Input {...field.input}
    label="Date of Birth"
    type="date"
    rounded
  />
);

export const Phone = (field) => (
   <Input {...field.input}
    label="Phone Number"
    type="tel"
    placeholder="123-456-7890"
    rounded
  />
);

export const Email = (field) => (
   <Input {...field.input}
    label="Email"
    type="email"
    placeholder="example@gmail.com"
    rounded
  />
);

export const Sex = (field) => (
  <Select {...field.input}
    label="Sex"
    options={[{children: 'Male', value: 'male'}, {children: 'Female', value: 'female'}]}
    rounded
  />
);

//------------------------------MedicalHistory Form Components------------------------------//

export const ReasonForVisit = (field) => (
  <Textarea {...field.input}
    label="Please describe the reason for your visit."
    rounded
  />
);

export const Medications = (field) => (
  <Textarea {...field.input}
    label="Please describe all medications and supplements you are currently taking."
    rounded
  />
);

export const Hospitalizations = (field) => (
  <Textarea {...field.input}
    label="Please describe any recent hospitalizations or surgeries."
    rounded
  />
);

export const CheckConditions = (field) => (
  <Checkbox {...field.input}
    checked={field.input.value === true}
    label={field.condition}
    theme="success"
  />
);

//------------------------------ClientAgreement Form Components------------------------------//

export const PatientAgreementCheckbox = (field) => (

)

//------------------------------Button Components------------------------------//

export const NextButton = ({ pristine, submitting }) => (
  <Button backgroundColor="primary"
    color="white"
    inverted
    rounded
    type="submit"
    disabled={pristine || submitting}
    style={ (pristine || submitting) ? {opacity: 0.5} : {opacity: 1} }
  >Next
  </Button>
);

export const PreviousButton = ({ submitting, previousPage }) => (
  <Button backgroundColor="primary"
    color="white"
    inverted
    rounded
    disabled={submitting}
    onClick={previousPage}
  >Previous
  </Button>
);

export const SubmitButton = ( { pristine, submitting }) => (
  <Button backgroundColor="primary"
    color="white"
    inverted
    rounded
    type="submit"
    disabled={pristine || submitting}
    style={ (pristine || submitting) ? {opacity: 0.5} : {opacity: 1} }
  >Submit
  </Button>
);
