import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { StyledView } from '../../screens/main-screen/styles';
import { StyledCheckBox } from './styles';

const CheckBox = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  return (
    <TouchableOpacity onPress={handleCheck}>
      <StyledView>
        <StyledCheckBox
          style={{
            width: 20,
            height: 20,
            borderRadius: 5,
            borderWidth: 2,
            borderColor: 'black',
            backgroundColor: isChecked ? 'black' : 'white',
          }}
        />
        <Text style={{ marginLeft: 8 }}>typography</Text>
      </StyledView>
    </TouchableOpacity>
  );
};

export default CheckBox;
