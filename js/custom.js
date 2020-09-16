$(document).ready(function () {

    var arr = [1];
    var arr2 = [1];
    var arr3 = [1];
    var arr4 = [1];
    var item = arr[Math.floor(Math.random() * arr.length)];
    var item2 = arr2[Math.floor(Math.random() * arr2.length)];
    var item3 = arr3[Math.floor(Math.random() * arr3.length)];
    var item4 = arr4[Math.floor(Math.random() * arr4.length)];


    $('.owl-one').owlCarousel({
        loop: true,
        margin: 0,
        dots: false,
        video: true,
        arrow: true,
        responsive: {
            0: {
                items: item
            },
            600: {
                items: item
            },
            1000: {
                items: 1
            }
        }
    }),
        $('.owl-two').owlCarousel({
            loop: true,
            margin: 0,
            dots: false,
            video: true,
            responsive: {
                0: {
                    items: item3
                },
                600: {
                    items: item3
                },
                1000: {
                    items: 1
                }
            }
        }),
        $('.owl-four').owlCarousel({
            loop: true,
            margin: 0,
            dots: false,
            video: true,
            responsive: {
                0: {
                    items: item4
                },
                600: {
                    items: item4
                },
                1000: {
                    items: 1
                }
            }
        })

    $('[data-fancybox="gallery"]').fancybox({
        arrows: false,
        infobar: false,
        toolbar: true,
        loop: true,
        protect: true,
    });

    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    $('.image').on('click', function () {
        if (longpress) { // if detect hold, stop onclick function
            return false;
        };
    });

    $('.image').bind('mousedown touchstart', function () {
        longpress = false; //longpress is false initially
        srsc = this.src;
        pressTimer = window.setTimeout(function () {
            modal.style.display = "block";
            modalImg.src = this.srsc;

            longpress = true; //if run hold function, longpress is true
        }, 800)
    });

    $('.image').bind('mouseup touchend', function () {
        modal.style.display = "none";
        clearTimeout(pressTimer);
        //clear time on mouseup
    });
    var modalv = document.getElementById("myModal1");
    var modalImgv = document.getElementById("video11");
    var modalImgvs = document.getElementById("video1");
    var modalImgvv = document.getElementById("video2");
    $('.video').on('click', function () {
        if (longpress) { // if detect hold, stop onclick function
            return false;
        };
    });

    $('.video').bind('mousedown touchstart', function () {
        href = this.href;
        // console.log(href);

        longpress = false; //longpress is false initially
        srsc = href;
        pressTimer = window.setTimeout(function () {
            modalv.style.display = "block";
            modalImgv.src = srsc;
            modalImgvv.href = srsc;
            modalImgvs.src = srsc;

            longpress = true; //if run hold function, longpress is true
        }, 1000)
    });

    $('.video').bind('mouseup touchend', function () {
        modalv.style.display = "none";
        srsc = "";
        modalImgv.src = srsc;
        modalImgvv.href = srsc;
        modalImgvs.src = srsc;
        clearTimeout(pressTimer);

    });

    // Get the modal

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    modal.onclick = function () {
        modal.style.display = "none";
    }
    var spanv = document.getElementsByClassName("closev")[0];
    var video11 = document.getElementById("video11");
    // When the user clicks on <span> (x), close the modal
    spanv.onclick = function () {
        srsc = "";
        modalv.style.display = "none";
        modalImgv.src = srsc;
        modalImgvv.href = srsc;
        modalImgvs.src = srsc;


    }
    $("body").on("contextmenu", "img", function (e) {
        return false;
    });
    document.oncontextmenu = function (event) {
        if (event.defaultPrevented) return;

        event.preventDefault();
    };


});

function myFunction() {
    AOS.init({
        duration: 1000,
    });
}