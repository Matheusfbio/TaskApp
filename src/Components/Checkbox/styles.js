import styled from 'styled-components/native';

export const StyledCheckBox = styled.View`
	width: 20,
	height: 20,
	borderRadius: 5,
	borderWidth: 2,
	borderColor: 'black',
	backgroundColor: isChecked ? 'black' : 'white',
`;
