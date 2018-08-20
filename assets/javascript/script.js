$(document).ready(function(){

    var topicTags = ["HTML","CSS","BootStrap","Javascript","jQuery","APIs","AJAX","Firebase","Moment.js"];
    var projects = [{
                        name:"Crystal Game",
                        topics:["HTML","CSS","Javascript","jQuery"],
                        image:"assets/images/crystal-game.jpg",
                        deployedLink:"https://ajitas.github.io/Crystal-Game/",
                        codeLink:"https://github.com/ajitas/Crystal-Game"
                    },
                    {
                        name:"Word Guess Game",
                        topics:["HTML","CSS","Javascript"],
                        image:"assets/images/word-guess-game.jpg",
                        deployedLink:"https://ajitas.github.io/Word-Guess-Game/",
                        codeLink:"https://github.com/ajitas/Word-Guess-Game"
                    },
                    {
                        name:"Pokemon Combat Game",
                        topics:["HTML","CSS","Javascript","jQuery"],
                        image:"assets/images/pokemon-combat-game.jpg",
                        deployedLink:"https://ajitas.github.io/Pokemon-Combat-Game/",
                        codeLink:"https://github.com/ajitas/Pokemon-Combat-Game"
                    },
                    {
                        name:"Trivia Timed Game",
                        topics:["HTML","CSS","BootStrap","Javascript","jQuery"],
                        image:"assets/images/trivia-timed.png",
                        deployedLink:"https://ajitas.github.io/Trivia-Timed/",
                        codeLink:"https://github.com/ajitas/Trivia-Timed"
                    },
                    {
                        name:"Giftastic Sport",
                        topics:["HTML","CSS","BootStrap","Javascript","jQuery","APIs","AJAX"],
                        image:"assets/images/giftastic.png",
                        deployedLink:"https://ajitas.github.io/GifTastic/",
                        codeLink:"https://github.com/ajitas/GifTastic"
                    },
                    {
                        name:"Train Scheduler",
                        topics:["HTML","CSS","BootStrap","Javascript","jQuery","Firebase","Moment.js"],
                        image:"assets/images/train-scheduler.png",
                        deployedLink:"https://ajitas.github.io/Train-Scheduler/",
                        codeLink:"https://github.com/ajitas/Train-Scheduler"
                    },]

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
            projectDiv.addClass("card project-div");
            projectDiv.append(`<div class="row">
                                <div class="col-md-12 project-image-area">
                                   <img class="img-fluid project-image" alt=`+projects[i].name+` src=`+projects[i].image+`>
                                </div>
                            </div>`);
            var projectDiv1 = $("<div>");
            projectDiv1.append(`<div class="row">
                                    <div class="col-md-9"></div>
                                    <div class="col-md-3 code-link">
                                        <a href=`+projects[i].deployedLink+` target="_blank"><img class="img-fluid project-icon" src="assets/images/play-icon.png"></a>
                                    </div>
                                </div>`);
            projectDiv1.append(`<div class="row">
                                    <div class="col-md-9"></div>
                                    <div class="col-md-3 code-link">
                                        <a href=`+projects[i].codeLink+` target="_blank"><img class="img-fluid project-icon" src="assets/images/github-icon.png"></a>
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
                projectDiv.addClass("card project-div");
                projectDiv.append(`<div class="row">
                                    <div class="col-md-12 project-image-area">
                                    <img class="img-fluid project-image" alt=`+projects[i].name+` src=`+projects[i].image+`>
                                    </div>
                                </div>`);
                var projectDiv1 = $("<div>");
                projectDiv1.append(`<div class="row">
                                        <div class="col-md-9"></div>
                                        <div class="col-md-3 code-link">
                                            <a href=`+projects[i].deployedLink+` target="_blank"><img class="img-fluid project-icon" src="assets/images/play-icon.png"></a>
                                        </div>
                                    </div>`);
                projectDiv1.append(`<div class="row">
                                        <div class="col-md-9"></div>
                                        <div class="col-md-3 code-link">
                                            <a href=`+projects[i].codeLink+` target="_blank"><img class="img-fluid project-icon" src="assets/images/github-icon.png"></a>
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