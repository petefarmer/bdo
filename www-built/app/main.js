define(["require","en","themeswitcher"],function(e){var t=e("en"),n=e("themeswitcher");$("#switcher").themeswitcher({imgPath:"./img/images/"}),$(function(){var e=$("#tabs").tabs();e.find(".ui-tabs-nav").sortable({axis:"x",stop:function(){e.tabs("refresh")}})})});