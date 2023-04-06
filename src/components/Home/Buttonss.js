import React from 'react';
import { useHistory } from 'react-router-dom';
import '../../App.css';
import './Button.css';

const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];
const SIZES = ['btn--medium', 'btn--large'];

const Buttonss = ({
  children,
  type,
  buttonStyle,
  buttonSize,
  onClick
}) => {
  const history = useHistory();

  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  const handleClick = () => {
    history.push('/HowItWorks');
  };

  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      onClick={onClick || handleClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Buttonss;
