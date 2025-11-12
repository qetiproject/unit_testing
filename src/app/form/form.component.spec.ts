import { ComponentFixture, TestBed } from "@angular/core/testing";
import { LoginComponent } from "./form.component";

describe('LoginComponent', () => {
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [LoginComponent] // standalone კომპონენტისთვის
        });
        
        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        fixture.detectChanges(); // ცვლილებას აკეთებს
    });

    it('should create component', () => {
        expect(component).toBeTruthy();
    });

    it('should have invalid form by default', () => {
        expect(component.form.valid).toBeFalse(); // reactive form-ის შემოწმება
    });

    it('should be valid when email is set correctly', () => {
        component.form.setValue({ email: "test@gmail.com"});
        expect(component.form.valid).toBeTrue();
        expect(component.form.value).toEqual({email: 'test@gmail.com'}); // value-ს შემოწმება
    });

     it('should show "Valid" text in DOM when form is valid', () => {
        component.form.setValue({ email: 'test@gmail.com'});
        fixture.detectChanges();

        const compiled = fixture.nativeElement as HTMLElement; // DOM წვდომა
        const text  = compiled.querySelector('p')?.textContent;

        expect(text).toContain('Valid'); // DOM_ის შემოწმება
    })

});