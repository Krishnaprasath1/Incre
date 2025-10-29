import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

@Component({
    selector: 'app-register',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent  
{
    user: { fullName: string;
            username:string;
            email: string;
            password:string; role:string}  = {fullName: '', username: '', email: '', password: '', role: ''}
   
    successMessage: string;
    errorMessage: string;
    registrationForm: FormGroup;
    
    constructor(private fb: FormBuilder, private authService: AuthService, private router: Router)
    {
        this.registrationForm = this.fb.group({
            fullName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z ]+$/)]],
            username: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]+$/)]],
            password: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*[0-9]).{8,}$/)]],
            email: ['', [Validators.required, Validators.email]],
            role: ['', [Validators.required]]
        });
    }

    ngOnInit()
    {
        
    }

    onSubmit(): void
    {
        this.successMessage = '';
        this.errorMessage = '';
        if(this.registrationForm.invalid)
        {
            this.errorMessage = "Please fill out all required fields correctly.";
            this.successMessage = '';
        }
        else
        {
            this.authService.createUser(this.registrationForm.value).subscribe(
                response => {
                this.user = {...this.registrationForm.value};
            this.successMessage = "Registration successful!";
            this.errorMessage = '';
            setTimeout(()=>{ this.resetForm(); this.router.navigate(["auth/login"]);}, 3000);
                },
            error => {
                this.errorMessage = error.error || "An Error Occurred During Registration.";
                this.successMessage = '';
            }
            );
        }
    }

    resetForm():void
    {
        this.registrationForm.reset({fullName: '', username: '', email: '', password: '', role: ''});
        this.user = {...this.registrationForm.value};
        this.successMessage = '';
        this.errorMessage = ''
    }

    get f()
    {   
        return this.registrationForm.controls;
    }
}
