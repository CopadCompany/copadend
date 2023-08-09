
const verMas = document.getElementById('display');
const efect1 = document.getElementById('efect1');
const efect2 = document.getElementById('efect2');
const cardChange = document.getElementById('cardChange');

verMas.addEventListener('click', function(event){
    if(efect1.classList.contains('visible')){
    efect1.classList.remove('visible');
    efect1.classList.add('none');
    efect2.classList.remove('none');
    efect2.classList.add('visible');
    cardChange.style.background = 'rgba(46, 73, 153, 0.8)';
    } else if (efect2.classList.contains('visible')){
        efect2.classList.remove('visible');
        efect2.classList.add('none');
        efect1.classList.remove('none');
        efect1.classList.add('visible');
        cardChange.style.background = 'black';
    }
    
});

const verMas2 = document.getElementById('display_2');
const efect12 = document.getElementById('efect1_2');
const efect22 = document.getElementById('efect2_2');
const cardChange2 = document.getElementById('cardChange2');

verMas2.addEventListener('click', function(event){
    if(efect12.classList.contains('visible')){
    efect12.classList.remove('visible');
    efect12.classList.add('none');
    efect22.classList.remove('none');
    efect22.classList.add('visible');
    cardChange2.style.background = 'rgba(46, 73, 153, 0.8)';
    } else if (efect22.classList.contains('visible')){
        efect22.classList.remove('visible');
        efect22.classList.add('none');
        efect12.classList.remove('none');
        efect12.classList.add('visible');
        cardChange2.style.background = 'black';
    }
    
});

const verMas3 = document.getElementById('display_3');
const efect13 = document.getElementById('efect1_3');
const efect23 = document.getElementById('efect2_3');
const cardChange3 = document.getElementById('cardChange3');

verMas3.addEventListener('click', function(event){
    if(efect13.classList.contains('visible')){
    efect13.classList.remove('visible');
    efect13.classList.add('none');
    efect23.classList.remove('none');
    efect23.classList.add('visible');
    cardChange3.style.background = 'rgba(46, 73, 153, 0.8)';
    } else if (efect23.classList.contains('visible')){
        efect23.classList.remove('visible');
        efect23.classList.add('none');
        efect13.classList.remove('none');
        efect13.classList.add('visible');
        cardChange3.style.background = 'black';
    }
    
});


const verMas4 = document.getElementById('display_4');
const efect14 = document.getElementById('efect1_4');
const efect24 = document.getElementById('efect2_4');
const cardChange4 = document.getElementById('cardChange4');

verMas4.addEventListener('click', function(event){
    if(efect14.classList.contains('visible')){
    efect14.classList.remove('visible');
    efect14.classList.add('none');
    efect24.classList.remove('none');
    efect24.classList.add('visible');
    cardChange4.style.background = 'rgba(46, 73, 153, 0.8)';
    } else if (efect24.classList.contains('visible')){
        efect24.classList.remove('visible');
        efect24.classList.add('none');
        efect14.classList.remove('none');
        efect14.classList.add('visible');
        cardChange4.style.background = 'black';
    }
    
});



  



