import { Tabs as AntdTabs, TabsProps as AntdTabsProps } from "antd";
import { FC } from "react";

export type TabsProps = AntdTabsProps;

/**
 * Tabs component
 *
 * This component is a wrapper around Ant Design's Tabs component, providing a tabbed interface
 * for organizing and displaying content in separate views.
 *
 * @component
 * @example
 * ```jsx
 * <Tabs
 *   defaultActiveKey="1"
 *   items={[
 *     { label: 'Tab 1', key: '1', children: 'Content of Tab 1' },
 *     { label: 'Tab 2', key: '2', children: 'Content of Tab 2' },
 *     { label: 'Tab 3', key: '3', children: 'Content of Tab 3' },
 *   ]}
 * />
 * ```
 *
 * @typedef {import('antd').TabsProps} TabsProps - The props type for the Tabs component
 *
 * @param {TabsProps} props - The properties passed to the component
 * @param {React.ReactNode[]} props.items - An array of tab items to be rendered
 * @param {string} [props.activeKey] - The key of the currently active tab
 * @param {string} [props.defaultActiveKey] - The initial active tab's key
 * @param {('top'|'right'|'bottom'|'left')} [props.tabPosition='top'] - The position of the tabs
 * @param {Function} [props.onChange] - Callback executed when active tab is changed
 * @param {boolean} [props.centered] - Centers tabs
 * @param {SizeType} [props.size] - Preset tab bar size
 * @param {TabsType} [props.type] - Basic style of tabs
 *
 * @returns {React.ReactElement} The rendered Tabs component
 *
 * @see https://ant.design/components/tabs For more information about Ant Design Tabs component
 */

export const Tabs: FC<TabsProps> = (props) => {
  return <AntdTabs {...props} />;
};
