const submit = document.querySelector("#submit");
const memes = document.querySelector("#memes");
submit.addEventListener("click", function(e) {
    console.log(e);
    e.preventDefault();

    let memeDiv = document.createElement("div");
    memeDiv.classList.add("memeDiv");
    memes.appendChild(memeDiv);

    let meme = document.createElement("img");
    meme.src = `${e.target.parentElement[0].value}`;
    meme.classList.add("meme");
    memeDiv.appendChild(meme);

    let topText = document.createElement("div");
    topText.innerText = e.target.parentElement[1].value;
    topText.classList.add("topText");
    topText.style.color = e.target.parentElement[3].value;
    memeDiv.appendChild(topText);

    let bottomText = document.createElement("div");
    bottomText.innerText = e.target.parentElement[2].value;
    bottomText.style.color = e.target.parentElement[3].value;
    bottomText.classList.add("bottomText");
    memeDiv.appendChild(bottomText);

    let deleteMeme = document.createElement('a');
    let deleteButton = document.createElement('img');
    deleteButton.src = "https://image.flaticon.com/icons/svg/261/261935.svg";
    deleteButton.addEventListener("click", deleteDiv);
    deleteMeme.appendChild(deleteButton);
    memeDiv.appendChild(deleteMeme);

    e.target.parentElement[0].value = "";
    e.target.parentElement[1].value = "";
    e.target.parentElement[2].value = "";
    e.target.parentElement[3].value = "";
});

function deleteDiv(event) {
    event.target.parentElement.parentElement.remove();
}