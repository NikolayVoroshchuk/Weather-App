import Header from '../components/header';

const MainLayout = ({ children }: JSX.ElementChildrenAttribute) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default MainLayout;
