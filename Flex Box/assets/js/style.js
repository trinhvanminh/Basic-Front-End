
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const chart_items = entry.target.querySelectorAll('.chart-layout__item');
        if (entry.isIntersecting) {
            for(var i = 0; i < chart_items.length; i++){
                chart_items[i].classList.add('growth-animation');
            }
        }
        else {
            for(var i = 0; i < chart_items.length; i++){
                chart_items[i].classList.remove('growth-animation');
            }
        }
    });
});

observer.observe(document.querySelector('.chart-layout'));
