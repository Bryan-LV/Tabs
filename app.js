// UI controller
let panelTabs = document.querySelectorAll('.panelTab');
let panel = document.querySelectorAll('.panel');
// set up event listeners
setUpEventListeners();

function setUpEventListeners(){
    document.addEventListener('click', tabChange);
}

function tabChange(e){
    if(e.target.classList.contains('panelTab')){
        if(e.target.classList.contains('panelTab1')){
            removeShowPanel();
            panel[0].classList.add('showPanel');
            panel[0].style.visibility = 'visible';
        } else if(e.target.classList.contains('panelTab2')){
            removeShowPanel();
            panel[1].classList.add('showPanel');
            panel[1].style.visibility = 'visible';

        } else if(e.target.classList.contains('panelTab3')){
            removeShowPanel();
            panel[2].classList.add('showPanel');

        } else {
            return;
        }
    }
}

function removeShowPanel(){
    panel.forEach(function(current){
        current.classList.remove('showPanel');
        current.style.visibility = 'hidden';
    });
}