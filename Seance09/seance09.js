// the parent

const parent = document.querySelector(".main")
const parent2 = document.querySelector(".divflx")




// exemple du button :


let btn = document.createElement('button');

btn.style.color ="white"
btn.style.fontSize ="14px"
btn.style.marginLeft ="100px"
btn.style.backgroundColor ="lime"
btn.style.height ="50px"
btn.style.width ="100px"
btn.style.border ="2px solid"
btn.style.borderRadius ="20px"

btn.innerHTML = "Click"
parent.append(btn)




document.querySelector("button").addEventListener("click", () => {
        let element1 = document.createElement('p');
        element1.style.color ="red"
        element1.style.fontSize ="140px"
        element1.style.marginLeft ="530px"
        element1.innerHTML = "JS"
        parent.append(element1)
        console.log(element1)
    });

















    let element3 = document.createElement('h2');

    
    element3.style.color ="white"
    element3.style.fontSize ="14px"
    element3.style.marginLeft ="100px"
    element3.style.backgroundColor ="aqua"
    element3.style.height ="120px"
    element3.style.width ="220px"

    
    element3.innerHTML = "This is my paragraph lor emum dolorum dolores distinctio maxime cupiditate alias, laborum similique veritatis. "
    parent2.append(element3)

    let element4 = document.createElement('h2');

    
    element4.style.color ="white"
    element4.style.fontSize ="14px"
    element4.style.marginLeft ="100px"
    element4.style.backgroundColor ="aqua"
    element4.style.height ="120px"
    element4.style.width ="220px"
    
    element4.innerHTML = "This is my  qshipsum dolor sit amet con consequus distinctio maxime cupiditate alias, laborum similique veritatis. "
    parent2.append(element4)

    // the child

    let element2 = document.createElement('h2');

    // style

    element2.style.color ="white"
    element2.style.fontSize ="14px"
    element2.style.marginLeft ="100px"
    element2.style.backgroundColor ="aqua"
    element2.style.height ="120px"
    element2.style.width ="220px"

    // inputting infos and appending them

    element2.innerHTML = "This is my paragrap conste  vel e maxime cupiditate alias, laborum similique veritatis. "
    parent2.append(element2)



// supprimer un element

    let bttn = document.createElement('button');
    
    bttn.style.color = "white";
    bttn.style.fontSize = "14px";
    bttn.style.marginLeft = "100px";
    bttn.style.backgroundColor = "lime";
    bttn.style.height = "50px";
    bttn.style.width = "100px";
    bttn.style.border = "2px solid";
    bttn.style.borderRadius = "20px";
    
    bttn.innerHTML = "Remove";
    parent.append(bttn);
    
    bttn.addEventListener("click", () => {
      let b = document.querySelector(".po2");
      if (b) {
        b.remove();
        console.log("removed successfully");
      } else {
        console.log("not found")}
    });


// supprimer un enfant


    document.querySelector("father")
    let son = document.querySelector(".son")


    let bttnn = document.createElement('button');
    
    bttnn.style.color = "white";
    bttnn.style.fontSize = "14px";
    bttnn.style.marginLeft = "100px";
    bttnn.style.backgroundColor = "lime";
    bttnn.style.height = "50px";
    bttnn.style.width = "100px";
    bttnn.style.border = "2px solid";
    bttnn.style.borderRadius = "20px";
    
    bttnn.innerHTML = "Replace";
    parent.append(bttnn);


    document.querySelector(".remplacer").addEventListener("click", () => {

        let F = document.querySelector(".father"); // sélectionner un élément parent
        let An = document.querySelector(".son"); // sélectionner l’ancien élément
        let Ne = document.createElement("h2"); // Créer un nouveau élément de type <h2>
        Ne.innerHTML = "C'est le nouveau élément."
      });
  
    





    parent.replaceChild(Ne, An);




console.log()
console.log()