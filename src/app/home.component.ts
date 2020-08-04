import {
  Component
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'my-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  public showLastName: boolean = true;
  public profileForm = this.fb.group({
    firstName: ['', Validators.required],
    middleName: ['', Validators.required],
    lastName: ['', Validators.required]
  });
  constructor(private fb: FormBuilder) { }
  public toggleLastName() {
    console.log(this.profileForm);
    this.showLastName = !this.showLastName;
  }
  public disableMiddleName() {
    console.log(this.profileForm);
    let fmControl = this.profileForm.get('middleName');
    if (fmControl.enabled) {
      fmControl.disable();
    } else {
      fmControl.enable();
    }
  }
}
