/*!
 * Item: Kitzu
 * Description: Personal Portfolio Template
 * Author/Developer: Exill
 * Author/Developer URL: https://themeforest.net/user/exill
 * Version: v1.1.0
 * License: Themeforest Standard Licenses: https://themeforest.net/licenses
 */

/*----------- CUSTOM JS SCRIPTS -----------*/

(function($) {
  'use strict';
  $(function() {
    // Code here executes When the DOM is loaded...
  });
  $(window).on('load', function() {
    // Code here executes When the page is loaded
    $('#my-age').text(String(new Date(new Date() - new Date('1993/12/18')).getFullYear() - 1970));
  });
}(jQuery));