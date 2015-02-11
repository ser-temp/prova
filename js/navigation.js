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