<script lang="ts">
    import { Tickets } from "./Tickets";


    let ticketNumber: number = 1;
    let ticketIndex: number = 0;
    let ticketContent: string = "Части речи в русском языке. История и современность. Знаменательные и служебные части речи.";
    let secondTicketNumber: number = 1;
    let secondTicketIndex: number = 0;
    let secondTicketContent: string = "";

    async function getRandTicket() {
        secondTicketNumber = 1;
        secondTicketIndex = 0;
        secondTicketContent = "";

        console.log("getRandTicket");
        console.log(ticketIndex, ticketNumber, ticketContent);
        ticketIndex = Math.floor(Math.random() * (58 - 0) + 0); // 
        ticketNumber = Tickets[ticketIndex].number;
        ticketContent = Tickets[ticketIndex].text;
        console.log(ticketIndex, ticketNumber, ticketContent);
    }

    async function setNewTicket() {
        secondTicketNumber = 1;
        secondTicketIndex = 0;
        secondTicketContent = "";

        console.log("setNewTicket");
        console.log(ticketIndex, ticketNumber, ticketContent);
        for(let i:number = 0; i < 59; i++){
            if (ticketNumber === Tickets[i].number){
                ticketIndex = i;
            }
        }
        if (ticketNumber === 45){
            ticketIndex = 42;
            ticketNumber = 43;
        }
        
        ticketNumber = Tickets[ticketIndex].number;
        ticketContent = Tickets[ticketIndex].text;
        console.log(ticketIndex, ticketNumber, ticketContent);
    }

    async function getTwoTickets() {
        console.log("getTwoTickets");
        console.log(ticketIndex, ticketNumber, ticketContent);
        ticketIndex = Math.floor(Math.random() * (24 - 0) + 0); // 
        ticketNumber = Tickets[ticketIndex].number;
        ticketContent = Tickets[ticketIndex].text;

        console.log(ticketIndex, ticketNumber, ticketContent);
        console.log(secondTicketIndex, secondTicketNumber, secondTicketContent);

        secondTicketIndex = Math.floor(Math.random() * (58 - 25) + 25); // 
        secondTicketNumber = Tickets[secondTicketIndex].number;
        secondTicketContent = Tickets[secondTicketIndex].text;   
        console.log(secondTicketIndex, secondTicketNumber, secondTicketContent);
    }

    getRandTicket();
</script>

<svelte:head>
	<title>Comic</title>
	<meta name="description" content="Comic" />
</svelte:head>

<div
    style="width: 600px; min-width: 300px; margin: auto; margin-top: 2%; background-color: whitesmoke; padding: 1%;"
>
    <div>
        <button
            id="ramdon-ticket"
            on:click={getRandTicket}
            style="border-radius: 5px; background-color:greenyellow; height: 25px;">
            Get random ticket
        </button>
        <input type="number" id="ticket-number" bind:value={ticketNumber} min="1" max="60">
        <button
            id="list-tickets"
            on:click={setNewTicket}
            style="border-radius: 5px; background-color:greenyellow; height: 25px;">
            Set ticket number
        </button>
        <button
            id="two-tickets"
            on:click={getTwoTickets}
            style="border-radius: 5px; background-color:greenyellow; height: 25px;">
            Get two tickets
        </button>
        <br>
    </div>
    <h2 style="margin-left: 25%;"><b>Ticket Number:</b> {ticketNumber}</h2>
    <h4>{ticketContent}</h4>
    {#if secondTicketContent !== ""}
    <h2 style="margin-left: 25%;"><b>Second Ticket Number:</b> {secondTicketNumber}</h2>
    <h4>{secondTicketContent}</h4>
    {/if}
    {#each Tickets as ticket}
        <p>{ticket.text}</p>
    {/each}
</div>