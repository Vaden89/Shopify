"use strict";
let isChecked = false;
let isMenuOpen = true;
let isNotificationBarOpen = true;

let completionrate = 0;
let progressrate = 0;

const makeReadable = function (id, value) {
  document.getElementById(id).setAttribute("aria-hidden", value);
};

const makeUnTabable = function (linkId, btnId) {
  document.getElementById(linkId).tabIndex = -1;
  document.getElementById(btnId).tabIndex = -1;
};

const makeTabable = function (linkId, btnId) {
  document.getElementById(linkId).tabIndex = 0;
  document.getElementById(btnId).tabIndex = 0;
};

const increaseProgressfn = function () {
  completionrate = completionrate + 1;
  progressrate = progressrate + 20;
  document.querySelector(
    "#progress-text"
  ).innerHTML = `${completionrate} / 5 completed`;
  document.querySelector("#progress-bar").style.width = `${progressrate}%`;
};

const reduceProgressfn = function () {
  completionrate = completionrate - 1;
  progressrate = progressrate - 20;
  document.querySelector(
    "#progress-text"
  ).innerHTML = `${completionrate} / 5 completed`;
  document.querySelector("#progress-bar").style.width = `${progressrate}%`;
};

const hideStyle = function (whatrice) {
  document.querySelector(`#${whatrice}`).style.height = "40px";
  document.querySelector(`#${whatrice}`).style.overflow = "hidden";
  document.querySelector(`#${whatrice}`).style.background = "#fff";
  document.querySelector(`#${whatrice} img`).style.display = "none";
};
const unhideStyle = function (whatrice) {
  document.querySelector(`#${whatrice}`).style.height = "141px";
  document.querySelector(`#${whatrice}`).style.overflow = "none";
  document.querySelector(`#${whatrice}`).style.background = "#f3f3f3";
  document.querySelector(`#${whatrice} img`).style.display = "flex";
  if (whatrice === "rice5")
    document.querySelector("#rice5").style.height = "170px";
};
const callHide = function (id, id1, id2, id3, id4) {
  unhideStyle(id);

  hideStyle(id1);
  hideStyle(id2);
  hideStyle(id3);
  hideStyle(id4);
  if (id === "rice2") {
    document.getElementById("mobile-link").tabIndex = -1;
    tabfn("2", "3", "4", "5");
    callRead("2", "1", "3", "4", "5");
  } else if (id === "rice3") {
    document.getElementById("mobile-link").tabIndex = -1;
    tabfn("3", "2", "4", "5");
    callRead("3", "1", "2", "4", "5");
  } else if (id === "rice4") {
    document.getElementById("mobile-link").tabIndex = -1;
    tabfn("4", "2", "3", "5");
    callRead("4", "1", "3", "2", "5");
  } else if (id === "rice5") {
    document.getElementById("mobile-link").tabIndex = -1;
    tabfn("5", "2", "4", "3");
    callRead("5", "1", "3", "4", "2");
  } else {
    document.getElementById("mobile-link").tabIndex = 0;
    makeTabable(`desktop-link`, `customize-btn1`);
    makeUnTabable(`link2`, `customize-btn2`);
    makeUnTabable(`link3`, `customize-btn3`);
    makeUnTabable(`link4`, `customize-btn4`);
    makeUnTabable(`link5`, `customize-btn5`);
    callRead("1", "2", "3", "4", "5");
  }
};

const toogleMenu = function () {
  if (isMenuOpen) {
    isNotificationBarOpen = false;
    toogleNotificationBar();
    document.querySelector(`#menu`).style.display = "flex";
    document.querySelector(`#active-menu`).style.background = "#656266";
    isMenuOpen = false;
  } else {
    document.querySelector(`#menu`).style.display = "none";
    document.querySelector(`#active-menu`).style.background = "#303030";
    isMenuOpen = true;
  }
};

document.querySelector("#menu").addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    if (isMenuOpen === false) {
      toogleMenu();
    } else {
      console.log("Not Open");
    }
  }
});

document
  .querySelector("#notification-bar")
  .addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      if (isNotificationBarOpen === false) {
        toogleNotificationBar();
      } else {
        console.log("Not Open");
      }
    }
  });

const toogleNotificationBar = function () {
  if (isNotificationBarOpen) {
    isMenuOpen = false;
    toogleMenu();
    document.querySelector(`#notification-bar`).style.display = "flex";
    document.querySelector(`#active-notification-bar`).style.background =
      "#656266";
    isNotificationBarOpen = false;
  } else {
    document.querySelector(`#notification-bar`).style.display = "none";
    document.querySelector(`#active-notification-bar`).style.background =
      "#303030";
    isNotificationBarOpen = true;
  }
};

