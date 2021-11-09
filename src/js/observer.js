console.log('tracking elements!');

// const toBeObserved = document.querySelector("#prj-entry1");
// toBeObserved.innerHTML = "Not Today!";

// // root is the browser viewport / screen
// var observer = new IntersectionObserver(function (entries) {
//   // since there is a single target to be observed, there will be only one entry
//   if (entries[0]['isIntersecting'] === true) {
//     if (entries[0]['intersectionRatio'] === 1)
//       console.log('Target is fully visible in the screen');
//     else if (entries[0]['intersectionRatio'] > 0.5)
//       console.log('More than 50% of target is visible in the screen');
//     else
//       console.log('Less than 50% of target is visible in the screen');
//   }
//   else {
//     console.log('Target is not visible in the screen');
//   }
// }, { threshold: [0, 0.5, 1] });

// observer.observe(toBeObserved);






// const header = document.querySelector("header");
// const sectionOne = document.querySelector(".home-intro");

// const faders = document.querySelectorAll(".fade-in");
// const sliders = document.querySelectorAll(".slide-in");

// const sectionOneOptions = {
//   rootMargin: "-200px 0px 0px 0px"
// };

// const sectionOneObserver = new IntersectionObserver(function (
//   entries,
//   sectionOneObserver
// ) {
//   entries.forEach(entry => {
//     if (!entry.isIntersecting) {
//       header.classList.add("nav-scrolled");
//     } else {
//       header.classList.remove("nav-scrolled");
//     }
//   });
// },
//   sectionOneOptions);

// sectionOneObserver.observe(sectionOne);

// const appearOptions = {
//   threshold: 0,
//   rootMargin: "0px 0px -250px 0px"
// };

// const appearOnScroll = new IntersectionObserver(function (
//   entries,
//   appearOnScroll
// ) {
//   entries.forEach(entry => {
//     if (!entry.isIntersecting) {
//       return;
//     } else {
//       entry.target.classList.add("appear");
//       appearOnScroll.unobserve(entry.target);
//     }
//   });
// },
//   appearOptions);

// faders.forEach(fader => {
//   appearOnScroll.observe(fader);
// });

// sliders.forEach(slider => {
//   appearOnScroll.observe(slider);
// });