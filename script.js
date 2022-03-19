console.log("change")

const color=["red","orange","green","pink","yellow","orange"];

function changeColor(){
    console.log(Math.random())
    console.log(Math.random()*color.length)
    console.log(parseInt(Math.random()*color.length))

    var colorIndex=parseInt(Math.random()*color.length)
    document.getElementById("change").style.backgroundColor=color[colorIndex];
    
}
