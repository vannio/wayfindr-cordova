// Application object.
var app = {}

// Regions that define which page to show for each beacon.
// app.beaconRegions = [];
app.beaconRegions = [
	// {
	// 	id: 'page-0',
	// 	uuid:'852c0828-fe67-4dd7-b8ff-52852a66851e',
	// 	major: 8008,
	// 	minor: 1337
	// },
  {
    "id": "page-1",
    "uuid": "bbd7be4e-e642-49fd-b8ee-7516456bf2ed",
    "major": 0,
    "minor": 0
  },
  // {
  //   "id": "page-2",
  //   "uuid": "3f846818-1f85-4f93-a46d-039c3056a4b1",
  //   "major": 999,
  //   "minor": 5
  // },
  // {
  //   "id": "page-3",
  //   "uuid": "3f846818-1f85-4f93-a46d-039c3056a4b1",
  //   "major": 999,
  //   "minor": 2
  // },
  // {
  //   "id": "page-4",
  //   "uuid": "8aa10000-0a46-115f-d94e-5a966a3ddbb7",
  //   "major": 9906,
  //   "minor": 21639
  // },
  // {
  //   "id": "entrance-stairs-1",
  //   "uuid": "3f846818-1f85-4f93-a46d-039c3056a4b1",
  //   "major": 63,
  //   "minor": 1
  // },
  // {
  //   "id": "bottom-of-entrance-stairs-2",
  //   "uuid": "3f846818-1f85-4f93-a46d-039c3056a4b1",
  //   "major": 63,
  //   "minor": 2
  // },
  // {
  //   "id": "ticket-hall-3",
  //   "uuid": "3f846818-1f85-4f93-a46d-039c3056a4b1",
  //   "major": 63,
  //   "minor": 3
  // },
  // {
  //   "id": "exit-barriers-4",
  //   "uuid": "3f846818-1f85-4f93-a46d-039c3056a4b1",
  //   "major": 63,
  //   "minor": 4
  // },
  // {
  //   "id": "entrance-barriers-5",
  //   "uuid": "3f846818-1f85-4f93-a46d-039c3056a4b1",
  //   "major": 63,
  //   "minor": 5
  // },
  // {
  //   "id": "top-of-escalator-1-6",
  //   "uuid": "3f846818-1f85-4f93-a46d-039c3056a4b1",
  //   "major": 63,
  //   "minor": 6
  // },
  // {
  //   "id": "top-of-escalator-2-7",
  //   "uuid": "3f846818-1f85-4f93-a46d-039c3056a4b1",
  //   "major": 63,
  //   "minor": 7
  // },
  // {
  //   "id": "middle-of-escalator-1-8",
  //   "uuid": "3f846818-1f85-4f93-a46d-039c3056a4b1",
  //   "major": 63,
  //   "minor": 8
  // },
  // {
  //   "id": "middle-of-escalator-2-9",
  //   "uuid": "3f846818-1f85-4f93-a46d-039c3056a4b1",
  //   "major": 63,
  //   "minor": 9
  // },
  // {
  //   "id": "bottom-of-escalator-1-10",
  //   "uuid": "3f846818-1f85-4f93-a46d-039c3056a4b1",
  //   "major": 63,
  //   "minor": 10
  // },
  // {
  //   "id": "bottom-of-escalator-2-11",
  //   "uuid": "3f846818-1f85-4f93-a46d-039c3056a4b1",
  //   "major": 63,
  //   "minor": 11
  // },
  // {
  //   "id": "walkway-bottom-of-escalators-12",
  //   "uuid": "3f846818-1f85-4f93-a46d-039c3056a4b1",
  //   "major": 63,
  //   "minor": 12
  // },
  // {
  //   "id": "walkway-13",
  //   "uuid": "3f846818-1f85-4f93-a46d-039c3056a4b1",
  //   "major": 63,
  //   "minor": 13
  // },
  // {
  //   "id": "walkway-14",
  //   "uuid": "3f846818-1f85-4f93-a46d-039c3056a4b1",
  //   "major": 63,
  //   "minor": 14
  // },
  // {
  //   "id": "fictional-platform-15",
  //   "uuid": "3f846818-1f85-4f93-a46d-039c3056a4b1",
  //   "major": 63,
  //   "minor": 15
  // },
  // {
  //   "id": "entrance-door-16",
  //   "uuid": "3f846818-1f85-4f93-a46d-039c3056a4b1",
  //   "major": 999,
  //   "minor": 1
  // },
  // {
  //   "id": "walkway-17",
  //   "uuid": "3f846818-1f85-4f93-a46d-039c3056a4b1",
  //   "major": 999,
  //   "minor": 2
  // },
  // {
  //   "id": "walkway-18",
  //   "uuid": "3f846818-1f85-4f93-a46d-039c3056a4b1",
  //   "major": 999,
  //   "minor": 3
  // },
  // {
  //   "id": "far-wall-platform-19",
  //   "uuid": "3f846818-1f85-4f93-a46d-039c3056a4b1",
  //   "major": 999,
  //   "minor": 4
  // },
  // {
  //   "id": "far-wall-platform-20",
  //   "uuid": "3f846818-1f85-4f93-a46d-039c3056a4b1",
  //   "major": 999,
  //   "minor": 5
  // },
  // {
  //   "id": "walkway-21",
  //   "uuid": "3f846818-1f85-4f93-a46d-039c3056a4b1",
  //   "major": 999,
  //   "minor": 6
  // }
]

