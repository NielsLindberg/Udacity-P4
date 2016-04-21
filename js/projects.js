var projects = {
    "htmlOuterTemplate": "<section class=\"entry\"></section>",
    "htmlInnerTemplates": [{
        "url": "<div class=\"entry-titel\"><a target=\"_blank\" href=\"%data%\">",
        "title": "%data%</a></div><section class=\"entry-content\">",
        "description": "<aside class=\"entry-description\"><p>%data%</p></aside>",
        "images": "<figure class=\"entry-fig\"><img class=\"entry-pic\" src=\"%data%\"></figure>",
        "dates": "</section><footer class=\"entry-footer\"><hr><p class=\"date-location-text\">%data%</p></footer>"
    }],
    "projects": [{
        "title": "Customer´1",
        "images": ["http://placehold.it/600x400", "http://placehold.it/500x400"],
        "url": "#",
        "dates": "01/05/2011 - 30/01/2016",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }, {
        "title": "Customer2",
        "images": ["http://placehold.it/600x400", "http://placehold.it/500x400"],
        "url": "#",
        "dates": "01/05/2011 - 30/01/2016",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }, {
        "title": "Customer3",
        "images": ["http://placehold.it/600x400", "http://placehold.it/500x400"],
        "url": "#",
        "dates": "01/05/2011 - 30/01/2016",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }, {
        "title": "Customer4",
        "images": ["http://placehold.it/600x400", "http://placehold.it/500x400"],
        "url": "#",
        "dates": "01/05/2011 - 30/01/2016",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }, {
        "title": "Customer5",
        "images": ["http://placehold.it/600x400", "http://placehold.it/500x400"],
        "url": "#",
        "dates": "01/05/2011 - 30/01/2016",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }, {
        "title": "Customer6",
        "images": ["http://placehold.it/600x400", "http://placehold.it/500x400"],
        "url": "#",
        "dates": "01/05/2011 - 30/01/2016",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }],
    "display": function() {
         "use strict";
        projects.projects.forEach(function(arrayObject) {
            $('#projects').append(projects.htmlOuterTemplate);
            projects.htmlInnerTemplates.forEach(function(concatObject) {
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
                $('#projects .entry:last').append(formattedDom);
            });
        });
    }
};
