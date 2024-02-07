let jours = ["lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche"];

for (let i=0; i<=6; i++){
    console.log("Ce jour la est " + jours[i]);
}


            console.log("---------------------------------------------------")


//pour avoir le contenu du case avec 'in'

    for (let jour in jours) [
        console.log( jours[jour])
    ]

            console.log("---------------------------------------------------")

//pour avoir l'index du case

    for (let jour in jours) [
        console.log( jour)
    ]
            console.log("---------------------------------------------------")

//pour avoir le contenu du case avec 'of'

    for (let jour of jours) [
        console.log( jour)
    ]

            console.log("---------------------------------------------------")

// WHILE LOOPE :(it enters the code 0 time if the condition doesn't apply)

    let op;
    op = 10

    while(op > 0){
        console.log(op)
        op -= 1
    }
            console.log("---------------------------------------------------")

//  DO LOOPE :(at least enter the code 1 time even if the condition doesn't apply)


    let np;
    np = 10

    do{
        console.log(np)
        np -= 1
    }
    while(np > 0)
            console.log("---------------------------------------------------")

// for each

let txtjours = "";
jours.forEach(myFunction)

function myFunction(value,index,array){
    txtjours += " " +value
}
console.log(jours[j])

            console.log("---------------------------------------------------")

// continue :(to continue reading but skipping this one )


for(let j=0 ;j <= (jours.length -1);j++){
    if(j===3){
        console.log("stop");
        continue;
    }
    console.log(jours[j])
}

            console.log("---------------------------------------------------")

// break :(to get off the code immediatly after reading this)


for(let j=0 ;j <= (jours.length -1);j++){
    if(j===3){
        console.log("stop");
        break;
    }
    console.log(jours[j])
}




let name_age;
name_age = stagiaires.map((item, index,arrStagiare) => {
    let st;
    st ={...item, branche: "DD",id: index + 1};
    return st;
});