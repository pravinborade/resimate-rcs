import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <h2>Sidebar</h2>
      <h2>Header</h2>
      <Outlet />
    </div>
  );
};
export default MainLayout;
