import style from './Section.module.scss';

function Section({ className, children }) {
  className = className ? ` ${className}` : '';

  return <section className={style.section + className}>{children}</section>;
}

export default Section;
