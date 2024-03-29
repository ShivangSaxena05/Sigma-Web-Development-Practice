function generate_color(){
    let a = '0123456789abcdef';
    let b = "#"
    for(i=0;i<6;i++){
        let random = Math.random()*16;
        create = (Math.floor(random))
        b= b+a[create]
    }
    return b;
}
    let h=generate_color()
    document.querySelectorAll(".box").forEach(e=>{
        h=generate_color()
        e.style.backgroundColor=h
    })