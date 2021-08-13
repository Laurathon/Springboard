const form = document.querySelector("#add-friend");
const input = document.querySelector("#first-name");
const friendList = document.querySelector("#friend-list");

friendList.addEventListener("click", function (e) {
  if (e.target.tagName === "BUTTON") {
    e.target.parentElement.remove();
  } else if (e.target.tagName === "LI") {
    e.target.classList.add("best-friend");
    const heart = document.createElement("span");
    heart.innerHTML = "&hearts;";
    e.target.prepend(heart);
  }
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(input.value);
  const newFriend = document.createElement("li");
  const removeBtn = document.createElement("button");
  removeBtn.innerText = "Remove";

  newFriend.innerText = input.value;
  newFriend.appendChild(removeBtn);
  friendList.appendChild(newFriend);
  input.value = " ";
  friendList;
});
