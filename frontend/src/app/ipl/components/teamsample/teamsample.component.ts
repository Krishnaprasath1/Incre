import { Component } from "@angular/core";
import { Team } from "../../types/Team";

@Component({
  selector: 'app-team-sample',
  standalone:true,
  templateUrl: './teamsample.component.html',
  styleUrls: ['./teamsample.component.scss']
})
export class TeamSampleComponent  {
        // constructor(
        //   public teamId: number,
        //   public teamName: string,
        //   public location: string,
        //   public ownerName: string,
        //   public establishmentYear: number
        // ) {

        //     this.teamId=teamId;
        //     this.teamName=teamName;
        //     this.location=location;
        //     this.ownerName=ownerName;
        //     this.establishmentYear=establishmentYear;
        // }
        
 team: Team  = new Team(1, "CSK", "Chennai", "Dhoni", 2011);

}
