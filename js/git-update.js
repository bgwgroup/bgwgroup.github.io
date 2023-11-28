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

        try {
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
        } catch (e) {}
        // scratch and win

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
 * ================================================================================================================================================================
 */

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
 * ================================================================================================================================================================
 */

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
        fetch('https://archived-forms.bgwgroup.com.au/samios_notifications/get-supplier-data.php')
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
    december2024: document.querySelector('.pcn-december2024'),
    november2024: document.querySelector('.pcn-november2024'),
    october2024: document.querySelector('.pcn-october2024'),
    september2024: document.querySelector('.pcn-september2024'),
    august2024: document.querySelector('.pcn-august2024'),
    july2024: document.querySelector('.pcn-july2024'),
    june2024: document.querySelector('.pcn-june2024'),
    may2024: document.querySelector('.pcn-may2024'),
    april2024: document.querySelector('.pcn-april2024'),
    march2024: document.querySelector('.pcn-march2024'),
    february2024: document.querySelector('.pcn-february2024'),
    january2024: document.querySelector('.pcn-january2024'),

    december2023: document.querySelector('.pcn-december2023'),
    november2023: document.querySelector('.pcn-november2023'),
    october2023: document.querySelector('.pcn-october2023'),
    september2023: document.querySelector('.pcn-september2023'),
    august2023: document.querySelector('.pcn-august2023'),
    july2023: document.querySelector('.pcn-july2023'),
    june2023: document.querySelector('.pcn-june2023'),
    may2023: document.querySelector('.pcn-may2023'),
    april2023: document.querySelector('.pcn-april2023'),
    march2023: document.querySelector('.pcn-march2023'),
    february2023: document.querySelector('.pcn-february2023'),
    january2023: document.querySelector('.pcn-january2023'),

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

    fetch('https://archived-forms.bgwgroup.com.au/notifications/get-file-data.php')
        .then((response) => { return response.json(); })
        .then((pcn) => {
            for (let i = 0; i < pcn.length; i++) {
                if (pcn[i]['status'] == 'visible') {
                    ElectricalPCN.prototype.renderData(pcn[i], ElectricalPCNWrappers.december2024, "December-2024");
                    ElectricalPCN.prototype.renderData(pcn[i], ElectricalPCNWrappers.november2024, "November-2024");
                    ElectricalPCN.prototype.renderData(pcn[i], ElectricalPCNWrappers.october2024, "October-2024");
                    ElectricalPCN.prototype.renderData(pcn[i], ElectricalPCNWrappers.september2024, "September-2024");
                    ElectricalPCN.prototype.renderData(pcn[i], ElectricalPCNWrappers.august2024, "August-2024");
                    ElectricalPCN.prototype.renderData(pcn[i], ElectricalPCNWrappers.july2024, "July-2024");
                    ElectricalPCN.prototype.renderData(pcn[i], ElectricalPCNWrappers.june2024, "June-2024");
                    ElectricalPCN.prototype.renderData(pcn[i], ElectricalPCNWrappers.may2024, "May-2024");
                    ElectricalPCN.prototype.renderData(pcn[i], ElectricalPCNWrappers.april2024, "April-2024");
                    ElectricalPCN.prototype.renderData(pcn[i], ElectricalPCNWrappers.march2024, "March-2024");
                    ElectricalPCN.prototype.renderData(pcn[i], ElectricalPCNWrappers.february2024, "February-2024");
                    ElectricalPCN.prototype.renderData(pcn[i], ElectricalPCNWrappers.january2024, "January-2024");

                    ElectricalPCN.prototype.renderData(pcn[i], ElectricalPCNWrappers.december2023, "December-2023");
                    ElectricalPCN.prototype.renderData(pcn[i], ElectricalPCNWrappers.november2023, "November-2023");
                    ElectricalPCN.prototype.renderData(pcn[i], ElectricalPCNWrappers.october2023, "October-2023");
                    ElectricalPCN.prototype.renderData(pcn[i], ElectricalPCNWrappers.september2023, "September-2023");
                    ElectricalPCN.prototype.renderData(pcn[i], ElectricalPCNWrappers.august2023, "August-2023");
                    ElectricalPCN.prototype.renderData(pcn[i], ElectricalPCNWrappers.july2023, "July-2023");
                    ElectricalPCN.prototype.renderData(pcn[i], ElectricalPCNWrappers.june2023, "June-2023");
                    ElectricalPCN.prototype.renderData(pcn[i], ElectricalPCNWrappers.may2023, "May-2023");
                    ElectricalPCN.prototype.renderData(pcn[i], ElectricalPCNWrappers.april2023, "April-2023");
                    ElectricalPCN.prototype.renderData(pcn[i], ElectricalPCNWrappers.march2023, "March-2023");
                    ElectricalPCN.prototype.renderData(pcn[i], ElectricalPCNWrappers.february2023, "February-2023");
                    ElectricalPCN.prototype.renderData(pcn[i], ElectricalPCNWrappers.january2023, "January-2023");

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
    if (pcnTitle != undefined) {
        for (let i = 0; i < pcnTitle.length; i++) {
            pcnTitle[i].addEventListener('click', () => {

                pcnTitle[i].classList.toggle('pcn-collapsed');
                let pcnContent = pcnTitle[i].nextElementSibling;

                if (pcnContent.style.maxHeight) {
                    pcnContent.style.maxHeight = null;
                } else {
                    try {
                        pcnContent.style.maxHeight = panel.scrollHeight + "px";
                    } catch (e) {}
                }
            });
        }
    }
};

/**
 * ================================================================================================================================================================
 */


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
 * ================================================================================================================================================================
 */

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
 * ================================================================================================================================================================
 */

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
 * ================================================================================================================================================================
 */

/**
 * Samios Double Dip Point Search API
 */
// window.addEventListener('DOMContentLoaded', () => {

//     let pointSearch = document.querySelector('.dip-points-search input');
//     let pointResults = document.querySelector('.dip-points-search-results');
//     let loadingSpin = document.querySelector('.dip-search-loader');

//     let nameSpan = document.createElement('span');
//     let pointSpan = document.createElement('span');

//     if (pointSearch != undefined) {
//         pointSearch.addEventListener('keyup', () => {
//             let accountNumber = pointSearch.value;
//             if (accountNumber.length >= 2) {
//                 console.log('More than 2');
//                 setTimeout(function() {
//                     fetch('https://bgwgroup.com.au/rheem-avg-points/get-rheem-points.php?account=' + accountNumber)
//                         .then((response) => {
//                             return response.json();
//                         })
//                         .then((points) => {

//                             for (let i = 0; i < points.length; i++) {
//                                 nameSpan.innerHTML = points[i]['name'] || "No redemption points associated with account number";
//                                 pointSpan.innerHTML = (points[i]['name']) ? '<strong>' + points[i]['remaining_points'] + '</strong> points' : accountNumber;
//                             }

//                             if (pointResults.children.length === 0) {
//                                 pointResults.innerHTML = "";
//                                 pointResults.appendChild(nameSpan);
//                                 pointResults.appendChild(pointSpan);
//                             }
//                         })
//                         .catch((error) => {});
//                 }, 800);
//             } else {
//                 try {
//                     loadingSpin.style.display = 'none';
//                     pointResults.removeChild(nameSpan);
//                     pointResults.removeChild(pointSpan);
//                     pointResults.innerHTML = "";
//                 } catch (err) {}
//             }
//         });
//     }
// });

/**
 * ================================================================================================================================================================
 */

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
 * Temp Add Card from My Account
 */
$(".addNewPaymentMethod").click(function() {
    $("#savePaymentCardForm").stop().slideToggle("slow");
});

/**
 * ================================================================================================================================================================
 */

/**
 * CNW Super Big One Functionality
 */
window.addEventListener('load', () => {
    new SBO();
});

function SBO() {
    SBO.prototype.init();
}
/**
 * init method anchors and invokes all other methods of the SBO object
 */
SBO.prototype.init = () => {
    SBO.prototype.pageIndex();
    SBO.prototype.clearPageIndex();
    SBO.prototype.toggleMonthlyPack();
    SBO.prototype.defaultMonthlyPack();
};
/**
 * pageIndex method controls the top menu buttons clicked/selected
 */
SBO.prototype.pageIndex = () => {

    let sboIndices = document.querySelectorAll('.sbo-index > button');
    let activeIndex = 'active-sbo-index';

    if (sboIndices != undefined) {

        for (let i = 0; i < sboIndices.length; i++) {

            sboIndices[i].addEventListener('click', () => {
                SBO.prototype.clearPageIndex(sboIndices[i], activeIndex);
                SBO.prototype.scrollToSection(sboIndices[i]);
                sboIndices[i].classList.add(activeIndex);
            });
        }
    }
};
/**
 * clearPageindex clears the index of clicked/selected top menub buttons
 * @param {*} currentNode 
 * @param {*} selector 
 */
SBO.prototype.clearPageIndex = (currentNode, selector) => {
    try {
        let siblings = currentNode.parentNode.children;
        if (siblings.length > 0) {
            for (let j = 0; j < siblings.length; j++) {
                siblings[j].classList.remove(selector);
            }
        }
    } catch (error) {}
};
/**
 * scrolToSection method scrolls to the section of the clicked/selected top menu buttons
 * @param {*} currentNode 
 */
SBO.prototype.scrollToSection = (currentNode) => {

    let sboSection = document.querySelectorAll('.sbo section');

    if (sboSection != undefined) {

        let id = currentNode.getAttribute('id');

        for (let i = 0; i < sboSection.length; i++) {
            if (sboSection[i].getAttribute('id') === id) {
                window.scrollTo({
                    top: (sboSection[i].offsetTop) - 50,
                    left: 0,
                    behavior: 'smooth'
                });
            }
        }
    }
};
/**
 * toggleMonthlyPack displays the content based on the button clicked
 */
SBO.prototype.toggleMonthlyPack = () => {

    let monthlyPackButton = document.querySelectorAll('.monthly-pack-button > button');
    let activeMonthlyButton = 'active-monthly-button';
    let activeMonthlyContent = 'active-monthly-content';

    if (monthlyPackButton != undefined) {

        let monthlyPackContent = document.querySelectorAll('.monthly-pack-content > article');

        for (let i = 0; i < monthlyPackButton.length; i++) {
            monthlyPackButton[i].addEventListener('click', () => {
                let currentButton = monthlyPackButton[i];
                let currentContent = monthlyPackContent[i];
                if (currentButton.getAttribute('class') === currentContent.getAttribute('class')) {
                    SBO.prototype.clearToggleMonthIndex(currentButton, activeMonthlyButton, currentContent, activeMonthlyContent);
                    currentButton.classList.add(activeMonthlyButton);
                    currentContent.classList.add(activeMonthlyContent);
                }
            });
        }
    }
};
/**
 * clearToggleMonthlyIndex clears the content index of the buttons clicked
 * @param {*} button 
 * @param {*} buttonSelector 
 * @param {*} content 
 * @param {*} contentSelector 
 */
SBO.prototype.clearToggleMonthIndex = (button, buttonSelector, content, contentSelector) => {
    try {
        let buttonSiblings = button.parentNode.children;
        let contentSiblings = content.parentNode.children;
        if (buttonSiblings.length > 0) {
            for (let i = 0; i < buttonSiblings.length; i++) {
                buttonSiblings[i].classList.remove(buttonSelector);
                contentSiblings[i].classList.remove(contentSelector);
            }
        }
    } catch (error) {}
};
SBO.prototype.defaultMonthlyPack = () => {
    let monthlyPackButton = document.querySelectorAll('.monthly-pack-button > button');
    let monthlyPackContent = document.querySelectorAll('.monthly-pack-content > article');

    let activeMonthlyButton = 'active-monthly-button';
    let activeMonthlyContent = 'active-monthly-content';

    try {
        if (monthlyPackButton != undefined && monthlyPackContent != undefined) {
            monthlyPackButton[0].classList.add(activeMonthlyButton);
            monthlyPackContent[0].classList.add(activeMonthlyContent);
        }
    } catch (error) {}

};

/**
 * 
 */

window.addEventListener('load', () => {
    new CountDownTimer()
});

function CountDownTimer() {
    CountDownTimer.prototype.start();
}
CountDownTimer.prototype.start = () => {
    let element = document.querySelectorAll('[data-date]');
    if (element != undefined || element.length > 0) {
        for (let i = 0; i < element.length; i++) {
            let dateElement = element[i].getAttribute('data-date').split(',');

            let now = new Date();
            let date = new Date(parseInt(dateElement[0]), parseInt(dateElement[1]) - 1, parseInt(dateElement[2]));
            let currentTime = now.getTime();
            let downTime = date.getTime();
            let remainingTime = downTime - currentTime; // get remaining time
            let second = Math.floor(remainingTime / 1000);
            let minute = Math.floor(second / 60);
            let hour = Math.floor(minute / 60);
            let day = Math.floor(hour / 24);

            hour %= 24;
            minute %= 60;
            second %= 60;

            hour = (hour < 10) ? "0" + hour : hour;
            minute = (minute < 10) ? "0" + minute : minute;
            second = (second < 10) ? "0" + second : second;

            let clockDay = document.querySelectorAll('[data-clock-day="true"]');
            let clockHour = document.querySelectorAll('[data-clock-hour="true"]');
            let clockMinute = document.querySelectorAll('[data-clock-minute="true"]');
            let clockSecond = document.querySelectorAll('[data-clock-second="true"]');

            if (clockDay != undefined) {
                for (let i = 0; i < clockDay.length; i++) {
                    CountDownTimer.prototype.HTMLElement(clockDay[i], day);
                }
            }
            if (clockHour != undefined) {
                for (let i = 0; i < clockHour.length; i++) {
                    CountDownTimer.prototype.HTMLElement(clockHour[i], hour);
                }
            }
            if (clockMinute != undefined) {
                for (let i = 0; i < clockMinute.length; i++) {
                    CountDownTimer.prototype.HTMLElement(clockMinute[i], minute);
                }
            }
            if (clockSecond != undefined) {
                for (let i = 0; i < clockSecond.length; i++) {
                    CountDownTimer.prototype.HTMLElement(clockSecond[i], second);
                }
            }

        }
    }

    setTimeout(CountDownTimer.prototype.start.bind(this), 1000);

};
CountDownTimer.prototype.HTMLElement = (element, string) => {
    if (element != undefined) {
        element.innerHTML = string;
    }
    return element;
};

/**
 * Javascript channels code for the WebView Apps
 */
['load', 'change'].forEach((event) => {
    window.addEventListener(event, () => {
        new FlutterJS();
    });
});

function FlutterJS() {
    FlutterJS.prototype.main();
}
FlutterJS.prototype.main = () => {
    FlutterJS.prototype.getSamiosLoginFormDetails();
    FlutterJS.prototype.getCNWSherriffLoginFormDetails();
    FlutterJS.prototype.checkLogInStatus();
    FlutterJS.prototype.getCartCount();
    FlutterJS.prototype.checkErrorLogin();
    FlutterJS.prototype.orderNumber();
    FlutterJS.prototype.getHrefLink();
    FlutterJS.prototype.enableGeoLocation();
};
FlutterJS.prototype.getSamiosLoginFormDetails = () => {
    let jUsername = document.querySelector('input#j_username');
    let jPassword = document.querySelector('input#j_password');
    let loginButton = document.querySelector('button.cust-loginregbtn');

    if (jUsername != undefined && jPassword != undefined && loginButton != undefined) {
        loginButton.addEventListener('click', () => {
            if (window.initialLogin) {
                return window.initialLogin.postMessage(`${jUsername.value}, ${jPassword.value}`);
            }
        });
    }
};
FlutterJS.prototype.getCNWSherriffLoginFormDetails = () => {
    let loginFormUsername = document.querySelector('form#loginForm input#j_username');
    let loginFormPassword = document.querySelector('form#loginForm input#j_password');
    let loginFormButton = document.querySelector('form#loginForm button[type="submit"]');

    if (loginFormUsername != undefined && loginFormPassword != undefined && loginFormButton != undefined) {
        loginFormButton.addEventListener('click', () => {
            if (window.loginFormPage) {
                return window.loginFormPage.postMessage(`${loginFormUsername.value}, ${loginFormPassword.value}`);
            }
        });
    }

    let loginHeaderFormUsername = document.querySelector('form[modelAttribute="loginForm"] input#j_username');
    let loginHeaderFormPassword = document.querySelector('form[modelAttribute="loginForm"] input#j_password');
    let loginHeaderFormButton = document.querySelector('form[modelAttribute="loginForm"] button[type="submit"]');

    if (loginHeaderFormUsername != undefined && loginHeaderFormPassword != undefined && loginHeaderFormButton != undefined) {
        loginHeaderFormButton.addEventListener('click', () => {
            if (window.loginFormPage) {
                return window.loginFormPage.postMessage(`${loginHeaderFormUsername.value},${loginHeaderFormPassword.value}`);
            }
        });
    }
};
FlutterJS.prototype.checkLogInStatus = () => {
    if (window.checkLogin) {
        let notLoggedIn = (document.querySelector('body.notLoggedIn') != undefined) ? true : false;
        return window.checkLogin.postMessage(notLoggedIn);
    }
};
FlutterJS.prototype.getCartCount = () => {
    if (window.cartCount) {
        let cartCountElement = document.querySelector('.miniCart .nav-items');
        if (cartCountElement != undefined) {
            if (cartCountElement.innerHTML.length > 0) {
                return window.cartCount.postMessage(cartCountElement.innerHTML);
            }
        }
    }
};
FlutterJS.prototype.checkErrorLogin = () => {
    if (window.checkErrorLogin) {
        let globalAlertError = document.querySelector(".global-alerts .error > div");
        if (globalAlertError != undefined) {
            if (globalAlertError.innerHTML.length > 0) {
                return window.checkErrorLogin.postMessage("true");
            }
        } else {
            return window.checkErrorLogin.postMessage("false");
        }

        let loginErrorMsg = document.querySelector(".login-form-container .loginErrorMsg");
        if (loginErrorMsg != undefined) {
            if (loginErrorMsg.innerHTML.length > 0) {
                return window.checkErrorLogin.postMessage("true");
            }
        } else {
            return window.checkErrorLogin.postMessage("false");
        }
    }
};
FlutterJS.prototype.orderNumber = () => {
    if (window.orderNumber) {
        let checkoutConfirmationNumber = document.querySelector(".checkoutOrderConfirmationNumber");
        if (checkoutConfirmationNumber != undefined) {
            if (checkoutConfirmationNumber.innerHTML.length > 0) {
                return window.orderNumber.postMessage(checkoutConfirmationNumber.innerHTML);
            }
        }
    }
};
FlutterJS.prototype.getHrefLink = () => {
    if (window.hrefLink) {
        let hrefLinks = document.getElementsByTagName('a');
        if (hrefLinks != undefined) {
            for (let i = 0; i < hrefLinks.length; i++) {
                let anchor = hrefLinks[i].toString();
                ['.pdf', '.gif', '.jpeg', '.jpg', '.png', '.svg', '.csv', '.xlxs', '.doc', '.docx', '.txt', 'tel', 'mailto'].forEach((mediaType) => {
                    let regex = new RegExp(mediaType);
                    if (anchor.match(regex)) {
                        hrefLinks[i].addEventListener('click', () => {
                            return window.hrefLink.postMessage(anchor);
                        });
                    }
                });
            }
        }
    }
};
FlutterJS.prototype.enableGeoLocation = () => {
    if (window.locationPermission) {
        let findStoresNearMe = document.querySelector('#findStoresNearMe');
        if (findStoresNearMe != undefined) {
            findStoresNearMe.setAttribute('style', 'display: flex !important');
        }
    }
};

/**
 * Clipsal Iconic Outdoor Floating Text
 */
window.addEventListener('resize', () => {
    if (location.origin.match(/shop.sherriff.com.au/gi) || location.origin.match(/shop.cnw.com.au/gi)) {
        let nav = document.querySelector('#sheBody .headerContent nav') || document.querySelector('.headerContent .cnw-header-navigation');
        if (nav != undefined) {
            let bounds = nav.getBoundingClientRect();
            let cioStickyInfo = document.querySelector('.sticky-info');
            if (cioStickyInfo != undefined) {
                cioStickyInfo.style.top = `${bounds.bottom}px`;
            }
        }
    }
});
window.addEventListener('DOMContentLoaded', () => {
    if (location.origin.match(/shop.sherriff.com.au/gi) || location.origin.match(/shop.cnw.com.au/gi)) {
        let nav = document.querySelector('#sheBody .headerContent nav') || document.querySelector('.headerContent .cnw-header-navigation');
        if (nav != undefined) {
            let bounds = nav.getBoundingClientRect();
            let cioStickyInfo = document.querySelector('.sticky-info');
            if (cioStickyInfo != undefined) {
                cioStickyInfo.style.top = `${bounds.bottom}px`;
            }
        }
    }
});

/**
 * Nickelodean Search Hax (updated)
 */

try {

    if (window.location.href.indexOf("?text=") == -1) {
        const btnSearchOpenCategories = document.querySelector("#searchEmptyOpenCategories");
        const btnSearchOpenBrands = document.querySelector("#searchEmptyOpenBrands");

        btnSearchOpenCategories.addEventListener("click", function() {
            document.querySelector("#navOpenCategories").click();
        })

        btnSearchOpenBrands.addEventListener("click", function() {
            document.querySelector("#navOpenBrands").click();
        })
    }

    let getHeaderApplicationLink = document.querySelector(".scaffoldHeaderTopRight a:nth-child(2)");
    if (getHeaderApplicationLink.getAttribute("href") === "/signup?") {
        getHeaderApplicationLink.setAttribute("href", "/sam/en/AUD/login/signup?");
    }

    let getFooterApplicationLink = document.querySelector(".scaffoldFooterSectionWrapper .IconTiles .Tile:nth-child(3) a");
    if (getFooterApplicationLink.getAttribute("href") === "/signup?") {
        getFooterApplicationLink.setAttribute("href", "/sam/en/AUD/login/signup?");
    }

} catch (error) {}

/**
 * Adding removed selectors to hide app icons
 */
window.addEventListener('DOMContentLoaded', () => {
    let scaffolDownloadApp = document.querySelector('.scaffoldFooterDownloadApp');
    if (scaffolDownloadApp != undefined) {
        scaffolDownloadApp.classList.add('app-icons-container');
    }
});

/**
 * SBO Search Page Banner
 */
/*
window.addEventListener('DOMContentLoaded', () => {
    if (location.href.match(/cnw.com.au/)) {
        let breadCrumb = document.querySelector('.breadcrumbScaffold');
        if (breadCrumb != undefined) {
            let bannerContainer = document.createElement('div');
            bannerContainer.className = 'promotion-banner';
            bannerContainer.innerHTML = `<img src="/medias/sbo-promotion-banner.jpg?context=bWFzdGVyfGltYWdlc3w4MTQyOXxpbWFnZS9qcGVnfGhhNS9oMDMvOTk3MTA4ODAzMTc3NC9zYm8tcHJvbW90aW9uLWJhbm5lci5qcGd8NzVkYzAyN2Q2Njc3Zjg2ZTNjNDNhN2QzMmQxMDI3ODgwOThlODA4OWE5YTlmODA2MWM0YThkMDM1NWZjYzk2Yw">`;
            try {
                if (breadCrumb.parentNode != document.querySelector('#breadcrumb-account')) {
                    breadCrumb.parentNode.insertBefore(bannerContainer, breadCrumb);
                }
            } catch (e) {}
        }
    }
}); */

/**
 * Hide Find Stores Near Me for Android and iOS (Temporary)
 */
window.addEventListener('DOMContentLoaded', () => {
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
        if (document.querySelector('a#findStoresNearMe') != undefined) {
            document.querySelector('a#findStoresNearMe').style.display = 'none';
        }
    }
});

/**
 * Store Locator on MHI Air Condition Landing Page on CNW
 */
window.addEventListener('DOMContentLoaded', () => {

    if (location.href.match(/cnw.com.au\/aircon-specialist-qld/)) {

        let acStoreButtons = document.querySelectorAll('.ac-stores-button button');
        let activeAcStoreButton = 'active-ac-store-button';

        if (acStoreButtons != undefined) {

            let acStoreInformation = document.querySelectorAll('.ac-store-information>article');
            let activeAcStoreInformation = 'active-ac-store-information';

            if (acStoreInformation != undefined) {
                try {
                    acStoreInformation[0].setAttribute('style', 'display: -ms-flex; display: flex');
                } catch (error) {}
            }
            for (let i = 0; i < acStoreButtons.length; i++) {

                acStoreButtons[i].addEventListener('click', () => {
                    clearAsStoreButtonSelector(acStoreButtons, activeAcStoreButton);
                    clearAcStoreinformationSelector(acStoreInformation, activeAcStoreInformation);
                    acStoreInformation[i].setAttribute('style', 'display: -ms-flex; display: flex');
                });

            }
        }
    }

});

function clearAsStoreButtonSelector(nodeList, selector) {
    for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].classList.remove(selector);
    }
}

