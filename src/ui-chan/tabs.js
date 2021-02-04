import './styles/tabs.css';

class Tabs{
    constructor(container){
        this.container=container;
        this.tabs=container.querySelectorAll('.trigger');
    }
    init(){
        this.tabs.forEach(tab => {
            tab.addEventListener('click',e=>{
                this.toggleTabs(e);
                this.toggleContent(e);
            })
            
        });
    }
    toggleTabs(e){
        // remove class actives
        this.tabs.forEach(tab=>tab.classList.remove('active'));
        //a dd active to clicked tab
        e.target.classList.add('active');
    }
    toggleContent(e){
        //removeactives
        this.container.querySelectorAll('.content').forEach(item=>{
            item.classList.remove('active');
            // give active to one
        const selector=e.target.getAttribute('data-target');
        const content=this.container.querySelector(selector);
        content.classList.add('active');
        });
    }
}

export{ Tabs as default};