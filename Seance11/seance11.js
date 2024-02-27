
const parent  = document.querySelector(".parent");
const input = document.querySelector('input[type="text"]')

// mouseenter & mouseleave = parent
// mouseover  & mouseout  =parent + children

 parent.addEventListener("mouseenter", () =>{ // will affich only when you enter to the parent not the children
     console.log("hello")
 })

// parent.addEventListener("mouseover", () =>{ // will affich every time you put the mouse on the childern or the parent
//     console.log("hello")
// })

// parent.addEventListener("mouseleave", () =>{ // will affich when you go out of the parent 
//      console.log("hello")
// })

// parent.addEventListener("mouseout", () =>{ // will affich when you go out of the parent even if you go to the childern 
//     console.log("hello")
// })

// parent.addEventListener("mousedown", () =>{  // fach katwark 3la souri lakin matla9tich lidk
//     console.log("daba nta mwark")
// })

// parent.addEventListener("mouseup", () =>{   // fach kat7ayd lidk min dagta
//     console.log("daba 7aydti min tawrika")
// })

// parent.addEventListener("dblclick", () =>{   // affiche when you click two times
//     console.log("you clicked two times")
// })

// parent.addEventListener("mousemove", () =>{   // m7adk nta kat7ark o hia khdama kataficcher
//     console.log("ra kant7ark daba")
// })

// input.addEventListener('focus',()=>{    // aficher when you are focusing
//     console.log("ma7ba bik f input")
// })

// input.addEventListener('blur',()=>{     // aficher when you stop focusing
//     console.log("safi lach dakhli mli bagi tkhroj hhhhh")
// })
