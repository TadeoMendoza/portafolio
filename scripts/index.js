const xhttp = new XMLHttpRequest();

xhttp.open ('GET', '../scripts/proyectos.json', true);

xhttp.send()

xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        let datos = JSON.parse(this.responseText)
        console.log(datos);
        datos.forEach(element => {
            document.getElementById("contenido").innerHTML += `
         <div class="col-xs-12 col-md-12 col-lg-6" id="tarjetas">
                <div class="card">
                    <img src="${element.img}" class="card-img-top imagen-tarjetas-proyectos" alt="...">
                    <div class="card-body">
                      <h5 class="card-title titulo-tarjetas-proyectos">${element.titulo}</h5>
                      <p class="card-text texto-tarjetas-proyectos">${element.descripcion}</p>
                      <a href="${element.url}" class="btn btn-primary">ir</a>
                    </div>
                    <div style="height: 20px;"></div>
                </div>
        </div>    
            `
        });

    }
}