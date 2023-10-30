/*CARROUSEL*/

const fotos = ['DSC01371.jpg', 'DSC01407.jpg', 'DSC01424.jpg', 'DSC01313.jpg', 'DSC_0384.jpg'];

let cont = 0;

function carrouSel(carrousel){

    carrousel.addEventListener('click', e => {

        let atras = carrousel.querySelector('.atras');
        let adelante = carrousel.querySelector('.adelante');

        let img = carrousel.querySelector('img');
        tgt = e.target;

        if(tgt == atras){

            if(cont > 0){

                img.src = fotos[cont - 1];
                cont--;

            } else {

                img.src = fotos[fotos.length -1];
                cont = fotos.length - 1;

            }

        } else if(tgt == adelante){

            if(cont < fotos.length - 1){

                img.src = fotos[cont + 1];
                cont++;

            } else {

                img.src = fotos[0];
                cont = 0;

            }

        }

    })

}

document.addEventListener("DOMContentLoaded", () => {

    let contenedorC = document.querySelector('.carrousel')

    carrouSel(contenedorC);
    
})