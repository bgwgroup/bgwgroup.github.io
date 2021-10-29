window.addEventListener('DOMContentLoaded', () => {
    try{
        colouringCompetitionYear();
    }catch(error){}
});

window.addEventListener('scroll', () => {
    new ParallaxEffect('.scratch-and-win .horizontal-line');
});


function colouringCompetitionYear(){
    let coloringCompTableSpan = document.querySelector('.coloring-competition .coloring-table-row:nth-child(1) > span:nth-child(2)');
    coloringCompTableSpan.innerHTML = coloringCompTableSpan.innerHTML + " " + new Date().getFullYear();
}