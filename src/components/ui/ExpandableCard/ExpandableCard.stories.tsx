import React from 'react'
import { Story, Meta } from '@storybook/react'

import { ExpandableCard, ExpandableCardProps } from './ExpandableCard'
import { Button } from '../Button/Button'

export default {
  title: 'UI Components/ExpandableCard',
  component: ExpandableCard,
} as Meta

const Template: Story<ExpandableCardProps> = (args) => <ExpandableCard {...args} />

export const Controllable = Template.bind({})
Controllable.args = {
  label: 'Label',
  description: 'Description',
  utilityArea: <Button label="Utility Button" />,
  actionArea: (
    <React.Fragment>
      <Button size="small" label="Action Button 1" />
      <Button size="small" label="Action Button 2" />
    </React.Fragment>
  ),
  children: 'Here the card',
}
