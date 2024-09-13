import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { RegisterService } from '../../services/register.service';
import { Router } from '@angular/router';

// Validador personalizado para el dominio del correo electrónico
export function emailDomainValidator(control: AbstractControl): ValidationErrors | null {
  const email = control.value;
  if (email && email.indexOf('@') !== -1) {
    const [, domain] = email.split('@');
    if (domain !== 'gmail.com') {
      return { emailDomain: true }; // Marca el error si el dominio no es 'gmail.com'
    }
  }
  return null;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private registerService: RegisterService,
    private router: Router
  ) {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email, emailDomainValidator]], // Uso del validador personalizado
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(15)]],
      rememberMe: [false]
    });
  }

  onRegister(): void {
    if (this.registerForm.valid) {
      const { email, username, password } = this.registerForm.value;
      this.registerService.register(email, username, password).subscribe({
        next: (response) => {
          console.log('Registro exitoso:', response);
          this.router.navigate(['/login']);
        },
        error: (error) => {
          console.error('Error en el registro:', error);
        }
      });
    }
  }
}
