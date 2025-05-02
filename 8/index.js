var tl = gsap.timeline({
    repeat: -1
});




// gsap.to("#one",{
//     width: "100%",
//     ease: Expo.easeInOut,
//     duration: 2,
// })\

tl.to(".imgcontainer", {
    ease: Expo.easeInOut,
    width: "100%",
    duration: 1,
    stagger: 2
}, 'a')
// gsap.to(".imgcontainer", {
//     ease: Expo.easeInOut,
//     width: "-100%",
//     delay: 2,
//     stagger: 2
// })

.to(".text h1",{
    ease: Expo.easeInOut,
    stagger: 2,
    top: 0
}, 'a')
.to(".text h1",{
    delay: 2,
    ease: Expo.easeInOut,
    stagger: 2,
    top: "-100%"
}, 'a')
