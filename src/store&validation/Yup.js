import * as Yup from 'yup';

export const valitySchema = (action) =>{
    
    return Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required '),
    userName: action === 'newAccount' ? Yup.string().required('Required') : Yup.string(),
  })
 
}


  