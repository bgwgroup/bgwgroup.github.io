['DOMContentLoaded'].forEach((event) => {
    window.addEventListener(event, () => {
        try{
            colouringCompetitionYear();
            favouriteSearchFilter();
        }catch(error){}

        shopByToggleFacets();

        renderBgImage('.news-promotions .top__news');
        renderBgImage('.news-promotions .other__news .news__card');
        
        new NewsAndPromotions();

        cnwHomepageNews();
        sherriffHomepageNews();
    });
});

window.addEventListener('scroll', () => {
    // scratch and win
    new ParallaxEffect('.scratch-and-win .horizontal-line');

    // Sherriff News and Promotion
    new ParallaxEffect('.news-promotions .top__news__content');
    new ParallaxEffect('.news-promotions .other__news__row .news__card');
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
    if(shopByButton != null){
        shopByButton.addEventListener('click', () => {
            let facetWrapper = shopByButton.nextElementSibling;
            if(facetWrapper.style.maxHeight){
                facetWrapper.style.maxHeight = null;
            }else{
                facetWrapper.style.maxHeight = facetWrapper.scrollHeight + "px";
            }
        });
    }
}

/**
 * Sherriff News and Promotions
 */
function renderBgImage(selector){
    let elem = document.querySelectorAll(selector);
    if(elem){
        for(let i = 0; i < elem.length; i++){
            let src = elem[i].getAttribute('data-image-src');
            elem[i].style.backgroundImage = "url('" + src + "')";
        }
    }
}

/**
 * News and Promotion Landing Page 
 */
let NewsData = {
    cnwNews: 'https://bgwgroup.github.io/data/cnw-news.json',
    samiosNews: 'https://bgwgroup.github.io/data/sam-news.json',
    sherriffNews: 'https://bgwgroup.github.io/data/she-news.json'
};

function NewsAndPromotions(){
    NewsAndPromotions.prototype.init();
}
NewsAndPromotions.prototype.init = () => {
    NewsAndPromotions.prototype.cnwNews();
    NewsAndPromotions.prototype.samiosNews();
    NewsAndPromotions.prototype.sherriffNews();
};
NewsAndPromotions.prototype.cnwNews = () => {
    let newsPromo = document.querySelector('.cnw-news-promo');

    fetch(NewsData.cnwNews)
    .then((response) => { 
        return response.json(); 
    })
    .then((news) => {
        for(let i = 0; i < news.length; i++){

            if(news[i]['active'] == 'yes'){

                let newsCard = document.createElement('div');
                newsCard.className = 'news-card';

                let newsCardImage = document.createElement('img');
                newsCardImage.src = news[i]['image'];

                let newsCardContent = document.createElement('div');
                newsCardContent.className = 'news-card-content';

                let newsCardContentTitle = document.createElement('span');
                newsCardContentTitle.innerHTML = news[i]['title'];

                let newsCardContentDescription = document.createElement('p');
                newsCardContentDescription.innerHTML = news[i]['description'];

                let newsCardLink = document.createElement('a');
                newsCardLink.setAttribute('href', news[i]['link']);
                if(news[i]['external'] == 'true'){
                    newsCardLink.setAttribute('target', '_blank');
                }
                newsCardLink.innerHTML = "Learn More";

                newsCardContent.appendChild(newsCardContentTitle);
                newsCardContent.appendChild(newsCardContentDescription);
                newsCardContent.appendChild(newsCardLink);

                newsCard.appendChild(newsCardImage);
                newsCard.appendChild(newsCardContent);

                newsPromo.appendChild(newsCard);
            }
        }        
    })
    .catch((error) => {})
};
NewsAndPromotions.prototype.samiosNews = () => {
    let newsPromo = document.querySelector('.samios-news-promo');

    fetch(NewsData.samiosNews)
    .then((response) => { 
        return response.json(); 
    })
    .then((news) => {
        for(let i = 0; i < news.length; i++){

            if(news[i]['active'] == 'yes'){

                let newsCard = document.createElement('div');
                newsCard.className = 'news-card';

                let newsCardImage = document.createElement('img');
                newsCardImage.src = news[i]['image'];

                let newsCardContent = document.createElement('div');
                newsCardContent.className = 'news-card-content';

                let newsCardContentTitle = document.createElement('span');
                newsCardContentTitle.innerHTML = news[i]['title'];

                let newsCardContentDescription = document.createElement('p');
                newsCardContentDescription.innerHTML = news[i]['description'];

                let newsCardLink = document.createElement('a');
                newsCardLink.setAttribute('href', news[i]['link']);
                if(news[i]['external'] == 'true'){
                    newsCardLink.setAttribute('target', '_blank');
                }
                newsCardLink.innerHTML = "Learn More";

                newsCardContent.appendChild(newsCardContentTitle);
                newsCardContent.appendChild(newsCardContentDescription);
                newsCardContent.appendChild(newsCardLink);

                newsCard.appendChild(newsCardImage);
                newsCard.appendChild(newsCardContent);

                newsPromo.appendChild(newsCard);
            }
        }        
    })
    .catch((error) => {})
};
NewsAndPromotions.prototype.sherriffNews = () => {
    let newsPromo = document.querySelector('.sherriff-news-promo');

    fetch(NewsData.sherriffNews)
    .then((response) => { 
        return response.json(); 
    })
    .then((news) => {
        for(let i = 0; i < news.length; i++){

            if(news[i]['active'] == 'yes'){

                let newsCard = document.createElement('div');
                newsCard.className = 'news-card';

                let newsCardImage = document.createElement('img');
                newsCardImage.src = news[i]['image'];

                let newsCardContent = document.createElement('div');
                newsCardContent.className = 'news-card-content';

                let newsCardContentTitle = document.createElement('span');
                newsCardContentTitle.innerHTML = news[i]['title'];

                let newsCardContentDescription = document.createElement('p');
                newsCardContentDescription.innerHTML = news[i]['description'];

                let newsCardLink = document.createElement('a');
                newsCardLink.setAttribute('href', news[i]['link']);
                if(news[i]['external'] == 'true'){
                    newsCardLink.setAttribute('target', '_blank');
                }
                newsCardLink.innerHTML = "Learn More";

                newsCardContent.appendChild(newsCardContentTitle);
                newsCardContent.appendChild(newsCardContentDescription);
                newsCardContent.appendChild(newsCardLink);

                newsCard.appendChild(newsCardImage);
                newsCard.appendChild(newsCardContent);

                newsPromo.appendChild(newsCard);
            }
        }        
    })
    .catch((error) => {})
};

/**
 * News and Promotions section on CNW Homepage
 */
function cnwHomepageNews(){
    let rightGridContent = document.querySelector('#news-promotion .right-grid-content');

    if(typeof(rightGridContent) != undefined && rightGridContent != null){
        fetch(NewsData.cnwNews)
        .then((response) => { return response.json(); })
        .then((cnwNews) => {
            for(let i = 0; i < cnwNews.length; i++){
                let gridItem = document.createElement("li");
                gridItem.className = "grid-item";

                let gridItemLink = document.createElement("a");
                gridItemLink.className = "grid-item-link";
                gridItemLink.setAttribute("href", cnwNews[i]['link']);

                let gridItemImage = document.createElement("img");
                gridItemImage.className = "grid-item-img";
                gridItemImage.src = cnwNews[i]["image"];

                gridItemLink.appendChild(gridItemImage);
                gridItem.appendChild(gridItemLink);

                let gridItemContent = document.createElement("div");
                gridItemContent.className = "grid-item-content";

                let gridItemTitle = document.createElement("h3");
                gridItemTitle.className = "grid-item-title";
                if(cnwNews[i]['external'] == 'true'){
                    gridItemTitle.innerHTML = "<a href="+cnwNews[i]['link']+" target='_blank'>"+cnwNews[i]['title']+"</a>";
                }else{
                    gridItemTitle.innerHTML = "<a href="+cnwNews[i]['link']+">"+cnwNews[i]['title']+"</a>";
                }

                let gridItemParagraph = document.createElement("p");
                gridItemParagraph.className = "grid-item-paragraph";
                gridItemParagraph.innerHTML = cnwNews[i]['description'];

                gridItemContent.appendChild(gridItemTitle);
                gridItemContent.appendChild(gridItemParagraph);

                gridItem.appendChild(gridItemContent);

                rightGridContent.appendChild(gridItem);
            }
        })
        .catch((error) => {});
    }
}

/**
 * News and Promotions section on Sherriff Homepage
 */
function sherriffHomepageNews(){
    let newsCardInnerWrapper = document.querySelector('.news__cards__inner__wrapper');

    if(typeof(newsCardInnerWrapper) != undefined && newsCardInnerWrapper != null){
        fetch(NewsData.sherriffNews)
        .then((response) => { return response.json(); })
        .then((sheNews) => {
            for(let i = 0; i < sheNews.length; i++){
                let newsCard = document.createElement("div");
                newsCard.className = "news__card";
                if(sheNews[i]['external'] == 'true'){
                    newsCard.innerHTML = "<a href="+sheNews[i]['link']+" target='_blank'><img alt='Promo' src="+sheNews[i]['image']+"><span>"+sheNews[i]['title']+"</span></a>";
                }else{
                    newsCard.innerHTML = "<a href="+sheNews[i]['link']+"><img alt='Promo' src="+sheNews[i]['image']+"><span>"+sheNews[i]['title']+"</span></a>";
                }

                newsCardInnerWrapper.appendChild(newsCard);
            }
        })
        .catch((error) => {});
    }
}