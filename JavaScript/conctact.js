document.addEventListener('DOMContentLoaded',function(){
    let formu= document.getElementById('formu');
    formu.addEventListener('submit',function(e){
        let name =document.getElementById('nom');
        let myRegex1= /^[a-zA-Z-\s]+$/;
    
        let lastname =document.getElementById('prenom');
        let myRegex2= /^[a-zA-Z-\s]+$/;
    
        let number =document.getElementById('numero');
        let myRegex3=/^\d{10}$/;
    
        let mail =document.getElementById('email');
        let myRegex4=  /\S+@\S+\.\S+/;
    
        let texte =document.getElementById('message');
       
    
        if (name.value==""){
            let myerror1=document.getElementById('erreur1');
            myerror1.innerHTML="Le champs Nom est requis.";
            myerror1.style.color='red';
            e.preventDefault();
        }else if (myRegex1.test(name.value)==false){
            let myerror1=document.getElementById('erreur1');
            myerror1.innerHTML="Le Nom peut comporter des lettres,des tiret uniquement.";
            myerror1.style.color='red';
            e.preventDefault();
            return;
        }
    
        if (lastname.value==""){
            let myerror2=document.getElementById('erreur2');
            myerror2.innerHTML="Le champs Prenom est requis.";
            myerror2.style.color='red';
            e.preventDefault();
        }else if (myRegex2.test(lastname.value)==false){
            let myerror2=document.getElementById('erreur2');
            myerror2.innerHTML="Le Prenom peut comporter des lettres,des tiret uniquement.";
            myerror2.style.color='red';
            e.preventDefault();
            return;
        }
        if (number.value==""){
            let myerror3=document.getElementById('erreur3');
            myerror3.innerHTML="Le champs Numero est requis.";
            myerror3.style.color='red';
            e.preventDefault();
        }else if (myRegex3.test(number.value)==false){
            let myerror3=document.getElementById('erreur3');
            myerror3.innerHTML="Le Numero non valide.";
            myerror3.style.color='red';
            e.preventDefault();
            return;
        }
        if (mail.value==""){
            let myerror4=document.getElementById('erreur4');
            myerror4.innerHTML="Le champs e-mail est requis.";
            myerror4.style.color='red';
            e.preventDefault();
        }else if (myRegex4.test(mail.value)==false){
            let myerror4=document.getElementById('erreur4');
            myerror4.innerHTML="L'e-mail  non valide.";
            myerror4.style.color='red';
            e.preventDefault();
            return;
        }
        if (texte.value==""){
            let myerror5=document.getElementById('erreur5');
            myerror5.innerHTML="Le champs MESSAGE est requis.";
            myerror5.style.color='red';
            e.preventDefault();
            return;
        }
        alert("Formulaire soumis avec succès !");
    });
    });
    