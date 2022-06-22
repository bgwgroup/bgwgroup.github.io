if ($('form#command .cust-loginregbtn').length > 0) {
    $("form#command .cust-loginregbtn").removeClass("cust-loginregbtn");
}

/**
 * PLP Page Slider Display
 */

function checkPLPPromoBannerURL(urlOne = '', urlTwo = '') {
    if (urlOne != undefined || urlTwo != undefined) {
        return (location.href.match(urlOne) || location.href.match(urlTwo)) ? true : false;
    }
}

function OneCategoryBanner(args) {

    let plpgridright = document.querySelector('.plp-grid-right');
    let productGridRightResultSlot = document.querySelector('.product-grid-right-result-slot');

    let oneCategory = checkPLPPromoBannerURL(args.cat, args.cat);

    if (oneCategory) {

        let promoBannerContainer = document.createElement('div');
        promoBannerContainer.className = 'plp-promo-banner-container';

        let promoBannerImg = document.createElement('img');
        promoBannerImg.src = args.img;
        promoBannerContainer.appendChild(promoBannerImg);

        plpgridright.insertBefore(promoBannerContainer, productGridRightResultSlot);
    }

}

let ThreeMCategories = {
    cat: /%3Acnw_brands%3A3M/gi,
    img: '/medias/plp-banner.jpg?context=bWFzdGVyfGltYWdlc3w0OTc4NDR8aW1hZ2UvanBlZ3xoYzEvaGY0Lzk4MDU4MDU3MTU0ODYvcGxwLWJhbm5lci5qcGd8NDVlZjM2M2NmYjJhOGRiNzYwYmZlMDAzOTA2NzE1ODZmYzQ5OGYyZGQ3OTU3NWQwNjVlZTc3YmY0YmE0ZmE3Mg'
};

let MajorTechCategories = {
    cat: /major\+tech/gi,
    img: '/medias/Major-Tech-CNW-Hero-Slider.jpg?context=bWFzdGVyfGltYWdlc3w4NzA1MDh8aW1hZ2UvanBlZ3xoOTYvaDEwLzk4MDcyMTg1MDc4MDYvTWFqb3IgVGVjaCAtIENOVyAtIEhlcm8gU2xpZGVyLmpwZ3wxYzc3NTJlNjU1OGFkNWExYzk3YWZiNDY5MjVjZDhjMTcxNjcxOTY5MmRlY2FiNjU2ZGZlZjJlMzJkYmY1NTcx'
};

let NHPSwitchOnOff = {
    cat: /=nhp/gi,
    img: '/medias/557330-NHP-CNW-March-Promotion-728x90-Leaderboard-FA.gif?context=bWFzdGVyfGltYWdlc3w1MjE0NHxpbWFnZS9naWZ8aGJmL2hkMS85ODEzMDY4MzQ5NDcwLzU1NzMzMCBOSFAgQ05XIE1hcmNoIFByb21vdGlvbl83Mjh4OTBfTGVhZGVyYm9hcmRfRkEuZ2lmfDM1YmJlMzYxYzIxOTJkMGI2MjRhZWNiNTM4MzEzMGFiZDRmMzlmMzFiMDU0OWFkNzg3YjY2ZWMwOWMzNWM2OTY'
};

['DOMContentLoaded'].forEach((event) => {
    window.addEventListener(event, () => {

        addToFavouritesSelector();

        try {
            colouringCompetitionYear();
        } catch (error) {}

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

        OneCategoryBanner(ThreeMCategories);
        OneCategoryBanner(MajorTechCategories);
        OneCategoryBanner(NHPSwitchOnOff);

        removeBrandsClassCategoryFacets();
    });
});

