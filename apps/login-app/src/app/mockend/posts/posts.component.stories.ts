import { Meta,Story } from "@storybook/angular";
import { mockPosts } from "./mockPosts";
import { PostsComponent } from "./posts.component";
export default{
    component:PostsComponent,
    title:'Posts Component'
} as Meta<PostsComponent>;

const Template:Story<PostsComponent> = (args:PostsComponent) => ({
    component:PostsComponent,
    props:args
});

export const LoadingState = Template.bind({})
LoadingState.args={
    posts:undefined
}

export const ShowState = Template.bind({})
ShowState.args={
    posts:mockPosts
}

export const ApiFailState = Template.bind({})
ApiFailState.args={
    posts:[]
}

