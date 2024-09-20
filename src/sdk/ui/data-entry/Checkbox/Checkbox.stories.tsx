import type { Meta, StoryObj } from "@storybook/react";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { useState } from "react";
import { Checkbox } from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  title: "UI/Data Entry/Checkbox",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Basic: Story = {
  args: {
    children: "Checkbox",
  },
};

export const Checked: Story = {
  args: {
    ...Basic.args,
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    ...Basic.args,
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    ...Basic.args,
    disabled: true,
    checked: true,
  },
};

export const WithLabel: Story = {
  args: {
    children: "I agree to the terms and conditions",
  },
};

export const Group: Story = {
  render: () => (
    <>
      <Checkbox.Group
        options={[
          { label: "Apple", value: "Apple" },
          { label: "Pear", value: "Pear" },
          { label: "Orange", value: "Orange" },
        ]}
      />
    </>
  ),
};

export const IndeterminateState: Story = {
  render: () => {
    const [checkedList, setCheckedList] = useState<string[]>([]);
    const [indeterminate, setIndeterminate] = useState(false);
    const [checkAll, setCheckAll] = useState(false);

    const plainOptions = ["Apple", "Pear", "Orange"];

    const onCheckAllChange = (e: CheckboxChangeEvent) => {
      setCheckedList(e.target.checked ? plainOptions : []);
      setIndeterminate(false);
      setCheckAll(e.target.checked);
    };

    const onChange = (list: any[]) => {
      setCheckedList(list as string[]);
      setIndeterminate(!!list.length && list.length < plainOptions.length);
      setCheckAll(list.length === plainOptions.length);
    };

    return (
      <>
        <Checkbox
          indeterminate={indeterminate}
          onChange={onCheckAllChange}
          checked={checkAll}
        >
          Check all
        </Checkbox>
        <Checkbox.Group
          options={plainOptions}
          value={checkedList}
          onChange={onChange}
        />
      </>
    );
  },
};
