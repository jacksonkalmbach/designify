import { MdArrowBack, MdClose, MdFavorite } from "react-icons/md";
import { IoMdCheckmark } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { ButtonContainer } from "./Styles";

type IconName = "arrowLeft" | "close" | "favorite" | "google" | "checkmark";

interface Props {
  text?: string;
  icon?: IconName | null;
  onClick: () => void;
  variant?: "primary" | "outlined" | "ghost";
  disabled?: boolean;
  isVisible?: boolean;
}

const Icons: Record<IconName, JSX.Element> = {
  arrowLeft: <MdArrowBack style={{ width: "20px", height: "20px" }} />,
  close: <MdClose />,
  favorite: <MdFavorite />,
  google: <FcGoogle />,
  checkmark: <IoMdCheckmark />,
};

const Button = ({
  text,
  icon,
  onClick,
  variant,
  disabled,
  isVisible,
}: Props) => {
  return (
    <ButtonContainer
      onClick={onClick}
      variant={variant}
      disabled={disabled}
      isVisible={isVisible}
    >
      {icon && Icons[icon]}
      {text && text}
    </ButtonContainer>
  );
};

export default Button;
