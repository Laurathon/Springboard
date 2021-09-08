const $searchString = $("#search");
const $giphyArea = $("#giphyArea");

$("form").on("submit", async function (e) {
  e.preventDefault();
  const key1 = "uQbS6CcoDnUJx2BmsWxQ00dIabzI898L";
  const search = $searchString.val();
  const res = await axios.get(
    `https://api.giphy.com/v1/gifs/search?api_key=` + key1 + `&q=` + search
  );
  placeGif(res.data);
});

function placeGif(data) {
  let random = Math.floor(Math.random() * 50);
  let newgif = data.data[random].images.original.url;
  let newArea = $("<img>", { src: newgif, class: "img" });
  $giphyArea.addClass("flexbox");
  newArea.append(newgif);
  $giphyArea.append(newArea);
}
$("#delete").on("click", function (e) {
  e.preventDefault();
  $giphyArea.empty();
});

$(document).ready(function () {
  alert("Let's get this party started!");
});