document.querySelector("#drop-down").addEventListener("click", function () {
  document.querySelector("#bottom").classList.toggle("disabled");
});

document
  .querySelector("#drop-down")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      document.querySelector("#bottom").classList.toggle("disabled");
    } else {
      return;
    }
  });

document.querySelector("#close").addEventListener("click", function () {
  document.querySelector("#plan-card").remove();
  document.querySelector("#setup-guide").classList.add("extra-margin");
});

document.querySelector("#close").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    document.querySelector("#plan-card").remove();
    document.querySelector("#setup-guide").classList.add("extra-margin");
  } else {
    return;
  }
});

document.querySelector("#circle1").addEventListener("click", function (event) {
  event.stopPropagation();
});

document.querySelector("#circle2").addEventListener("click", function (event) {
  event.stopPropagation();
});
document.querySelector("#circle3").addEventListener("click", function (event) {
  event.stopPropagation();
});
document.querySelector("#circle4").addEventListener("click", function (event) {
  event.stopPropagation();
});
document.querySelector("#circle5").addEventListener("click", function (event) {
  event.stopPropagation();
});

const clicked1 = function (circleId) {
  increaseProgressfn();
  document.querySelector("#second-stage-circle1").style.display = "block";
  document.querySelector("#" + circleId).style.display = "none";
  setTimeout(() => {
    document.querySelector("#checkmark1").style.display = "block";
    document.querySelector("#second-stage-circle1").style.display = "none";
  }, 50);

  document.getElementById("mobile-link").tabIndex = -1;
  makeUnTabable(`desktop-link`, `customize-btn1`);
  makeTabable(`link2`, `customize-btn2`);
  makeUnTabable(`link3`, `customize-btn3`);
  makeUnTabable(`link4`, `customize-btn4`);
  makeUnTabable(`link5`, `customize-btn5`);
  callHide("rice2", "rice5", "rice1", "rice3", "rice4");

  callRead("2", "1", "3", "4", "5");
};

const clicked2 = function (circleId) {
  increaseProgressfn();
  document.querySelector("#second-stage-circle2").style.display = "block";
  document.querySelector("#" + circleId).style.display = "none";
  setTimeout(() => {
    document.querySelector("#checkmark2").style.display = "block";
    document.querySelector("#second-stage-circle2").style.display = "none";
  }, 50);

  document.getElementById("mobile-link").tabIndex = -1;
  tabfn("3", "2", "4", "5");
  callRead("3", "1", "2", "4", "5");
  callHide("rice3", "rice1", "rice2", "rice5", "rice4");
};

const uncheck1 = function () {
  reduceProgressfn();
  document.querySelector("#second-stage-circle1").style.display = "block";
  document.querySelector("#checkmark1").style.display = "none";
  setTimeout(() => {
    document.querySelector("#circle1").style.display = "block";
    document.querySelector("#second-stage-circle1").style.display = "none";
  }, 50);
};

const uncheck2 = function () {
  reduceProgressfn();
  document.querySelector("#second-stage-circle2").style.display = "block";
  document.querySelector("#checkmark2").style.display = "none";
  setTimeout(() => {
    document.querySelector("#circle2").style.display = "block";
    document.querySelector("#second-stage-circle2").style.display = "none";
  }, 50);
};

const clicked3 = function (circleId) {
  increaseProgressfn();

  document.querySelector("#second-stage-circle3").style.display = "block";
  document.querySelector("#" + circleId).style.display = "none";

  setTimeout(() => {
    document.querySelector("#checkmark3").style.display = "block";
    document.querySelector("#second-stage-circle3").style.display = "none";
  }, 50);

  document.getElementById("mobile-link").tabIndex = -1;
  tabfn("4", "2", "3", "5");
  callRead("4", "1", "3", "2", "5");
  callHide("rice4", "rice1", "rice2", "rice3", "rice5");
};

const uncheck3 = function () {
  reduceProgressfn();
  document.querySelector("#second-stage-circle3").style.display = "block";
  document.querySelector("#checkmark3").style.display = "none";
  setTimeout(() => {
    document.querySelector("#circle3").style.display = "block";
    document.querySelector("#second-stage-circle3").style.display = "none";
  }, 50);
};

const clicked4 = function (circleId) {
  increaseProgressfn();
  document.querySelector("#second-stage-circle4").style.display = "block";
  document.querySelector("#" + circleId).style.display = "none";
  setTimeout(() => {
    document.querySelector("#checkmark4").style.display = "block";
    document.querySelector("#second-stage-circle4").style.display = "none";
  }, 50);

  document.getElementById("mobile-link").tabIndex = -1;
  tabfn("5", "2", "4", "3");
  callRead("5", "1", "3", "4", "2");
  callHide("rice5", "rice1", "rice2", "rice3", "rice4");
};

