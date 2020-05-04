import * as React from 'react';

import Colors from '../constants/Colors';

export default function SideDrawerIcon(props) {
  const { Icon, name, color } = props
  return (
    <Icon
      name={name}
      size={30}
      color={color ? color : Colors.blackIcon }
    />
  );
}
