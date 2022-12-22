let spisok = document.querySelector('.main__first-string');
let knopka = document.querySelector('.main__show');
knopka.addEventListener('click', ()=>{
    spisok.classList.toggle('visible');
    let arrowKnopka = knopka.querySelector('img');
    arrowKnopka.classList.toggle('active');
    let spanKnopka = knopka.querySelector('span');
    if(arrowKnopka.classList.contains('active')){
        spanKnopka.textContent='Скрыть';
 }
 else{
    spanKnopka.textContent='Показать все';
 }



})
if (innerWidth<350){ 
var swiper = new Swiper(".mySwiper", {
slidesPerView:"auto",
   spaceBetween:16,
   pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },

 
  

})} else if(init){
    swiper.destroy()
};

