import { CardComponent } from "./card.component";
import {Meta,Story} from '@storybook/angular';
import {action} from '@storybook/addon-actions'
export default{
    component:CardComponent,
    title:'Card Component',
    parameters:{
        backgrounds:{
            values:
            [
                {name:'red',value:'red'},
                {name:'green',value:'green'},
                {name:'yellow',value:'yellow'},
            ]
        }
    }
} as Meta<CardComponent>;

const Template:Story<CardComponent> = (args:CardComponent) => ({
    component:CardComponent,
    props:args
});

export const CardStory = Template.bind({});
CardStory.args={
    title:'Little bit Sanjay',
    subtitle:'UMMMMMMMM'
    ,content:'Sanjay is frontend engineer',
    clickCard:action('Card was clicked')
}