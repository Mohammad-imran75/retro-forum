const btns = document.getElementById('add-btn')
let count = 0 ;

for(const btn of btns){
   btn.addEventListener('click', function(e){
    count = count + 1;
   +
    setInnerText('add-count', count)
   })
}



function setInnerText(id, value){
    document.getElementById(id).innerText = value;}