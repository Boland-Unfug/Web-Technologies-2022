
// /*
// and idea of what I want to do:
// pretty much, I want to set the nav bar to indent to the sites location.
// I can do this in two ways, I think
// 1.) I can use the ID's that I made, so when I am at that position the nav bar will change.
// This requires quite a few things, but is the simplest to set up, since I already have ID's

// 2.) manipulate the CSS class link, so that the last triggered link is popped out.
// This means I have to figure out how to use lists

// */

// //   Array.from(document.getElementsByClassName("menu-item"))
// //   .forEach((item, index) => {
// //     item.onmouseover = () => {
// //       menu.dataset.activeIndex = index;
// //       console.log(menu.dataset.activeIndex);
// //     }
// //   });



// /*
// I want to get the height of each web section,
// so that I can compare it against the current scroll position and set the menu.
// I think if I want this to work I need to make everything nested in CSS.
// This works well for organization, as well.
// */

// /*
// Now that I can get positions and such, I need to store them in an accessible way.
// Classes seem like a good option, where I pretty much tie a link and its destination to an object.
// */
// const section_locations = getSections(); //I need a global array of each section
// var current_section = getCurrentSection(); // I (temporarily) need to know the current position at all times

// document.addEventListener("load", initialize());
// class NavLink {
//     constructor(name, location) {
//         this.name = name;
//         this.location = location;
//     }

// }
// function initialize() {
//     const section_locations = NavLink.map();


//     getSections();
//     console.log(section_locations[0]);
//     console.log(section_locations[1]);

//     setCurrentSection();

// }


// function getSections() { // gets a list of each site section, such as menu, bio, etc
//     var sections = Array.from(document.getElementsByClassName("box"));
//     console.log("collecting all sections: " + sections);
//     return sections;
// }
// // I think I want to map each location to an element here, right?
// // gets the locations of each element in an array, returning their y-coordinates a
// function getLocations(element_array) {
//     const elements_locations = new Map();

//     element_array.forEach((element, index) => {
//         elements_locations.set(element_array[index],
//         (element.getBoundingClientRect().y) + window.scrollY)
//     });


//     return elements_locations;
// }

// function setCurrentSection() {
//     current_section = getCurrentSection(); //an element we can directly manipulate
//     console.log("current section: ");
//     console.log(current_section);
//     current_section.style.color = "blue";
// }

// function getCurrentSection() {
//     console.log("current scroll position: " + window.scrollY);
//     var closest;
//     console.log(section_locations[0]);
//     console.log(section_locations[1]);
//     // gonna need to add a way for the page to decide when it is halfway in between sections

//     section_locations[1].forEach((element, index) => {
//         // start by finding both the closest one below and the closest one above
//         // then move on to making it one function, which takes running out of array space into account
//         // if scroll position is less than section, that means the section is below
//         if (window.scrollY >= element) {
//             closest = section_locations[0][index];
//         }

//     });

//     // console.log("closest below: " + closest_below);
//     console.log(closest);
//     //console.log(closest_name);

//     return closest;

// }

// /*
// I will just start over from here, borrowing my above code. I learned I can manipulate classes.
// So, I start off with menu being active. Then there are two things that need to be measured.
// A.) when a link is clicked, change the current active link
// to do this, I can use the code from W3, but hopefully make it better - nah it works just leave it
// B.) when someone scrolls past a certain point, to a new page, change the current active link
// I can just change the set function to add a class instead of changing the color,
// but I need to still connect the link to it.
// */

document.addEventListener("load", initialize());

function initialize() {

    updateActive();
    scrollUpdateActive();
    console.log("Initialized Successfully!");
}


function updateActive() {
    // nav bar selection algorithm provided by https://www.w3schools.com/howto/howto_js_active_element.asp

    // Get the container element
    var nav = document.getElementById("navbar");
    // Get all links with class="link" inside the container
    var nav_link = nav.getElementsByClassName("link");
    // Loop through the links and add the active class to the current/clicked button
    for (var i = 0; i < nav_link.length; i++) {
        nav_link[i].addEventListener("click", function () {
            var current = document.getElementsByClassName("current");
            current[0].className = current[0].className.replace(" current", "");
            this.className += " current";
        });
    }
}

/*
// from 
function checkVisible(elm) {
  var rect = elm.getBoundingClientRect();
  var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
  return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}


*/


function scrollUpdateActive() {
    // Get the container element
    var content = document.getElementsByClassName("page");
    // Loop through the pages, checking which on is current
    for (var i = 0; i < content.length; i++) {
        content[i].addEventListener("scroll", function () {
            visible = checkVisible(content[i]);
            var current = document.getElementsByClassName("current");
            current[0].className = current[0].className.replace(" current", "");
            this.className += " current";
        });
    }
}

function checkVisible(elm) {
    var rect = elm.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
  }
  

function getOnscreenElements() {

    var content = document.getElementById("content");
    var sections = content.getElementsByClassName("box");
    var section_positions = [sections.length];
    for (var i = 0; i < sections.length; i++) {
        section_positions[i] = getPosition(sections[i]);
    }
    console.log("sections " + sections);


    var user_position = window.scrollY;



}


