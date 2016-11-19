import React from 'react';
import { SequenceMap } from 'rebass';
import ContactInformation from './ContactInformation';
import MedicalHistory from './MedicalHistory';
import ClientAgreement from './ClientAgreement';
import SubmitSummary from './SubmitSummary';

export default class PatientQuestionnaire extends React.Component {

  constructor (props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.state = {
      page: 0
    };
  }

  nextPage () {
    this.setState({ page: this.state.page + 1 });
  }

  previousPage () {
    this.setState({ page: this.state.page - 1 });
  }

  render () {
    const { page } = this.state;
    return (
      <div>
        <h1>Patient Questionnaire</h1>
        <SequenceMap
          active={page}
          steps={[{children: 'Contact Information'},
                  {children: 'Medical History'},
                  {children: 'Client Agreement'},
                  {children: 'Summary'}]}
        />
        {page === 0 && <ContactInformation nextPage={this.nextPage}/>}
        {page === 1 && <MedicalHistory previousPage={this.previousPage} nextPage={this.nextPage}/>}
        {page === 2 && <ClientAgreement previousPage={this.previousPage} nextPage={this.nextPage}/>}
        {page === 3 && <SubmitSummary/>}
      </div>
    );
  }
}
