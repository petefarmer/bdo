/**
 * Precept Demo's entry point and main loop.
 * @module app/main
 */
define(function (require) {

// Disable closing forms by clicking overlay.
//    $.jqm.params.closeoverlay = false;

// Load all the 3rd-party modules
//    var g = require('jqgrid');
//    var g = require('jqgrid');
    var l = require('en');
    var ts = require('themeswitcher');
//    var ms = require('jquerymultiselect');
//    var msf = require('jquerymultiselectfilter');
    
// turn on themeswitcher
    $("#switcher").themeswitcher({
       imgPath: './img/images/'
    });
    

    $(function() {
      var tabs = $('#tabs').tabs();
      tabs.find(".ui-tabs-nav").sortable({
        axis: "x",
        stop: function() {
          tabs.tabs("refresh"); 
        }
      });
    });

});
