const observer = new IntersectionObserver((elements) => {
    elements.forEach((element) => {
        console.log(element);
        if (element.isIntersecting) {
            element.target.classList.add("show");
        } else {
            element.target.classList.remove("show");
        }
    });
});

const hiddenEles = document.querySelectorAll(".hidden");
console.log("Hello world!");
hiddenEles.forEach((el) => observer.observe(el));