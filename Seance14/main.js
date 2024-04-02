
let Text = "iorii sit amet consectetur adipisicing elit.\
         Iste asperiores adipisci, eius soubros unos nisi Iori voluptatum veritatis labore ut"



// les expresions régulières

            let SearchedName = /Iori?/ig;

// Search methode

            const SearchedIndex = Text.search(SearchedName)
            console.log(SearchedIndex);                                 
    
// Match methode

            const matchSearch = Text.mactch(SearchedName)
            console.log(matchSearch);                               Output : list

// Match all

// Replace methode

            const updatedArticle = Text.replace(SearchedName, "labore")
            console.log(updatedArticle);

// Split methode

            let listModules = ["POO HTML/JAVASCRIPT-CSS PHP"]

            arrModules = listModules.split(/[\s-/]/)
            console.log(arrModules);

// Test method

            const tester = SearchedName.test(Text)
            console.log(tester);

// Exec method : the same as match.

            const chercher = SearchedName.exec(Text)
            console.log(chercher)



// group entre () et pour les achivées on utilise dollarnumber for exemple : $1 refers to grp 1.








/*

    Exercice a faire :

    tel 
    password  all characters from 8 to 16
    email doit avoir character et symbol 


    1) if any one of them is empty, the border's color should be red.

*/