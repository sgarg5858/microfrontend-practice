import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from '@microfrontends-demo/shared/data-access-user';
import { of } from 'rxjs';
import { LoginComponent } from './login.component';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let compiledElement:any;
  let userService:any;

  beforeEach(async () => {

    //Mocking UserService using Jest
    let userServiceMock = {
      loginUser:jest.fn().mockReturnValue(of("sgarg5858@gmail.com")),
      userLoginDetails$:of({useremail:'sgarg5858@gmail.com',isLoggedIn:false})
    }

    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports:[ReactiveFormsModule],
      providers:[
        {provide:UserService,useValue:userServiceMock}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;

    compiledElement = fixture.debugElement.nativeElement;

    userService = TestBed.inject(UserService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  //Its an Integration test
  it('should show a login form to the user',()=>{

    const loginFormHeadingElement = compiledElement.querySelector('.loginFormHeading');
    expect(loginFormHeadingElement.textContent).toMatch('Login Form');
    const loginEmailInputElement = compiledElement.querySelector('#userInputEmail');
    expect(loginEmailInputElement).toBeTruthy();
    
  });


  it('There should be 2 input fields',()=>{
    const inputElements = compiledElement.querySelectorAll('input');
    expect(inputElements.length).toBe(2);

  })

  //Real unit test
  it('on entering invalid email and password status should be invalid',async()=>{

    component.loginForm.patchValue({
      useremail:"sgarg5858@gmail.com",
      userpassword:"1234"
    });
    expect(component.loginForm.valid).toBeFalsy();

  })

  it('on entering valid email and passowrd status should be valid',()=>{

    component.loginForm.patchValue({
      useremail:"sgarg5858@gmail.com",
      userpassword:"12345678"
    });
    expect(component.loginForm.valid).toBeTruthy();
  });


  
  it('check email value after entering value from ui',()=>{

    const loginEmailInputElement = compiledElement.querySelector('#userInputEmail');
    loginEmailInputElement.value ="sgarg5858@gmail.com";
    loginEmailInputElement.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    const useremailFormControl = component.loginForm.controls?.['useremail'];
    expect(useremailFormControl.value).toBe(loginEmailInputElement.value);
    expect(useremailFormControl.errors).toBeNull();

  })

  it('check invalid email value after entering value from ui',()=>{

    const loginEmailInputElement = compiledElement.querySelector('#userInputEmail');
    loginEmailInputElement.value ="sgarg5858";
    loginEmailInputElement.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    const useremailFormControl = component.loginForm.controls?.['useremail'];
    expect(useremailFormControl.value).toBe(loginEmailInputElement.value);
    expect(useremailFormControl.errors).not.toBeNull();
    console.log(useremailFormControl.errors);

  })


  it('check if all form is valid ',()=>{

    const loginEmailInputElement = compiledElement.querySelector('#userInputEmail');
    loginEmailInputElement.value ="sgarg5858@gmail.com";
    loginEmailInputElement.dispatchEvent(new Event('input'));


    const loginPasswordElement = compiledElement.querySelector('#userInputPassword');
    loginPasswordElement.value ="12345667";
    loginPasswordElement.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    expect(component.loginForm.valid).toBeTruthy();

  })


  it('check if all form is not  valid when entering invalid data ',()=>{

    const loginEmailInputElement = compiledElement.querySelector('#userInputEmail');
    loginEmailInputElement.value ="sgarg5858@gmail.com";
    loginEmailInputElement.dispatchEvent(new Event('input'));


    const loginPasswordElement = compiledElement.querySelector('#userInputPassword');
    loginPasswordElement.value ="1234";
    loginPasswordElement.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    expect(component.loginForm.valid).not.toBeTruthy();
    expect(component.loginForm.controls?.['userPassword']?.['errors']).not.toBeNull();
  })

  it('on entering valid email and passowrd lets click the login button and check if button is enabled',async ()=>{

    component.loginForm.patchValue({
      useremail:"sgarg5858@gmail.com",
      userpassword:"12345678"
    });

    expect(component.loginForm.valid).toBeTruthy();

    const loginButton=compiledElement.querySelector('.loginButton');
    fixture.detectChanges();
    console.log(loginButton,loginButton.disabled,loginButton.textContent);
    expect(loginButton.disabled).toBeFalsy();

    
  });

  
});
