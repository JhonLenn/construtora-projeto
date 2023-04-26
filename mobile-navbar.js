var botoes = document.querySelectorAll('button');
  
for (var i = 0; i < botoes.length; i++) {
  botoes[i].addEventListener('click', function() {
    var descricao = this.parentNode.querySelector('.descricao');
    if (descricao.style.display === "block") {
      descricao.style.display = "none";
      this.textContent = "ocultar descricao";
    } else {
      descricao.style.display = "block";
      this.textContent = "mostrar descricao";
    }
  });
}


const btn = document.getElementById("hamburguer");

btn.addEventListener("click",mostrarMenu);


function mostrarMenu(){
    const navList = document.getElementById("nav-list");
    if(navList.classList.contains("active")){
        navList.classList.remove("active")
    }else{
        navList.classList.add("active")
    };  
}

