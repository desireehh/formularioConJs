
const formulario = document.getElementById("formulario");


const userName= document.getElementById (`userName`);
const userEmail= document.getElementById (`userEmail`);
const userPhone= document.getElementById (`userPhone`);
const numberCard= document.getElementById (`numberCard`);
const titularCard= document.getElementById (`titularCard`);

const alertName= document.getElementById (`alertName`);
const alertEmail= document.getElementById (`alertEmail`);
const alertPhone= document.getElementById (`alertPhone`);
const alertCard= document.getElementById (`alertCard`);
const alertTitular= document.getElementById (`alertTitular`);
const alertSuccess= document.getElementById (`alertSuccess`);

const regUserName=  /^[a-zA-Z ]*$/;
const regUserEmail= /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;


const pintarMensajeEnviado=()=>{
    alertSuccess.classList.remove("d-none");
    alertSuccess.textContent= "Mensaje enviado con Exito"

}

const errores=[];

const mostrarError=()=>{
          errores.forEach(item => {
            item.tipo.classList.remove("d-none")
            item.tipo.textContent=item.msg
            
         });

         console.log(errores)
};


formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    //console.log("funciona el botón");
   //  console.log(userName.value)
   //  console.log(regUserName.test(userName.value));
   //  console.log(regUserEmail.test(userEmail.value));

 if(!regUserEmail.test(userEmail.value) ||!userEmail.value.trim() ){
    userEmail.classList.add("is-invalid");  //para que muestre el signo de advertencia
   
    errores.push({
      tipo: alertEmail,
      msg: "Escriba un correo válido"
    });
    
    mostrarError();



   }else{
         userEmail.classList.remove("is-invalid")
         userEmail.classList.add("is-valid")
         alertEmail.classList.add("d-none")

         
            pintarMensajeEnviado();
         
    
   
      
 }



});