function clearAcStoreinformationSelector(nodeList, selector) {
    for (let j = 0; j < nodeList.length; j++) {
        nodeList[j].classList.remove(selector);
        nodeList[j].setAttribute('style', 'display: none');
    }
}

/**
 * Maintenance Banner 06 September 2023
 */
window.addEventListener('DOMContentLoaded', () => {
    if (location.href.match(/cnw.com.au/) || location.href.match(/sherriff.com.au/) || location.href.match(/samios.net.au/) || location.href.match(/bgwt.com.au/)) {
        try {
            // new MaintenanceBanner();
        } catch (e) {}
    }
});

function MaintenanceBanner() {
    MaintenanceBanner.prototype.init();
}
MaintenanceBanner.prototype.init = () => {
    let checkIfUserHasSeenBanner = localStorage.getItem('bannerClicked');
    if (checkIfUserHasSeenBanner == null) {
        //MaintenanceBanner.prototype.renderBanner();
    }

     MaintenanceBanner.prototype.closeBanner();
     MaintenanceBanner.prototype.fullScreenBanner();
};
// no need to use renderBanner
MaintenanceBanner.prototype.renderBanner = () => {
    let sapMaintenanceBanner = document.createElement('div');
    sapMaintenanceBanner.className = 'sap-maintenance-banner';
    sapMaintenanceBanner.innerHTML = `
        <span>Hello, our website is currently undergoing scheduled maintenance and all online services will be unavailable until 11:00am AEST Monday. For any urgent matters please contact <a href="mailto:online.support@bgwgroup.com.au">online.support@bgwgroup.com.au</a> or your local branch.</span>
    `;
    document.body.appendChild(sapMaintenanceBanner);
};
MaintenanceBanner.prototype.closeBanner = () => {
    let maintenanceBanner = document.querySelector('.sap-maintenance-banner');
    if (maintenanceBanner != undefined || maintenanceBanner != null) {
        maintenanceBanner.addEventListener('click', () => {
            maintenanceBanner.style.display = 'none';
            localStorage.setItem('bannerClicked', 'true');
        });
    }
};
MaintenanceBanner.prototype.fullScreenBanner = () => {
    let fullScreenBanner = document.createElement('div');
    fullScreenBanner.className = 'full-screen-banner';
    fullScreenBanner.innerHTML = `
    <span style="position: absolute;top: 50%;left: 0;right: 0;width: 100%;max-width: 800px;margin-left: auto;margin-right: auto;padding: 2rem;transform: translateY(-50%);line-height: 1.5rem; text-align: center;">Our website is currently down due to technical issues affecting pricing. We are investigating and will have this rectified as soon as possible. Please check back soon. We apologise for any inconvenience caused and for any urgent matters please contact <a href="mailto:online.support@bgwgroup.com.au">online.support@bgwgroup.com.au</a> or your local branch.</span>
    `;
    fullScreenBanner.setAttribute('style', `position: fixed;top: 0;left: 0;width: 100dvw;height: 100dvh;background: #FFF;z-index: 100000000001;`);
    document.body.appendChild(fullScreenBanner);
}

