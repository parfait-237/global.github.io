document.getElementById("register").addEventListener("submit", function(e) {
    var err

    var inputs = document.getElementsByTagName('input')

    for(var i = 0; i < inputs.length; i ++) {
        if(!inputs[i].value){
            err = "veillez renseigner tout les champs"
        } 
        
    }

    if (err) {
        e.preventDefault()
        document.getElementById('err').innerHTML = err
        return false;
    } else {
        alert('formulaire envoyé') 

        return true
    }
   
  
})




