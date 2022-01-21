import { Meta,Story } from "@storybook/angular";
import { CommentsComponent } from "./comments.component";
import {comments} from './mockComments'
export default{
    component:CommentsComponent,
    title:'Comments Component'
} as Meta<CommentsComponent>;

const Template:Story<CommentsComponent> = (args:CommentsComponent) => ({
    component:CommentsComponent,
    props:args
});

export const LoadingState = Template.bind({})
LoadingState.args={
    comments:undefined
}

export const ShowCommentsState = Template.bind({})
ShowCommentsState.args={
    comments:comments
}

export const ApiFailState = Template.bind({})
ApiFailState.args={
    comments:[]
}

