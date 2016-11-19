import React from 'react';
import { SequenceMap } from 'rebass';
import ContactInformation from './ContactInformation';
import MedicalHistory from './MedicalHistory';
import ClientAgreement from './ClientAgreement';
import SubmitSummary from './SubmitSummary';
import { PageHeader, Container, Section } from 'rebass';

export default class PatientQuestionnaire extends React.Component {

  constructor (props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.restart = this.restart.bind(this);
    this.state = {
      page: 0
    };
  }

  nextPage () {
    this.setState({ page: this.state.page + 1 });
  }

  restart () {
    this.setState({ page: 0 });
  }

  render () {
    const { page } = this.state;
    return (
      <Container>
        <PageHeader
          description="Please complete this form prior to your appointment."
          heading="Patient Questionnaire"
        />
        <SequenceMap
          active={page}
          steps={[{children: 'Contact Information'},
                  {children: 'Medical History'},
                  {children: 'Client Agreement'},
                  {children: 'Summary'}]}
        />
        <Section>
          {page === 0 && <ContactInformation nextPage={this.nextPage} />}
          {page === 1 && <MedicalHistory nextPage={this.nextPage} />}
          {page === 2 && <ClientAgreement nextPage={this.nextPage} />}
          {page === 3 && <SubmitSummary restart={this.restart} />}
        </Section>
      </Container>
    );
  }
}
