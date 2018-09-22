$(document).ready(function(){

    var topicTags = ["HTML5","CSS3","BootStrap","Javascript","jQuery","APIs","AJAX","Firebase","Moment.js","Node.js","mySQL","Express.js","Handlebars","MVC","Sequelize.js","Just for Fun"];
    var projects = [{
                        name:"CodeMason",
                        topics:["HTML5","CSS3","Javascript","jQuery","Node.js","Express.js","AJAX","Sequelize.js","MVC"],
                        image:"assets/images/code-mason.png",
                        deployedLink:"https://code-mason.herokuapp.com/",
                        codeLink:"https://github.com/ajitas/Code-Mason"
                    },
                    {
                        name:"Restaurants-Sequelize-MVC",
                        topics:["HTML5","CSS3","Javascript","jQuery","Node.js","Express.js","AJAX","Sequelize.js","Handlebars","MVC"],
                        image:"assets/images/restaurants-sequelize.png",
                        deployedLink:"https://restaurant-sequelize-mvc.herokuapp.com/",
                        codeLink:"https://github.com/ajitas/Restaurants_Sequelize"
                    },
                    {
                        name:"Multi-Player RPS",
                        topics:["HTML5","CSS3","BootStrap","Javascript","jQuery","Firebase"],
                        image:"assets/images/multi-rps.png",
                        deployedLink:"https://ajitas.github.io/Multi-RPS/",
                        codeLink:"https://github.com/ajitas/Multi-RPS"
                    },
                    {
                        name:"Trivia Timed Game",
                        topics:["HTML5","CSS3","BootStrap","Javascript","jQuery"],
                        image:"assets/images/trivia-timed.png",
                        deployedLink:"https://ajitas.github.io/Trivia-Timed/",
                        codeLink:"https://github.com/ajitas/Trivia-Timed"
                    },
                    {
                        name:"LyriQuiz",
                        topics:["HTML5","CSS3","BootStrap","Javascript","jQuery","Firebase","APIs","Moment.js","AJAX"],
                        image:"assets/images/lyriquiz.png",
                        deployedLink:"https://ajitas.github.io/LyriQuiz/",
                        codeLink:"https://github.com/ajitas/LyriQuiz"
                    },
                    {   
                        name:"ShopStop-node",
                        topics:["Javascript","Node.js","mySQL"],
                        image:"assets/images/shopstop-manager.gif",
                        deployedLink:"#",
                        codeLink:"https://github.com/ajitas/ShopStop-CLI"
                    },
                    {
                        name:"Giftastic Sport",
                        topics:["HTML5","CSS3","BootStrap","Javascript","jQuery","APIs","AJAX"],
                        image:"assets/images/giftastic.png",
                        deployedLink:"https://ajitas.github.io/GifTastic/",
                        codeLink:"https://github.com/ajitas/GifTastic"
                    },
                    {
                        name:"Train Scheduler",
                        topics:["HTML5","CSS3","BootStrap","Javascript","jQuery","Firebase","Moment.js"],
                        image:"assets/images/train-scheduler.png",
                        deployedLink:"https://ajitas.github.io/Train-Scheduler/",
                        codeLink:"https://github.com/ajitas/Train-Scheduler"
                    },
                    {
                        name:"LIRIBot-node",
                        topics:["Javascript","Node.js","APIs","Moment.js"],
                        image:"assets/images/liri.gif",
                        deployedLink:"#",
                        codeLink:"https://github.com/ajitas/liri-node-app"
                    },
                    {
                        name:"Hangman-node",
                        topics:["Javascript","Node.js"],
                        image:"assets/images/hangman-correct.gif",
                        deployedLink:"#",
                        codeLink:"https://github.com/ajitas/Word-Guess-Game-CLI"
                    },
                    {
                        name:"Travel-Together",
                        topics:["HTML5","CSS3","Javascript","jQuery","Node.js","Express.js","APIs","AJAX"],
                        image:"assets/images/travel-together-home.gif",
                        deployedLink:"https://travel-together-1.herokuapp.com",
                        codeLink:"https://github.com/ajitas/TravelTogether"
                    },
                    {
                        name:"Restaurants-MVC",
                        topics:["HTML5","CSS3","Javascript","jQuery","Node.js","Express.js","AJAX","mySQL","Handlebars","MVC"],
                        image:"assets/images/restaurants_mvc.png",
                        deployedLink:"https://restaurant-list-1.herokuapp.com",
                        codeLink:"https://github.com/ajitas/Restaurants_MVC"
                    },
                    {
                        name:"Crystal Game",
                        topics:["HTML5","CSS3","Javascript","jQuery","Just for Fun"],
                        image:"assets/images/crystal-game.png",
                        deployedLink:"https://ajitas.github.io/Crystal-Game/",
                        codeLink:"https://github.com/ajitas/Crystal-Game"
                    },
                    {
                        name:"Word Guess Game",
                        topics:["HTML5","CSS3","Javascript","Just for Fun"],
                        image:"assets/images/word-guess-game.png",
                        deployedLink:"https://ajitas.github.io/Word-Guess-Game/",
                        codeLink:"https://github.com/ajitas/Word-Guess-Game"
                    },
                    {
                        name:"Pokemon Combat Game",
                        topics:["HTML5","CSS3","Javascript","jQuery","Just for Fun"],
                        image:"assets/images/pokemon-combat-game.png",
                        deployedLink:"https://ajitas.github.io/Pokemon-Combat-Game/",
                        codeLink:"https://github.com/ajitas/Pokemon-Combat-Game"
                    }
                    ];

    function showTopicTagButtons(){
        $("#button-area").empty();
        $("#button-area").append("<div class='filter-by'><h4>Filter <i class='fas fa-arrow-alt-circle-down'></i></h4></div>");
        for (var i = 0; i < topicTags.length; i++){
            var buttonTopic = $("<div>");
            var aTagTopic = $("<a>")
            buttonTopic.append(aTagTopic);
            aTagTopic.text(topicTags[i]);
            aTagTopic.attr("href","#");
            aTagTopic.attr("data-topic",topicTags[i]);
            aTagTopic.attr("class","topic-button");
            $("#button-area").append(buttonTopic);
        }
    }
    function loadAllProjects(){
        $("#project-area").empty();
        for(var i =0;i<projects.length ;i++){
            var projectLineDiv = $("<div>");
            projectLineDiv.addClass("project-line");
            var projectDiv = $("<div>");
            projectDiv.addClass("project-div");
            projectDiv.append(` <div class="row">
                                    <div class="col-md-12 text-center project-heading">`+
                                    projects[i].name+
                                    `</div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12 project-image-area">
                                    <img class="img-fluid project-image" alt=`+projects[i].name+` src=`+projects[i].image+`>
                                    </div>
                                </div>`);
            var projectDiv1 = $("<div>");
            if(projects[i].deployedLink === "#"){
                projectDiv1.append(`<div class="row">
                                        <div class="col-md-9"></div>
                                        <div class="col-md-3 code-link">
                                           <img class="img-fluid project-icon" id="link-image-button-disabled" src="assets/images/play-icon.png">
                                        </div>
                                    </div>`);
            }
            else{
                projectDiv1.append(`<div class="row">
                                        <div class="col-md-9"></div>
                                        <div class="col-md-3 code-link">
                                            <a href=`+projects[i].deployedLink+` target="_blank"><img class="img-fluid project-icon" src="assets/images/play-icon.png"></a>
                                        </div>
                                    </div>`);
            }
            projectDiv1.append(`<div class="row">
                                    <div class="col-md-9"></div>
                                    <div class="col-md-3 code-link">
                                        <a href=`+projects[i].codeLink+` target="_blank"><img class="img-fluid project-icon" id="code-image-button" src="assets/images/github-icon.png"></a>
                                    </div>
                                </div>`);
            projectDiv1.addClass("card project-div1");
            projectLineDiv.append(projectDiv1);
            projectLineDiv.append(projectDiv);
            $("#project-area").append(projectLineDiv);
            
        }

    }

    function displayProjects(tag){
        $("#project-area").empty();
        for(var i =0;i<projects.length ;i++){
            if(projects[i].topics.indexOf(tag) !== -1){
                var projectLineDiv = $("<div>");
                projectLineDiv.addClass("project-line");
                var projectDiv = $("<div>");
                projectDiv.addClass("project-div");
                projectDiv.append(` <div class="row">
                                        <div class="col-md-12 text-center project-heading">`+
                                        projects[i].name+
                                        `</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12 project-image-area">
                                        <img class="img-fluid project-image" alt=`+projects[i].name+` src=`+projects[i].image+`>
                                        </div>
                                    </div>`);
                var projectDiv1 = $("<div>");
                if(projects[i].deployedLink === "#"){
                    projectDiv1.append(`<div class="row">
                                            <div class="col-md-9"></div>
                                            <div class="col-md-3 code-link">
                                               <img class="img-fluid project-icon" id="link-image-button-disabled" src="assets/images/play-icon.png">
                                            </div>
                                        </div>`);
                }
                else{
                    projectDiv1.append(`<div class="row">
                                            <div class="col-md-9"></div>
                                            <div class="col-md-3 code-link">
                                                <a href=`+projects[i].deployedLink+` target="_blank"><img class="img-fluid project-icon" src="assets/images/play-icon.png"></a>
                                            </div>
                                        </div>`);
                }
                projectDiv1.append(`<div class="row">
                                        <div class="col-md-9"></div>
                                        <div class="col-md-3 code-link">
                                            <a href=`+projects[i].codeLink+` target="_blank"><img class="img-fluid project-icon" id="code-image-button" src="assets/images/github-icon.png"></a>
                                        </div>
                                    </div>`);
                projectDiv1.addClass("card project-div1");
                projectLineDiv.append(projectDiv1);
                projectLineDiv.append(projectDiv);
                $("#project-area").append(projectLineDiv);
            }
        }
    }
    
    $(".nav-link").on("click",function(){
        if($(this).attr("id") === "about-nav"){
            $(".about-wrapper1").show();
            $(".portfolio-wrapper").hide();
        }
        else if($(this).attr("id") === "portfolio-nav"){
            $(".about-wrapper1").hide();
            $(".portfolio-wrapper").show()
            $("#button-area").show();
            showTopicTagButtons();
            loadAllProjects();

        }
    });

    $("main").on("click",".topic-button",function(){
        displayProjects($(this).attr("data-topic"));
    });



});