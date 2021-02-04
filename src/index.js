import Tooltip from './ui-chan/tooltip';
import Dropdown from './ui-chan/dropdown';
import Tabs from './ui-chan/tabs';
import Snackbar from './ui-chan/snackbar';

// create tooltip
const tooltip =new Tooltip(document.querySelector('.tooltip'));
tooltip.init();

// create dropdown
const dropdowns=document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown=>{
    const instance=new Dropdown(dropdown);
    instance.init();
});

//crate tabs
const tabs=new Tabs(document.querySelector('.tabs'));
tabs.init();

//crate snackbar
const snackbar=new Snackbar();
snackbar.init();

const button=document.querySelector('button');
button.addEventListener('click',()=>{
    snackbar.show('You clicked me motherfucker');
});

