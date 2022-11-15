const countdown=document.querySelector(".countdown");

//take time
let time=11;


setTimeout(() => {
    countdown.innerHTML="Lets Start (*_*) " ;
    
    
},);
// callback hell
countdown.innerHTML=time--;
   setTimeout(()=>{
    countdown.innerHTML=time--;
        setTimeout(() => {
            countdown.innerHTML=time--;
            setTimeout(() => {
                countdown.innerHTML=time--;
                    setTimeout(() => {
                        countdown.innerHTML=time--;
                           setTimeout(() => {
                            countdown.innerHTML=time--;
                                setTimeout(() => {
                                    countdown.innerHTML=time--;
                                        setTimeout(() => {
                                            countdown.innerHTML=time--;
                                            setTimeout(() => {
                                                countdown.innerHTML=time--;
                                                    setTimeout(() => {
                                                        countdown.innerHTML=time--;
                                                        setTimeout(() => {
                                                            countdown.innerHTML=time--;
                                                                setTimeout(() => {
                                                                    countdown.innerHTML="HAPPY INDEPENDENCE DAY (*_*) <br>";
                                                            
                                                                    countdown.appendChild(document.createElement('img')).src = "https://upload.wikimedia.org/wikipedia/commons/3/3a/Animated-Flag-India.gif";
                                                             
                                                                     //countdown.appendChild(document.createElement('img')).src = "flags.png";
                                                                }, 2000);
                                                            
                                                        }, 2000);
                                                    }, 2000);
                                            }, 2000);
                                        }, 2000);
                                }, 2000);
                           }, 2000);
                    }, 2000);
            }, 2000);
        }, 2000);
   },2000)