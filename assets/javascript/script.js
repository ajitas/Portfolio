$(document).ready(function(){

    var topicTags = ["HTML","BootStrap","Javascript","Firebase","CSS","jQuery","APIs","AJAX","Moment.js"];
    var projects = [{
                        name:"Crystal Game",
                        topics:["HTML","CSS","Javascript","jQuery"],
                        image:"assets/images/crystal-game.jpg",
                        deployedLink:"https://ajitas.github.io/Crystal-Game/"
                    },
                    {
                        name:"Word Guess Game",
                        topics:["HTML","CSS","Javascript"],
                        image:"assets/images/word-guess-game.jpg",
                        deployedLink:"https://ajitas.github.io/Word-Guess-Game/"
                    },
                    {
                        name:"Pokemon Combat Game",
                        topics:["HTML","CSS","Javascript","jQuery"],
                        image:"assets/images/pokemon-combat-game.jpg",
                        deployedLink:"https://ajitas.github.io/Pokemon-Combat-Game/"
                    },
                    {
                        name:"Trivia Timed Game",
                        topics:["HTML","CSS","BootStrap","Javascript","jQuery"],
                        image:"assets/images/trivia-timed.png",
                        deployedLink:"https://ajitas.github.io/Trivia-Timed/"
                    },
                    {
                        name:"Giftastic Sport",
                        topics:["HTML","CSS","BootStrap","Javascript","jQuery","APIs","AJAX"],
                        image:"assets/images/giftastic.png",
                        deployedLink:"https://ajitas.github.io/GifTastic/"
                    },
                    {
                        name:"Train Scheduler",
                        topics:["HTML","CSS","BootStrap","Javascript","jQuery","Firebase","Moment.js"],
                        image:"assets/images/train-scheduler.png",
                        deployedLink:"https://ajitas.github.io/Train-Scheduler/"
                    },]

    function showTopicTagButtons(){
        $("#button-area").empty();
        for (var i = 0; i < topicTags.length; i++){
            var buttonTopic = $("<div>");
            buttonTopic.text(topicTags[i]);
            buttonTopic.attr("data-topic",topicTags[i]);
            buttonTopic.attr("class","topic-button");
            $("#button-area").append(buttonTopic);
        }
    }
    function loadAllProjects(){
        $("#project-area").empty();
        for(var i =0;i<projects.length ;i++){
            var projectDiv = $("<div>");
            projectDiv.addClass("card project-div");
            projectDiv.append(`<div class="row">
                                <div class="col-md-12 project-title text-center">
                                    <h3>`+projects[i].name+`</h3>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12 project-image-area">
                                    <a href=`+projects[i].deployedLink+` target="_blank"><img class="img-fluid project-image" src=`+projects[i].image+`></a>
                                </div>
                                
                            </div>`);
            $("#project-area").append(projectDiv);
        }

    }

    function displayProjects(tag){
        $("#project-area").empty();
        for(var i =0;i<projects.length ;i++){
            if(projects[i].topics.indexOf(tag) !== -1){
                var projectDiv = $("<div>");
                projectDiv.addClass("card project-div");
                projectDiv.append(`<div class="row">
                                    <div class="col-md-12 project-title text-center">
                                        <h3>`+projects[i].name+`</h3>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12 project-image-area">
                                        <a href=`+projects[i].deployedLink+` target="_blank"><img class="img-fluid project-image" src=`+projects[i].image+`></a>
                                    </div>
                                    
                                </div>`);
                $("#project-area").append(projectDiv);
            }
        }
    }
    $(".nav-link").on("click",function(){
        $(".nav-link").removeClass("active");
        $(this).addClass("active");

        if($(this).attr("id") === "about-nav"){
            $(".about-wrapper").show();
            $(".portfolio-wrapper").hide();
        }
        else if($(this).attr("id") === "portfolio-nav"){
            $(".about-wrapper").hide();
            $(".portfolio-wrapper").show();
            showTopicTagButtons();
            loadAllProjects();

        }
    });

    $("main").on("click",".topic-button",function(){
        displayProjects($(this).attr("data-topic"));
    });



});