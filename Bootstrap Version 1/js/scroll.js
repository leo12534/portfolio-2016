// This Is Scroll to top Script
        // Parse URL Queries Method
        (function ($) {
            $.getQuery = function (query) {
                query = query.replace(/[\[]/, '\\\[').replace(/[\]]/, '\\\]');
                var expr = '[\\?&]' + query + '=([^&#]*)';
                var regex = new RegExp(expr);
                var results = regex.exec(window.location.href);
                if (results !== null) {
                    return results[1];
                } else {
                    return false;
                }
            };
        })(jQuery);

        $(function () {

            // Change URIs
            $('.pill-switch').click(function () {
                window.location = '?theme=pill';
            });

            $('.tab-switch').click(function () {
                window.location = '?theme=tab';
            });

            $('.image-switch').click(function () {
                window.location = '?theme=image';
            });

            $('.link-switch').click(function () {
                window.location = '?theme=link';
            });

            // Set theme based on URI
            if ($.getQuery('theme') === 'pill') {
                $(function () {
                    $.scrollUp({
                        animation: 'fade',
                        activeOverlay: '#00FFFF'
                    });
                });
                $('.pill-switch').addClass('active');
                $('#scrollUpTheme').attr('href', 'css/themes/pill.css?1.1');
            } else if ($.getQuery('theme') === 'link') {
                $(function () {
                    $.scrollUp({
                        animation: 'fade',
                        activeOverlay: '#00FFFF'
                    });
                });
                $('#scrollUpTheme').attr('href', 'css/themes/link.css?1.1');
                $('.link-switch').addClass('active');
            } else if ($.getQuery('theme') === 'image') {
                $(function () {
                    $.scrollUp({
                        animation: 'fade',
                        scrollImg: {
                            active: true,
                            type: 'background',
                            src: 'img/top.png'
                        }
                    });
                });
                $('#scrollUpTheme').attr('href', 'css/themes/image.css?1.1');
                $('.image-switch').addClass('active');
            } else {
                $(function () {
                    $.scrollUp({
                        animation: 'slide',
                    });
                });
                $('#scrollUpTheme').attr('href', 'css/themes/tab.css?1.1');
                $('.tab-switch').addClass('active');
            }

            // Toggle overlay
            $('#toggleActive').click(function () {
                $('#scrollUp-active').toggle();

                var text = $(this).text() == 'Hide activeOverlay' ? 'Show activeOverlay' : 'Hide activeOverlay';
                $(this)
                    .text(text)
                    .toggleClass('active');
            });
        });



// This is the Scroll To Scriot
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
    