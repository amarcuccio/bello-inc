import React from 'react';
import Button from '@material-ui/core/Button';

const MainMenu = (props) => {
  const { menuItems } = props;
  return (
    <div>
      {menuItems.map((item, index) => (
        <Button key={index}>{item}</Button>
      ))}
    </div>
  );
};

export default MainMenu;
