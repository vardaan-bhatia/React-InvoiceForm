import React from "react";
import { Field } from "formik";
import styled from "styled-components";

const FormGroup = styled.div`
  margin-bottom: 16px;
  width: 100%;
`;

const Label = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: #64748b;
  margin-bottom: 8px;
`;

const StyledField = styled(Field)`
  width: 100%;
  padding: 8px 16px;
  font-size: 14px;
  border: 2px solid ${(props) => (props.error ? "#dc2626" : "#64748b")};
  border-radius: 6px;
  background-color: #fff;
  color: #1f2937;

  &:focus {
    outline: none;
    border-color: #2563eb;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
  }
`;

const ErrorMessage = styled.div`
  color: #dc2626;
  font-size: 12px;
  margin-top: 4px;
`;

export const FormikInput = ({
  label,
  name,
  type = "text",
  options,
  error,
  touched,
  ...props
}) => {
  return (
    <FormGroup>
      <Label htmlFor={name}>{label}</Label>
      {type === "select" ? (
        <StyledField
          as="select"
          id={name}
          name={name}
          error={error && touched}
          {...props}
        >
          <option value="">Select {label}</option>
          {options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </StyledField>
      ) : (
        <StyledField
          type={type}
          id={name}
          name={name}
          error={error && touched}
          {...props}
        />
      )}
      {error && touched && <ErrorMessage>{error}</ErrorMessage>}
    </FormGroup>
  );
};

export const FormRow = styled.div`
  display: flex;
  gap: 24px;
  width: 100%;
`;