// Temp hide b2c frontend elements
/*document.addEventListener("DOMContentLoaded", function() {
    try {
        if (location.href.match(/sherriff.com.au/)) {
            let getUserRegisterBtn = document.querySelector("#btnUserRegister button");
            getUserRegisterBtn.setAttribute("type", "button");
        }
        
        if (location.href.match(/samios.net.au/)) {
            
            setTimeout(() => {
                document.querySelector(".scaffoldHeaderTopRight .scaffoldOpenModalRegisterGuestUser").href = "/login/signup?";
            }, 500);
            
            let getLoginPageRegisterLink = document.querySelector("[href='login/signup?']");
            if(getLoginPageRegisterLink){
                getLoginPageRegisterLink.href = "/login/signup?";
            }
       
        }
        
        
        if (location.href.match(/cnw.com.au/) || location.href.match(/sherriff.com.au/) || location.href.match(/samios.net.au/)) {
            let getB2CLoginPopupBtns = document.querySelectorAll(".scaffoldOpenModalRegisterGuestUser");
            for (const button of getB2CLoginPopupBtns) {
                
                if(button.innerHTML.indexOf("Create Account") != -1) {
                    button.addEventListener('click', () => {
                        window.location.href = "/login/signup?";
                    });
                } else {
                    button.addEventListener('click', () => {
                        window.location.href = "/login";
                    });
                }
            }
            let getPDPLoginBtn = document.querySelectorAll(".scaffoldOpenModalRegisterGuestUserProduct");
            for (const button of getPDPLoginBtn) {
                button.addEventListener('click', () => {
                    window.location.href = "/login";
                });
            }
        }
        setTimeout(() => {
            let checkIfStorePickup = document.querySelector(".deliveryStore");
            if (checkIfStorePickup != undefined) {
                if (checkIfStorePickup.classList.contains("selected")) {
                    document.querySelector("#newBillingAddressCheck").click();
                }
            }
        }, 3000);
    } catch (err) {
        console.log(err);
    }
});*/

/**
 * ========== SAMMY MAS STUFF =============
 */

window.addEventListener('load', () => {
    getPrizeList();
    accordion();
    getProductList();
});

function getPrizeList() {
    // Test Sammy-mas promotion 2023 

    // create prizeList https://bgwgroup.github.io/data/sammy-mas-promo/prizeList.json
    let prizeListJSON = 'https://bgwgroup.github.io/data/sammy-mas-promo/prizeList.json';
    fetch(prizeListJSON)
        .then((response) => response.json())
        .then((json) => {
            const sammySlide1 = json.slice(0, 8);
            const sammySlide2 = json.slice(8, 16);
            const sammySlide3 = json.slice(16, 24);
            const sammySlide4 = json.slice(24, 32);

            const sammyCarouselSlide1 = sammySlide1.map(function(item) {
                return `<div class="s3-prize-img-ctn">
            <img src="${item.imgURL}" alt="prize item">
            <div class="s3-prize-details">
                <div class="s3-prize-name">${item.name}</div>
                <div class="s3-prize-point">${item.point} Points</div>
            </div>
        </div>`
            }).join('');

            const sammyCarouselSlide2 = sammySlide2.map(function(item) {
                return `<div class="s3-prize-img-ctn">
            <img src="${item.imgURL}" alt="prize item">
            <div class="s3-prize-details">
                <div class="s3-prize-name">${item.name}</div>
                <div class="s3-prize-point">${item.point} Points</div>
            </div>
        </div>`
            }).join('');

            const sammyCarouselSlide3 = sammySlide3.map(function(item) {
                return `<div class="s3-prize-img-ctn">
            <img src="${item.imgURL}" alt="prize item" >
            <div class="s3-prize-details">
                <div class="s3-prize-name">${item.name}</div>
                <div class="s3-prize-point">${item.point} Points</div>
            </div>
        </div>`
            }).join('');

            const sammyCarouselSlide4 = sammySlide4.map(function(item) {
                return `<div class="s3-prize-img-ctn">
            <img src="${item.imgURL}" alt="prize item" >
            <div class="s3-prize-details">
                <div class="s3-prize-name">${item.name}</div>
                <div class="s3-prize-point">${item.point} Points</div>
            </div>
        </div>`
            }).join('');
            if (!!document.querySelector(".s3-first")) {
                document.querySelector(".s3-first").innerHTML = sammyCarouselSlide1;
                document.querySelector(".s3-second").innerHTML = sammyCarouselSlide2;
                document.querySelector(".s3-third").innerHTML = sammyCarouselSlide3;
                document.querySelector(".s3-forth").innerHTML = sammyCarouselSlide4;
            }
        });
}

