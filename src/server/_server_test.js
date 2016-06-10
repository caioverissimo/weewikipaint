(function() {

	"use strict";

	var server 	= require("./server.js");
	var http 	= require("http");

	exports.testHttpServer= function (test){
		http.get("http://localhot:8080", function(response) {

		});
		test.done();
	};

}());

