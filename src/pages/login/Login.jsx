import { zodResolver } from "@hookform/resolvers/zod";
import { Container, Form, Button  } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { logInSchema } from "../../validations/logInSchema";
import Inputs from "../../Component/form/Inputs";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(logInSchema), mode: "onBlur" });
  const submit = (data) => {
    console.log(data);
  };
  return (
    <div className="login">
      <Container className="mt-5 p-4" style={{ width: "50%" }}>
        <h1 className="text-center">LogIn</h1>
        <Form onSubmit={handleSubmit(submit)}>
          <Inputs
            name={"email"}
            type={"text"}
            register={register}
            label={"Email address"}
            error={errors?.email?.message}
          />
          <Inputs
            name={"password"}
            type={"password"}
            register={register}
            label={"Password"}
            error={errors?.password?.message}
          />

          <Button variant="primary" type="submit" className="mb-3">
            Submit
          </Button>
          <div>
            New Customer?
            <Link className="ms-1" to="/signup">
              Sign up
            </Link>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default Login;
