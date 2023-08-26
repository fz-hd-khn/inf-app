import './App.css';
import Dashboard from './dashboard/dashboard';
import SidebarMenuList from './sidebar-menu-list/sidebar-menu-list';

function App() {
  return (
    <div>
      <div id="content-container" className="content-container">
        <SidebarMenuList></SidebarMenuList>

        <div className="content">
          {/* quick links go here */}
          <div className="dashboard-bar">Dashboard</div>
          <div className="dashboard-content">
            <Dashboard></Dashboard>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
