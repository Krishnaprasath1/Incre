import { Cricketer } from "./Cricketer";
import { Team } from "./Team";

export class Vote {

    voteId: number;
    email: string;
    category: string;
    cricketer: Cricketer;
    team: Team;

    constructor(voteId: number, email: string, category: string, cricketer: Cricketer, team: Team)
    {
        this.voteId = voteId;
        this.email = email;
        this.category = category;
        this.cricketer = cricketer;
        this.team = team;
    }

    displayInfo(): void
    {
        console.log(`Vote ID: ${this.voteId}, Email: ${this.email}`);
    }
}