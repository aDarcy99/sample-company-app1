import clsx from 'clsx';
import React from 'react';

const Button = ({className, children, ...props}) => {
  return (
    <button className={clsx("btn", className)} {...props}>{children}</button>
  );
}
 
export default Button;