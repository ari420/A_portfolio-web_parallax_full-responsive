////////////////////make loding/////////////////////////
document.addEventListener("DOMContentLoaded", () => {
  const loader = document.querySelector(".loding");

  // Show the loader on initial page load
  loader.style.display = "flex";

  // Wait until the page is fully loaded
  window.addEventListener("load", () => {
    setTimeout(() => {
      loader.style.display = "none"; // Hide the loader
    }, 400); // Optional: Add a small delay for a smoother transition
  });
});

///////////////////celections for menu/////////////////
const menuIn = document.querySelector(".ri-menu-fold-line");
const menuOut = document.querySelector(".ri-menu-unfold-line");
const menu = document.querySelector(".menu");
const body = document.querySelector("body");
///////////////////center move celection///////////////
const img = document.querySelectorAll("section .main img");

////////////////////make refresh on Arian/////////////////
const Ari = document.querySelector(".Arian").addEventListener("click", () => {
  location.reload();
});

//////////////////make a tik tak for menu ///////////////////////
menuOut.style.display = "none"; ///make menuout invisible////
let menuOpen = false;
document.querySelector(".tuggel").addEventListener("click", () => {
  menuOpen = !menuOpen;
  menuOut.style.display = menuOpen ? "flex" : "none";
  menuIn.style.display = menuOpen ? "none" : "flex";
  menu.style.right = menuOpen ? "0" : "-100%";
  body.classList.toggle("h", menuOpen);
});

///////////////////////make center mouse move/////////////////
window.addEventListener("mousemove", (e) => {
  let x = e.clientX / 200; // Reduced the movement effect
  let y = e.clientY / 200; // Reduced the movement effect

  // Apply subtle movement to each image using transform: translate()
  img[0].style.transform = `translate(${x}px, ${y}px)`;
  img[1].style.transform = `translate(${x}px, ${y}px)`;
  img[2].style.transform = `translate(${x * 1.2}px, ${y * 1.2}px)`; // Slightly stronger movement
  img[3].style.transform = `translate(${x * 2.2}px, ${y * 2.2}px)`; // Slightly stronger movement
  img[4].style.transform = `translate(${x * 2.2}px, ${y * 2.2}px)`;
  img[5].style.transform = `translate(${x * 2.2}px, ${y * 2.2}px)`;
  img[6].style.transform = `translate(${x * 2.2}px, ${y * 2.2}px)`; // Slightly stronger movement
  //img[7].style.transform = `translate(${x * 1.2}px, ${y * 1.2}px)`; // Slightly stronger movement
});

///////////////////section2 selections/////////////////////
document.addEventListener("DOMContentLoaded", () => {
  const imgs = document.querySelectorAll(".sec2 img");
  const fp = document.querySelectorAll(".sec2 .fp p");

  window.addEventListener("scroll", () => {
    const y = window.scrollY + window.innerHeight;

    console.log("wy" + window.scrollY);
    console.log("wh" + window.innerHeight);

    // Fix fp loop
    fp.forEach((e) => {
      let fpClient = e.getBoundingClientRect(); // Call getBoundingClientRect on the element
      let fpTop = fpClient.top + window.scrollY;
      let fpBottom = fpClient.bottom + window.scrollY;

      if (y >= fpBottom + e.offsetHeight / 2) {
        e.classList.remove(e.getAttribute("data-ari"));
      } else {
        e.classList.add(e.getAttribute("data-ari"));
      }
    });

    imgs.forEach((e) => {
      let boxs = e.getBoundingClientRect();
      let top = boxs.top + window.scrollY;

      if (y >= top + e.offsetHeight / 2) {
        e.classList.add(e.getAttribute("data-ari"));
      } else {
        e.classList.remove(e.getAttribute("data-ari"));
      }
    });
  });
});
///////////////////////move left and right //////////////////////
document.addEventListener("DOMContentLoaded", () => {
  const paras = document.querySelectorAll(".sec2 ul li p"); // Select all paragraphs

  window.addEventListener("scroll", () => {
    paras.forEach((para, index) => {
      const rect = para.getBoundingClientRect(); // Get the paragraph's position in the viewport
      const viewportCenter = window.innerHeight / 2; // Center of the viewport
      const scrollOffset = rect.top - viewportCenter; // Distance from the center of the viewport
      const maxOffset = window.innerWidth * 1; // Maximum movement distance
      const offset = Math.max(-maxOffset, Math.min(maxOffset, -scrollOffset)); // Clamp the offset

      // Apply horizontal movement
      para.style.transform = `translateX(${
        index % 2 === 0 ? offset : -offset
      }px)`;

      // Check if the paragraph is touching or above the top of the window
      if (rect.top <= 0) {
        para.style.opacity = ".2"; // Fade out when touching/above the top
      } else {
        para.style.opacity = "1"; // Fade back in when scrolling back
      }
    });
  });
});
///////////////////////make bg color yellow adn pink////////////////
document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector(".sec2"); // Select the section to change background color
  const paras = document.querySelectorAll(".sec2 ul li p"); // Select all paragraphs

  // Original background color (replace with the actual color you want)
  const originalBgColor = section.style.backgroundColor;

  window.addEventListener("scroll", () => {
    let sectionInView = false;

    paras.forEach((para) => {
      const rect = para.getBoundingClientRect(); // Get the paragraph's position
      const isVisible =
        rect.top <= window.innerHeight && rect.bottom - 600 >= 0; // Check if paragraph is in view

      if (isVisible) {
        sectionInView = true; // If any paragraph is in view, set flag
      }
    });

    // Change the section background color based on visibility of paragraphs
    if (sectionInView) {
      section.style.backgroundColor = "rgb(249, 245, 195)"; // Change to yellow when paragraph is visible
    } else {
      section.style.backgroundColor = originalBgColor; // Revert to original color when paragraphs are not visible
    }
  });
});

