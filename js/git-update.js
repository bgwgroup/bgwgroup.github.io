['DOMContentLoaded',].forEach((event) => {
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

        new SherriffCareers();

        loadExternalScripts();

        new PlumbingPCN();
        new ElectricalPCN();
    });
});

['scroll'].forEach((event) => {
    window.addEventListener(event, () => {
        // scratch and win
        new ParallaxEffect('.scratch-and-win .horizontal-line');

        // Sherriff News and Promotion
        new ParallaxEffect('.news-promotions .top__news__content');
        new ParallaxEffect('.news-promotions .other__news__row .news__card');        
    });
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
        NewsAndPromotions.prototype.renderData(news, newsPromo);
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
        NewsAndPromotions.prototype.renderData(news, newsPromo);
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
        NewsAndPromotions.prototype.renderData(news, newsPromo); 
    })
    .catch((error) => {})
};
NewsAndPromotions.prototype.renderData = (data, container) => {
    let targetBlank = '';

    for(let i = 0; i < data.length; i++){
        if(data[i]['active'] == 'yes'){

            if(data[i]['external'] == 'true'){
                targetBlank = 'target="_blank"';
            }else{
                targetBlank = '';
            }

            let newsCard = document.createElement('div');
            newsCard.className = 'news-card';

            newsCard.innerHTML = 
            `
                <img alt="${data[i]['title']}" src="${data[i]['image']}" title="${data[i]['title']}">
                <div class="news-card-content">
                    <span>${data[i]['title']}</span>
                    <p>${data[i]['description']}</p>
                    <a href="${data[i]['link']}" ${targetBlank}>Learn More</a>
                </div>
            `;
            
            container.appendChild(newsCard);
        }
    }
};

/**
 * News and Promotions section on CNW Homepage
 */
