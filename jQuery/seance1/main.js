document.getElementsById("btn-hide").addEventListener('click',function(){
    $(".liste li:nth-child(2)").hide()
    $(".liste li:nth-child(2)").css("color","blue")
    $(".liste li:nth-child(2n)").css("color","blue","backgroundColor","red")
})


document.getElementsById("btn-show").addEventListener('click',function(){
    $(".liste:first").show()
})


$(document.ready(function(){

    $("#btn-ajouter".click(function(){
        console.log("You clicked this btn")
    }))

}))