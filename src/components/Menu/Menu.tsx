import React, { useState } from 'react';

import { Section } from './styles';

interface IUser {
  name: string;
  userId: string;
}

const Menu: React.FC<IUser> = (props: IUser) => {
  const [user, setUser] = useState<IUser>({} as IUser);

  setUser(props);

  return (
    <>
      <Section>
        <p>Bem vindo {user.name}</p>
        <nav>
          <ul>Ação de Menu 1</ul>
          <ul>Ação de Menu 2</ul>
          <ul>Ação de Menu 3</ul>
        </nav>
      </Section>
    </>
  );
};

export default Menu;
