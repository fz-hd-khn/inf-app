import './App.css';
import Dashboard from './dashboard/dashboard';
import SidebarMenuList from './sidebar-menu-list/sidebar-menu-list';
import QuickLinks from './quick-links/quick-links';
import Header from './header/header';

function App() {
  const links = [
      { id:'1', src: "../assets/vial.png", alt: "vial icon", text: "Lab/Diagnostic Results" },
      { id:'2',src: "../assets/clipboard.png", alt: "clipboard icon", text: "Review Last Appointment" },
      { id:'3',src: "../assets/calendar-icon.png", alt: "calendar icon", text: "Upcoming Appointments" },
      { id:'4',src: "../assets/doctorsnote-icon.png", alt: "doctors note icon", text: "Doctor's Notes" },
      { id:'5',src: "../assets/pill.png", alt: "pill icon", text: "Prescriptions" }
  ];
  return (
    <div>
      <Header></Header>
      <div id="content-container" className="content-container">
        <SidebarMenuList></SidebarMenuList>

        <div className="content">
          <QuickLinks links={links}></QuickLinks>
          <div className="dashboard-bar">Dashboard</div>
          <Dashboard></Dashboard>
        </div>
      </div>
    </div>
  );
}

export default App;
