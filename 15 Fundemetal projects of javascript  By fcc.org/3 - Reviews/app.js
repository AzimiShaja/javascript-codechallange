// local reviews data
const reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img: 'https://www.course-api.com/images/people/person-1.jpeg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: 'https://www.course-api.com/images/people/person-2.jpeg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: 'https://www.course-api.com/images/people/person-4.jpeg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: 'https://www.course-api.com/images/people/person-3.jpeg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
  {
    id: 5,
    name: 'lisa smith',
    job: 'graphic designer',
    img: 'https://www.course-api.com/images/people/person-5.jpeg',
    text: "Cray poutine paleo chambray. Snackwave man bun tote bag, truffaut drinking vinegar craft beer lomo vaporware bicycle rights kitsch affogato kogi. Tbh pour-over flexitarian ramps prism tofu DIY meggings.",
  },
];

let reviewsCount = 0;

const photoUrl = document.getElementById('person-img');
const author = document.querySelector('.author');
const job = document.getElementById('job');
const text = document.getElementById('info');


const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

const randomSelection = document.querySelector('.random-btn');



window.addEventListener('DOMContentLoaded',function(){
  photoUrl.src = reviews[reviewsCount].img;
    author.textContent = reviews[reviewsCount].name;
    job.textContent = reviews[reviewsCount].job;
    text.textContent = reviews[reviewsCount].text;
});

nextBtn.addEventListener('click', function (){

  if  (reviewsCount <= reviews.length -1){
    reviewsCount++;
    photoUrl.src = reviews[reviewsCount].img;
    author.textContent = reviews[reviewsCount].name;
    job.textContent = reviews[reviewsCount].job;
    text.textContent = reviews[reviewsCount].text;
}
});

prevBtn.addEventListener('click', function (){

  if  (reviewsCount > 0){
    reviewsCount--;
    photoUrl.src = reviews[reviewsCount].img;
    author.textContent = reviews[reviewsCount].name;
    job.textContent = reviews[reviewsCount].job;
    text.textContent = reviews[reviewsCount].text;
}
});

randomSelection.addEventListener('click',function(){
  reviewsCount = Math.floor(Math.random() * reviews.length);

  photoUrl.src = reviews[reviewsCount].img;
  author.textContent = reviews[reviewsCount].name;
  job.textContent = reviews[reviewsCount].job;
  text.textContent = reviews[reviewsCount].text;


});