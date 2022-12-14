const fs = require( 'fs' );
const path = require( 'path' );

const cssGuidePath = path.join( __dirname, 'css.pdf' );
const cssGuideCopyPath = path.join( __dirname, 'css.copy.pdf' );

const rs = fs.createReadStream( cssGuidePath );
const ws = fs.createWriteStream( cssGuideCopyPath );

// This is a very simple implementation - there are actually more complications (backpressure)
// how to make a copy? Read chunk and write the chunk...
rs.on( 'data', chunk => {
    ws.write( chunk );
});

rs.on( 'error', error => {
    console.log( error.message );
});

rs.on( 'end', () => {
    ws.end();
});

ws.on( 'error', error => {
    console.log( error.message );
});