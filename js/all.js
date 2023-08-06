


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


// sideBar JS scripts <<


// 回到上方按鈕>>
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        $('#myBtn').css('display','block');
    } else {
        $('#myBtn').css('display','none');
    }
}
window.onscroll = function () { scrollFunction() };

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
// 回到上方按鈕<<



$(function () {


    // 聯絡我們-點擊複製>>

    $('#copyPhone, #copyMail').on({
        mouseover: function () {
            $(this).css({
                color: 'rgb(113, 159, 150)',
                cursor: 'pointer',
            })
        },
        mouseout: function () {
            $(this).css('color', 'rgb(242, 177, 123)');

        },
        click: function () {
            navigator.clipboard.writeText($(this).find('span').text());
            $(this).removeClass('bi-clipboard');
            $(this).addClass('bi-check2');
            $(this).on('mouseout', function () {
                $(this).removeClass('bi-check2');
                $(this).addClass('bi-clipboard');
            });

        }
    })





    // 聯絡我們-點擊複製<<

    // 聯絡我們 表單填寫框的樣式>>




    // 聯絡我們 表單填寫框的樣式<<









































})