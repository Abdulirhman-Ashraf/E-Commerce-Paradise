import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { signUpSchema } from "../../validations/signUpSchema";
import { Button, Container, Form } from "react-bootstrap";
import Inputs from "../../Component/form/Inputs";
import { Link } from "react-router-dom";

const Signup = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({ resolver: zodResolver(signUpSchema), mode: "onBlur" });
  const submit = (data) => {
    console.log(data);
  };

  return (
    <div className="signUp">
      <Container className="mt-5 p-4" style={{ width: "50%" }}>
        <h1 className="text-center">LogIn</h1>
        <Form onSubmit={handleSubmit(submit)}>
          <Inputs
            name={"name"}
            type={"text"}
            register={register}
            label={"Name"}
            error={errors?.name?.message}

          />
          <Inputs
            name={"email"}
            type={"email"}
            register={register}
            label={"email"}
            error={errors?.email?.message}
          />
          <Inputs
            name={"password"}
            type={"password"}
            register={register}
            label={"Password"}
            error={errors?.password?.message}
          />
          <Inputs
            name={"confirmPassword"}
            type={"password"}
            register={register}
            label={"Confirm Password"}
            error={errors?.confirmPassword?.message}
          />
          <div>
            Already have an account?
            <Link className="ms-1" to="/login">
              Login
            </Link>
          </div>
          <Button variant="primary" type="submit" className="mb-3">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Signup;
