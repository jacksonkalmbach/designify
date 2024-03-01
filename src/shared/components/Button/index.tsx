import { MdArrowBack, MdClose, MdFavorite } from "react-icons/md";
import { ButtonContainer } from "./Styles";

type IconName = "arrowLeft" | "close" | "favorite";

interface Props {
  text?: string;
  icon?: IconName;
  onClick: () => void;
  variant?: "primary" | "outlined" | "ghost";
}

const Icons: Record<IconName, JSX.Element> = {
  arrowLeft: <MdArrowBack style={{ width: "20px", height: "20px" }} />,
  close: <MdClose />,
  favorite: <MdFavorite />,
};

const Button = ({ text, icon, onClick, variant }: Props) => {
  return (
    <ButtonContainer onClick={onClick} variant={variant}>
      {icon && Icons[icon]}
      {text && text}
    </ButtonContainer>
  );
};

export default Button;
