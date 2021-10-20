const list1 = document.querySelector("#knowledgeof");
const list2 = document.querySelector("#languages");
const list3 = document.querySelector("#proglanguages");
const list4 = document.querySelector("#otherskills");
const form1 = document.querySelector("form");

function callback(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("uletk");
    }
  });
}

const options = {};

const myObserver = new IntersectionObserver(callback, options);

myObserver.observe(list1);
myObserver.observe(list2);
myObserver.observe(list3);
myObserver.observe(list4);
myObserver.observe(form1);
