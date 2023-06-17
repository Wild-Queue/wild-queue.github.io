<script lang="ts">
	import { Tickets } from './Tickets';
    import type { Ticket } from './Tickets';

	let ticketNumber: number = 1;
	let ticketIndex: number = 0;
	let ticketContent: string =
		'Части речи в русском языке. История и современность. Знаменательные и служебные части речи.';
	let secondTicketNumber: number = 1;
	let secondTicketIndex: number = 0;
	let secondTicketContent: string = '';

	let listOfIndexes: number[] = [
		0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 
        26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 
        50, 51, 52, 53, 54, 55, 56, 57, 58
	];
    let listOfTickets: Ticket[] = [];
	let ShowList: boolean = false;

	async function getRandTicket() {
		ShowList = false;
		secondTicketNumber = 1;
		secondTicketIndex = 0;
		secondTicketContent = '';

		ticketIndex = Math.floor(Math.random() * (58 - 0) + 0);
		ticketNumber = Tickets[ticketIndex].number;
		ticketContent = Tickets[ticketIndex].text;
	}

	async function setNewTicket() {
		ShowList = false;
		secondTicketNumber = 1;
		secondTicketIndex = 0;
		secondTicketContent = '';

		for (let i: number = 0; i < 59; i++) {
			if (ticketNumber === Tickets[i].number) {
				ticketIndex = i;
			}
		}
		if (ticketNumber === 45) {
			ticketIndex = 42;
			ticketNumber = 43;
		}

		ticketNumber = Tickets[ticketIndex].number;
		ticketContent = Tickets[ticketIndex].text;
	}

	async function getTwoTickets() {
		ShowList = false;
		ticketIndex = Math.floor(Math.random() * (24 - 0) + 0);
		ticketNumber = Tickets[ticketIndex].number;
		ticketContent = Tickets[ticketIndex].text;

		secondTicketIndex = Math.floor(Math.random() * (58 - 25) + 25);
		secondTicketNumber = Tickets[secondTicketIndex].number;
		secondTicketContent = Tickets[secondTicketIndex].text;
	}

	function shuffle(array: number[]) {
		let currentIndex: number = array.length,
			randomIndex;

		// While there remain elements to shuffle.
		while (currentIndex != 0) {
			// Pick a remaining element.
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex--;

			// And swap it with the current element.
			[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
		}

		return array;
	}

	async function getRandomList() {
        listOfTickets = [];
		ShowList = false;
        shuffle(listOfIndexes);
        listOfIndexes.forEach(indx => {
            listOfTickets.push(Tickets[indx]);
        });
		ShowList = true;
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
			on:click|preventDefault={getRandTicket}
			style="border-radius: 5px; background-color:greenyellow; height: 25px;"
		>
			Get random ticket
		</button>
		<input type="number" id="ticket-number" bind:value={ticketNumber} min="1" max="60" />
		<button
			id="list-tickets"
			on:click|preventDefault={setNewTicket}
			style="border-radius: 5px; background-color:greenyellow; height: 25px;"
		>
			Set ticket number
		</button>
		<button
			id="two-tickets"
			on:click|preventDefault={getTwoTickets}
			style="border-radius: 5px; background-color:greenyellow; height: 25px;"
		>
			Get two tickets
		</button>

		<button
			id="random-list"
			on:click|preventDefault={getRandomList}
			style="border-radius: 5px; background-color:greenyellow; height: 25px;"
		>
			Get list of random tickets
		</button>
		<br />
	</div>

	{#if ShowList === false}
	<h2 style="margin-left: 25%;"><b>Ticket Number:</b> {ticketNumber}</h2>
	<h4>{ticketContent}</h4>
    {/if}
	{#if secondTicketContent !== ''}
		<h2 style="margin-left: 25%;"><b>Second Ticket Number:</b> {secondTicketNumber}</h2>
		<h4>{secondTicketContent}</h4>
	{/if}

	{#if ShowList === true}
		{#each listOfTickets as tick}
            <h2 style="margin-left: 25%;"><b>Ticket Number:</b> {tick.number}</h2>
			<h4>{tick.text}</h4>
		{/each}
	{/if}
</div>
