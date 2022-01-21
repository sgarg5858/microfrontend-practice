import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { LoginComponent } from './login.component';
import { userEvent, within,waitFor } from '@storybook/testing-library';
export default {
  title: 'LoginComponent',
  component: LoginComponent,
  decorators: [
    moduleMetadata({
      imports: [ReactiveFormsModule],
    }),
   ],
   parameters:{
     actions:{
       argTypesRegex:'^lo.*'
     }
   },
  //  argTypes:{
  //   login:{action:'clicked'}
  // }
} as Meta<LoginComponent>;

const Template: Story<LoginComponent> = (args: LoginComponent) => ({
  component: LoginComponent,
  props: args,
});

const loginForm= new FormGroup({
  useremail:new FormControl('',[Validators.email,Validators.required]),
  userpassword:new FormControl('',[Validators.required])
})

export const FilledForm = Template.bind({});
FilledForm.args = {
  
}

export const ValidForm = Template.bind({});
ValidForm.args = {
  
}
ValidForm.play = async ({canvasElement}) => {

  const canvas = within(canvasElement);

  await userEvent.type( canvas.getByLabelText('Your email:',{selector:'input'}),'sgarg5858@gmail.com',{delay:100} );

  await userEvent.type( canvas.getByLabelText('Your password:',{selector:'input'}),'12345678',{delay:100});

  await userEvent.click(canvas.getByText('Login',{selector:'button'}));

}

export const InvalidForm = Template.bind({});
InvalidForm.args = {
  // loginForm:JSON.parse(JSON.stringify(loginForm))
}
InvalidForm.play = async ({canvasElement}) => {

  const canvas = within(canvasElement);

  await userEvent.type( canvas.getByLabelText('Your email:',{selector:'input'}),'sgarg5858@gmail.com',{delay:100} );

  await userEvent.type( canvas.getByLabelText('Your password:',{selector:'input'}),'1234',{delay:100});

  await userEvent.tab();



  await waitFor(async ()=>{
    await userEvent.hover(canvas.getByText('Password should have minimum 6 characters'),{})
  })

  // await userEvent.click(canvas.getByText('Login',{selector:'button'}));

}