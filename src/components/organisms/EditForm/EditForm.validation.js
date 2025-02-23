import * as Yup from 'yup';

export const ValidationSchema = Yup.object().shape({
  editValue: Yup.string().when('editActionForm', {
    is: (val) => ['add', 'delete'].includes(val),
    then: (s) => s.required('Pole jest wymagane'),
  }),

  newName: Yup.string().when('editActionForm', {
    is: 'editName',
    then: (s) => s.required('Pole jest wymagane'),
  }),

  description: Yup.string(),
});
