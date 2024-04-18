document.addEventListener('DOMContentLoaded',function(){
    let formula= document.getElementById('formula');
    formula.addEventListener('submit',function(e){
    
        let mail =document.getElementById('email');
        let myRegex1=  /\S+@\S+\.\S+/;
   
        if (mail.value==""){
            let myerror1=document.getElementById('erreur1');
            myerror1.innerHTML="Le champs e-mail est requis.";
            myerror1.style.color='red';
            e.preventDefault();
        }else if (myRegex2.test(mail.value)==false){
            let myerror1=document.getElementById('erreur1');
            myerror1.innerHTML="L'e-mail  non valide.";
            myerror1.style.color='red';
            e.preventDefault();
            return;
        }
        alert("Formulaire soumis avec succès !");
        window.location.href = '../html/error.html';
    });
    });
