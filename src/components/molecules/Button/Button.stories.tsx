import Button from './index'

import { addBreakLine } from 'utils/addBreakLine'

import { ComponentMeta, ComponentStory } from '@storybook/react'

const classNames = addBreakLine(['.Button.${className}'])

const metadata: ComponentMeta<typeof Button> = {
  component: Button,
  title: 'Components/Molecules/Button',
  parameters: {
    docs: {
      description: {
        component: `It's a normal button with optional <b>Icon</b>, can be styled by classNames: ${classNames}`
      }
    }
  },
  argTypes: {
    icon: { control: false, description: 'Any icon passed by props' }
  }
}

const Template: ComponentStory<typeof Button> = args => (
  <Button {...args}>{args.children}</Button>
)

const WithoutIcon = Template.bind({})

WithoutIcon.args = {
  children: 'Button',
  disabled: false
} as ComponentStory<typeof Button>['args']

export { WithoutIcon }

export default metadata