////////////////////////////section3 selection/////////////////////////
document.addEventListener("DOMContentLoaded", () => {
  const figures = document.querySelectorAll(".sec3 figure");
  const headings = document.querySelectorAll(".sec3 div h1");

  // Utility function to check visibility
  const isVisible = (element, threshold = 0.5) => {
    const rect = element.getBoundingClientRect();
    const elementMidpoint = rect.top + rect.height * threshold;
    return elementMidpoint < window.innerHeight && rect.bottom > 0;
  };

  // Scroll event handler
  const handleScroll = () => {
    figures.forEach((figure) => {
      const className = figure.getAttribute("data-ari");
      if (isVisible(figure)) {
        figure.classList.remove(className);
      } else {
        figure.classList.add(className);
      }
    });

    headings.forEach((heading) => {
      const className = heading.getAttribute("data-ari");
      if (isVisible(heading)) {
        heading.classList.remove(className);
      } else {
        heading.classList.add(className);
      }
    });
  };

  // Attach scroll listener
  window.addEventListener("scroll", handleScroll);

  // Trigger the scroll handler on page load to ensure initial visibility is applied
  handleScroll();
});

///////////////////section4 selection/////////////////////
document.addEventListener("DOMContentLoaded", () => {
  const map = document.querySelector(".sec4 figure img"); // Select the single image

  // Scroll event listener
  window.addEventListener("scroll", () => {
    const mapC = map.getBoundingClientRect(); // Get image position relative to the viewport
    const mapTop = mapC.top + window.scrollY; // Top position of the image in relation to the document
    const viewportMiddle = window.scrollY + window.innerHeight / 2; // Middle of the viewport

    // Check if the top of the image has reached or passed the middle of the viewport
    if (
      mapTop <= viewportMiddle &&
      mapTop + map.offsetHeight > viewportMiddle
    ) {
      map.classList.remove("op"); // Add 'op' class when the image is at or past the middle of the viewport
    } else {
      map.classList.add("op"); // Remove 'op' class when the image is not at the middle of the viewport
    }
  });

  // Trigger the scroll handler on page load to ensure visibility updates
  window.dispatchEvent(new Event("scroll"));
});

///////////////////////////section5 selection/////////////////////
document.addEventListener("DOMContentLoaded", () => {
  const headings = document.querySelectorAll(".sec5 figure div h1");

  window.addEventListener("scroll", () => {
    headings.forEach((heading) => {
      const rect = heading.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Calculate a scale factor based on the element's position in the viewport
      const centerOffset = rect.top + rect.height / 2 - viewportHeight / 2;
      const scale = Math.max(0.5, Math.min(2, 1 - centerOffset / 300));

      // Apply the scaling to the font size
      heading.style.fontSize = `${scale * 4}rem`; // Adjust 2rem as base size
    });
  });
});
/////////////////////section5 img move////////////////////
document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".sec5 figure img"); // Target all images

  // Apply transition styling to make the movement smooth
  images.forEach((img) => {
    img.style.transition = "transform 0.4s ease-out"; // Smooth transition
  });

  // Scroll event
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY; // Current scroll position

    images.forEach((img) => {
      const imgRect = img.getBoundingClientRect(); // Image's position in the viewport
      const imgTop = imgRect.top + scrollY; // Image's position relative to the document
      const imgHeight = img.offsetHeight; // Height of the image
      const viewportMiddle = scrollY + window.innerHeight / 2; // Middle of the viewport

      // Calculate the movement offset
      const maxMovement = 150; // Limit movement to 150px
      let offset = ((viewportMiddle - imgTop) / imgHeight) * maxMovement;

      // Reverse the direction by negating the offset
      offset = Math.max(-maxMovement, Math.min(maxMovement, -offset));

      // Apply the transformation
      img.style.transform = `translateY(${offset}px)`;
    });
  });
});
