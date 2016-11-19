import axios from 'axios';

export const postData = (form, nextPage) => (
  axios.post('/api/clients', form.patient_form.values)
    .then(nextPage)
    .catch(err => console.log(err))
);
