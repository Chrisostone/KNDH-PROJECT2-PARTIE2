document.addEventListener('DOMContentLoaded',function(){
    let formul= document.getElementById('formul');
    formul.addEventListener('submit',function(e){
       
        let number =document.getElementById('Ncommande');
        let myRegex1= /^\d+$/;
    
        let mail =document.getElementById('couriel');
        let myRegex2= /\S+@\S+\.\S+/;
   
        if (number.value==""){
            let myerror1=document.getElementById('erreur1');
            myerror1.innerHTML="Le champs Numero est requis.";
            myerror1.style.color='red';
            e.preventDefault();
        }else if (myRegex1.test(number.value)==false){
            let myerror1=document.getElementById('erreur1');
            myerror1.innerHTML="Le Numero doit comporter des chiffres uniquement.";
            myerror1.style.color='red';
            e.preventDefault();
            return;
        }
        if (mail.value==""){
            let myerror2=document.getElementById('erreur2');
            myerror2.innerHTML="Le champs e-mail est requis.";
            myerror2.style.color='red';
            e.preventDefault();
        }else if (myRegex2.test(mail.value)==false){
            let myerror2=document.getElementById('erreur2');
            myerror2.innerHTML="L'e-mail  non valide.";
            myerror2.style.color='red';
            e.preventDefault();
            return;
        }
        alert("Formulaire soumis avec succès !");
    });
    });
