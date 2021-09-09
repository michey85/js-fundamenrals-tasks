class Collapser {
    constructor(target){
        this.collapsers = document.getElementsByClassName(target);
        this.init();
    }
    init() {
        for(let i = 0; i < this.collapsers.length; i++) {
            this.collapsers[i].addEventListener('click', function () {
                this.classList.toggle('active');
                const content = this.nextElementSibling;
                
                if (content.style.display === 'block') {
                    content.style.display = 'none';
                } else {
                    content.style.display = 'block';
                }
            });
        }
    }
}

new Collapser('collapsible');
new Collapser('collapsible2');