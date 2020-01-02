// @flow
import React from 'react';

export interface IProps {
  /**
   * Content of the button
   */
  children: any,
  /**
   * Specifies the width of the button. Default 100%
   */
  width: string,
  /**
   * What happens when you click on the button
   */
  onClick: () => void,
}

export const Button = (props: IProps): JSX.Element => {
  const {
    onClick,
    width,
    children,
  } = props;
  return (
    <button
      style={{ width }}
      onClick={onClick}
    >{children}</button>
  );
}

Button.defaultProps = {
  width: '100%',
  onClick: () => {}
};
