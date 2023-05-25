const buscador$$ = document.querySelector("input");
const botonBuscador$$ = document.querySelector("button");
const ul$$ = document.querySelector("ul");
const divTareasCompletadas$$ = document.querySelector(".empty");

const eliminarTarea = (valor) => {
    valor.target.parentElement.remove();
    if(ul$$.children.length == 0) {
        divTareasCompletadas$$.style.display = "block";
        }
    }

const capturarTexto = (valor) => {
    valor.preventDefault();

    let busqueda  = buscador$$.value;
        if (busqueda !== ""){
            const li$$ = document.createElement("li");
            const p$$ = document.createElement("p");
            p$$.innerHTML= busqueda;
            li$$.appendChild(p$$);
            const botonEliminar$$ = document.createElement("button");
            botonEliminar$$.setAttribute("class",'btn-delete');
            botonEliminar$$.textContent = "X"
            li$$.appendChild(botonEliminar$$);
            ul$$.appendChild(li$$);
            buscador$$.value = "";
            botonEliminar$$.addEventListener("click", eliminarTarea);
            
            eliminarTareasCompletadas();
        }
    }
    botonBuscador$$.addEventListener ("click", capturarTexto);
   
const eliminarTareasCompletadas = () => divTareasCompletadas$$.style.display = "none";