['scroll'].forEach((event) => {
    window.addEventListener('scroll', () => {

        isElementInViewOnScroll('.animate-in-view');

        // scratch and win
        new ParallaxEffect('.scratch-and-win .horizontal-line');

        // Sherriff News and Promotion
        new ParallaxEffect('.news-promotions .top__news__content');
        new ParallaxEffect('.news-promotions .other__news__row .news__card');

        // Sherriff SIP
        new ParallaxEffect('.sip__container .vertical-line');
        new ParallaxEffect('.sip__container .horizontal-line');

        // Sherriff iQ Lighting
        new ParallaxEffect('.iq__lighting .horizontal-line');

        // Footy Tipping
        new ParallaxEffect('.footy-parallax');

    });
});

/**
 * add favorites selector to add to favourites button before page load
 */
function addToFavouritesSelector() {
    let addToWishlistIcon = document.querySelector('.add-to-wishlist-icon');
    if (addToWishlistIcon != undefined) {
        addToWishlistIcon.classList.add('favorites');
    }
}

/**
 * Add year object dynamically to CC
 */
function colouringCompetitionYear() {
    let coloringCompTableSpan = document.querySelector('.coloring-competition .coloring-table-row:nth-child(1) > span:nth-child(2)');
    coloringCompTableSpan.innerHTML = coloringCompTableSpan.innerHTML + " " + new Date().getFullYear();
}


/**
 * Facet Toggle Accordion
 */
function shopByToggleFacets() {

    let shopByButton = document.querySelector('.shop-by-button');
    if (shopByButton != null) {
        shopByButton.addEventListener('click', () => {
            let facetWrapper = shopByButton.nextElementSibling;
            if (facetWrapper.style.maxHeight) {
                facetWrapper.style.maxHeight = null;
            } else {
                facetWrapper.style.maxHeight = facetWrapper.scrollHeight + "px";
            }
        });
    }
}

/**
 * Sherriff News and Promotions
 */
