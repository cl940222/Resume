// sideBar JS scripts >>

function openNav() {
    document.getElementById("mySidebar").style.width = "200px";
    document.getElementById("main").style.marginLeft = "300px";
    document.getElementById("secSkills").style.marginLeft = "300px";
    document.getElementById("secTraits").style.marginLeft = "300px";
    document.getElementById("secExp").style.marginLeft = "300px";
    document.getElementById("secWork").style.marginLeft = "300px";
    document.getElementById("secContact").style.marginLeft = "300px";
    
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.margin = "auto";
    document.getElementById("secSkills").style.margin = "auto";
    document.getElementById("secTraits").style.margin = "auto";
    document.getElementById("secExp").style.margin = "auto";
    document.getElementById("secWork").style.margin = "auto";
    document.getElementById("secContact").style.margin = "auto";
}


$(function(){
    $('#main').on('mouseover', function(){
        $('#mySidebar:nth-child(3)').css('color','rgb(241, 241, 241)');
        console.log('ok');
        // $('#mySidebar').find('a:nth-child(3)').css('color', '')
    })

})

// sideBar JS scripts <<