import React, { useCallback, useState, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../../services/api';

import { Form } from './styles';

interface IUser {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const [user, setUser] = useState<IUser>({} as IUser);

  const navigate = useNavigate();

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      let result = await api.post(`login`, user);

      if (result.status === 200) {
        alert('Usuário Autenticado');
        console.info(result.data);
        sessionStorage.setItem('therapistId', result.data.id_therapist);

        navigate('../dashboard');
      }
    },
    [user, navigate]
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

        <input
          type="password"
          placeholder="Digita sua senha legal"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
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
