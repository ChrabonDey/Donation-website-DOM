

    document.addEventListener('click',function(event){
        if(event.target.classList.contains('donation')){
          
        const section=event.target.closest('.donate-card');
        const values=section.querySelector('.donation-box');
        const current=section.querySelector('.current-donation');
        const donateValue=parseFloat(values.value);
        const donateCurrent=parseFloat(current.innerText);
        const total=parseFloat(document.getElementById('total-amount').innerText);
        
        if(isNaN(donateValue) || donateValue <=0){
        
            
            alert('Invalid Donation amount')
            return
            

        }
        else if(donateValue>total){
            
            alert('Insufficient Balance.');
            return
        }
        else{
            const newValue=donateCurrent+donateValue;
            current.innerText=newValue;
            document.getElementById('total-amount').innerText=total-donateValue;
            

            const history=section.querySelector('h3').innerText;
            const time=new Date();
            document.getElementById('history-list').innerHTML+=`<li class="border rounded-2xl p-10 lg:my-5 my-3 shadow-sm">
            ${donateValue} Taka is ${history}
            <p class="font-semibold ">${time}</p>
          </li>`

          document.getElementById('my_modal_1').showModal()
            
        }
     }


    })
    

document.getElementById('History').addEventListener('click',function(event){
    hiddenFunction('history-card');
    document.getElementById('History').classList.add('bg-btn')
    document.getElementById('Donation').classList.remove('bg-btn')   
})

document.getElementById('Donation').addEventListener('click',function(event){
    hiddenFunction('donate-card-section')
    document.getElementById('History').classList.add('border')
    document.getElementById('History').classList.remove('bg-btn')
    document.getElementById('Donation').classList.add('bg-btn')

})







