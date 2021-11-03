['DOMContentLoaded','load'].forEach((event) => {
    window.addEventListener(event, () => {
        try{
            colouringCompetitionYear();
            favouriteSearchFilter();
            shopByToggleFacets();
        }catch(error){}
    });
});

window.addEventListener('scroll', () => {
    new ParallaxEffect('.scratch-and-win .horizontal-line');
});


/**
 * Add year object dynamically to CC
 */
function colouringCompetitionYear(){
    let coloringCompTableSpan = document.querySelector('.coloring-competition .coloring-table-row:nth-child(1) > span:nth-child(2)');
    coloringCompTableSpan.innerHTML = coloringCompTableSpan.innerHTML + " " + new Date().getFullYear();
}

/**
 * Search filter for wishlists
 */
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

/**
 * Facet Toggle Accordion
 */
function shopByToggleFacets(){
    let shopByButton = document.querySelector('.shop-by-button');
    shopByButton.addEventListener('click', () => {
        let facetWrapper = shopByButton.nextElementSibling;
        if(facetWrapper.style.maxHeight){
            facetWrapper.style.maxHeight = null;
        }else{
            facetWrapper.style.maxHeight = facetWrapper.scrollHeight + "px";
        }
    });
}