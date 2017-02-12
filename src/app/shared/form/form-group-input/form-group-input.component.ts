import { Input, Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'form-group-input',
  templateUrl: './form-group-input.component.html',
  styleUrls: ['./form-group-input.component.css']
})
export class FormGroupInputComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  onChange(e) {
    // debugger
  }

  @Input() control: FormGroup;
  @Input() key: String;

}
