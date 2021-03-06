var work = {
    "htmlOuterTemplate": "<section class=\"entry\"></section>",
    "htmlInnerTemplates": [{
        "url": "<div class=\"entry-titel\"><a target=\"_blank\" href=\"%data%\">",
        "employer": "%data%",
        "title": " - %data%</a></div>"
    },  {
        "picture": "<section class=\"entry-content\"><figure class=\"entry-fig\"><img class=\"entry-pic\" src=\"%data%\" ",
        "srcset": "srcset=\"%data%\" sizes=\"(min-width: 1601px) 30vw, (min-width: 1001px) 20vw, (min-width: 701px) 30vw, (min-width: 501px) 45vw, 45vw\" ",
        "alt": "alt=\"%data%\"></img></figure>",
        "description": "<aside class=\"entry-description\"><p>%data%</p></aside></section>"
    }, {
        "dates": "<footer class=\"entry-footer\"><hr><p class=\"date-location-text\">%data%<br>",
        "location": "%data%</p></footer>"
    }],
    "jobs": [{
        "employer": "Nordea Markets",
        "title": "Assistant Analyst",
        "picture": "images/optimized/Nordea1-400.png",
        "srcset": "images/optimized/Nordea1-200.png 200w, images/optimized/Nordea1-300.png 300w, images/optimized/Nordea1-400.png 400w",
        "url": "http://www.nordeamarkets.com/",
        "alt": "Picture of Nordea",
        "dates": "2011 - 2016",
        "location": "Copenhagen, Denmark",
        "description": "Working on different projects regarding developing marked requirements and internal initiatives assuring " +
                        "optimal implementation.<br><br>Developing & producing business intelligence solutions."
    }, {
        "employer": "Nordea Bank",
        "title": "Temp. Employee",
        "picture": "images/optimized/Nordea2-400.png",
        "srcset": "images/optimized/Nordea2-200.png 200w, images/optimized/Nordea2-300.png 300w, images/optimized/Nordea2-400.png 400w",
        "url": "http://www.nordea.com/",
        "alt": "Picture of Nordea",
        "dates": "2009 - 2010",
        "location": "Copenhagen, Denmark",
        "description": "Servicing international banks regarding corporate events on their positions in danish stocks."
    }, {
        "employer": "Comedy Zoo",
        "title": "Stafff Employee",
        "picture": "images/optimized/ComedyZoo-400.png",
        "srcset": "images/optimized/ComedyZoo-200.png 200w, images/optimized/ComedyZoo-300.png 300w, images/optimized/ComedyZoo-400.png 400w",
        "url": "http://www.fbi.dk/comedy-zoo",
        "alt": "Picture of Comedy Zoo",
        "dates": "2007 - 2011",
        "location": "Copenhagen, Denmark",
        "description": "Daily operations work in a stand-up comedy club."
    }],
    "display": function() {
         "use strict";
        work.jobs.forEach(function(arrayObject) {
            $('#work').append(work.htmlOuterTemplate);
            work.htmlInnerTemplates.forEach(function(concatObject) {
                var formattedDom = '';
                Object.keys(concatObject).forEach(function(concatObjectKey) {
                    if (arrayObject.hasOwnProperty(concatObjectKey)) {
                        var currentValue = arrayObject[concatObjectKey];
                        if (currentValue.constructor === Array) {
                            currentValue.forEach(function(arrayObjectValue) {
                                formattedDom = formattedDom + concatObject[concatObjectKey].replace(/%data%/g, arrayObjectValue);
                            });
                        } else {
                            formattedDom = formattedDom + concatObject[concatObjectKey].replace(/%data%/g, currentValue);

                        }
                    }
                });
                $('#work .entry:last').append(formattedDom);
            });
        });
    }
};