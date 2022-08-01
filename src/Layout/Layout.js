import Header from "../pages/Header";

const Layout = ({children}) => {
  return (
   <div>
     <Header />
    {children}
   </div>
  )
};

export default Layout;
