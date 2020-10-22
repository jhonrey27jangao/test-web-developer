const itemToBeRendered = ["man", "wizard", "beast"];

const renderImages = () => {
  itemToBeRendered.map((item) => {
    const container = document.getElementById(item);

    const mainImg = document.createElement("img");
    mainImg.src = images[item].path;
    mainImg.alt = images[item].heading;

    const ttlElement = document.createElement("h2");
    const mainTtl = document.createTextNode(images[item].heading);
    ttlElement.appendChild(mainTtl);

    const descElement = document.createElement("p");
    const mainDesc = document.createTextNode(images[item].description);
    descElement.appendChild(mainDesc);

    container.appendChild(mainImg);
    container.appendChild(ttlElement);
    container.appendChild(descElement);
  });
};

const toggleNav = () => {
  const menuEl = document.getElementById("navMenu");
  menuEl.className === "navMenu"
    ? (menuEl.className = "navMenuActive")
    : (menuEl.className = "navMenu");

  const navEl = document.getElementById("mainNav");
  navEl.className === "mainNav dlBlock"
    ? (navEl.className = "mainNav")
    : (navEl.className = "mainNav dlBlock");
};
