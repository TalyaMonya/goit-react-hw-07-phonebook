import * as Yup from 'yup';

export const Schema = Yup.object().shape({
  name: Yup
    .string()
    .min(2)
    .trim()
    .required(),
  phone: Yup
    .string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required(),
});