function getProductList() {
    // create productList https://bgwgroup.github.io/data/sammy-mas-promo/productList.json

    fetch("https://bgwgroup.github.io/data/sammy-mas-promo/productList.json")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            // Point search my product code or product description

            let searchInput = document.querySelector('.dip-codes-search input[type="text"]');
            let modelSearchTable = document.querySelector(".result-search-model-table")
            
            function pointsPerModelFiterSearch() {
                if (searchInput != undefined) {
                searchInput.addEventListener('keyup', () => {
                    let filterValue = searchInput.value.toUpperCase();
                    const resultPointPerModelTable = data.map((item, index) => {
                        if (item.product_code?.includes(filterValue) || item.product_description?.includes(filterValue))  {
                            modelSearchTable.style.display = "flex";
               
                            return `
                            <li key=${index}>
                                ${item.product_description}
                                <div class="s4-product-code-point-ctn">
                                    <span class="s4-product-code">
                                        <a href="sam/en/AUD/search/?text=${item.product_code}">
                                            ${item.product_code}
                                        </a>
                                    </span>
                                    <span class="s4-product-point">${item.points}</span>
                                </div>
                            </li>`
                    }
                    }).join('')
                    document.querySelector(".result-search-model-table ul").innerHTML = resultPointPerModelTable;
                    if (filterValue.length <= 2) {
                        modelSearchTable.style.display = "none";
                    }
            })}} 
        
            pointsPerModelFiterSearch()

            // aquamax table
            const aquamaxModelBody = data.map(function(aquamaxItem) {
                if (aquamaxItem.product_brand === 'aquamax') {
                    return '<li>' +
                        aquamaxItem.product_description +
                        '<div class="s4-product-code-point-ctn">' +
                        '<span class="s4-product-code">' + `<a href="sam/en/AUD/search/?text=${aquamaxItem.product_code}">` + aquamaxItem.product_code + '</a>' + '</span>' +
                        '<span class="s4-product-point">' + aquamaxItem.points + '</span>' +
                        '</div>' + '</li>'
                }
            }).join('')

            // avg table
            const avgModelBody = data.map(function(aquamaxItem) {
                if (aquamaxItem.product_brand === 'avg') {
                    return '<li>' +
                        aquamaxItem.product_description +
                        '<div class="s4-product-code-point-ctn">' +
                        '<span class="s4-product-code">' + `<a href="sam/en/AUD/search/?text=${aquamaxItem.product_code}">` + aquamaxItem.product_code + '</a>' + '</span>' +
                        '<span class="s4-product-point">' + aquamaxItem.points + '</span>' +
                        '</div>' + '</li>'
                }
            }).join('')

            // rheem table
            const rheemModelBody = data.map(function(aquamaxItem) {
                if (aquamaxItem.product_brand === 'rheem') {
                    return '<li>' +
                        aquamaxItem.product_description +
                        '<div class="s4-product-code-point-ctn">' +
                        '<span class="s4-product-code">' + `<a href="sam/en/AUD/search/?text=${aquamaxItem.product_code}">` + aquamaxItem.product_code + '</a>' + '</span>' +
                        '<span class="s4-product-point">' + aquamaxItem.points + '</span>' +
                        '</div>' + '</li>'

                }
            }).join('')

            // vulcan table
            const vulcanModelBody = data.map(function(aquamaxItem) {
                if (aquamaxItem.product_brand === 'vulcan') {
                    return '<li>' +
                        aquamaxItem.product_description +
                        '<div class="s4-product-code-point-ctn">' +
                        '<span class="s4-product-code">' + `<a href="sam/en/AUD/search/?text=${aquamaxItem.product_code}">` + aquamaxItem.product_code + '</a>' + '</span>' +
                        '<span class="s4-product-point">' + aquamaxItem.points + '</span>' +
                        '</div>' +
                        '</li>'
                }
            }).join('')

            // rinnai table
            const rinnaiModelBody = data.map(function(aquamaxItem) {
                if (aquamaxItem.product_brand === 'rinnai') {
                    return '<li>' +
                        aquamaxItem.product_description +
                        '<div class="s4-product-code-point-ctn">' +
                        '<span class="s4-product-code">' + `<a href="sam/en/AUD/search/?text=${aquamaxItem.product_code}">` + aquamaxItem.product_code + '</a>' + '</span>' +
                        '<span class="s4-product-point">' + aquamaxItem.points + '</span>' +
                        '</div>' +
                        '</li>'
                }
            }).join('')

            try {
                document.querySelector(".aquamax-table ul").innerHTML = aquamaxModelBody;
                document.querySelector(".avg-table ul").innerHTML = avgModelBody;
                document.querySelector(".rinnai-table ul").innerHTML = rinnaiModelBody;
                document.querySelector(".rheem-table ul").innerHTML = rheemModelBody;
                document.querySelector(".vulcan-table ul").innerHTML = vulcanModelBody;
            } catch (error) {}
        })
        .catch((error) => {
            //console.log(error)
        });
}

function accordion() {
    let tableModelHeader = document.querySelectorAll('.model-table-header'); // get nodeList of table headers
    if (tableModelHeader != undefined) {
        tableModelHeader.forEach(element => {
            // get the current table header that is clicked
            element.addEventListener('click', () => {
                let elementSibling = element.nextElementSibling; // get the next element after the current table header
                if (elementSibling.style.maxHeight) { // check if maxHeight is set to a value greater than zero/null(0)
                    elementSibling.style.maxHeight = null; // return it back to null state
                } else {
                    elementSibling.style.maxHeight = `${elementSibling.scrollHeight}px`; // if max-height is null/zero, expand the table body using the elements scrollHeight based on window position
                }
            });
        });
    }
}

// Sammymas Hero animation 
let moon = document.getElementById('para-moon')
let sammy = document.getElementById('para-sammy')
let sammytext1 = document.getElementById('para-sammy-text1')
let sammytext2 = document.getElementById('para-sammy-text2')
let ground = document.getElementById('para-ground');
let logoCtn = document.getElementById('para-logo-ctn');
let getStartedbtn = document.getElementById('s1-get-started-btn')

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    if (!!moon) { moon.style.marginTop = value * -1.5 + 'px' };
    if (!!sammy) { sammy.style.left = value * -1.5 + 300 + 'px' };
    if (!!sammytext1) { sammytext1.style.top = value * 1.5 + 210 + 'px' };
    if (!!sammytext2) { sammytext2.style.top = value * 1.5 + 320 + 'px' };
    if (!!logoCtn) { logoCtn.style.top = value * -1.5 + 10 + 'px' };
    if (!!ground) { ground.style.transform = `perspective(1500px) translate3d(0px, 0px, ${value/3}px)` };
})

let incrementButton = document.querySelector(".carouselArrowRight");
let decrementButton = document.querySelector(".carouselArrowLeft");
let slideCount = 1;
let carousleSlidercounter = 0;
let SliderCount;

if(!!incrementButton) {
    incrementButton.addEventListener('click', () => {
        carousleSlidercounter++;
        SliderCount = slideCount + carousleSlidercounter
        if ( carousleSlidercounter > 3) {
            SliderCount = 1;
            carousleSlidercounter = 0
        }
        document.getElementById('s3-radio' + SliderCount).checked = true;
    })
}
if(!!decrementButton) {
    decrementButton.addEventListener('click', () => {
        carousleSlidercounter--;
        SliderCount = slideCount + carousleSlidercounter
        if ( carousleSlidercounter < 1) {
            SliderCount = 1;
            carousleSlidercounter = 4
        }
        document.getElementById('s3-radio' + SliderCount).checked = true;
    })
}
//Sammy-mas-cutomers point

window.addEventListener('DOMContentLoaded', () => {

    getCustomerPointsOnSearch();
    getAccountDetails();
    submitRedemptionForm();

});

function getCustomerPointsOnSearch() {
    let pointSearch = document.querySelector('.dip-points-search input');
    let pointResults = document.querySelector('.dip-points-search-results');
    let loadingSpin = document.querySelector('.dip-search-loader');

    let nameSpan = document.createElement('span');
    let pointSpan = document.createElement('span');

    if (pointSearch != undefined) {
        pointSearch.addEventListener('keyup', () => {
            let accountNumber = pointSearch.value;
            if (accountNumber.length >= 2) {
                setTimeout(function() {
                    fetch('https://bgwgroup.com.au/sammymas2023/get-total-customer-points.php?accountNumber=' + accountNumber)
                        .then((response) => {
                            return response.json();
                        })
                        .then((points) => {
                            if (points.no_data == true) {
                                nameSpan.innerHTML = `<span style='color: #C20;'>Sorry! Account number is not found!</span>`
                                pointSpan.innerHTML = ""
                            } else {
                                nameSpan.innerHTML = ""
                                pointSpan.innerHTML = ""
                            }

                            for (let i = 0; i < points.length; i++) {
                                let redeemedPoints = points[i].redeemed_points || 0;
                                nameSpan.innerHTML = points[i]['account_name'] || "No redemption points associated with account number";
                                pointSpan.innerHTML = (points[i]['account_name']) ? '<strong>' + (points[i]['total_points'] - redeemedPoints) + '</strong> points' : accountNumber;
                            }

                            if (pointResults.children.length === 0) {
                                pointResults.innerHTML = "";
                                pointResults.appendChild(nameSpan);
                                pointResults.appendChild(pointSpan);
                            }
                        })
                        .catch((error) => {});
                }, 800);
            } 
            else {
                try {
                    loadingSpin.style.display = 'none';
                    pointResults.removeChild(nameSpan);
                    pointResults.removeChild(pointSpan);
                    pointResults.innerHTML = "";
                } catch (err) {}
            }
        });
    }
}

let redeemablePoints = undefined;

function getAccountDetails(){
    
    let URL = "https://bgwgroup.com.au/sammymas2023/get-total-customer-points.php";
    let eligibleURL = 'https://bgwgroup.com.au/sammymas2023/get-prize-list-json.php';
    
    let redeemFormHidden = document.querySelector('#redeemForm .form-hidden');
    let redeemAccount = document.querySelector('#redeemForm input#redeemAccount');
    let redeemPoints = document.querySelector('#redeemForm #redeemPoints');
    let redeemAccountDetails = document.querySelector('#redeemForm .account-details');
    let redeemAccountName = document.querySelector('#redeemForm #redeemAccountName');
    let redeemList = document.querySelector('#redeemForm select#redeemList');
    let redeemError = document.querySelector('#redeemForm #redeemError span');
    
    let accountPoints = undefined;
    
    if (redeemAccount != undefined) {
        redeemAccount.addEventListener('keyup', () => {
            if(redeemAccount.value.length >= 2){
                fetch(URL + `?accountNumber=${redeemAccount.value}`)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    for(let i = 0; i < data.length; i++){
                        accountPoints = data[i]['total_points'];

                        // clear hidden elements
                        redeemFormHidden.innerHTML = '';

                        let accountID = document.createElement('input');
                        accountID.type = 'hidden';
                        accountID.id = 'prize_id';
                        accountID.setAttribute('name','prize_id');
                        accountID.value = data[i]['id'];

                        let accountNumber = document.createElement('input');
                        accountNumber.type = 'hidden';
                        accountNumber.id = 'account_number';
                        accountNumber.setAttribute('name','account_number');
                        accountNumber.value = data[i]['account_number'];

                        let accountHomeBranch = document.createElement('input');
                        accountHomeBranch.type = 'hidden';
                        accountHomeBranch.id = 'home_branch';
                        accountHomeBranch.setAttribute('name','home_branch');
                        accountHomeBranch.value = data[i]['branch'];

                        redeemFormHidden.appendChild(accountID);
                        redeemFormHidden.appendChild(accountNumber);
                        redeemFormHidden.appendChild(accountHomeBranch);

                        // add account name to field
                        redeemAccountName.value = data[i]['account_name'];

                        // add customer points
                        let redeemedPoints = data[i]['redeemed_points'] || 0;
                        redeemPoints.value = accountPoints - redeemedPoints;
                        redeemablePoints = accountPoints - redeemedPoints;
                        if ( redeemPoints.value < 10) {
                            redeemError.innerHTML = '';
                            redeemError.innerHTML = 'Sorry but you do not have enough points';
                        }
                        if ( redeemedPoints > 300) {
                            redeemError.innerHTML = '';
                            redeemError.innerHTML = `Total redeemed points: ${redeemedPoints} points <br> You have exceeded maximum redeemable points (300 points) <br>Please see T&C's for more information`;
                            redeemSubmit.classList.add('redeem-disabled');
                            redeemList.style.display = "none"
                            document.querySelector('#redeemAccountEmail').style.display="none"
                        }  

                    }
                    // search for list of eligible products
                    fetch(eligibleURL)
                    .then((response) => {
                        return response.json();
                    })
                    .then((products) => {
                        // clear select element 
                        redeemList.innerHTML = '';
                        for(let p = 0; p < products.length; p++){
                            // get eligible products based on points less than account points
                            if( parseInt(products[p]['points']) <= Math.ceil(parseInt(redeemPoints.value)) ){
                                if (p === 0){
                                    redeemList.options[redeemList.options.length] = new Option('Select Prize...');
                                }
                                redeemAccountDetails.classList.remove('form-list-hidden');
                                redeemList.options[redeemList.options.length] = new Option(products[p]['description'] + ' - ' + products[p]['points'] + ' points',products[p]['id']);
                            }
                        }

                    })
                    .catch((error) => {});

                })
                .catch((error) => {});

            }else{
                // if account number input field if empty, clear form values
                redeemAccountDetails.classList.add('form-list-hidden');
                redeemList.innerHTML = '';
                redeemAccountName.value = '';
                redeemError.innerHTML = '';
            }
        });
    }
}

