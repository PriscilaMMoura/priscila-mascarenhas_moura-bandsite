const commentsArr = [
  {
    name: "Miles Acosta",
    timestamp: "12/20/2020",
    comment:
      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
  {
    name: "Emilie Beach",
    timestamp: "01/09/2021",
    comment:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },
  {
    name: "Connor Walton",
    timestamp: "02/17/2021",
    comment:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },
];

/*
 * append array of comments to the page
 */

const renderTask = (commentObj, tasksListContainer) => {
  const comments = document.createElement("div");
  comments.classList.add("comments");
  tasksListContainer.appendChild(comments);

  const commentsAvatar = document.createElement("div");
  commentsAvatar.classList.add("comments__avatar-container");
  comments.appendChild(commentsAvatar);

  const commentsTextBlock = document.createElement("div");
  commentsTextBlock.classList.add("comments__text-container");
  comments.appendChild(commentsTextBlock);

  const commentsNameDateBlock = document.createElement("div");
  commentsNameDateBlock.classList.add("comments__name-date-container");
  commentsTextBlock.appendChild(commentsNameDateBlock);

  const commentsName = document.createElement("span");
  commentsName.classList.add("comments__copy-body-text");
  commentsName.classList.add("comments__copy-body-text--user-name");
  commentsName.innerText = commentObj.name;
  commentsNameDateBlock.appendChild(commentsName);

  const commentsDate = document.createElement("span");
  commentsDate.classList.add("comments__copy-body-text");
  commentsDate.classList.add("comments__copy-body-text--user-date");
  commentsDate.innerText = commentObj.timestamp;
  commentsNameDateBlock.appendChild(commentsDate);

  const commentsContent = document.createElement("span");
  commentsContent.classList.add("comments__copy-body-text");
  commentsContent.innerText = commentObj.comment;
  commentsTextBlock.appendChild(commentsContent);
};

/**
 * Submit comment event.
 */
const commentsForm = document.getElementById("comments-form");
commentsForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const inputBoxName = document.getElementById("name");
  const inputBoxComments = document.getElementById("userComments");

  if (inputBoxName.value === "" || inputBoxComments.value === "") {
    alert("error");
    return;
  }

  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const currentDate = `${month}/${day}/${year}`;
  const userInput = {
    name: event.target.name.value,
    timestamp: currentDate,
    comment: event.target.userComments.value,
  };

  addNewComment(userInput);
  inputBoxName.value = "";
  inputBoxComments.value = "";
});

/*
 * pushes new comment to existing array.
 */
function addNewComment(userInput) {
  commentsArr.push(userInput);
  appendCommentObj();
}

const appendCommentObj = () => {
  // get the tasks container using querySelector
  const commentsContainer = document.querySelector(".comments-container");
  commentsContainer.innerHTML = "";
  for (let i = commentsArr.length - 1; i >= 0; i--) {
    renderTask(commentsArr[i], commentsContainer);
  }
};

appendCommentObj();
