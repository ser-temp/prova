// Toggles class open to display/hide the whole navigation
$( ".custom-navigation-toggle" ).click(function() {
	$( ".bk-extendednavigation, .drop-down-nav" ).toggleClass( "open" );
});

// Togglse class open to display/hide folders
$( ".navigation-item.folder" ).each(function() {
	$( this ).click(function() {
			$( this ).toggleClass( "open" );
	});
});

if (
    ($("#page-zones__template-widgets__extendednavigation-extendednavigation").length == 0)
    ||
    ($("#page-zones__template-widgets__extendednavigation-extendednavigation.bk-tpl-hidden").length == 0)
)
{
   $(".drop-down-nav").addClass("nav-hidden");
}