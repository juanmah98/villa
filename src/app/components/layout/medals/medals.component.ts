import { Component, OnInit } from '@angular/core';

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
  userGoldMedals: string = "3"
  userSilverMedals: string = "1"
  userBronzeMedals: string = "4"
  userCoppernMedals: string = "5"


  ngOnInit(): void {

    this.generateMedalsValues(this.userGoldMedals, this.userSilverMedals, this.userBronzeMedals, this.userCoppernMedals)
  }

  private generateMedalsValues(gold: string, silver: string, bronze: string, copper: string) {

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
