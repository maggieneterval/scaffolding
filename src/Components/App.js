import React from 'react';
import PatientForm from './PatientForm';

export default class App extends React.Component {
  render () {
    return (
      <div>
        <h1>Patient Questionnaire</h1>
        <PatientForm />
      </div>
    );
  }
}
