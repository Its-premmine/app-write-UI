import * as Yup from 'yup';

export const valitySchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required '),
    userName: Yup.string().min(4).required('Required ')
  })
 
  


  