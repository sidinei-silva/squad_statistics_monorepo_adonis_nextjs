import Yup from '../../../utils/yupTranslate';

const userSchema = Yup.object().shape({
  username: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().min(6).required(),
});

export default userSchema;
