import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DatabaseService } from 'src/app/services/database.service';
import { User } from '../../models/user.model';


@Component({
  selector: 'app-new-person',
  templateUrl: './new-person.component.html',
  styleUrls: ['./new-person.component.scss']
})
export class NewPersonComponent implements OnInit {
  registerForm: FormGroup;
  isAllowed: boolean = false;
  currentUser: User;

  constructor(private formBuilder: FormBuilder, private database: DatabaseService) {
    this.registerForm = this.formBuilder.group(
      {
        id: [""],
        Name: [""],
        LastName: [""],
        Email: [""],
        Type: [""],
        HasManaged: [false],

        medalsOro1: [false],
        medalsOro2: [false],
        medalsOro3: [false],
        medalsOro4: [false],
        medalsOro5: [false],

        medalsPlata1: [false],
        medalsPlata2: [false],
        medalsPlata3: [false],
        medalsPlata4: [false],
        medalsPlata5: [false],

        medalsBronce1: [false],
        medalsBronce2: [false],
        medalsBronce3: [false],
        medalsBronce4: [false],
        medalsBronce5: [false],

        medalsCobre1: [false],
        medalsCobre2: [false],
        medalsCobre3: [false],
        medalsCobre4: [false],
        medalsCobre5: [false],

      },

    )

  }

  ngOnInit(): void {
    const storedUserString = localStorage.getItem("user");
    this.currentUser = JSON.parse(storedUserString);

    if (this.currentUser && this.currentUser.Email === 'jagondia96@gmail.com') this.isAllowed = true;
    console.log(this.isAllowed)
  }

  async onSumbit() {

    const arreglo = {
      id: "",
      Name: this.registerForm.value.Name,
      LastName: this.registerForm.value.LastName,
      Email: this.registerForm.value.Email,
      Type: this.registerForm.value.Type,
      HasManaged: this.registerForm.value.HasManaged,
      isAndreu: this.registerForm.value.isAndreu,

      Medals: [{
        oro: [
          this.registerForm.value.medalsOro1,
          this.registerForm.value.medalsOro2,
          this.registerForm.value.medalsOro3,
          this.registerForm.value.medalsOro4,
          this.registerForm.value.medalsOro5,
        ],
        plata: [
          this.registerForm.value.medalsPlata1,
          this.registerForm.value.medalsPlata2,
          this.registerForm.value.medalsPlata3,
          this.registerForm.value.medalsPlata4,
          this.registerForm.value.medalsPlata5,
        ],
        bronce: [
          this.registerForm.value.medalsBronce1,
          this.registerForm.value.medalsBronce2,
          this.registerForm.value.medalsBronce3,
          this.registerForm.value.medalsBronce4,
          this.registerForm.value.medalsBronce5,
        ],
        cobre: [
          this.registerForm.value.medalsCobre1,
          this.registerForm.value.medalsCobre2,
          this.registerForm.value.medalsCobre3,
          this.registerForm.value.medalsCobre4,
          this.registerForm.value.medalsCobre5,
        ],
      },

      ]
    }

    await this.database.addUser(arreglo);
    this.onReset();
  }

  onReset() {
    this.registerForm.reset();
  }

}
