"use client";
import {Check} from "@gravity-ui/icons";
import {Button, Description, FieldError, Form, Input, Label, TextField} from "@heroui/react";
import { authClient } from "@/lib/auth-client"; 
import { useState } from "react";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";

const SignIn = () => {
    const [showPassword, setShowPassword] = useState(false);
    const onSubmit = async(e) => {
    e.preventDefault();
      const email = e.target.email.value;
    const password = e.target.password.value;
const { data, error } = await authClient.signIn.email({
        email,
       password,
       callbackURL: "/",
    },);
 if (error) {
  alert(error.message || "Signup Failed");
  return;
}

if (data) {
  alert("SignIn Successfully");
}
};
const handleGoogleSignIn = async () => {
  const{data,error} = await authClient.signIn.social({
    provider: "google",
      });
   if (error) {
    alert(error.message || "Google SignIn Failed");
  };
  if (data) {
  alert("Google SignIn Successfully");
}
};

    return (
        <div className="w-11/12 mx-auto grid place-items-center mt-8">
           
             <Form className="flex w-96 flex-col gap-4 bg-gradient-to-r from-blue-500 to-purple-500 p-10 rounded-xl" onSubmit={onSubmit}>
                 <h2 className="text-center font-bold text-2xl text-blue-950">SignIn</h2>
       <TextField
        isRequired
        name="email"
        type="email"
        validate={(value) => {
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
            return "Please enter a valid email address";
          }
          return null;
        }}
      >
        <Label>Email</Label>
        <Input placeholder="john@example.com" />
           <FieldError className="text-white" /> 
      </TextField>
      <TextField
        isRequired
        minLength={8}
        name="password"
        type={showPassword ? "text" : "password"}
        validate={(value) => {
          if (value.length < 8) {
            return "Password must be at least 8 characters";
          }
          if (!/[A-Z]/.test(value)) {
            return "Password must contain at least one uppercase letter";
          }
          if (!/[0-9]/.test(value)) {
            return "Password must contain at least one number";
          }
          return null;
        }}
      >
        <Label>Password</Label>
        <Input placeholder="Enter your password" />
            <p
  onClick={() => setShowPassword(!showPassword)}
  className="text-left text-[12px] text-white cursor-pointer select-none"
>
  {showPassword ? "Hide Password" : "Show Password"}
</p>
           
        <FieldError className="text-white" /> 
      </TextField>
      <div className="">
        <Button type="submit" className="w-full">
              Login
        </Button>
        {/* <Button type="reset" variant="secondary">
          Reset
        </Button> */}
              </div>
              <Link href={"/signup"}><button className="btn-outline border rounded-2xl text-white w-full cursor-pointer py-1 mt-1">Create New Account</button></Link>
   <p className="text-center">Or</p>
    <Button onClick={handleGoogleSignIn} className="w-full text-white" variant="outline"> <FaGoogle/> Sign In With Google</Button>
    </Form>

        </div>
    );
};

export default SignIn;