import { Component } from "@angular/core";
import { Cricketer } from "../../types/Cricketer";



@Component({
  selector: 'app-cricketer-sample',
 standalone:true,
  templateUrl: './cricketersample.component.html',
  styleUrls: ['./cricketersample.component.scss']
})


export class CricketerSampleComponent {
        // constructor(
        //   public id: number,
        //   public name: string,
        //   public age: number,
        //   public nationality: string,
        //   public experience: number,
        //   public role: string,
        //   public totalRuns: number,
        //   public totalWickets: number
        // ) {
        //   this.age=age;
        //   this.experience=experience;
        //   this.id=id;
        //   this.name=name;
        //   this.nationality=nationality;
        //   this.role=role;
        //   this.totalRuns=totalRuns;
        //   this.totalWickets=totalWickets;
        // }

       
cricketer = new Cricketer(1,1,"Virat", 35, "Indian",17,"Batsman",18000, 25);  
}
