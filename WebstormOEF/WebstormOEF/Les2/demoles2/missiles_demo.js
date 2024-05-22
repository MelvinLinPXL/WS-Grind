let safeMode = false;
launchMissiles();
let launchMissiles = function() {
    console.log("launching missiles");
};
//launchMissiles();
if ( safeMode ) {
    launchMissiles = function() {
        console.log( "nothing happens" );
    };
}
//launchMissiles();
