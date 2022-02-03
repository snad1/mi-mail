import React from 'react';

function SidebarOption({Icon, title,  selected}) {
  return (
  <div className={`sidebarOption ${selected && 'sidebarOption--active'}`} >
<Icon/>
<h3>{title}</h3>
  </div>
  )
}

export default SidebarOption;
