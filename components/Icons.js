import React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';

const Icons = ({name}) => {

  switch (name) {
    case 'circle':
      return <Icon name="circle-thin" size={45} />;
    case 'cross':
      return <Icon name="times" size={45} />;

    default:
      return <Icon name="pencil" size={45} />;
  }
};

export default Icons;
