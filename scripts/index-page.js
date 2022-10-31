//gets data from api
const commentsURL =
  "https://project-1-api.herokuapp.com/comments?api_key=a495a5fa-eb57-46a9-9925-55ba2b0508e3";
const getComments = () => {
  axios
    .get(commentsURL)
    .then((response) => {
      appendComment(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

//sends data to api
const postComments = (userInput) => {
  axios
    .post(commentsURL, userInput)
    .then((responsePost) => {
      getComments();
    })
    .catch((error) => {
      console.log(error);
    });
};

//renders api data to the browser.
const renderTask = (commentObj, tasksListContainer) => {
  const comments = document.createElement("div");
  comments.classList.add("comments");
  tasksListContainer.appendChild(comments);

  const commentsAvatar = document.createElement("div");
  commentsAvatar.classList.add("comments__avatar-container");
  commentsAvatar.classList.add("comments__avatar");
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
  commentsDate.classList.add("comments__copy-body-text--date");
  commentsDate.innerText = getCurrentDate(new Date(commentObj.timestamp));
  commentsNameDateBlock.appendChild(commentsDate);

  const commentsContent = document.createElement("span");
  commentsContent.classList.add("comments__copy-body-text");
  commentsContent.innerText = commentObj.comment;
  commentsTextBlock.appendChild(commentsContent);
};

// event listener to submit new comment made by the user
const commentsForm = document.getElementById("comments-form");
commentsForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const inputBoxName = document.getElementById("name");
  const inputBoxComments = document.getElementById("userComments");

  if (inputBoxName.value === "" && inputBoxComments.value === "") {
    inputBoxComments.classList.add("form__field-box--error");
    inputBoxName.classList.add("form__field-box--error");
    return;
  } else {
    inputBoxComments.classList.remove("form__field-box--error");
    inputBoxName.classList.remove("form__field-box--error");
  }

  if (inputBoxName.value === "") {
    inputBoxName.classList.add("form__field-box--error");
    return;
  } else {
    inputBoxName.classList.remove("form__field-box--error");
  }

  if (inputBoxComments.value === "") {
    inputBoxComments.classList.add("form__field-box--error");
    return;
  } else {
    inputBoxComments.classList.remove("form__field-box--error");
  }

  const userInput = {
    name: event.target.name.value,
    comment: event.target.userComments.value,
  };

  //calls function to post comment to api
  postComments(userInput);

  inputBoxName.value = "";
  inputBoxComments.value = "";
});

//function to format the date data from them api.
function getCurrentDate(date) {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${month}/${day}/${year}`;
}

//append array of comments from api to the comments container
const appendComment = (apiCommentsObj) => {
  const commentsContainer = document.querySelector(".comments-container");
  commentsContainer.innerHTML = "";
  //sorts data so the newest comment can be displayed on top of the list.
  const sortedByDate = apiCommentsObj.sort((a, b) => b.timestamp - a.timestamp);
  for (let i = 0; i < apiCommentsObj.length; i++) {
    renderTask(sortedByDate[i], commentsContainer);
  }
};

//calls function to call the api.
getComments();
