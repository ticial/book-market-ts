import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import { Outlet } from "react-router-dom";
import GradientBg from "components/ui/GradientBg/GradientBg";

const Layout = () => {
  return (
    <>
      <GradientBg />
      <Header />
      <main className="wrapper container max-w-screen-xl h-full self-center mt-20 mb-6 flex flex-col items-center px-3">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