function renderBgImage(selector) {
    let elem = document.querySelectorAll(selector);
    if (elem) {
        for (let i = 0; i < elem.length; i++) {
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

function NewsAndPromotions() {
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

    for (let i = 0; i < data.length; i++) {
        if (data[i]['active'] == 'yes') {

            if (data[i]['external'] == 'true') {
                targetBlank = 'target="_blank"';
            } else {
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
function cnwHomepageNews() {
    let rightGridContent = document.querySelector('#news-promotion .right-grid-content');
    let targetBlank = '';

    if (typeof(rightGridContent) != undefined && rightGridContent != null) {
        fetch(NewsData.cnwNews)
            .then((response) => { return response.json(); })
            .then((cnwNews) => {
                for (let i = 0; i < cnwNews.length; i++) {
                    if (cnwNews[i]['active'] == 'yes') {
                        if (cnwNews[i]['external'] == 'true') {
                            targetBlank = 'target="_blank"';
                        } else {
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
function sherriffHomepageNews() {
    let newsCardInnerWrapper = document.querySelector('.news__cards__inner__wrapper');
    let targetBlank = '';

    if (typeof(newsCardInnerWrapper) != undefined && newsCardInnerWrapper != null) {
        fetch(NewsData.sherriffNews)
            .then((response) => { return response.json(); })
            .then((sheNews) => {
                for (let i = 0; i < sheNews.length; i++) {

                    if (sheNews[i]['active'] == 'yes') {
                        if (sheNews[i]['external'] == 'true') {
                            targetBlank = 'target="_blank"';
                        } else {
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

function SherriffCareers() {
    this.init();
}
SherriffCareers.prototype.init = () => {
    SherriffCareers.prototype.renderBgImage('.careers-container .careers-bg-image');
    setInterval(SherriffCareers.prototype.animateImages.bind(this), 5000);
};
SherriffCareers.prototype.renderBgImage = (selector) => {
    let elem = document.querySelectorAll(selector);
    if (typeof(elem) != undefined || elem != null) {
        for (let i = 0; i < elem.length; i++) {
            let src = elem[i].getAttribute('data-image-src');
            elem[i].style.backgroundImage = `url("${src}")`;
        }
    }
};
SherriffCareers.prototype.animateImages = () => {
    let elem = document.querySelectorAll('.careers-container .slideshow .careers-bg-image');
    if (typeof(elem) != undefined || elem != null) {
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
        } catch (err) {}
    }
};

/**
 * Dynamically load external JS Scripts into HTML
 */
function loadExternalScripts() {
    // snapWidget
    let snapWidgetJS = document.createElement('script');
    snapWidgetJS.src = 'https://snapwidget.com/js/snapwidget.js';

    let widgetSection = document.querySelector('.home__section.widget-section');
    let widgetSectionHeader = document.querySelector('.home__section.widget-section h2');
    if (widgetSection != null && widgetSectionHeader != null) {
        widgetSection.insertBefore(snapWidgetJS, widgetSectionHeader);
    }
}

/**
 * Samios PCN Data
 */
function PlumbingPCN() {
    this.init();
}
PlumbingPCN.prototype.init = () => {
    PlumbingPCN.prototype.fetchData();
    setTimeout(PlumbingPCN.prototype.searchFilterData.bind(this), 1000);
};
PlumbingPCN.prototype.fetchData = () => {

    let priceTableBody = document.querySelector('.price-table-body');

    if (priceTableBody != null) {
        fetch('https://bgwgroup.com.au/samios_notifications/get-supplier-data.php')
            .then((response) => { return response.json(); })
            .then((pcn) => {

                for (let i = 0; i < pcn.length; i++) {

                    if (pcn[i]['archived'] == 'no') {
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

        if (priceSearch != null && priceTableRow != null) {

            let searchValue = e.srcElement.value.toLowerCase();

            for (let i = 0; i < priceTableRow.length; i++) {

                let row = priceTableRow[i];
                let rowData = row.innerHTML.toLowerCase();

                if (rowData.indexOf(searchValue) > -1) {
                    row.style.display = "";
                } else {
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
    december2022: document.querySelector('.pcn-december2022'),
    november2022: document.querySelector('.pcn-november2022'),
    october2022: document.querySelector('.pcn-october2022'),
    september2022: document.querySelector('.pcn-september2022'),
    august2022: document.querySelector('.pcn-august2022'),
    july2022: document.querySelector('.pcn-july2022'),
    june2022: document.querySelector('.pcn-june2022'),
    may2022: document.querySelector('.pcn-may2022'),
    april2022: document.querySelector('.pcn-april2022'),
    march2022: document.querySelector('.pcn-march2022'),
    february2022: document.querySelector('.pcn-february2022'),
    january2022: document.querySelector('.pcn-january2022'),
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
    january2021: document.querySelector('.pcn-january2021'),
};

function ElectricalPCN() {
    this.init();
}
ElectricalPCN.prototype.init = () => {
    ElectricalPCN.prototype.fetchData();
    ElectricalPCN.prototype.renderData();
    ElectricalPCN.prototype.getCurrentYear();
    ElectricalPCN.prototype.collapsePCNContent();
};
ElectricalPCN.prototype.fetchData = () => {

    fetch('https://bgwgroup.com.au/notifications/get-file-data.php')
        .then((response) => { return response.json(); })
        .then((pcn) => {
            for (let i = 0; i < pcn.length; i++) {
                if (pcn[i]['status'] == 'visible') {
                    ElectricalPCN.prototype.renderData(pcn[i], ElectricalPCNWrappers.december2022, "December-2022");
                    ElectricalPCN.prototype.renderData(pcn[i], ElectricalPCNWrappers.november2022, "November-2022");
                    ElectricalPCN.prototype.renderData(pcn[i], ElectricalPCNWrappers.october2022, "October-2022");
                    ElectricalPCN.prototype.renderData(pcn[i], ElectricalPCNWrappers.september2022, "September-2022");
                    ElectricalPCN.prototype.renderData(pcn[i], ElectricalPCNWrappers.august2022, "August-2022");
                    ElectricalPCN.prototype.renderData(pcn[i], ElectricalPCNWrappers.july2022, "July-2022");
                    ElectricalPCN.prototype.renderData(pcn[i], ElectricalPCNWrappers.june2022, "June-2022");
                    ElectricalPCN.prototype.renderData(pcn[i], ElectricalPCNWrappers.may2022, "May-2022");
                    ElectricalPCN.prototype.renderData(pcn[i], ElectricalPCNWrappers.april2022, "April-2022");
                    ElectricalPCN.prototype.renderData(pcn[i], ElectricalPCNWrappers.march2022, "March-2022");
                    ElectricalPCN.prototype.renderData(pcn[i], ElectricalPCNWrappers.february2022, "February-2022");
                    ElectricalPCN.prototype.renderData(pcn[i], ElectricalPCNWrappers.january2022, "January-2022");

                    ElectricalPCN.prototype.renderData(pcn[i], ElectricalPCNWrappers.december2021, "December-2021");
                    ElectricalPCN.prototype.renderData(pcn[i], ElectricalPCNWrappers.november2021, "November-2021");
                    ElectricalPCN.prototype.renderData(pcn[i], ElectricalPCNWrappers.october2021, "October-2021");
                    ElectricalPCN.prototype.renderData(pcn[i], ElectricalPCNWrappers.september2021, "September-2021");
                    ElectricalPCN.prototype.renderData(pcn[i], ElectricalPCNWrappers.august2021, "August-2021");
                    ElectricalPCN.prototype.renderData(pcn[i], ElectricalPCNWrappers.july2021, "July-2021");
                    ElectricalPCN.prototype.renderData(pcn[i], ElectricalPCNWrappers.june2021, "June-2021");
                    ElectricalPCN.prototype.renderData(pcn[i], ElectricalPCNWrappers.may2021, "May-2021");
                    ElectricalPCN.prototype.renderData(pcn[i], ElectricalPCNWrappers.april2021, "April-2021");
                    ElectricalPCN.prototype.renderData(pcn[i], ElectricalPCNWrappers.march2021, "March-2021");
                    ElectricalPCN.prototype.renderData(pcn[i], ElectricalPCNWrappers.february2021, "February-2021");
                    ElectricalPCN.prototype.renderData(pcn[i], ElectricalPCNWrappers.january2021, "January-2021");
                }
            }
        })
        .catch((error) => {});
};
ElectricalPCN.prototype.renderData = (data, wrapper, filter) => {
    if (data != undefined || data != null) {
        if (data['file_name'].includes(filter)) {

            let a = document.createElement('a');
            a.setAttribute('href', data['file_location']);
            a.setAttribute('title', data['file_name']);
            a.setAttribute('target', '_blank');
            a.innerHTML = data['file_name'];

            try {
                wrapper.children[1].appendChild(a);
            } catch (error) {}
        }
    }
};
ElectricalPCN.prototype.getCurrentYear = () => {
    let pcnYear = document.querySelector('.pcn .pcn-year');
    if (pcnYear != undefined) {
        pcnYear.innerHTML = new Date().getFullYear();
    }
};
ElectricalPCN.prototype.collapsePCNContent = () => {
    let pcnTitle = document.querySelectorAll('.pcn .pcn-content-wrapper .pcn-data > div > span');
    if (pcnTitle != null) {
        for (let i = 0; i < pcnTitle.length; i++) {
            pcnTitle[i].addEventListener('click', () => {

                pcnTitle[i].classList.toggle('pcn-collapsed');
                let pcnContent = pcnTitle[i].nextElementSibling;

                if (pcnContent.style.maxHeight) {
                    pcnContent.style.maxHeight = null;
                } else {
                    pcnContent.style.maxHeight = panel.scrollHeight + "px";
                }
            });
        }
    }
};


/**
 * Pagination clone - temp hack
 */



if ($("#samBody")[0]) {
    $('#samBody .search-grid-page-result-grid-component').addClass('pagination-account');
} else {
    if ($(".page-productGrid")[0]) {
        $(".pagination-bar").clone().insertAfter("#resultsList");
    }

    if ($(".page-search")[0]) {
        if ($(".product__grid")[0]) {
            $(".pagination-bar").clone().insertAfter(".product__grid");
        } else {
            $(".pagination-bar").clone().insertAfter("#resultsList");
        }
    }
}

/**
 * Element in View function
 */
function isElementInViewOnScroll(selector) {
    let animateSelector = 'scroll-in-view';
    let elementList = document.querySelectorAll(selector);
    if (elementList != undefined) {
        for (let i = 0; i < elementList.length; i++) {

            let bounds = elementList[i].getBoundingClientRect();
            let elemTop = bounds.top;

            let pageTop = elemTop + (window.innerHeight * (50 / 100));

            if (pageTop >= 0) {
                elementList[i].classList.add(animateSelector);
            } else {
                elementList[i].classList.remove(animateSelector);
            }
        }
    }
}

/**
 * JS hack that will delete the random BrandsClassCategory on page load
 */
function removeBrandsClassCategoryFacets() {
    let facetWrapper = document.querySelector('#bgwtBody .facet-wrapper');
    let facetLinks = document.querySelectorAll('#bgwtBody .facet-wrapper .facet_link');
    for (let i = 0; i < facetLinks.length; i++) {
        if (facetLinks[i].innerHTML === "Brands") {
            // delete node that contains rogue BrandsClassCategory
            facetWrapper.removeChild(facetLinks[i].parentElement.parentElement);
        }
    }
}

/**
 * Search filter for wishlists
 */

$(document).ready(function() {
    // temporary code until code change is deployed to P1
    var favouritesSearchForm = $('.fav-list-search-filter #favListSearchFilter');

    $('body').on('keyup', function() {
        try {
            var formValue = favouritesSearchForm.val().toLowerCase();

            $('#favourite_list .fav_grid').each(function() {

                $(this).filter(function() {
                    $(this).toggle($(this).text().toLowerCase().indexOf(formValue) > -1);
                });
            });
        } catch (error) {}
    });

});

/**
 * Samios Double Dip Point Search API
 */
window.addEventListener('DOMContentLoaded', () => {

    let pointSearch = document.querySelector('.dip-points-search input');
    let pointResults = document.querySelector('.dip-points-search-results');
    let loadingSpin = document.querySelector('.dip-search-loader');

    let nameSpan = document.createElement('span');
    let pointSpan = document.createElement('span');

    if (pointSearch != undefined) {
        pointSearch.addEventListener('keyup', () => {
            let accountNumber = pointSearch.value;
            if (accountNumber.length >= 2) {
                fetch('https://bgwgroup.com.au/rheem-avg-points/get-rheem-points.php?account=' + accountNumber)
                    .then((response) => {
                        return response.json();
                    })
                    .then((points) => {

                        for (let i = 0; i < points.length; i++) {
                            nameSpan.innerHTML = points[i]['name'];
                            pointSpan.innerHTML = '<strong>' + points[i]['remaining_points'] + '</strong> points';
                        }

                        if (pointResults.children.length === 0) {
                            setTimeout(function() {
                                pointResults.appendChild(nameSpan);
                                pointResults.appendChild(pointSpan);
                            }, 800);
                        }
                    })
                    .catch((error) => {});
            } else {
                try {
                    loadingSpin.style.display = 'none';
                    pointResults.removeChild(nameSpan);
                    pointResults.removeChild(pointSpan);
                    pointResults.innerHTML = "";
                } catch (err) {}
            }
        });
    }
});

/**
 * CNW Clipsal Iconic Outdoor padding top 
 */
['load', 'resize'].forEach((event) => {
    window.addEventListener(event, () => {
        try {
            let header = document.querySelector('#cnwBody .headerContent');
            let headerBounds = header.getBoundingClientRect();

            let newIconicOutdoorRangeImage = document.querySelector('.page-clipsaliconicoutdoorpage .hero .container .hero-left img:nth-child(1)');
            let outdoorLikeNeverSeenBeforeImage = document.querySelector('.page-clipsaliconicoutdoorpage .hero .container .hero-right img:first-of-type');

            newIconicOutdoorRangeImage.style.top = Math.ceil(headerBounds.height) + 'px';
            outdoorLikeNeverSeenBeforeImage.style.top = Math.ceil(headerBounds.height) + 'px';
        } catch (err) {}
    });
});

/**
 * Sherriff Clipsal Iconic Outdoor padding top 
 */
['load', 'resize'].forEach((event) => {
    window.addEventListener(event, () => {
        try {
            let header = document.querySelector('#sheBody .headerContent');
            let headerBounds = header.getBoundingClientRect();

            let newIconicOutdoorRangeImage = document.querySelector('.page-sheclipsaliconicoutdoorpage .hero .container .hero-left img:nth-child(1)');
            let outdoorLikeNeverSeenBeforeImage = document.querySelector('.page-sheclipsaliconicoutdoorpage .hero .container .hero-right img:first-of-type');
            newIconicOutdoorRangeImage.style.top = Math.ceil(headerBounds.height) + 'px';
            outdoorLikeNeverSeenBeforeImage.style.top = Math.ceil(headerBounds.height) + 'px';
        } catch (err) {}
    });
});


/**
 * Nick START temp fix
 */
let getBreadcrumbs = document.querySelectorAll(".breadcrumb li");
let countBreadcrumbs = getBreadcrumbs.length;

let pageBody = document.querySelector("body");
let currentPage = document.querySelector(".breadcrumb li:nth-last-child(2) a");

let currentPageNoLink = document.querySelector(".breadcrumb li:last-child a");

if (typeof currentPage != "undefined" && currentPage != null) {
  if (countBreadcrumbs > 2) {
    // page contains more than 2 breadcrumbs
    currentPage = currentPage.innerText
      .replace(/[^a-zA-Z0-9]/g, "")
      .replace(/[0-9]/g, "")
      .toLowerCase();
    pageBody.classList.add(`pageLabel-${currentPage}`);
  } else {
    // page contains less than 3 breadcrumbs
    currentPageNoLink = currentPageNoLink.innerText
      .replace(/[^a-zA-Z0-9]/g, "")
      .replace(/[0-9]/g, "")
      .toLowerCase();
    pageBody.classList.add(`pageLabel-${currentPageNoLink}`);
  }
}

$(function () {
    var Accordion = function (el, multiple) {
      this.el = el || {};
      this.multiple = multiple || false;
  
      var links = this.el.find(".link");
      links.on("click", { el: this.el, multiple: this.multiple }, this.dropdown);
    };
  
    Accordion.prototype.dropdown = function (e) {
      var $el = e.data.el;
      ($this = $(this)), ($next = $this.next());
  
      $next.slideToggle();
      $this.parent().toggleClass("open");
  
      if (!e.data.multiple) {
        $el.find(".submenu").not($next).slideUp().parent().removeClass("open");
      }
    };
  
    var accordion = new Accordion($("#sidenav-accordion"), false);
  });

  $(".addNewPaymentMethod").click(function () {
    $("#savePaymentCardForm").stop().slideToggle("slow");
  });

  try {
    const checkoutCartTotalItems = document.querySelector(
      ".checkoutCartTotalItems"
    );
    document.querySelectorAll("#cartProducts table tbody tr").forEach((item) => {
      if (item.innerHTML.trim().length == 0) {
        item.remove();
      }
    });
    const checkoutTotalCartItems = document.querySelectorAll(
      "#cartProducts table tbody tr"
    );
  
    checkoutCartTotalItems.innerHTML = `${checkoutTotalCartItems.length} Items`; //make sure to update after remove or update cart qty
  } catch (error) {}

  try {
    const scaffoldFrontModal = document.querySelectorAll(".scaffoldFrontModal");
    const scaffoldFrontModalClose = document.querySelectorAll(
      ".scaffoldFrontModalClose"
    );
    const scaffoldFrontModalOverlay = document.querySelectorAll(
      ".scaffoldFrontModalOverlay"
    );
  
    // Modal Request Quote
    try {
      const scaffoldOpenModalRequestQuote = document.querySelector(
        "#scaffoldOpenModalRequestQuote"
      );
      const scaffoldModalRequestQuote = document.querySelector(
        "#scaffoldModalRequestQuote"
      );
      scaffoldOpenModalRequestQuote.addEventListener("click", () => {
        scaffoldModalRequestQuote.classList.add("scaffoldFrontModalOpen");
      });
    } catch (error) {}
  
    // Modal Add Non Cat Item
    try {
      const scaffoldOpenModalAddNonCat = document.querySelector(
        "#scaffoldOpenModalAddNonCat"
      );
      const scaffoldModalAddNonCat = document.querySelector(
        "#scaffoldModalAddNonCat"
      );
      scaffoldOpenModalAddNonCat.addEventListener("click", () => {
        scaffoldModalAddNonCat.classList.add("scaffoldFrontModalOpen");
      });
    } catch (error) {}
  
    //Overlay Close
    scaffoldFrontModalOverlay.forEach((item) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        for (var i = 0; i < scaffoldFrontModal.length; i++) {
          scaffoldFrontModal[i].classList.remove("scaffoldFrontModalOpen");
        }
      });
    });
  
    //Modal Close
    scaffoldFrontModalClose.forEach((item) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        for (var i = 0; i < scaffoldFrontModal.length; i++) {
          scaffoldFrontModal[i].classList.remove("scaffoldFrontModalOpen");
        }
      });
    });
  } catch (error) {}

  
// Expand/Collapse Show Items Button in Cart Page
try {
    const cartItemsShowBtn = document.querySelector("#checkoutShowProducts");
    const cartItemsTable = document.querySelector("#cartProducts");
  
    if (localStorage.getItem("cartItemsShow") === null) {
      cartItemsShowBtn.innerText = "Show Items";
      cartItemsTable.classList.remove("visible");
    } else {
      cartItemsShowBtn.innerText = "Hide Items";
      cartItemsTable.classList.add("visible");
    }
  
    cartItemsShowBtn.addEventListener("click", () => {
      if (localStorage.getItem("cartItemsShow") === null) {
        localStorage.setItem("cartItemsShow", "true");
      } else {
        localStorage.removeItem("cartItemsShow", "true");
      }
    });
  } catch (error) {}
  
  //Show Products Btn
  try {
    const checkoutShowProducts = document.querySelector("#checkoutShowProducts");
    const cartProducts = document.querySelector("#cartProducts");
  
    checkoutShowProducts.addEventListener("click", () => {
      if (cartProducts.classList.contains("visible")) {
        cartProducts.classList.remove("visible");
        checkoutShowProducts.innerText = "Show Items";
      } else {
        cartProducts.classList.add("visible");
        checkoutShowProducts.innerText = "Hide Items";
      }
    });
  } catch (error) {}
  
  //Validation
  
  // Validate Summary Cost Center
  function validateSummaryCostCenter() {
    try {
      const summaryCostCenter = document.querySelector(".summaryCostCenter");
      const CostCenter = document.querySelector("#CostCenter");
      const alertCostCenter = document.querySelector(".alertCostCenter");
      const getSummaryDeliveryMode = document.querySelector(
        ".summaryDeliveryMode"
      );
  
      let validateCostCenterSelect = false;
  
      // Validate if Cost Center Selected
      if (CostCenter.value != "") {
        validateCostCenterSelect = true;
        PurchaseOrderNumber.parentNode.classList.remove("hidden");
        getSummaryDeliveryMode.classList.remove("hidden");
      } else {
        validateCostCenterSelect = false;
        PurchaseOrderNumber.parentNode.classList.add("hidden");
        summaryCostCenter.classList.remove("validated");
      }
  
      // Validate if both true
      if (validateCostCenterSelect) {
        summaryCostCenter.classList.add("validated");
        PurchaseOrderNumber.classList.remove("highlight-error");
        alertCostCenter.innerHTML = "";
      }
    } catch (error) {}
  }
  validateSummaryCostCenter();
  
  // Validate Summary Delivery Date
  function validateOrderInfo() {
    try {
      const shipDate = document.querySelector("#shipDate");
      const cartDeliveryContainerOrder = document.querySelector(
        ".cartDeliveryContainerOrder"
      );
      const alertDateDelivery = document.querySelector(".alertDateDelivery");
      const PurchaseOrderNumber = document.querySelector("#PurchaseOrderNumber");
  
      let validateOrderInfo = false;
      let validatePurchaseNumber = false;
  
      // Validate if Purchase Order No. was entered
      if (PurchaseOrderNumber.value != "") {
        validatePurchaseNumber = true;
      } else {
        cartDeliveryContainerOrder.classList.remove("validated");
        validatePurchaseNumber = false;
      }
  
      // Validate if Cost Center Selected
      if (shipDate.value != "") {
        validateOrderInfo = true;
      } else {
        validateOrderInfo = false;
        cartDeliveryContainerOrder.classList.remove("validated");
      }
  
      // Validate if true
      if (validateOrderInfo && validatePurchaseNumber) {
        cartDeliveryContainerOrder.classList.add("validated");
        shipDate.classList.remove("highlight-error");
        alertDateDelivery.innerHTML = "";
      }
    } catch (error) {}
  }
  validateOrderInfo();
  
  // Validate Summary Delivery Date
  function validatePaymentType() {
    setTimeout(function () {
      const SecurityCodePayment = document.querySelector("#SecurityCodePayment");
      const summaryPayment = document.querySelector(".summaryPayment");
      const alertPaymentCVV = document.querySelector(".alertPaymentCVV");
  
      let validateDeliveryDate = false;
  
      try {
        if (
          SecurityCodePayment.value != "" &&
          SecurityCodePayment.value != null &&
          SecurityCodePayment.value.length > 2
        ) {
          validateDeliveryDate = true;
        } else {
          validateDeliveryDate = false;
          summaryPayment.classList.remove("validated");
          SecurityCodePayment.classList.remove("validated");
        }
      } catch (error) {}
  
      if (validateDeliveryDate) {
        summaryPayment.classList.add("validated");
        SecurityCodePayment.classList.add("validated");
        SecurityCodePayment.classList.remove("highlight-error");
        alertPaymentCVV.innerHTML = "";
      }
    }, 500);
  }
  validatePaymentType();
  
  setTimeout(function () {
    try {
      var getHeaderHeight = $("#headerContent").height();
      getHeaderHeight += 29;
  
      var sidebar = new StickySidebar(".checkoutSidebar", {
        topSpacing: getHeaderHeight,
        bottomSpacing: getHeaderHeight,
        containerSelector: ".checkoutWrapper",
        innerWrapperSelector: ".checkoutSidebarInner",
      });
    } catch (error) {}
  }, 1000);

  
if (document.readyState !== "loading") {
    console.log("ready!");
    ready();
  } else {
    document.addEventListener("DOMContentLoaded", ready);
  }
  
  function ready() {
    var accordion = document.getElementsByTagName("dt");
  
    for (var i = 0; i < accordion.length; i++) {
      accordion[i].addEventListener("click", function () {
        accordionClick(event);
      });
    }
  }
  
  var accordionClick = (event) => {
    var targetClicked = event.target;
    var classClicked = targetClicked.classList;
    while (classClicked[0] != "a-title") {
      targetClicked = targetClicked.parentElement;
      classClicked = targetClicked.classList;
    }
    var description = targetClicked.nextElementSibling;
    var expander = targetClicked.children[0];
    if (description.style.maxHeight) {
      description.style.maxHeight = null;
      expander.innerHTML = "<i class='expand'></i>";
    } else {
      var allDescriptions = document.getElementsByTagName("dd");
      for (var i = 0; i < allDescriptions.length; i++) {
        if (allDescriptions[i].style.maxHeight) {
          allDescriptions[i].style.maxHeight = null;
          allDescriptions[i].previousElementSibling.children[0].innerHTML =
            "<i class='expand'></i>";
        }
      }
      description.style.maxHeight = description.scrollHeight + "px";
      expander.innerHTML = "<i class='collapse'></i>";
    }
  };
  

/**
 * Nick END temp fix
 */

