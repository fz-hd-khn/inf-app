import React, { useState } from 'react';

function MenuItem(props) {
  return (
    <li href={props.url} className="menu-item">
      {props.displayName}
    </li>
  );
}

function SidebarMenuList() {
  const [menuItems, setMenuItems] = useState([
    { displayName: 'Labs', url: '/labs' },
    { displayName: 'Health Aids', url: '/health-aids' },
    { displayName: 'Patient Notes', url: '/patient-notes' },
    { displayName: 'Prescriptions', url: '/prescriptions' },
    { displayName: 'Medical Contacts', url: '/medical-contacts' },
    { displayName: 'Wellness Schedule', url: '/wellness-schedule' },
    
  ]);

  return (
    
    <ul className="sidebar-container">
      {
        menuItems.map(item => {
          return <MenuItem key={item.url} {...item} />
        })
      }
    </ul>
  );
}

export default SidebarMenuList;



