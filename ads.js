/* use strict */
var endPoint1 = "https://fit-com.tk/ads_page/?json=1";
var endPoint2 = "https://fit-com.tk/ads_pages_side_small/?json=1";
var endPoint3 = "https://fit-com.tk/ads_pages_side_small/?json=1";
var endPoint4 = "https://fit-com.tk/ads_page_side_vertical/?json=1";

var homeLink = "https://iformatlogic.com/";
var divAds1 = document.querySelectorAll('div#ads_location');
var divAds2 = document.querySelectorAll('div#ads_location_side_small');
var divAds3 = document.querySelectorAll('div#ads_location_fixed_bottom');
var divAds4 = document.querySelectorAll('div#ads_location_side_vertical');

var interval = 3000;
// console.log(divAds);



/* Set the body for ads */
document.getElementsByTagName("body")[0].setAttribute("class", "adsBody");


getAds1(function(ads) {

    // console.log(ads);
    let wp_page = ads.page.attachments;
    // console.log(wp_page);
    // console.log(wp_page.length);
    
    /* Display random pulled images */
    setInterval(function() {
        
        var randImageIndex =  Math.floor(Math.random() * wp_page.length);
        // console.log(randImageIndex);    
        divAds1.forEach(function(el, i) {
            el.innerHTML =
                `
                 <div id="ads_request_container" class="ads_id_${i}">
                    <div class="ads_main_content" style="position:relative">
                        
                        <a class="ads_link" href="${homeLink}" target="_blank">
                            <img src="${wp_page[randImageIndex].url}">
                            
                        </a>
                        <span class="ads_close">&times;</span>
                    </div>
                </div>`
                ;
        });
		

        var adsClose = document.querySelectorAll('.ads_close');
        // console.log(adsClose);

        adsClose.forEach(function(exitAds, exitAdsId) {
            exitAds.addEventListener('click', function(){
                // console.log(exitAdsId);
                var getParent = this.parentNode.parentNode.parentNode;
                getParent.style.display = 'none';
                console.log('.'+this.className+ ' parent node #'+getParent.id+ ' has been closed with id = ' +exitAdsId +
                ' and will return for some time.');
            });
        });
    }, interval);
    
    
    
});


function getAds1(callback) {
    /* Initialize XMLHttpRquest */
    let adsRquest = new XMLHttpRequest();
    adsRquest.open('GET', endPoint1, true);
    adsRquest.send();
    
    /* Event */
    adsRquest.onreadystatechange = function(e) {
        if (adsRquest.readyState == 4 && adsRquest.status == 200) {
            let response = JSON.parse(adsRquest.responseText); // parse request

            callback(response);
        }
    }; 
    
}



getAds2(function(ads) {

    // console.log(ads);
    let wp_page = ads.page.attachments;
    // console.log(wp_page);
    // console.log(wp_page.length);
    
    /* Display random pulled images */
    setInterval(function() {
        
        var randImageIndex =  Math.floor(Math.random() * wp_page.length);
        // console.log(randImageIndex);    
        divAds2.forEach(function(el, i) {
            el.innerHTML =
                `
                 <div id="ads_request_container" class="ads_id_${i}">
                    <div class="ads_main_content ads_right">
                        <span class="ads_close ">&times;</span>
                        <a class="ads_link" href="${homeLink}" target="_blank">
                            <img src="${wp_page[randImageIndex].url}">
                        </a>
                    </div>
                </div>`
                ;
        });
		

        var adsClose = document.querySelectorAll('.ads_close');
        // console.log(adsClose);

        adsClose.forEach(function(exitAds, exitAdsId) {
            exitAds.addEventListener('click', function(){
                // console.log(exitAdsId);
                var getParent = this.parentNode.parentNode.parentNode;
                getParent.style.display = 'none';
                console.log('.'+this.className+ ' parent node #'+getParent.id+ ' has been closed with id = ' +exitAdsId +
                ' and will return for some time.');
            });
        });
    }, interval);
    
    
    
});

