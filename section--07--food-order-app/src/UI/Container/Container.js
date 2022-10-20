import style from './Container.module.scss';

function Container({ className, children }) {
  className = className ? ` ${className}` : '';

  return <div className={`${style.container}${className}`}>{children}</div>;
}

export default Container;
