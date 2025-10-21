import { Match } from "./Match";

export class TicketBooking {

    bookingId: number;
    email: string;
    match: Match;
    numberOfTickets: number;

    constructor( bookingId: number, email: string, match: Match, numberOfTickets: number)
    {
        this.bookingId = bookingId;
        this.email = email;
        this.match = match;
        this.numberOfTickets = numberOfTickets;
    }

    displayInfo(): void
    {
        console.log(`Booking ID: ${this.bookingId}, Email: ${this.email}, Number Of Tickets: ${this.numberOfTickets}`);
    }
}