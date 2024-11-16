import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import CommonForm from '@/components/common/Form';
import { loginFormControls } from '@/config/Index';
import { useToast } from '@/hooks/use-toast';
import { loginUser } from '@/store/auth-slice';

const initialState = {
  email: "",
  password: "",
};

function AuthLogin() {
  const [formData, setFormdata] = useState(initialState);
  const dispatch = useDispatch();
  const { toast } = useToast();
   const navigate = useNavigate();

  function onSubmit(event) {
    event.preventDefault();

    dispatch(loginUser(formData)).then((data) => {
      if (data?.payload?.success) {
         if (user?.role === 'admin') {
          navigate('/admin/dashboard');
        } else {
          navigate('/shop/home');
        }

        toast({
          title: data?.payload?.message,
        });
      } else {
        toast({
          title: data?.payload?.message,
          variant: "destructive",
        });
      }
    });
  }

  return (
     <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Login to your account</h1>
        <p className="mt-2">Don't have an account?</p>
        <Link className="font-medium ml-2 text-primary hover:underline" to="/auth/register">
          Register
        </Link>
      </div>
      <CommonForm
        formControls={loginFormControls}
        buttonText={'Login'}
        formData={formData}
        setFormdata={setFormdata}
        onSubmit={onSubmit}
      />
    </div>

  );
}

export default AuthLogin;
