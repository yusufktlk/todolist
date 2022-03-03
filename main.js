var ekle = document.getElementById("addTodo");
var kutu = document.getElementById("todoBox")
var inputşeyi = document.getElementById("inputşeyi")


ekle.addEventListener('click', function() {
    var yazi = document.createElement("p");
    yazi.innerText = inputşeyi.value;
    kutu.appendChild(yazi);
    yazi.addEventListener('click',function(){
        yazi.style.textDecoration="line-through"
    })
    yazi.addEventListener('dblclick', function(){
        kutu.removeChild(yazi);
    })
})



