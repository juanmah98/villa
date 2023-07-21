import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { User } from 'src/app/components/models/user.model';

@Component({
  selector: 'app-medals',
  templateUrl: './medals.component.html',
  styleUrls: ['./medals.component.scss']
})
export class MedalsComponent implements OnInit {
  goldMedals: string = "0"
  silverMedals: string = "0"
  bronzeMedals: string = "0"
  copperMedals: string = "0"

  userGoldMedals: number = 0
  userSilverMedals: number = 0
  userBronzeMedals: number = 0
  userCoppernMedals: number = 0

  goldMedalImg: SafeResourceUrl;
  silverMedalImg: SafeResourceUrl;
  bronzeMedalImg: SafeResourceUrl;
  copperMedalImg: SafeResourceUrl;

  private currentUser: User;

  constructor(private sanitizer: DomSanitizer) {
    const goldUrl = "../../../../../assets/svg/GoldMedalIcon.svg";
    this.goldMedalImg = this.sanitizer.bypassSecurityTrustResourceUrl(goldUrl);
    const silverUrl = "../../../../../assets/svg/SilverMedalIcon.svg";
    this.silverMedalImg = this.sanitizer.bypassSecurityTrustResourceUrl(silverUrl);
    const bronzeUrl = "../../../../../assets/svg/BronzeMedalIcon.svg";
    this.bronzeMedalImg = this.sanitizer.bypassSecurityTrustResourceUrl(bronzeUrl);
    const copperUrl = "../../../../../assets/svg/CopperMedalIcon.svg";
    this.copperMedalImg = this.sanitizer.bypassSecurityTrustResourceUrl(copperUrl);
  }

  ngOnInit(): void {
    const storedUserString = localStorage.getItem("user");
    this.currentUser = JSON.parse(storedUserString);

    this.getMedalsCount()
    this.generateMedalsValues(this.userGoldMedals, this.userSilverMedals, this.userBronzeMedals, this.userCoppernMedals)
  }

  private getMedalsCount(){
    for (let index = 0; index < 5; index++) {
      if(this.currentUser.Medals[0].oro[index]) this.userGoldMedals += 1
      if(this.currentUser.Medals[0].plata[index]) this.userSilverMedals += 1
      if(this.currentUser.Medals[0].bronce[index]) this.userBronzeMedals += 1
      if(this.currentUser.Medals[0].cobre[index]) this.userCoppernMedals += 1
    }
  }

  private generateMedalsValues(gold: number, silver: number, bronze: number, copper: number) {

      const numerosRomanos = [
        { valor: "0", romano: "0" },
        { valor: "1", romano: "I" },
        { valor: "2", romano: "II" },
        { valor: "3", romano: "III" },
        { valor: "4", romano: "IV" },
        { valor: "5", romano: "V" }
      ];

      for (let i = numerosRomanos.length - 1; i >= 0; i--) {
        if (gold.toString() === numerosRomanos[i].valor) {
          this.goldMedals = numerosRomanos[i].romano;
        }
        if (silver.toString() === numerosRomanos[i].valor) {
          this.silverMedals = numerosRomanos[i].romano;
        }
        if (bronze.toString() === numerosRomanos[i].valor) {
          this.bronzeMedals = numerosRomanos[i].romano;
        }
        if (copper.toString() === numerosRomanos[i].valor) {
          this.copperMedals = numerosRomanos[i].romano;
        }
      }
  }
}
