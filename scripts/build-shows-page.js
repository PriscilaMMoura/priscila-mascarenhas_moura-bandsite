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

const renderTask = (taskObj, tasksListContainer) => {
  const showsDetails = document.createElement("div");
  showsDetails.classList.add("shows__details");
  tasksListContainer.appendChild(showsDetails);

  const dateBlock = document.createElement("div");
  dateBlock.classList.add("shows__dates");
  showsDetails.appendChild(dateBlock);

  const dateHeader = document.createElement("span");
  dateHeader.classList.add("shows__copy-body-text");
  dateHeader.classList.add("shows__copy-body-text--header");
  dateHeader.innerText = "DATE";
  dateBlock.appendChild(dateHeader);

  const dateText = document.createElement("span");
  dateText.classList.add("shows__copy-body-text");
  dateText.classList.add("shows__copy-body-text--date");
  dateText.innerText = taskObj.date;
  dateBlock.appendChild(dateText);

  const showsButton = document.createElement("a");
  showsButton.classList.add("shows__button");
  showsButton.innerText = "BUY TICKETS";
  dateBlock.appendChild(showsButton);
  const venueBlock = document.createElement("div");
  venueBlock.classList.add("shows__venues");
  tasksListContainer.appendChild(venueBlock);

  const venueHeader = document.createElement("span");
  venueHeader.classList.add("shows__copy-body-text");
  venueHeader.classList.add("shows__copy-body-text--header");
  venueHeader.innerText = "VENUE";
  venueBlock.appendChild(venueHeader);

  const venueText = document.createElement("span");
  venueText.classList.add("shows__copy-body-text");
  venueText.innerText = taskObj.vanue;
  venueBlock.appendChild(venueText);

  venueBlock.appendChild(showsButton);

  const locationBlock = document.createElement("div");
  locationBlock.classList.add("shows__locations");
  tasksListContainer.appendChild(locationBlock);

  const locationHeader = document.createElement("span");
  locationHeader.classList.add("shows__copy-body-text");
  locationHeader.classList.add("shows__copy-body-text--header");
  locationHeader.innerText = "LOCATIONS";
  locationBlock.appendChild(locationHeader);

  const locationText = document.createElement("span");
  locationText.classList.add("shows__copy-body-text");
  locationText.innerText = taskObj.location;
  locationBlock.appendChild(locationText);

  locationBlock.appendChild(showsButton);
};

const target = document.querySelector(".shows");

const sectionHeader = document.createElement("h4");
sectionHeader.classList.add("shows__section-header-text");
sectionHeader.innerText = "Shows";
target.appendChild(sectionHeader);

const render = (showsDetails) => {
  for (let i = 0; i < shows.length; i++) {
    renderTask(shows[i], showsDetails);
  }
};

render(target);
