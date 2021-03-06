/*
 * webCoRE Discourse theme
 *
 * Copyright 2017-2018 authors; see AUTHORS.md or
 * https://webcore-mechanics.github.io/webCoRE-discourse-theme/AUTHORS
 *
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

/**
 * Buttons to prepend to the navbar
 * @param  {DecoratorHelper} helper A utility for generating DOM elements
 * @return {Array}
 */
function headerButtons(helper) {
	return [
		// Buttons to show or hide the homepage greeting, only on desktop
		helper.h('span.unless-mobile', [
			helper.h('span.if-homepage-i', [
				helper.h('a.btn.btn-small.btn-flat.login-button.toggle-hide-homepage.if-hide-homepage-ib', {
					text: 'Show greeting',
				}),
				helper.h('a.btn.btn-small.login-button.toggle-hide-homepage.unless-hide-homepage', {
					text: 'Hide greeting',
				}),
			])
		]),
	];
}

api.decorateWidget('header-buttons:before', headerButtons);
