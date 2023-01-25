document.addEventListener(type="keyup", listener= e=>{

    e.target.matches(".buscar")

    console.log(e.target.value)

    if (e.target.matches(".buscar")){
  
        if (e.key ==="Escape")e.target.value = ".buscar"
  
        document.querySelectorAll(".c1").forEach(info =>{
  
            info.textContent.toLowerCase().includes(e.target.value.toLowerCase())
              ?info.classList.remove("filtro")
              :info.classList.add("filtro")
        })
  
    }
  
  
  })