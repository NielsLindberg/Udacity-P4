//Generic function to display the different data in the different js objects.
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