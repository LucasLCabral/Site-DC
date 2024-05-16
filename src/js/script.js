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

slideShow();