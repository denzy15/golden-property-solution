import replace from "gulp-replace"; //search and replace
import plumber from "gulp-plumber"; //error listener
import notify from "gulp-notify"; //notifications
import browsersync from "browser-sync"; //local server
import newer from "gulp-newer"; // update tracker
import ifPlugin from "gulp-if";

export const plugins = {
	replace: replace,
	plumber: plumber,
	notify: notify,
	browsersync: browsersync,
	newer: newer,
	if: ifPlugin,
}