const uncheck4 = function () {
  reduceProgressfn();
  document.querySelector("#second-stage-circle4").style.display = "block";
  document.querySelector("#checkmark4").style.display = "none";
  setTimeout(() => {
    document.querySelector("#circle4").style.display = "block";
    document.querySelector("#second-stage-circle4").style.display = "none";
  }, 50);
};

const clicked5 = function (circleId) {
  increaseProgressfn();
  document.querySelector("#second-stage-circle5").style.display = "block";
  document.querySelector("#" + circleId).style.display = "none";
  setTimeout(() => {
    document.querySelector("#checkmark5").style.display = "block";
    document.querySelector("#second-stage-circle5").style.display = "none";
  }, 50);
  document.getElementById("mobile-link").tabIndex = -1;
  tabfn("5", "2", "4", "3");
  callRead("5", "1", "3", "4", "2");
};

const uncheck5 = function () {
  reduceProgressfn();
  document.querySelector("#second-stage-circle5").style.display = "block";
  document.querySelector("#checkmark5").style.display = "none";
  setTimeout(() => {
    document.querySelector("#circle5").style.display = "block";
    document.querySelector("#second-stage-circle5").style.display = "none";
  }, 50);
};

const linked = function () {
  window.open(
    "https://accounts.shopify.com/lookup?rid=fce026b8-665d-477b-b780-5c8e64396f1a",
    "_blank"
  );
};

document.querySelectorAll(".help").forEach(function (element) {
  element.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      linked();
    } else {
      return -1;
    }
  });
});

document
  .querySelector("#circle1")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      increaseProgressfn();
      document.querySelector("#second-stage-circle1").style.display = "block";
      document.querySelector("#circle1").style.display = "none";
      setTimeout(() => {
        document.querySelector("#checkmark1").style.display = "block";
        document.querySelector("#second-stage-circle1").style.display = "none";
      }, 50);

      callRead("1", "2", "3", "4", "5");
    } else {
      return;
    }
  });
document
  .querySelector("#circle2")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      increaseProgressfn();
      document.querySelector("#second-stage-circle2").style.display = "block";
      document.querySelector("#circle2").style.display = "none";
      setTimeout(() => {
        document.querySelector("#checkmark2").style.display = "block";
        document.querySelector("#second-stage-circle2").style.display = "none";
      }, 50);
      callRead("2", "1", "3", "4", "5");
      makeUnTabable("#link2", "customize-btn2");
    } else {
      return;
    }
  });
document
  .querySelector("#circle3")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      increaseProgressfn();
      document.querySelector("#second-stage-circle3").style.display = "block";
      document.querySelector("#circle3").style.display = "none";
      setTimeout(() => {
        document.querySelector("#checkmark3").style.display = "block";
        document.querySelector("#second-stage-circle3").style.display = "none";
      }, 50);
      callRead("3", "1", "2", "4", "5");

      document.getElementById("link3").tabIndex = -1;
      document.getElementById("customize-btn3").tabIndex = -1;
    } else {
      return;
    }
  });
document
  .querySelector("#circle4")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      increaseProgressfn();
      document.querySelector("#second-stage-circle4").style.display = "block";
      document.querySelector("#circle4").style.display = "none";
      setTimeout(() => {
        document.querySelector("#checkmark4").style.display = "block";
        document.querySelector("#second-stage-circle4").style.display = "none";
      }, 50);
      callRead("4", "1", "3", "2", "5");
      document.getElementById("link4").tabIndex = -1;
      document.getElementById("customize-btn4").tabIndex = -1;
    } else {
      return;
    }
  });
document
  .querySelector("#circle5")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      increaseProgressfn();
      document.querySelector("#second-stage-circle5").style.display = "block";
      document.querySelector("#circle5").style.display = "none";
      setTimeout(() => {
        document.querySelector("#checkmark5").style.display = "block";
        document.querySelector("#second-stage-circle5").style.display = "none";
      }, 50);
      callRead("5", "1", "3", "4", "2");

      document.getElementById("link5").tabIndex = -1;
      document.getElementById("customize-btn5").tabIndex = -1;
    } else {
      return;
    }
  });

document.querySelector("#rice2").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    callHide("rice2", "rice1", "rice3", "rice4", "rice5");

    document.getElementById("mobile-link").tabIndex = -1;

    tabfn("2", "5", "3", "4");
    callRead("2", "1", "3", "4", "5");
  } else {
    return;
  }
});
document.querySelector("#rice1").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    callHide("rice1", "rice2", "rice3", "rice4", "rice5");

    document.getElementById("mobile-link").tabIndex = 0;
    makeTabable("desktop-link", "customize-btn1");
    makeUnTabable("link3", "customize-btn3");
    makeUnTabable("link4", "customize-btn4");
    makeUnTabable("link5", "customize-btn5");
    makeUnTabable("link2", "customize-btn2");

    callRead("1", "2", "3", "4", "5");
  } else {
    return;
  }
});

