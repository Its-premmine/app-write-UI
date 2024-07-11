import React, { useState } from "react";
import { useFormik } from "formik";
import "./App.scss"
import { useNavigate  } from "react-router-dom";
import { valitySchema } from "./Yup";
import {StoreData} from "./appwriteConfig";


const initialValues = {
    email: "",
    password: "",
    userName: ""
        
}
const CreatAcc = () => {
        const Navigate = useNavigate()
        const [action,setAction,] = useState("newAccount")
        const {values,handleSubmit,handleChange,errors,touched} = 
        useFormik({
            initialValues : initialValues,
            validationSchema:valitySchema,
    
    
            onSubmit : (values,action) => {
                console.log(values);
                StoreData(values);
                action.resetForm();
                Navigate('/page');
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

export default CreatAcc