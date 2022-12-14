// DISADVANTAGE: We need to have whatever contents we need to write entirely in memory, and write it to the file in one go
const fs = require( 'fs/promises' );
const path = require( 'path' );

const helloPath = path.join( __dirname, 'hello.txt' );

const data = 'Hello fs module';

fs.writeFile( helloPath, data, { encoding: 'utf-8' } )
    .then(() => {
        console.log( 'hello.txt has been created' );
    })
    .catch(error => {
        console.log( error.message );
    });