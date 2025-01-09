import Header from "../components/Header/Header";
import CountPage from "../pages/count/count.page";
import "./main-layout.scss";
const MainLayout = () => {
  return (
    <div className="container">
      <header className="header-sticky">
        <Header />
      </header>
      <div className="body">
        <CountPage />
        <CountPage />
        <CountPage />
        <CountPage />
        <CountPage />
        <CountPage />
        <CountPage />
        <CountPage />
        <CountPage />
        <CountPage />
        <CountPage />
        <CountPage />
        <CountPage />
        <CountPage />
        <CountPage />
        <CountPage />
        <CountPage />
        <CountPage />
        <CountPage />
        <CountPage />
        <CountPage />
      </div>
    </div>
  );
};

export default MainLayout;
