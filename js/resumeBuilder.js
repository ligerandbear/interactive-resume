  var bio = {
	name : 'Carol Ransom',
	role : 'Web Developer',
	contacts : {
		mobile : '480-555-3767',
		email : 'carol@thewiseoptimist.net',
		location : 'Mesa, Arizona'
	},
	bioPic : 'images/profilepic.jpg',
	welcome : 'Welcome to my Resume!',
	skills : ['HTML','CSS','hard working','dedicated'],
	display : function () {
		var formattedName = HTMLheaderName.replace ('%data%', bio.name);
		var formattedRole = HTMLheaderRole.replace ('%data%', bio.role);
		var contactMobile = HTMLmobile.replace ('%data%', bio.contacts.mobile);
		var contactEmail = HTMLemail.replace ('%data%', bio.contacts.email);
		var formattedBioPic = HTMLbioPic.replace ('%data%', bio.bioPic);
		var welcomeMsg = HTMLwelcomeMsg.replace ('%data%', bio.welcome);
		$('#header').append(formattedBioPic,formattedName,formattedRole,welcomeMsg);
		$('.flex-box').append(contactMobile,contactEmail);
		if (bio.skills.length) {
			$('#header').append(HTMLskillsStart);
			for ( var skill in bio.skills) {
			var formattedSkill = HTMLskills.replace ('%data%', bio.skills[skill]);
			$('#skills').append(formattedSkill);
			}
		};
	}
};

var projects = {
	projects : [
	{
		title : 'Arcade Clone',
		dates : '~2015',
		description : 'A web knock-off of the classic Frogger game',
		}
	],
	 display : function () {
			for (var project in projects.projects) {
			$('#projects').append(HTMLprojectStart);
			var projectTitle = HTMLprojectTitle.replace('%data%', projects.projects[project].title);
			var projectDates = HTMLprojectDates.replace('%data%', projects.projects[project].dates);
			var projectDescription = HTMLprojectDescription.replace('%data%', projects.projects[project].description);
			$('.project-entry:last').append (projectTitle,projectDates,projectDescription);
			}
		}
};	

var work = {
	jobs : [
	{
		employer : 'Sierra Pointe',
		title : 'Busser/Server',
		location : 'Scottsdale, AZ',
		dates : '2011-2014',
		description : 'fast paced, service oriented environment'
	},
	{
		employer : 'Neuro Focus Center',
		title : 'Insurance Verification Specialist',
		location : 'Gilbert, AZ',
		dates : ' January 2016 - current',
		description : 'multitasking, detail oriented, customer service position'
	}
	],
	display : function () {
	if (work.jobs.length){
	for (var job in work.jobs){
		$('#workExperience').append(HTMLworkStart);
		var employer = HTMLworkEmployer.replace ('%data%', work.jobs[job].employer);
		var jobTitle = HTMLworkTitle.replace ('%data%', work.jobs[job].title);
		var jobDates = HTMLworkDates.replace ('%data%', work.jobs[job].dates);
		var jobLocation = HTMLworkLocation.replace ('%data%', work.jobs[job].location);
		var jobDescription = HTMLworkDescription.replace ('%data%', work.jobs[job].description);
		var workProfile = employer + jobTitle + jobDates + jobLocation + jobDescription;
		$('.work-entry:last').append(workProfile);
		}
	} 
	}
};

var education = {
	schools : [
	{
		name : 'Scottsdale Community College',
		location : 'Scottsdale, AZ',
		degree : 'AAS',
		major : 'Graphic Design',
		dates : 'Summer 2011 - current'	
	},
	{
		name : 'Udacity',
		location : 'Online',
		degree : 'Nanodegree',
		major : 'Front-End Web Development',
		dates : 'May 2015 - May 2016'	
	}
	],
	display : function () {
		for (var school in education.schools) {
		$('#education').append(HTMLschoolStart);
		var name = HTMLschoolName.replace ('%data%', education.schools[school].name);
		var city = HTMLschoolLocation.replace ('%data%', education.schools[school].location);
		var degree = HTMLschoolDegree.replace ('%data%', education.schools[school].degree);
		var major = HTMLschoolMajor.replace ('%data%', education.schools[school].major);
		var dates = HTMLschoolDates.replace ('%data%', education.schools[school].dates);
		$('.education-entry:last').append(name,city,dates,major,degree);
		}
	}

};

bio.display();
work.display();
projects.display();
education.display();
$('#mapDiv').append(googleMap);
