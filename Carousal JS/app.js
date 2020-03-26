const cSlide = document.querySelector('.carousel-slide');
const cImages = document.querySelectorAll('.carousel-slide img');



//buttons

const prevbtn = document.querySelector('#btnPrev');
const nextbtn = document.querySelector('#btnNext');


///Counter

let counter = 1;
const size = cImages[0].clientWidth;   //returns the original width of the image 


cSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';   // - sign to move the image to the right one

//button listeners

 nextbtn.addEventListener('click', () => {                   //()=> means function()
 	if(counter >= cImages.length - 1) return;		// not adding it causes the slides to go blank after finishing

 	cSlide.style.transition = "transform 1s ease-in-out";       //will move 1 second slower

 	counter++;
 	// console.log(counter);
 	cSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

 });

 prevbtn.addEventListener('click', () => {                   //()=> means function()
 	
 	if(counter <= 0) return;                              // not adding it causes the slides to go blank after finishing
	cSlide.style.transition = "transform 1s ease-in-out";       //will move 1 second slower

 	counter--;
 	// console.log(counter);
 	cSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

 });

 cSlide.addEventListener('transitionend', () => {                   // this function works when the lastclone picture is in container,
 																		//	 ends the transition and  -2 moves the picture from last clone
 																		//  to 2nd last meaning from photo no (-1) TO 6 whithin 7 pics
 																		// (-1) => (7) => (6) 

 	// console.log('Fired');

 	if (cImages[counter].id === 'lastClone'){
 		cSlide.style.transition = "none";
 		counter = cImages.length - 2 ;
 		cSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

 	}


 	if (cImages[counter].id === 'firstClone') {
 		cSlide.style.transition = "none";
 		counter = cImages.length - counter ;										// -counter minuses the previous length(counter) from 
 																					// total mage length
 		cSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

 	}

 });
 



