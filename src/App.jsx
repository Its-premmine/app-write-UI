import React, { useState } from "react";
import "./App.scss";
import {  useFormik } from "formik";
import { valitySchema } from "./Yup";
import { Client ,Databases ,ID} from 'appwrite';
import MyPage from "./MyPage";
// import { Navigate } from "react-router-dom";

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('668ab6dc002ed8d6f90b');

const databases = new Databases(client);

const initialValues = {
    email: "",
    password: "",
    userName: ""
    
}

const App = () => {
    const [action,setAction,] = useState("newAccount")
    const {values,handleSubmit,handleChange,errors,touched} = 
    useFormik({
        initialValues : initialValues,
        validationSchema:valitySchema,


        onSubmit : (values,action) => {
        const promise = databases.createDocument("668ab77b001ae572b355","668ab7bc000476fde865",ID.unique(),
            {
                userName : values.userName,
                email : values.email,
                password : values.password,
            }
    );
    promise.then(function(response){
        console.log(response);
    },function(error){
        console.log(error);
    })
            console.log(values);
            <MyPage/>
            action.resetForm();
        }
        
    })

    return(
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

                
                <input type="email" 
                    name = "email"
                    value={values.email}
                    onChange={handleChange}
                className="inputField" placeholder="Username or email address " />
                {errors.email && touched.email?(<p className="error_show">{errors.email}</p>):null}
                                
                <br />
                <input type="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                className="inputFieldpassword" placeholder="password" />
                {errors.password && touched.password?(<p className="error_show">{errors.password}</p>):null}
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

export default App
