import styled from "styled-components";
import Separator from "../../../../../shared/components/Separator";
import { Checkbox, Text } from "@radix-ui/themes";
import {
  bodyTextBold,
  bodyTextLarge,
  bodyTextRegular,
  headerBoldMedium,
  headerBoldSmall,
} from "../../../../../shared/utils/fonts";

const NofiticationItem = ({ text }: { text: string }) => {
  return (
    <NotificationCategoryItem>
      <Text as="label" size={"2"}>
        <Checkbox defaultChecked color="gray" /> {text}
      </Text>
    </NotificationCategoryItem>
  );
};

const NotificationCategory = ({ title }: { title: string }) => {
  return (
    <NotificationCategoryContainer>
      <NotificationCategoryTitle>{title}</NotificationCategoryTitle>
      <Separator />
      <NofiticationItem text="Designify Communication" />
      <NofiticationItem text="Account Activity" />
    </NotificationCategoryContainer>
  );
};

const NotificationCategoryContainer = styled.div`
  top: 0;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: start;
  gap: 5px;
  box-sizing: border-box;
  margin-bottom: 20px;
`;

const NotificationCategoryTitle = styled.div`
  ${bodyTextBold}
  padding: 0;
  margin: 0;
`;

const NotificationCategoryItem = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 10px;
  justify-content: start;
  align-items: center;
  ${bodyTextRegular}
`;

export default NotificationCategory;