// Currently displayed page.
app.currentPage = 'page-default'

app.initialize = function() {
	document.addEventListener(
		'deviceready',
		app.onDeviceReady,
		false)
	app.gotoPage(app.currentPage)
}

// Called when Cordova are plugins initialised,
// the iBeacon API is now available.
app.onDeviceReady = function() {

	// Specify a shortcut for the location manager that
	// has the iBeacon functions.
	window.locationManager = cordova.plugins.locationManager

	// Start tracking beacons!
	app.startScanForBeacons()
}

app.startScanForBeacons = function() {

	// The delegate object contains iBeacon callback functions.
	var delegate = new cordova.plugins.locationManager.Delegate()

	delegate.didDetermineStateForRegion = function(pluginResult) {
		//console.log('didDetermineStateForRegion: ' + JSON.stringify(pluginResult))
	}

	delegate.didStartMonitoringForRegion = function(pluginResult) {
		//console.log('didStartMonitoringForRegion:' + JSON.stringify(pluginResult))
	}

	delegate.didRangeBeaconsInRegion = function(pluginResult) {
		//console.log('didRangeBeaconsInRegion: ' + JSON.stringify(pluginResult))
		app.didRangeBeaconsInRegion(pluginResult)
	}

	// Set the delegate object to use.
	locationManager.setDelegate(delegate)

	// Start monitoring and ranging our beacons.
	for (var r in app.beaconRegions) {
		var region = app.beaconRegions[r]

		var beaconRegion = new locationManager.BeaconRegion(
			region.id, region.uuid, region.major, region.minor)

		// Start monitoring.
		locationManager.startMonitoringForRegion(beaconRegion)
			.fail(console.error)
			.done()

		// Start ranging.
		locationManager.startRangingBeaconsInRegion(beaconRegion)
			.fail(console.error)
			.done()
	}
}

// Display pages depending of which beacon is close.
app.didRangeBeaconsInRegion = function(pluginResult) {
	// There must be a beacon within range.
	if (0 == pluginResult.beacons.length)
	{
		return
	}

	// Our regions are defined so that there is one beacon per region.
	// Get the first (and only) beacon in range in the region.
	var beacon = pluginResult.beacons[0]

	// console.log(JSON.stringify(pluginResult.beacons[0].minor));

	// The region identifier is the page id.
	var pageId = pluginResult.region.identifier

	//console.log('ranged beacon: ' + pageId + ' ' + beacon.proximity)

	// If the beacon is close and represents a new page, then show the page.
	if ((beacon.proximity == 'ProximityImmediate' || beacon.proximity == 'ProximityNear')
		&& app.currentPage != pageId)
	{
		app.gotoPage(pageId)
		return
	}

	// If the beacon represents the current page but is far away,
	// then show the default page.
	if ((beacon.proximity == 'ProximityFar' || beacon.proximity == 'ProximityUnknown')
		&& app.currentPage == pageId)
	{
		app.gotoPage('page-default')
		return
	}
}

app.sayWords = function (words) {
	words = words || 'hello';
	TTS.speak(words);
}

app.gotoPage = function(pageId) {
	app.hidePage(app.currentPage)
	app.showPage(pageId)
	app.currentPage = pageId
}

app.showPage = function(pageId) {
	var block = document.getElementById(pageId);
	block.style.display = 'block'

	if document.getElementById('checkbox') === true {
		app.sayWords(block.innerText);
	}

}

app.hidePage = function(pageId) {
	document.getElementById(pageId).style.display = 'none'
}

// Set up the application.
app.initialize()
