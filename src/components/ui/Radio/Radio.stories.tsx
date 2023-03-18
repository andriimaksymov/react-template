import { ComponentMeta, ComponentStory } from '@storybook/react';
import Radio from './Radio';

export default {
  title: 'Components/UI/Radio',
  component: Radio,
  argTypes: {
    label: {
      control: {
        type: 'text'
      },
      defaultValue: ''
    }
  }
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;

export const DefaultWithoutLabel = Template.bind({});
DefaultWithoutLabel.args = {
  defaultChecked: true
};

export const DefaultWithLabel = Template.bind({});
DefaultWithLabel.args = {
  defaultChecked: false,
  label: 'Default checkbox with label'
};

export const LabelPlacementStart = Template.bind({});
LabelPlacementStart.args = {
  label: 'Checkbox label',
  labelPlacement: 'start'
};

export const LabelPlacementEnd = Template.bind({});
LabelPlacementEnd.args = {
  label: 'Checkbox label',
  labelPlacement: 'end',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled Checkbox',
  disabled: true,
  defaultChecked: true,
};
