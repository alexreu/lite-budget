import {
  Breadcrumb as AntdBreadcrumb,
  BreadcrumbProps as AntdBreadcrumbProps,
} from "antd";
import { FC } from "react";

interface BreadcrumbProps extends AntdBreadcrumbProps {}
/**
 * Breadcrumb Component
 *
 * This component is a wrapper around Ant Design's Breadcrumb component.
 * It provides a navigation aid in user interfaces, showing the current location within a hierarchy.
 *
 * The Breadcrumb component inherits all properties from Ant Design's BreadcrumbProps.
 *
 * Usage:
 * import { Breadcrumb } from './Breadcrumb';
 *
 * <Breadcrumb items={[
 *   { title: 'Home' },
 *   { title: 'Category' },
 *   { title: 'Current Page' }
 * ]} />
 *
 * For more details, refer to Ant Design's Breadcrumb documentation:
 * @see https://ant.design/components/breadcrumb/
 */

export const Breadcrumb: FC<BreadcrumbProps> = (props: BreadcrumbProps) => {
  return <AntdBreadcrumb {...props} />;
};
