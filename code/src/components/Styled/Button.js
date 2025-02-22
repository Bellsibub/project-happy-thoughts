import styled from 'styled-components';

const Button = styled.button`
  background-color: ${(props) => (props.faded ? 'lightgrey' : 'pink')};
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  ${(props) => props.type === 'submit'
    && `width: fit-content;
  padding: 0 25px;`}

  ${(props) => props.position === 'top-right'
    && `
    position: absolute;
    top: 25px;
    right: 25px;
  `}
  
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    border: 2px solid grey;
  }
`;

Button.Emoji = styled.span`
  font-size: 14px;
`;

Button.Text = styled.span`
  font-family: 'Courier New', monospace;
  margin: 0 10px;
`;

export default Button;
