import { Meta,Story } from "@storybook/angular";
import { mockTodos } from "./mockTodos";
import { TodosComponent } from "./todos.component";
export default{
    component:TodosComponent,
    title:'Todos Component'
} as Meta<TodosComponent>;

const Template:Story<TodosComponent> = (args:TodosComponent) => ({
    component:TodosComponent,
    props:args
});

export const LoadingState = Template.bind({})
LoadingState.args={
    todos:undefined
}

export const ShowState = Template.bind({})
ShowState.args={
    todos:mockTodos
}

export const ApiFailState = Template.bind({})
ApiFailState.args={
    todos:[]
}

