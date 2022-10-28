/*
 ** CALLS THE API
 */
const commentsURL =
  "https://project-1-api.herokuapp.com/comments?api_key=a495a5fa-eb57-46a9-9925-55ba2b0508e3";
const getComments = (comm) => {
  axios
    .get(commentsURL, comm)
    .then((response) => {
      // console.log(response.data);
      // console.log(comm);
      appendComment(response.data);
      // addNewComment(comm);
    })
    .catch((error) => {
      console.log(error);
    });
};

const postComments = (userInput) => {
  axios
    .post(commentsURL, userInput)
    .then((responsePost) => {
      // console.log(responsePost.data);
      getComments(responsePost.data);
      // return responsePost.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

// function addNewComment(apiCommentsObj, newComment) {
//   const newArr = apiCommentsObj.push(newComment);
//   appendComment(newArr);
// }

/*
 * append array of comments to the page
 */

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

/**
 * Submit comment event.
 */
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

  postComments(userInput);

  inputBoxName.value = "";
  inputBoxComments.value = "";
});

function getCurrentDate(date) {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${month}/${day}/${year}`;
}

// /*
//  * posts new comment to api.
//  */
// function addNewComment(userInput) {
//   //post to api
//   axios
//     .post(commentsURL, userInput, {
//       headers: { "Content-Type": "application/json" },
//     })
//     .then((responsePost) => {
//       console.log(responsePost.data);
//       // return response.data;
//     });
//   // .catch((error) => {
//   //   console.log(error);
//   // });

//   // getData();
// }

//append array of comments from api to the comments container
const appendComment = (apiCommentsObj) => {
  // console.log(apiCommentsObj);

  // get the tasks container using querySelector
  const commentsContainer = document.querySelector(".comments-container");
  commentsContainer.innerHTML = "";
  for (let i = 0; i < apiCommentsObj.length; i++) {
    renderTask(apiCommentsObj[i], commentsContainer);
  }
};

getComments();
