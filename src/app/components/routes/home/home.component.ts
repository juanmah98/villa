import { Component, OnInit } from '@angular/core';
import { DatabaseServiceService } from 'src/app/services/database-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 

  constructor(private databaseService: DatabaseServiceService) { }

  ngOnInit(): void {
   this.databaseService.getUsers().subscribe(user => {
    console.log(user)
    user.forEach(elemnt => {
      if("juanmah1998@gmail.com" == elemnt.Email){
        console.log(elemnt)
      }
      
    })
   })
  }

}
