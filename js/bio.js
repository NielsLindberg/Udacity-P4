var bio = {
    "htmlOuterFooter": "<ul id=\"footer-list\" class=\"footer-list\"></ul>",
    "htmlInnerTemplates": [{
        "biopic": "<section class=\"bio\"><div class=\"bio-banner\"><figure class=\"bio-fig\"><img src=\"%data%\" class=\"bio-pic\" ",
        "alt": "alt=\"%data%\"></figure>",
        "name": "<h1 class=\"bio-name\" id=\"name\">%data%</h1>",
        "role": "<h3 class=\"bio-role\" id=\"role\">%data%</h3>",
        "welcomeMessage": "<h4 class=\"bio-welcome\">%data%</h4></div>",
        "description": "<section class=\"about-me\"><h4>About Me</h4><p>%data%</p></section><section id=\"skills\" class=\"skills\"><h4>Skills</h4><ul></ul></section></section>"
    }, {
        "skills": "<li class=\"skill-entry\"><a target=\"blank_\" href=\"http://www.google.com/search?q=%data%\">%data%</a></li>"
    }, {
        "mobile": "<li class=\"footer-list-entry\"><a target=\"blank_\" href=\"#\"><i class=\"fa fa-phone\" aria-hidden=\"true\"></i></a></li>",
        "location": "<li class=\"footer-list-entry\"><a target=\"blank_\" href=\"#\"><i class=\"fa fa-home\" aria-hidden=\"true\"></i></a></li>",
        "email": "<li class=\"footer-list-entry\"><a target=\"blank_\" href=\"#\"><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i></a></li>",
        "github": "<li class=\"footer-list-entry\"><a target=\"blank_\" href=\"%data%\"><i class=\"fa fa-github\" aria-hidden=\"true\"></i></a></li>",
        "linkedin": "<li class=\"footer-list-entry\"><a target=\"blank_\" href=\"%data%\"><i class=\"fa fa-linkedin\" aria-hidden=\"true\"></i></a></li>",
        "facebook": "<li class=\"footer-list-entry\"><a target=\"blank_\" href=\"%data%\"><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i></a></li>",
        "soundcloud": "<li class=\"footer-list-entry\"><a target=\"blank_\" href=\"%data%\"><i class=\"fa fa-soundcloud\" aria-hidden=\"true\"></i></a></li>"
    }],
    "headerInfo": [{
        "biopic": "images/assets/NLP.png",
        "alt": "Picture of Niels Lindberg-Poulsen",
        "name": "Niels Lindberg-Poulsen",
        "role": "Student at LTU, ORU & Udacity",
        "welcomeMessage": "Welcome to my online resume <i class=\"fa fa-thumbs-up\" aria-hidden=\"true\"></i>",
        "description": "Hi, my name is " +
            "<strong>Niels Lindberg-Poulsen</strong>, I'm 26 years old and live in Copenhagen together with my Swedish girlfriend who is studying Business & IT." +
            "<br><br>" +
            "I enjoy going to concerts and do so quite regularly. I've always enjoyed PC gaming and I still spent several hours a week playing various games. " +
            "Other than that I guess my interests are pretty broad, I like listening to audiobooks on history at the moment." +
            "<br><br>" +
            "This spring, I’m studying 6 distance courses; 4 bachelor level programming courses and one knowledge management course at " +
            "<em>LTU</em>, " +
            "along with one programming course at " +
            "<em>Örebro</em>. I'm also doing a Front End Web Developer Nanodegree at " +
            "<em>Udacity.com</em> at the same time. " +
            "<br><br> " +
            "I have a bachelor’s degree in Economics from Copenhagen Business School. " +
            "I've worked 6+ years in Nordea primarily as a programmer as well as a stakeholder on different IT projects."
    }],
    "skillsInfo": [{
        "skills": ["Business Intelligence", "Data Blending", "Qlikview", "ETL", "SQL", "Financial Analysis", "VBA", "Teradata", "Oracle", "Microsoft SQL Server", "Excel", "HTML", "CSS", "JavaScript", "Java"]
    }],
    "contacts": [{
        "mobile": "+45 27 49 07 78",
        "location": "Copenhagen, Denmark",
        "email": "eighthourcream@gmail.com",
        "github": "https://github.com/NielsLindberg",
        "linkedin": "https://dk.linkedin.com/in/niels-lindberg-poulsen-440ab335",
        "facebook": "https://www.facebook.com/niels.lindbergpoulsen",
        "soundcloud": "https://soundcloud.com/user8234095"
    }],
    "display": function() {
        "use strict";
        /*HEADER INFO*/
        bio.headerInfo.forEach(function(arrayObject) {
            $('#bio').append('');
            bio.htmlInnerTemplates.forEach(function(concatObject) {
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
                $('#bio').append(formattedDom);
            });
        });
        /* SKILLS INFO */
        bio.skillsInfo.forEach(function(arrayObject) {
            $('#bio').append('');
            bio.htmlInnerTemplates.forEach(function(concatObject) {
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
                $('#skills ul').append(formattedDom);
            });
        });
        /* FOOTER INFO*/
        bio.contacts.forEach(function(arrayObject) {
            $('#page-footer').append(bio.htmlOuterFooter);
            bio.htmlInnerTemplates.forEach(function(concatObject) {
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
                $('#footer-list').append(formattedDom);
            });
        });
    }
};

