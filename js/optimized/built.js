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
        "description": "<aside class=\"entry-description\"><p>%data%</p></aside><section class=\"majors\"><h4>Majors:</h4><ul>",
        "majors": "<li class=\"majors-entry\">%data%</li>",
        "dates": "</ul></section></section><footer class=\"entry-footer\"><hr><p class=\"date-location-text\">%data%<br>",
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
        "dates": "01/05/2011 - 30/01/2016",
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
};var projects = {
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
var mapContainer = "<section class=\"locations\"><h4><i class=\"fa fa-globe\" aria-hidden=\"true\"></i> Locations</h4>" +
                "<div id=\"locations-map\" class=\"locations-map\">" +
                "</div></section>";
var googleMap = '<div id="map"></div>';
var map;

function initializeMap() {
  var locations;

  var mapOptions = {
    disableDefaultUI: true
  };

  map = new google.maps.Map(document.querySelector('#map'), mapOptions);


  /*
  locationFinder() returns an array of every location string from the JSONs
  written for bio, education, and work.
  */
  function locationFinder() {

    // initializes an empty array
    var locations = [];

    // adds the single location property from bio to the locations array
    bio.contacts.forEach(function (headerInfoObject) {
          locations.push(headerInfoObject.location);
    });

    // iterates through school locations and appends each location to
    // the locations array.
    education.schools.forEach(function(school){
      if(school.hasOwnProperty('location')) {
      locations.push(school.location);
      }
    });

    // iterates through work locations and appends each location to
    // the locations array.
    work.jobs.forEach(function(job){
      if(job.hasOwnProperty('location')) {
      locations.push(job.location);
      }
    });

    return locations;
  }

  /*
  createMapMarker(placeData) reads Google Places search results to create map pins.
  placeData is the object returned from search results containing information
  about a single location.
  */
  function createMapMarker(placeData) {

    // The next lines save location data from the search result object to local variables
    var lat = placeData.geometry.location.lat();  // latitude from the place service
    var lon = placeData.geometry.location.lng();  // longitude from the place service
    var name = placeData.formatted_address;   // name of the place from the place service
    var bounds = window.mapBounds;            // current boundaries of the map window

    // marker is an object with additional data about the pin for a single location
    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });

    // infoWindows are the little helper windows that open when you click
    // or hover over a pin on a map. They usually contain more information
    // about a location.
    var infoWindow = new google.maps.InfoWindow({
      content: name
    });

    google.maps.event.addListener(marker, 'click', function() {
      infoWindow.open(map, marker, name);
    });

    // this is where the pin actually gets added to the map.
    // bounds.extend() takes in a map location object
    bounds.extend(new google.maps.LatLng(lat, lon));
    // fit the map to the new marker
    map.fitBounds(bounds);
    // center the map
    map.setCenter(bounds.getCenter());
  }

  /*
  callback(results, status) makes sure the search returned results for a location.
  If so, it creates a new map marker for that location.
  */
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);
    }
  }

  /*
  pinPoster(locations) takes in the array of locations created by locationFinder()
  and fires off Google place searches for each location
  */
  function pinPoster(locations) {

    // creates a Google place search service object. PlacesService does the work of
    // actually searching for location data.
    var service = new google.maps.places.PlacesService(map);

    // Iterates through the array of locations, creates a search object for each location
      locations.forEach(function(place){
      // the search request object
      var request = {
        query: place
      };

      // Actually searches the Google Maps API for location data and runs the callback
      // function with the search results after each search.
      service.textSearch(request, callback);
    });
  }

  // Sets the boundaries of the map based on pin locations
  window.mapBounds = new google.maps.LatLngBounds();

  // locations is an array of location strings returned from locationFinder()
  locations = locationFinder();

  // pinPoster(locations) creates pins on the map for each location in
  // the locations array
  pinPoster(locations);

}

// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
window.addEventListener('resize', function(e) {
//Make sure the map bounds get updated on page resize
map.fitBounds(mapBounds);
});//Generic function to display the different data in the different js objects.
/*var displayStuff = function(parentContainer, sectionContainer, parentObject, sectionArray, outerTemplate) {
    "use strict";

    //parentContainers: '#bio', '#education', '#work', '#page-footer'
    //sectionContainers: '#bio', '#skills ul', '#education .entry:last', '#work .entry:last', '#footer-list'
    //parentObjects: bio,  education, work
    //sectionArrays: bio.headerInfo, bio.skillsInfo, bio.footerLinks, education.schools, work.jobs
    //outerTemplates: bio.htmlOuterSkills, education.htmlOuterTemplate, work.htmlOuterTemplate

    //Loop through all sectionArray objects
    sectionArray.forEach(function(arrayObject) {

        //arrayObjects: {name: schoolname, url: urlstring, degree: degreestring....}

        //for each sectionArray object append a DOM section
        $(parentContainer).append(outerTemplate);

        //Loop over all htmlTemplates
        parentObject.htmlInnerTemplates.forEach(function(concatObject) {
            var formattedDom = '';

            //concatObjects: {url: domTemplate, name: domTemplate, degree: domTemplate}

            //loop over all keys in htmlTemplates objects
            Object.keys(concatObject).forEach(function(concatObjectKey) {

                //concatObjectKeys: name, url, degree ... (keys for innerdomteplates)

                //if key matches a key in arrayObject create dom to append
                if (arrayObject.hasOwnProperty(concatObjectKey)) {

                    //innerdomtemplatekey:url is within school{name: schoolname, url: urlstring}.keys

                    //in case the data is an array add a dom element for each value in it
                    //on the bio.skills it adds an inner dom template for each value in the skills array.
                    var currentValue = arrayObject[concatObjectKey];

                    //currentvalues: school['url'], headerInfo['skills'], etc..
                    if (currentValue.constructor === Array) {

                    //headerInfo['skills'].constructor === Array -> TRUE

                        currentValue.forEach(function(arrayObjectValue) {

                    //arrayObjectValues: skills[0] = 'Business Intelligence', skills[1] = 'Data Blending', etc.

                            //takes the dom template and replaces all instances of %data% with the arrayValue
                            formattedDom = formattedDom + concatObject[concatObjectKey].replace(/%data%/g, arrayObjectValue);

                        //concatObject[concatObjectKey]s: {skills: domTemplate} <- domTemplate.replace %data% w. 'Business Intelligence'

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
*/
bio.display();
education.display();
work.display();
projects.display();

$('.bio').append(mapContainer);
$('#locations-map').append(googleMap);