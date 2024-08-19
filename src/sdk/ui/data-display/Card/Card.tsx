import { Card as AntdCard, CardProps as AntdCardProps } from "antd";
import {
  CardGridProps as AntdCardGridProps,
  CardMetaProps as AntdCardMetaProps,
} from "antd/es/card";
import { FC } from "react";

interface CardProps extends AntdCardProps {}
interface CardGridProps extends AntdCardGridProps {}
interface CardMetaProps extends AntdCardMetaProps {}

/**
 * Card component
 *
 * This component is a wrapper around Ant Design's Card component.
 * It provides a flexible and extensible content container.
 *
 * @property {FC<CardGridProps>} Grid - A inner Grid component for Card
 * @property {FC<CardMetaProps>} Meta - A inner Meta component for Card
 *
 * @see https://ant.design/components/card For more information about the Ant Design Card component.
 */

export const Card: FC<CardProps> & {
  Grid: FC<CardGridProps>;
  Meta: FC<CardMetaProps>;
} = (props) => {
  return <AntdCard {...props} />;
};

Card.Grid = AntdCard.Grid;
Card.Meta = AntdCard.Meta;