function submitRedemptionForm() {

    const url = 'https://bgwt.com.au/sammymas2023/post-redeem-send-email.php';
    let redeemSubmit = document.querySelector('#redeemSubmit');

    let prizeID = undefined;

    let redeemList = document.querySelector('#redeemList');
    if (redeemList != undefined) {
        redeemList.addEventListener('change', () => {
            prizeID = redeemList.value;
        });
    }

    if (redeemSubmit != undefined) {
        redeemSubmit.addEventListener('click', (event) => {
            event.preventDefault();
            redeemSubmit.setAttribute('disabled', 'disabled');
            redeemSubmit.classList.add('spinnerLoading');
            let formData = new FormData();
            formData.append('prize_id', prizeID);
            formData.append('account_number', document.querySelector('#account_number').value);
            formData.append('account_name', document.querySelector('#redeemAccountName').value);
            formData.append('account_email', document.querySelector('#redeemAccountEmail').value);
            formData.append('redeemable_points', redeemablePoints);
            fetch(url, {
                    method: 'POST',
                    body: formData
                })
                .then((response) => {
                    return response.json();
                })
                .then((formResponse) => {
                    // redeemSubmit.removeAttribute('disabled', 'disabled');
                    redeemSubmit.classList.remove('spinnerLoading');
                    redeemSubmit.classList.add('redeem-disabled');
                    if (formResponse.email_sent === true ) {
                        document.querySelector('#redeemForm').reset();
                    }
                    redeemError.innerHTML = "<span style='color: green; line-height: 1.5;'>Successfully redeemed! A confirmation email has been sent to you!<br>The prizes will be ordered and dispatched once the promotion has ended. </span>";
                })
                .catch(error => {});
        });
    }
}

// ============================== Sherriff Victoria landing page 2023 =============================================

let sec5FAQaccordion = document.querySelectorAll(".sec-5-FAQs-accordion");
if (!!sec5FAQaccordion) {
    sec5FAQaccordion.forEach(element => {
        element.addEventListener('click', () => {
            let elementSibling = element.nextElementSibling; // get the next element after the current table header
            if (elementSibling.style.maxHeight) { // check if maxHeight is set to a value greater than zero/null(0)
                elementSibling.style.maxHeight = null; // return it back to null state
            } else {
                elementSibling.style.maxHeight = `${elementSibling.scrollHeight}px`; // if max-height is null/zero, expand the table body using the elements scrollHeight based on window position
            }
        })
    })
}

let TestimonySlideIndex = 1;
showS3TestimonySlides(TestimonySlideIndex);

// Next/previous controls
function plusS3TestimonySlides(n) {
    showS3TestimonySlides(TestimonySlideIndex += n);
}
function showS3TestimonySlides(n) {
    let testimonyS3Slides = document.getElementsByClassName("sec-3-testimony-slides");
    let s3TestimonyDots = document.getElementsByClassName("s3-testimony-dot");
    if (n > testimonyS3Slides.length) {TestimonySlideIndex = 1}
    if (n < 1) {TestimonySlideIndex = testimonyS3Slides.length}
    for (let i = 0; i < testimonyS3Slides.length; i++) {
        testimonyS3Slides[i].style.display = "none";
    }
    for (let i = 0; i < s3TestimonyDots.length; i++) {
        s3TestimonyDots[i].className = s3TestimonyDots[i].className.replace(" active", "");
    }
    if(!!testimonyS3Slides) {
        if(!!Array.from(testimonyS3Slides)[TestimonySlideIndex-1]) {Array.from(testimonyS3Slides)[TestimonySlideIndex-1].style.display = "flex";}
        if(!!Array.from(testimonyS3Slides)[TestimonySlideIndex-1]) {Array.from(testimonyS3Slides)[TestimonySlideIndex-1].style.justifyContent = "space-evenly";}
        if(!!s3TestimonyDots[TestimonySlideIndex-1]) {s3TestimonyDots[TestimonySlideIndex-1].className += " active";}
    }
}

let modalImageContainer = document.getElementById("modalImageContainer");

// Get the image and insert it inside the modal - use its "alt" text as a caption
let testimonyImages = document.querySelectorAll(".testimony-img");

if (!!testimonyImages) {
    for (let i = 0; i < testimonyImages.length; i++ ) {
        let modalTestimonyImg = document.getElementById("modal-testimony-img");
        testimonyImages[i].onclick = function(){
        modalImageContainer.style.display = "block";
        modalTestimonyImg.src = this.src;
        }
    }
}

// Get the <span> element that closes the modal
let closeTestimonyBtn = document.getElementsByClassName("close-testimony-img")[0];

// When the user clicks on <span> (x), close the modal
if (!!closeTestimonyBtn) {
    closeTestimonyBtn.onclick = function() {
        modalImageContainer.style.display = "none";
    }
}

// Rinnai LP Cash promo

const modalRinnai = document.getElementById("rinnai-promo-modal");
const imgVideoRinnai = document.getElementById("rinnai-cash-promo-img");
const cashSplashVideoRinnai = document.getElementById("cash-video");
const rinnaiSpanCloseBtn = document.getElementsByClassName("rinnai-promo-close")[0];
const rinnaiViewportWidth = window.innerWidth;

if (!!imgVideoRinnai) {imgVideoRinnai.onclick = function(){
  modalRinnai.style.display = "block";
  if(rinnaiViewportWidth < 769) {
    cashSplashVideoRinnai.style.display = "none"
  }
  if(rinnaiViewportWidth > 769) {
    cashSplashVideoRinnai.play();
  }
}}

if (!!rinnaiSpanCloseBtn) {
  rinnaiSpanCloseBtn.onclick = function() {
    modalRinnai.style.display = "none";
  }
}

// Hager Promo LP

const hagerStepElements = Array.from(document.querySelectorAll('.sec2-hager-step'));
function animateElements() {
    hagerStepElements.forEach((element, index) => {
        // Calculate the delay for each element
        const delay = index * 1000; // Adjust the delay as needed
        // Apply animation to move elements from right to left
        setTimeout(() => {
        element.style.transform = 'translateX(0%)';
        element.style.opacity = "1";
        }, delay);
    });
}

// Call the animateElements function after a delay
if(!!hagerStepElements) {
setTimeout(animateElements, 1200); // Adjust the delay as needed
}

const zoomOutHagerElement = document.querySelector('.sec1-hager-hero-slider');
function zoomOut() {
// Set initial zoom scale
zoomOutHagerElement.style.transform = 'scale(2)';

// Delay the animation to allow the initial layout to render
setTimeout(() => {
    // Apply animation to zoom out the element
    zoomOutHagerElement.style.transform = 'scale(1)';
    }, 0); // Adjust the delay as needed
}

if (!!zoomOutHagerElement) {
    window.addEventListener('load', zoomOut)
}


// ------ Big Local Supporter Landing page ----

const bigSupporterBanner = document.querySelector('.big-supporter-sec1-ctn img');
const bigSupporterPreloader = document.querySelector('.big-supporter-sec1-preloader')
const bigSuppporterSec2 = document.querySelector(".big-supporter-sec2-maincontain-ctn")
const bigSuppporterSec3 = document.querySelector('.big-supporter-sec3-main-ctn')
function hideBigbanner() {
    setTimeout(() => {
        bigSupporterBanner.style.transform = "scale(0)"
    }, 1800)
    setTimeout(() => {
        bigSupporterPreloader.style.display = "none";
        bigSuppporterSec2.style.display = "block";
        bigSuppporterSec2.style.transform = "scale(1)";
        bigSuppporterSec2.style.height = "100%";
        bigSuppporterSec3.style.display = 'block';
    }, 2100)
}

if (!!bigSupporterPreloader) {
    window.addEventListener('load', hideBigbanner)
}

/**
 * BGWT menu temporary fix - delete after P1 deploy
 
window.addEventListener('DOMContentLoaded', () => {
    mapLinkToCategory('Camera Brackets','/c/CAMERABRACKETS');
    mapLinkToCategory('Edge Devices','/c/EDGEDEVICES');
    mapLinkToCategory('Networking','/c/NETWORKING');
    mapLinkToCategory('Transmission','/c/TRANSMISSION');
    mapLinkToCategory('Desktop & Workstations','/c/DESKTOPANDWORKSTATIONS');
    mapLinkToCategory('Server','/c/SERVER');
    mapLinkToCategory('Cable','/c/CICABLE');
    mapLinkToCategory('Copper','/c/CICOPPER');
    mapLinkToCategory('DSC Impassa','/c/DSCIMPASSA');
    mapLinkToCategory('Intrusion Qolsys','/c/INTRUSIONQOLYSYS');
    mapLinkToCategory('Panel Platform (Kantech)','/c/PANELPLATFORMKANTECH');
    mapLinkToCategory('Panel Platform (S2)','/c/PANELPLATFORMS2');
    mapLinkToCategory('Home Automation ZWave','/c/HOMEAUTOMATIONZWAVE');
    mapLinkToCategory('Platforms','/c/PLATFORMS');
});

const mapLinkToCategory = (name, link) => {
    let menus = document.querySelectorAll('.text');
    if(menus != undefined){
        menus.forEach(menu => {
            if(menu.innerHTML == name){
                menu.parentElement.setAttribute('href',link);
            }
        });
    }
};*/


// SammyShowcase 2023

let leftBlind = document.getElementById('blind-left')
let rightBlind = document.getElementById('blind-right')
let sammyTextCtn = document.querySelector('.sammy-shout-wordings-ctn')
let bubbles = document.querySelectorAll('.bubbles span')

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    if(!!leftBlind) {

        leftBlind.style.left = value * -1.5 +'px';
        rightBlind.style.right = value * -1.5 +'px';
        sammyTextCtn.style.top = value * -0.8 + 410 + 'px';
        Array.from(bubbles).map((bubble, index) => {
            bubble.style.top = value * -0.8 + 'px';
        })
    }
})

