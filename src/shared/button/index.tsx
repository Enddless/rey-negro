type TButtonProps = {
  text: string;
  cls?: string;
  onClick?: () => void | undefined;
  typeBtn?: 'button' | 'submit' | 'reset';
};

function Button({ text, cls, onClick, typeBtn }: TButtonProps) {
  return (
    <button type={typeBtn} className={`${cls} button`} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
