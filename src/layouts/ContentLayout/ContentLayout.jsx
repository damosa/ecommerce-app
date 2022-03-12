import React from 'react'
import Header from '../../components/Header/Header';

const ContentLayout = ({children}) => {
  return (
    <>
        <Header />
        <div className="container">
            {children}
        </div>
    </>
  )
}

export default ContentLayout