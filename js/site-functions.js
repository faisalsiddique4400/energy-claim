$(document).ready(function () {
    // Viewport bubbles
    if (window.location.href.indexOf('localhost') > -1) {
        $('span.viewport').css('display', 'block');
    } else {
        $('span.viewport').css('display', 'none');
    }





    // Url parameters
    let searchParams = new URLSearchParams(window.location.search)
    if (searchParams.has('utm_source')) {
        $('#utm_source').val(searchParams.get('utm_source'))
    }
    if (searchParams.has('utm_medium')) {
        $('#utm_medium').val(searchParams.get('utm_medium'))
    }
    if (searchParams.has('utm_campaign')) {
        $('#utm_campaign').val(searchParams.get('utm_campaign'))
    }
    if (searchParams.has('utm_content')) {
        $('#utm_content').val(searchParams.get('utm_content'))
    }
    if (searchParams.has('campaign_source')) {
        if (searchParams.get('campaign_source') === 'outbrain') {
            $('#utm_source').val(searchParams.get('campaign_source'))
            $('#campaign_source').val(searchParams.get('campaign_source'))
        } else {
            $('#campaign_source').val(searchParams.get('campaign_source'))
        }
    }





    // Smooth scroll
    var anchor_link = $('html, body');
    $('a[href^="#"]').click(function () {
        anchor_link.animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 0
        }, 400);
        return false;
    });





    // Moment set year
    var current_year = moment().year();
    $('.current_year').text(current_year);





    // Time of day greeting
    var thehours = new Date().getHours();
    var themessage;
    var morning = ('morning');
    var afternoon = ('afternoon');
    var evening = ('evening');
    if (thehours >= 0 && thehours < 12) {
        themessage = morning;
    } else if (thehours >= 12 && thehours < 17) {
        themessage = afternoon;
    } else if (thehours >= 17 && thehours < 24) {
        themessage = evening;
    }
    $('.time_of_day').append(themessage);





    // Basic tabs
    var tab_wrapper = $('.tab-wrapper'),
        tabs_all = tab_wrapper.find('.tab-content > div'),
        tab_menu = tab_wrapper.find('.tab-menu li')
    tabs_all.not(':first-of-type').hide();
    tab_menu.filter(':first-of-type').find(':first').width('100%')
    tab_menu.each(function (i) {
        $(this).attr('data-tab', 'tab' + i);
    });
    tabs_all.each(function (i) {
        $(this).attr('data-tab', 'tab' + i);
    });
    tab_menu.on('click', function () {
        var data_tab = $(this).data('tab'),
            get_tab_wrapper = $(this).closest(tab_wrapper);
        get_tab_wrapper.find(tab_menu).removeClass('active');
        $(this).addClass('active');
        get_tab_wrapper.find(tabs_all).hide();
        get_tab_wrapper.find(tabs_all).filter('[data-tab=' + data_tab + ']').show();
    });





    // Basic accordion
    $('.accordion-tab').click(function () {
        $(this).next().slideToggle(400);
        $('.accordion-content').not($(this).next()).slideUp(400);
        $(this).toggleClass('active');
        $('.accordion-tab').not($(this)).removeClass('active');
        setTimeout(function () {
            $('html, body').animate({
                scrollTop: $('.accordion-tab.active').first().offset().top - 150
            }, 400);
        }, 400);
    });





    // Disable enter
    $(document).on("keypress", "input", function (e) {
        var code = e.keyCode || e.which;
        if (code == 13) {
            e.preventDefault();
            return false;
        }
    });




    // Activity Popups
    var random_locations = [
        'Manchester',
        'Liverpool',
        'Leeds',
        'London',
        'Birmingham',
        'Glasgow',
        'Edinburgh',
        'Aberdeen',
        'Sheffield',
        'Southampton',
        'Crewe',
        'Stoke-On-Trent',
        'Cardiff',
        'Newport',
        'Chester',
        'Newcastle-Upon-Tyne',
        'Sunderland',
        'Middlesbrough',
        'Carlisle',
        'Chester',
        'Brighton',
        'Truro',
        'Newquay',
        'Swansea',
        'Barry',
        'Wrexham',
        'Bristol',
        'Leicester',
        'Bradford',
        'Nottingham',
        'Luton',
        'Bolton',
        'Wolverhampton',
        'Norwich',
        'York'
    ];
    function activity_popups() {
        var random_location = Math.floor(Math.random() * random_locations.length);
        var random_number = Math.floor((Math.random() * 60) + 2);
        setTimeout(function () {
            $('.activity_location').text(random_locations[random_location]);
            $('.activity_number').text(random_number);
            $('.activity-popups .entry').fadeIn(400);
        }, 5000);
        setTimeout(function () {
            $('.activity-popups .entry').fadeOut(400);
        }, 15000);
        setTimeout(function () {
            activity_popups();
        }, 25000);
    }
    activity_popups();
});