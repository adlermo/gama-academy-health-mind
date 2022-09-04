import React from 'react';

import RegisterForm from '../../components/RegisterForm/RegisterForm';

import { Container } from './styles';

const Register: React.FC = () => {
  return (
    <>
      <Container>
        <RegisterForm></RegisterForm>
      </Container>
    </>
  );
};

export default Register;
