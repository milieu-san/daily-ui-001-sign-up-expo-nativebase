import { Icon, IconButton } from 'native-base';
import { FontAwesome } from '@expo/vector-icons';
import React from 'react';

interface Prop {
  iconName: string;
}

const CustomIconButton = (props: Prop) => {
  const { iconName } = props;

  return (
    <IconButton
      justifyContent="center"
      alignItems="center"
      icon={<Icon as={FontAwesome} name={iconName} />}
      borderRadius="full"
      _icon={{
        color: 'orange.500',
        size: '2xl',
      }}
      _pressed={{
        bg: 'orange.600:alpha.20',
      }}
    />
  );
};

export default CustomIconButton;
