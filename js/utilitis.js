
// here is a function
function hiddenFunction(id){
   const c= document.getElementById('donate-card-section');
   const v= document.getElementById('history-card');
    if(id=='history-card'){
        v.classList.remove('hidden')
        c.classList.add('hidden');
    }
    else{
        v.classList.add('hidden');
        c.classList.remove('hidden');
    }
      
}

