import CommonForm from '@/components/common/Form';
import { registerFormControls } from '@/config/Index';
import { useToast } from '@/hooks/use-toast';
import { registerUser } from '@/store/auth-slice';
import { data } from 'autoprefixer';

import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

const initialState = {
    userName : '',
    email : '',
    password : ''
}

const AuthRegister = () => {

    const [formData, setFormdata] = useState(initialState);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {toast} = useToast();



    function onSubmit(event){
        event.preventDefault();
        dispatch(registerUser(formData)).then((data)=> {
            if(data?.payload?.success) {
                toast({
                    title: 'Registration Successfull',
                })
                navigate('/auth/login')
            } else{
               toast({
                // title : data?.payload?.message

                title : "User with this email Already exists",
                variant : "destructive"
               }) 
            }
            // console.log(data);
        })
    }

  return (
    <div className="mx-auto w-full max-w-md space-y-6">

        <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-foreground">Create new account</h1>
            <p className="mt-2">Already have an account</p>
            <Link  className="font-medium ml-2 text-primary hover:underline" to='/auth/login'>
            Login </Link>
        </div>
        <CommonForm 
            formControls={registerFormControls}
            buttonText={'Sign Up'}
            formData={formData}
            setFormdata={setFormdata}
            onSubmit={onSubmit}
        />
    </div>
  )
}

export default AuthRegister ;
