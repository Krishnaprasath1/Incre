import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { TeamCreateComponent } from "./components/teamcreate/teamcreate.component";
import { CricketerCreateComponent } from "./components/cricketercreate/cricketercreate.component";
import { MatchCreateComponent } from "./components/matchcreate/matchcreate.component";
import { TeamEditComponent } from "./components/teamedit/teamedit.component";
import { CricketerEditComponent } from "./components/cricketeredit/cricketeredit.component";
import { MatchEditComponent } from "./components/matchedit/matchedit.component";
import { VoteComponent } from "./components/vote/vote.component";
import { TicketBookingComponent } from "./components/ticketbooking/ticketbooking.component";

const routes: Routes = [
  {path: '', redirectTo: 'ipl', pathMatch: "full"},
  {path: 'ipl', component: DashboardComponent},
  {path: 'team', component: TeamCreateComponent},
  {path: 'cricketer', component: CricketerCreateComponent},
  {path: 'match', component: MatchCreateComponent},
  {path: 'team/edit/:teamId', component: TeamEditComponent},
  {path: 'cricketer/edit/:cricketerId', component: CricketerEditComponent},
  {path: 'match/edit/:matchId', component: MatchEditComponent},
  {path: 'vote', component: VoteComponent},
  {path: 'ticketbooking', component: TicketBookingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IplRoutingModule {}