// temp fix samios appliances link
/*if (window.location.href.indexOf("samios.net.au") != -1){
    const getApplianceLink = document.querySelector('[title="Applicances"]');
    if(getApplianceLink){
        getApplianceLink.querySelector("span").innerText = "Appliances";
        getApplianceLink.setAttribute("title", "Appliances");
    }
    const getMarkingabellingLink = document.querySelector('[title="Marking & Labeling"]');
    if(getMarkingabellingLink){
        getMarkingabellingLink.href = "/sam/en/AUD/All-Categories/Hardware-%26-Consumables/Marking-%26-Labeling/c/MARKINGLABELLING";
    }

    const getEverHardLogo = document.querySelectorAll('.scaffoldSearchList .scaffoldSearchListResults .item .content .img img')
    if (Array.from(getEverHardLogo).length !== 0) {
        getEverHardLogo[14].src = "https://www.forzaglobal.com.au/wp-content/uploads/2021/10/Untitled-1.png";
        getEverHardLogo[13].src = "https://www.everhard.com.au/wp-content/themes/everhard/dist/img/logo.svg";
    }
}*/

// temp fix for dashboard amount decimal
if (typeof(document.querySelector("#valueAccountBalance")) != 'undefined' && document.querySelector("#valueAccountBalance") != null){
    let getValueAccBalanceDiv = document.querySelector("#valueAccountBalance");
    let getConvertedAccBalance = getValueAccBalanceDiv.innerText.split("$")[1];
    let convertAccBalanceNo = parseFloat(getConvertedAccBalance, 10);
    getValueAccBalanceDiv.textContent = "$" + convertAccBalanceNo.toFixed(2);
}
if (typeof(document.querySelector("#valueAccountRemaining")) != 'undefined' && document.querySelector("#valueAccountRemaining") != null){
    let getValueAccRemainingDiv = document.querySelector("#valueAccountRemaining");
    let getConvertedAccRemainingDiv = getValueAccRemainingDiv.innerText.split("$")[1];
    let convertAccRemainingNo = parseFloat(getConvertedAccRemainingDiv, 10);
    getValueAccRemainingDiv.textContent = "$" + convertAccRemainingNo.toFixed(2);
}


//Cnw Only Big One Banner Inject
/*
if (window.location.href.indexOf("cnw.com.au") != -1){
    if (typeof(document.querySelector(".scaffoldProductSearchGridWrapper")) != 'undefined' && document.querySelector(".scaffoldProductSearchGridWrapper") != null){
        let searchContainer = document.querySelector(".scaffoldProductSearchGridWrapper");

        let createLink = document.createElement("a");
        createLink.href = "https://shop.cnw.com.au/cnw-big-support";
        createLink.style.width = "100%";
        createLink.style.display = "flex";
        createLink.style.justifyContent = "center";

        let createImage = document.createElement("img");

        if (window.matchMedia("(max-width: 768px)").matches) {
            createImage.src = "https://i.ibb.co/v10y9WN/2023-Bo4-CNW-Online-Focus-Mobile-Tile-v1.jpg";
        } else {
            createImage.src = "https://i.ibb.co/6YN174F/2023-Bo4-CNW-Online-Focus-Desktop-Tile-v1.jpg";
        }

        createLink.appendChild(createImage);
        searchContainer.prepend(createLink);
    }
}*/


/**
 * SHERRIFF CLIPSAL CLICK FRENZY
 */
