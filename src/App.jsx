// src/components/SignupForm.js
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Client, Databases, ID } from 'appwrite';

const SignupForm = () => {
    const [action,setAction,] = useState("newAccount")
  // Initialize Appwrite
  const client = new Client();
  const databases = new Databases(client);

  client
    .setEndpoint('http://localhost/v1') // Your Appwrite Endpoint
    .setProject('YOUR_PROJECT_ID'); // Your project ID

  // Formik validation schema
  const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters long').required('Password is required'),
  });
  

  // Handle form submission
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await databases.createDocument(
        'YOUR_DATABASE_ID', // Database ID
        'YOUR_COLLECTION_ID', // Collection ID
        ID.unique(),
        {
          username: values.username,
          email: values.email,
          password: values.password,
        }
      );
      console.log('Document created:', response);
      resetForm();
    } catch (error) {
      console.error('Error creating document:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="mainbody">
            
    <form className="contantdiv" onSubmit={handleSubmit}>
        <h1 className="myacctitle">My account</h1>
        <div className="spandiv">

        <span className={action === "signin"?"signinbox gray":"signinbox"} 
            onClick={() => {setAction("signin")}} >Sign in</span>

        <span className={action === "newAccount"?"creatacc gray":"creatacc"}
            onClick={() => {setAction("newAccount")}}
            >Create An Account</span>
          
          
          
          
            </div>
        {action === "signin"?<div></div>:
            
        <div>
        <input type="text" 
            className="inputField"
            name="userName"
            placeholder="Username"
            value={values.userName}
            onChange={handleChange}
            />
    </div>
        }

                {errors.userName && touched.userName ? (<p className="err-show">{errors.userName}</p>):null}
        
        <input type="email" 
            name = "email"
            value={values.email}
            onChange={handleChange}
        className="inputField" placeholder="Username or email address " />
                        
                        {errors.email && touched.email ? (
              <p className="err-show">{errors.email}</p>
            ) : null}

        <br />
        <input type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
        className="inputFieldpassword" placeholder="password" />

        {errors.password && touched.password ?(<p className="err-show">{errors.password}</p>):null}
        <br />
        
        {action === "signin"?<div>
        <input type="checkbox" name="checkbox1" id="checkbox1" className="checkbox"/>
        <label htmlFor="checkbox1" className="checkbox">Remember me</label>
        </div>:
        
        <div>
        <input type="checkbox" name="checkbox1" id="checkbox1" className="checkbox"/>
        <label htmlFor="checkbox1" className="checkbox">Subscribe to our newsletter</label>
        </div>
        }
        
        <br />
        {action === "signin"?<p></p>:<p className="textBody">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>}
        
        {action === "signin"?
        
        <div>
            <link id="header-logo" to="./home/HomePage"></link>
        <input type="submit" className="passBut"  value="SIGN IN" />
        </div>:
        
        <div>
        <input type="submit" className="passBut"  value="SIGN UP" />
        </div>
        }
        
        <br />
        {action === "newAccount"?<span></span>:<span className="lostpass"><u>LOST YOUR PASSWORD?</u></span>}

    </form>
    

    
    
</div>
)
}
//     <Formik
//       initialValues={{ username: '', email: '', password: '' }}
//       validationSchema={validationSchema}
//       onSubmit={handleSubmit}
//     >
//       {({ isSubmitting }) => (
//         <Form>
//           <div>
//             <label htmlFor="username">Username</label>
//             <Field name="username" type="text" />
//             <ErrorMessage name="username" component="div" />
//           </div>
//           <div>
//             <label htmlFor="email">Email</label>
//             <Field name="email" type="email" />
//             <ErrorMessage name="email" component="div" />
//           </div>
//           <div>
//             <label htmlFor="password">Password</label>
//             <Field name="password" type="password" />
//             <ErrorMessage name="password" component="div" />
//           </div>
//           <button type="submit" disabled={isSubmitting}>
//             Submit
//           </button>
//         </Form>
//       )}
//     </Formik>
//   );
// };

export default SignupForm;
