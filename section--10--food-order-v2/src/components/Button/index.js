import style from './Button.module.scss';

function Button({ href, type, onClick, children, ...anotherProps }) {
  let Element = href ? 'a' : 'button';
  const className = `${style.button} ${style[`button--${type}`]}`;

  return (
    <Element className={className} {...anotherProps}>
      {children}
    </Element>
  );
}

export default Button;
