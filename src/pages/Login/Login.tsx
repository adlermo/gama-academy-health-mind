import React from 'react';

import LoginForm from '../../components/LoginForm/LoginForm';

import { Container } from './styles';

const Login: React.FC = () => {
  return (
    <>
      <Container>
        <LoginForm></LoginForm>
      </Container>
    </>
  );
};

export default Login;
