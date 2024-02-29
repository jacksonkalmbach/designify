import React from "react";
import { MdArrowBack, MdClose, MdFavorite } from "react-icons/md";
import { ButtonContainer } from "./Styles";

type IconName = "arrowLeft" | "close" | "favorite";

interface Props {
  title?: string;
  icon?: IconName;
  onClick: () => void;
}

const Icons: Record<IconName, JSX.Element> = {
  arrowLeft: <MdArrowBack style={{ width: "20px", height: "20px" }} />,
  close: <MdClose />,
  favorite: <MdFavorite />,
};

const Button = ({ title, icon, onClick }: Props) => {
  return (
    <ButtonContainer onClick={onClick}>
      {icon && Icons[icon]}
      {title && title}
    </ButtonContainer>
  );
};

export default Button;
