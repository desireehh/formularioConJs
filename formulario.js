
const formulario = document.getElementById("formulario");


const userName= document.getElementById (`userName`);
const userEmail= document.getElementById (`userEmail`);
const userPhone= document.getElementById (`userPhone`);
const titularCard= document.getElementById (`titularCard`)

const alertName= document.getElementById (`alertName`);
const alertEmail= document.getElementById (`alertEmail`);
const alertNum= document.getElementById (`alertNum`);
const alertSuccess= document.getElementById (`alertSuccess`);

const regUserName=   /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const regUserEmail= /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;
const regUserPhone= /^[0-9]*$/;

const pintarMensajeEnviado=()=>{
    alertSuccess.classList.remove("d-none");
    alertSuccess.textContent= "Mensaje enviado con Exito"

};

const mostrarError=(errores)=>{
          errores.forEach(item => {
            item.tipo.classList.remove("d-none")
            item.tipo.textContent=item.msg
            
         });

         console.log(errores)
};


formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    alertSuccess.classList.add("d-none");
   
    const errores=[];
   

//VALIDAR NOMBRE
   if(!regUserName.test(userName.value) || !userName.value.trim() ){
    userName.classList.add("is-invalid");  //para que muestre el signo de advertencia
   
    errores.push({
      tipo: alertName,
      msg: "Solo letras"
    });    
   
     }else{
         userName.classList.remove("is-invalid")
         userName.classList.add("is-valid")
         alertName.classList.add("d-none")
     }


//VALIDAR EMAIL

if(!regUserEmail.test(userEmail.value) || !userEmail.value.trim() ){
    userEmail.classList.add("is-invalid");  
   
    errores.push({
      tipo: alertEmail,
      msg: "Escriba un correo válido"
    });    
   
     }else{
         userEmail.classList.remove("is-invalid")
         userEmail.classList.add("is-valid")
         alertEmail.classList.add("d-none")
     }

     //VALIDAR TELEFONO
     if(!regUserPhone.test(userPhone.value) || !userPhone.value.trim() ){
      userPhone.classList.add("is-invalid");  //para que muestre el signo de advertencia
     
      errores.push({
        tipo: alertNum,
        msg: "Por favor ingrese un número válido"
      });    
     
       }else{
        userPhone.classList.remove("is-invalid")
        userPhone.classList.add("is-valid")
           alertNum.classList.add("d-none")
       }
  

     //VALIDAR NOMBRE TITULAR 
     if(!regUserName.test(titularCard.value) || !titularCard.value.trim() ){
      titularCard.classList.add("is-invalid");  //para que muestre el signo de advertencia
     
      errores.push({
        tipo: alertName,
        msg: "Solo letras"
      });    
     
       }else{
        titularCard.classList.remove("is-invalid")
        titularCard.classList.add("is-valid")
           alertName.classList.add("d-none")
       }
  
  
      if(errores.length!==0){
        mostrarError(errores);
        return; 
             } 
        
        pintarMensajeEnviado();
    });


