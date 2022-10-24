const shows = [
  {
    date: "Mon Sept 06 2021",
    vanue: "Ronald Lane",
    location: "San Francisco, CA",
  },
  {
    date: "Tue Sept 21 2021",
    vanue: "Pier 3 East",
    location: "San Francisco, CA",
  },
  {
    date: "Fri Oct 15 2021",
    vanue: "View Lounge",
    location: "San Francisco, CA",
  },
  {
    date: "Sat Nov 06 2021",
    vanue: "Hyatt Agency",
    location: "San Francisco, CA",
  },
  {
    date: "Fri Nov 26 2021",
    vanue: "Moscow Center",
    location: "San Francisco, CA",
  },
  {
    date: "Wed Dec 15 2021",
    vanue: "Press Club",
    location: "San Francisco, CA",
  },
];

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
  dateText.innerText = taskObj.date;
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
  venueText.innerText = taskObj.vanue;
  venueBlock.appendChild(venueText);

  //child
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

const render = (showsDetails) => {
  for (let i = 0; i < shows.length; i++) {
    renderTask(shows[i], showsDetails);
  }
};

render(showsContainer);

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
