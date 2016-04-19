//Generic function to display the different data in the different js objects.
var displayStuff = function(parentContainer, sectionContainer, parentObject, sectionArray, outerTemplate) {
    "use strict";
    //Loop through all sectionArray objects
    sectionArray.forEach(function(arrayObject) {

        //for each sectionArray object append a DOM section
        $(parentContainer).append(outerTemplate);

        //Loop over all htmlTemplates
        parentObject.htmlInnerTemplates.forEach(function(concatObject) {
            var formattedDom = '';

            //loop over all keys in htmlTemplates objects
            Object.keys(concatObject).forEach(function(concatObjectKey) {

                //if key matches a key in arrayObject create dom to append
                if (arrayObject.hasOwnProperty(concatObjectKey)) {

                    //in case the data is an array add a dom element for each value in it
                    //on the bio.skills it adds an inner dom template for each value in the skills array.
                    var currentValue = arrayObject[concatObjectKey];
                    if (currentValue.constructor === Array) {
                        currentValue.forEach(function(arrayObjectValue) {

                            //takes the dom template and replaces all instances of %data% with the arrayValue
                            formattedDom = formattedDom + concatObject[concatObjectKey].replace(/%data%/g, arrayObjectValue);
                        });

                        //else just add the dom element once
                    } else {
                        formattedDom = formattedDom + concatObject[concatObjectKey].replace(/%data%/g, currentValue);
                    }
                }
            });

            //append to current section **Order of htmlTemplates controls order of appending to DOM**
            $(sectionContainer).append(formattedDom);
        });
    });
};
var bio = {
    "htmlOuterFooter": "<ul id=\"footer-list\" class=\"footer-list\"></ul>",
    "htmlInnerTemplates": [{
        "bio-pic": "<section class=\"bio\"><div class=\"bio-banner\"><figure class=\"bio-fig\"><img src=\"%data%\" class=\"bio-pic\" ",
        "alt": "alt=\"%data%\"></figure>",
        "name": "<h1 class=\"bio-name\" id=\"name\">%data%</h1>",
        "role": "<h3 class=\"bio-role\" id=\"role\">%data%</h3></div>",
        "description": "<section class=\"about-me\"><h4>About Me</h4><p>%data%</p></section><section id=\"skills\" class=\"skills\"><h4>Skills</h4><ul></ul></section></section>"
    }, {

        "email": "<li class=\"footer-list-entry\"><a target=\"blank_\" href=\"#\"><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i></a></li>",
        "github": "<li class=\"footer-list-entry\"><a target=\"blank_\" href=\"%data%\"><i class=\"fa fa-github\" aria-hidden=\"true\"></i></a></li>",
        "linkedin": "<li class=\"footer-list-entry\"><a target=\"blank_\" href=\"%data%\"><i class=\"fa fa-linkedin\" aria-hidden=\"true\"></i></a></li>",
        "facebook": "<li class=\"footer-list-entry\"><a target=\"blank_\" href=\"%data%\"><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i></a></li>",
        "soundcloud": "<li class=\"footer-list-entry\"><a target=\"blank_\" href=\"%data%\"><i class=\"fa fa-soundcloud\" aria-hidden=\"true\"></i></a></li>"

    }, {

        "skills": "<li class=\"skill-entry\"><a target=\"blank_\" href=\"http://www.google.com/search?q=%data%\">%data%</a></li>"

    }],
    "headerInfo": [{
        "bio-pic": "images/NLP.png",
        "alt": "Picture of Niels Lindberg-Poulsen",
        "name": "Niels Lindberg-Poulsen",
        "role": "Student at LTU, ORU & Udacity",

        "description": "Hi, my name is \
        <strong>Niels Lindberg-Poulsen</strong>, I'm 26 years old and live in Copenhagen together with my Swedish girlfriend who is studying Business & IT.\
        <br><br>\
        I enjoy going to concerts and do so quite regularly. I've always enjoyed PC gaming and I still spent several hours a week playing various games. \
        Other than that I guess my interests are pretty broad, I like listening to audiobooks on history at the moment.\
        <br><br>\
        This spring, I’m studying 6 distance courses; 4 bachelor level programming courses and one knowledge management course at \
        <em>LTU</em>, \
        along with one programming course at\
        <em>Örebro</em>. I'm also doing a Front End Web Developer Nanodegree at \
        <em>Udacity.com</em> at the same time. \
        <br><br>\
        I have a bachelor’s degree in Economics from Copenhagen Business School. \
        I've worked 6+ years in Nordea primarily as a programmer as well as a stakeholder on different IT projects."
    }],
    "footerLinks": [{
        "email": "eighthourcream@gmail.com",
        "github": "https://github.com/NielsLindberg",
        "linkedin": "https://dk.linkedin.com/in/niels-lindberg-poulsen-440ab335",
        "facebook": "https://www.facebook.com/niels.lindbergpoulsen",
        "soundcloud": "https://soundcloud.com/user8234095"
    }],
    "skillsInfo": [{
        "skills": ["Business Intelligence", "Data Blending", "Qlikview", "ETL", "SQL", "Financial Analysis", "VBA", "Teradata", "Oracle", "Microsoft SQL Server", "Excel", "HTML", "CSS", "JavaScript", "Java"]
    }]
};
var education = {
    "htmlOuterTemplate": "<section class=\"entry\"></section>",
    "htmlInnerTemplates": [{
        "url": "<div class=\"entry-titel\"><a target=\"_blank\" href=\"%data%\">",
        "name": "%data%",
        "degree": " - %data%</a></div>"
    }, {
        "picture": "<section class=\"entry-content\"><figure class=\"entry-fig\"><img class=\"entry-pic\" src=\"%data%\" ",
        "srcset": "srcset=\"%data%\" sizes=\"(min-width: 1601px) 30vw, (min-width: 1001px) 30vw, (min-width: 701px) 30vw, (min-width: 501px) 45vw, 40vw\" ",
        "alt": "alt=\"%data%\"></img></figure>",
        "description": "<aside class=\"entry-description\"><p>%data%</p></aside></section>"
    }, {
        "dates": "<footer class=\"entry-footer\"><hr><p class=\"date-location-text\">%data%<br>",
        "location": "%data%</p></footer>"
    }],
    "schools": [{
        "name": "Frederiksberg Gymnasium",
        "location": "Copenhagen, Frederiksberg, Denmark",
        "degree": "Gymnasium",
        "description": "Completed Gymnasium with the focus areas: Mathematics, Physics, Computer Science<br><br>\
                        Gymnasium is the educational level between elementary school and university in Denmark",
        "dates": "2005 - 2008",
        "url": "http://www.frberg-gym.dk/",
        "picture": "images/optimized/Frberggymn-400.png",
        "srcset": "images/optimized/Frberggymn-200.png 200w, images/optimized/Frberggymn-300.png 300w, images/optimized/Frberggymn-400.png 400w",
        "alt": "Picture of Frederiksberg-Gymnasium"
    }, {
        "name": "Copenhagen Business School",
        "location": "Copenhagen, Frederiksberg, Denmark",
        "degree": "Bachelor",
        "description": "Completed a Bachelor in Business Administration",
        "dates": "2010 - 2013",
        "url": "http://www.cbs.dk/",
        "picture": "images/optimized/CBS-400.png",
        "srcset": "images/optimized/CBS-200.png 200w, images/optimized/CBS-300.png 300w, images/optimized/CBS-400.png 400w",
        "alt": "Picture of Copenhagen Business School"
    }, {
        "name": "Luleå Technical University",
        "location": "Luleå, Sweden",
        "degree": "Bachelor Courses",
        "description": "Distance studying the following IT courses:<br><br>Java, C#, Introductory Web Development, CMS, Knowledge Management",
        "dates": "18/01/2016 - 31/06/2016 (expected)",
        "url": "http://www.ltu.se",
        "picture": "images/optimized/LTU-400.png",
        "srcset": "images/optimized/LTU-200.png 200w, images/optimized/LTU-300.png 300w, images/optimized/LTU-400.png 400w",
        "alt": "Picture of Luleå Technical University"
    }, {
        "name": "Örebro University",
        "location": "Örebro, Sweden",
        "degree": "Bachelor Courses",
        "description": "Distance studying a course called:<br><br>Programming in C",
        "dates": "18/01/2016 - 31/06/2016 (expected)",
        "url": "http://www.oru.se",
        "picture": "images/optimized/ORU-400.png",
        "srcset": "images/optimized/ORU-200.png 200w, images/optimized/ORU-300.png 300w, images/optimized/ORU-400.png 400w",
        "alt": "Picture of Örebro University"
    }, {
        "name": "Udacity.com",
        "location": "Online",
        "degree": "Online degree",
        "description": "Taking a Front End Web Developer Nanodegree at Udacity to fill up any spare time i have between my university courses.",
        "dates": "18/01/2016 - 31/06/2016 (expected)",
        "url": "http://www.udacity.com",
        "picture": "images/optimized/Udacity-400.png",
        "srcset": "images/optimized/Udacity-200.png 200w, images/optimized/Udacity-300.png 300w, images/optimized/Udacity-400.png 400w",
        "alt": "Picture of Udacity.com office"
    }]
};
var work = {
    "htmlOuterTemplate": "<section class=\"entry\"></section>",
    "htmlInnerTemplates": [{
        "url": "<div class=\"entry-titel\"><a target=\"_blank\" href=\"%data%\">",
        "employer": "%data%",
        "title": " - %data%</a></div>"
    },  {
        "picture": "<section class=\"entry-content\"><figure class=\"entry-fig\"><img class=\"entry-pic\" src=\"%data%\" ",
        "srcset": "srcset=\"%data%\" sizes=\"(min-width: 1601px) 30vw, (min-width: 1001px) 20vw, (min-width: 701px) 30vw, (min-width: 501px) 45vw, 40vw\" ",
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
        "dates": "01/05/2011 - 30/01/2016",
        "location": "Copenhagen, Denmark",
        "description": "Working on different projects regarding developing marked requirements and internal initiatives assuring \
                        optimal implementation.<br><br>Developing & producing business intelligence solutions."
    }, {
        "employer": "Nordea Bank",
        "title": "Temp. Employee",
        "picture": "images/optimized/Nordea2-400.png",
        "srcset": "images/optimized/Nordea2-200.png 200w, images/optimized/Nordea2-300.png 300w, images/optimized/Nordea2-400.png 400w",
        "url": "http://www.nordea.com/",
        "alt": "Picture of Nordea",
        "dates": "01/02/2009 - 30/08/2010",
        "location": "Copenhagen, Denmark",
        "description": "Servicing international banks regarding corporate events on their positions in danish stocks."
    }, {
        "employer": "Comedy Zoo",
        "title": "Stafff Employee",
        "picture": "images/optimized/ComedyZoo-400.png",
        "srcset": "images/optimized/ComedyZoo-200.png 200w, images/optimized/ComedyZoo-300.png 300w, images/optimized/ComedyZoo-400.png 400w",
        "url": "http://www.fbi.dk/comedy-zoo",
        "alt": "Picture of Comedy Zoo",
        "dates": "01/01/2007 - 30/05/2011",
        "location": "Copenhagen, Denmark",
        "description": "Daily operations work in a stand-up comedy club."
    }]
};
