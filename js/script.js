var current_img_num = 1,
    images = document.getElementsByClassName("carouselimg"),
    img_beginrpt = document.getElementById("beginrpt"),
    img_endrpt = document.getElementById("endrpt");

var update_images = function (img_num) {
    'use strict';
    var current_img,
        slide_width,
        i;

    if (img_num === current_img_num) {
        return;
    }

    // Update current circle
    document.getElementById("circle" + current_img_num).className = document.getElementById("circle" + current_img_num).className.replace(/(?:^|\s)currentcircle(?!\S)/g, '');
    document.getElementById("circle" + img_num).className += " currentcircle";

    // Slide in current image
    current_img = document.getElementById("carousel" + img_num);
    slide_width = current_img.offsetWidth * (current_img_num - img_num);
    Velocity(images, {
        left: "+=" + slide_width
    }, 200);
    current_img_num = img_num;
};

window.onload = function () {
    'use strict';
    var link_menu = document.getElementById("menu_menu"),
        link_about = document.getElementById("menu_about"),
        link_home = document.getElementById("logo"),
        menu = document.getElementById("onthemenu"),
        about = document.getElementById("about"),
        home = document.getElementById("home"),
        div_circles = document.getElementById("circles"),
        circle,
        i;

    // Navigation bar functionality
    link_menu.onclick = function () {
        about.style.display = "none";
        home.style.display = "none";
        Velocity(menu, 'fadeIn');
        return false;
    };

    link_about.onclick = function () {
        menu.style.display = "none";
        home.style.display = "none";
        Velocity(about, 'fadeIn');
        return false;
    };

    link_home.onclick = function () {
        about.style.display = "none";
        menu.style.display = "none";
        Velocity(home, 'fadeIn');
    };

    // Image carousel functionality
    for (i = 0; i < images.length; i++) {
        images[i].id += "carousel" + i;
        circle = document.createElement("div");
        circle.className = "circle";
        circle.id = "circle" + i;
        div_circles.appendChild(circle);

        circle.onclick = function () {
            update_images(this.id.charAt(this.id.length - 1));
        };

        images[i].onclick = function () {
            update_images(this.id.charAt(this.id.length - 1));
        };
    }

    document.getElementById("circle" + current_img_num).className += " currentcircle";
};