import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const validationSchema = Yup.object({
  username: Yup.string()
    .matches(/^[a-zA-Z0-9]+$/, "Only alphanumeric characters are allowed")
    .required("Username is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

// Styled components
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(to bottom right, #cfe0f7, #9f99e6);
`;

const Card = styled.div`
  width: 100%;
  max-width: 28rem;
  margin: 0 1rem;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.01);
  }
`;

const Title = styled.h2`
  font-size: 1.875rem;
  font-weight: bold;
  text-align: center;
  color: #2d2d2d;
  margin-bottom: 2rem;
`;

const Label = styled.label`
  display: block;
  font-size: 0.875rem;
  font-weight: medium;
  color: #4a4a4a;
  margin-bottom: 0.25rem;
`;

const Input = styled(Field)`
  width: 100%;
  padding: 0.75rem 1rem;
  margin-bottom: 1rem;
  border-radius: 0.75rem;
  border: 1px solid ${({ hasError }) => (hasError ? "#e74c3c" : "#dcdcdc")};
  background-color: #f9f9f9;
  transition: border-color 0.3s ease;
  &:focus {
    outline: none;
    border-color: transparent;
    box-shadow: 0 0 0 2px
      ${({ hasError }) => (hasError ? "#e74c3c" : "#3498db")};
  }
`;

const ErrorText = styled.div`
  color: #e74c3c;
  font-size: 0.875rem;
`;

const SubmitButton = styled.button`
  margin-top: 0.3rem;
  width: 100%;
  padding: 0.75rem;
  background-color: #3498db;
  color: white;
  font-weight: bold;
  border-radius: 0.75rem;
  transition: all 0.3s ease;
  &:hover {
    background-color: #2980b9;
    transform: scale(1.02);
  }
  &:active {
    transform: scale(0.98);
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #3498db;
  }
`;

function LoginForm() {
  const navigate = useNavigate();
  const handleSubmit = (values) => {
    localStorage.setItem("user", JSON.stringify(values));
    navigate("/dashboard");
  };

  return (
    <Container>
      <Card>
        <Title>Welcome Back</Title>
        <Formik
          initialValues={{ username: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form>
              <div>
                <Label htmlFor="username">Username</Label>
                <Input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Enter your username"
                  hasError={errors.username && touched.username}
                />
                {errors.username && touched.username && (
                  <ErrorText>{errors.username}</ErrorText>
                )}
              </div>

              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                  hasError={errors.password && touched.password}
                />
                {errors.password && touched.password && (
                  <ErrorText>{errors.password}</ErrorText>
                )}
              </div>

              <SubmitButton type="submit">Sign In</SubmitButton>
            </Form>
          )}
        </Formik>
      </Card>
    </Container>
  );
}

export default LoginForm;
