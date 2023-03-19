<script lang="ts">
    import type { comitJSONType } from "./Comic";

    let comicTitle: string = "";
    let comicUploadDate: string = "";
    let comicSrc: string =
        "https://raw.githubusercontent.com/Wild-Queue/portfolio/main/pictures/downloading.gif";
    let comicImgTitle: string = "Loading...";
    let comicAlt: string = "Downloading the comic...";
    let comicStyle: string = "margin-left: 15%;";

    async function getComic() {
		comicSrc = "https://raw.githubusercontent.com/Wild-Queue/portfolio/main/pictures/downloading.gif";

        const comicNumberReq: Response = await fetch(
            "https://fwd.innopolis.app/api/hw2?email=e.shalagin@innopolis.university"
        );
        const comicNumber: number = await comicNumberReq.json();

        const comicRequest: string =
            "https://getxkcd.vercel.app/api/comic?num=" +
            comicNumber.toString();
        const comicResponse: Response = await fetch(comicRequest);
        const comicJSON: comitJSONType = await comicResponse.json();
        console.log(comicJSON);

        let comicDate: Date = new Date(
            Date.UTC(+comicJSON.year, +comicJSON.month - 1, +comicJSON.day)
        );
        comicTitle = comicJSON.title;
        comicUploadDate = comicDate.toLocaleDateString("en-GB");

        comicSrc = comicJSON.img;
        comicImgTitle = comicJSON.safe_title;
        comicAlt = comicJSON.alt;
        comicStyle = "margin-left: 0;";
    }

    getComic();
</script>

<svelte:head>
	<title>Comic</title>
	<meta name="description" content="Comic" />
</svelte:head>

<div
    style="width: max-content; min-width: 300px; margin: auto; margin-top: 2%; background-color: whitesmoke; padding: 1%;"
>
    <div>
        <h2 style="margin-left: 25%;"><b>Comic name:</b> {comicTitle} <br /><b>Upload date:</b> {comicUploadDate}</h2>
        <img
            style={comicStyle}
            title={comicImgTitle}
            src={comicSrc}
            alt={comicAlt}
        />
    </div>
    <div style="margin-top: 1%;">
        <button
            id="comic-btn"
            on:click|preventDefault={getComic}
            style="border-radius: 5px; background-color:greenyellow; height: 25px;">
            Get new comic
        </button>
    </div>
</div>