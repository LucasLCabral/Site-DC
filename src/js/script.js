function contador(){
    const contador1 = document.getElementById("contador1")
    let valor1 =0

    let tempo1 = setInterval(()=>{
        valor1 +=1;
        contador1.innerHTML = `+ ${valor1}`

        if(valor1 ==1934){
            clearInterval(tempo1)
        }
    })

    const contador2 = document.getElementById("contador2")
    let valor2 =0

    let tempo2 = setInterval(()=>{
        valor2 +=1;
        contador1.innerHTML = `+ ${valor2}`

        if(valor2 ==5000){
            clearInterval(tempo2)
        }
    })

    const contador3 = document.getElementById("contador3")
    let valor3 =0

    let tempo3 = setInterval(()=>{
        valor3 +=1;
        contador1.innerHTML = `+ ${valor3}`

        if(valor3 ==13){
            clearInterval(tempo3)
        }
    })

}
