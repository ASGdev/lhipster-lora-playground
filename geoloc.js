let rssis = [
	{
		gw: "gw1",
		rssi: "0"
	},
	{
		gw: "gw2",
		rssi: "0"
	},
	{
		gw: "gw3",
		rssi: "0"
	}
];

function calculateDistance(rssi_db, freq_mhz){
	// using http://rvmiller.com/2013/05/part-1-wifi-based-trilateration-on-android/
	let exp = (27.55 - (20 * Math.log10(freq_mhz)) + Math.abs(rssi_db)) / 20.0;
	return Math.pow(10.0, exp);
}
