var education = {
    "htmlOuterTemplate": "<section class=\"entry\"></section>",
    "htmlInnerOnlineTemplates": [{
        "url": "<div class=\"entry-titel\"><a target=\"_blank\" href=\"%data%\">",
        "school": "%data%",
        "title": " - %data%</a></div>"
    }, {
        "picture": "<section class=\"entry-content\"><figure class=\"entry-fig\"><img class=\"entry-pic\" src=\"%data%\" ",
        "srcset": "srcset=\"%data%\" sizes=\"(min-width: 1601px) 30vw, (min-width: 1001px) 30vw, (min-width: 701px) 30vw, (min-width: 501px) 45vw, 40vw\" ",
        "alt": "alt=\"%data%\"></img></figure>",
        "description": "<aside class=\"entry-description\"><p>%data%</p></aside>",
        "date": "<footer class=\"entry-footer\"><hr><p class=\"date-location-text\">%data%</p></footer>",
    }],
    "htmlInnerTemplates": [{
        "url": "<div class=\"entry-titel\"><a target=\"_blank\" href=\"%data%\">",
        "name": "%data%",
        "school": "%data%",
        "degree": " - %data%</a></div>",
        "title": " - %data%</a></div>"
    }, {
        "picture": "<section class=\"entry-content\"><figure class=\"entry-fig\"><img class=\"entry-pic\" src=\"%data%\" ",
        "srcset": "srcset=\"%data%\" sizes=\"(min-width: 1601px) 30vw, (min-width: 1001px) 30vw, (min-width: 701px) 30vw, (min-width: 501px) 45vw, 40vw\" ",
        "alt": "alt=\"%data%\"></img></figure>",
        "description": "<aside class=\"entry-description\"><p>%data%</p></aside><br></section><section class=\"majors\"><ul>",
        "majors": "<li class=\"majors-entry\">%data%</li>",
        "dates": "</ul></section><footer class=\"entry-footer\"><hr><p class=\"date-location-text\">%data%<br>",
        "date": "<footer class=\"entry-footer\"><hr><p class=\"date-location-text\">%data%</footer>",
        "location": "%data%</p></footer>"
    }],
    "schools": [{
        "name": "Frederiksberg Gymnasium",
        "location": "Frederiksberg, Denmark",
        "degree": "Gymnasium",
        "majors": ["Mathematics", "Physics", "Computer science"],
        "description": "Completed Gymnasium.",
        "dates": "2005 - 2008",
        "url": "http://www.frberg-gym.dk/",
        "picture": "images/optimized/Frberggymn-400.png",
        "srcset": "images/optimized/Frberggymn-200.png 200w, images/optimized/Frberggymn-300.png 300w, images/optimized/Frberggymn-400.png 400w",
        "alt": "Picture of Frederiksberg-Gymnasium"
    }, {
        "name": "Copenhagen Business School",
        "location": "Frederiksberg, Denmark",
        "degree": "Bachelor",
        "majors": ["Business Administration", "Accounting", "Finance", "Economics", "Strategy", "Law", "Human Ressources", "Communications"],
        "description": "Completed a Bachelor in Business Administration.",
        "dates": "2010 - 2013",
        "url": "http://www.cbs.dk/",
        "picture": "images/optimized/CBS-400.png",
        "srcset": "images/optimized/CBS-200.png 200w, images/optimized/CBS-300.png 300w, images/optimized/CBS-400.png 400w",
        "alt": "Picture of Copenhagen Business School"
    }, {
        "name": "Luleå Technical University",
        "location": "Luleå, Sweden",
        "degree": "Bachelor Courses",
        "majors": ["Java", "C#", "Introductory Web Development", "CMS", "Knowledge Management"],
        "description": "Distance studying 5 IT courses",
        "dates": "2016",
        "url": "http://www.ltu.se",
        "picture": "images/optimized/LTU-400.png",
        "srcset": "images/optimized/LTU-200.png 200w, images/optimized/LTU-300.png 300w, images/optimized/LTU-400.png 400w",
        "alt": "Picture of Luleå Technical University"
    }, {
        "name": "Örebro University",
        "location": "Örebro, Sweden",
        "degree": "Bachelor Courses",
        "majors": ["Programming in C"],
        "description": "Distance studying a single IT course",
        "dates": "2016",
        "url": "http://www.oru.se",
        "picture": "images/optimized/ORU-400.png",
        "srcset": "images/optimized/ORU-200.png 200w, images/optimized/ORU-300.png 300w, images/optimized/ORU-400.png 400w",
        "alt": "Picture of Örebro University"
    }],
    "onlineCourses": [{
        "school": "Udacity.com",
        "title": "Online degree",
        "description": "Taking a Front End Web Developer Nanodegree at Udacity to fill up any spare time i have between my university courses.",
        "date": "2016",
        "url": "http://www.udacity.com",
        "picture": "images/optimized/Udacity-400.png",
        "srcset": "images/optimized/Udacity-200.png 200w, images/optimized/Udacity-300.png 300w, images/optimized/Udacity-400.png 400w",
        "alt": "Picture of Udacity.com office"
    }],
    "display": function() {
        "use strict";
        education.schools.forEach(function(arrayObject) {
            $('#education').append(education.htmlOuterTemplate);
            education.htmlInnerTemplates.forEach(function(concatObject) {
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
                $('#education .entry:last').append(formattedDom);
            });
        });
        education.onlineCourses.forEach(function(arrayObject) {
            $('#education').append(education.htmlOuterTemplate);
            education.htmlInnerOnlineTemplates.forEach(function(concatObject) {
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

                $('#education .entry:last').append(formattedDom);
            });
        });
    }
};
