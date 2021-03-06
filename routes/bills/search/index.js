'use strict';

var TimesApi = require( 'nyt-congress-node' );
var sunlightApi = require( 'sunlight-congress-api' );
var parseBill = require( '../../../modules/parse-bill-id' );
var SUNLIGHT = process.env.SUNLIGHT_CONGRESS_KEY || 'test';
sunlightApi.init( SUNLIGHT );

module.exports = function ( req ) {
  var query = req.query.q;
  return sunlightApi.billsSearch().search( query ).call();
};
