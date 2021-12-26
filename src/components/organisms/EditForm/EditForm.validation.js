import * as Yup from 'yup';

export const ValidationSchema = Yup.object().shape({
  editValue: Yup.number().when('editActionForm', {
    is: (val) => ['add', 'delete'].includes(val),
    then: Yup.number().required('Pole jest wymagane'),
  }),

  newName: Yup.string().when('editActionForm', {
    is: 'editName',
    then: Yup.string().required('Pole jest wymagane'),
  }),

  description: Yup.string(),
});
