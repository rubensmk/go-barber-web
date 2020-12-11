import React from 'react';
import { FiLogIn, FiMail, FiUser, FiLock, FiArrowLeft } from 'react-icons/fi';
import { Container, Content, Background } from './styles';

import logoImg from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignIn: React.FC = () => (
  <Container>
    <Background />
    <Content>
      <img src={logoImg} alt="GoBarber" />
      <form>
        <h1>Faça seu Cadastro</h1>
        <Input icon={FiUser} name="name" placeholder="Nome" />
        <Input icon={FiMail} name="email" placeholder="E-mail" />
        <Input
          icon={FiLock}
          name="password"
          type="password"
          placeholder="Senha"
        />
        <Button type="submit">Cadastrar</Button>
      </form>
      <a href="criar">
        <FiArrowLeft />
        Voltar para login
      </a>
    </Content>
  </Container>
);

export default SignIn;
