import { Container } from './styles';

import Menu from '../../components/Menu/Menu';

const Dashboard: React.FC = () => {
  return (
    <>
      <Menu {...{ name: 'Adler', userId: '1' }} />
      <Container>
        <h1>Dashboard com Sono</h1>j
      </Container>
    </>
  );
};

export default Dashboard;
