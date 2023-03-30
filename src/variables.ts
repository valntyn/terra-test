import * as Yup from 'yup';

export const GITHUB = 'https://github.com/valntyn';
export const withoutImg
  = 'https://via.placeholder.com/360x270.png?text=no%20preview';
// eslint-disable-next-line max-len
export const pictureForTest = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png';

export const SignupSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!'),
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .matches(/^[0-9a-zA-Z]+$/, 'Forbidden symbols'),
  url: Yup.string()
    .min(2, 'Too Short!')
    .required('Required'),
});
