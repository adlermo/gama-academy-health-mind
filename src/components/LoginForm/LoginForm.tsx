import React, { useCallback, useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../../services/api';

import { Form } from './styles';

interface IUser {
  email: string;
  senha?: string;
}

const LoginForm: React.FC = () => {
  const [user, setUser] = useState<IUser>({} as IUser);

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      let result = await api.post(`therapists`, user);
      console.log(result);
    },
    [user]
  );

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <p>Faça login para utilizar o portal</p>

        <input
          type="email"
          placeholder="Entre com seu email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />

        <input type="submit" value="Entrar" />

        <div>
          <span>Novo aqui?</span>
          <Link to={'../register'}>Registrar</Link>
        </div>
      </Form>
    </>
  );
};

export default LoginForm;
