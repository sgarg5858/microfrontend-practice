import {initialize,mswDecorator} from 'msw-storybook-addon';
import {INITIAL_VIEWPORTS} from '@storybook/addon-viewport'
export const parameters={
    backgrounds:{
        values:[
            {name:'red',value:'red'},
            {name:'lightblue',value:'lightblue'},
        ]
    },
    viewport:{
        viewports:INITIAL_VIEWPORTS
    }
}
initialize();
export const decorators=[mswDecorator];