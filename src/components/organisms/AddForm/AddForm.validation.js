import * as Yup from 'yup';

export const ValidationSchema = Yup.object().shape({
  name: Yup.string().required('Pole jest wymagane'),
  debtValue: Yup.string().required('Pole jest wymagane'),
  description: Yup.string(),
});
