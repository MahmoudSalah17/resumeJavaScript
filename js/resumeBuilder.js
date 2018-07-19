//Build the four main objects for our resume.

var bio = {
	"name" : "Mahmoud Mohamed Salah El-Din",
	"role" : "Computer Engineer",
	"contacts" : {
		"mobile" : "01003803010",
		"email" : "mahmoud.m.salah94@gmail.com",
		"github" : "MahmoudSalah17",
		"location" : "Nasr City, Cairo",
	},
	"skills" :  [
			"C++",
			"Native Android",
			"Unreal Engine 4/Blueprints",
			"Python 3"
		],
	"biopic" : "./images/biopic.PNG",
	"display" : function()
	{
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		$("#header").prepend(HTMLbioPic.replace("%data%", bio.biopic));
		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);
		$("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
		$("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
		$("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
		$("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
		$("#header").append(HTMLskillsStart);
		for(skill in bio.skills){
			$("#skills").append(HTMLskills.replace("%data%", bio.skills[skill]));
		}

		$("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
		$("#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
		$("#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
		$("#footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

	}
}


var work = {
	"jobs":[
	{
		"employer" : "Sumerge Software Solution",
		"title" : "post graduate",
		"location" : "Degla Plaza, Cairo",
		"dates" : "in progress",
		"description" : "It is a post graduate program"
	},
	{
		"employer" : "Catalysis",
		"title" : "AC member",
		"location" : "Faculty of Engineering, Ainshams University",
		"dates" : "2016/2017",
		"description" : "Student Activity"
	}
	],

	"display" : function()
	{
		for(job in work.jobs)
	{
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer+formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);

	}
	}
}

var education = 
{
	"schools" : [
		{
			"name" : "Faculty of Engineering, Ainshams University",
			"location" : "Abbasya, Cairo",
			"degree" : "BA",
			"majors" : ["Computer Engineering"],
			"dates" : "2018"
		}
	],
	"online_courses" : [
		{
			"title" : "JavaScript Basics",
			"school" : "udacity",
			"date" : "19/07/2018",
			"url" : "https://classroom.udacity.com/courses/ud804"
		},
		{
			"title" : "Android Basics",
			"school" : "udacity",
			"date" : "March 2018",
			"url" : "https://eg.udacity.com/course/android-basics-nanodegree-by-google--nd803"

		}
	],
	"display" : function()
	{
		$("#education").append(HTMLschoolStart);
		for(school in education.schools)
		{
			$(".education-entry:last").append(HTMLschoolName.replace("%data%", education.schools[school].name)
				+ HTMLschoolDegree.replace("%data%", education.schools[school].degree));
			$(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[school].dates));
			console.log(HTMLschoolLocation.replace("%data%", education.schools[school].location));
			$(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[school].location));
			for(major in education.schools[school].majors){
				$(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]));
			}
		}
		if(education.online_courses.length > 0)
		{

			$(".education-entry:last").append(HTMLonlineClasses);

			for(course in education.online_courses)
			{
				var formattedTitle = HTMLonlineTitle.replace("%data%", education.online_courses[course].title)
				+ HTMLonlineSchool.replace("%data%", education.online_courses[course].school);

				$(".education-entry:last").append(formattedTitle.replace('"#"', education.online_courses[course].url));
				$(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.online_courses[course].date));
			}
		}
	}
}

var projects = 
{
	"project": [
	{
		"title" : "Graduation Project: Arabic Personal Assistant",
		"date" : "2018",
		"description" : "Creating a personal assistant which understand the egyptian language for mobile phones",
		"url" : ["./images/p1-s1.png", "./images/p1-s2.png"]
	},
	{
		"title" : "Snake Game",
		"date" : "2016",
		"description" : "Creating the infamous snake game using c++",
		"url": []
	}
	],
	"display" : function()
	{
		for(pr in projects.project)
		{
			$("#projects").append(HTMLprojectStart);
			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.project[pr].title);
			//console.log(formattedTitle);
			var formattedDates = HTMLprojectDates.replace("%data%", projects.project[pr].date);
			var formattedDescription = HTMLprojectDescription.replace("%data%", projects.project[pr].description);
			$(".project-entry:last").append(formattedTitle);
			$(".project-entry:last").append(formattedDates);
			$(".project-entry:last").append(formattedDescription);
			if(projects.project[pr].url.length > 0 && projects.project[pr].url !== [])
			{
				for(image in projects.project[pr].url)
				{
					$(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.project[pr].url[image]));
				}
			}
		}
	}
}

bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);
initializeMap();