//gets data from api
const showsDataURL =
  "https://project-1-api.herokuapp.com/showdates?api_key=a495a5fa-eb57-46a9-9925-55ba2b0508e3";
const getShowsData = () => {
  axios
    .get(showsDataURL)
    .then((response) => {
      appendShowsData(response.data);
      getEventListener();
    })
    .catch((error) => {
      console.log(error);
    });
};

//renders api data to the browser sorted by date.
const renderTask = (taskObj, showsContainer) => {
  //Parent detail
  const showsDetails = document.createElement("div");
  showsDetails.classList.add("shows__details");
  showsContainer.appendChild(showsDetails);

  //child date
  const dateBlock = document.createElement("div");
  dateBlock.classList.add("shows__dates");
  showsDetails.appendChild(dateBlock);

  const dateHeader = document.createElement("span");
  dateHeader.classList.add("shows__copy-body-text");
  dateHeader.classList.add("shows__copy-body-text--header-small");
  dateHeader.innerText = "DATE";
  dateBlock.appendChild(dateHeader);

  const dateText = document.createElement("span");
  dateText.classList.add("shows__copy-body-text");
  dateText.classList.add("shows__copy-body-text--date");
  dateText.innerText = getDate(new Date(taskObj.date));
  dateBlock.appendChild(dateText);

  //child venue
  const venueBlock = document.createElement("div");
  venueBlock.classList.add("shows__venues");
  showsDetails.appendChild(venueBlock);

  const venueHeader = document.createElement("span");
  venueHeader.classList.add("shows__copy-body-text");
  venueHeader.classList.add("shows__copy-body-text--header-small");
  venueHeader.innerText = "VENUE";
  venueBlock.appendChild(venueHeader);

  const venueText = document.createElement("span");
  venueText.classList.add("shows__copy-body-text");
  venueText.innerText = taskObj.place;
  venueBlock.appendChild(venueText);

  //child locations
  const locationBlock = document.createElement("div");
  locationBlock.classList.add("shows__locations");
  showsDetails.appendChild(locationBlock);

  const locationHeader = document.createElement("span");
  locationHeader.classList.add("shows__copy-body-text");
  locationHeader.classList.add("shows__copy-body-text--header-small");
  locationHeader.innerText = "LOCATIONS";
  locationBlock.appendChild(locationHeader);

  const locationText = document.createElement("span");
  locationText.classList.add("shows__copy-body-text");
  locationText.innerText = taskObj.location;
  locationBlock.appendChild(locationText);

  //child button
  const showsButton = document.createElement("button");
  showsButton.classList.add("shows__button");
  showsButton.setAttribute("type", "submit");
  showsButton.innerText = "BUY TICKETS";
  showsDetails.appendChild(showsButton);
};

//renders section header for all screen sizes and subheaders for screen medium and large sizes.
const showsSection = document.querySelector(".shows");

const sectionHeader = document.createElement("h4");
sectionHeader.classList.add("shows__section-header-text");
sectionHeader.classList.add("shows__section-header-text--mid-small");
sectionHeader.setAttribute("id", "shows");
sectionHeader.innerText = "Shows";
showsSection.appendChild(sectionHeader);

const headerContainer = document.createElement("div");
headerContainer.classList.add("shows__header-container-mid");
showsSection.appendChild(headerContainer);

const sectionHeaderLarge = document.createElement("h4");
sectionHeaderLarge.classList.add("shows__section-header-text");
sectionHeaderLarge.classList.add("shows__section-header-text--large");
sectionHeaderLarge.setAttribute("id", "shows");
sectionHeaderLarge.innerText = "Shows";
headerContainer.appendChild(sectionHeaderLarge);

const headerRowRight = document.createElement("div");
headerRowRight.classList.add("shows__header-row-right");
headerContainer.appendChild(headerRowRight);

const dateHeader = document.createElement("span");
dateHeader.classList.add("shows__copy-body-text");
dateHeader.classList.add("shows__copy-body-text--header-mid");
dateHeader.innerText = "DATE";
headerRowRight.appendChild(dateHeader);

const venueHeader = document.createElement("span");
venueHeader.classList.add("shows__copy-body-text");
venueHeader.classList.add("shows__copy-body-text--venue");
venueHeader.classList.add("shows__copy-body-text--header-mid");
venueHeader.innerText = "VENUE";
headerRowRight.appendChild(venueHeader);

const locationHeader = document.createElement("span");
locationHeader.classList.add("shows__copy-body-text");
locationHeader.classList.add("shows__copy-body-text--location");
locationHeader.classList.add("shows__copy-body-text--header-mid");
locationHeader.innerText = "LOCATIONS";
headerRowRight.appendChild(locationHeader);

const ghostHeader = document.createElement("span");
ghostHeader.classList.add("shows__copy-body-text");
ghostHeader.classList.add("shows__copy-body-text--header-mid");
ghostHeader.innerText = "";
headerRowRight.appendChild(ghostHeader);

const showsContainer = document.createElement("div");
showsContainer.classList.add("shows__container");
showsSection.appendChild(showsContainer);

//loops through the api and sorts its elements by date to pass data as arguement to be rendered on the browser.
const appendShowsData = (apiShowsArr) => {
  const showsDetails = document.querySelector(".shows__container");
  //sorts data so the concert with the nearest date can be displayed on top of the list.
  const sortedByDate = apiShowsArr.sort((a, b) => a.date - b.date);
  for (let i = 0; i < sortedByDate.length; i++) {
    renderTask(sortedByDate[i], showsDetails);
  }
};
//calls function to call the api.
getShowsData();

//event listener so the rows can change background color when the user clicks on them.
const getEventListener = () => {
  const allShowsDetails = document.querySelectorAll(".shows__details");

  for (let i = 0; i < allShowsDetails.length; i++) {
    const eachShowsDetails = allShowsDetails[i];
    eachShowsDetails.addEventListener("click", (event) => {
      allShowsDetails.forEach((eachShowsDetails) => {
        eachShowsDetails.classList.remove("shows__details--selected");
        eachShowsDetails.classList.remove("nohover");
      });

      eachShowsDetails.classList.add("shows__details--selected");
      eachShowsDetails.classList.add("nohover");
    });
  }
};

//function to format the date data from them api.
function getDate(date) {
  const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    day: "2-digit",
  };
  return date.toLocaleDateString("en-ca", options).replace(/,/g, "");
}
