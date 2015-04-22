// Toggles class open to display/hide the whole navigation

$( ".custom-navigation-toggle" ).click(function() {
	$( ".bk-extendednavigation, .drop-down-nav" ).toggleClass( "open" );
});

// Togglse class open to display/hide folders

$( ".navigation-item.folder .item-name--parent" ).each(function() {
	$( this ).click(function() {
			$( ".navigation-item.folder" ).toggleClass( "open" );
	});
});

// Hides custom toggle button when navigation is hidden

var hiddenNavHandler = function () {
    if (
        ($("#page-zones__template-widgets__extendednavigation-extendednavigation").length == 0)
        ||
        ($("#page-zones__template-widgets__extendednavigation-extendednavigation.bk-tpl-hidden").length == 1)
    )
    {
       $(".drop-down-nav").addClass("nav-hidden");
    }
};

hiddenNavHandler();
$(document).ready(hiddenNavHandler);
$(window).resize(hiddenNavHandler);