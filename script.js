$(document).ready(function(){

    $("#mainContain").load("mainpage.html", function(responseTxt, statusTxt, xhr){
    });

    $("#emaLink").click(function(){
        $("#mainContain").load("eskamusicawards.html", function(responseTxt, statusTxt, xhr){
        });
    });

    $("#galleryLink").click(function(){
        $("#mainContain").load("gallery.html", function(responseTxt, statusTxt, xhr){
        });
    });

    $("#concertsLink").click(function(){
        $("#mainContain").load("koncerty.html", function(responseTxt, statusTxt, xhr){
        });
    });

    $("#faqLink").click(function(){
        $("#mainContain").load("faq.html", function(responseTxt, statusTxt, xhr){
        });
    });

    $("#contactLink").click(function(){
        $("#mainContain").load("contact.html", function(responseTxt, statusTxt, xhr){
        });
    });
});