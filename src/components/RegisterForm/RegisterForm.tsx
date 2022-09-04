import React, { useCallback, useState, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { api } from '../../services/api';

import { Form } from './styles';

interface IUser {
  name: string;
  email: string;
  password: string;
  method: string;
  crp: string;
  phone: string;
}

const RegisterForm: React.FC = () => {
  const [user, setUser] = useState<IUser>({} as IUser);

  const navigate = useNavigate();

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      let result = await api.post(`therapists`, user);

      if (result.status === 201) {
        alert('Criado com sucesso, já pode fazer login!');
        navigate('../login');
      }
    },
    [user, navigate]
  );

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <p>Cadastre seu dados para utilizar o portal</p>

        <input
          type="text"
          placeholder="Digite o seu nome"
          required
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />

        <input
          type="email"
          placeholder="Entre com seu email"
          required
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />

        <input
          type="password"
          placeholder="Digite uma senha legal"
          required
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />

        <input
          type="text"
          placeholder="Método de psicologia"
          required
          onChange={(e) => setUser({ ...user, method: e.target.value })}
        />

        <input
          type="text"
          placeholder="Seu código CRP"
          required
          onChange={(e) => setUser({ ...user, crp: e.target.value })}
        />

        <input
          type="phone"
          placeholder="Telefone para contato"
          required
          onChange={(e) => setUser({ ...user, phone: e.target.value })}
        />

        <br />
        <input type="submit" value="Cadastrar" />

        <div>
          <span>Já tem cadastro?</span>
          <Link to={'../login'}>Entrar</Link>
        </div>
      </Form>
    </>
  );
};

export default RegisterForm;
