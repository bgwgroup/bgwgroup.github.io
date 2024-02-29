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


['DOMContentLoaded'].forEach((event) => {
    window.addEventListener(event, () => {
        try {
            colouringCompetitionYear();
        } catch (error) {}
        shopByToggleFacets();
        loadExternalScripts();
        removeBrandsClassCategoryFacets();
    });
});

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
