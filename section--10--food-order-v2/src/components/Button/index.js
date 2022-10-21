import style from './Button.module.scss';

function Button({ href, size = '', type, onClick, children, ...anotherProps }) {
  let Element = href ? 'a' : 'button';
  const className = `${style.button} ${style[`button--${type}`]} ${
    style[`button--${size}`]
  }`;

  return (
    <Element className={className} {...anotherProps}>
      {children}
    </Element>
  );
}

export default Button;
