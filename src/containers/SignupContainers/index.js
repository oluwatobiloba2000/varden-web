import React, { useState } from "react";
import { Link } from "react-router-dom";
import {useHistory} from 'react-router';

// import swal from 'sweetalert';
// import Input from "../../components/TextInput";
// import Button from "../../components/Button";
import { SignupWrapper, FormContainer } from "./signup.styles";

// import ApiService from "../../services/api.services";
import { api } from '../../services/Endpoints';
import { Input } from "@chakra-ui/input";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Button } from "@chakra-ui/button";
import { useForm } from "react-hook-form";
import { Collapse } from "@chakra-ui/transition";
import { Alert, AlertIcon } from "@chakra-ui/alert";
import { Text } from "@chakra-ui/layout";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Axios from "axios";
import logoSVG from '../../assets/appetite-logo.jpeg'

const schema = yup.object().shape({
  name: yup.string().required(),
  phone_number: yup.string().min(10).required(),
  email: yup.string().email().required(),
  password: yup.string().min(4).required(),
});


const Signup = ()  =>  {

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const history = useHistory()
  let errMsg;

  const onSubmit = formData => {
  console.log("🚀 ~ file: index.js ~ line 40 ~ Signup ~ formData", {formData})
    setError('')
    setLoading(true);

    Axios.post(`${api.baseUrl}${api.createUser}`, formData, {
      headers: {
      'Content-Type': 'application/json'
    }})
    .then(({ data }) => {
      console.log("🚀 ~ file: index.js ~ line 33 ~ .then ~ data", {data})
      setLoading(false);
      window.localStorage.setItem('current_user', JSON.stringify({token : data.token}));
    })
    .catch(err => {
      if(err.response.data){
        for(let e in err.response.data){
            errMsg = err.response.data[e][0]
        }
      }else{
        errMsg = err.message
      }
      console.log("🚀 ~ file: index.js ~ line 55 ~ Signup ~ err", {error, errMsg, err})
      setLoading(false);
      setError(errMsg);
    });
  }


    return (
      <SignupWrapper>
        <div className="container" style={{color: 'black'}}>
          <div className="row justify-content-center">
           
            <FormContainer>
            <div style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "20px"
            }}>
              <img
                src={logoSVG}
                alt="logo"
                style={{width: "75%"}}
                className="logo"
                onClick={() => history.push("/")}
              />
            </div>
              <p>
                Enjoy the best of Appetite
                <br /> create an account today!
              </p>
              <Collapse in={error} style={{marginBottom: '13px'}} animateOpacity>
                    <Alert status="error">
                      <AlertIcon /> 
                        {error}
                    </Alert>
                </Collapse>
              <div className="flex input-wrapper">
                <form onSubmit={handleSubmit(onSubmit)} style={{width: '100%'}}>

                  <FormControl id="firstname">
                    <FormLabel>Name</FormLabel>
                    <Input isInvalid={errors.name && errors.name.message ? true : false} type="text" {...register("name")} name="name" width="100%" placeholder="Name" />
                    <Text fontSize="13px" textAlign="left" color="#E53E3E">
                     {errors.name && errors.name.message}</Text>
                  </FormControl>

                  <FormControl id="email">
                    <FormLabel>Email</FormLabel>
                    <Input
                      placeholder="Email"
                      width="100%"
                      type="email"
                      name="email"
                      isInvalid={errors.email && errors.email.message ? true : false}
                      {...register('email')}
                    />
                      <Text  fontSize="13px" textAlign="left" color="#E53E3E">
                     {errors.email && errors.email.message}</Text>
                    </FormControl>

                    <FormControl id="phone">
                    <FormLabel>Phone</FormLabel>
                    <Input
                      placeholder="Phone"
                      type="text"
                      name="phone_number"
                      width="100%"
                      isInvalid={errors.phone_number && errors.phone_number.message ? true : false}
                      {...register('phone_number')}
                    />
                      <Text  fontSize="13px" textAlign="left" color="#E53E3E">
                     {errors.phone_number && errors.phone_number.message}</Text>
                    </FormControl>

                  <FormControl id="password">
                    <FormLabel>Password</FormLabel>
                    <Input
                      placeholder="password"
                      type="password"
                      width="100%"
                      name="password"
                      isInvalid={errors.password && errors.password.message ? true : false}
                      {...register('password')}
                    />
                     <Text  fontSize="13px" textAlign="left" color="#E53E3E">
                     {errors.password && errors.password.message}</Text>
                    </FormControl>
                    <Button _hover={{backgroundColor: 'green'}} type="submit" isLoading={loading} loadingText="signing up..." className="btn" width="100%">Signup</Button>
                 </form>
               </div>
              <div className="input-wrapper terms-text">
                <p className="terms-text">
                  By clicking signup, you accept our terms of services and
                  privacy policies
                </p>
              </div>
            </FormContainer>
            <div className="col-sm-12 align-items-center text-center">
              <p className="alt-login-text">
                Already have a varden account?
                <Link to="/login">Login here</Link>
              </p>
            </div>
          </div>
        </div>
      </SignupWrapper>
    );
}

export default Signup;
