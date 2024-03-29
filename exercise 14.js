
var texts = document.querySelectorAll('.first').forEach(function(text){
        var originaltext = text.textContent.trim();
        var count = 0;
        var interval = setInterval(function(){
            if (count < 3) {
                text.textContent = originaltext;
                originaltext += '.';
                count++;
        }   else {
                originaltext = text.textContent.replace(/\.{3}$/, '');
                count = 0;
        }
    }, 300);
})
document.querySelectorAll('.first').forEach(function(text){
    text.style.display='none'
})
async function getdata(){
    setTimeout(()=>{
            document.querySelectorAll('.first')[0].style.display=''
        },3000)
    
    setTimeout(()=>{
            document.querySelectorAll('.first')[1].style.display=''
        },6000)
    setTimeout(()=>{
            document.querySelectorAll('.first')[2].style.display=''
        },9000)
    }
async function main(){
    await getdata()
}
main()
// 
// for(i=0;i<3;i++){setTimeout(() => {
//     var x=document.createTextNode('.')
//     document.getElementById('first').appendChild(x)
// }, 1000);}