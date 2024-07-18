import React, { useState } from "react";
import { useFormik } from "formik";
import "./App.scss"
import { useNavigate  } from "react-router-dom";
import { valitySchema } from "../store&validation/Yup";
import {databases, StoreData,Query} from "../store&validation/appwriteConfig";
import { useSnackbar } from "notistack";



const initialValues = {
    email: "",
    password: "",
    userName: ""
        
}
const CreatAcc = () => {
        const {enqueueSnackbar} = useSnackbar();
        const Navigate = useNavigate()
        const [action,setAction,] = useState("newAccount")
        const {values,handleSubmit,handleChange,errors,touched} = 
        useFormik({
            initialValues : initialValues,
            validationSchema:valitySchema(action),
    
    
            onSubmit : async (values,{resetForm}) => {
                if (action === "signin"){
                    
                    const response = await databases.listDocuments(
                        "668ab77b001ae572b355",
                        "668ab7bc000476fde865",
                        [
                            Query.equal('email', values.email),
                            Query.equal('password', values.password)
                        ]
                    );
                    if (response.total > 0){
                        
                        Navigate ('/page')
                        enqueueSnackbar('welcome to website',{
                            variant:'success',
                            autoHideDuration:1500,
                            anchorOrigin:{
                                vertical:'top',
                                horizontal:'right'
                            }
                        })
                    }else{
                        
                        Navigate ("/")
                        enqueueSnackbar('Try Agaim',{
                            variant: 'eroor',
                            autoHideDuration:1000,
                            anchorOrigin:{
                                vertical:'top',
                                horizontal:'right'
                            }
                        })
                    }
                    
                }else{
                    StoreData(values)
                    Navigate('/page');
                    enqueueSnackbar('welcome to website',{
                        variant:'success',
                        autoHideDuration:1500,
                        anchorOrigin:{
                            vertical:'top',
                            horizontal:'right'
                        }
                    })
                }
                
                console.log(values);
                resetForm();
                
                
                
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
                    {action !== "signin" && 
                        
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
                    
                    
                    
                    <div>
                        <button type="submit" className="passBut"> 
                            {action === "signin" ? "SIGN IN" : "SIGN UP"}
                        </button>

                    </div>
                    
                    
                    <br />
                    {action === "newAccount"?<span></span>:<span className="lostpass"><u>LOST YOUR PASSWORD?</u></span>}
    
                </form>
                
    
                
                
            </div>
        )
    
    
}

export default CreatAcc