document.querySelector("#rice3").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    callHide("rice3", "rice2", "rice1", "rice4", "rice5");

    document.getElementById("mobile-link").tabIndex = -1;

    tabfn("3", "2", "5", "4");
    callRead("3", "1", "2", "4", "5");
  } else {
    return;
  }
});

document.querySelector("#rice4").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    callHide("rice4", "rice2", "rice3", "rice1", "rice5");

    document.getElementById("mobile-link").tabIndex = -1;

    tabfn("4", "2", "3", "5");
    callRead("4", "1", "3", "2", "5");
  } else {
    return;
  }
});

document.querySelector("#rice5").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    callHide("rice5", "rice2", "rice3", "rice4", "rice1");

    document.getElementById("mobile-link").tabIndex = -1;

    tabfn("5", "2", "3", "4");
    callRead("5", "1", "3", "4", "2");
  } else {
    return;
  }
});

document
  .querySelector("#checkmark1")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      checkmarkfn("1");
    } else {
      return;
    }
  });
document
  .querySelector("#checkmark2")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      checkmarkfn("2");
    } else {
      return;
    }
  });
document
  .querySelector("#checkmark3")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      checkmarkfn("3");
    } else {
      return;
    }
  });
document
  .querySelector("#checkmark4")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      checkmarkfn("4");
    } else {
      return;
    }
  });

document
  .querySelector("#checkmark5")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      checkmarkfn("5");
    } else {
      return;
    }
  });

const checkmarkfn = function (idNum) {
  reduceProgressfn();
  document.querySelector(`#second-stage-circle${idNum}`).style.display =
    "block";
  document.querySelector(`#checkmark${idNum}`).style.display = "none";
  setTimeout(() => {
    document.querySelector(`#circle${idNum}`).style.display = "block";
    document.querySelector(`#second-stage-circle${idNum}`).style.display =
      "none";
  }, 50);
};

const tabfn = function (id, id2, id3, id4) {
  makeTabable(`link${id}`, `customize-btn${id}`);
  makeUnTabable(`desktop-link`, `customize-btn1`);
  makeUnTabable(`link${id2}`, `customize-btn${id2}`);
  makeUnTabable(`link${id3}`, `customize-btn${id3}`);
  makeUnTabable(`link${id4}`, `customize-btn${id4}`);
};

const callRead = function (id, id1, id2, id3, id4) {
  makeReadable(`head-text${id}`, false);
  makeReadable(`head-text${id1}`, true);
  makeReadable(`head-text${id2}`, true);
  makeReadable(`head-text${id3}`, true);
  makeReadable(`head-text${id4}`, true);
  makeReadable(`customize-btn${id}`, false);
  makeReadable(`customize-btn${id1}`, true);
  makeReadable(`customize-btn${id2}`, true);
  makeReadable(`customize-btn${id3}`, true);
  makeReadable(`customize-btn${id4}`, true);
};

document.addEventListener("keydown", function (event) {
  // Check if the pressed key is an arrow key
  if (event.key === "ArrowUp" || event.key === "ArrowDown") {
    // Get all elements with the 'circle' class
    let circles = document.querySelector("#menu-head");

    // Find the currently focused element
    let focusedElement = document.activeElement;

    // Find the index of the currently focused element
    let index = Array.from(circles).indexOf(focusedElement);

    // Move to the next or previous element based on the arrow key pressed
    if (event.key === "ArrowUp") {
      index = (index - 1 + circles.length) % circles.length;
    } else if (event.key === "ArrowDown") {
      index = (index + 1) % circles.length;
    }

    // Check if circles[index] is defined before trying to focus
    // Focus on the new element
    circles[index].focus();
  }
});

/** ALERT & STORE */
function handleMenuKeyPress(e) {
  if (e.key === "ArrowUp" && currentFocusItem !== 0) {
    currentFocusItem = currentFocusItem - 1;
    allMenuItems.item(currentFocusItem).focus();

    return;
  }

  if (e.key === "ArrowDown" && currentFocusItem !== allMenuItems.length - 1) {
    currentFocusItem = currentFocusItem + 1;
    allMenuItems.item(currentFocusItem).focus();

    return;
  }

  if (e.key === "ArrowUp" && currentFocusItem === 0) {
    currentFocusItem = allMenuItems.length - 1;
    allMenuItems.item(currentFocusItem).focus();

    return;
  }

  if (e.key === "ArrowDown" && allMenuItems.length - 1) {
    currentFocusItem = 0;
    allMenuItems.item(currentFocusItem).focus();

    return;
  }
}
