import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';


$(window).scroll(function() {
    if ($(window).scrollTop() > 100) {
        $("#sticky-div").css("position", "none");
    } else {
        $("#sticky-div").css("position", "fixed");
    }
});
