import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { RemoteEntryComponent } from './entry.component';

export default {
  title: 'RemoteEntryComponent',
  component: RemoteEntryComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<RemoteEntryComponent>;

const Template: Story<RemoteEntryComponent> = (args: RemoteEntryComponent) => ({
  component: RemoteEntryComponent,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}