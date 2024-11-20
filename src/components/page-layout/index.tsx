import React from 'react';
import Header from '../header';

function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='page-layout'>
      <Header />
      {children}
    </div>
  );
}

export default PageLayout;