window.addEventListener('DOMContentLoaded', () => {
    try{
        new ClipsalClickFrenzyTwo();
    }catch(e){}
});
class ClipsalClickFrenzyTwo{
    constructor(){

        this.frenzyForm = document.querySelector('.frenzy-form');

        this.hiddenFrenzyCompany = document.querySelector('[name="hidden_frenzy_company"]');        
        this.hiddenFrenzyAccount = document.querySelector('[name="hidden_frenzy_account"]');        
        this.hiddenFrenzyEmail = document.querySelector('[name="hidden_frenzy_email"]');        
        this.hiddenFrenzyPhone = document.querySelector('[name="hidden_frenzy_phone"]');        
        this.hiddenFrenzyMonth = document.querySelector('[name="hidden_frenzy_month"]');   
        this.hiddenFrenzyMonthName = document.querySelector('[name="hidden_frenzy_month_name"]');   
        this.hiddenFrenzyMonthPoints = document.querySelector('[name="hidden_frenzy_month_points"]'); 
        this.hiddenFrenzyMonthRemainderPoints = document.querySelector('[name="hidden_frenzy_month_remainder_points"]'); 
        this.hiddenFrenzyBonusVoucher = document.querySelector('[name="hidden_frenzy_bonus_voucher"]'); 

        this.frenzySearchContainer = document.querySelector('.frenzy-search');
        this.frenzyCustomerRedemptionFormContainer = document.querySelector('.frenzy-customer-redemption-form');
        this.frenzyCustomerLoader = document.querySelector('.frenzy-customer-loader');

        this.selectFrenzySearch = document.querySelector('[name="select_frenzy_search"]');
        this.inputFrenzySearch = document.querySelector('[name="input_frenzy_search"]');

        this.frenzySearchCustomerData = document.querySelector('.frenzy-search-customer-data');
        this.frenzyCustomerRedemptionForm = document.querySelector('.frenzy-customer-redemption-form');

        this.frenzySearchButton = document.querySelector('.frenzy-search-buttons .search');
        this.frenzyRedeemButton = document.querySelector('.frenzy-search-buttons .redeem');

        this.monthsMap = new Map([
            ['2023-11','November'],
            ['2023-10','October'],
            ['2023-09','September']
        ]);

        this.hiddenFrenzyMonth.value = this.selectFrenzySearch.value;
        this.hiddenFrenzyMonthName.value = this.monthsMap.get(this.selectFrenzySearch.value);

        this.monthRegex = new RegExp(this.hiddenFrenzyMonth.value,'g');

        this.searchCustomerDataURL = 'https://archived-forms.bgwgroup.com.au/clipsal-click-frenzy/search-customer-data.php';
        this.customerEntries = 'https://archived-forms.bgwgroup.com.au/clipsal-click-frenzy/search-customer-entries.php';
        this.postCustomerEntries = 'https://archived-forms.bgwgroup.com.au/clipsal-click-frenzy/post-customer-entries.php';
        this.postCustomerEntriesSearchURL = `${this.host}/clipsal-click-frenzy/post-customer-search.php`;

        this.INTERVAL = 1000;

        this.init();
    }
    init(){
        this.clearSearchOnSelectChange();
        this.getCurrentMonthData();
        this.handleInputBoxBackspace();
        this.disableEnterAndSpacebarKeys();
        this.getRedeemedData();
    }
    clearSearchOnSelectChange(){
        this.selectFrenzySearch.addEventListener('change', () => {
            this.inputFrenzySearch.value = '';
            this.hiddenFrenzyMonth.value = this.selectFrenzySearch.value;
            this.hiddenFrenzyMonthName.value = this.monthsMap.get(this.selectFrenzySearch.value);
            this.monthRegex = new RegExp(this.hiddenFrenzyMonth.value,'g');
            this.clearFrenzySearchCustomerData();
            this.disableRedeemButton();
        });
    }
    getCurrentMonthData(){
        let formData = new FormData();
        let currentCompanyName = '';
        let currentAccount = '';
        let currentEmail = '';
        let currentPhone = '';
        let currentEntries = [];
        let currentMonth = '';
        let currentTotalRedeemableEntries = [];

        if(this.frenzySearchButton != undefined){
            this.frenzySearchButton.onclick = () => {
            
                this.clearCurrentCompany(currentCompanyName);
                this.clearCurrentAccount(currentAccount);
                this.clearCurrentEntriesArray(currentEntries);
                this.clearCurrentMonth(currentMonth);
                this.clearCurrentTotalRedeemableEntries(currentTotalRedeemableEntries);
                this.disableRedeemButton();
    
                formData.append('account', this.inputFrenzySearch.value);
                fetch(this.searchCustomerDataURL, {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(customerdata => {
                    if(customerdata.length > 0 && this.inputFrenzySearch.value >= 3){
    
                        for(const data of customerdata){
    
                            if ( data['entry_date'].includes(this.hiddenFrenzyMonth.value) ){
                                currentCompanyName = data['account_name'];
                                currentAccount = data['account'];
                                currentEntries.push(parseInt(data['entries']));
                                currentMonth = this.monthsMap.get(this.hiddenFrenzyMonth.value);
                            }else{
                                this.renderNoDataFromSearch();
                            }
    
                            if ( data['account'].includes('Total') ) {
                                currentEmail = data['email'];
                                currentPhone = data['phone'];
                                currentTotalRedeemableEntries.push(parseInt(data['entries']));
                            }

    
                        }

                        // record customer search results
                        this.setCustomerEntriesSearch(customerdata);

                        this.renderDataFromSearch(currentCompanyName, currentAccount, currentEmail, currentPhone, currentMonth, currentEntries, currentTotalRedeemableEntries);
    
                    }
                })
                .catch(err => console.log(err));
            }            
        }
    }
    getRedeemedData(){

        let entriesData = new FormData();
        let entriesSet = new Set();
        let entriesMonth = [];
        let entriesTotal = [];
        let entriesBonusVoucher = [];
        let currentEntriesTotal = 0;

        this.frenzyRedeemButton.addEventListener('click', () => {
            entriesData.append('account', this.hiddenFrenzyAccount.value);
            entriesData.append('entry_month', this.hiddenFrenzyMonthName.value);

            fetch(this.customerEntries,{
                method: 'POST',
                body: entriesData
            })
            .then(response => response.json())
            .then(currentEntries => {

                if( currentEntries.length == 0 ) {
                    this.hiddenFrenzyMonthRemainderPoints.value = this.hiddenFrenzyMonthPoints.value;
                }else if(currentEntries.length > 0){
                    
                    for(let data of currentEntries){

                        entriesMonth.push(...entriesSet.add(data['entry_month']));
                        entriesTotal.push(parseInt(data['entries'])); 
                        entriesBonusVoucher.push(data['bonus_100_voucher']);

                        currentEntriesTotal = this.getTotalSumOfArray(entriesTotal);
                                             
                    }

                    this.hiddenFrenzyMonthRemainderPoints.value = parseInt(this.hiddenFrenzyMonthPoints.value) - currentEntriesTotal;
                    this.hiddenFrenzyBonusVoucher.value = (entriesBonusVoucher[0] === null) ? 'eligible' : entriesBonusVoucher[0];
                }
            
            })
            .catch(err => console.log(err));

            // generate the redeem form data
            this.generateRedemptionForm();
        });

    }
    setCustomerEntriesSearch(customerRecords){

        let branch, account, accountName, phoneNumber, email = '';

        for(const element of customerRecords){
            if(element['branch'] != ''){
                branch = element['branch'] || 'No Branch';
            }
            if(element['account'] != ''){
                account = element['account'];
            }
            if(element['account_name'] != ''){
                accountName = element['account_name'];
            }
            if(element['phone'] != ''){
                phoneNumber = element['phone'];
            }else{
                phoneNumber = 'No Number';
            }
            if(element['email'] != ''){
                email = element['email'];
            }else{
                email = 'No Email';
            }
        }

        let postData = new FormData();
        postData.append('branch', branch);
        postData.append('account', account.replace(' Total',''));
        postData.append('accountName', accountName);
        postData.append('phoneNumber', phoneNumber);
        postData.append('email', email);

        fetch(this.postCustomerEntriesSearchURL, {
            method: 'post',
            body: postData
        })
        .then((search) => { })
        .catch((err) => { });
    }
    generateRedemptionForm(){

        this.hideFrenzySearchContainer();
        this.showLoader();
        let redeemRefreshCountdown = 5;

        setTimeout(() => {
            this.hideLoader();
            if(this.hiddenFrenzyMonthRemainderPoints.value === "0"){
                this.frenzyCustomerRedemptionFormContainer.innerHTML = `
                    <div class="back-btn-container">
                        <button class="back-button">Back</button>
                        <p><strong>You have already exceeded the max number of entries for the month of ${this.hiddenFrenzyMonthName.value}</strong></p>
                    </div>
                `;
            }else{
                this.frenzyCustomerRedemptionForm.innerHTML = `
                    <div class="back-btn-container">
                        <button class="back-button">Back</button>
                        <p><strong>(${this.hiddenFrenzyMonthRemainderPoints.value})</strong> remaining entries for the month of ${this.hiddenFrenzyMonthName.value}</p>
                    </div>
                    <div class="form-row">
                        <label>Account Number</label>
                        <input type="text" name="redeem_account" value="${this.hiddenFrenzyAccount.value}" readonly disabled="disabled">
                    </div>
                    <div class="form-row">
                        <label>Account Name</label>
                        <input type="text" name="redeem_account_name" value="${this.hiddenFrenzyCompany.value}" readonly disabled="disabled">
                    </div>
                    <div class="form-row">
                        <label>Entry Month</label>
                        <input type="text" name="redeem_entry_month" value="${this.hiddenFrenzyMonthName.value}" readonly disabled="disabled">
                    </div>
                    <div class="form-row">
                        <label>Email</label>
                        <input type="text" name="redeem_email" value="${this.hiddenFrenzyEmail.value}" ${this.hiddenFrenzyEmail.value.length > 0 ? `readonly disabled="disabled"` : `placeholder="Enter your email" required`}>
                    </div>
                    <div class="form-row">
                        <label>Contact Number</label>
                        <input type="text" name="redeem_contact_number" value="${this.hiddenFrenzyPhone.value}" ${this.hiddenFrenzyPhone.value.length > 0 ? `readonly disabled="disabled"` : `placeholder="Enter your phone number" required`} >
                    </div>
                    <div class="form-row form-select">
                        <label>$50 Voucher</label>
                        <select name="redeem_voucher">
                            <option value="LKSD">LKSD</option>
                            <option value="PREZZEE">Prezzee</option>
                        </select>
                    </div>
                    <div class="form-row form-number">
                        <label>$50 Voucher Entries (1 to 4)</label>
                        <input type="number" name="redeem_voucher_entries" min="1" max="${this.hiddenFrenzyMonthRemainderPoints.value}" value="${this.hiddenFrenzyMonthRemainderPoints.value}">
                    </div>
                    ${this.hiddenFrenzyMonthName.value === 'October' ? 
                    `<div class="form-row form-select">
                    ${this.hiddenFrenzyBonusVoucher.value == '' ?
                        `<span>You can claim ONLY 1 x Bonus $100 voucher for the month of ${this.hiddenFrenzyMonthName.value}</span>
                        <label>Claim 1x Bonus $100 Voucher</label>
                        <select name="redeem_bonus_voucher">
                            <option value="LKSD">LKSD</option>
                            <option value="PREZZEE">Prezzee</option>
                        </select>` : `<strong>You have already claimed your Bonus $100 voucher for ${this.hiddenFrenzyMonthName.value}</strong>`
                    }
                    </div>` : ``}
                    <div class="form-buttons">
                        <button class="redeem-entries" name="redeem_entries" title="Redeem Vouchers">Redeem Vouchers Entries</button>
                    </div>
                `;
            }
        }, this.INTERVAL);

        this.frenzyForm.addEventListener('click', (e) => {

            if(e.target.className === 'back-button'){
                this.clearFrenzyCustomerRedemptionFormContainer();
                this.showFrenzySearchContainer();
                window.location.reload();
            }

            let redeemAccount = e.currentTarget.querySelector('[name="redeem_account"]');
            let redeemAccountName = e.currentTarget.querySelector('[name="redeem_account_name"]');
            let redeemEmail = e.currentTarget.querySelector('[name="redeem_email"]');
            let redeemContactNumber = e.currentTarget.querySelector('[name="redeem_contact_number"]');
            let redeemEntryMonth = e.currentTarget.querySelector('[name="redeem_entry_month"]');
            let redeemVoucherEntries = e.currentTarget.querySelector('[name="redeem_voucher_entries"]');
            let redeemBonusVoucher = e.currentTarget.querySelector('[name="redeem_bonus_voucher"]');
            let redeemVoucher = e.currentTarget.querySelector('[name="redeem_voucher"]');

            if (e.target.className === 'redeem-entries'){

                e.target.setAttribute('disabled','disabled');

                let redeemPostData = new FormData();

                redeemPostData.append('account', redeemAccount.value);
                redeemPostData.append('account_name', redeemAccountName.value);
                redeemPostData.append('account_email', redeemEmail.value);
                redeemPostData.append('account_contact_number', redeemContactNumber.value);
                redeemPostData.append('entry_month', redeemEntryMonth.value);
                redeemPostData.append('entries', redeemVoucherEntries.value);
                if(redeemBonusVoucher != undefined || redeemBonusVoucher != null) {
                    redeemPostData.append('bonus_entries', '1');
                    redeemPostData.append('bonus_100_voucher', redeemBonusVoucher.value);
                }else if (this.hiddenFrenzyBonusVoucher.value.length > 0 && this.hiddenFrenzyMonthName.value == 'October') {
                    redeemPostData.append('bonus_entries', '0');
                    redeemPostData.append('bonus_100_voucher', 'Bonus Entry Already Redeemed');
                }else if (redeemBonusVoucher == undefined || redeemBonusVoucher == null) {
                    redeemPostData.append('bonus_entries', '0');
                    redeemPostData.append('bonus_100_voucher', 'None');
                }
                redeemPostData.append('voucher', redeemVoucher.value);

                fetch(this.postCustomerEntries, {
                    method: 'POST',
                    body: redeemPostData
                })
                .then(response => response.json())
                .then(redeem => {
                    if(redeem.status){

                        let redeemMessage = document.createElement('section');
                        redeemMessage.className = 'frenzy-redeem-message';

                        setInterval(() => {
                            redeemRefreshCountdown = redeemRefreshCountdown - 1;

                            redeemMessage.innerHTML = `
                                <div class="frenzy-redeem-spinner"><span></span></div>
                                <div class="frenzy-redeem-text"><p>Refreshing in ... ${redeemRefreshCountdown}</div>
                            `;

                            if(redeemRefreshCountdown == 0){
                                window.location.reload();
                            }

                        }, this.INTERVAL);

                        this.frenzyForm.appendChild(redeemMessage);
                    }
                })
                .catch(err => console.log(err));
            }

        });
    }
    handleInputBoxBackspace(){

        this.inputFrenzySearch.addEventListener('keyup', (e) => {

            e.preventDefault();
            if(this.inputFrenzySearch.value.length < 5){
                this.disableRedeemButton();
                this.clearFrenzySearchCustomerData();
            }
        });
    
    }
    disableEnterAndSpacebarKeys(){
        this.inputFrenzySearch.addEventListener('keypress', (e) => {
            if(e.keyCode == 13 && e.keyCode == 32){
                return false;
            }
        });
    }
    accessRedeemButton(){
        this.frenzyRedeemButton.removeAttribute('disabled');
    }
    disableRedeemButton(){
        this.frenzyRedeemButton.setAttribute('disabled','disabled');
    }
    clearCurrentCompany(company){
        company = '';
    }
    clearCurrentAccount(account){
        account = '';
    }
    clearCurrentEntriesArray(array){
        array.length = 0;
    }
    clearCurrentMonth(month){
        month = '';
    }
    clearCurrentTotalRedeemableEntries(entries){
        entries.length = 0;
    }
    clearFrenzySearchCustomerData(){
        this.frenzySearchCustomerData.innerHTML = ``;
    }
    clearFrenzyCustomerRedemptionFormContainer(){
        this.frenzyCustomerRedemptionFormContainer.innerHTML = ``;
    }
    showFrenzySearchContainer(){
        this.frenzySearchContainer.classList.remove('hide-frenzy-search');
    }
    hideFrenzySearchContainer(){
        this.frenzySearchContainer.classList.add('hide-frenzy-search');
    }
    showLoader(){
        this.frenzyCustomerLoader.classList.add('show-frenzy-loader');
    }
    hideLoader(){
        this.frenzyCustomerLoader.classList.remove('show-frenzy-loader');
    }
    getTotalSumOfArray(array){
        return array.reduce((accumulator, num) => accumulator + num);
    }
    renderDataFromSearch(company, account, email, phone, month, entries, totalRedeemableEntries){
        this.frenzySearchCustomerData.innerHTML = `
            <article class="frenzy-search-data-wrapper">
                <section class="frenzy-search-company"><strong>${company}</strong></section>
                <section class="frenzy-search-data">
                    <span>Selected Month</span>
                    <span>${month}</span>
                    <span>${month} Points</span>
                    <span><strong>${this.getTotalSumOfArray(entries)}</strong></span>
                </section>
                <section class="frenzy-search-disclaimer"><sup>*</sup>Max number of entries to redeem for ${month} is <strong>${totalRedeemableEntries}</strong></section>
            </article>
        `;
        this.accessRedeemButton();

        // populate hidden fields
        this.hiddenFrenzyCompany.value = company;
        this.hiddenFrenzyAccount.value = account;
        this.hiddenFrenzyEmail.value = email;
        this.hiddenFrenzyPhone.value = phone;
        this.hiddenFrenzyMonthPoints.value = (this.getTotalSumOfArray(entries) > 4) ? 4 : this.getTotalSumOfArray(entries);
    }
    renderNoDataFromSearch(){
        this.frenzySearchCustomerData.innerHTML = `<span>No Data</span>`;
    }
}

/**
 * CNW BIG SUPPORTER (BO4)
 */
window.addEventListener('DOMContentLoaded', () => {
    if(location.href.match(/cnw-big-support/gi)){
        new BigSupporter();
    }
});
class BigSupporter{
    constructor(){
        this.dev = false;
        this.host = (this.dev) ? `http://localhost/big-supporter` : `https://archived-forms.bgwgroup.com.au/big-supporter`;

        this.getCustomerDataURL = `${this.host}/get_customer_data.php`;
        this.getCustomerSearchDataURL = `${this.host}/get_customer_search_data.php`;

        this.date = new Date();
        this.month = this.date.getMonth() + 1;

        this.months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

        this.INTERVAL = 1000;
        this.entries = 0;
        this.bonusEntries = 0;
        this.onlineRewards = 0;

        this.customerNameFromData = [];

        this.bigSupportButton = document.querySelector('.big-support-button button');
        this.bigSupportForm = document.querySelector('#bigSupportForm');
        this.customerAccountSearch = document.querySelector('[name="customerAccountSearch"]');
        this.entriesLoader = document.querySelector('.entries-loader');
        this.entriesCustomerName = document.querySelector('.entries-customer-name');
        this.entriesDisplay = document.querySelector('.entries-display');

        this.init();
    }
    init(){
        this.getCustomerData();
        this.toggleForm();
    }
    toggleForm(){
        if(this.bigSupportButton != undefined){
            this.bigSupportButton.addEventListener('click', () => {
                this.bigSupportButton.parentElement.nextElementSibling.classList.toggle('big-support-show-form');
            });
        }
    }
    getCurrentMonth(){
        return this.months[this.month - 1];
    }
    getCustomerData(){
        
        if(this.bigSupportForm != undefined && this.customerAccountSearch != undefined){
            this.bigSupportForm.addEventListener('submit', (e) => {
                e.preventDefault();
                return false;
            });

            this.customerAccountSearch.addEventListener('keyup', () => {

                let customerAccount = this.customerAccountSearch.value;

                let postData = new FormData();
                postData.append('customer_account', customerAccount);

                if(customerAccount.length >= 3){

                    this.createLoader();
                    this.clearEntriesDisplay();
                    this.clearCustomerName();

                    setTimeout(() => {
                        fetch(this.getCustomerDataURL, {
                            method: 'post',
                            body: postData
                        })
                        .then((response) => { return response.json(); })
                        .then((customerEntries) => {
                            if(customerEntries.length > 0){

                                this.clearLoader();
                            
                                this.drawEntriesDisplay(customerEntries, 'Aug');    
                                this.drawEntriesDisplay(customerEntries, 'Sep');    
                                this.drawEntriesDisplay(customerEntries, 'Oct');    
                                this.setCustomerName(this.customerNameFromData[0]);

                                // capture the searched data
                                setTimeout(() => {
                                    this.getSearchDetails(customerEntries);
                                }, this.INTERVAL);
                            }else{
                                this.entriesCustomerName.innerHTML = `<span>No entries found</span>`;
                            }
                        })
                        .catch((error) => {
                            console.log(`Exception: ${error}`);
                        });
                    }, this.INTERVAL);
                }else{
                    this.clearLoader();
                    this.clearEntriesDisplay();
                    this.clearCustomerName();
                }
            });
        }
    }

    getSearchDetails(data){
        for (let i = 0; i < data.length; i++){
            if(i == 0){
                let postData = new FormData();
                postData.append('branch', data[i]['home_branch']);
                postData.append('account', data[i]['customer_account']);
                postData.append('accountName', data[i]['customer_name']);
                postData.append('phoneNumber', data[i]['main_phone_number']);
                postData.append('email', data[i]['main_email']);

                fetch(this.getCustomerSearchDataURL, {
                    method: 'post',
                    body: postData
                })
                .then((search) => { })
                .catch((err) => { });
            }
        }
    }
    drawEntriesDisplay(customerEntries, month){
        for(let i = 0 ; i < customerEntries.length; i++){

            if(customerEntries[i]['customer_name']){
                this.clearCustomerFromDataArray();
                this.customerNameFromData.push(customerEntries[i]['customer_name']);
            }

            if ( RegExp(`\\b${month}\\b`,"gi").exec(customerEntries[i]['month']) ) {

                this.entries = parseInt(customerEntries[i]['entries_spend']);
                this.bonusEntries = parseInt(customerEntries[i]['entries_product']);                                        

                let entriesDiv = document.createElement('div');
                entriesDiv.className = 'entries-data';

                let entriesDivMonth = document.createElement('div');
                entriesDivMonth.className = 'entries-month';
                if(month === 'Aug'){
                    entriesDivMonth.innerHTML = `August`;
                }else if (month === 'Sep'){
                    entriesDivMonth.innerHTML = `September`;
                }else if (month === 'Oct'){
                    entriesDivMonth.innerHTML = `October`;
                }

                entriesDiv.appendChild(entriesDivMonth);
                
                if(customerEntries[i]['entries_spend']){
                    let entriesSpendDiv = document.createElement('div');
                    entriesSpendDiv.className = 'entries-spend';
                    entriesSpendDiv.innerHTML = `
                        <strong>Entries</strong>
                        <span>${customerEntries[i]['entries_spend']}</span>
                    `;
                    entriesDiv.appendChild(entriesSpendDiv);
                }

                if(customerEntries[i]['entries_product']){
                    let entriesBonusDiv = document.createElement('div');
                    entriesBonusDiv.className = 'entries-product';
                    entriesBonusDiv.innerHTML = `
                        <strong>Bonus Entries</strong>
                        <span>${customerEntries[i]['entries_product']}</span>
                    `;
                    entriesDiv.appendChild(entriesBonusDiv);
                }

                if ( RegExp(/Total/gi).exec(customerEntries[i+1]['month']) ){

                    let entriesOnlineRewardsDiv = document.createElement('div');
                    entriesOnlineRewardsDiv.className = 'entries-online-rewards';
                    entriesOnlineRewardsDiv.innerHTML = `
                        <strong>Online Rewards</strong>
                        <span>${customerEntries[i+1]['total_entries']}</span>
                    `;
                    entriesDiv.appendChild(entriesOnlineRewardsDiv);

                    this.onlineRewards = parseInt(customerEntries[i+1]['total_entries']);
                }

                this.entriesDisplay.appendChild(entriesDiv);
            }

        }  
    }
    clearCustomerFromDataArray(){
        this.customerNameFromData.length = 0;
    }
    clearEntriesDisplay(){
        this.entriesDisplay.innerHTML = ``;
    }
    setCustomerName(name){
        this.entriesCustomerName.innerHTML = `<span>${name}</span>`;
    }
    clearCustomerName(){
        this.entriesCustomerName.innerHTML = ``;
    }
    createLoader(){
        this.entriesLoader.innerHTML = `
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        `;
    }
    clearLoader(){
        this.entriesLoader.innerHTML = ``;
    }
}
/**
 * SAMIOS SAMMY SHOWCASE 2023
 */
window.addEventListener('DOMContentLoaded', () => {
    if(location.href.match(/sammy-showcase-2023/gi)){
        new SammyShowcaseEntries();
    }
});
class SammyShowcaseEntries {
    constructor() {
        this.development = false;
        this.host = (this.development) ? `http://localhost/sammy-showcase` : `https://archived-forms.bgwgroup.com.au/sammy-showcase`;

        this.entriesURL = `${this.host}/get_entries.php`;
        this.sammyEntriesSearchURL = `${this.host}/get_customer_search_entries.php`;

        this.showcaseButton = document.querySelector('.s-showcase-button button');
        this.showcaseEntriesContent = document.querySelector('.s-showcase-entries-content');
        this.showcaseEntriesSearch = document.querySelector('[name="showcaseEntries"]');
        this.showcaseEntriesDisplay = document.querySelector('.s-showcase-entries-display');
        this.showcaseEntriesLoader = document.querySelector('.s-showcase-entries-loader')

        this.INTERVAL = 1000;

        this.init();
    }
    init() {
        this.getEntries();
        this.toggleEntries();
    }
    toggleEntries() {
        if (this.showcaseButton != undefined) {
            this.showcaseButton.addEventListener('click', () => {
                this.showcaseEntriesContent.classList.toggle('show-content');
            });
        }
    }
    getEntries() {
        if (this.showcaseEntriesSearch != undefined) {
            this.showcaseEntriesSearch.addEventListener('keyup', () => {
                let searchValue = this.showcaseEntriesSearch.value;

                if (searchValue >= 2) {

                    this.clearEntries();
                    this.renderLoader();
                    this.removeBGToEntriesDisplay();

                    setTimeout(() => {

                        let postData = new FormData();
                        postData.append('customer_account', searchValue);

                        fetch(this.entriesURL, {
                            method: 'post',
                            body: postData
                        })
                            .then((response) => { return response.json(); })
                            .then((entries) => {
                                if (entries.length > 0) {

                                    this.addBGToEntriesDisplay();

                                    this.renderEntries(entries);
                                    this.clearLoader();

                                    // capture search and record it
                                    setTimeout(() => {
                                        this.getSearchDetails(entries);
                                    }, this.INTERVAL);
                                } else{
                                    this.renderNoEntries();
                                    this.clearLoader();
                                }
                            })
                            .catch((error) => { console.log(error) });
                    }, this.INTERVAL);
                } else {
                    this.clearEntries();
                    this.clearLoader();
                    this.removeBGToEntriesDisplay();
                }
            });
        }
    }
    getSearchDetails(entries){
        for(let i = 0; i < entries.length; i++){
            if(i == 0){
                let searchPostData = new FormData();
                searchPostData.append('branch', entries[i]['home_branch']);
                searchPostData.append('account', entries[i]['customer_account']);
                searchPostData.append('accountName', entries[i]['customer_name']);
                searchPostData.append('phoneNumber', entries[i]['main_phone']);
                searchPostData.append('email', entries[i]['main_email']);

                fetch(this.sammyEntriesSearchURL, {
                    method: 'post',
                    body: searchPostData
                })
                .then((search) => { })
                .catch((err) => { });
            }
        }
    }
    renderEntries(entries) {
        for (const entry of entries) {

            this.showcaseEntriesDisplay.innerHTML = `
                <div class="s-showcase-customer-name">
                    <strong>Name</strong>
                    <span>${entry['customer_name']}</span>
                </div>
                <div class="s-showcase-customer-entries">
                    <strong>Entries</strong>
                    <span>${entry['entries']}</span>
                </div>
                <!--
                <div class="s-showcase-qual-periods">
                    <strong>Qualifying Periods</strong>
                    <span>${entry['qualifying_periods']}</span>
                </div> -->
            `;
        }
    }
    clearEntries() {
        this.showcaseEntriesDisplay.classList.remove('bg-white');
        this.showcaseEntriesDisplay.innerHTML = ``;
    }
    renderNoEntries(){
        this.showcaseEntriesDisplay.classList.add('bg-white');
        this.showcaseEntriesDisplay.innerHTML = `
            <div class="s-showcase-customer-name">
                <strong>Error</strong>
                <span>No entries found</span>
            </div>`;
    }
    renderLoader() {
        this.showcaseEntriesLoader.innerHTML = `
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        `;
    }
    clearLoader() {
        this.showcaseEntriesLoader.innerHTML = ``;
    }
    addBGToEntriesDisplay(){
        this.showcaseEntriesDisplay.classList.add('bg-white');
    }
    removeBGToEntriesDisplay(){
        this.showcaseEntriesDisplay.classList.remove('bg-white');
    }
}

/**
 * TEMP hide invoices data on dashboard home
 */
window.addEventListener('DOMContentLoaded', () => {

     if (window.location.href.indexOf("/my-account") > -1) {

         try {
           let getInvoiceChartBlock = document.querySelector(".dashboard-stats-chart-invoices");
            getInvoiceChartBlock.querySelector(".stats-block-left").style.display = "none";
            getInvoiceChartBlock.querySelector(".stats-block-inner-split").style.display = "none";
            getInvoiceChartBlock.querySelector(".stats").style.height = "100%";
            getInvoiceChartBlock.querySelector(".stats-block-wrapper").style.display = "flex";
            getInvoiceChartBlock.querySelector(".stats-block-wrapper").style.justifyContent = "center";
            getInvoiceChartBlock.querySelector(".stats-block-wrapper").style.alignItems = "center";
            getInvoiceChartBlock.querySelector(".stats-block-split").style.display = "flex";
            getInvoiceChartBlock.querySelector(".stats-block-split").style.justifyContent = "center";
            getInvoiceChartBlock.querySelector(".stats-block-split").style.alignItems = "center";
        } catch (e) {}

     }
});

/**
 * NEW EXPERIENCE LANDING PAGE SWIPER
 */
//Landing Pages

if (window.location.href.indexOf("/new-experience") != -1) {
    var swiper = new Swiper(".mySwiperLaunchPage", {
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
      },
    });
  }
