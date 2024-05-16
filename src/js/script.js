let imagens = ['batman_gibi.jpg', 'dc_gibi.avif', 'liga_justica_gibi.webp'];
let index = 0;
let time = 3000;

function slideShow(){
    document.getElementById('imgBanner').src=imagens[index];
    index ++;

    if(index == imagens.length){
        index = 0;
    }

    setTimeout('slideShow()', time);
}
function contador(){
    const contador1 = document.getElementById("contador1")
    let valor1 =0

    let tempo1 = setInterval(()=>{
        valor1 +=2;
        contador1.innerHTML = `+ ${valor1}`

        if(valor1 ==1934){
            clearInterval(tempo1)
        }
    })

    const contador2 = document.getElementById("contador2")
    let valor2 =0

    let tempo2 = setInterval(()=>{
        valor2 +=1;
        contador2.innerHTML = `+ ${valor2}`

        if(valor2 ==450){
            clearInterval(tempo2)
        }
    })

    const contador3 = document.getElementById("contador3")
    let valor3 =0

    let tempo3 = setInterval(()=>{
        valor3 +=1;
        contador3.innerHTML = `+ ${valor3}`

        if(valor3 ==100){
            clearInterval(tempo3)
        }
    })
