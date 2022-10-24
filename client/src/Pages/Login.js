import React,{useState, useEffect} from 'react'
import axios from 'axios'
import { useFormik } from 'formik'
import { Link, useHistory } from 'react-router-dom'
import {useToken} from '../Auth/useToken'
import Signup from './Signup'
function Login(){
    const history = useHistory()
    const [,setToken] = useToken()
    const formik = useFormik({
        initialValues:{
            email:'',
            pass:''
        },
        onSubmit: async values =>{
            const email = values.email;
            const pass = values.pass
            try {
                const result = axios.post('/api/login',{email, pass})
                console.log((await result).data)
                const {token} = (await result).data
                setToken(token)
                history.push(`/dashboard/${email}`)
            } catch (error) {
                console.log(error)
            }
        }
    })
    return(
        <>
            <div className='form'>
                <form className='formcontainer' onSubmit={formik.handleSubmit}>
                    <div>
                        <label>Email</label><br></br>
                        <input type="email" id="email" name='email' value={formik.values.email} onChange={formik.handleChange} />
                    </div>
                    <div>
                        <label>Password</label><br></br>
                        <input type="password" id="pass" name="pass" value={formik.values.pass} onChange={formik.handleChange} ></input>
                    </div>
                    <div className='cen'>
                        <input type="submit" className='btn' value="Login"></input>
                    </div>
                    <div>
                    <p>Don't have an account? <Link to='/signup' >Signup</Link></p>
                </div>
                </form>
                
            </div>
        </>
    )
}

export default Login