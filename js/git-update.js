

// temp delete after p1 deploy 10/01/24
if (window.location.href.indexOf("cart/customer-quote-generator") != -1){
    document.querySelector(".openAddPrice").addEventListener("click", ()=>{
        document.querySelector('[dialog-id="dialogOpenAdditionalPrices"]').showModal();
    });

    let getTempTotals = document.querySelectorAll('.align-right');
    if(getTempTotals.length > 4){
        for(const total of getTempTotals){
            if(total.classList.contains("filled")){
                if(total.textContent != "Sub Total" && total.textContent != "Total"){
                    let blankTd = document.createElement("td");
                    total.parentNode.prepend(blankTd)
                }
            }
        }
    }
};

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
        // MaintenanceBanner.prototype.renderBanner();
    }

     MaintenanceBanner.prototype.closeBanner();
     MaintenanceBanner.prototype.fullScreenBanner();
};
// no need to use renderBanner
MaintenanceBanner.prototype.renderBanner = () => {
    let sapMaintenanceBanner = document.createElement('div');
    sapMaintenanceBanner.className = 'sap-maintenance-banner';
    sapMaintenanceBanner.innerHTML = `
        <span>Hello, our website is currently undergoing scheduled maintenance and all online services will be unavailable until 05:00am AEST Tuesday. For any urgent matters please contact <a href="mailto:online.support@bgwgroup.com.au">online.support@bgwgroup.com.au</a> or your local branch.</span>
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
    <span style="position: absolute;top: 50%;left: 0;right: 0;width: 100%;max-width: 800px;margin-left: auto;margin-right: auto;padding: 2rem;transform: translateY(-50%);line-height: 1.5rem; text-align: center;">Hello, our website is currently undergoing scheduled maintenance and all online services will be unavailable until 05:00am AEST Tuesday. For any urgent matters please contact <a href="mailto:online.support@bgwgroup.com.au">online.support@bgwgroup.com.au</a> or your local branch.</span>
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
    if(location.href.match(/clipsal-click-frenzy/gi)){
        try{
            new ClipsalClickFrenzyTwo();
        }catch(e){}
    }
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
        this.hiddenFrenzyEligibleBonusHundredVoucher = document.querySelector('[name="hidden_frenzy_eligible_october_bonus_voucher"]');

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

        this.host = 'https://archived-forms.bgwgroup.com.au';

        this.searchCustomerSeptemberDataURL = `${this.host}/clipsal-click-frenzy/search-customer-data-september.php`;
        this.searchCustomerOctoberDataURL = `${this.host}/clipsal-click-frenzy/search-customer-data-october.php`;
        this.searchCustomerDataURL = `${this.host}/clipsal-click-frenzy/search-customer-data.php`;
        this.customerEntries = `${this.host}/clipsal-click-frenzy/search-customer-entries.php`;
        this.postCustomerEntries = `${this.host}/clipsal-click-frenzy/post-customer-entries.php`;
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
        let currentEligibleOctoberHundredVoucher = '';

        if(this.frenzySearchButton != undefined){
            this.frenzySearchButton.onclick = () => {
            
                this.clearCurrentCompany(currentCompanyName);
                this.clearCurrentAccount(currentAccount);
                this.clearCurrentEntriesArray(currentEntries);
                this.clearCurrentMonth(currentMonth);
                this.clearCurrentTotalRedeemableEntries(currentTotalRedeemableEntries);
                this.clearCurrentEligibleOctoberHundredVoucher(currentEligibleOctoberHundredVoucher);
                this.disableRedeemButton();
    
                formData.append('account', this.inputFrenzySearch.value);

                if(this.selectFrenzySearch.value === '2023-11') {
                    // search through November database table
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
    
                            this.renderDataFromSearch(currentCompanyName, currentAccount, currentEmail, currentPhone, currentMonth, currentEntries, currentTotalRedeemableEntries,'');
        
                        }
                    })
                    .catch(err => console.log(err));
                    
                }else if (this.selectFrenzySearch.value === '2023-10') {
                    // search through October database table
                    fetch(this.searchCustomerOctoberDataURL, {
                        method: 'POST',
                        body: formData
                    })
                    .then(response => response.json())
                    .then(customerdata => {
                        if(customerdata.length > 0 && this.inputFrenzySearch.value >= 3){
        
                            for(const data of customerdata){
        
                                if ( data['date'].includes(this.hiddenFrenzyMonth.value) && data['invoice'].includes('Total:')){
                                    currentCompanyName = data['account_name'];
                                    currentAccount = data['account'];
                                    currentEntries.push(parseInt(data['entries']));
                                    currentMonth = this.monthsMap.get(this.hiddenFrenzyMonth.value);
                                    currentEmail = data['email'];
                                    currentPhone = data['main_phone'];
                                    currentTotalRedeemableEntries.push(parseInt(data['entries']));
                                    currentEligibleOctoberHundredVoucher = data['bonus_100_voucher'];
                                }else{
                                    this.renderNoDataFromSearch();
                                }
        
                            }
    
                            // record customer search results
                            this.setCustomerEntriesSearch(customerdata);
    
                            this.renderDataFromSearch(currentCompanyName, currentAccount, currentEmail, currentPhone, currentMonth, currentEntries, currentTotalRedeemableEntries, currentEligibleOctoberHundredVoucher);
        
                        }
                    })
                    .catch(err => console.log(err));
                    // search through September database table
                }else if (this.selectFrenzySearch.value === '2023-09') {
                    // search through September database table
                    fetch(this.searchCustomerSeptemberDataURL, {
                        method: 'POST',
                        body: formData
                    })
                    .then(response => response.json())
                    .then(customerdata => {
                        if(customerdata.length > 0 && this.inputFrenzySearch.value >= 3){
        
                            for(const data of customerdata){
        
                                if ( data['date'].includes(this.hiddenFrenzyMonth.value) && data['invoice'].includes('Total:') ){
                                    currentCompanyName = data['account_name'];
                                    currentAccount = data['account'];
                                    currentEntries.push(parseInt(data['entries']));
                                    currentMonth = this.monthsMap.get(this.hiddenFrenzyMonth.value);
                                    currentEmail = data['email'];
                                    currentPhone = data['main_phone'];
                                    currentTotalRedeemableEntries.push(parseInt(data['entries']));
                                }else{
                                    this.renderNoDataFromSearch();
                                }

                            }
    
                            // record customer search results
                            this.setCustomerEntriesSearch(customerdata);
    
                            this.renderDataFromSearch(currentCompanyName, currentAccount, currentEmail, currentPhone, currentMonth, currentEntries, currentTotalRedeemableEntries, '');
        
                        }
                    })
                    .catch(err => console.log(err));
                }
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
                    ${this.hiddenFrenzyMonthName.value == 'October' && this.hiddenFrenzyEligibleBonusHundredVoucher.value == 'Yes' ? 
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
    clearCurrentEligibleOctoberHundredVoucher(eligible){
        eligible = '';
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
    renderDataFromSearch(company, account, email, phone, month, entries, totalRedeemableEntries, eliglibleOctoberVoucher){
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
        this.hiddenFrenzyEligibleBonusHundredVoucher.value = eliglibleOctoberVoucher;
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
