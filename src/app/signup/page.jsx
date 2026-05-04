"use client";
import {Check} from "@gravity-ui/icons";
import {Button, Description, FieldError, Form, Input, Label, TextField} from "@heroui/react";
import { authClient } from "@/lib/auth-client"; 
import { useState } from "react";
import { useRouter } from "next/navigation";

const SignupPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();
    const onSubmit = async(e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.img.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
const { data, error } = await authClient.signUp.email({
       name,
       image,
       email,
       password,
    },);
 if (error) {
  alert(error.message || "Signup Failed");
  return;
}

if (data) {
  alert("SignUp Successfully");
  router.push("/signin")
}

};
    return (
        <div className="w-11/12 mx-auto grid place-items-center mt-8">
           
             <Form className="flex w-96 flex-col gap-4 bg-gradient-to-r from-blue-500 to-purple-500 p-10 rounded-xl" onSubmit={onSubmit}>
                 <h2 className="text-center font-bold text-2xl text-blue-950">Signup</h2>
      <TextField
        isRequired
        name="name"
        type="text"
      >
        <Label>Name</Label>
        <Input placeholder="Enter Your Name" />
          <FieldError className="text-white" /> 
      </TextField>
      <TextField
        isRequired
        name="img"
        type="text"
      >
        <Label>Img Url</Label>
        <Input placeholder="Please Enter Img_Url" />
          <FieldError className="text-white" /> 
      </TextField>
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
      <div className="flex gap-2">
        <Button type="submit">
          <Check />
          Submit
        </Button>
        <Button type="reset" variant="secondary">
          Reset
        </Button>
      </div>
    </Form>
        </div>
    );
};

export default SignupPage;