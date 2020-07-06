
//firstButton
       let contactAdresses = document.getElementsByClassName('btn');
        for(let a=0; a<contactAdresses.length; a++){
            let myEffects = contactAdresses[a];
            myEffects.addEventListener('click', hideShow)
        }
        let displayIt = true;
        function hideShow(event){
            myEffects = event.target;
            displayIt = !displayIt;
            if(!displayIt){
                myEffects.style.color = "black";
                myEffects.innerHTML = "+105643665432";
            } else if(displayIt){
                myEffects.style.backgroundColor = "goldenrod";
                myEffects.innerHTML = "Phone-reservation";
                myEffects.style.color = "white";
            } 
        }

    //secondButton

    let contactAdresses2 = document.getElementsByClassName('btn1');
    for(let b=0; b < contactAdresses2.length; b++){
        let myEffects2 = contactAdresses2[b];
        myEffects2.addEventListener('click', hideShow2)
    }
    let displayIt2 = true;
    function hideShow2(event){
        myEffects2 = event.target;
        displayIt2 = !displayIt2;
        if(!displayIt2){
            myEffects2.style.color = "black";
            myEffects2.innerHTML = "myRestaurant@hotmail.it";
        }else if(displayIt2){
            myEffects2.style.color = "goldenrod";
            myEffects2.style.color = "white";
            myEffects2.innerHTML = "Email-reservation";
        }
    } 
 