function getAds2(callback) {
    /* Initialize XMLHttpRquest */
    let adsRquest = new XMLHttpRequest();
    adsRquest.open('GET', endPoint2, true);
    adsRquest.send();
    
    /* Event */
    adsRquest.onreadystatechange = function(e) {
        if (adsRquest.readyState == 4 && adsRquest.status == 200) {
            let response = JSON.parse(adsRquest.responseText); // parse request

            callback(response);
        }
    }; 
    
}





getAds3(function(ads) {

    // console.log(ads);
    let wp_page = ads.page.attachments;
    // console.log(wp_page);
    // console.log(wp_page.length);
    
    /* Display random pulled images */
    setInterval(function() {
        
        var randImageIndex =  Math.floor(Math.random() * wp_page.length);
        // console.log(randImageIndex);    
        divAds3.forEach(function(el, i) {
            el.innerHTML =
                `
                 <div id="ads_request_container" class="ads_id_${i}">
                    <div class="ads_main_content " style="position:relative">
                   
                        <a class="ads_link" href="${homeLink}" target="_blank">
                            <img src="${wp_page[randImageIndex].url}">
							
                        </a>
                         <span class="ads_close">&times;</span>
                    </div>
                </div>`
                ;
        });
		

        var adsClose = document.querySelectorAll('.ads_close');
        // console.log(adsClose);

        adsClose.forEach(function(exitAds, exitAdsId) {
            exitAds.addEventListener('click', function(){
                // console.log(exitAdsId);
                var getParent = this.parentNode.parentNode.parentNode;
                getParent.style.display = 'none';
                console.log('.'+this.className+ ' parent node #'+getParent.id+ ' has been closed with id = ' +exitAdsId +
                ' and will return for some time.');
            });
        });
    }, interval);
    
    
    
});

function getAds3(callback) {
    /* Initialize XMLHttpRquest */
    let adsRquest = new XMLHttpRequest();
    adsRquest.open('GET', endPoint1, true);
    adsRquest.send();
    
    /* Event */
    adsRquest.onreadystatechange = function(e) {
        if (adsRquest.readyState == 4 && adsRquest.status == 200) {
            let response = JSON.parse(adsRquest.responseText); // parse request

            callback(response);
        }
    }; 
    
}





getAds4(function(ads) {

    // console.log(ads);
    let wp_page = ads.page.attachments;
    // console.log(wp_page);
    // console.log(wp_page.length);
    
    /* Display random pulled images */
    setInterval(function() {
        
        var randImageIndex =  Math.floor(Math.random() * wp_page.length);
        // console.log(randImageIndex);    
        divAds4.forEach(function(el, i) {
            el.innerHTML =
                `
                 <div id="ads_request_container" class="ads_id_${i}">
                    <div class="ads_main_content ">
                        <span class="ads_close ">&times;</span>
                        <a class="ads_link" href="${homeLink}" target="_blank">
                            <img src="${wp_page[randImageIndex].url}">
                        </a>
                    </div>
                </div>`
                ;
        });
		

        var adsClose = document.querySelectorAll('.ads_close');
        // console.log(adsClose);

        adsClose.forEach(function(exitAds, exitAdsId) {
            exitAds.addEventListener('click', function(){
                // console.log(exitAdsId);
                var getParent = this.parentNode.parentNode.parentNode;
                getParent.style.display = 'none';
                console.log('.'+this.className+ ' parent node #'+getParent.id+ ' has been closed with id = ' +exitAdsId +
                ' and will return for some time.');
            });
        });
    }, interval);
    
    
    
});

function getAds4(callback) {
    /* Initialize XMLHttpRquest */
    let adsRquest = new XMLHttpRequest();
    adsRquest.open('GET', endPoint4, true);
    adsRquest.send();
    
    /* Event */
    adsRquest.onreadystatechange = function(e) {
        if (adsRquest.readyState == 4 && adsRquest.status == 200) {
            let response = JSON.parse(adsRquest.responseText); // parse request

            callback(response);
        }
    }; 
    
}








/* Display all pulled images
     wp_page.forEach (function(el, i ) {   
        images += `
            <a href="${el.url}">
                <img src="${el.url}" alt="image${i}" width="300" style="float: left;">
            </a>
        `;
    });
    divAds.innerHTML = images;  * End code */