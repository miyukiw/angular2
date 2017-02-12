import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ExtraValidators } from '../../shared/form/form-group-input/form-group-input.component'
@Component({
  selector: 'contracts-form',
  templateUrl: './contracts-form.component.html',
  styleUrls: ['./contracts-form.component.css']
})

export class ContractsFormComponent implements OnInit {

  contractsForm: FormGroup

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.contractsForm = this.fb.group({
      name: [''],
      kana: [
        '',
        [
          ExtraValidators.conditional(
            contractsForm => {
              return Boolean(contractsForm.get('name').value)
            },
            Validators.required
          ),
        ]
      ],
      address: this.fb.group({ // <-- the child FormGroup
        zipcode: ['', Validators.required ],
        city: ['', Validators.required ],
        street: '',
        buildingName: ''
      }),
    });
  }

  ngOnInit() {
    this.contractsForm.patchValue({
      name: '名前',
      address: {
        zipcode: '1000001',
        city: '東京都千代田区千代田',
        street: '',
        buidingName: ''
      }
    });
  }

  onSubmit(e) {
    debugger
  }

}
