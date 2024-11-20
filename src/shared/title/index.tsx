type TTitleProps = {
  text: string;
  cls?: string;
};

function Title({ text, cls }: TTitleProps) {
  return <h2 className={`${cls} title `}>{text}</h2>;
}

export default Title;
