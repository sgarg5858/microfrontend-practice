import { Meta,Story } from "@storybook/angular";
import { mockUsers } from "./mockUsers";
import { UsersComponent } from "./users.component";
export default{
    component:UsersComponent,
    title:'Users Component'
} as Meta<UsersComponent>;

const Template:Story<UsersComponent> = (args:UsersComponent) => ({
    component:UsersComponent,
    props:args
});

export const LoadingState = Template.bind({})
LoadingState.args={
    users:undefined
}

export const ShowState = Template.bind({})
ShowState.args={
    users:mockUsers
}

export const ApiFailState = Template.bind({})
ApiFailState.args={
    users:[]
}

