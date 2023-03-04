interface comitJSONType {
    alt: string;
    day: string;
    img: string;
    link: string;
    month: string;
    news: string;
    num: string;
    safe_title: string;
    title: string;
    transcript: string;
    year :string;
}

const getComicBtn = document.getElementById('comic-btn') as HTMLButtonElement;
getComicBtn.addEventListener('click', getComic);

window.addEventListener("load", getComic);

const comic = document.getElementById('comic') as HTMLImageElement;
const comicTitle = document.getElementById('comic-title') as HTMLTitleElement;

async function getComic() {
    const comicNumberReq : Response = await fetch("https://fwd.innopolis.app/api/hw2?email=e.shalagin@innopolis.university");
    const comicNumber : number = await comicNumberReq.json();

    const comicRequest : string = "https://getxkcd.vercel.app/api/comic?num=" + comicNumber.toString();
    const comicResponse : Response = await fetch(comicRequest);
    const comicJSON : comitJSONType = await comicResponse.json();

    let comicDate : Date = new Date(Date.UTC(+comicJSON.year, +comicJSON.month - 1, +comicJSON.day));
    comicTitle.innerText = "Comic name: " + comicJSON.title + "\n Upload date: " + comicDate.toLocaleDateString("en-GB")

    comic.src = comicJSON.img
    comic.title = comicJSON.safe_title
    comic.alt = comicJSON.alt
    comic.style.marginLeft = "0"
}