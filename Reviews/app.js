//local reviews data
const reviews = [
    {//uses zero, statrs with 0 (array)
      id: 1,
      name: 'susan smith',
      job: 'web developer',
      img: 'https://www.course-api.com/images/people/person-1.jpeg',
      text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {//1
      id: 2,
      name: 'anna johnson',
      job: 'web designer',
      img: 'https://www.course-api.com/images/people/person-2.jpeg',
      text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {//2
      id: 3,
      name: 'peter jones',
      job: 'intern',
      img: 'https://www.course-api.com/images/people/person-4.jpeg',
      text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {//3
      id: 4,
      name: 'bill anderson',
      job: 'the boss',
      img: 'https://www.course-api.com/images/people/person-3.jpeg',
      text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
  ];

let currentItem = 0;
  //console.log(reviews[currentItem])

//creating constant values
const img = document.getElementById("person-img")
const author = document.getElementById("author")
const job = document.getElementById("job")
const info = document.getElementById("info")

const prevBtn = document.querySelector(".prev-btn")
const nextBtn = document.querySelector(".next-btn")
const randomBtn = document.querySelector(".random-btn")

//Loading items for the web application
window.addEventListener('DOMContentLoaded', () => {
  console.log('I am now loaded')
  //changing the content of the window
  showPerson(currentItem)
})

showPerson = (index) => {
  const item = reviews[index]
  img.src = item.img //reviews[index].img
  author.textContent = item.name //reviews[index].name
  job.textContent = item.job //reviews[index].job
  info.textContent = item.text //reviews[index].text
}

//img.src = reviews[currentItem].img
//author.textContent = reviews[currentItem].name

//Button Controllers
prevBtn.addEventListener('click', () => {
  console.log("Previous Button is Clicked")
    currentItem--
    if(currentItem < 0){
      currentItem = reviews.length - 1
    }
    showPerson(currentItem)
})

nextBtn.addEventListener('click', () => {
  console.log("Next Button is Clicked")
    currentItem++
    if(currentItem > reviews.length - 1){
      currentItem = 0
    }
    showPerson(currentItem)
})

randomBtn.addEventListener('click', () => {
  console.log("Random Button is Clicked")
    currentItem = Math.floor(Math.random() * reviews.length) //or can be 4
    showPerson(currentItem)
})

