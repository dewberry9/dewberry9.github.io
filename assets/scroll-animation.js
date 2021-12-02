const allTargets = document.querySelectorAll('.rise-target');
var selectedTargets = new Array();

allTargets.forEach((element) => {
    if(element.getBoundingClientRect().top >= document.documentElement.clientHeight) {
        element.classList.add('sink-state')
        selectedTargets.push(element);
    }
});

const options = {
    root: null,
    rootMargin: '0px 0px 160px 0px',
    threshold: 0
}

const ScrollObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('rise-animated');
            observer.unobserve(entry.target);
        }
    });
}, options);

selectedTargets.forEach((element) => {
    ScrollObserver.observe(element);
});

var counter = 0;
document.querySelectorAll('.post-list-item').forEach((element) => {
    if(counter === 1) {
        element.classList.add('second-position');
        counter++;
    } else if(counter === 2) {
        element.classList.add('third-position');
        counter = 0;
    } else {
        counter++;
    }
});