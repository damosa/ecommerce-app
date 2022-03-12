import React from 'react'
import { Outlet } from 'react-router-dom';
import { Container } from 'reactstrap';
import Header from '../../components/Header/Header';

const ContentLayout = () => {
  return (
    <>
        <Header />
        <Container>
          <Outlet />
        </Container>
    </>
  )
}

export default ContentLayout