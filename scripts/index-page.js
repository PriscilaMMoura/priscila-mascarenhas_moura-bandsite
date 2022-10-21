/*
 * Html layout
 */
//Parent - Conversation Blocl
const convBlock = document.querySelector(".conversation");

//Child
const convSecHeader = document.createElement("h4");
convSecHeader.classList.add("conversation__section-header-text");
convSecHeader.innerText = "Join the Conversation";
convBlock.appendChild(convSecHeader);

//Child
const formBlock = document.createElement("div");
formBlock.classList.add("form");
formBlock.setAttribute("id", "comments-form");
convBlock.appendChild(formBlock);

//Grandchild
const formAvatarCont = document.createElement("div");
formAvatarCont.classList.add("form__avatar-container");
formBlock.appendChild(formAvatarCont);

//Great grandchild
const formAvatar = document.createElement("img");
formAvatar.classList.add("form__avatar");
formAvatar.setAttribute("src", "./assets/avatar/Gizmo_29.jpeg");
formAvatar.setAttribute("alt", "user avatar");
formAvatarCont.appendChild(formAvatar);

//Grandchild - Form Fields Block
const formFieldsBlock = document.createElement("form");
formFieldsBlock.classList.add("form__fields-container");
formBlock.appendChild(formFieldsBlock);

const formLabelName = document.createElement("label");
formLabelName.classList.add("form__label-text");
formLabelName.setAttribute("for", "name");
formLabelName.innerText = "NAME";
formFieldsBlock.appendChild(formLabelName);

const formInputName = document.createElement("input");
formInputName.classList.add("form__field-box");
formInputName.classList.add("form__field-box--name");
formInputName.setAttribute("id", "name");
formInputName.setAttribute("type", "text");
formInputName.setAttribute("name", "name");
formInputName.setAttribute("placeholder", "Enter your name");
formFieldsBlock.appendChild(formInputName);

const formLabelCom = document.createElement("label");
formLabelCom.classList.add("form__label-text");
formLabelCom.setAttribute("for", "user-comments");
formLabelCom.innerText = "COMMENT";
formFieldsBlock.appendChild(formLabelCom);

const formTextAreaCom = document.createElement("textarea");
formTextAreaCom.classList.add("form__field-box");
formTextAreaCom.setAttribute("name", "userComments");
formTextAreaCom.setAttribute("id", "userComments");
formTextAreaCom.setAttribute("cols", "30");
formTextAreaCom.setAttribute("rows", "10");
formTextAreaCom.setAttribute("placeholder", "Add a new comment");
formFieldsBlock.appendChild(formTextAreaCom);

const formButton = document.createElement("button");
formButton.classList.add("form__button");
formButton.innerText = "COMMENT";
formFieldsBlock.appendChild(formButton);

//Child
const commentsBlock = document.createElement("div");
commentsBlock.classList.add("comments-container");
convBlock.appendChild(commentsBlock);

const commentsArr = [
  {
    name: "Miles Acosta",
    timestamps: "12/20/2020",
    comment:
      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
  {
    name: "Emilie Beach",
    timestamps: "01/09/2021",
    comment:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },
  {
    name: "Connor Walton",
    timestamps: "02/17/2021",
    comment:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },
];

console.log(commentsArr);

/**
 * Submit comment event.
 */
const commentsForm = document.getElementById("comments-form");
commentsForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const currentDate = `${month}/${day}/${year}`;

  const userInput = {
    name: event.target.name.value,
    timestamps: currentDate,
    comment: event.target.userComments.value,
  };

  addNewComment(userInput);
});

/*
 * pushes new comment to existing array.
 */
function addNewComment(userInput) {
  commentsArr.push(userInput);
  console.log(userInput);
}
console.log(commentsArr);