function cnwHomepageNews(){
    let rightGridContent = document.querySelector('#news-promotion .right-grid-content');
    let targetBlank = '';

    if(typeof(rightGridContent) != undefined && rightGridContent != null){
        fetch(NewsData.cnwNews)
        .then((response) => { return response.json(); })
        .then((cnwNews) => {
            for(let i = 0; i < cnwNews.length; i++){
                if(cnwNews[i]['active'] == 'yes'){
                    if(cnwNews[i]['external'] == 'true'){
                        targetBlank = 'target="_blank"';
                    }else{
                        targetBlank = '';
                    }
    
                    let gridItem = document.createElement("li");
                    gridItem.className = "grid-item";
                    gridItem.innerHTML = 
                    `
                        <a class="grid-item-link" href="${cnwNews[i]['link']}">
                            <img class="grid-item-img" src="${cnwNews[i]['image']}">
                        </a>
                        <div class="grid-item-content">
                            <h3 class="grid-item-title">
                                <a href="${cnwNews[i]['link']}" ${targetBlank}>${cnwNews[i]['title']}</a>
                            </h3>
                            <p class="grid-item-paragraph">${cnwNews[i]['description']}</p>
                        </div>
                    `;
    
                    rightGridContent.appendChild(gridItem);                    
                }
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
    let targetBlank = '';

    if(typeof(newsCardInnerWrapper) != undefined && newsCardInnerWrapper != null){
        fetch(NewsData.sherriffNews)
        .then((response) => { return response.json(); })
        .then((sheNews) => {
            for(let i = 0; i < sheNews.length; i++){

                if(sheNews[i]['active'] == 'yes'){
                    if(sheNews[i]['external'] == 'true'){
                        targetBlank = 'target="_blank"';
                    }else{
                        targetBlank = '';
                    }
    
                    let newsCard = document.createElement("div");
                    newsCard.className = "news__card";
                    newsCard.innerHTML = 
                    `
                        <a href="${sheNews[i]['link']}" ${targetBlank}>
                            <img alt="Promo" src="${sheNews[i]['image']}">
                            <span>${sheNews[i]['title']}</span>
                        </a>
                    `;
    
                    newsCardInnerWrapper.appendChild(newsCard);                    
                }
            }
        })
        .catch((error) => {});
    }
}

/**
 * Sherriff Careers Page
 */
let index = 0;
function SherriffCareers(){
    this.init();
}
SherriffCareers.prototype.init = () => {
    SherriffCareers.prototype.renderBgImage('.careers-container .careers-bg-image');
    setInterval(SherriffCareers.prototype.animateImages.bind(this), 5000);
};
SherriffCareers.prototype.renderBgImage = (selector) => {
    let elem = document.querySelectorAll(selector);
    if(typeof(elem) != undefined || elem != null){
        for(let i = 0; i < elem.length; i++){
            let src = elem[i].getAttribute('data-image-src');
            elem[i].style.backgroundImage = `url("${src}")`;
        }
    }
};
SherriffCareers.prototype.animateImages = () => {
    let elem = document.querySelectorAll('.careers-container .slideshow .careers-bg-image');
    if(typeof(elem) != undefined || elem != null){
        let elemAnimate = 'animate-bg-image';
        try { 
            elem[0].classList.add(elemAnimate); 

            if (index >= elem.length || index <= -1) { 
                index = 0; 
              } 
              for (var i = 0; i < elem.length; i++) { 
                elem[i].classList.remove(elemAnimate); 
              } 
              index += 1; 
              elem[index - 1].classList.add(elemAnimate);              
        } 
        catch (err) { }       
    }
};

/**
 * Dynamically load external JS Scripts into HTML
 */
function loadExternalScripts(){
    // snapWidget
    let snapWidgetJS = document.createElement('script');
    snapWidgetJS.src = 'https://snapwidget.com/js/snapwidget.js';

    let widgetSection = document.querySelector('.home__section.widget-section');
    let widgetSectionHeader = document.querySelector('.home__section.widget-section h2');
    if(widgetSection != null && widgetSectionHeader != null){
        widgetSection.insertBefore(snapWidgetJS, widgetSectionHeader);
    }
}

/**
 * Samios PCN Data
 */
function PlumbingPCN(){
    this.init();
}
PlumbingPCN.prototype.init = () => {
    PlumbingPCN.prototype.fetchData();
    setTimeout(PlumbingPCN.prototype.searchFilterData.bind(this), 1000);
};
PlumbingPCN.prototype.fetchData = () => {

    let priceTableBody = document.querySelector('.price-table-body');

    if(priceTableBody != null){
        fetch('https://bgwgroup.com.au/samios_notifications/get-supplier-data.php')
        .then((response) => { return response.json(); })
        .then((pcn) => {
    
            for(let i = 0; i < pcn.length; i++){
    
                if(pcn[i]['archived'] == 'no'){
                    let priceTableRow = document.createElement('div');
                    priceTableRow.className = 'price-table-row';
                    priceTableRow.innerHTML = 
                    `
                        <span>${pcn[i]['supplier']}</span>
                        <span>${pcn[i]['month']}</span>
                        <span>${pcn[i]['price_rise']}</span>
                    `;
    
                    priceTableBody.appendChild(priceTableRow);
                }
            }
        })
        .catch((error) => {});
    }

};
PlumbingPCN.prototype.searchFilterData = () => {

    let priceSearch = document.querySelector('.price-notifications-search input');
    let priceTableRow = document.querySelectorAll('.price-table-row');

    document.addEventListener('keyup', (e) => {

        if(priceSearch != null && priceTableRow != null){

            let searchValue = e.srcElement.value.toLowerCase();

            for(let i = 0; i < priceTableRow.length; i++){

                let row = priceTableRow[i];
                let rowData = row.innerHTML.toLowerCase();

                if(rowData.indexOf(searchValue) > -1){
                    row.style.display = "";
                }else{
                    row.style.display = "none";
                }
            }
        }
    });
};

/**
 * CNW | Sherriff PCN Data
 */
let ElectricalPCNWrappers = {
    december2021: document.querySelector('.pcn-december2021'),
    november2021: document.querySelector('.pcn-november2021'),
    october2021: document.querySelector('.pcn-october2021'),
    september2021: document.querySelector('.pcn-september2021'),
    august2021: document.querySelector('.pcn-august2021'),
    july2021: document.querySelector('.pcn-july2021'),
    june2021: document.querySelector('.pcn-june2021'),
    may2021: document.querySelector('.pcn-may2021'),
    april2021: document.querySelector('.pcn-april2021'),
    march2021: document.querySelector('.pcn-march2021'),
    february2021: document.querySelector('.pcn-february2021'),
    january2021: document.querySelector('.pcn-january2021')
};
function ElectricalPCN(){
    this.init();
}
ElectricalPCN.prototype.init = () => {
    ElectricalPCN.prototype.fetchData();
    ElectricalPCN.prototype.renderData();
};
ElectricalPCN.prototype.fetchData = () => {
    fetch('https://bgwgroup.com.au/notifications/get-file-data.php')
    .then((response) => { return response.json(); })
    .then((pcn) => {
        for(let i = 0; i < pcn.length; i++){
            if(pcn[i]['status'] == 'visible'){
                ElectricalPCN.prototype.renderData(pcn[i],ElectricalPCNWrappers.december2021,"December-2021");
            }
        }
    })
    .catch((error) => {});
};
ElectricalPCN.prototype.renderData = (data, wrapper, filter) => {
    if(data['month'].includes(filter)){
        console.log(data['file_name']);
    }
};