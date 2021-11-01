window.addEventListener('DOMContentLoaded', () => {
    try{
        colouringCompetitionYear();
        favouriteSearchFilter();
    }catch(error){}
});

window.addEventListener('scroll', () => {
    new ParallaxEffect('.scratch-and-win .horizontal-line');
});


function colouringCompetitionYear(){
    let coloringCompTableSpan = document.querySelector('.coloring-competition .coloring-table-row:nth-child(1) > span:nth-child(2)');
    coloringCompTableSpan.innerHTML = coloringCompTableSpan.innerHTML + " " + new Date().getFullYear();
}
function favouriteSearchFilter(){
    let favSeachForm = document.querySelector('.fav-list-search-filter #favListSearchFilter');
    let favGridItem = document.querySelectorAll('#favourite_list .fav_grid');

    favSeachForm.addEventListener('keyup', () => {
        let favSearchFormValue = favSeachForm.value.toUpperCase();
        for(let i = 0; i < favGridItem.length; i++){
            let textValue = favGridItem[i].textContent || favGridItem[i].innerText[i];
            if(textValue.toUpperCase().indexOf(favSearchFormValue) > -1){
                favGridItem[i].style.display = "";
            }else{
                favGridItem[i].style.display = "none";
            }
        } 
    });
}