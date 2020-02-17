
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  var body = `<!DOCTYPE html>
<html>
<head><meta charset="utf-8" />

<title>notebook</title>

<script src="https://cdnjs.cloudflare.com/ajax/libs/require.js/2.1.10/require.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>



<style type="text/css">
    /*!
*
* Twitter Bootstrap
*
*/
/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */
html {
  font-family: sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}
body {
  margin: 0;
}
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
main,
menu,
nav,
section,
summary {
  display: block;
}
audio,
canvas,
progress,
video {
  display: inline-block;
  vertical-align: baseline;
}
audio:not([controls]) {
  display: none;
  height: 0;
}
[hidden],
template {
  display: none;
}
a {
  background-color: transparent;
}
a:active,
a:hover {
  outline: 0;
}
abbr[title] {
  border-bottom: 1px dotted;
}
b,
strong {
  font-weight: bold;
}
dfn {
  font-style: italic;
}
h1 {
  font-size: 2em;
  margin: 0.67em 0;
}
mark {
  background: #ff0;
  color: #000;
}
small {
  font-size: 80%;
}
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}
sup {
  top: -0.5em;
}
sub {
  bottom: -0.25em;
}
img {
  border: 0;
}
svg:not(:root) {
  overflow: hidden;
}
figure {
  margin: 1em 40px;
}
hr {
  box-sizing: content-box;
  height: 0;
}
pre {
  overflow: auto;
}
code,
kbd,
pre,
samp {
  font-family: monospace, monospace;
  font-size: 1em;
}
button,
input,
optgroup,
select,
textarea {
  color: inherit;
  font: inherit;
  margin: 0;
}
button {
  overflow: visible;
}
button,
select {
  text-transform: none;
}
button,
html input[type="button"],
input[type="reset"],
input[type="submit"] {
  -webkit-appearance: button;
  cursor: pointer;
}
button[disabled],
html input[disabled] {
  cursor: default;
}
button::-moz-focus-inner,
input::-moz-focus-inner {
  border: 0;
  padding: 0;
}
input {
  line-height: normal;
}
input[type="checkbox"],
input[type="radio"] {
  box-sizing: border-box;
  padding: 0;
}
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  height: auto;
}
input[type="search"] {
  -webkit-appearance: textfield;
  box-sizing: content-box;
}
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}
fieldset {
  border: 1px solid #c0c0c0;
  margin: 0 2px;
  padding: 0.35em 0.625em 0.75em;
}
legend {
  border: 0;
  padding: 0;
}
textarea {
  overflow: auto;
}
optgroup {
  font-weight: bold;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
td,
th {
  padding: 0;
}
/*! Source: https://github.com/h5bp/html5-boilerplate/blob/master/src/css/main.css */
@media print {
  *,
  *:before,
  *:after {
    background: transparent !important;
    box-shadow: none !important;
    text-shadow: none !important;
  }
  a,
  a:visited {
    text-decoration: underline;
  }
  a[href]:after {
    content: " (" attr(href) ")";
  }
  abbr[title]:after {
    content: " (" attr(title) ")";
  }
  a[href^="#"]:after,
  a[href^="javascript:"]:after {
    content: "";
  }
  pre,
  blockquote {
    border: 1px solid #999;
    page-break-inside: avoid;
  }
  thead {
    display: table-header-group;
  }
  tr,
  img {
    page-break-inside: avoid;
  }
  img {
    max-width: 100% !important;
  }
  p,
  h2,
  h3 {
    orphans: 3;
    widows: 3;
  }
  h2,
  h3 {
    page-break-after: avoid;
  }
  .navbar {
    display: none;
  }
  .btn > .caret,
  .dropup > .btn > .caret {
    border-top-color: #000 !important;
  }
  .label {
    border: 1px solid #000;
  }
  .table {
    border-collapse: collapse !important;
  }
  .table td,
  .table th {
    background-color: #fff !important;
  }
  .table-bordered th,
  .table-bordered td {
    border: 1px solid #ddd !important;
  }
}
@font-face {
  font-family: 'Glyphicons Halflings';
  src: url('../components/bootstrap/fonts/glyphicons-halflings-regular.eot');
  src: url('../components/bootstrap/fonts/glyphicons-halflings-regular.eot?#iefix') format('embedded-opentype'), url('../components/bootstrap/fonts/glyphicons-halflings-regular.woff2') format('woff2'), url('../components/bootstrap/fonts/glyphicons-halflings-regular.woff') format('woff'), url('../components/bootstrap/fonts/glyphicons-halflings-regular.ttf') format('truetype'), url('../components/bootstrap/fonts/glyphicons-halflings-regular.svg#glyphicons_halflingsregular') format('svg');
}
.glyphicon {
  position: relative;
  top: 1px;
  display: inline-block;
  font-family: 'Glyphicons Halflings';
  font-style: normal;
  font-weight: normal;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.glyphicon-asterisk:before {
  content: "\\002a";
}
.glyphicon-plus:before {
  content: "\\002b";
}
.glyphicon-euro:before,
.glyphicon-eur:before {
  content: "\\20ac";
}
.glyphicon-minus:before {
  content: "\\2212";
}
.glyphicon-cloud:before {
  content: "\\2601";
}
.glyphicon-envelope:before {
  content: "\\2709";
}
.glyphicon-pencil:before {
  content: "\\270f";
}
.glyphicon-glass:before {
  content: "\\e001";
}
.glyphicon-music:before {
  content: "\\e002";
}
.glyphicon-search:before {
  content: "\\e003";
}
.glyphicon-heart:before {
  content: "\\e005";
}
.glyphicon-star:before {
  content: "\\e006";
}
.glyphicon-star-empty:before {
  content: "\\e007";
}
.glyphicon-user:before {
  content: "\\e008";
}
.glyphicon-film:before {
  content: "\\e009";
}
.glyphicon-th-large:before {
  content: "\\e010";
}
.glyphicon-th:before {
  content: "\\e011";
}
.glyphicon-th-list:before {
  content: "\\e012";
}
.glyphicon-ok:before {
  content: "\\e013";
}
.glyphicon-remove:before {
  content: "\\e014";
}
.glyphicon-zoom-in:before {
  content: "\\e015";
}
.glyphicon-zoom-out:before {
  content: "\\e016";
}
.glyphicon-off:before {
  content: "\\e017";
}
.glyphicon-signal:before {
  content: "\\e018";
}
.glyphicon-cog:before {
  content: "\\e019";
}
.glyphicon-trash:before {
  content: "\\e020";
}
.glyphicon-home:before {
  content: "\\e021";
}
.glyphicon-file:before {
  content: "\\e022";
}
.glyphicon-time:before {
  content: "\\e023";
}
.glyphicon-road:before {
  content: "\\e024";
}
.glyphicon-download-alt:before {
  content: "\\e025";
}
.glyphicon-download:before {
  content: "\\e026";
}
.glyphicon-upload:before {
  content: "\\e027";
}
.glyphicon-inbox:before {
  content: "\\e028";
}
.glyphicon-play-circle:before {
  content: "\\e029";
}
.glyphicon-repeat:before {
  content: "\\e030";
}
.glyphicon-refresh:before {
  content: "\\e031";
}
.glyphicon-list-alt:before {
  content: "\\e032";
}
.glyphicon-lock:before {
  content: "\\e033";
}
.glyphicon-flag:before {
  content: "\\e034";
}
.glyphicon-headphones:before {
  content: "\\e035";
}
.glyphicon-volume-off:before {
  content: "\\e036";
}
.glyphicon-volume-down:before {
  content: "\\e037";
}
.glyphicon-volume-up:before {
  content: "\\e038";
}
.glyphicon-qrcode:before {
  content: "\\e039";
}
.glyphicon-barcode:before {
  content: "\\e040";
}
.glyphicon-tag:before {
  content: "\\e041";
}
.glyphicon-tags:before {
  content: "\\e042";
}
.glyphicon-book:before {
  content: "\\e043";
}
.glyphicon-bookmark:before {
  content: "\\e044";
}
.glyphicon-print:before {
  content: "\\e045";
}
.glyphicon-camera:before {
  content: "\\e046";
}
.glyphicon-font:before {
  content: "\\e047";
}
.glyphicon-bold:before {
  content: "\\e048";
}
.glyphicon-italic:before {
  content: "\\e049";
}
.glyphicon-text-height:before {
  content: "\\e050";
}
.glyphicon-text-width:before {
  content: "\\e051";
}
.glyphicon-align-left:before {
  content: "\\e052";
}
.glyphicon-align-center:before {
  content: "\\e053";
}
.glyphicon-align-right:before {
  content: "\\e054";
}
.glyphicon-align-justify:before {
  content: "\\e055";
}
.glyphicon-list:before {
  content: "\\e056";
}
.glyphicon-indent-left:before {
  content: "\\e057";
}
.glyphicon-indent-right:before {
  content: "\\e058";
}
.glyphicon-facetime-video:before {
  content: "\\e059";
}
.glyphicon-picture:before {
  content: "\\e060";
}
.glyphicon-map-marker:before {
  content: "\\e062";
}
.glyphicon-adjust:before {
  content: "\\e063";
}
.glyphicon-tint:before {
  content: "\\e064";
}
.glyphicon-edit:before {
  content: "\\e065";
}
.glyphicon-share:before {
  content: "\\e066";
}
.glyphicon-check:before {
  content: "\\e067";
}
.glyphicon-move:before {
  content: "\\e068";
}
.glyphicon-step-backward:before {
  content: "\\e069";
}
.glyphicon-fast-backward:before {
  content: "\\e070";
}
.glyphicon-backward:before {
  content: "\\e071";
}
.glyphicon-play:before {
  content: "\\e072";
}
.glyphicon-pause:before {
  content: "\\e073";
}
.glyphicon-stop:before {
  content: "\\e074";
}
.glyphicon-forward:before {
  content: "\\e075";
}
.glyphicon-fast-forward:before {
  content: "\\e076";
}
.glyphicon-step-forward:before {
  content: "\\e077";
}
.glyphicon-eject:before {
  content: "\\e078";
}
.glyphicon-chevron-left:before {
  content: "\\e079";
}
.glyphicon-chevron-right:before {
  content: "\\e080";
}
.glyphicon-plus-sign:before {
  content: "\\e081";
}
.glyphicon-minus-sign:before {
  content: "\\e082";
}
.glyphicon-remove-sign:before {
  content: "\\e083";
}
.glyphicon-ok-sign:before {
  content: "\\e084";
}
.glyphicon-question-sign:before {
  content: "\\e085";
}
.glyphicon-info-sign:before {
  content: "\\e086";
}
.glyphicon-screenshot:before {
  content: "\\e087";
}
.glyphicon-remove-circle:before {
  content: "\\e088";
}
.glyphicon-ok-circle:before {
  content: "\\e089";
}
.glyphicon-ban-circle:before {
  content: "\\e090";
}
.glyphicon-arrow-left:before {
  content: "\\e091";
}
.glyphicon-arrow-right:before {
  content: "\\e092";
}
.glyphicon-arrow-up:before {
  content: "\\e093";
}
.glyphicon-arrow-down:before {
  content: "\\e094";
}
.glyphicon-share-alt:before {
  content: "\\e095";
}
.glyphicon-resize-full:before {
  content: "\\e096";
}
.glyphicon-resize-small:before {
  content: "\\e097";
}
.glyphicon-exclamation-sign:before {
  content: "\\e101";
}
.glyphicon-gift:before {
  content: "\\e102";
}
.glyphicon-leaf:before {
  content: "\\e103";
}
.glyphicon-fire:before {
  content: "\\e104";
}
.glyphicon-eye-open:before {
  content: "\\e105";
}
.glyphicon-eye-close:before {
  content: "\\e106";
}
.glyphicon-warning-sign:before {
  content: "\\e107";
}
.glyphicon-plane:before {
  content: "\\e108";
}
.glyphicon-calendar:before {
  content: "\\e109";
}
.glyphicon-random:before {
  content: "\\e110";
}
.glyphicon-comment:before {
  content: "\\e111";
}
.glyphicon-magnet:before {
  content: "\\e112";
}
.glyphicon-chevron-up:before {
  content: "\\e113";
}
.glyphicon-chevron-down:before {
  content: "\\e114";
}
.glyphicon-retweet:before {
  content: "\\e115";
}
.glyphicon-shopping-cart:before {
  content: "\\e116";
}
.glyphicon-folder-close:before {
  content: "\\e117";
}
.glyphicon-folder-open:before {
  content: "\\e118";
}
.glyphicon-resize-vertical:before {
  content: "\\e119";
}
.glyphicon-resize-horizontal:before {
  content: "\\e120";
}
.glyphicon-hdd:before {
  content: "\\e121";
}
.glyphicon-bullhorn:before {
  content: "\\e122";
}
.glyphicon-bell:before {
  content: "\\e123";
}
.glyphicon-certificate:before {
  content: "\\e124";
}
.glyphicon-thumbs-up:before {
  content: "\\e125";
}
.glyphicon-thumbs-down:before {
  content: "\\e126";
}
.glyphicon-hand-right:before {
  content: "\\e127";
}
.glyphicon-hand-left:before {
  content: "\\e128";
}
.glyphicon-hand-up:before {
  content: "\\e129";
}
.glyphicon-hand-down:before {
  content: "\\e130";
}
.glyphicon-circle-arrow-right:before {
  content: "\\e131";
}
.glyphicon-circle-arrow-left:before {
  content: "\\e132";
}
.glyphicon-circle-arrow-up:before {
  content: "\\e133";
}
.glyphicon-circle-arrow-down:before {
  content: "\\e134";
}
.glyphicon-globe:before {
  content: "\\e135";
}
.glyphicon-wrench:before {
  content: "\\e136";
}
.glyphicon-tasks:before {
  content: "\\e137";
}
.glyphicon-filter:before {
  content: "\\e138";
}
.glyphicon-briefcase:before {
  content: "\\e139";
}
.glyphicon-fullscreen:before {
  content: "\\e140";
}
.glyphicon-dashboard:before {
  content: "\\e141";
}
.glyphicon-paperclip:before {
  content: "\\e142";
}
.glyphicon-heart-empty:before {
  content: "\\e143";
}
.glyphicon-link:before {
  content: "\\e144";
}
.glyphicon-phone:before {
  content: "\\e145";
}
.glyphicon-pushpin:before {
  content: "\\e146";
}
.glyphicon-usd:before {
  content: "\\e148";
}
.glyphicon-gbp:before {
  content: "\\e149";
}
.glyphicon-sort:before {
  content: "\\e150";
}
.glyphicon-sort-by-alphabet:before {
  content: "\\e151";
}
.glyphicon-sort-by-alphabet-alt:before {
  content: "\\e152";
}
.glyphicon-sort-by-order:before {
  content: "\\e153";
}
.glyphicon-sort-by-order-alt:before {
  content: "\\e154";
}
.glyphicon-sort-by-attributes:before {
  content: "\\e155";
}
.glyphicon-sort-by-attributes-alt:before {
  content: "\\e156";
}
.glyphicon-unchecked:before {
  content: "\\e157";
}
.glyphicon-expand:before {
  content: "\\e158";
}
.glyphicon-collapse-down:before {
  content: "\\e159";
}
.glyphicon-collapse-up:before {
  content: "\\e160";
}
.glyphicon-log-in:before {
  content: "\\e161";
}
.glyphicon-flash:before {
  content: "\\e162";
}
.glyphicon-log-out:before {
  content: "\\e163";
}
.glyphicon-new-window:before {
  content: "\\e164";
}
.glyphicon-record:before {
  content: "\\e165";
}
.glyphicon-save:before {
  content: "\\e166";
}
.glyphicon-open:before {
  content: "\\e167";
}
.glyphicon-saved:before {
  content: "\\e168";
}
.glyphicon-import:before {
  content: "\\e169";
}
.glyphicon-export:before {
  content: "\\e170";
}
.glyphicon-send:before {
  content: "\\e171";
}
.glyphicon-floppy-disk:before {
  content: "\\e172";
}
.glyphicon-floppy-saved:before {
  content: "\\e173";
}
.glyphicon-floppy-remove:before {
  content: "\\e174";
}
.glyphicon-floppy-save:before {
  content: "\\e175";
}
.glyphicon-floppy-open:before {
  content: "\\e176";
}
.glyphicon-credit-card:before {
  content: "\\e177";
}
.glyphicon-transfer:before {
  content: "\\e178";
}
.glyphicon-cutlery:before {
  content: "\\e179";
}
.glyphicon-header:before {
  content: "\\e180";
}
.glyphicon-compressed:before {
  content: "\\e181";
}
.glyphicon-earphone:before {
  content: "\\e182";
}
.glyphicon-phone-alt:before {
  content: "\\e183";
}
.glyphicon-tower:before {
  content: "\\e184";
}
.glyphicon-stats:before {
  content: "\\e185";
}
.glyphicon-sd-video:before {
  content: "\\e186";
}
.glyphicon-hd-video:before {
  content: "\\e187";
}
.glyphicon-subtitles:before {
  content: "\\e188";
}
.glyphicon-sound-stereo:before {
  content: "\\e189";
}
.glyphicon-sound-dolby:before {
  content: "\\e190";
}
.glyphicon-sound-5-1:before {
  content: "\\e191";
}
.glyphicon-sound-6-1:before {
  content: "\\e192";
}
.glyphicon-sound-7-1:before {
  content: "\\e193";
}
.glyphicon-copyright-mark:before {
  content: "\\e194";
}
.glyphicon-registration-mark:before {
  content: "\\e195";
}
.glyphicon-cloud-download:before {
  content: "\\e197";
}
.glyphicon-cloud-upload:before {
  content: "\\e198";
}
.glyphicon-tree-conifer:before {
  content: "\\e199";
}
.glyphicon-tree-deciduous:before {
  content: "\\e200";
}
.glyphicon-cd:before {
  content: "\\e201";
}
.glyphicon-save-file:before {
  content: "\\e202";
}
.glyphicon-open-file:before {
  content: "\\e203";
}
.glyphicon-level-up:before {
  content: "\\e204";
}
.glyphicon-copy:before {
  content: "\\e205";
}
.glyphicon-paste:before {
  content: "\\e206";
}
.glyphicon-alert:before {
  content: "\\e209";
}
.glyphicon-equalizer:before {
  content: "\\e210";
}
.glyphicon-king:before {
  content: "\\e211";
}
.glyphicon-queen:before {
  content: "\\e212";
}
.glyphicon-pawn:before {
  content: "\\e213";
}
.glyphicon-bishop:before {
  content: "\\e214";
}
.glyphicon-knight:before {
  content: "\\e215";
}
.glyphicon-baby-formula:before {
  content: "\\e216";
}
.glyphicon-tent:before {
  content: "\\26fa";
}
.glyphicon-blackboard:before {
  content: "\\e218";
}
.glyphicon-bed:before {
  content: "\\e219";
}
.glyphicon-apple:before {
  content: "\\f8ff";
}
.glyphicon-erase:before {
  content: "\\e221";
}
.glyphicon-hourglass:before {
  content: "\\231b";
}
.glyphicon-lamp:before {
  content: "\\e223";
}
.glyphicon-duplicate:before {
  content: "\\e224";
}
.glyphicon-piggy-bank:before {
  content: "\\e225";
}
.glyphicon-scissors:before {
  content: "\\e226";
}
.glyphicon-bitcoin:before {
  content: "\\e227";
}
.glyphicon-btc:before {
  content: "\\e227";
}
.glyphicon-xbt:before {
  content: "\\e227";
}
.glyphicon-yen:before {
  content: "\\00a5";
}
.glyphicon-jpy:before {
  content: "\\00a5";
}
.glyphicon-ruble:before {
  content: "\\20bd";
}
.glyphicon-rub:before {
  content: "\\20bd";
}
.glyphicon-scale:before {
  content: "\\e230";
}
.glyphicon-ice-lolly:before {
  content: "\\e231";
}
.glyphicon-ice-lolly-tasted:before {
  content: "\\e232";
}
.glyphicon-education:before {
  content: "\\e233";
}
.glyphicon-option-horizontal:before {
  content: "\\e234";
}
.glyphicon-option-vertical:before {
  content: "\\e235";
}
.glyphicon-menu-hamburger:before {
  content: "\\e236";
}
.glyphicon-modal-window:before {
  content: "\\e237";
}
.glyphicon-oil:before {
  content: "\\e238";
}
.glyphicon-grain:before {
  content: "\\e239";
}
.glyphicon-sunglasses:before {
  content: "\\e240";
}
.glyphicon-text-size:before {
  content: "\\e241";
}
.glyphicon-text-color:before {
  content: "\\e242";
}
.glyphicon-text-background:before {
  content: "\\e243";
}
.glyphicon-object-align-top:before {
  content: "\\e244";
}
.glyphicon-object-align-bottom:before {
  content: "\\e245";
}
.glyphicon-object-align-horizontal:before {
  content: "\\e246";
}
.glyphicon-object-align-left:before {
  content: "\\e247";
}
.glyphicon-object-align-vertical:before {
  content: "\\e248";
}
.glyphicon-object-align-right:before {
  content: "\\e249";
}
.glyphicon-triangle-right:before {
  content: "\\e250";
}
.glyphicon-triangle-left:before {
  content: "\\e251";
}
.glyphicon-triangle-bottom:before {
  content: "\\e252";
}
.glyphicon-triangle-top:before {
  content: "\\e253";
}
.glyphicon-console:before {
  content: "\\e254";
}
.glyphicon-superscript:before {
  content: "\\e255";
}
.glyphicon-subscript:before {
  content: "\\e256";
}
.glyphicon-menu-left:before {
  content: "\\e257";
}
.glyphicon-menu-right:before {
  content: "\\e258";
}
.glyphicon-menu-down:before {
  content: "\\e259";
}
.glyphicon-menu-up:before {
  content: "\\e260";
}
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
*:before,
*:after {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
html {
  font-size: 10px;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
body {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 13px;
  line-height: 1.42857143;
  color: #000;
  background-color: #fff;
}
input,
button,
select,
textarea {
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}
a {
  color: #337ab7;
  text-decoration: none;
}
a:hover,
a:focus {
  color: #23527c;
  text-decoration: underline;
}
a:focus {
  outline: 5px auto -webkit-focus-ring-color;
  outline-offset: -2px;
}
figure {
  margin: 0;
}
img {
  vertical-align: middle;
}
.img-responsive,
.thumbnail > img,
.thumbnail a > img,
.carousel-inner > .item > img,
.carousel-inner > .item > a > img {
  display: block;
  max-width: 100%;
  height: auto;
}
.img-rounded {
  border-radius: 3px;
}
.img-thumbnail {
  padding: 4px;
  line-height: 1.42857143;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 2px;
  -webkit-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  display: inline-block;
  max-width: 100%;
  height: auto;
}
.img-circle {
  border-radius: 50%;
}
hr {
  margin-top: 18px;
  margin-bottom: 18px;
  border: 0;
  border-top: 1px solid #eeeeee;
}
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}
.sr-only-focusable:active,
.sr-only-focusable:focus {
  position: static;
  width: auto;
  height: auto;
  margin: 0;
  overflow: visible;
  clip: auto;
}
[role="button"] {
  cursor: pointer;
}
h1,
h2,
h3,
h4,
h5,
h6,
.h1,
.h2,
.h3,
.h4,
.h5,
.h6 {
  font-family: inherit;
  font-weight: 500;
  line-height: 1.1;
  color: inherit;
}
h1 small,
h2 small,
h3 small,
h4 small,
h5 small,
h6 small,
.h1 small,
.h2 small,
.h3 small,
.h4 small,
.h5 small,
.h6 small,
h1 .small,
h2 .small,
h3 .small,
h4 .small,
h5 .small,
h6 .small,
.h1 .small,
.h2 .small,
.h3 .small,
.h4 .small,
.h5 .small,
.h6 .small {
  font-weight: normal;
  line-height: 1;
  color: #777777;
}
h1,
.h1,
h2,
.h2,
h3,
.h3 {
  margin-top: 18px;
  margin-bottom: 9px;
}
h1 small,
.h1 small,
h2 small,
.h2 small,
h3 small,
.h3 small,
h1 .small,
.h1 .small,
h2 .small,
.h2 .small,
h3 .small,
.h3 .small {
  font-size: 65%;
}
h4,
.h4,
h5,
.h5,
h6,
.h6 {
  margin-top: 9px;
  margin-bottom: 9px;
}
h4 small,
.h4 small,
h5 small,
.h5 small,
h6 small,
.h6 small,
h4 .small,
.h4 .small,
h5 .small,
.h5 .small,
h6 .small,
.h6 .small {
  font-size: 75%;
}
h1,
.h1 {
  font-size: 33px;
}
h2,
.h2 {
  font-size: 27px;
}
h3,
.h3 {
  font-size: 23px;
}
h4,
.h4 {
  font-size: 17px;
}
h5,
.h5 {
  font-size: 13px;
}
h6,
.h6 {
  font-size: 12px;
}
p {
  margin: 0 0 9px;
}
.lead {
  margin-bottom: 18px;
  font-size: 14px;
  font-weight: 300;
  line-height: 1.4;
}
@media (min-width: 768px) {
  .lead {
    font-size: 19.5px;
  }
}
small,
.small {
  font-size: 92%;
}
mark,
.mark {
  background-color: #fcf8e3;
  padding: .2em;
}
.text-left {
  text-align: left;
}
.text-right {
  text-align: right;
}
.text-center {
  text-align: center;
}
.text-justify {
  text-align: justify;
}
.text-nowrap {
  white-space: nowrap;
}
.text-lowercase {
  text-transform: lowercase;
}
.text-uppercase {
  text-transform: uppercase;
}
.text-capitalize {
  text-transform: capitalize;
}
.text-muted {
  color: #777777;
}
.text-primary {
  color: #337ab7;
}
a.text-primary:hover,
a.text-primary:focus {
  color: #286090;
}
.text-success {
  color: #3c763d;
}
a.text-success:hover,
a.text-success:focus {
  color: #2b542c;
}
.text-info {
  color: #31708f;
}
a.text-info:hover,
a.text-info:focus {
  color: #245269;
}
.text-warning {
  color: #8a6d3b;
}
a.text-warning:hover,
a.text-warning:focus {
  color: #66512c;
}
.text-danger {
  color: #a94442;
}
a.text-danger:hover,
a.text-danger:focus {
  color: #843534;
}
.bg-primary {
  color: #fff;
  background-color: #337ab7;
}
a.bg-primary:hover,
a.bg-primary:focus {
  background-color: #286090;
}
.bg-success {
  background-color: #dff0d8;
}
a.bg-success:hover,
a.bg-success:focus {
  background-color: #c1e2b3;
}
.bg-info {
  background-color: #d9edf7;
}
a.bg-info:hover,
a.bg-info:focus {
  background-color: #afd9ee;
}
.bg-warning {
  background-color: #fcf8e3;
}
a.bg-warning:hover,
a.bg-warning:focus {
  background-color: #f7ecb5;
}
.bg-danger {
  background-color: #f2dede;
}
a.bg-danger:hover,
a.bg-danger:focus {
  background-color: #e4b9b9;
}
.page-header {
  padding-bottom: 8px;
  margin: 36px 0 18px;
  border-bottom: 1px solid #eeeeee;
}
ul,
ol {
  margin-top: 0;
  margin-bottom: 9px;
}
ul ul,
ol ul,
ul ol,
ol ol {
  margin-bottom: 0;
}
.list-unstyled {
  padding-left: 0;
  list-style: none;
}
.list-inline {
  padding-left: 0;
  list-style: none;
  margin-left: -5px;
}
.list-inline > li {
  display: inline-block;
  padding-left: 5px;
  padding-right: 5px;
}
dl {
  margin-top: 0;
  margin-bottom: 18px;
}
dt,
dd {
  line-height: 1.42857143;
}
dt {
  font-weight: bold;
}
dd {
  margin-left: 0;
}
@media (min-width: 541px) {
  .dl-horizontal dt {
    float: left;
    width: 160px;
    clear: left;
    text-align: right;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .dl-horizontal dd {
    margin-left: 180px;
  }
}
abbr[title],
abbr[data-original-title] {
  cursor: help;
  border-bottom: 1px dotted #777777;
}
.initialism {
  font-size: 90%;
  text-transform: uppercase;
}
blockquote {
  padding: 9px 18px;
  margin: 0 0 18px;
  font-size: inherit;
  border-left: 5px solid #eeeeee;
}
blockquote p:last-child,
blockquote ul:last-child,
blockquote ol:last-child {
  margin-bottom: 0;
}
blockquote footer,
blockquote small,
blockquote .small {
  display: block;
  font-size: 80%;
  line-height: 1.42857143;
  color: #777777;
}
blockquote footer:before,
blockquote small:before,
blockquote .small:before {
  content: '\\2014 \\00A0';
}
.blockquote-reverse,
blockquote.pull-right {
  padding-right: 15px;
  padding-left: 0;
  border-right: 5px solid #eeeeee;
  border-left: 0;
  text-align: right;
}
.blockquote-reverse footer:before,
blockquote.pull-right footer:before,
.blockquote-reverse small:before,
blockquote.pull-right small:before,
.blockquote-reverse .small:before,
blockquote.pull-right .small:before {
  content: '';
}
.blockquote-reverse footer:after,
blockquote.pull-right footer:after,
.blockquote-reverse small:after,
blockquote.pull-right small:after,
.blockquote-reverse .small:after,
blockquote.pull-right .small:after {
  content: '\\00A0 \\2014';
}
address {
  margin-bottom: 18px;
  font-style: normal;
  line-height: 1.42857143;
}
code,
kbd,
pre,
samp {
  font-family: monospace;
}
code {
  padding: 2px 4px;
  font-size: 90%;
  color: #c7254e;
  background-color: #f9f2f4;
  border-radius: 2px;
}
kbd {
  padding: 2px 4px;
  font-size: 90%;
  color: #888;
  background-color: transparent;
  border-radius: 1px;
  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.25);
}
kbd kbd {
  padding: 0;
  font-size: 100%;
  font-weight: bold;
  box-shadow: none;
}
pre {
  display: block;
  padding: 8.5px;
  margin: 0 0 9px;
  font-size: 12px;
  line-height: 1.42857143;
  word-break: break-all;
  word-wrap: break-word;
  color: #333333;
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  border-radius: 2px;
}
pre code {
  padding: 0;
  font-size: inherit;
  color: inherit;
  white-space: pre-wrap;
  background-color: transparent;
  border-radius: 0;
}
.pre-scrollable {
  max-height: 340px;
  overflow-y: scroll;
}
.container {
  margin-right: auto;
  margin-left: auto;
  padding-left: 0px;
  padding-right: 0px;
}
@media (min-width: 768px) {
  .container {
    width: 768px;
  }
}
@media (min-width: 992px) {
  .container {
    width: 940px;
  }
}
@media (min-width: 1200px) {
  .container {
    width: 1140px;
  }
}
.container-fluid {
  margin-right: auto;
  margin-left: auto;
  padding-left: 0px;
  padding-right: 0px;
}
.row {
  margin-left: 0px;
  margin-right: 0px;
}
.col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12 {
  position: relative;
  min-height: 1px;
  padding-left: 0px;
  padding-right: 0px;
}
.col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12 {
  float: left;
}
.col-xs-12 {
  width: 100%;
}
.col-xs-11 {
  width: 91.66666667%;
}
.col-xs-10 {
  width: 83.33333333%;
}
.col-xs-9 {
  width: 75%;
}
.col-xs-8 {
  width: 66.66666667%;
}
.col-xs-7 {
  width: 58.33333333%;
}
.col-xs-6 {
  width: 50%;
}
.col-xs-5 {
  width: 41.66666667%;
}
.col-xs-4 {
  width: 33.33333333%;
}
.col-xs-3 {
  width: 25%;
}
.col-xs-2 {
  width: 16.66666667%;
}
.col-xs-1 {
  width: 8.33333333%;
}
.col-xs-pull-12 {
  right: 100%;
}
.col-xs-pull-11 {
  right: 91.66666667%;
}
.col-xs-pull-10 {
  right: 83.33333333%;
}
.col-xs-pull-9 {
  right: 75%;
}
.col-xs-pull-8 {
  right: 66.66666667%;
}
.col-xs-pull-7 {
  right: 58.33333333%;
}
.col-xs-pull-6 {
  right: 50%;
}
.col-xs-pull-5 {
  right: 41.66666667%;
}
.col-xs-pull-4 {
  right: 33.33333333%;
}
.col-xs-pull-3 {
  right: 25%;
}
.col-xs-pull-2 {
  right: 16.66666667%;
}
.col-xs-pull-1 {
  right: 8.33333333%;
}
.col-xs-pull-0 {
  right: auto;
}
.col-xs-push-12 {
  left: 100%;
}
.col-xs-push-11 {
  left: 91.66666667%;
}
.col-xs-push-10 {
  left: 83.33333333%;
}
.col-xs-push-9 {
  left: 75%;
}
.col-xs-push-8 {
  left: 66.66666667%;
}
.col-xs-push-7 {
  left: 58.33333333%;
}
.col-xs-push-6 {
  left: 50%;
}
.col-xs-push-5 {
  left: 41.66666667%;
}
.col-xs-push-4 {
  left: 33.33333333%;
}
.col-xs-push-3 {
  left: 25%;
}
.col-xs-push-2 {
  left: 16.66666667%;
}
.col-xs-push-1 {
  left: 8.33333333%;
}
.col-xs-push-0 {
  left: auto;
}
.col-xs-offset-12 {
  margin-left: 100%;
}
.col-xs-offset-11 {
  margin-left: 91.66666667%;
}
.col-xs-offset-10 {
  margin-left: 83.33333333%;
}
.col-xs-offset-9 {
  margin-left: 75%;
}
.col-xs-offset-8 {
  margin-left: 66.66666667%;
}
.col-xs-offset-7 {
  margin-left: 58.33333333%;
}
.col-xs-offset-6 {
  margin-left: 50%;
}
.col-xs-offset-5 {
  margin-left: 41.66666667%;
}
.col-xs-offset-4 {
  margin-left: 33.33333333%;
}
.col-xs-offset-3 {
  margin-left: 25%;
}
.col-xs-offset-2 {
  margin-left: 16.66666667%;
}
.col-xs-offset-1 {
  margin-left: 8.33333333%;
}
.col-xs-offset-0 {
  margin-left: 0%;
}
@media (min-width: 768px) {
  .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12 {
    float: left;
  }
  .col-sm-12 {
    width: 100%;
  }
  .col-sm-11 {
    width: 91.66666667%;
  }
  .col-sm-10 {
    width: 83.33333333%;
  }
  .col-sm-9 {
    width: 75%;
  }
  .col-sm-8 {
    width: 66.66666667%;
  }
  .col-sm-7 {
    width: 58.33333333%;
  }
  .col-sm-6 {
    width: 50%;
  }
  .col-sm-5 {
    width: 41.66666667%;
  }
  .col-sm-4 {
    width: 33.33333333%;
  }
  .col-sm-3 {
    width: 25%;
  }
  .col-sm-2 {
    width: 16.66666667%;
  }
  .col-sm-1 {
    width: 8.33333333%;
  }
  .col-sm-pull-12 {
    right: 100%;
  }
  .col-sm-pull-11 {
    right: 91.66666667%;
  }
  .col-sm-pull-10 {
    right: 83.33333333%;
  }
  .col-sm-pull-9 {
    right: 75%;
  }
  .col-sm-pull-8 {
    right: 66.66666667%;
  }
  .col-sm-pull-7 {
    right: 58.33333333%;
  }
  .col-sm-pull-6 {
    right: 50%;
  }
  .col-sm-pull-5 {
    right: 41.66666667%;
  }
  .col-sm-pull-4 {
    right: 33.33333333%;
  }
  .col-sm-pull-3 {
    right: 25%;
  }
  .col-sm-pull-2 {
    right: 16.66666667%;
  }
  .col-sm-pull-1 {
    right: 8.33333333%;
  }
  .col-sm-pull-0 {
    right: auto;
  }
  .col-sm-push-12 {
    left: 100%;
  }
  .col-sm-push-11 {
    left: 91.66666667%;
  }
  .col-sm-push-10 {
    left: 83.33333333%;
  }
  .col-sm-push-9 {
    left: 75%;
  }
  .col-sm-push-8 {
    left: 66.66666667%;
  }
  .col-sm-push-7 {
    left: 58.33333333%;
  }
  .col-sm-push-6 {
    left: 50%;
  }
  .col-sm-push-5 {
    left: 41.66666667%;
  }
  .col-sm-push-4 {
    left: 33.33333333%;
  }
  .col-sm-push-3 {
    left: 25%;
  }
  .col-sm-push-2 {
    left: 16.66666667%;
  }
  .col-sm-push-1 {
    left: 8.33333333%;
  }
  .col-sm-push-0 {
    left: auto;
  }
  .col-sm-offset-12 {
    margin-left: 100%;
  }
  .col-sm-offset-11 {
    margin-left: 91.66666667%;
  }
  .col-sm-offset-10 {
    margin-left: 83.33333333%;
  }
  .col-sm-offset-9 {
    margin-left: 75%;
  }
  .col-sm-offset-8 {
    margin-left: 66.66666667%;
  }
  .col-sm-offset-7 {
    margin-left: 58.33333333%;
  }
  .col-sm-offset-6 {
    margin-left: 50%;
  }
  .col-sm-offset-5 {
    margin-left: 41.66666667%;
  }
  .col-sm-offset-4 {
    margin-left: 33.33333333%;
  }
  .col-sm-offset-3 {
    margin-left: 25%;
  }
  .col-sm-offset-2 {
    margin-left: 16.66666667%;
  }
  .col-sm-offset-1 {
    margin-left: 8.33333333%;
  }
  .col-sm-offset-0 {
    margin-left: 0%;
  }
}
@media (min-width: 992px) {
  .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12 {
    float: left;
  }
  .col-md-12 {
    width: 100%;
  }
  .col-md-11 {
    width: 91.66666667%;
  }
  .col-md-10 {
    width: 83.33333333%;
  }
  .col-md-9 {
    width: 75%;
  }
  .col-md-8 {
    width: 66.66666667%;
  }
  .col-md-7 {
    width: 58.33333333%;
  }
  .col-md-6 {
    width: 50%;
  }
  .col-md-5 {
    width: 41.66666667%;
  }
  .col-md-4 {
    width: 33.33333333%;
  }
  .col-md-3 {
    width: 25%;
  }
  .col-md-2 {
    width: 16.66666667%;
  }
  .col-md-1 {
    width: 8.33333333%;
  }
  .col-md-pull-12 {
    right: 100%;
  }
  .col-md-pull-11 {
    right: 91.66666667%;
  }
  .col-md-pull-10 {
    right: 83.33333333%;
  }
  .col-md-pull-9 {
    right: 75%;
  }
  .col-md-pull-8 {
    right: 66.66666667%;
  }
  .col-md-pull-7 {
    right: 58.33333333%;
  }
  .col-md-pull-6 {
    right: 50%;
  }
  .col-md-pull-5 {
    right: 41.66666667%;
  }
  .col-md-pull-4 {
    right: 33.33333333%;
  }
  .col-md-pull-3 {
    right: 25%;
  }
  .col-md-pull-2 {
    right: 16.66666667%;
  }
  .col-md-pull-1 {
    right: 8.33333333%;
  }
  .col-md-pull-0 {
    right: auto;
  }
  .col-md-push-12 {
    left: 100%;
  }
  .col-md-push-11 {
    left: 91.66666667%;
  }
  .col-md-push-10 {
    left: 83.33333333%;
  }
  .col-md-push-9 {
    left: 75%;
  }
  .col-md-push-8 {
    left: 66.66666667%;
  }
  .col-md-push-7 {
    left: 58.33333333%;
  }
  .col-md-push-6 {
    left: 50%;
  }
  .col-md-push-5 {
    left: 41.66666667%;
  }
  .col-md-push-4 {
    left: 33.33333333%;
  }
  .col-md-push-3 {
    left: 25%;
  }
  .col-md-push-2 {
    left: 16.66666667%;
  }
  .col-md-push-1 {
    left: 8.33333333%;
  }
  .col-md-push-0 {
    left: auto;
  }
  .col-md-offset-12 {
    margin-left: 100%;
  }
  .col-md-offset-11 {
    margin-left: 91.66666667%;
  }
  .col-md-offset-10 {
    margin-left: 83.33333333%;
  }
  .col-md-offset-9 {
    margin-left: 75%;
  }
  .col-md-offset-8 {
    margin-left: 66.66666667%;
  }
  .col-md-offset-7 {
    margin-left: 58.33333333%;
  }
  .col-md-offset-6 {
    margin-left: 50%;
  }
  .col-md-offset-5 {
    margin-left: 41.66666667%;
  }
  .col-md-offset-4 {
    margin-left: 33.33333333%;
  }
  .col-md-offset-3 {
    margin-left: 25%;
  }
  .col-md-offset-2 {
    margin-left: 16.66666667%;
  }
  .col-md-offset-1 {
    margin-left: 8.33333333%;
  }
  .col-md-offset-0 {
    margin-left: 0%;
  }
}
@media (min-width: 1200px) {
  .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12 {
    float: left;
  }
  .col-lg-12 {
    width: 100%;
  }
  .col-lg-11 {
    width: 91.66666667%;
  }
  .col-lg-10 {
    width: 83.33333333%;
  }
  .col-lg-9 {
    width: 75%;
  }
  .col-lg-8 {
    width: 66.66666667%;
  }
  .col-lg-7 {
    width: 58.33333333%;
  }
  .col-lg-6 {
    width: 50%;
  }
  .col-lg-5 {
    width: 41.66666667%;
  }
  .col-lg-4 {
    width: 33.33333333%;
  }
  .col-lg-3 {
    width: 25%;
  }
  .col-lg-2 {
    width: 16.66666667%;
  }
  .col-lg-1 {
    width: 8.33333333%;
  }
  .col-lg-pull-12 {
    right: 100%;
  }
  .col-lg-pull-11 {
    right: 91.66666667%;
  }
  .col-lg-pull-10 {
    right: 83.33333333%;
  }
  .col-lg-pull-9 {
    right: 75%;
  }
  .col-lg-pull-8 {
    right: 66.66666667%;
  }
  .col-lg-pull-7 {
    right: 58.33333333%;
  }
  .col-lg-pull-6 {
    right: 50%;
  }
  .col-lg-pull-5 {
    right: 41.66666667%;
  }
  .col-lg-pull-4 {
    right: 33.33333333%;
  }
  .col-lg-pull-3 {
    right: 25%;
  }
  .col-lg-pull-2 {
    right: 16.66666667%;
  }
  .col-lg-pull-1 {
    right: 8.33333333%;
  }
  .col-lg-pull-0 {
    right: auto;
  }
  .col-lg-push-12 {
    left: 100%;
  }
  .col-lg-push-11 {
    left: 91.66666667%;
  }
  .col-lg-push-10 {
    left: 83.33333333%;
  }
  .col-lg-push-9 {
    left: 75%;
  }
  .col-lg-push-8 {
    left: 66.66666667%;
  }
  .col-lg-push-7 {
    left: 58.33333333%;
  }
  .col-lg-push-6 {
    left: 50%;
  }
  .col-lg-push-5 {
    left: 41.66666667%;
  }
  .col-lg-push-4 {
    left: 33.33333333%;
  }
  .col-lg-push-3 {
    left: 25%;
  }
  .col-lg-push-2 {
    left: 16.66666667%;
  }
  .col-lg-push-1 {
    left: 8.33333333%;
  }
  .col-lg-push-0 {
    left: auto;
  }
  .col-lg-offset-12 {
    margin-left: 100%;
  }
  .col-lg-offset-11 {
    margin-left: 91.66666667%;
  }
  .col-lg-offset-10 {
    margin-left: 83.33333333%;
  }
  .col-lg-offset-9 {
    margin-left: 75%;
  }
  .col-lg-offset-8 {
    margin-left: 66.66666667%;
  }
  .col-lg-offset-7 {
    margin-left: 58.33333333%;
  }
  .col-lg-offset-6 {
    margin-left: 50%;
  }
  .col-lg-offset-5 {
    margin-left: 41.66666667%;
  }
  .col-lg-offset-4 {
    margin-left: 33.33333333%;
  }
  .col-lg-offset-3 {
    margin-left: 25%;
  }
  .col-lg-offset-2 {
    margin-left: 16.66666667%;
  }
  .col-lg-offset-1 {
    margin-left: 8.33333333%;
  }
  .col-lg-offset-0 {
    margin-left: 0%;
  }
}
table {
  background-color: transparent;
}
caption {
  padding-top: 8px;
  padding-bottom: 8px;
  color: #777777;
  text-align: left;
}
th {
  text-align: left;
}
.table {
  width: 100%;
  max-width: 100%;
  margin-bottom: 18px;
}
.table > thead > tr > th,
.table > tbody > tr > th,
.table > tfoot > tr > th,
.table > thead > tr > td,
.table > tbody > tr > td,
.table > tfoot > tr > td {
  padding: 8px;
  line-height: 1.42857143;
  vertical-align: top;
  border-top: 1px solid #ddd;
}
.table > thead > tr > th {
  vertical-align: bottom;
  border-bottom: 2px solid #ddd;
}
.table > caption + thead > tr:first-child > th,
.table > colgroup + thead > tr:first-child > th,
.table > thead:first-child > tr:first-child > th,
.table > caption + thead > tr:first-child > td,
.table > colgroup + thead > tr:first-child > td,
.table > thead:first-child > tr:first-child > td {
  border-top: 0;
}
.table > tbody + tbody {
  border-top: 2px solid #ddd;
}
.table .table {
  background-color: #fff;
}
.table-condensed > thead > tr > th,
.table-condensed > tbody > tr > th,
.table-condensed > tfoot > tr > th,
.table-condensed > thead > tr > td,
.table-condensed > tbody > tr > td,
.table-condensed > tfoot > tr > td {
  padding: 5px;
}
.table-bordered {
  border: 1px solid #ddd;
}
.table-bordered > thead > tr > th,
.table-bordered > tbody > tr > th,
.table-bordered > tfoot > tr > th,
.table-bordered > thead > tr > td,
.table-bordered > tbody > tr > td,
.table-bordered > tfoot > tr > td {
  border: 1px solid #ddd;
}
.table-bordered > thead > tr > th,
.table-bordered > thead > tr > td {
  border-bottom-width: 2px;
}
.table-striped > tbody > tr:nth-of-type(odd) {
  background-color: #f9f9f9;
}
.table-hover > tbody > tr:hover {
  background-color: #f5f5f5;
}
table col[class*="col-"] {
  position: static;
  float: none;
  display: table-column;
}
table td[class*="col-"],
table th[class*="col-"] {
  position: static;
  float: none;
  display: table-cell;
}
.table > thead > tr > td.active,
.table > tbody > tr > td.active,
.table > tfoot > tr > td.active,
.table > thead > tr > th.active,
.table > tbody > tr > th.active,
.table > tfoot > tr > th.active,
.table > thead > tr.active > td,
.table > tbody > tr.active > td,
.table > tfoot > tr.active > td,
.table > thead > tr.active > th,
.table > tbody > tr.active > th,
.table > tfoot > tr.active > th {
  background-color: #f5f5f5;
}
.table-hover > tbody > tr > td.active:hover,
.table-hover > tbody > tr > th.active:hover,
.table-hover > tbody > tr.active:hover > td,
.table-hover > tbody > tr:hover > .active,
.table-hover > tbody > tr.active:hover > th {
  background-color: #e8e8e8;
}
.table > thead > tr > td.success,
.table > tbody > tr > td.success,
.table > tfoot > tr > td.success,
.table > thead > tr > th.success,
.table > tbody > tr > th.success,
.table > tfoot > tr > th.success,
.table > thead > tr.success > td,
.table > tbody > tr.success > td,
.table > tfoot > tr.success > td,
.table > thead > tr.success > th,
.table > tbody > tr.success > th,
.table > tfoot > tr.success > th {
  background-color: #dff0d8;
}
.table-hover > tbody > tr > td.success:hover,
.table-hover > tbody > tr > th.success:hover,
.table-hover > tbody > tr.success:hover > td,
.table-hover > tbody > tr:hover > .success,
.table-hover > tbody > tr.success:hover > th {
  background-color: #d0e9c6;
}
.table > thead > tr > td.info,
.table > tbody > tr > td.info,
.table > tfoot > tr > td.info,
.table > thead > tr > th.info,
.table > tbody > tr > th.info,
.table > tfoot > tr > th.info,
.table > thead > tr.info > td,
.table > tbody > tr.info > td,
.table > tfoot > tr.info > td,
.table > thead > tr.info > th,
.table > tbody > tr.info > th,
.table > tfoot > tr.info > th {
  background-color: #d9edf7;
}
.table-hover > tbody > tr > td.info:hover,
.table-hover > tbody > tr > th.info:hover,
.table-hover > tbody > tr.info:hover > td,
.table-hover > tbody > tr:hover > .info,
.table-hover > tbody > tr.info:hover > th {
  background-color: #c4e3f3;
}
.table > thead > tr > td.warning,
.table > tbody > tr > td.warning,
.table > tfoot > tr > td.warning,
.table > thead > tr > th.warning,
.table > tbody > tr > th.warning,
.table > tfoot > tr > th.warning,
.table > thead > tr.warning > td,
.table > tbody > tr.warning > td,
.table > tfoot > tr.warning > td,
.table > thead > tr.warning > th,
.table > tbody > tr.warning > th,
.table > tfoot > tr.warning > th {
  background-color: #fcf8e3;
}
.table-hover > tbody > tr > td.warning:hover,
.table-hover > tbody > tr > th.warning:hover,
.table-hover > tbody > tr.warning:hover > td,
.table-hover > tbody > tr:hover > .warning,
.table-hover > tbody > tr.warning:hover > th {
  background-color: #faf2cc;
}
.table > thead > tr > td.danger,
.table > tbody > tr > td.danger,
.table > tfoot > tr > td.danger,
.table > thead > tr > th.danger,
.table > tbody > tr > th.danger,
.table > tfoot > tr > th.danger,
.table > thead > tr.danger > td,
.table > tbody > tr.danger > td,
.table > tfoot > tr.danger > td,
.table > thead > tr.danger > th,
.table > tbody > tr.danger > th,
.table > tfoot > tr.danger > th {
  background-color: #f2dede;
}
.table-hover > tbody > tr > td.danger:hover,
.table-hover > tbody > tr > th.danger:hover,
.table-hover > tbody > tr.danger:hover > td,
.table-hover > tbody > tr:hover > .danger,
.table-hover > tbody > tr.danger:hover > th {
  background-color: #ebcccc;
}
.table-responsive {
  overflow-x: auto;
  min-height: 0.01%;
}
@media screen and (max-width: 767px) {
  .table-responsive {
    width: 100%;
    margin-bottom: 13.5px;
    overflow-y: hidden;
    -ms-overflow-style: -ms-autohiding-scrollbar;
    border: 1px solid #ddd;
  }
  .table-responsive > .table {
    margin-bottom: 0;
  }
  .table-responsive > .table > thead > tr > th,
  .table-responsive > .table > tbody > tr > th,
  .table-responsive > .table > tfoot > tr > th,
  .table-responsive > .table > thead > tr > td,
  .table-responsive > .table > tbody > tr > td,
  .table-responsive > .table > tfoot > tr > td {
    white-space: nowrap;
  }
  .table-responsive > .table-bordered {
    border: 0;
  }
  .table-responsive > .table-bordered > thead > tr > th:first-child,
  .table-responsive > .table-bordered > tbody > tr > th:first-child,
  .table-responsive > .table-bordered > tfoot > tr > th:first-child,
  .table-responsive > .table-bordered > thead > tr > td:first-child,
  .table-responsive > .table-bordered > tbody > tr > td:first-child,
  .table-responsive > .table-bordered > tfoot > tr > td:first-child {
    border-left: 0;
  }
  .table-responsive > .table-bordered > thead > tr > th:last-child,
  .table-responsive > .table-bordered > tbody > tr > th:last-child,
  .table-responsive > .table-bordered > tfoot > tr > th:last-child,
  .table-responsive > .table-bordered > thead > tr > td:last-child,
  .table-responsive > .table-bordered > tbody > tr > td:last-child,
  .table-responsive > .table-bordered > tfoot > tr > td:last-child {
    border-right: 0;
  }
  .table-responsive > .table-bordered > tbody > tr:last-child > th,
  .table-responsive > .table-bordered > tfoot > tr:last-child > th,
  .table-responsive > .table-bordered > tbody > tr:last-child > td,
  .table-responsive > .table-bordered > tfoot > tr:last-child > td {
    border-bottom: 0;
  }
}
fieldset {
  padding: 0;
  margin: 0;
  border: 0;
  min-width: 0;
}
legend {
  display: block;
  width: 100%;
  padding: 0;
  margin-bottom: 18px;
  font-size: 19.5px;
  line-height: inherit;
  color: #333333;
  border: 0;
  border-bottom: 1px solid #e5e5e5;
}
label {
  display: inline-block;
  max-width: 100%;
  margin-bottom: 5px;
  font-weight: bold;
}
input[type="search"] {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
input[type="radio"],
input[type="checkbox"] {
  margin: 4px 0 0;
  margin-top: 1px \\9;
  line-height: normal;
}
input[type="file"] {
  display: block;
}
input[type="range"] {
  display: block;
  width: 100%;
}
select[multiple],
select[size] {
  height: auto;
}
input[type="file"]:focus,
input[type="radio"]:focus,
input[type="checkbox"]:focus {
  outline: 5px auto -webkit-focus-ring-color;
  outline-offset: -2px;
}
output {
  display: block;
  padding-top: 7px;
  font-size: 13px;
  line-height: 1.42857143;
  color: #555555;
}
.form-control {
  display: block;
  width: 100%;
  height: 32px;
  padding: 6px 12px;
  font-size: 13px;
  line-height: 1.42857143;
  color: #555555;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 2px;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  -webkit-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
  -o-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
  transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
}
.form-control:focus {
  border-color: #66afe9;
  outline: 0;
  -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, 0.6);
  box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, 0.6);
}
.form-control::-moz-placeholder {
  color: #999;
  opacity: 1;
}
.form-control:-ms-input-placeholder {
  color: #999;
}
.form-control::-webkit-input-placeholder {
  color: #999;
}
.form-control::-ms-expand {
  border: 0;
  background-color: transparent;
}
.form-control[disabled],
.form-control[readonly],
fieldset[disabled] .form-control {
  background-color: #eeeeee;
  opacity: 1;
}
.form-control[disabled],
fieldset[disabled] .form-control {
  cursor: not-allowed;
}
textarea.form-control {
  height: auto;
}
input[type="search"] {
  -webkit-appearance: none;
}
@media screen and (-webkit-min-device-pixel-ratio: 0) {
  input[type="date"].form-control,
  input[type="time"].form-control,
  input[type="datetime-local"].form-control,
  input[type="month"].form-control {
    line-height: 32px;
  }
  input[type="date"].input-sm,
  input[type="time"].input-sm,
  input[type="datetime-local"].input-sm,
  input[type="month"].input-sm,
  .input-group-sm input[type="date"],
  .input-group-sm input[type="time"],
  .input-group-sm input[type="datetime-local"],
  .input-group-sm input[type="month"] {
    line-height: 30px;
  }
  input[type="date"].input-lg,
  input[type="time"].input-lg,
  input[type="datetime-local"].input-lg,
  input[type="month"].input-lg,
  .input-group-lg input[type="date"],
  .input-group-lg input[type="time"],
  .input-group-lg input[type="datetime-local"],
  .input-group-lg input[type="month"] {
    line-height: 45px;
  }
}
.form-group {
  margin-bottom: 15px;
}
.radio,
.checkbox {
  position: relative;
  display: block;
  margin-top: 10px;
  margin-bottom: 10px;
}
.radio label,
.checkbox label {
  min-height: 18px;
  padding-left: 20px;
  margin-bottom: 0;
  font-weight: normal;
  cursor: pointer;
}
.radio input[type="radio"],
.radio-inline input[type="radio"],
.checkbox input[type="checkbox"],
.checkbox-inline input[type="checkbox"] {
  position: absolute;
  margin-left: -20px;
  margin-top: 4px \\9;
}
.radio + .radio,
.checkbox + .checkbox {
  margin-top: -5px;
}
.radio-inline,
.checkbox-inline {
  position: relative;
  display: inline-block;
  padding-left: 20px;
  margin-bottom: 0;
  vertical-align: middle;
  font-weight: normal;
  cursor: pointer;
}
.radio-inline + .radio-inline,
.checkbox-inline + .checkbox-inline {
  margin-top: 0;
  margin-left: 10px;
}
input[type="radio"][disabled],
input[type="checkbox"][disabled],
input[type="radio"].disabled,
input[type="checkbox"].disabled,
fieldset[disabled] input[type="radio"],
fieldset[disabled] input[type="checkbox"] {
  cursor: not-allowed;
}
.radio-inline.disabled,
.checkbox-inline.disabled,
fieldset[disabled] .radio-inline,
fieldset[disabled] .checkbox-inline {
  cursor: not-allowed;
}
.radio.disabled label,
.checkbox.disabled label,
fieldset[disabled] .radio label,
fieldset[disabled] .checkbox label {
  cursor: not-allowed;
}
.form-control-static {
  padding-top: 7px;
  padding-bottom: 7px;
  margin-bottom: 0;
  min-height: 31px;
}
.form-control-static.input-lg,
.form-control-static.input-sm {
  padding-left: 0;
  padding-right: 0;
}
.input-sm {
  height: 30px;
  padding: 5px 10px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 1px;
}
select.input-sm {
  height: 30px;
  line-height: 30px;
}
textarea.input-sm,
select[multiple].input-sm {
  height: auto;
}
.form-group-sm .form-control {
  height: 30px;
  padding: 5px 10px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 1px;
}
.form-group-sm select.form-control {
  height: 30px;
  line-height: 30px;
}
.form-group-sm textarea.form-control,
.form-group-sm select[multiple].form-control {
  height: auto;
}
.form-group-sm .form-control-static {
  height: 30px;
  min-height: 30px;
  padding: 6px 10px;
  font-size: 12px;
  line-height: 1.5;
}
.input-lg {
  height: 45px;
  padding: 10px 16px;
  font-size: 17px;
  line-height: 1.3333333;
  border-radius: 3px;
}
select.input-lg {
  height: 45px;
  line-height: 45px;
}
textarea.input-lg,
select[multiple].input-lg {
  height: auto;
}
.form-group-lg .form-control {
  height: 45px;
  padding: 10px 16px;
  font-size: 17px;
  line-height: 1.3333333;
  border-radius: 3px;
}
.form-group-lg select.form-control {
  height: 45px;
  line-height: 45px;
}
.form-group-lg textarea.form-control,
.form-group-lg select[multiple].form-control {
  height: auto;
}
.form-group-lg .form-control-static {
  height: 45px;
  min-height: 35px;
  padding: 11px 16px;
  font-size: 17px;
  line-height: 1.3333333;
}
.has-feedback {
  position: relative;
}
.has-feedback .form-control {
  padding-right: 40px;
}
.form-control-feedback {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  display: block;
  width: 32px;
  height: 32px;
  line-height: 32px;
  text-align: center;
  pointer-events: none;
}
.input-lg + .form-control-feedback,
.input-group-lg + .form-control-feedback,
.form-group-lg .form-control + .form-control-feedback {
  width: 45px;
  height: 45px;
  line-height: 45px;
}
.input-sm + .form-control-feedback,
.input-group-sm + .form-control-feedback,
.form-group-sm .form-control + .form-control-feedback {
  width: 30px;
  height: 30px;
  line-height: 30px;
}
.has-success .help-block,
.has-success .control-label,
.has-success .radio,
.has-success .checkbox,
.has-success .radio-inline,
.has-success .checkbox-inline,
.has-success.radio label,
.has-success.checkbox label,
.has-success.radio-inline label,
.has-success.checkbox-inline label {
  color: #3c763d;
}
.has-success .form-control {
  border-color: #3c763d;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
}
.has-success .form-control:focus {
  border-color: #2b542c;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #67b168;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #67b168;
}
.has-success .input-group-addon {
  color: #3c763d;
  border-color: #3c763d;
  background-color: #dff0d8;
}
.has-success .form-control-feedback {
  color: #3c763d;
}
.has-warning .help-block,
.has-warning .control-label,
.has-warning .radio,
.has-warning .checkbox,
.has-warning .radio-inline,
.has-warning .checkbox-inline,
.has-warning.radio label,
.has-warning.checkbox label,
.has-warning.radio-inline label,
.has-warning.checkbox-inline label {
  color: #8a6d3b;
}
.has-warning .form-control {
  border-color: #8a6d3b;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
}
.has-warning .form-control:focus {
  border-color: #66512c;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #c0a16b;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #c0a16b;
}
.has-warning .input-group-addon {
  color: #8a6d3b;
  border-color: #8a6d3b;
  background-color: #fcf8e3;
}
.has-warning .form-control-feedback {
  color: #8a6d3b;
}
.has-error .help-block,
.has-error .control-label,
.has-error .radio,
.has-error .checkbox,
.has-error .radio-inline,
.has-error .checkbox-inline,
.has-error.radio label,
.has-error.checkbox label,
.has-error.radio-inline label,
.has-error.checkbox-inline label {
  color: #a94442;
}
.has-error .form-control {
  border-color: #a94442;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
}
.has-error .form-control:focus {
  border-color: #843534;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #ce8483;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #ce8483;
}
.has-error .input-group-addon {
  color: #a94442;
  border-color: #a94442;
  background-color: #f2dede;
}
.has-error .form-control-feedback {
  color: #a94442;
}
.has-feedback label ~ .form-control-feedback {
  top: 23px;
}
.has-feedback label.sr-only ~ .form-control-feedback {
  top: 0;
}
.help-block {
  display: block;
  margin-top: 5px;
  margin-bottom: 10px;
  color: #404040;
}
@media (min-width: 768px) {
  .form-inline .form-group {
    display: inline-block;
    margin-bottom: 0;
    vertical-align: middle;
  }
  .form-inline .form-control {
    display: inline-block;
    width: auto;
    vertical-align: middle;
  }
  .form-inline .form-control-static {
    display: inline-block;
  }
  .form-inline .input-group {
    display: inline-table;
    vertical-align: middle;
  }
  .form-inline .input-group .input-group-addon,
  .form-inline .input-group .input-group-btn,
  .form-inline .input-group .form-control {
    width: auto;
  }
  .form-inline .input-group > .form-control {
    width: 100%;
  }
  .form-inline .control-label {
    margin-bottom: 0;
    vertical-align: middle;
  }
  .form-inline .radio,
  .form-inline .checkbox {
    display: inline-block;
    margin-top: 0;
    margin-bottom: 0;
    vertical-align: middle;
  }
  .form-inline .radio label,
  .form-inline .checkbox label {
    padding-left: 0;
  }
  .form-inline .radio input[type="radio"],
  .form-inline .checkbox input[type="checkbox"] {
    position: relative;
    margin-left: 0;
  }
  .form-inline .has-feedback .form-control-feedback {
    top: 0;
  }
}
.form-horizontal .radio,
.form-horizontal .checkbox,
.form-horizontal .radio-inline,
.form-horizontal .checkbox-inline {
  margin-top: 0;
  margin-bottom: 0;
  padding-top: 7px;
}
.form-horizontal .radio,
.form-horizontal .checkbox {
  min-height: 25px;
}
.form-horizontal .form-group {
  margin-left: 0px;
  margin-right: 0px;
}
@media (min-width: 768px) {
  .form-horizontal .control-label {
    text-align: right;
    margin-bottom: 0;
    padding-top: 7px;
  }
}
.form-horizontal .has-feedback .form-control-feedback {
  right: 0px;
}
@media (min-width: 768px) {
  .form-horizontal .form-group-lg .control-label {
    padding-top: 11px;
    font-size: 17px;
  }
}
@media (min-width: 768px) {
  .form-horizontal .form-group-sm .control-label {
    padding-top: 6px;
    font-size: 12px;
  }
}
.btn {
  display: inline-block;
  margin-bottom: 0;
  font-weight: normal;
  text-align: center;
  vertical-align: middle;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  border: 1px solid transparent;
  white-space: nowrap;
  padding: 6px 12px;
  font-size: 13px;
  line-height: 1.42857143;
  border-radius: 2px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.btn:focus,
.btn:active:focus,
.btn.active:focus,
.btn.focus,
.btn:active.focus,
.btn.active.focus {
  outline: 5px auto -webkit-focus-ring-color;
  outline-offset: -2px;
}
.btn:hover,
.btn:focus,
.btn.focus {
  color: #333;
  text-decoration: none;
}
.btn:active,
.btn.active {
  outline: 0;
  background-image: none;
  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
}
.btn.disabled,
.btn[disabled],
fieldset[disabled] .btn {
  cursor: not-allowed;
  opacity: 0.65;
  filter: alpha(opacity=65);
  -webkit-box-shadow: none;
  box-shadow: none;
}
a.btn.disabled,
fieldset[disabled] a.btn {
  pointer-events: none;
}
.btn-default {
  color: #333;
  background-color: #fff;
  border-color: #ccc;
}
.btn-default:focus,
.btn-default.focus {
  color: #333;
  background-color: #e6e6e6;
  border-color: #8c8c8c;
}
.btn-default:hover {
  color: #333;
  background-color: #e6e6e6;
  border-color: #adadad;
}
.btn-default:active,
.btn-default.active,
.open > .dropdown-toggle.btn-default {
  color: #333;
  background-color: #e6e6e6;
  border-color: #adadad;
}
.btn-default:active:hover,
.btn-default.active:hover,
.open > .dropdown-toggle.btn-default:hover,
.btn-default:active:focus,
.btn-default.active:focus,
.open > .dropdown-toggle.btn-default:focus,
.btn-default:active.focus,
.btn-default.active.focus,
.open > .dropdown-toggle.btn-default.focus {
  color: #333;
  background-color: #d4d4d4;
  border-color: #8c8c8c;
}
.btn-default:active,
.btn-default.active,
.open > .dropdown-toggle.btn-default {
  background-image: none;
}
.btn-default.disabled:hover,
.btn-default[disabled]:hover,
fieldset[disabled] .btn-default:hover,
.btn-default.disabled:focus,
.btn-default[disabled]:focus,
fieldset[disabled] .btn-default:focus,
.btn-default.disabled.focus,
.btn-default[disabled].focus,
fieldset[disabled] .btn-default.focus {
  background-color: #fff;
  border-color: #ccc;
}
.btn-default .badge {
  color: #fff;
  background-color: #333;
}
.btn-primary {
  color: #fff;
  background-color: #337ab7;
  border-color: #2e6da4;
}
.btn-primary:focus,
.btn-primary.focus {
  color: #fff;
  background-color: #286090;
  border-color: #122b40;
}
.btn-primary:hover {
  color: #fff;
  background-color: #286090;
  border-color: #204d74;
}
.btn-primary:active,
.btn-primary.active,
.open > .dropdown-toggle.btn-primary {
  color: #fff;
  background-color: #286090;
  border-color: #204d74;
}
.btn-primary:active:hover,
.btn-primary.active:hover,
.open > .dropdown-toggle.btn-primary:hover,
.btn-primary:active:focus,
.btn-primary.active:focus,
.open > .dropdown-toggle.btn-primary:focus,
.btn-primary:active.focus,
.btn-primary.active.focus,
.open > .dropdown-toggle.btn-primary.focus {
  color: #fff;
  background-color: #204d74;
  border-color: #122b40;
}
.btn-primary:active,
.btn-primary.active,
.open > .dropdown-toggle.btn-primary {
  background-image: none;
}
.btn-primary.disabled:hover,
.btn-primary[disabled]:hover,
fieldset[disabled] .btn-primary:hover,
.btn-primary.disabled:focus,
.btn-primary[disabled]:focus,
fieldset[disabled] .btn-primary:focus,
.btn-primary.disabled.focus,
.btn-primary[disabled].focus,
fieldset[disabled] .btn-primary.focus {
  background-color: #337ab7;
  border-color: #2e6da4;
}
.btn-primary .badge {
  color: #337ab7;
  background-color: #fff;
}
.btn-success {
  color: #fff;
  background-color: #5cb85c;
  border-color: #4cae4c;
}
.btn-success:focus,
.btn-success.focus {
  color: #fff;
  background-color: #449d44;
  border-color: #255625;
}
.btn-success:hover {
  color: #fff;
  background-color: #449d44;
  border-color: #398439;
}
.btn-success:active,
.btn-success.active,
.open > .dropdown-toggle.btn-success {
  color: #fff;
  background-color: #449d44;
  border-color: #398439;
}
.btn-success:active:hover,
.btn-success.active:hover,
.open > .dropdown-toggle.btn-success:hover,
.btn-success:active:focus,
.btn-success.active:focus,
.open > .dropdown-toggle.btn-success:focus,
.btn-success:active.focus,
.btn-success.active.focus,
.open > .dropdown-toggle.btn-success.focus {
  color: #fff;
  background-color: #398439;
  border-color: #255625;
}
.btn-success:active,
.btn-success.active,
.open > .dropdown-toggle.btn-success {
  background-image: none;
}
.btn-success.disabled:hover,
.btn-success[disabled]:hover,
fieldset[disabled] .btn-success:hover,
.btn-success.disabled:focus,
.btn-success[disabled]:focus,
fieldset[disabled] .btn-success:focus,
.btn-success.disabled.focus,
.btn-success[disabled].focus,
fieldset[disabled] .btn-success.focus {
  background-color: #5cb85c;
  border-color: #4cae4c;
}
.btn-success .badge {
  color: #5cb85c;
  background-color: #fff;
}
.btn-info {
  color: #fff;
  background-color: #5bc0de;
  border-color: #46b8da;
}
.btn-info:focus,
.btn-info.focus {
  color: #fff;
  background-color: #31b0d5;
  border-color: #1b6d85;
}
.btn-info:hover {
  color: #fff;
  background-color: #31b0d5;
  border-color: #269abc;
}
.btn-info:active,
.btn-info.active,
.open > .dropdown-toggle.btn-info {
  color: #fff;
  background-color: #31b0d5;
  border-color: #269abc;
}
.btn-info:active:hover,
.btn-info.active:hover,
.open > .dropdown-toggle.btn-info:hover,
.btn-info:active:focus,
.btn-info.active:focus,
.open > .dropdown-toggle.btn-info:focus,
.btn-info:active.focus,
.btn-info.active.focus,
.open > .dropdown-toggle.btn-info.focus {
  color: #fff;
  background-color: #269abc;
  border-color: #1b6d85;
}
.btn-info:active,
.btn-info.active,
.open > .dropdown-toggle.btn-info {
  background-image: none;
}
.btn-info.disabled:hover,
.btn-info[disabled]:hover,
fieldset[disabled] .btn-info:hover,
.btn-info.disabled:focus,
.btn-info[disabled]:focus,
fieldset[disabled] .btn-info:focus,
.btn-info.disabled.focus,
.btn-info[disabled].focus,
fieldset[disabled] .btn-info.focus {
  background-color: #5bc0de;
  border-color: #46b8da;
}
.btn-info .badge {
  color: #5bc0de;
  background-color: #fff;
}
.btn-warning {
  color: #fff;
  background-color: #f0ad4e;
  border-color: #eea236;
}
.btn-warning:focus,
.btn-warning.focus {
  color: #fff;
  background-color: #ec971f;
  border-color: #985f0d;
}
.btn-warning:hover {
  color: #fff;
  background-color: #ec971f;
  border-color: #d58512;
}
.btn-warning:active,
.btn-warning.active,
.open > .dropdown-toggle.btn-warning {
  color: #fff;
  background-color: #ec971f;
  border-color: #d58512;
}
.btn-warning:active:hover,
.btn-warning.active:hover,
.open > .dropdown-toggle.btn-warning:hover,
.btn-warning:active:focus,
.btn-warning.active:focus,
.open > .dropdown-toggle.btn-warning:focus,
.btn-warning:active.focus,
.btn-warning.active.focus,
.open > .dropdown-toggle.btn-warning.focus {
  color: #fff;
  background-color: #d58512;
  border-color: #985f0d;
}
.btn-warning:active,
.btn-warning.active,
.open > .dropdown-toggle.btn-warning {
  background-image: none;
}
.btn-warning.disabled:hover,
.btn-warning[disabled]:hover,
fieldset[disabled] .btn-warning:hover,
.btn-warning.disabled:focus,
.btn-warning[disabled]:focus,
fieldset[disabled] .btn-warning:focus,
.btn-warning.disabled.focus,
.btn-warning[disabled].focus,
fieldset[disabled] .btn-warning.focus {
  background-color: #f0ad4e;
  border-color: #eea236;
}
.btn-warning .badge {
  color: #f0ad4e;
  background-color: #fff;
}
.btn-danger {
  color: #fff;
  background-color: #d9534f;
  border-color: #d43f3a;
}
.btn-danger:focus,
.btn-danger.focus {
  color: #fff;
  background-color: #c9302c;
  border-color: #761c19;
}
.btn-danger:hover {
  color: #fff;
  background-color: #c9302c;
  border-color: #ac2925;
}
.btn-danger:active,
.btn-danger.active,
.open > .dropdown-toggle.btn-danger {
  color: #fff;
  background-color: #c9302c;
  border-color: #ac2925;
}
.btn-danger:active:hover,
.btn-danger.active:hover,
.open > .dropdown-toggle.btn-danger:hover,
.btn-danger:active:focus,
.btn-danger.active:focus,
.open > .dropdown-toggle.btn-danger:focus,
.btn-danger:active.focus,
.btn-danger.active.focus,
.open > .dropdown-toggle.btn-danger.focus {
  color: #fff;
  background-color: #ac2925;
  border-color: #761c19;
}
.btn-danger:active,
.btn-danger.active,
.open > .dropdown-toggle.btn-danger {
  background-image: none;
}
.btn-danger.disabled:hover,
.btn-danger[disabled]:hover,
fieldset[disabled] .btn-danger:hover,
.btn-danger.disabled:focus,
.btn-danger[disabled]:focus,
fieldset[disabled] .btn-danger:focus,
.btn-danger.disabled.focus,
.btn-danger[disabled].focus,
fieldset[disabled] .btn-danger.focus {
  background-color: #d9534f;
  border-color: #d43f3a;
}
.btn-danger .badge {
  color: #d9534f;
  background-color: #fff;
}
.btn-link {
  color: #337ab7;
  font-weight: normal;
  border-radius: 0;
}
.btn-link,
.btn-link:active,
.btn-link.active,
.btn-link[disabled],
fieldset[disabled] .btn-link {
  background-color: transparent;
  -webkit-box-shadow: none;
  box-shadow: none;
}
.btn-link,
.btn-link:hover,
.btn-link:focus,
.btn-link:active {
  border-color: transparent;
}
.btn-link:hover,
.btn-link:focus {
  color: #23527c;
  text-decoration: underline;
  background-color: transparent;
}
.btn-link[disabled]:hover,
fieldset[disabled] .btn-link:hover,
.btn-link[disabled]:focus,
fieldset[disabled] .btn-link:focus {
  color: #777777;
  text-decoration: none;
}
.btn-lg,
.btn-group-lg > .btn {
  padding: 10px 16px;
  font-size: 17px;
  line-height: 1.3333333;
  border-radius: 3px;
}
.btn-sm,
.btn-group-sm > .btn {
  padding: 5px 10px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 1px;
}
.btn-xs,
.btn-group-xs > .btn {
  padding: 1px 5px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 1px;
}
.btn-block {
  display: block;
  width: 100%;
}
.btn-block + .btn-block {
  margin-top: 5px;
}
input[type="submit"].btn-block,
input[type="reset"].btn-block,
input[type="button"].btn-block {
  width: 100%;
}
.fade {
  opacity: 0;
  -webkit-transition: opacity 0.15s linear;
  -o-transition: opacity 0.15s linear;
  transition: opacity 0.15s linear;
}
.fade.in {
  opacity: 1;
}
.collapse {
  display: none;
}
.collapse.in {
  display: block;
}
tr.collapse.in {
  display: table-row;
}
tbody.collapse.in {
  display: table-row-group;
}
.collapsing {
  position: relative;
  height: 0;
  overflow: hidden;
  -webkit-transition-property: height, visibility;
  transition-property: height, visibility;
  -webkit-transition-duration: 0.35s;
  transition-duration: 0.35s;
  -webkit-transition-timing-function: ease;
  transition-timing-function: ease;
}
.caret {
  display: inline-block;
  width: 0;
  height: 0;
  margin-left: 2px;
  vertical-align: middle;
  border-top: 4px dashed;
  border-top: 4px solid \\9;
  border-right: 4px solid transparent;
  border-left: 4px solid transparent;
}
.dropup,
.dropdown {
  position: relative;
}
.dropdown-toggle:focus {
  outline: 0;
}
.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  display: none;
  float: left;
  min-width: 160px;
  padding: 5px 0;
  margin: 2px 0 0;
  list-style: none;
  font-size: 13px;
  text-align: left;
  background-color: #fff;
  border: 1px solid #ccc;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 2px;
  -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
  background-clip: padding-box;
}
.dropdown-menu.pull-right {
  right: 0;
  left: auto;
}
.dropdown-menu .divider {
  height: 1px;
  margin: 8px 0;
  overflow: hidden;
  background-color: #e5e5e5;
}
.dropdown-menu > li > a {
  display: block;
  padding: 3px 20px;
  clear: both;
  font-weight: normal;
  line-height: 1.42857143;
  color: #333333;
  white-space: nowrap;
}
.dropdown-menu > li > a:hover,
.dropdown-menu > li > a:focus {
  text-decoration: none;
  color: #262626;
  background-color: #f5f5f5;
}
.dropdown-menu > .active > a,
.dropdown-menu > .active > a:hover,
.dropdown-menu > .active > a:focus {
  color: #fff;
  text-decoration: none;
  outline: 0;
  background-color: #337ab7;
}
.dropdown-menu > .disabled > a,
.dropdown-menu > .disabled > a:hover,
.dropdown-menu > .disabled > a:focus {
  color: #777777;
}
.dropdown-menu > .disabled > a:hover,
.dropdown-menu > .disabled > a:focus {
  text-decoration: none;
  background-color: transparent;
  background-image: none;
  filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);
  cursor: not-allowed;
}
.open > .dropdown-menu {
  display: block;
}
.open > a {
  outline: 0;
}
.dropdown-menu-right {
  left: auto;
  right: 0;
}
.dropdown-menu-left {
  left: 0;
  right: auto;
}
.dropdown-header {
  display: block;
  padding: 3px 20px;
  font-size: 12px;
  line-height: 1.42857143;
  color: #777777;
  white-space: nowrap;
}
.dropdown-backdrop {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  z-index: 990;
}
.pull-right > .dropdown-menu {
  right: 0;
  left: auto;
}
.dropup .caret,
.navbar-fixed-bottom .dropdown .caret {
  border-top: 0;
  border-bottom: 4px dashed;
  border-bottom: 4px solid \\9;
  content: "";
}
.dropup .dropdown-menu,
.navbar-fixed-bottom .dropdown .dropdown-menu {
  top: auto;
  bottom: 100%;
  margin-bottom: 2px;
}
@media (min-width: 541px) {
  .navbar-right .dropdown-menu {
    left: auto;
    right: 0;
  }
  .navbar-right .dropdown-menu-left {
    left: 0;
    right: auto;
  }
}
.btn-group,
.btn-group-vertical {
  position: relative;
  display: inline-block;
  vertical-align: middle;
}
.btn-group > .btn,
.btn-group-vertical > .btn {
  position: relative;
  float: left;
}
.btn-group > .btn:hover,
.btn-group-vertical > .btn:hover,
.btn-group > .btn:focus,
.btn-group-vertical > .btn:focus,
.btn-group > .btn:active,
.btn-group-vertical > .btn:active,
.btn-group > .btn.active,
.btn-group-vertical > .btn.active {
  z-index: 2;
}
.btn-group .btn + .btn,
.btn-group .btn + .btn-group,
.btn-group .btn-group + .btn,
.btn-group .btn-group + .btn-group {
  margin-left: -1px;
}
.btn-toolbar {
  margin-left: -5px;
}
.btn-toolbar .btn,
.btn-toolbar .btn-group,
.btn-toolbar .input-group {
  float: left;
}
.btn-toolbar > .btn,
.btn-toolbar > .btn-group,
.btn-toolbar > .input-group {
  margin-left: 5px;
}
.btn-group > .btn:not(:first-child):not(:last-child):not(.dropdown-toggle) {
  border-radius: 0;
}
.btn-group > .btn:first-child {
  margin-left: 0;
}
.btn-group > .btn:first-child:not(:last-child):not(.dropdown-toggle) {
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
}
.btn-group > .btn:last-child:not(:first-child),
.btn-group > .dropdown-toggle:not(:first-child) {
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
}
.btn-group > .btn-group {
  float: left;
}
.btn-group > .btn-group:not(:first-child):not(:last-child) > .btn {
  border-radius: 0;
}
.btn-group > .btn-group:first-child:not(:last-child) > .btn:last-child,
.btn-group > .btn-group:first-child:not(:last-child) > .dropdown-toggle {
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
}
.btn-group > .btn-group:last-child:not(:first-child) > .btn:first-child {
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
}
.btn-group .dropdown-toggle:active,
.btn-group.open .dropdown-toggle {
  outline: 0;
}
.btn-group > .btn + .dropdown-toggle {
  padding-left: 8px;
  padding-right: 8px;
}
.btn-group > .btn-lg + .dropdown-toggle {
  padding-left: 12px;
  padding-right: 12px;
}
.btn-group.open .dropdown-toggle {
  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
}
.btn-group.open .dropdown-toggle.btn-link {
  -webkit-box-shadow: none;
  box-shadow: none;
}
.btn .caret {
  margin-left: 0;
}
.btn-lg .caret {
  border-width: 5px 5px 0;
  border-bottom-width: 0;
}
.dropup .btn-lg .caret {
  border-width: 0 5px 5px;
}
.btn-group-vertical > .btn,
.btn-group-vertical > .btn-group,
.btn-group-vertical > .btn-group > .btn {
  display: block;
  float: none;
  width: 100%;
  max-width: 100%;
}
.btn-group-vertical > .btn-group > .btn {
  float: none;
}
.btn-group-vertical > .btn + .btn,
.btn-group-vertical > .btn + .btn-group,
.btn-group-vertical > .btn-group + .btn,
.btn-group-vertical > .btn-group + .btn-group {
  margin-top: -1px;
  margin-left: 0;
}
.btn-group-vertical > .btn:not(:first-child):not(:last-child) {
  border-radius: 0;
}
.btn-group-vertical > .btn:first-child:not(:last-child) {
  border-top-right-radius: 2px;
  border-top-left-radius: 2px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.btn-group-vertical > .btn:last-child:not(:first-child) {
  border-top-right-radius: 0;
  border-top-left-radius: 0;
  border-bottom-right-radius: 2px;
  border-bottom-left-radius: 2px;
}
.btn-group-vertical > .btn-group:not(:first-child):not(:last-child) > .btn {
  border-radius: 0;
}
.btn-group-vertical > .btn-group:first-child:not(:last-child) > .btn:last-child,
.btn-group-vertical > .btn-group:first-child:not(:last-child) > .dropdown-toggle {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.btn-group-vertical > .btn-group:last-child:not(:first-child) > .btn:first-child {
  border-top-right-radius: 0;
  border-top-left-radius: 0;
}
.btn-group-justified {
  display: table;
  width: 100%;
  table-layout: fixed;
  border-collapse: separate;
}
.btn-group-justified > .btn,
.btn-group-justified > .btn-group {
  float: none;
  display: table-cell;
  width: 1%;
}
.btn-group-justified > .btn-group .btn {
  width: 100%;
}
.btn-group-justified > .btn-group .dropdown-menu {
  left: auto;
}
[data-toggle="buttons"] > .btn input[type="radio"],
[data-toggle="buttons"] > .btn-group > .btn input[type="radio"],
[data-toggle="buttons"] > .btn input[type="checkbox"],
[data-toggle="buttons"] > .btn-group > .btn input[type="checkbox"] {
  position: absolute;
  clip: rect(0, 0, 0, 0);
  pointer-events: none;
}
.input-group {
  position: relative;
  display: table;
  border-collapse: separate;
}
.input-group[class*="col-"] {
  float: none;
  padding-left: 0;
  padding-right: 0;
}
.input-group .form-control {
  position: relative;
  z-index: 2;
  float: left;
  width: 100%;
  margin-bottom: 0;
}
.input-group .form-control:focus {
  z-index: 3;
}
.input-group-lg > .form-control,
.input-group-lg > .input-group-addon,
.input-group-lg > .input-group-btn > .btn {
  height: 45px;
  padding: 10px 16px;
  font-size: 17px;
  line-height: 1.3333333;
  border-radius: 3px;
}
select.input-group-lg > .form-control,
select.input-group-lg > .input-group-addon,
select.input-group-lg > .input-group-btn > .btn {
  height: 45px;
  line-height: 45px;
}
textarea.input-group-lg > .form-control,
textarea.input-group-lg > .input-group-addon,
textarea.input-group-lg > .input-group-btn > .btn,
select[multiple].input-group-lg > .form-control,
select[multiple].input-group-lg > .input-group-addon,
select[multiple].input-group-lg > .input-group-btn > .btn {
  height: auto;
}
.input-group-sm > .form-control,
.input-group-sm > .input-group-addon,
.input-group-sm > .input-group-btn > .btn {
  height: 30px;
  padding: 5px 10px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 1px;
}
select.input-group-sm > .form-control,
select.input-group-sm > .input-group-addon,
select.input-group-sm > .input-group-btn > .btn {
  height: 30px;
  line-height: 30px;
}
textarea.input-group-sm > .form-control,
textarea.input-group-sm > .input-group-addon,
textarea.input-group-sm > .input-group-btn > .btn,
select[multiple].input-group-sm > .form-control,
select[multiple].input-group-sm > .input-group-addon,
select[multiple].input-group-sm > .input-group-btn > .btn {
  height: auto;
}
.input-group-addon,
.input-group-btn,
.input-group .form-control {
  display: table-cell;
}
.input-group-addon:not(:first-child):not(:last-child),
.input-group-btn:not(:first-child):not(:last-child),
.input-group .form-control:not(:first-child):not(:last-child) {
  border-radius: 0;
}
.input-group-addon,
.input-group-btn {
  width: 1%;
  white-space: nowrap;
  vertical-align: middle;
}
.input-group-addon {
  padding: 6px 12px;
  font-size: 13px;
  font-weight: normal;
  line-height: 1;
  color: #555555;
  text-align: center;
  background-color: #eeeeee;
  border: 1px solid #ccc;
  border-radius: 2px;
}
.input-group-addon.input-sm {
  padding: 5px 10px;
  font-size: 12px;
  border-radius: 1px;
}
.input-group-addon.input-lg {
  padding: 10px 16px;
  font-size: 17px;
  border-radius: 3px;
}
.input-group-addon input[type="radio"],
.input-group-addon input[type="checkbox"] {
  margin-top: 0;
}
.input-group .form-control:first-child,
.input-group-addon:first-child,
.input-group-btn:first-child > .btn,
.input-group-btn:first-child > .btn-group > .btn,
.input-group-btn:first-child > .dropdown-toggle,
.input-group-btn:last-child > .btn:not(:last-child):not(.dropdown-toggle),
.input-group-btn:last-child > .btn-group:not(:last-child) > .btn {
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
}
.input-group-addon:first-child {
  border-right: 0;
}
.input-group .form-control:last-child,
.input-group-addon:last-child,
.input-group-btn:last-child > .btn,
.input-group-btn:last-child > .btn-group > .btn,
.input-group-btn:last-child > .dropdown-toggle,
.input-group-btn:first-child > .btn:not(:first-child),
.input-group-btn:first-child > .btn-group:not(:first-child) > .btn {
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
}
.input-group-addon:last-child {
  border-left: 0;
}
.input-group-btn {
  position: relative;
  font-size: 0;
  white-space: nowrap;
}
.input-group-btn > .btn {
  position: relative;
}
.input-group-btn > .btn + .btn {
  margin-left: -1px;
}
.input-group-btn > .btn:hover,
.input-group-btn > .btn:focus,
.input-group-btn > .btn:active {
  z-index: 2;
}
.input-group-btn:first-child > .btn,
.input-group-btn:first-child > .btn-group {
  margin-right: -1px;
}
.input-group-btn:last-child > .btn,
.input-group-btn:last-child > .btn-group {
  z-index: 2;
  margin-left: -1px;
}
.nav {
  margin-bottom: 0;
  padding-left: 0;
  list-style: none;
}
.nav > li {
  position: relative;
  display: block;
}
.nav > li > a {
  position: relative;
  display: block;
  padding: 10px 15px;
}
.nav > li > a:hover,
.nav > li > a:focus {
  text-decoration: none;
  background-color: #eeeeee;
}
.nav > li.disabled > a {
  color: #777777;
}
.nav > li.disabled > a:hover,
.nav > li.disabled > a:focus {
  color: #777777;
  text-decoration: none;
  background-color: transparent;
  cursor: not-allowed;
}
.nav .open > a,
.nav .open > a:hover,
.nav .open > a:focus {
  background-color: #eeeeee;
  border-color: #337ab7;
}
.nav .nav-divider {
  height: 1px;
  margin: 8px 0;
  overflow: hidden;
  background-color: #e5e5e5;
}
.nav > li > a > img {
  max-width: none;
}
.nav-tabs {
  border-bottom: 1px solid #ddd;
}
.nav-tabs > li {
  float: left;
  margin-bottom: -1px;
}
.nav-tabs > li > a {
  margin-right: 2px;
  line-height: 1.42857143;
  border: 1px solid transparent;
  border-radius: 2px 2px 0 0;
}
.nav-tabs > li > a:hover {
  border-color: #eeeeee #eeeeee #ddd;
}
.nav-tabs > li.active > a,
.nav-tabs > li.active > a:hover,
.nav-tabs > li.active > a:focus {
  color: #555555;
  background-color: #fff;
  border: 1px solid #ddd;
  border-bottom-color: transparent;
  cursor: default;
}
.nav-tabs.nav-justified {
  width: 100%;
  border-bottom: 0;
}
.nav-tabs.nav-justified > li {
  float: none;
}
.nav-tabs.nav-justified > li > a {
  text-align: center;
  margin-bottom: 5px;
}
.nav-tabs.nav-justified > .dropdown .dropdown-menu {
  top: auto;
  left: auto;
}
@media (min-width: 768px) {
  .nav-tabs.nav-justified > li {
    display: table-cell;
    width: 1%;
  }
  .nav-tabs.nav-justified > li > a {
    margin-bottom: 0;
  }
}
.nav-tabs.nav-justified > li > a {
  margin-right: 0;
  border-radius: 2px;
}
.nav-tabs.nav-justified > .active > a,
.nav-tabs.nav-justified > .active > a:hover,
.nav-tabs.nav-justified > .active > a:focus {
  border: 1px solid #ddd;
}
@media (min-width: 768px) {
  .nav-tabs.nav-justified > li > a {
    border-bottom: 1px solid #ddd;
    border-radius: 2px 2px 0 0;
  }
  .nav-tabs.nav-justified > .active > a,
  .nav-tabs.nav-justified > .active > a:hover,
  .nav-tabs.nav-justified > .active > a:focus {
    border-bottom-color: #fff;
  }
}
.nav-pills > li {
  float: left;
}
.nav-pills > li > a {
  border-radius: 2px;
}
.nav-pills > li + li {
  margin-left: 2px;
}
.nav-pills > li.active > a,
.nav-pills > li.active > a:hover,
.nav-pills > li.active > a:focus {
  color: #fff;
  background-color: #337ab7;
}
.nav-stacked > li {
  float: none;
}
.nav-stacked > li + li {
  margin-top: 2px;
  margin-left: 0;
}
.nav-justified {
  width: 100%;
}
.nav-justified > li {
  float: none;
}
.nav-justified > li > a {
  text-align: center;
  margin-bottom: 5px;
}
.nav-justified > .dropdown .dropdown-menu {
  top: auto;
  left: auto;
}
@media (min-width: 768px) {
  .nav-justified > li {
    display: table-cell;
    width: 1%;
  }
  .nav-justified > li > a {
    margin-bottom: 0;
  }
}
.nav-tabs-justified {
  border-bottom: 0;
}
.nav-tabs-justified > li > a {
  margin-right: 0;
  border-radius: 2px;
}
.nav-tabs-justified > .active > a,
.nav-tabs-justified > .active > a:hover,
.nav-tabs-justified > .active > a:focus {
  border: 1px solid #ddd;
}
@media (min-width: 768px) {
  .nav-tabs-justified > li > a {
    border-bottom: 1px solid #ddd;
    border-radius: 2px 2px 0 0;
  }
  .nav-tabs-justified > .active > a,
  .nav-tabs-justified > .active > a:hover,
  .nav-tabs-justified > .active > a:focus {
    border-bottom-color: #fff;
  }
}
.tab-content > .tab-pane {
  display: none;
}
.tab-content > .active {
  display: block;
}
.nav-tabs .dropdown-menu {
  margin-top: -1px;
  border-top-right-radius: 0;
  border-top-left-radius: 0;
}
.navbar {
  position: relative;
  min-height: 30px;
  margin-bottom: 18px;
  border: 1px solid transparent;
}
@media (min-width: 541px) {
  .navbar {
    border-radius: 2px;
  }
}
@media (min-width: 541px) {
  .navbar-header {
    float: left;
  }
}
.navbar-collapse {
  overflow-x: visible;
  padding-right: 0px;
  padding-left: 0px;
  border-top: 1px solid transparent;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);
  -webkit-overflow-scrolling: touch;
}
.navbar-collapse.in {
  overflow-y: auto;
}
@media (min-width: 541px) {
  .navbar-collapse {
    width: auto;
    border-top: 0;
    box-shadow: none;
  }
  .navbar-collapse.collapse {
    display: block !important;
    height: auto !important;
    padding-bottom: 0;
    overflow: visible !important;
  }
  .navbar-collapse.in {
    overflow-y: visible;
  }
  .navbar-fixed-top .navbar-collapse,
  .navbar-static-top .navbar-collapse,
  .navbar-fixed-bottom .navbar-collapse {
    padding-left: 0;
    padding-right: 0;
  }
}
.navbar-fixed-top .navbar-collapse,
.navbar-fixed-bottom .navbar-collapse {
  max-height: 340px;
}
@media (max-device-width: 540px) and (orientation: landscape) {
  .navbar-fixed-top .navbar-collapse,
  .navbar-fixed-bottom .navbar-collapse {
    max-height: 200px;
  }
}
.container > .navbar-header,
.container-fluid > .navbar-header,
.container > .navbar-collapse,
.container-fluid > .navbar-collapse {
  margin-right: 0px;
  margin-left: 0px;
}
@media (min-width: 541px) {
  .container > .navbar-header,
  .container-fluid > .navbar-header,
  .container > .navbar-collapse,
  .container-fluid > .navbar-collapse {
    margin-right: 0;
    margin-left: 0;
  }
}
.navbar-static-top {
  z-index: 1000;
  border-width: 0 0 1px;
}
@media (min-width: 541px) {
  .navbar-static-top {
    border-radius: 0;
  }
}
.navbar-fixed-top,
.navbar-fixed-bottom {
  position: fixed;
  right: 0;
  left: 0;
  z-index: 1030;
}
@media (min-width: 541px) {
  .navbar-fixed-top,
  .navbar-fixed-bottom {
    border-radius: 0;
  }
}
.navbar-fixed-top {
  top: 0;
  border-width: 0 0 1px;
}
.navbar-fixed-bottom {
  bottom: 0;
  margin-bottom: 0;
  border-width: 1px 0 0;
}
.navbar-brand {
  float: left;
  padding: 6px 0px;
  font-size: 17px;
  line-height: 18px;
  height: 30px;
}
.navbar-brand:hover,
.navbar-brand:focus {
  text-decoration: none;
}
.navbar-brand > img {
  display: block;
}
@media (min-width: 541px) {
  .navbar > .container .navbar-brand,
  .navbar > .container-fluid .navbar-brand {
    margin-left: 0px;
  }
}
.navbar-toggle {
  position: relative;
  float: right;
  margin-right: 0px;
  padding: 9px 10px;
  margin-top: -2px;
  margin-bottom: -2px;
  background-color: transparent;
  background-image: none;
  border: 1px solid transparent;
  border-radius: 2px;
}
.navbar-toggle:focus {
  outline: 0;
}
.navbar-toggle .icon-bar {
  display: block;
  width: 22px;
  height: 2px;
  border-radius: 1px;
}
.navbar-toggle .icon-bar + .icon-bar {
  margin-top: 4px;
}
@media (min-width: 541px) {
  .navbar-toggle {
    display: none;
  }
}
.navbar-nav {
  margin: 3px 0px;
}
.navbar-nav > li > a {
  padding-top: 10px;
  padding-bottom: 10px;
  line-height: 18px;
}
@media (max-width: 540px) {
  .navbar-nav .open .dropdown-menu {
    position: static;
    float: none;
    width: auto;
    margin-top: 0;
    background-color: transparent;
    border: 0;
    box-shadow: none;
  }
  .navbar-nav .open .dropdown-menu > li > a,
  .navbar-nav .open .dropdown-menu .dropdown-header {
    padding: 5px 15px 5px 25px;
  }
  .navbar-nav .open .dropdown-menu > li > a {
    line-height: 18px;
  }
  .navbar-nav .open .dropdown-menu > li > a:hover,
  .navbar-nav .open .dropdown-menu > li > a:focus {
    background-image: none;
  }
}
@media (min-width: 541px) {
  .navbar-nav {
    float: left;
    margin: 0;
  }
  .navbar-nav > li {
    float: left;
  }
  .navbar-nav > li > a {
    padding-top: 6px;
    padding-bottom: 6px;
  }
}
.navbar-form {
  margin-left: 0px;
  margin-right: 0px;
  padding: 10px 0px;
  border-top: 1px solid transparent;
  border-bottom: 1px solid transparent;
  -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 1px 0 rgba(255, 255, 255, 0.1);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 1px 0 rgba(255, 255, 255, 0.1);
  margin-top: -1px;
  margin-bottom: -1px;
}
@media (min-width: 768px) {
  .navbar-form .form-group {
    display: inline-block;
    margin-bottom: 0;
    vertical-align: middle;
  }
  .navbar-form .form-control {
    display: inline-block;
    width: auto;
    vertical-align: middle;
  }
  .navbar-form .form-control-static {
    display: inline-block;
  }
  .navbar-form .input-group {
    display: inline-table;
    vertical-align: middle;
  }
  .navbar-form .input-group .input-group-addon,
  .navbar-form .input-group .input-group-btn,
  .navbar-form .input-group .form-control {
    width: auto;
  }
  .navbar-form .input-group > .form-control {
    width: 100%;
  }
  .navbar-form .control-label {
    margin-bottom: 0;
    vertical-align: middle;
  }
  .navbar-form .radio,
  .navbar-form .checkbox {
    display: inline-block;
    margin-top: 0;
    margin-bottom: 0;
    vertical-align: middle;
  }
  .navbar-form .radio label,
  .navbar-form .checkbox label {
    padding-left: 0;
  }
  .navbar-form .radio input[type="radio"],
  .navbar-form .checkbox input[type="checkbox"] {
    position: relative;
    margin-left: 0;
  }
  .navbar-form .has-feedback .form-control-feedback {
    top: 0;
  }
}
@media (max-width: 540px) {
  .navbar-form .form-group {
    margin-bottom: 5px;
  }
  .navbar-form .form-group:last-child {
    margin-bottom: 0;
  }
}
@media (min-width: 541px) {
  .navbar-form {
    width: auto;
    border: 0;
    margin-left: 0;
    margin-right: 0;
    padding-top: 0;
    padding-bottom: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
}
.navbar-nav > li > .dropdown-menu {
  margin-top: 0;
  border-top-right-radius: 0;
  border-top-left-radius: 0;
}
.navbar-fixed-bottom .navbar-nav > li > .dropdown-menu {
  margin-bottom: 0;
  border-top-right-radius: 2px;
  border-top-left-radius: 2px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.navbar-btn {
  margin-top: -1px;
  margin-bottom: -1px;
}
.navbar-btn.btn-sm {
  margin-top: 0px;
  margin-bottom: 0px;
}
.navbar-btn.btn-xs {
  margin-top: 4px;
  margin-bottom: 4px;
}
.navbar-text {
  margin-top: 6px;
  margin-bottom: 6px;
}
@media (min-width: 541px) {
  .navbar-text {
    float: left;
    margin-left: 0px;
    margin-right: 0px;
  }
}
@media (min-width: 541px) {
  .navbar-left {
    float: left !important;
    float: left;
  }
  .navbar-right {
    float: right !important;
    float: right;
    margin-right: 0px;
  }
  .navbar-right ~ .navbar-right {
    margin-right: 0;
  }
}
.navbar-default {
  background-color: #f8f8f8;
  border-color: #e7e7e7;
}
.navbar-default .navbar-brand {
  color: #777;
}
.navbar-default .navbar-brand:hover,
.navbar-default .navbar-brand:focus {
  color: #5e5e5e;
  background-color: transparent;
}
.navbar-default .navbar-text {
  color: #777;
}
.navbar-default .navbar-nav > li > a {
  color: #777;
}
.navbar-default .navbar-nav > li > a:hover,
.navbar-default .navbar-nav > li > a:focus {
  color: #333;
  background-color: transparent;
}
.navbar-default .navbar-nav > .active > a,
.navbar-default .navbar-nav > .active > a:hover,
.navbar-default .navbar-nav > .active > a:focus {
  color: #555;
  background-color: #e7e7e7;
}
.navbar-default .navbar-nav > .disabled > a,
.navbar-default .navbar-nav > .disabled > a:hover,
.navbar-default .navbar-nav > .disabled > a:focus {
  color: #ccc;
  background-color: transparent;
}
.navbar-default .navbar-toggle {
  border-color: #ddd;
}
.navbar-default .navbar-toggle:hover,
.navbar-default .navbar-toggle:focus {
  background-color: #ddd;
}
.navbar-default .navbar-toggle .icon-bar {
  background-color: #888;
}
.navbar-default .navbar-collapse,
.navbar-default .navbar-form {
  border-color: #e7e7e7;
}
.navbar-default .navbar-nav > .open > a,
.navbar-default .navbar-nav > .open > a:hover,
.navbar-default .navbar-nav > .open > a:focus {
  background-color: #e7e7e7;
  color: #555;
}
@media (max-width: 540px) {
  .navbar-default .navbar-nav .open .dropdown-menu > li > a {
    color: #777;
  }
  .navbar-default .navbar-nav .open .dropdown-menu > li > a:hover,
  .navbar-default .navbar-nav .open .dropdown-menu > li > a:focus {
    color: #333;
    background-color: transparent;
  }
  .navbar-default .navbar-nav .open .dropdown-menu > .active > a,
  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:hover,
  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:focus {
    color: #555;
    background-color: #e7e7e7;
  }
  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a,
  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:hover,
  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:focus {
    color: #ccc;
    background-color: transparent;
  }
}
.navbar-default .navbar-link {
  color: #777;
}
.navbar-default .navbar-link:hover {
  color: #333;
}
.navbar-default .btn-link {
  color: #777;
}
.navbar-default .btn-link:hover,
.navbar-default .btn-link:focus {
  color: #333;
}
.navbar-default .btn-link[disabled]:hover,
fieldset[disabled] .navbar-default .btn-link:hover,
.navbar-default .btn-link[disabled]:focus,
fieldset[disabled] .navbar-default .btn-link:focus {
  color: #ccc;
}
.navbar-inverse {
  background-color: #222;
  border-color: #080808;
}
.navbar-inverse .navbar-brand {
  color: #9d9d9d;
}
.navbar-inverse .navbar-brand:hover,
.navbar-inverse .navbar-brand:focus {
  color: #fff;
  background-color: transparent;
}
.navbar-inverse .navbar-text {
  color: #9d9d9d;
}
.navbar-inverse .navbar-nav > li > a {
  color: #9d9d9d;
}
.navbar-inverse .navbar-nav > li > a:hover,
.navbar-inverse .navbar-nav > li > a:focus {
  color: #fff;
  background-color: transparent;
}
.navbar-inverse .navbar-nav > .active > a,
.navbar-inverse .navbar-nav > .active > a:hover,
.navbar-inverse .navbar-nav > .active > a:focus {
  color: #fff;
  background-color: #080808;
}
.navbar-inverse .navbar-nav > .disabled > a,
.navbar-inverse .navbar-nav > .disabled > a:hover,
.navbar-inverse .navbar-nav > .disabled > a:focus {
  color: #444;
  background-color: transparent;
}
.navbar-inverse .navbar-toggle {
  border-color: #333;
}
.navbar-inverse .navbar-toggle:hover,
.navbar-inverse .navbar-toggle:focus {
  background-color: #333;
}
.navbar-inverse .navbar-toggle .icon-bar {
  background-color: #fff;
}
.navbar-inverse .navbar-collapse,
.navbar-inverse .navbar-form {
  border-color: #101010;
}
.navbar-inverse .navbar-nav > .open > a,
.navbar-inverse .navbar-nav > .open > a:hover,
.navbar-inverse .navbar-nav > .open > a:focus {
  background-color: #080808;
  color: #fff;
}
@media (max-width: 540px) {
  .navbar-inverse .navbar-nav .open .dropdown-menu > .dropdown-header {
    border-color: #080808;
  }
  .navbar-inverse .navbar-nav .open .dropdown-menu .divider {
    background-color: #080808;
  }
  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a {
    color: #9d9d9d;
  }
  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:hover,
  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:focus {
    color: #fff;
    background-color: transparent;
  }
  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a,
  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:hover,
  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:focus {
    color: #fff;
    background-color: #080808;
  }
  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a,
  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:hover,
  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:focus {
    color: #444;
    background-color: transparent;
  }
}
.navbar-inverse .navbar-link {
  color: #9d9d9d;
}
.navbar-inverse .navbar-link:hover {
  color: #fff;
}
.navbar-inverse .btn-link {
  color: #9d9d9d;
}
.navbar-inverse .btn-link:hover,
.navbar-inverse .btn-link:focus {
  color: #fff;
}
.navbar-inverse .btn-link[disabled]:hover,
fieldset[disabled] .navbar-inverse .btn-link:hover,
.navbar-inverse .btn-link[disabled]:focus,
fieldset[disabled] .navbar-inverse .btn-link:focus {
  color: #444;
}
.breadcrumb {
  padding: 8px 15px;
  margin-bottom: 18px;
  list-style: none;
  background-color: #f5f5f5;
  border-radius: 2px;
}
.breadcrumb > li {
  display: inline-block;
}
.breadcrumb > li + li:before {
  content: "/\\00a0";
  padding: 0 5px;
  color: #5e5e5e;
}
.breadcrumb > .active {
  color: #777777;
}
.pagination {
  display: inline-block;
  padding-left: 0;
  margin: 18px 0;
  border-radius: 2px;
}
.pagination > li {
  display: inline;
}
.pagination > li > a,
.pagination > li > span {
  position: relative;
  float: left;
  padding: 6px 12px;
  line-height: 1.42857143;
  text-decoration: none;
  color: #337ab7;
  background-color: #fff;
  border: 1px solid #ddd;
  margin-left: -1px;
}
.pagination > li:first-child > a,
.pagination > li:first-child > span {
  margin-left: 0;
  border-bottom-left-radius: 2px;
  border-top-left-radius: 2px;
}
.pagination > li:last-child > a,
.pagination > li:last-child > span {
  border-bottom-right-radius: 2px;
  border-top-right-radius: 2px;
}
.pagination > li > a:hover,
.pagination > li > span:hover,
.pagination > li > a:focus,
.pagination > li > span:focus {
  z-index: 2;
  color: #23527c;
  background-color: #eeeeee;
  border-color: #ddd;
}
.pagination > .active > a,
.pagination > .active > span,
.pagination > .active > a:hover,
.pagination > .active > span:hover,
.pagination > .active > a:focus,
.pagination > .active > span:focus {
  z-index: 3;
  color: #fff;
  background-color: #337ab7;
  border-color: #337ab7;
  cursor: default;
}
.pagination > .disabled > span,
.pagination > .disabled > span:hover,
.pagination > .disabled > span:focus,
.pagination > .disabled > a,
.pagination > .disabled > a:hover,
.pagination > .disabled > a:focus {
  color: #777777;
  background-color: #fff;
  border-color: #ddd;
  cursor: not-allowed;
}
.pagination-lg > li > a,
.pagination-lg > li > span {
  padding: 10px 16px;
  font-size: 17px;
  line-height: 1.3333333;
}
.pagination-lg > li:first-child > a,
.pagination-lg > li:first-child > span {
  border-bottom-left-radius: 3px;
  border-top-left-radius: 3px;
}
.pagination-lg > li:last-child > a,
.pagination-lg > li:last-child > span {
  border-bottom-right-radius: 3px;
  border-top-right-radius: 3px;
}
.pagination-sm > li > a,
.pagination-sm > li > span {
  padding: 5px 10px;
  font-size: 12px;
  line-height: 1.5;
}
.pagination-sm > li:first-child > a,
.pagination-sm > li:first-child > span {
  border-bottom-left-radius: 1px;
  border-top-left-radius: 1px;
}
.pagination-sm > li:last-child > a,
.pagination-sm > li:last-child > span {
  border-bottom-right-radius: 1px;
  border-top-right-radius: 1px;
}
.pager {
  padding-left: 0;
  margin: 18px 0;
  list-style: none;
  text-align: center;
}
.pager li {
  display: inline;
}
.pager li > a,
.pager li > span {
  display: inline-block;
  padding: 5px 14px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 15px;
}
.pager li > a:hover,
.pager li > a:focus {
  text-decoration: none;
  background-color: #eeeeee;
}
.pager .next > a,
.pager .next > span {
  float: right;
}
.pager .previous > a,
.pager .previous > span {
  float: left;
}
.pager .disabled > a,
.pager .disabled > a:hover,
.pager .disabled > a:focus,
.pager .disabled > span {
  color: #777777;
  background-color: #fff;
  cursor: not-allowed;
}
.label {
  display: inline;
  padding: .2em .6em .3em;
  font-size: 75%;
  font-weight: bold;
  line-height: 1;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: .25em;
}
a.label:hover,
a.label:focus {
  color: #fff;
  text-decoration: none;
  cursor: pointer;
}
.label:empty {
  display: none;
}
.btn .label {
  position: relative;
  top: -1px;
}
.label-default {
  background-color: #777777;
}
.label-default[href]:hover,
.label-default[href]:focus {
  background-color: #5e5e5e;
}
.label-primary {
  background-color: #337ab7;
}
.label-primary[href]:hover,
.label-primary[href]:focus {
  background-color: #286090;
}
.label-success {
  background-color: #5cb85c;
}
.label-success[href]:hover,
.label-success[href]:focus {
  background-color: #449d44;
}
.label-info {
  background-color: #5bc0de;
}
.label-info[href]:hover,
.label-info[href]:focus {
  background-color: #31b0d5;
}
.label-warning {
  background-color: #f0ad4e;
}
.label-warning[href]:hover,
.label-warning[href]:focus {
  background-color: #ec971f;
}
.label-danger {
  background-color: #d9534f;
}
.label-danger[href]:hover,
.label-danger[href]:focus {
  background-color: #c9302c;
}
.badge {
  display: inline-block;
  min-width: 10px;
  padding: 3px 7px;
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  line-height: 1;
  vertical-align: middle;
  white-space: nowrap;
  text-align: center;
  background-color: #777777;
  border-radius: 10px;
}
.badge:empty {
  display: none;
}
.btn .badge {
  position: relative;
  top: -1px;
}
.btn-xs .badge,
.btn-group-xs > .btn .badge {
  top: 0;
  padding: 1px 5px;
}
a.badge:hover,
a.badge:focus {
  color: #fff;
  text-decoration: none;
  cursor: pointer;
}
.list-group-item.active > .badge,
.nav-pills > .active > a > .badge {
  color: #337ab7;
  background-color: #fff;
}
.list-group-item > .badge {
  float: right;
}
.list-group-item > .badge + .badge {
  margin-right: 5px;
}
.nav-pills > li > a > .badge {
  margin-left: 3px;
}
.jumbotron {
  padding-top: 30px;
  padding-bottom: 30px;
  margin-bottom: 30px;
  color: inherit;
  background-color: #eeeeee;
}
.jumbotron h1,
.jumbotron .h1 {
  color: inherit;
}
.jumbotron p {
  margin-bottom: 15px;
  font-size: 20px;
  font-weight: 200;
}
.jumbotron > hr {
  border-top-color: #d5d5d5;
}
.container .jumbotron,
.container-fluid .jumbotron {
  border-radius: 3px;
  padding-left: 0px;
  padding-right: 0px;
}
.jumbotron .container {
  max-width: 100%;
}
@media screen and (min-width: 768px) {
  .jumbotron {
    padding-top: 48px;
    padding-bottom: 48px;
  }
  .container .jumbotron,
  .container-fluid .jumbotron {
    padding-left: 60px;
    padding-right: 60px;
  }
  .jumbotron h1,
  .jumbotron .h1 {
    font-size: 59px;
  }
}
.thumbnail {
  display: block;
  padding: 4px;
  margin-bottom: 18px;
  line-height: 1.42857143;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 2px;
  -webkit-transition: border 0.2s ease-in-out;
  -o-transition: border 0.2s ease-in-out;
  transition: border 0.2s ease-in-out;
}
.thumbnail > img,
.thumbnail a > img {
  margin-left: auto;
  margin-right: auto;
}
a.thumbnail:hover,
a.thumbnail:focus,
a.thumbnail.active {
  border-color: #337ab7;
}
.thumbnail .caption {
  padding: 9px;
  color: #000;
}
.alert {
  padding: 15px;
  margin-bottom: 18px;
  border: 1px solid transparent;
  border-radius: 2px;
}
.alert h4 {
  margin-top: 0;
  color: inherit;
}
.alert .alert-link {
  font-weight: bold;
}
.alert > p,
.alert > ul {
  margin-bottom: 0;
}
.alert > p + p {
  margin-top: 5px;
}
.alert-dismissable,
.alert-dismissible {
  padding-right: 35px;
}
.alert-dismissable .close,
.alert-dismissible .close {
  position: relative;
  top: -2px;
  right: -21px;
  color: inherit;
}
.alert-success {
  background-color: #dff0d8;
  border-color: #d6e9c6;
  color: #3c763d;
}
.alert-success hr {
  border-top-color: #c9e2b3;
}
.alert-success .alert-link {
  color: #2b542c;
}
.alert-info {
  background-color: #d9edf7;
  border-color: #bce8f1;
  color: #31708f;
}
.alert-info hr {
  border-top-color: #a6e1ec;
}
.alert-info .alert-link {
  color: #245269;
}
.alert-warning {
  background-color: #fcf8e3;
  border-color: #faebcc;
  color: #8a6d3b;
}
.alert-warning hr {
  border-top-color: #f7e1b5;
}
.alert-warning .alert-link {
  color: #66512c;
}
.alert-danger {
  background-color: #f2dede;
  border-color: #ebccd1;
  color: #a94442;
}
.alert-danger hr {
  border-top-color: #e4b9c0;
}
.alert-danger .alert-link {
  color: #843534;
}
@-webkit-keyframes progress-bar-stripes {
  from {
    background-position: 40px 0;
  }
  to {
    background-position: 0 0;
  }
}
@keyframes progress-bar-stripes {
  from {
    background-position: 40px 0;
  }
  to {
    background-position: 0 0;
  }
}
.progress {
  overflow: hidden;
  height: 18px;
  margin-bottom: 18px;
  background-color: #f5f5f5;
  border-radius: 2px;
  -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
}
.progress-bar {
  float: left;
  width: 0%;
  height: 100%;
  font-size: 12px;
  line-height: 18px;
  color: #fff;
  text-align: center;
  background-color: #337ab7;
  -webkit-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);
  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);
  -webkit-transition: width 0.6s ease;
  -o-transition: width 0.6s ease;
  transition: width 0.6s ease;
}
.progress-striped .progress-bar,
.progress-bar-striped {
  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-size: 40px 40px;
}
.progress.active .progress-bar,
.progress-bar.active {
  -webkit-animation: progress-bar-stripes 2s linear infinite;
  -o-animation: progress-bar-stripes 2s linear infinite;
  animation: progress-bar-stripes 2s linear infinite;
}
.progress-bar-success {
  background-color: #5cb85c;
}
.progress-striped .progress-bar-success {
  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
}
.progress-bar-info {
  background-color: #5bc0de;
}
.progress-striped .progress-bar-info {
  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
}
.progress-bar-warning {
  background-color: #f0ad4e;
}
.progress-striped .progress-bar-warning {
  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
}
.progress-bar-danger {
  background-color: #d9534f;
}
.progress-striped .progress-bar-danger {
  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
}
.media {
  margin-top: 15px;
}
.media:first-child {
  margin-top: 0;
}
.media,
.media-body {
  zoom: 1;
  overflow: hidden;
}
.media-body {
  width: 10000px;
}
.media-object {
  display: block;
}
.media-object.img-thumbnail {
  max-width: none;
}
.media-right,
.media > .pull-right {
  padding-left: 10px;
}
.media-left,
.media > .pull-left {
  padding-right: 10px;
}
.media-left,
.media-right,
.media-body {
  display: table-cell;
  vertical-align: top;
}
.media-middle {
  vertical-align: middle;
}
.media-bottom {
  vertical-align: bottom;
}
.media-heading {
  margin-top: 0;
  margin-bottom: 5px;
}
.media-list {
  padding-left: 0;
  list-style: none;
}
.list-group {
  margin-bottom: 20px;
  padding-left: 0;
}
.list-group-item {
  position: relative;
  display: block;
  padding: 10px 15px;
  margin-bottom: -1px;
  background-color: #fff;
  border: 1px solid #ddd;
}
.list-group-item:first-child {
  border-top-right-radius: 2px;
  border-top-left-radius: 2px;
}
.list-group-item:last-child {
  margin-bottom: 0;
  border-bottom-right-radius: 2px;
  border-bottom-left-radius: 2px;
}
a.list-group-item,
button.list-group-item {
  color: #555;
}
a.list-group-item .list-group-item-heading,
button.list-group-item .list-group-item-heading {
  color: #333;
}
a.list-group-item:hover,
button.list-group-item:hover,
a.list-group-item:focus,
button.list-group-item:focus {
  text-decoration: none;
  color: #555;
  background-color: #f5f5f5;
}
button.list-group-item {
  width: 100%;
  text-align: left;
}
.list-group-item.disabled,
.list-group-item.disabled:hover,
.list-group-item.disabled:focus {
  background-color: #eeeeee;
  color: #777777;
  cursor: not-allowed;
}
.list-group-item.disabled .list-group-item-heading,
.list-group-item.disabled:hover .list-group-item-heading,
.list-group-item.disabled:focus .list-group-item-heading {
  color: inherit;
}
.list-group-item.disabled .list-group-item-text,
.list-group-item.disabled:hover .list-group-item-text,
.list-group-item.disabled:focus .list-group-item-text {
  color: #777777;
}
.list-group-item.active,
.list-group-item.active:hover,
.list-group-item.active:focus {
  z-index: 2;
  color: #fff;
  background-color: #337ab7;
  border-color: #337ab7;
}
.list-group-item.active .list-group-item-heading,
.list-group-item.active:hover .list-group-item-heading,
.list-group-item.active:focus .list-group-item-heading,
.list-group-item.active .list-group-item-heading > small,
.list-group-item.active:hover .list-group-item-heading > small,
.list-group-item.active:focus .list-group-item-heading > small,
.list-group-item.active .list-group-item-heading > .small,
.list-group-item.active:hover .list-group-item-heading > .small,
.list-group-item.active:focus .list-group-item-heading > .small {
  color: inherit;
}
.list-group-item.active .list-group-item-text,
.list-group-item.active:hover .list-group-item-text,
.list-group-item.active:focus .list-group-item-text {
  color: #c7ddef;
}
.list-group-item-success {
  color: #3c763d;
  background-color: #dff0d8;
}
a.list-group-item-success,
button.list-group-item-success {
  color: #3c763d;
}
a.list-group-item-success .list-group-item-heading,
button.list-group-item-success .list-group-item-heading {
  color: inherit;
}
a.list-group-item-success:hover,
button.list-group-item-success:hover,
a.list-group-item-success:focus,
button.list-group-item-success:focus {
  color: #3c763d;
  background-color: #d0e9c6;
}
a.list-group-item-success.active,
button.list-group-item-success.active,
a.list-group-item-success.active:hover,
button.list-group-item-success.active:hover,
a.list-group-item-success.active:focus,
button.list-group-item-success.active:focus {
  color: #fff;
  background-color: #3c763d;
  border-color: #3c763d;
}
.list-group-item-info {
  color: #31708f;
  background-color: #d9edf7;
}
a.list-group-item-info,
button.list-group-item-info {
  color: #31708f;
}
a.list-group-item-info .list-group-item-heading,
button.list-group-item-info .list-group-item-heading {
  color: inherit;
}
a.list-group-item-info:hover,
button.list-group-item-info:hover,
a.list-group-item-info:focus,
button.list-group-item-info:focus {
  color: #31708f;
  background-color: #c4e3f3;
}
a.list-group-item-info.active,
button.list-group-item-info.active,
a.list-group-item-info.active:hover,
button.list-group-item-info.active:hover,
a.list-group-item-info.active:focus,
button.list-group-item-info.active:focus {
  color: #fff;
  background-color: #31708f;
  border-color: #31708f;
}
.list-group-item-warning {
  color: #8a6d3b;
  background-color: #fcf8e3;
}
a.list-group-item-warning,
button.list-group-item-warning {
  color: #8a6d3b;
}
a.list-group-item-warning .list-group-item-heading,
button.list-group-item-warning .list-group-item-heading {
  color: inherit;
}
a.list-group-item-warning:hover,
button.list-group-item-warning:hover,
a.list-group-item-warning:focus,
button.list-group-item-warning:focus {
  color: #8a6d3b;
  background-color: #faf2cc;
}
a.list-group-item-warning.active,
button.list-group-item-warning.active,
a.list-group-item-warning.active:hover,
button.list-group-item-warning.active:hover,
a.list-group-item-warning.active:focus,
button.list-group-item-warning.active:focus {
  color: #fff;
  background-color: #8a6d3b;
  border-color: #8a6d3b;
}
.list-group-item-danger {
  color: #a94442;
  background-color: #f2dede;
}
a.list-group-item-danger,
button.list-group-item-danger {
  color: #a94442;
}
a.list-group-item-danger .list-group-item-heading,
button.list-group-item-danger .list-group-item-heading {
  color: inherit;
}
a.list-group-item-danger:hover,
button.list-group-item-danger:hover,
a.list-group-item-danger:focus,
button.list-group-item-danger:focus {
  color: #a94442;
  background-color: #ebcccc;
}
a.list-group-item-danger.active,
button.list-group-item-danger.active,
a.list-group-item-danger.active:hover,
button.list-group-item-danger.active:hover,
a.list-group-item-danger.active:focus,
button.list-group-item-danger.active:focus {
  color: #fff;
  background-color: #a94442;
  border-color: #a94442;
}
.list-group-item-heading {
  margin-top: 0;
  margin-bottom: 5px;
}
.list-group-item-text {
  margin-bottom: 0;
  line-height: 1.3;
}
.panel {
  margin-bottom: 18px;
  background-color: #fff;
  border: 1px solid transparent;
  border-radius: 2px;
  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
}
.panel-body {
  padding: 15px;
}
.panel-heading {
  padding: 10px 15px;
  border-bottom: 1px solid transparent;
  border-top-right-radius: 1px;
  border-top-left-radius: 1px;
}
.panel-heading > .dropdown .dropdown-toggle {
  color: inherit;
}
.panel-title {
  margin-top: 0;
  margin-bottom: 0;
  font-size: 15px;
  color: inherit;
}
.panel-title > a,
.panel-title > small,
.panel-title > .small,
.panel-title > small > a,
.panel-title > .small > a {
  color: inherit;
}
.panel-footer {
  padding: 10px 15px;
  background-color: #f5f5f5;
  border-top: 1px solid #ddd;
  border-bottom-right-radius: 1px;
  border-bottom-left-radius: 1px;
}
.panel > .list-group,
.panel > .panel-collapse > .list-group {
  margin-bottom: 0;
}
.panel > .list-group .list-group-item,
.panel > .panel-collapse > .list-group .list-group-item {
  border-width: 1px 0;
  border-radius: 0;
}
.panel > .list-group:first-child .list-group-item:first-child,
.panel > .panel-collapse > .list-group:first-child .list-group-item:first-child {
  border-top: 0;
  border-top-right-radius: 1px;
  border-top-left-radius: 1px;
}
.panel > .list-group:last-child .list-group-item:last-child,
.panel > .panel-collapse > .list-group:last-child .list-group-item:last-child {
  border-bottom: 0;
  border-bottom-right-radius: 1px;
  border-bottom-left-radius: 1px;
}
.panel > .panel-heading + .panel-collapse > .list-group .list-group-item:first-child {
  border-top-right-radius: 0;
  border-top-left-radius: 0;
}
.panel-heading + .list-group .list-group-item:first-child {
  border-top-width: 0;
}
.list-group + .panel-footer {
  border-top-width: 0;
}
.panel > .table,
.panel > .table-responsive > .table,
.panel > .panel-collapse > .table {
  margin-bottom: 0;
}
.panel > .table caption,
.panel > .table-responsive > .table caption,
.panel > .panel-collapse > .table caption {
  padding-left: 15px;
  padding-right: 15px;
}
.panel > .table:first-child,
.panel > .table-responsive:first-child > .table:first-child {
  border-top-right-radius: 1px;
  border-top-left-radius: 1px;
}
.panel > .table:first-child > thead:first-child > tr:first-child,
.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child,
.panel > .table:first-child > tbody:first-child > tr:first-child,
.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child {
  border-top-left-radius: 1px;
  border-top-right-radius: 1px;
}
.panel > .table:first-child > thead:first-child > tr:first-child td:first-child,
.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:first-child,
.panel > .table:first-child > tbody:first-child > tr:first-child td:first-child,
.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:first-child,
.panel > .table:first-child > thead:first-child > tr:first-child th:first-child,
.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:first-child,
.panel > .table:first-child > tbody:first-child > tr:first-child th:first-child,
.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:first-child {
  border-top-left-radius: 1px;
}
.panel > .table:first-child > thead:first-child > tr:first-child td:last-child,
.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:last-child,
.panel > .table:first-child > tbody:first-child > tr:first-child td:last-child,
.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:last-child,
.panel > .table:first-child > thead:first-child > tr:first-child th:last-child,
.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:last-child,
.panel > .table:first-child > tbody:first-child > tr:first-child th:last-child,
.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:last-child {
  border-top-right-radius: 1px;
}
.panel > .table:last-child,
.panel > .table-responsive:last-child > .table:last-child {
  border-bottom-right-radius: 1px;
  border-bottom-left-radius: 1px;
}
.panel > .table:last-child > tbody:last-child > tr:last-child,
.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child,
.panel > .table:last-child > tfoot:last-child > tr:last-child,
.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child {
  border-bottom-left-radius: 1px;
  border-bottom-right-radius: 1px;
}
.panel > .table:last-child > tbody:last-child > tr:last-child td:first-child,
.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:first-child,
.panel > .table:last-child > tfoot:last-child > tr:last-child td:first-child,
.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:first-child,
.panel > .table:last-child > tbody:last-child > tr:last-child th:first-child,
.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:first-child,
.panel > .table:last-child > tfoot:last-child > tr:last-child th:first-child,
.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:first-child {
  border-bottom-left-radius: 1px;
}
.panel > .table:last-child > tbody:last-child > tr:last-child td:last-child,
.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:last-child,
.panel > .table:last-child > tfoot:last-child > tr:last-child td:last-child,
.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:last-child,
.panel > .table:last-child > tbody:last-child > tr:last-child th:last-child,
.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:last-child,
.panel > .table:last-child > tfoot:last-child > tr:last-child th:last-child,
.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:last-child {
  border-bottom-right-radius: 1px;
}
.panel > .panel-body + .table,
.panel > .panel-body + .table-responsive,
.panel > .table + .panel-body,
.panel > .table-responsive + .panel-body {
  border-top: 1px solid #ddd;
}
.panel > .table > tbody:first-child > tr:first-child th,
.panel > .table > tbody:first-child > tr:first-child td {
  border-top: 0;
}
.panel > .table-bordered,
.panel > .table-responsive > .table-bordered {
  border: 0;
}
.panel > .table-bordered > thead > tr > th:first-child,
.panel > .table-responsive > .table-bordered > thead > tr > th:first-child,
.panel > .table-bordered > tbody > tr > th:first-child,
.panel > .table-responsive > .table-bordered > tbody > tr > th:first-child,
.panel > .table-bordered > tfoot > tr > th:first-child,
.panel > .table-responsive > .table-bordered > tfoot > tr > th:first-child,
.panel > .table-bordered > thead > tr > td:first-child,
.panel > .table-responsive > .table-bordered > thead > tr > td:first-child,
.panel > .table-bordered > tbody > tr > td:first-child,
.panel > .table-responsive > .table-bordered > tbody > tr > td:first-child,
.panel > .table-bordered > tfoot > tr > td:first-child,
.panel > .table-responsive > .table-bordered > tfoot > tr > td:first-child {
  border-left: 0;
}
.panel > .table-bordered > thead > tr > th:last-child,
.panel > .table-responsive > .table-bordered > thead > tr > th:last-child,
.panel > .table-bordered > tbody > tr > th:last-child,
.panel > .table-responsive > .table-bordered > tbody > tr > th:last-child,
.panel > .table-bordered > tfoot > tr > th:last-child,
.panel > .table-responsive > .table-bordered > tfoot > tr > th:last-child,
.panel > .table-bordered > thead > tr > td:last-child,
.panel > .table-responsive > .table-bordered > thead > tr > td:last-child,
.panel > .table-bordered > tbody > tr > td:last-child,
.panel > .table-responsive > .table-bordered > tbody > tr > td:last-child,
.panel > .table-bordered > tfoot > tr > td:last-child,
.panel > .table-responsive > .table-bordered > tfoot > tr > td:last-child {
  border-right: 0;
}
.panel > .table-bordered > thead > tr:first-child > td,
.panel > .table-responsive > .table-bordered > thead > tr:first-child > td,
.panel > .table-bordered > tbody > tr:first-child > td,
.panel > .table-responsive > .table-bordered > tbody > tr:first-child > td,
.panel > .table-bordered > thead > tr:first-child > th,
.panel > .table-responsive > .table-bordered > thead > tr:first-child > th,
.panel > .table-bordered > tbody > tr:first-child > th,
.panel > .table-responsive > .table-bordered > tbody > tr:first-child > th {
  border-bottom: 0;
}
.panel > .table-bordered > tbody > tr:last-child > td,
.panel > .table-responsive > .table-bordered > tbody > tr:last-child > td,
.panel > .table-bordered > tfoot > tr:last-child > td,
.panel > .table-responsive > .table-bordered > tfoot > tr:last-child > td,
.panel > .table-bordered > tbody > tr:last-child > th,
.panel > .table-responsive > .table-bordered > tbody > tr:last-child > th,
.panel > .table-bordered > tfoot > tr:last-child > th,
.panel > .table-responsive > .table-bordered > tfoot > tr:last-child > th {
  border-bottom: 0;
}
.panel > .table-responsive {
  border: 0;
  margin-bottom: 0;
}
.panel-group {
  margin-bottom: 18px;
}
.panel-group .panel {
  margin-bottom: 0;
  border-radius: 2px;
}
.panel-group .panel + .panel {
  margin-top: 5px;
}
.panel-group .panel-heading {
  border-bottom: 0;
}
.panel-group .panel-heading + .panel-collapse > .panel-body,
.panel-group .panel-heading + .panel-collapse > .list-group {
  border-top: 1px solid #ddd;
}
.panel-group .panel-footer {
  border-top: 0;
}
.panel-group .panel-footer + .panel-collapse .panel-body {
  border-bottom: 1px solid #ddd;
}
.panel-default {
  border-color: #ddd;
}
.panel-default > .panel-heading {
  color: #333333;
  background-color: #f5f5f5;
  border-color: #ddd;
}
.panel-default > .panel-heading + .panel-collapse > .panel-body {
  border-top-color: #ddd;
}
.panel-default > .panel-heading .badge {
  color: #f5f5f5;
  background-color: #333333;
}
.panel-default > .panel-footer + .panel-collapse > .panel-body {
  border-bottom-color: #ddd;
}
.panel-primary {
  border-color: #337ab7;
}
.panel-primary > .panel-heading {
  color: #fff;
  background-color: #337ab7;
  border-color: #337ab7;
}
.panel-primary > .panel-heading + .panel-collapse > .panel-body {
  border-top-color: #337ab7;
}
.panel-primary > .panel-heading .badge {
  color: #337ab7;
  background-color: #fff;
}
.panel-primary > .panel-footer + .panel-collapse > .panel-body {
  border-bottom-color: #337ab7;
}
.panel-success {
  border-color: #d6e9c6;
}
.panel-success > .panel-heading {
  color: #3c763d;
  background-color: #dff0d8;
  border-color: #d6e9c6;
}
.panel-success > .panel-heading + .panel-collapse > .panel-body {
  border-top-color: #d6e9c6;
}
.panel-success > .panel-heading .badge {
  color: #dff0d8;
  background-color: #3c763d;
}
.panel-success > .panel-footer + .panel-collapse > .panel-body {
  border-bottom-color: #d6e9c6;
}
.panel-info {
  border-color: #bce8f1;
}
.panel-info > .panel-heading {
  color: #31708f;
  background-color: #d9edf7;
  border-color: #bce8f1;
}
.panel-info > .panel-heading + .panel-collapse > .panel-body {
  border-top-color: #bce8f1;
}
.panel-info > .panel-heading .badge {
  color: #d9edf7;
  background-color: #31708f;
}
.panel-info > .panel-footer + .panel-collapse > .panel-body {
  border-bottom-color: #bce8f1;
}
.panel-warning {
  border-color: #faebcc;
}
.panel-warning > .panel-heading {
  color: #8a6d3b;
  background-color: #fcf8e3;
  border-color: #faebcc;
}
.panel-warning > .panel-heading + .panel-collapse > .panel-body {
  border-top-color: #faebcc;
}
.panel-warning > .panel-heading .badge {
  color: #fcf8e3;
  background-color: #8a6d3b;
}
.panel-warning > .panel-footer + .panel-collapse > .panel-body {
  border-bottom-color: #faebcc;
}
.panel-danger {
  border-color: #ebccd1;
}
.panel-danger > .panel-heading {
  color: #a94442;
  background-color: #f2dede;
  border-color: #ebccd1;
}
.panel-danger > .panel-heading + .panel-collapse > .panel-body {
  border-top-color: #ebccd1;
}
.panel-danger > .panel-heading .badge {
  color: #f2dede;
  background-color: #a94442;
}
.panel-danger > .panel-footer + .panel-collapse > .panel-body {
  border-bottom-color: #ebccd1;
}
.embed-responsive {
  position: relative;
  display: block;
  height: 0;
  padding: 0;
  overflow: hidden;
}
.embed-responsive .embed-responsive-item,
.embed-responsive iframe,
.embed-responsive embed,
.embed-responsive object,
.embed-responsive video {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  border: 0;
}
.embed-responsive-16by9 {
  padding-bottom: 56.25%;
}
.embed-responsive-4by3 {
  padding-bottom: 75%;
}
.well {
  min-height: 20px;
  padding: 19px;
  margin-bottom: 20px;
  background-color: #f5f5f5;
  border: 1px solid #e3e3e3;
  border-radius: 2px;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);
}
.well blockquote {
  border-color: #ddd;
  border-color: rgba(0, 0, 0, 0.15);
}
.well-lg {
  padding: 24px;
  border-radius: 3px;
}
.well-sm {
  padding: 9px;
  border-radius: 1px;
}
.close {
  float: right;
  font-size: 19.5px;
  font-weight: bold;
  line-height: 1;
  color: #000;
  text-shadow: 0 1px 0 #fff;
  opacity: 0.2;
  filter: alpha(opacity=20);
}
.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
  opacity: 0.5;
  filter: alpha(opacity=50);
}
button.close {
  padding: 0;
  cursor: pointer;
  background: transparent;
  border: 0;
  -webkit-appearance: none;
}
.modal-open {
  overflow: hidden;
}
.modal {
  display: none;
  overflow: hidden;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1050;
  -webkit-overflow-scrolling: touch;
  outline: 0;
}
.modal.fade .modal-dialog {
  -webkit-transform: translate(0, -25%);
  -ms-transform: translate(0, -25%);
  -o-transform: translate(0, -25%);
  transform: translate(0, -25%);
  -webkit-transition: -webkit-transform 0.3s ease-out;
  -moz-transition: -moz-transform 0.3s ease-out;
  -o-transition: -o-transform 0.3s ease-out;
  transition: transform 0.3s ease-out;
}
.modal.in .modal-dialog {
  -webkit-transform: translate(0, 0);
  -ms-transform: translate(0, 0);
  -o-transform: translate(0, 0);
  transform: translate(0, 0);
}
.modal-open .modal {
  overflow-x: hidden;
  overflow-y: auto;
}
.modal-dialog {
  position: relative;
  width: auto;
  margin: 10px;
}
.modal-content {
  position: relative;
  background-color: #fff;
  border: 1px solid #999;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  -webkit-box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);
  box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);
  background-clip: padding-box;
  outline: 0;
}
.modal-backdrop {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1040;
  background-color: #000;
}
.modal-backdrop.fade {
  opacity: 0;
  filter: alpha(opacity=0);
}
.modal-backdrop.in {
  opacity: 0.5;
  filter: alpha(opacity=50);
}
.modal-header {
  padding: 15px;
  border-bottom: 1px solid #e5e5e5;
}
.modal-header .close {
  margin-top: -2px;
}
.modal-title {
  margin: 0;
  line-height: 1.42857143;
}
.modal-body {
  position: relative;
  padding: 15px;
}
.modal-footer {
  padding: 15px;
  text-align: right;
  border-top: 1px solid #e5e5e5;
}
.modal-footer .btn + .btn {
  margin-left: 5px;
  margin-bottom: 0;
}
.modal-footer .btn-group .btn + .btn {
  margin-left: -1px;
}
.modal-footer .btn-block + .btn-block {
  margin-left: 0;
}
.modal-scrollbar-measure {
  position: absolute;
  top: -9999px;
  width: 50px;
  height: 50px;
  overflow: scroll;
}
@media (min-width: 768px) {
  .modal-dialog {
    width: 600px;
    margin: 30px auto;
  }
  .modal-content {
    -webkit-box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  }
  .modal-sm {
    width: 300px;
  }
}
@media (min-width: 992px) {
  .modal-lg {
    width: 900px;
  }
}
.tooltip {
  position: absolute;
  z-index: 1070;
  display: block;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  letter-spacing: normal;
  line-break: auto;
  line-height: 1.42857143;
  text-align: left;
  text-align: start;
  text-decoration: none;
  text-shadow: none;
  text-transform: none;
  white-space: normal;
  word-break: normal;
  word-spacing: normal;
  word-wrap: normal;
  font-size: 12px;
  opacity: 0;
  filter: alpha(opacity=0);
}
.tooltip.in {
  opacity: 0.9;
  filter: alpha(opacity=90);
}
.tooltip.top {
  margin-top: -3px;
  padding: 5px 0;
}
.tooltip.right {
  margin-left: 3px;
  padding: 0 5px;
}
.tooltip.bottom {
  margin-top: 3px;
  padding: 5px 0;
}
.tooltip.left {
  margin-left: -3px;
  padding: 0 5px;
}
.tooltip-inner {
  max-width: 200px;
  padding: 3px 8px;
  color: #fff;
  text-align: center;
  background-color: #000;
  border-radius: 2px;
}
.tooltip-arrow {
  position: absolute;
  width: 0;
  height: 0;
  border-color: transparent;
  border-style: solid;
}
.tooltip.top .tooltip-arrow {
  bottom: 0;
  left: 50%;
  margin-left: -5px;
  border-width: 5px 5px 0;
  border-top-color: #000;
}
.tooltip.top-left .tooltip-arrow {
  bottom: 0;
  right: 5px;
  margin-bottom: -5px;
  border-width: 5px 5px 0;
  border-top-color: #000;
}
.tooltip.top-right .tooltip-arrow {
  bottom: 0;
  left: 5px;
  margin-bottom: -5px;
  border-width: 5px 5px 0;
  border-top-color: #000;
}
.tooltip.right .tooltip-arrow {
  top: 50%;
  left: 0;
  margin-top: -5px;
  border-width: 5px 5px 5px 0;
  border-right-color: #000;
}
.tooltip.left .tooltip-arrow {
  top: 50%;
  right: 0;
  margin-top: -5px;
  border-width: 5px 0 5px 5px;
  border-left-color: #000;
}
.tooltip.bottom .tooltip-arrow {
  top: 0;
  left: 50%;
  margin-left: -5px;
  border-width: 0 5px 5px;
  border-bottom-color: #000;
}
.tooltip.bottom-left .tooltip-arrow {
  top: 0;
  right: 5px;
  margin-top: -5px;
  border-width: 0 5px 5px;
  border-bottom-color: #000;
}
.tooltip.bottom-right .tooltip-arrow {
  top: 0;
  left: 5px;
  margin-top: -5px;
  border-width: 0 5px 5px;
  border-bottom-color: #000;
}
.popover {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1060;
  display: none;
  max-width: 276px;
  padding: 1px;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  letter-spacing: normal;
  line-break: auto;
  line-height: 1.42857143;
  text-align: left;
  text-align: start;
  text-decoration: none;
  text-shadow: none;
  text-transform: none;
  white-space: normal;
  word-break: normal;
  word-spacing: normal;
  word-wrap: normal;
  font-size: 13px;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ccc;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}
.popover.top {
  margin-top: -10px;
}
.popover.right {
  margin-left: 10px;
}
.popover.bottom {
  margin-top: 10px;
}
.popover.left {
  margin-left: -10px;
}
.popover-title {
  margin: 0;
  padding: 8px 14px;
  font-size: 13px;
  background-color: #f7f7f7;
  border-bottom: 1px solid #ebebeb;
  border-radius: 2px 2px 0 0;
}
.popover-content {
  padding: 9px 14px;
}
.popover > .arrow,
.popover > .arrow:after {
  position: absolute;
  display: block;
  width: 0;
  height: 0;
  border-color: transparent;
  border-style: solid;
}
.popover > .arrow {
  border-width: 11px;
}
.popover > .arrow:after {
  border-width: 10px;
  content: "";
}
.popover.top > .arrow {
  left: 50%;
  margin-left: -11px;
  border-bottom-width: 0;
  border-top-color: #999999;
  border-top-color: rgba(0, 0, 0, 0.25);
  bottom: -11px;
}
.popover.top > .arrow:after {
  content: " ";
  bottom: 1px;
  margin-left: -10px;
  border-bottom-width: 0;
  border-top-color: #fff;
}
.popover.right > .arrow {
  top: 50%;
  left: -11px;
  margin-top: -11px;
  border-left-width: 0;
  border-right-color: #999999;
  border-right-color: rgba(0, 0, 0, 0.25);
}
.popover.right > .arrow:after {
  content: " ";
  left: 1px;
  bottom: -10px;
  border-left-width: 0;
  border-right-color: #fff;
}
.popover.bottom > .arrow {
  left: 50%;
  margin-left: -11px;
  border-top-width: 0;
  border-bottom-color: #999999;
  border-bottom-color: rgba(0, 0, 0, 0.25);
  top: -11px;
}
.popover.bottom > .arrow:after {
  content: " ";
  top: 1px;
  margin-left: -10px;
  border-top-width: 0;
  border-bottom-color: #fff;
}
.popover.left > .arrow {
  top: 50%;
  right: -11px;
  margin-top: -11px;
  border-right-width: 0;
  border-left-color: #999999;
  border-left-color: rgba(0, 0, 0, 0.25);
}
.popover.left > .arrow:after {
  content: " ";
  right: 1px;
  border-right-width: 0;
  border-left-color: #fff;
  bottom: -10px;
}
.carousel {
  position: relative;
}
.carousel-inner {
  position: relative;
  overflow: hidden;
  width: 100%;
}
.carousel-inner > .item {
  display: none;
  position: relative;
  -webkit-transition: 0.6s ease-in-out left;
  -o-transition: 0.6s ease-in-out left;
  transition: 0.6s ease-in-out left;
}
.carousel-inner > .item > img,
.carousel-inner > .item > a > img {
  line-height: 1;
}
@media all and (transform-3d), (-webkit-transform-3d) {
  .carousel-inner > .item {
    -webkit-transition: -webkit-transform 0.6s ease-in-out;
    -moz-transition: -moz-transform 0.6s ease-in-out;
    -o-transition: -o-transform 0.6s ease-in-out;
    transition: transform 0.6s ease-in-out;
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-perspective: 1000px;
    -moz-perspective: 1000px;
    perspective: 1000px;
  }
  .carousel-inner > .item.next,
  .carousel-inner > .item.active.right {
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
    left: 0;
  }
  .carousel-inner > .item.prev,
  .carousel-inner > .item.active.left {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
    left: 0;
  }
  .carousel-inner > .item.next.left,
  .carousel-inner > .item.prev.right,
  .carousel-inner > .item.active {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    left: 0;
  }
}
.carousel-inner > .active,
.carousel-inner > .next,
.carousel-inner > .prev {
  display: block;
}
.carousel-inner > .active {
  left: 0;
}
.carousel-inner > .next,
.carousel-inner > .prev {
  position: absolute;
  top: 0;
  width: 100%;
}
.carousel-inner > .next {
  left: 100%;
}
.carousel-inner > .prev {
  left: -100%;
}
.carousel-inner > .next.left,
.carousel-inner > .prev.right {
  left: 0;
}
.carousel-inner > .active.left {
  left: -100%;
}
.carousel-inner > .active.right {
  left: 100%;
}
.carousel-control {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 15%;
  opacity: 0.5;
  filter: alpha(opacity=50);
  font-size: 20px;
  color: #fff;
  text-align: center;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
  background-color: rgba(0, 0, 0, 0);
}
.carousel-control.left {
  background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.0001) 100%);
  background-image: -o-linear-gradient(left, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.0001) 100%);
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.0001) 100%);
  background-repeat: repeat-x;
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#80000000', endColorstr='#00000000', GradientType=1);
}
.carousel-control.right {
  left: auto;
  right: 0;
  background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%);
  background-image: -o-linear-gradient(left, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%);
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%);
  background-repeat: repeat-x;
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#80000000', GradientType=1);
}
.carousel-control:hover,
.carousel-control:focus {
  outline: 0;
  color: #fff;
  text-decoration: none;
  opacity: 0.9;
  filter: alpha(opacity=90);
}
.carousel-control .icon-prev,
.carousel-control .icon-next,
.carousel-control .glyphicon-chevron-left,
.carousel-control .glyphicon-chevron-right {
  position: absolute;
  top: 50%;
  margin-top: -10px;
  z-index: 5;
  display: inline-block;
}
.carousel-control .icon-prev,
.carousel-control .glyphicon-chevron-left {
  left: 50%;
  margin-left: -10px;
}
.carousel-control .icon-next,
.carousel-control .glyphicon-chevron-right {
  right: 50%;
  margin-right: -10px;
}
.carousel-control .icon-prev,
.carousel-control .icon-next {
  width: 20px;
  height: 20px;
  line-height: 1;
  font-family: serif;
}
.carousel-control .icon-prev:before {
  content: '\\2039';
}
.carousel-control .icon-next:before {
  content: '\\203a';
}
.carousel-indicators {
  position: absolute;
  bottom: 10px;
  left: 50%;
  z-index: 15;
  width: 60%;
  margin-left: -30%;
  padding-left: 0;
  list-style: none;
  text-align: center;
}
.carousel-indicators li {
  display: inline-block;
  width: 10px;
  height: 10px;
  margin: 1px;
  text-indent: -999px;
  border: 1px solid #fff;
  border-radius: 10px;
  cursor: pointer;
  background-color: #000 \\9;
  background-color: rgba(0, 0, 0, 0);
}
.carousel-indicators .active {
  margin: 0;
  width: 12px;
  height: 12px;
  background-color: #fff;
}
.carousel-caption {
  position: absolute;
  left: 15%;
  right: 15%;
  bottom: 20px;
  z-index: 10;
  padding-top: 20px;
  padding-bottom: 20px;
  color: #fff;
  text-align: center;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
}
.carousel-caption .btn {
  text-shadow: none;
}
@media screen and (min-width: 768px) {
  .carousel-control .glyphicon-chevron-left,
  .carousel-control .glyphicon-chevron-right,
  .carousel-control .icon-prev,
  .carousel-control .icon-next {
    width: 30px;
    height: 30px;
    margin-top: -10px;
    font-size: 30px;
  }
  .carousel-control .glyphicon-chevron-left,
  .carousel-control .icon-prev {
    margin-left: -10px;
  }
  .carousel-control .glyphicon-chevron-right,
  .carousel-control .icon-next {
    margin-right: -10px;
  }
  .carousel-caption {
    left: 20%;
    right: 20%;
    padding-bottom: 30px;
  }
  .carousel-indicators {
    bottom: 20px;
  }
}
.clearfix:before,
.clearfix:after,
.dl-horizontal dd:before,
.dl-horizontal dd:after,
.container:before,
.container:after,
.container-fluid:before,
.container-fluid:after,
.row:before,
.row:after,
.form-horizontal .form-group:before,
.form-horizontal .form-group:after,
.btn-toolbar:before,
.btn-toolbar:after,
.btn-group-vertical > .btn-group:before,
.btn-group-vertical > .btn-group:after,
.nav:before,
.nav:after,
.navbar:before,
.navbar:after,
.navbar-header:before,
.navbar-header:after,
.navbar-collapse:before,
.navbar-collapse:after,
.pager:before,
.pager:after,
.panel-body:before,
.panel-body:after,
.modal-header:before,
.modal-header:after,
.modal-footer:before,
.modal-footer:after,
.item_buttons:before,
.item_buttons:after {
  content: " ";
  display: table;
}
.clearfix:after,
.dl-horizontal dd:after,
.container:after,
.container-fluid:after,
.row:after,
.form-horizontal .form-group:after,
.btn-toolbar:after,
.btn-group-vertical > .btn-group:after,
.nav:after,
.navbar:after,
.navbar-header:after,
.navbar-collapse:after,
.pager:after,
.panel-body:after,
.modal-header:after,
.modal-footer:after,
.item_buttons:after {
  clear: both;
}
.center-block {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.pull-right {
  float: right !important;
}
.pull-left {
  float: left !important;
}
.hide {
  display: none !important;
}
.show {
  display: block !important;
}
.invisible {
  visibility: hidden;
}
.text-hide {
  font: 0/0 a;
  color: transparent;
  text-shadow: none;
  background-color: transparent;
  border: 0;
}
.hidden {
  display: none !important;
}
.affix {
  position: fixed;
}
@-ms-viewport {
  width: device-width;
}
.visible-xs,
.visible-sm,
.visible-md,
.visible-lg {
  display: none !important;
}
.visible-xs-block,
.visible-xs-inline,
.visible-xs-inline-block,
.visible-sm-block,
.visible-sm-inline,
.visible-sm-inline-block,
.visible-md-block,
.visible-md-inline,
.visible-md-inline-block,
.visible-lg-block,
.visible-lg-inline,
.visible-lg-inline-block {
  display: none !important;
}
@media (max-width: 767px) {
  .visible-xs {
    display: block !important;
  }
  table.visible-xs {
    display: table !important;
  }
  tr.visible-xs {
    display: table-row !important;
  }
  th.visible-xs,
  td.visible-xs {
    display: table-cell !important;
  }
}
@media (max-width: 767px) {
  .visible-xs-block {
    display: block !important;
  }
}
@media (max-width: 767px) {
  .visible-xs-inline {
    display: inline !important;
  }
}
@media (max-width: 767px) {
  .visible-xs-inline-block {
    display: inline-block !important;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .visible-sm {
    display: block !important;
  }
  table.visible-sm {
    display: table !important;
  }
  tr.visible-sm {
    display: table-row !important;
  }
  th.visible-sm,
  td.visible-sm {
    display: table-cell !important;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .visible-sm-block {
    display: block !important;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .visible-sm-inline {
    display: inline !important;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .visible-sm-inline-block {
    display: inline-block !important;
  }
}
@media (min-width: 992px) and (max-width: 1199px) {
  .visible-md {
    display: block !important;
  }
  table.visible-md {
    display: table !important;
  }
  tr.visible-md {
    display: table-row !important;
  }
  th.visible-md,
  td.visible-md {
    display: table-cell !important;
  }
}
@media (min-width: 992px) and (max-width: 1199px) {
  .visible-md-block {
    display: block !important;
  }
}
@media (min-width: 992px) and (max-width: 1199px) {
  .visible-md-inline {
    display: inline !important;
  }
}
@media (min-width: 992px) and (max-width: 1199px) {
  .visible-md-inline-block {
    display: inline-block !important;
  }
}
@media (min-width: 1200px) {
  .visible-lg {
    display: block !important;
  }
  table.visible-lg {
    display: table !important;
  }
  tr.visible-lg {
    display: table-row !important;
  }
  th.visible-lg,
  td.visible-lg {
    display: table-cell !important;
  }
}
@media (min-width: 1200px) {
  .visible-lg-block {
    display: block !important;
  }
}
@media (min-width: 1200px) {
  .visible-lg-inline {
    display: inline !important;
  }
}
@media (min-width: 1200px) {
  .visible-lg-inline-block {
    display: inline-block !important;
  }
}
@media (max-width: 767px) {
  .hidden-xs {
    display: none !important;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .hidden-sm {
    display: none !important;
  }
}
@media (min-width: 992px) and (max-width: 1199px) {
  .hidden-md {
    display: none !important;
  }
}
@media (min-width: 1200px) {
  .hidden-lg {
    display: none !important;
  }
}
.visible-print {
  display: none !important;
}
@media print {
  .visible-print {
    display: block !important;
  }
  table.visible-print {
    display: table !important;
  }
  tr.visible-print {
    display: table-row !important;
  }
  th.visible-print,
  td.visible-print {
    display: table-cell !important;
  }
}
.visible-print-block {
  display: none !important;
}
@media print {
  .visible-print-block {
    display: block !important;
  }
}
.visible-print-inline {
  display: none !important;
}
@media print {
  .visible-print-inline {
    display: inline !important;
  }
}
.visible-print-inline-block {
  display: none !important;
}
@media print {
  .visible-print-inline-block {
    display: inline-block !important;
  }
}
@media print {
  .hidden-print {
    display: none !important;
  }
}
/*!
*
* Font Awesome
*
*/
/*!
 *  Font Awesome 4.7.0 by @davegandy - http://fontawesome.io - @fontawesome
 *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)
 */
/* FONT PATH
 * -------------------------- */
@font-face {
  font-family: 'FontAwesome';
  src: url('../components/font-awesome/fonts/fontawesome-webfont.eot?v=4.7.0');
  src: url('../components/font-awesome/fonts/fontawesome-webfont.eot?#iefix&v=4.7.0') format('embedded-opentype'), url('../components/font-awesome/fonts/fontawesome-webfont.woff2?v=4.7.0') format('woff2'), url('../components/font-awesome/fonts/fontawesome-webfont.woff?v=4.7.0') format('woff'), url('../components/font-awesome/fonts/fontawesome-webfont.ttf?v=4.7.0') format('truetype'), url('../components/font-awesome/fonts/fontawesome-webfont.svg?v=4.7.0#fontawesomeregular') format('svg');
  font-weight: normal;
  font-style: normal;
}
.fa {
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
/* makes the font 33% larger relative to the icon container */
.fa-lg {
  font-size: 1.33333333em;
  line-height: 0.75em;
  vertical-align: -15%;
}
.fa-2x {
  font-size: 2em;
}
.fa-3x {
  font-size: 3em;
}
.fa-4x {
  font-size: 4em;
}
.fa-5x {
  font-size: 5em;
}
.fa-fw {
  width: 1.28571429em;
  text-align: center;
}
.fa-ul {
  padding-left: 0;
  margin-left: 2.14285714em;
  list-style-type: none;
}
.fa-ul > li {
  position: relative;
}
.fa-li {
  position: absolute;
  left: -2.14285714em;
  width: 2.14285714em;
  top: 0.14285714em;
  text-align: center;
}
.fa-li.fa-lg {
  left: -1.85714286em;
}
.fa-border {
  padding: .2em .25em .15em;
  border: solid 0.08em #eee;
  border-radius: .1em;
}
.fa-pull-left {
  float: left;
}
.fa-pull-right {
  float: right;
}
.fa.fa-pull-left {
  margin-right: .3em;
}
.fa.fa-pull-right {
  margin-left: .3em;
}
/* Deprecated as of 4.4.0 */
.pull-right {
  float: right;
}
.pull-left {
  float: left;
}
.fa.pull-left {
  margin-right: .3em;
}
.fa.pull-right {
  margin-left: .3em;
}
.fa-spin {
  -webkit-animation: fa-spin 2s infinite linear;
  animation: fa-spin 2s infinite linear;
}
.fa-pulse {
  -webkit-animation: fa-spin 1s infinite steps(8);
  animation: fa-spin 1s infinite steps(8);
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(359deg);
    transform: rotate(359deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(359deg);
    transform: rotate(359deg);
  }
}
.fa-rotate-90 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";
  -webkit-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  transform: rotate(90deg);
}
.fa-rotate-180 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";
  -webkit-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  transform: rotate(180deg);
}
.fa-rotate-270 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";
  -webkit-transform: rotate(270deg);
  -ms-transform: rotate(270deg);
  transform: rotate(270deg);
}
.fa-flip-horizontal {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";
  -webkit-transform: scale(-1, 1);
  -ms-transform: scale(-1, 1);
  transform: scale(-1, 1);
}
.fa-flip-vertical {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";
  -webkit-transform: scale(1, -1);
  -ms-transform: scale(1, -1);
  transform: scale(1, -1);
}
:root .fa-rotate-90,
:root .fa-rotate-180,
:root .fa-rotate-270,
:root .fa-flip-horizontal,
:root .fa-flip-vertical {
  filter: none;
}
.fa-stack {
  position: relative;
  display: inline-block;
  width: 2em;
  height: 2em;
  line-height: 2em;
  vertical-align: middle;
}
.fa-stack-1x,
.fa-stack-2x {
  position: absolute;
  left: 0;
  width: 100%;
  text-align: center;
}
.fa-stack-1x {
  line-height: inherit;
}
.fa-stack-2x {
  font-size: 2em;
}
.fa-inverse {
  color: #fff;
}
/* Font Awesome uses the Unicode Private Use Area (PUA) to ensure screen
   readers do not read off random characters that represent icons */
.fa-glass:before {
  content: "\\f000";
}
.fa-music:before {
  content: "\\f001";
}
.fa-search:before {
  content: "\\f002";
}
.fa-envelope-o:before {
  content: "\\f003";
}
.fa-heart:before {
  content: "\\f004";
}
.fa-star:before {
  content: "\\f005";
}
.fa-star-o:before {
  content: "\\f006";
}
.fa-user:before {
  content: "\\f007";
}
.fa-film:before {
  content: "\\f008";
}
.fa-th-large:before {
  content: "\\f009";
}
.fa-th:before {
  content: "\\f00a";
}
.fa-th-list:before {
  content: "\\f00b";
}
.fa-check:before {
  content: "\\f00c";
}
.fa-remove:before,
.fa-close:before,
.fa-times:before {
  content: "\\f00d";
}
.fa-search-plus:before {
  content: "\\f00e";
}
.fa-search-minus:before {
  content: "\\f010";
}
.fa-power-off:before {
  content: "\\f011";
}
.fa-signal:before {
  content: "\\f012";
}
.fa-gear:before,
.fa-cog:before {
  content: "\\f013";
}
.fa-trash-o:before {
  content: "\\f014";
}
.fa-home:before {
  content: "\\f015";
}
.fa-file-o:before {
  content: "\\f016";
}
.fa-clock-o:before {
  content: "\\f017";
}
.fa-road:before {
  content: "\\f018";
}
.fa-download:before {
  content: "\\f019";
}
.fa-arrow-circle-o-down:before {
  content: "\\f01a";
}
.fa-arrow-circle-o-up:before {
  content: "\\f01b";
}
.fa-inbox:before {
  content: "\\f01c";
}
.fa-play-circle-o:before {
  content: "\\f01d";
}
.fa-rotate-right:before,
.fa-repeat:before {
  content: "\\f01e";
}
.fa-refresh:before {
  content: "\\f021";
}
.fa-list-alt:before {
  content: "\\f022";
}
.fa-lock:before {
  content: "\\f023";
}
.fa-flag:before {
  content: "\\f024";
}
.fa-headphones:before {
  content: "\\f025";
}
.fa-volume-off:before {
  content: "\\f026";
}
.fa-volume-down:before {
  content: "\\f027";
}
.fa-volume-up:before {
  content: "\\f028";
}
.fa-qrcode:before {
  content: "\\f029";
}
.fa-barcode:before {
  content: "\\f02a";
}
.fa-tag:before {
  content: "\\f02b";
}
.fa-tags:before {
  content: "\\f02c";
}
.fa-book:before {
  content: "\\f02d";
}
.fa-bookmark:before {
  content: "\\f02e";
}
.fa-print:before {
  content: "\\f02f";
}
.fa-camera:before {
  content: "\\f030";
}
.fa-font:before {
  content: "\\f031";
}
.fa-bold:before {
  content: "\\f032";
}
.fa-italic:before {
  content: "\\f033";
}
.fa-text-height:before {
  content: "\\f034";
}
.fa-text-width:before {
  content: "\\f035";
}
.fa-align-left:before {
  content: "\\f036";
}
.fa-align-center:before {
  content: "\\f037";
}
.fa-align-right:before {
  content: "\\f038";
}
.fa-align-justify:before {
  content: "\\f039";
}
.fa-list:before {
  content: "\\f03a";
}
.fa-dedent:before,
.fa-outdent:before {
  content: "\\f03b";
}
.fa-indent:before {
  content: "\\f03c";
}
.fa-video-camera:before {
  content: "\\f03d";
}
.fa-photo:before,
.fa-image:before,
.fa-picture-o:before {
  content: "\\f03e";
}
.fa-pencil:before {
  content: "\\f040";
}
.fa-map-marker:before {
  content: "\\f041";
}
.fa-adjust:before {
  content: "\\f042";
}
.fa-tint:before {
  content: "\\f043";
}
.fa-edit:before,
.fa-pencil-square-o:before {
  content: "\\f044";
}
.fa-share-square-o:before {
  content: "\\f045";
}
.fa-check-square-o:before {
  content: "\\f046";
}
.fa-arrows:before {
  content: "\\f047";
}
.fa-step-backward:before {
  content: "\\f048";
}
.fa-fast-backward:before {
  content: "\\f049";
}
.fa-backward:before {
  content: "\\f04a";
}
.fa-play:before {
  content: "\\f04b";
}
.fa-pause:before {
  content: "\\f04c";
}
.fa-stop:before {
  content: "\\f04d";
}
.fa-forward:before {
  content: "\\f04e";
}
.fa-fast-forward:before {
  content: "\\f050";
}
.fa-step-forward:before {
  content: "\\f051";
}
.fa-eject:before {
  content: "\\f052";
}
.fa-chevron-left:before {
  content: "\\f053";
}
.fa-chevron-right:before {
  content: "\\f054";
}
.fa-plus-circle:before {
  content: "\\f055";
}
.fa-minus-circle:before {
  content: "\\f056";
}
.fa-times-circle:before {
  content: "\\f057";
}
.fa-check-circle:before {
  content: "\\f058";
}
.fa-question-circle:before {
  content: "\\f059";
}
.fa-info-circle:before {
  content: "\\f05a";
}
.fa-crosshairs:before {
  content: "\\f05b";
}
.fa-times-circle-o:before {
  content: "\\f05c";
}
.fa-check-circle-o:before {
  content: "\\f05d";
}
.fa-ban:before {
  content: "\\f05e";
}
.fa-arrow-left:before {
  content: "\\f060";
}
.fa-arrow-right:before {
  content: "\\f061";
}
.fa-arrow-up:before {
  content: "\\f062";
}
.fa-arrow-down:before {
  content: "\\f063";
}
.fa-mail-forward:before,
.fa-share:before {
  content: "\\f064";
}
.fa-expand:before {
  content: "\\f065";
}
.fa-compress:before {
  content: "\\f066";
}
.fa-plus:before {
  content: "\\f067";
}
.fa-minus:before {
  content: "\\f068";
}
.fa-asterisk:before {
  content: "\\f069";
}
.fa-exclamation-circle:before {
  content: "\\f06a";
}
.fa-gift:before {
  content: "\\f06b";
}
.fa-leaf:before {
  content: "\\f06c";
}
.fa-fire:before {
  content: "\\f06d";
}
.fa-eye:before {
  content: "\\f06e";
}
.fa-eye-slash:before {
  content: "\\f070";
}
.fa-warning:before,
.fa-exclamation-triangle:before {
  content: "\\f071";
}
.fa-plane:before {
  content: "\\f072";
}
.fa-calendar:before {
  content: "\\f073";
}
.fa-random:before {
  content: "\\f074";
}
.fa-comment:before {
  content: "\\f075";
}
.fa-magnet:before {
  content: "\\f076";
}
.fa-chevron-up:before {
  content: "\\f077";
}
.fa-chevron-down:before {
  content: "\\f078";
}
.fa-retweet:before {
  content: "\\f079";
}
.fa-shopping-cart:before {
  content: "\\f07a";
}
.fa-folder:before {
  content: "\\f07b";
}
.fa-folder-open:before {
  content: "\\f07c";
}
.fa-arrows-v:before {
  content: "\\f07d";
}
.fa-arrows-h:before {
  content: "\\f07e";
}
.fa-bar-chart-o:before,
.fa-bar-chart:before {
  content: "\\f080";
}
.fa-twitter-square:before {
  content: "\\f081";
}
.fa-facebook-square:before {
  content: "\\f082";
}
.fa-camera-retro:before {
  content: "\\f083";
}
.fa-key:before {
  content: "\\f084";
}
.fa-gears:before,
.fa-cogs:before {
  content: "\\f085";
}
.fa-comments:before {
  content: "\\f086";
}
.fa-thumbs-o-up:before {
  content: "\\f087";
}
.fa-thumbs-o-down:before {
  content: "\\f088";
}
.fa-star-half:before {
  content: "\\f089";
}
.fa-heart-o:before {
  content: "\\f08a";
}
.fa-sign-out:before {
  content: "\\f08b";
}
.fa-linkedin-square:before {
  content: "\\f08c";
}
.fa-thumb-tack:before {
  content: "\\f08d";
}
.fa-external-link:before {
  content: "\\f08e";
}
.fa-sign-in:before {
  content: "\\f090";
}
.fa-trophy:before {
  content: "\\f091";
}
.fa-github-square:before {
  content: "\\f092";
}
.fa-upload:before {
  content: "\\f093";
}
.fa-lemon-o:before {
  content: "\\f094";
}
.fa-phone:before {
  content: "\\f095";
}
.fa-square-o:before {
  content: "\\f096";
}
.fa-bookmark-o:before {
  content: "\\f097";
}
.fa-phone-square:before {
  content: "\\f098";
}
.fa-twitter:before {
  content: "\\f099";
}
.fa-facebook-f:before,
.fa-facebook:before {
  content: "\\f09a";
}
.fa-github:before {
  content: "\\f09b";
}
.fa-unlock:before {
  content: "\\f09c";
}
.fa-credit-card:before {
  content: "\\f09d";
}
.fa-feed:before,
.fa-rss:before {
  content: "\\f09e";
}
.fa-hdd-o:before {
  content: "\\f0a0";
}
.fa-bullhorn:before {
  content: "\\f0a1";
}
.fa-bell:before {
  content: "\\f0f3";
}
.fa-certificate:before {
  content: "\\f0a3";
}
.fa-hand-o-right:before {
  content: "\\f0a4";
}
.fa-hand-o-left:before {
  content: "\\f0a5";
}
.fa-hand-o-up:before {
  content: "\\f0a6";
}
.fa-hand-o-down:before {
  content: "\\f0a7";
}
.fa-arrow-circle-left:before {
  content: "\\f0a8";
}
.fa-arrow-circle-right:before {
  content: "\\f0a9";
}
.fa-arrow-circle-up:before {
  content: "\\f0aa";
}
.fa-arrow-circle-down:before {
  content: "\\f0ab";
}
.fa-globe:before {
  content: "\\f0ac";
}
.fa-wrench:before {
  content: "\\f0ad";
}
.fa-tasks:before {
  content: "\\f0ae";
}
.fa-filter:before {
  content: "\\f0b0";
}
.fa-briefcase:before {
  content: "\\f0b1";
}
.fa-arrows-alt:before {
  content: "\\f0b2";
}
.fa-group:before,
.fa-users:before {
  content: "\\f0c0";
}
.fa-chain:before,
.fa-link:before {
  content: "\\f0c1";
}
.fa-cloud:before {
  content: "\\f0c2";
}
.fa-flask:before {
  content: "\\f0c3";
}
.fa-cut:before,
.fa-scissors:before {
  content: "\\f0c4";
}
.fa-copy:before,
.fa-files-o:before {
  content: "\\f0c5";
}
.fa-paperclip:before {
  content: "\\f0c6";
}
.fa-save:before,
.fa-floppy-o:before {
  content: "\\f0c7";
}
.fa-square:before {
  content: "\\f0c8";
}
.fa-navicon:before,
.fa-reorder:before,
.fa-bars:before {
  content: "\\f0c9";
}
.fa-list-ul:before {
  content: "\\f0ca";
}
.fa-list-ol:before {
  content: "\\f0cb";
}
.fa-strikethrough:before {
  content: "\\f0cc";
}
.fa-underline:before {
  content: "\\f0cd";
}
.fa-table:before {
  content: "\\f0ce";
}
.fa-magic:before {
  content: "\\f0d0";
}
.fa-truck:before {
  content: "\\f0d1";
}
.fa-pinterest:before {
  content: "\\f0d2";
}
.fa-pinterest-square:before {
  content: "\\f0d3";
}
.fa-google-plus-square:before {
  content: "\\f0d4";
}
.fa-google-plus:before {
  content: "\\f0d5";
}
.fa-money:before {
  content: "\\f0d6";
}
.fa-caret-down:before {
  content: "\\f0d7";
}
.fa-caret-up:before {
  content: "\\f0d8";
}
.fa-caret-left:before {
  content: "\\f0d9";
}
.fa-caret-right:before {
  content: "\\f0da";
}
.fa-columns:before {
  content: "\\f0db";
}
.fa-unsorted:before,
.fa-sort:before {
  content: "\\f0dc";
}
.fa-sort-down:before,
.fa-sort-desc:before {
  content: "\\f0dd";
}
.fa-sort-up:before,
.fa-sort-asc:before {
  content: "\\f0de";
}
.fa-envelope:before {
  content: "\\f0e0";
}
.fa-linkedin:before {
  content: "\\f0e1";
}
.fa-rotate-left:before,
.fa-undo:before {
  content: "\\f0e2";
}
.fa-legal:before,
.fa-gavel:before {
  content: "\\f0e3";
}
.fa-dashboard:before,
.fa-tachometer:before {
  content: "\\f0e4";
}
.fa-comment-o:before {
  content: "\\f0e5";
}
.fa-comments-o:before {
  content: "\\f0e6";
}
.fa-flash:before,
.fa-bolt:before {
  content: "\\f0e7";
}
.fa-sitemap:before {
  content: "\\f0e8";
}
.fa-umbrella:before {
  content: "\\f0e9";
}
.fa-paste:before,
.fa-clipboard:before {
  content: "\\f0ea";
}
.fa-lightbulb-o:before {
  content: "\\f0eb";
}
.fa-exchange:before {
  content: "\\f0ec";
}
.fa-cloud-download:before {
  content: "\\f0ed";
}
.fa-cloud-upload:before {
  content: "\\f0ee";
}
.fa-user-md:before {
  content: "\\f0f0";
}
.fa-stethoscope:before {
  content: "\\f0f1";
}
.fa-suitcase:before {
  content: "\\f0f2";
}
.fa-bell-o:before {
  content: "\\f0a2";
}
.fa-coffee:before {
  content: "\\f0f4";
}
.fa-cutlery:before {
  content: "\\f0f5";
}
.fa-file-text-o:before {
  content: "\\f0f6";
}
.fa-building-o:before {
  content: "\\f0f7";
}
.fa-hospital-o:before {
  content: "\\f0f8";
}
.fa-ambulance:before {
  content: "\\f0f9";
}
.fa-medkit:before {
  content: "\\f0fa";
}
.fa-fighter-jet:before {
  content: "\\f0fb";
}
.fa-beer:before {
  content: "\\f0fc";
}
.fa-h-square:before {
  content: "\\f0fd";
}
.fa-plus-square:before {
  content: "\\f0fe";
}
.fa-angle-double-left:before {
  content: "\\f100";
}
.fa-angle-double-right:before {
  content: "\\f101";
}
.fa-angle-double-up:before {
  content: "\\f102";
}
.fa-angle-double-down:before {
  content: "\\f103";
}
.fa-angle-left:before {
  content: "\\f104";
}
.fa-angle-right:before {
  content: "\\f105";
}
.fa-angle-up:before {
  content: "\\f106";
}
.fa-angle-down:before {
  content: "\\f107";
}
.fa-desktop:before {
  content: "\\f108";
}
.fa-laptop:before {
  content: "\\f109";
}
.fa-tablet:before {
  content: "\\f10a";
}
.fa-mobile-phone:before,
.fa-mobile:before {
  content: "\\f10b";
}
.fa-circle-o:before {
  content: "\\f10c";
}
.fa-quote-left:before {
  content: "\\f10d";
}
.fa-quote-right:before {
  content: "\\f10e";
}
.fa-spinner:before {
  content: "\\f110";
}
.fa-circle:before {
  content: "\\f111";
}
.fa-mail-reply:before,
.fa-reply:before {
  content: "\\f112";
}
.fa-github-alt:before {
  content: "\\f113";
}
.fa-folder-o:before {
  content: "\\f114";
}
.fa-folder-open-o:before {
  content: "\\f115";
}
.fa-smile-o:before {
  content: "\\f118";
}
.fa-frown-o:before {
  content: "\\f119";
}
.fa-meh-o:before {
  content: "\\f11a";
}
.fa-gamepad:before {
  content: "\\f11b";
}
.fa-keyboard-o:before {
  content: "\\f11c";
}
.fa-flag-o:before {
  content: "\\f11d";
}
.fa-flag-checkered:before {
  content: "\\f11e";
}
.fa-terminal:before {
  content: "\\f120";
}
.fa-code:before {
  content: "\\f121";
}
.fa-mail-reply-all:before,
.fa-reply-all:before {
  content: "\\f122";
}
.fa-star-half-empty:before,
.fa-star-half-full:before,
.fa-star-half-o:before {
  content: "\\f123";
}
.fa-location-arrow:before {
  content: "\\f124";
}
.fa-crop:before {
  content: "\\f125";
}
.fa-code-fork:before {
  content: "\\f126";
}
.fa-unlink:before,
.fa-chain-broken:before {
  content: "\\f127";
}
.fa-question:before {
  content: "\\f128";
}
.fa-info:before {
  content: "\\f129";
}
.fa-exclamation:before {
  content: "\\f12a";
}
.fa-superscript:before {
  content: "\\f12b";
}
.fa-subscript:before {
  content: "\\f12c";
}
.fa-eraser:before {
  content: "\\f12d";
}
.fa-puzzle-piece:before {
  content: "\\f12e";
}
.fa-microphone:before {
  content: "\\f130";
}
.fa-microphone-slash:before {
  content: "\\f131";
}
.fa-shield:before {
  content: "\\f132";
}
.fa-calendar-o:before {
  content: "\\f133";
}
.fa-fire-extinguisher:before {
  content: "\\f134";
}
.fa-rocket:before {
  content: "\\f135";
}
.fa-maxcdn:before {
  content: "\\f136";
}
.fa-chevron-circle-left:before {
  content: "\\f137";
}
.fa-chevron-circle-right:before {
  content: "\\f138";
}
.fa-chevron-circle-up:before {
  content: "\\f139";
}
.fa-chevron-circle-down:before {
  content: "\\f13a";
}
.fa-html5:before {
  content: "\\f13b";
}
.fa-css3:before {
  content: "\\f13c";
}
.fa-anchor:before {
  content: "\\f13d";
}
.fa-unlock-alt:before {
  content: "\\f13e";
}
.fa-bullseye:before {
  content: "\\f140";
}
.fa-ellipsis-h:before {
  content: "\\f141";
}
.fa-ellipsis-v:before {
  content: "\\f142";
}
.fa-rss-square:before {
  content: "\\f143";
}
.fa-play-circle:before {
  content: "\\f144";
}
.fa-ticket:before {
  content: "\\f145";
}
.fa-minus-square:before {
  content: "\\f146";
}
.fa-minus-square-o:before {
  content: "\\f147";
}
.fa-level-up:before {
  content: "\\f148";
}
.fa-level-down:before {
  content: "\\f149";
}
.fa-check-square:before {
  content: "\\f14a";
}
.fa-pencil-square:before {
  content: "\\f14b";
}
.fa-external-link-square:before {
  content: "\\f14c";
}
.fa-share-square:before {
  content: "\\f14d";
}
.fa-compass:before {
  content: "\\f14e";
}
.fa-toggle-down:before,
.fa-caret-square-o-down:before {
  content: "\\f150";
}
.fa-toggle-up:before,
.fa-caret-square-o-up:before {
  content: "\\f151";
}
.fa-toggle-right:before,
.fa-caret-square-o-right:before {
  content: "\\f152";
}
.fa-euro:before,
.fa-eur:before {
  content: "\\f153";
}
.fa-gbp:before {
  content: "\\f154";
}
.fa-dollar:before,
.fa-usd:before {
  content: "\\f155";
}
.fa-rupee:before,
.fa-inr:before {
  content: "\\f156";
}
.fa-cny:before,
.fa-rmb:before,
.fa-yen:before,
.fa-jpy:before {
  content: "\\f157";
}
.fa-ruble:before,
.fa-rouble:before,
.fa-rub:before {
  content: "\\f158";
}
.fa-won:before,
.fa-krw:before {
  content: "\\f159";
}
.fa-bitcoin:before,
.fa-btc:before {
  content: "\\f15a";
}
.fa-file:before {
  content: "\\f15b";
}
.fa-file-text:before {
  content: "\\f15c";
}
.fa-sort-alpha-asc:before {
  content: "\\f15d";
}
.fa-sort-alpha-desc:before {
  content: "\\f15e";
}
.fa-sort-amount-asc:before {
  content: "\\f160";
}
.fa-sort-amount-desc:before {
  content: "\\f161";
}
.fa-sort-numeric-asc:before {
  content: "\\f162";
}
.fa-sort-numeric-desc:before {
  content: "\\f163";
}
.fa-thumbs-up:before {
  content: "\\f164";
}
.fa-thumbs-down:before {
  content: "\\f165";
}
.fa-youtube-square:before {
  content: "\\f166";
}
.fa-youtube:before {
  content: "\\f167";
}
.fa-xing:before {
  content: "\\f168";
}
.fa-xing-square:before {
  content: "\\f169";
}
.fa-youtube-play:before {
  content: "\\f16a";
}
.fa-dropbox:before {
  content: "\\f16b";
}
.fa-stack-overflow:before {
  content: "\\f16c";
}
.fa-instagram:before {
  content: "\\f16d";
}
.fa-flickr:before {
  content: "\\f16e";
}
.fa-adn:before {
  content: "\\f170";
}
.fa-bitbucket:before {
  content: "\\f171";
}
.fa-bitbucket-square:before {
  content: "\\f172";
}
.fa-tumblr:before {
  content: "\\f173";
}
.fa-tumblr-square:before {
  content: "\\f174";
}
.fa-long-arrow-down:before {
  content: "\\f175";
}
.fa-long-arrow-up:before {
  content: "\\f176";
}
.fa-long-arrow-left:before {
  content: "\\f177";
}
.fa-long-arrow-right:before {
  content: "\\f178";
}
.fa-apple:before {
  content: "\\f179";
}
.fa-windows:before {
  content: "\\f17a";
}
.fa-android:before {
  content: "\\f17b";
}
.fa-linux:before {
  content: "\\f17c";
}
.fa-dribbble:before {
  content: "\\f17d";
}
.fa-skype:before {
  content: "\\f17e";
}
.fa-foursquare:before {
  content: "\\f180";
}
.fa-trello:before {
  content: "\\f181";
}
.fa-female:before {
  content: "\\f182";
}
.fa-male:before {
  content: "\\f183";
}
.fa-gittip:before,
.fa-gratipay:before {
  content: "\\f184";
}
.fa-sun-o:before {
  content: "\\f185";
}
.fa-moon-o:before {
  content: "\\f186";
}
.fa-archive:before {
  content: "\\f187";
}
.fa-bug:before {
  content: "\\f188";
}
.fa-vk:before {
  content: "\\f189";
}
.fa-weibo:before {
  content: "\\f18a";
}
.fa-renren:before {
  content: "\\f18b";
}
.fa-pagelines:before {
  content: "\\f18c";
}
.fa-stack-exchange:before {
  content: "\\f18d";
}
.fa-arrow-circle-o-right:before {
  content: "\\f18e";
}
.fa-arrow-circle-o-left:before {
  content: "\\f190";
}
.fa-toggle-left:before,
.fa-caret-square-o-left:before {
  content: "\\f191";
}
.fa-dot-circle-o:before {
  content: "\\f192";
}
.fa-wheelchair:before {
  content: "\\f193";
}
.fa-vimeo-square:before {
  content: "\\f194";
}
.fa-turkish-lira:before,
.fa-try:before {
  content: "\\f195";
}
.fa-plus-square-o:before {
  content: "\\f196";
}
.fa-space-shuttle:before {
  content: "\\f197";
}
.fa-slack:before {
  content: "\\f198";
}
.fa-envelope-square:before {
  content: "\\f199";
}
.fa-wordpress:before {
  content: "\\f19a";
}
.fa-openid:before {
  content: "\\f19b";
}
.fa-institution:before,
.fa-bank:before,
.fa-university:before {
  content: "\\f19c";
}
.fa-mortar-board:before,
.fa-graduation-cap:before {
  content: "\\f19d";
}
.fa-yahoo:before {
  content: "\\f19e";
}
.fa-google:before {
  content: "\\f1a0";
}
.fa-reddit:before {
  content: "\\f1a1";
}
.fa-reddit-square:before {
  content: "\\f1a2";
}
.fa-stumbleupon-circle:before {
  content: "\\f1a3";
}
.fa-stumbleupon:before {
  content: "\\f1a4";
}
.fa-delicious:before {
  content: "\\f1a5";
}
.fa-digg:before {
  content: "\\f1a6";
}
.fa-pied-piper-pp:before {
  content: "\\f1a7";
}
.fa-pied-piper-alt:before {
  content: "\\f1a8";
}
.fa-drupal:before {
  content: "\\f1a9";
}
.fa-joomla:before {
  content: "\\f1aa";
}
.fa-language:before {
  content: "\\f1ab";
}
.fa-fax:before {
  content: "\\f1ac";
}
.fa-building:before {
  content: "\\f1ad";
}
.fa-child:before {
  content: "\\f1ae";
}
.fa-paw:before {
  content: "\\f1b0";
}
.fa-spoon:before {
  content: "\\f1b1";
}
.fa-cube:before {
  content: "\\f1b2";
}
.fa-cubes:before {
  content: "\\f1b3";
}
.fa-behance:before {
  content: "\\f1b4";
}
.fa-behance-square:before {
  content: "\\f1b5";
}
.fa-steam:before {
  content: "\\f1b6";
}
.fa-steam-square:before {
  content: "\\f1b7";
}
.fa-recycle:before {
  content: "\\f1b8";
}
.fa-automobile:before,
.fa-car:before {
  content: "\\f1b9";
}
.fa-cab:before,
.fa-taxi:before {
  content: "\\f1ba";
}
.fa-tree:before {
  content: "\\f1bb";
}
.fa-spotify:before {
  content: "\\f1bc";
}
.fa-deviantart:before {
  content: "\\f1bd";
}
.fa-soundcloud:before {
  content: "\\f1be";
}
.fa-database:before {
  content: "\\f1c0";
}
.fa-file-pdf-o:before {
  content: "\\f1c1";
}
.fa-file-word-o:before {
  content: "\\f1c2";
}
.fa-file-excel-o:before {
  content: "\\f1c3";
}
.fa-file-powerpoint-o:before {
  content: "\\f1c4";
}
.fa-file-photo-o:before,
.fa-file-picture-o:before,
.fa-file-image-o:before {
  content: "\\f1c5";
}
.fa-file-zip-o:before,
.fa-file-archive-o:before {
  content: "\\f1c6";
}
.fa-file-sound-o:before,
.fa-file-audio-o:before {
  content: "\\f1c7";
}
.fa-file-movie-o:before,
.fa-file-video-o:before {
  content: "\\f1c8";
}
.fa-file-code-o:before {
  content: "\\f1c9";
}
.fa-vine:before {
  content: "\\f1ca";
}
.fa-codepen:before {
  content: "\\f1cb";
}
.fa-jsfiddle:before {
  content: "\\f1cc";
}
.fa-life-bouy:before,
.fa-life-buoy:before,
.fa-life-saver:before,
.fa-support:before,
.fa-life-ring:before {
  content: "\\f1cd";
}
.fa-circle-o-notch:before {
  content: "\\f1ce";
}
.fa-ra:before,
.fa-resistance:before,
.fa-rebel:before {
  content: "\\f1d0";
}
.fa-ge:before,
.fa-empire:before {
  content: "\\f1d1";
}
.fa-git-square:before {
  content: "\\f1d2";
}
.fa-git:before {
  content: "\\f1d3";
}
.fa-y-combinator-square:before,
.fa-yc-square:before,
.fa-hacker-news:before {
  content: "\\f1d4";
}
.fa-tencent-weibo:before {
  content: "\\f1d5";
}
.fa-qq:before {
  content: "\\f1d6";
}
.fa-wechat:before,
.fa-weixin:before {
  content: "\\f1d7";
}
.fa-send:before,
.fa-paper-plane:before {
  content: "\\f1d8";
}
.fa-send-o:before,
.fa-paper-plane-o:before {
  content: "\\f1d9";
}
.fa-history:before {
  content: "\\f1da";
}
.fa-circle-thin:before {
  content: "\\f1db";
}
.fa-header:before {
  content: "\\f1dc";
}
.fa-paragraph:before {
  content: "\\f1dd";
}
.fa-sliders:before {
  content: "\\f1de";
}
.fa-share-alt:before {
  content: "\\f1e0";
}
.fa-share-alt-square:before {
  content: "\\f1e1";
}
.fa-bomb:before {
  content: "\\f1e2";
}
.fa-soccer-ball-o:before,
.fa-futbol-o:before {
  content: "\\f1e3";
}
.fa-tty:before {
  content: "\\f1e4";
}
.fa-binoculars:before {
  content: "\\f1e5";
}
.fa-plug:before {
  content: "\\f1e6";
}
.fa-slideshare:before {
  content: "\\f1e7";
}
.fa-twitch:before {
  content: "\\f1e8";
}
.fa-yelp:before {
  content: "\\f1e9";
}
.fa-newspaper-o:before {
  content: "\\f1ea";
}
.fa-wifi:before {
  content: "\\f1eb";
}
.fa-calculator:before {
  content: "\\f1ec";
}
.fa-paypal:before {
  content: "\\f1ed";
}
.fa-google-wallet:before {
  content: "\\f1ee";
}
.fa-cc-visa:before {
  content: "\\f1f0";
}
.fa-cc-mastercard:before {
  content: "\\f1f1";
}
.fa-cc-discover:before {
  content: "\\f1f2";
}
.fa-cc-amex:before {
  content: "\\f1f3";
}
.fa-cc-paypal:before {
  content: "\\f1f4";
}
.fa-cc-stripe:before {
  content: "\\f1f5";
}
.fa-bell-slash:before {
  content: "\\f1f6";
}
.fa-bell-slash-o:before {
  content: "\\f1f7";
}
.fa-trash:before {
  content: "\\f1f8";
}
.fa-copyright:before {
  content: "\\f1f9";
}
.fa-at:before {
  content: "\\f1fa";
}
.fa-eyedropper:before {
  content: "\\f1fb";
}
.fa-paint-brush:before {
  content: "\\f1fc";
}
.fa-birthday-cake:before {
  content: "\\f1fd";
}
.fa-area-chart:before {
  content: "\\f1fe";
}
.fa-pie-chart:before {
  content: "\\f200";
}
.fa-line-chart:before {
  content: "\\f201";
}
.fa-lastfm:before {
  content: "\\f202";
}
.fa-lastfm-square:before {
  content: "\\f203";
}
.fa-toggle-off:before {
  content: "\\f204";
}
.fa-toggle-on:before {
  content: "\\f205";
}
.fa-bicycle:before {
  content: "\\f206";
}
.fa-bus:before {
  content: "\\f207";
}
.fa-ioxhost:before {
  content: "\\f208";
}
.fa-angellist:before {
  content: "\\f209";
}
.fa-cc:before {
  content: "\\f20a";
}
.fa-shekel:before,
.fa-sheqel:before,
.fa-ils:before {
  content: "\\f20b";
}
.fa-meanpath:before {
  content: "\\f20c";
}
.fa-buysellads:before {
  content: "\\f20d";
}
.fa-connectdevelop:before {
  content: "\\f20e";
}
.fa-dashcube:before {
  content: "\\f210";
}
.fa-forumbee:before {
  content: "\\f211";
}
.fa-leanpub:before {
  content: "\\f212";
}
.fa-sellsy:before {
  content: "\\f213";
}
.fa-shirtsinbulk:before {
  content: "\\f214";
}
.fa-simplybuilt:before {
  content: "\\f215";
}
.fa-skyatlas:before {
  content: "\\f216";
}
.fa-cart-plus:before {
  content: "\\f217";
}
.fa-cart-arrow-down:before {
  content: "\\f218";
}
.fa-diamond:before {
  content: "\\f219";
}
.fa-ship:before {
  content: "\\f21a";
}
.fa-user-secret:before {
  content: "\\f21b";
}
.fa-motorcycle:before {
  content: "\\f21c";
}
.fa-street-view:before {
  content: "\\f21d";
}
.fa-heartbeat:before {
  content: "\\f21e";
}
.fa-venus:before {
  content: "\\f221";
}
.fa-mars:before {
  content: "\\f222";
}
.fa-mercury:before {
  content: "\\f223";
}
.fa-intersex:before,
.fa-transgender:before {
  content: "\\f224";
}
.fa-transgender-alt:before {
  content: "\\f225";
}
.fa-venus-double:before {
  content: "\\f226";
}
.fa-mars-double:before {
  content: "\\f227";
}
.fa-venus-mars:before {
  content: "\\f228";
}
.fa-mars-stroke:before {
  content: "\\f229";
}
.fa-mars-stroke-v:before {
  content: "\\f22a";
}
.fa-mars-stroke-h:before {
  content: "\\f22b";
}
.fa-neuter:before {
  content: "\\f22c";
}
.fa-genderless:before {
  content: "\\f22d";
}
.fa-facebook-official:before {
  content: "\\f230";
}
.fa-pinterest-p:before {
  content: "\\f231";
}
.fa-whatsapp:before {
  content: "\\f232";
}
.fa-server:before {
  content: "\\f233";
}
.fa-user-plus:before {
  content: "\\f234";
}
.fa-user-times:before {
  content: "\\f235";
}
.fa-hotel:before,
.fa-bed:before {
  content: "\\f236";
}
.fa-viacoin:before {
  content: "\\f237";
}
.fa-train:before {
  content: "\\f238";
}
.fa-subway:before {
  content: "\\f239";
}
.fa-medium:before {
  content: "\\f23a";
}
.fa-yc:before,
.fa-y-combinator:before {
  content: "\\f23b";
}
.fa-optin-monster:before {
  content: "\\f23c";
}
.fa-opencart:before {
  content: "\\f23d";
}
.fa-expeditedssl:before {
  content: "\\f23e";
}
.fa-battery-4:before,
.fa-battery:before,
.fa-battery-full:before {
  content: "\\f240";
}
.fa-battery-3:before,
.fa-battery-three-quarters:before {
  content: "\\f241";
}
.fa-battery-2:before,
.fa-battery-half:before {
  content: "\\f242";
}
.fa-battery-1:before,
.fa-battery-quarter:before {
  content: "\\f243";
}
.fa-battery-0:before,
.fa-battery-empty:before {
  content: "\\f244";
}
.fa-mouse-pointer:before {
  content: "\\f245";
}
.fa-i-cursor:before {
  content: "\\f246";
}
.fa-object-group:before {
  content: "\\f247";
}
.fa-object-ungroup:before {
  content: "\\f248";
}
.fa-sticky-note:before {
  content: "\\f249";
}
.fa-sticky-note-o:before {
  content: "\\f24a";
}
.fa-cc-jcb:before {
  content: "\\f24b";
}
.fa-cc-diners-club:before {
  content: "\\f24c";
}
.fa-clone:before {
  content: "\\f24d";
}
.fa-balance-scale:before {
  content: "\\f24e";
}
.fa-hourglass-o:before {
  content: "\\f250";
}
.fa-hourglass-1:before,
.fa-hourglass-start:before {
  content: "\\f251";
}
.fa-hourglass-2:before,
.fa-hourglass-half:before {
  content: "\\f252";
}
.fa-hourglass-3:before,
.fa-hourglass-end:before {
  content: "\\f253";
}
.fa-hourglass:before {
  content: "\\f254";
}
.fa-hand-grab-o:before,
.fa-hand-rock-o:before {
  content: "\\f255";
}
.fa-hand-stop-o:before,
.fa-hand-paper-o:before {
  content: "\\f256";
}
.fa-hand-scissors-o:before {
  content: "\\f257";
}
.fa-hand-lizard-o:before {
  content: "\\f258";
}
.fa-hand-spock-o:before {
  content: "\\f259";
}
.fa-hand-pointer-o:before {
  content: "\\f25a";
}
.fa-hand-peace-o:before {
  content: "\\f25b";
}
.fa-trademark:before {
  content: "\\f25c";
}
.fa-registered:before {
  content: "\\f25d";
}
.fa-creative-commons:before {
  content: "\\f25e";
}
.fa-gg:before {
  content: "\\f260";
}
.fa-gg-circle:before {
  content: "\\f261";
}
.fa-tripadvisor:before {
  content: "\\f262";
}
.fa-odnoklassniki:before {
  content: "\\f263";
}
.fa-odnoklassniki-square:before {
  content: "\\f264";
}
.fa-get-pocket:before {
  content: "\\f265";
}
.fa-wikipedia-w:before {
  content: "\\f266";
}
.fa-safari:before {
  content: "\\f267";
}
.fa-chrome:before {
  content: "\\f268";
}
.fa-firefox:before {
  content: "\\f269";
}
.fa-opera:before {
  content: "\\f26a";
}
.fa-internet-explorer:before {
  content: "\\f26b";
}
.fa-tv:before,
.fa-television:before {
  content: "\\f26c";
}
.fa-contao:before {
  content: "\\f26d";
}
.fa-500px:before {
  content: "\\f26e";
}
.fa-amazon:before {
  content: "\\f270";
}
.fa-calendar-plus-o:before {
  content: "\\f271";
}
.fa-calendar-minus-o:before {
  content: "\\f272";
}
.fa-calendar-times-o:before {
  content: "\\f273";
}
.fa-calendar-check-o:before {
  content: "\\f274";
}
.fa-industry:before {
  content: "\\f275";
}
.fa-map-pin:before {
  content: "\\f276";
}
.fa-map-signs:before {
  content: "\\f277";
}
.fa-map-o:before {
  content: "\\f278";
}
.fa-map:before {
  content: "\\f279";
}
.fa-commenting:before {
  content: "\\f27a";
}
.fa-commenting-o:before {
  content: "\\f27b";
}
.fa-houzz:before {
  content: "\\f27c";
}
.fa-vimeo:before {
  content: "\\f27d";
}
.fa-black-tie:before {
  content: "\\f27e";
}
.fa-fonticons:before {
  content: "\\f280";
}
.fa-reddit-alien:before {
  content: "\\f281";
}
.fa-edge:before {
  content: "\\f282";
}
.fa-credit-card-alt:before {
  content: "\\f283";
}
.fa-codiepie:before {
  content: "\\f284";
}
.fa-modx:before {
  content: "\\f285";
}
.fa-fort-awesome:before {
  content: "\\f286";
}
.fa-usb:before {
  content: "\\f287";
}
.fa-product-hunt:before {
  content: "\\f288";
}
.fa-mixcloud:before {
  content: "\\f289";
}
.fa-scribd:before {
  content: "\\f28a";
}
.fa-pause-circle:before {
  content: "\\f28b";
}
.fa-pause-circle-o:before {
  content: "\\f28c";
}
.fa-stop-circle:before {
  content: "\\f28d";
}
.fa-stop-circle-o:before {
  content: "\\f28e";
}
.fa-shopping-bag:before {
  content: "\\f290";
}
.fa-shopping-basket:before {
  content: "\\f291";
}
.fa-hashtag:before {
  content: "\\f292";
}
.fa-bluetooth:before {
  content: "\\f293";
}
.fa-bluetooth-b:before {
  content: "\\f294";
}
.fa-percent:before {
  content: "\\f295";
}
.fa-gitlab:before {
  content: "\\f296";
}
.fa-wpbeginner:before {
  content: "\\f297";
}
.fa-wpforms:before {
  content: "\\f298";
}
.fa-envira:before {
  content: "\\f299";
}
.fa-universal-access:before {
  content: "\\f29a";
}
.fa-wheelchair-alt:before {
  content: "\\f29b";
}
.fa-question-circle-o:before {
  content: "\\f29c";
}
.fa-blind:before {
  content: "\\f29d";
}
.fa-audio-description:before {
  content: "\\f29e";
}
.fa-volume-control-phone:before {
  content: "\\f2a0";
}
.fa-braille:before {
  content: "\\f2a1";
}
.fa-assistive-listening-systems:before {
  content: "\\f2a2";
}
.fa-asl-interpreting:before,
.fa-american-sign-language-interpreting:before {
  content: "\\f2a3";
}
.fa-deafness:before,
.fa-hard-of-hearing:before,
.fa-deaf:before {
  content: "\\f2a4";
}
.fa-glide:before {
  content: "\\f2a5";
}
.fa-glide-g:before {
  content: "\\f2a6";
}
.fa-signing:before,
.fa-sign-language:before {
  content: "\\f2a7";
}
.fa-low-vision:before {
  content: "\\f2a8";
}
.fa-viadeo:before {
  content: "\\f2a9";
}
.fa-viadeo-square:before {
  content: "\\f2aa";
}
.fa-snapchat:before {
  content: "\\f2ab";
}
.fa-snapchat-ghost:before {
  content: "\\f2ac";
}
.fa-snapchat-square:before {
  content: "\\f2ad";
}
.fa-pied-piper:before {
  content: "\\f2ae";
}
.fa-first-order:before {
  content: "\\f2b0";
}
.fa-yoast:before {
  content: "\\f2b1";
}
.fa-themeisle:before {
  content: "\\f2b2";
}
.fa-google-plus-circle:before,
.fa-google-plus-official:before {
  content: "\\f2b3";
}
.fa-fa:before,
.fa-font-awesome:before {
  content: "\\f2b4";
}
.fa-handshake-o:before {
  content: "\\f2b5";
}
.fa-envelope-open:before {
  content: "\\f2b6";
}
.fa-envelope-open-o:before {
  content: "\\f2b7";
}
.fa-linode:before {
  content: "\\f2b8";
}
.fa-address-book:before {
  content: "\\f2b9";
}
.fa-address-book-o:before {
  content: "\\f2ba";
}
.fa-vcard:before,
.fa-address-card:before {
  content: "\\f2bb";
}
.fa-vcard-o:before,
.fa-address-card-o:before {
  content: "\\f2bc";
}
.fa-user-circle:before {
  content: "\\f2bd";
}
.fa-user-circle-o:before {
  content: "\\f2be";
}
.fa-user-o:before {
  content: "\\f2c0";
}
.fa-id-badge:before {
  content: "\\f2c1";
}
.fa-drivers-license:before,
.fa-id-card:before {
  content: "\\f2c2";
}
.fa-drivers-license-o:before,
.fa-id-card-o:before {
  content: "\\f2c3";
}
.fa-quora:before {
  content: "\\f2c4";
}
.fa-free-code-camp:before {
  content: "\\f2c5";
}
.fa-telegram:before {
  content: "\\f2c6";
}
.fa-thermometer-4:before,
.fa-thermometer:before,
.fa-thermometer-full:before {
  content: "\\f2c7";
}
.fa-thermometer-3:before,
.fa-thermometer-three-quarters:before {
  content: "\\f2c8";
}
.fa-thermometer-2:before,
.fa-thermometer-half:before {
  content: "\\f2c9";
}
.fa-thermometer-1:before,
.fa-thermometer-quarter:before {
  content: "\\f2ca";
}
.fa-thermometer-0:before,
.fa-thermometer-empty:before {
  content: "\\f2cb";
}
.fa-shower:before {
  content: "\\f2cc";
}
.fa-bathtub:before,
.fa-s15:before,
.fa-bath:before {
  content: "\\f2cd";
}
.fa-podcast:before {
  content: "\\f2ce";
}
.fa-window-maximize:before {
  content: "\\f2d0";
}
.fa-window-minimize:before {
  content: "\\f2d1";
}
.fa-window-restore:before {
  content: "\\f2d2";
}
.fa-times-rectangle:before,
.fa-window-close:before {
  content: "\\f2d3";
}
.fa-times-rectangle-o:before,
.fa-window-close-o:before {
  content: "\\f2d4";
}
.fa-bandcamp:before {
  content: "\\f2d5";
}
.fa-grav:before {
  content: "\\f2d6";
}
.fa-etsy:before {
  content: "\\f2d7";
}
.fa-imdb:before {
  content: "\\f2d8";
}
.fa-ravelry:before {
  content: "\\f2d9";
}
.fa-eercast:before {
  content: "\\f2da";
}
.fa-microchip:before {
  content: "\\f2db";
}
.fa-snowflake-o:before {
  content: "\\f2dc";
}
.fa-superpowers:before {
  content: "\\f2dd";
}
.fa-wpexplorer:before {
  content: "\\f2de";
}
.fa-meetup:before {
  content: "\\f2e0";
}
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}
.sr-only-focusable:active,
.sr-only-focusable:focus {
  position: static;
  width: auto;
  height: auto;
  margin: 0;
  overflow: visible;
  clip: auto;
}
.sr-only-focusable:active,
.sr-only-focusable:focus {
  position: static;
  width: auto;
  height: auto;
  margin: 0;
  overflow: visible;
  clip: auto;
}
/*!
*
* IPython base
*
*/
.modal.fade .modal-dialog {
  -webkit-transform: translate(0, 0);
  -ms-transform: translate(0, 0);
  -o-transform: translate(0, 0);
  transform: translate(0, 0);
}
code {
  color: #000;
}
pre {
  font-size: inherit;
  line-height: inherit;
}
label {
  font-weight: normal;
}
/* Make the page background atleast 100% the height of the view port */
/* Make the page itself atleast 70% the height of the view port */
.border-box-sizing {
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
.corner-all {
  border-radius: 2px;
}
.no-padding {
  padding: 0px;
}
/* Flexible box model classes */
/* Taken from Alex Russell http://infrequently.org/2009/08/css-3-progress/ */
/* This file is a compatability layer.  It allows the usage of flexible box 
model layouts accross multiple browsers, including older browsers.  The newest,
universal implementation of the flexible box model is used when available (see
\`Modern browsers\` comments below).  Browsers that are known to implement this 
new spec completely include:

    Firefox 28.0+
    Chrome 29.0+
    Internet Explorer 11+ 
    Opera 17.0+

Browsers not listed, including Safari, are supported via the styling under the
\`Old browsers\` comments below.
*/
.hbox {
  /* Old browsers */
  display: -webkit-box;
  -webkit-box-orient: horizontal;
  -webkit-box-align: stretch;
  display: -moz-box;
  -moz-box-orient: horizontal;
  -moz-box-align: stretch;
  display: box;
  box-orient: horizontal;
  box-align: stretch;
  /* Modern browsers */
  display: flex;
  flex-direction: row;
  align-items: stretch;
}
.hbox > * {
  /* Old browsers */
  -webkit-box-flex: 0;
  -moz-box-flex: 0;
  box-flex: 0;
  /* Modern browsers */
  flex: none;
}
.vbox {
  /* Old browsers */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-box-align: stretch;
  display: -moz-box;
  -moz-box-orient: vertical;
  -moz-box-align: stretch;
  display: box;
  box-orient: vertical;
  box-align: stretch;
  /* Modern browsers */
  display: flex;
  flex-direction: column;
  align-items: stretch;
}
.vbox > * {
  /* Old browsers */
  -webkit-box-flex: 0;
  -moz-box-flex: 0;
  box-flex: 0;
  /* Modern browsers */
  flex: none;
}
.hbox.reverse,
.vbox.reverse,
.reverse {
  /* Old browsers */
  -webkit-box-direction: reverse;
  -moz-box-direction: reverse;
  box-direction: reverse;
  /* Modern browsers */
  flex-direction: row-reverse;
}
.hbox.box-flex0,
.vbox.box-flex0,
.box-flex0 {
  /* Old browsers */
  -webkit-box-flex: 0;
  -moz-box-flex: 0;
  box-flex: 0;
  /* Modern browsers */
  flex: none;
  width: auto;
}
.hbox.box-flex1,
.vbox.box-flex1,
.box-flex1 {
  /* Old browsers */
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  box-flex: 1;
  /* Modern browsers */
  flex: 1;
}
.hbox.box-flex,
.vbox.box-flex,
.box-flex {
  /* Old browsers */
  /* Old browsers */
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  box-flex: 1;
  /* Modern browsers */
  flex: 1;
}
.hbox.box-flex2,
.vbox.box-flex2,
.box-flex2 {
  /* Old browsers */
  -webkit-box-flex: 2;
  -moz-box-flex: 2;
  box-flex: 2;
  /* Modern browsers */
  flex: 2;
}
.box-group1 {
  /*  Deprecated */
  -webkit-box-flex-group: 1;
  -moz-box-flex-group: 1;
  box-flex-group: 1;
}
.box-group2 {
  /* Deprecated */
  -webkit-box-flex-group: 2;
  -moz-box-flex-group: 2;
  box-flex-group: 2;
}
.hbox.start,
.vbox.start,
.start {
  /* Old browsers */
  -webkit-box-pack: start;
  -moz-box-pack: start;
  box-pack: start;
  /* Modern browsers */
  justify-content: flex-start;
}
.hbox.end,
.vbox.end,
.end {
  /* Old browsers */
  -webkit-box-pack: end;
  -moz-box-pack: end;
  box-pack: end;
  /* Modern browsers */
  justify-content: flex-end;
}
.hbox.center,
.vbox.center,
.center {
  /* Old browsers */
  -webkit-box-pack: center;
  -moz-box-pack: center;
  box-pack: center;
  /* Modern browsers */
  justify-content: center;
}
.hbox.baseline,
.vbox.baseline,
.baseline {
  /* Old browsers */
  -webkit-box-pack: baseline;
  -moz-box-pack: baseline;
  box-pack: baseline;
  /* Modern browsers */
  justify-content: baseline;
}
.hbox.stretch,
.vbox.stretch,
.stretch {
  /* Old browsers */
  -webkit-box-pack: stretch;
  -moz-box-pack: stretch;
  box-pack: stretch;
  /* Modern browsers */
  justify-content: stretch;
}
.hbox.align-start,
.vbox.align-start,
.align-start {
  /* Old browsers */
  -webkit-box-align: start;
  -moz-box-align: start;
  box-align: start;
  /* Modern browsers */
  align-items: flex-start;
}
.hbox.align-end,
.vbox.align-end,
.align-end {
  /* Old browsers */
  -webkit-box-align: end;
  -moz-box-align: end;
  box-align: end;
  /* Modern browsers */
  align-items: flex-end;
}
.hbox.align-center,
.vbox.align-center,
.align-center {
  /* Old browsers */
  -webkit-box-align: center;
  -moz-box-align: center;
  box-align: center;
  /* Modern browsers */
  align-items: center;
}
.hbox.align-baseline,
.vbox.align-baseline,
.align-baseline {
  /* Old browsers */
  -webkit-box-align: baseline;
  -moz-box-align: baseline;
  box-align: baseline;
  /* Modern browsers */
  align-items: baseline;
}
.hbox.align-stretch,
.vbox.align-stretch,
.align-stretch {
  /* Old browsers */
  -webkit-box-align: stretch;
  -moz-box-align: stretch;
  box-align: stretch;
  /* Modern browsers */
  align-items: stretch;
}
div.error {
  margin: 2em;
  text-align: center;
}
div.error > h1 {
  font-size: 500%;
  line-height: normal;
}
div.error > p {
  font-size: 200%;
  line-height: normal;
}
div.traceback-wrapper {
  text-align: left;
  max-width: 800px;
  margin: auto;
}
div.traceback-wrapper pre.traceback {
  max-height: 600px;
  overflow: auto;
}
/**
 * Primary styles
 *
 * Author: Jupyter Development Team
 */
body {
  background-color: #fff;
  /* This makes sure that the body covers the entire window and needs to
       be in a different element than the display: box in wrapper below */
  position: absolute;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
  overflow: visible;
}
body > #header {
  /* Initially hidden to prevent FLOUC */
  display: none;
  background-color: #fff;
  /* Display over codemirror */
  position: relative;
  z-index: 100;
}
body > #header #header-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px;
  padding-bottom: 5px;
  padding-top: 5px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
body > #header .header-bar {
  width: 100%;
  height: 1px;
  background: #e7e7e7;
  margin-bottom: -1px;
}
@media print {
  body > #header {
    display: none !important;
  }
}
#header-spacer {
  width: 100%;
  visibility: hidden;
}
@media print {
  #header-spacer {
    display: none;
  }
}
#ipython_notebook {
  padding-left: 0px;
  padding-top: 1px;
  padding-bottom: 1px;
}
[dir="rtl"] #ipython_notebook {
  margin-right: 10px;
  margin-left: 0;
}
[dir="rtl"] #ipython_notebook.pull-left {
  float: right !important;
  float: right;
}
.flex-spacer {
  flex: 1;
}
#noscript {
  width: auto;
  padding-top: 16px;
  padding-bottom: 16px;
  text-align: center;
  font-size: 22px;
  color: red;
  font-weight: bold;
}
#ipython_notebook img {
  height: 28px;
}
#site {
  width: 100%;
  display: none;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  overflow: auto;
}
@media print {
  #site {
    height: auto !important;
  }
}
/* Smaller buttons */
.ui-button .ui-button-text {
  padding: 0.2em 0.8em;
  font-size: 77%;
}
input.ui-button {
  padding: 0.3em 0.9em;
}
span#kernel_logo_widget {
  margin: 0 10px;
}
span#login_widget {
  float: right;
}
[dir="rtl"] span#login_widget {
  float: left;
}
span#login_widget > .button,
#logout {
  color: #333;
  background-color: #fff;
  border-color: #ccc;
}
span#login_widget > .button:focus,
#logout:focus,
span#login_widget > .button.focus,
#logout.focus {
  color: #333;
  background-color: #e6e6e6;
  border-color: #8c8c8c;
}
span#login_widget > .button:hover,
#logout:hover {
  color: #333;
  background-color: #e6e6e6;
  border-color: #adadad;
}
span#login_widget > .button:active,
#logout:active,
span#login_widget > .button.active,
#logout.active,
.open > .dropdown-togglespan#login_widget > .button,
.open > .dropdown-toggle#logout {
  color: #333;
  background-color: #e6e6e6;
  border-color: #adadad;
}
span#login_widget > .button:active:hover,
#logout:active:hover,
span#login_widget > .button.active:hover,
#logout.active:hover,
.open > .dropdown-togglespan#login_widget > .button:hover,
.open > .dropdown-toggle#logout:hover,
span#login_widget > .button:active:focus,
#logout:active:focus,
span#login_widget > .button.active:focus,
#logout.active:focus,
.open > .dropdown-togglespan#login_widget > .button:focus,
.open > .dropdown-toggle#logout:focus,
span#login_widget > .button:active.focus,
#logout:active.focus,
span#login_widget > .button.active.focus,
#logout.active.focus,
.open > .dropdown-togglespan#login_widget > .button.focus,
.open > .dropdown-toggle#logout.focus {
  color: #333;
  background-color: #d4d4d4;
  border-color: #8c8c8c;
}
span#login_widget > .button:active,
#logout:active,
span#login_widget > .button.active,
#logout.active,
.open > .dropdown-togglespan#login_widget > .button,
.open > .dropdown-toggle#logout {
  background-image: none;
}
span#login_widget > .button.disabled:hover,
#logout.disabled:hover,
span#login_widget > .button[disabled]:hover,
#logout[disabled]:hover,
fieldset[disabled] span#login_widget > .button:hover,
fieldset[disabled] #logout:hover,
span#login_widget > .button.disabled:focus,
#logout.disabled:focus,
span#login_widget > .button[disabled]:focus,
#logout[disabled]:focus,
fieldset[disabled] span#login_widget > .button:focus,
fieldset[disabled] #logout:focus,
span#login_widget > .button.disabled.focus,
#logout.disabled.focus,
span#login_widget > .button[disabled].focus,
#logout[disabled].focus,
fieldset[disabled] span#login_widget > .button.focus,
fieldset[disabled] #logout.focus {
  background-color: #fff;
  border-color: #ccc;
}
span#login_widget > .button .badge,
#logout .badge {
  color: #fff;
  background-color: #333;
}
.nav-header {
  text-transform: none;
}
#header > span {
  margin-top: 10px;
}
.modal_stretch .modal-dialog {
  /* Old browsers */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-box-align: stretch;
  display: -moz-box;
  -moz-box-orient: vertical;
  -moz-box-align: stretch;
  display: box;
  box-orient: vertical;
  box-align: stretch;
  /* Modern browsers */
  display: flex;
  flex-direction: column;
  align-items: stretch;
  min-height: 80vh;
}
.modal_stretch .modal-dialog .modal-body {
  max-height: calc(100vh - 200px);
  overflow: auto;
  flex: 1;
}
.modal-header {
  cursor: move;
}
@media (min-width: 768px) {
  .modal .modal-dialog {
    width: 700px;
  }
}
@media (min-width: 768px) {
  select.form-control {
    margin-left: 12px;
    margin-right: 12px;
  }
}
/*!
*
* IPython auth
*
*/
.center-nav {
  display: inline-block;
  margin-bottom: -4px;
}
[dir="rtl"] .center-nav form.pull-left {
  float: right !important;
  float: right;
}
[dir="rtl"] .center-nav .navbar-text {
  float: right;
}
[dir="rtl"] .navbar-inner {
  text-align: right;
}
[dir="rtl"] div.text-left {
  text-align: right;
}
/*!
*
* IPython tree view
*
*/
/* We need an invisible input field on top of the sentense*/
/* "Drag file onto the list ..." */
.alternate_upload {
  background-color: none;
  display: inline;
}
.alternate_upload.form {
  padding: 0;
  margin: 0;
}
.alternate_upload input.fileinput {
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  overflow: hidden;
  cursor: pointer;
  opacity: 0;
  z-index: 2;
}
.alternate_upload .btn-xs > input.fileinput {
  margin: -1px -5px;
}
.alternate_upload .btn-upload {
  position: relative;
  height: 22px;
}
::-webkit-file-upload-button {
  cursor: pointer;
}
/**
 * Primary styles
 *
 * Author: Jupyter Development Team
 */
ul#tabs {
  margin-bottom: 4px;
}
ul#tabs a {
  padding-top: 6px;
  padding-bottom: 4px;
}
[dir="rtl"] ul#tabs.nav-tabs > li {
  float: right;
}
[dir="rtl"] ul#tabs.nav.nav-tabs {
  padding-right: 0;
}
ul.breadcrumb a:focus,
ul.breadcrumb a:hover {
  text-decoration: none;
}
ul.breadcrumb i.icon-home {
  font-size: 16px;
  margin-right: 4px;
}
ul.breadcrumb span {
  color: #5e5e5e;
}
.list_toolbar {
  padding: 4px 0 4px 0;
  vertical-align: middle;
}
.list_toolbar .tree-buttons {
  padding-top: 1px;
}
[dir="rtl"] .list_toolbar .tree-buttons .pull-right {
  float: left !important;
  float: left;
}
[dir="rtl"] .list_toolbar .col-sm-4,
[dir="rtl"] .list_toolbar .col-sm-8 {
  float: right;
}
.dynamic-buttons {
  padding-top: 3px;
  display: inline-block;
}
.list_toolbar [class*="span"] {
  min-height: 24px;
}
.list_header {
  font-weight: bold;
  background-color: #EEE;
}
.list_placeholder {
  font-weight: bold;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 7px;
  padding-right: 7px;
}
.list_container {
  margin-top: 4px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 2px;
}
.list_container > div {
  border-bottom: 1px solid #ddd;
}
.list_container > div:hover .list-item {
  background-color: red;
}
.list_container > div:last-child {
  border: none;
}
.list_item:hover .list_item {
  background-color: #ddd;
}
.list_item a {
  text-decoration: none;
}
.list_item:hover {
  background-color: #fafafa;
}
.list_header > div,
.list_item > div {
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 7px;
  padding-right: 7px;
  line-height: 22px;
}
.list_header > div input,
.list_item > div input {
  margin-right: 7px;
  margin-left: 14px;
  vertical-align: text-bottom;
  line-height: 22px;
  position: relative;
  top: -1px;
}
.list_header > div .item_link,
.list_item > div .item_link {
  margin-left: -1px;
  vertical-align: baseline;
  line-height: 22px;
}
[dir="rtl"] .list_item > div input {
  margin-right: 0;
}
.new-file input[type=checkbox] {
  visibility: hidden;
}
.item_name {
  line-height: 22px;
  height: 24px;
}
.item_icon {
  font-size: 14px;
  color: #5e5e5e;
  margin-right: 7px;
  margin-left: 7px;
  line-height: 22px;
  vertical-align: baseline;
}
.item_modified {
  margin-right: 7px;
  margin-left: 7px;
}
[dir="rtl"] .item_modified.pull-right {
  float: left !important;
  float: left;
}
.item_buttons {
  line-height: 1em;
  margin-left: -5px;
}
.item_buttons .btn,
.item_buttons .btn-group,
.item_buttons .input-group {
  float: left;
}
.item_buttons > .btn,
.item_buttons > .btn-group,
.item_buttons > .input-group {
  margin-left: 5px;
}
.item_buttons .btn {
  min-width: 13ex;
}
.item_buttons .running-indicator {
  padding-top: 4px;
  color: #5cb85c;
}
.item_buttons .kernel-name {
  padding-top: 4px;
  color: #5bc0de;
  margin-right: 7px;
  float: left;
}
[dir="rtl"] .item_buttons.pull-right {
  float: left !important;
  float: left;
}
[dir="rtl"] .item_buttons .kernel-name {
  margin-left: 7px;
  float: right;
}
.toolbar_info {
  height: 24px;
  line-height: 24px;
}
.list_item input:not([type=checkbox]) {
  padding-top: 3px;
  padding-bottom: 3px;
  height: 22px;
  line-height: 14px;
  margin: 0px;
}
.highlight_text {
  color: blue;
}
#project_name {
  display: inline-block;
  padding-left: 7px;
  margin-left: -2px;
}
#project_name > .breadcrumb {
  padding: 0px;
  margin-bottom: 0px;
  background-color: transparent;
  font-weight: bold;
}
.sort_button {
  display: inline-block;
  padding-left: 7px;
}
[dir="rtl"] .sort_button.pull-right {
  float: left !important;
  float: left;
}
#tree-selector {
  padding-right: 0px;
}
#button-select-all {
  min-width: 50px;
}
[dir="rtl"] #button-select-all.btn {
  float: right ;
}
#select-all {
  margin-left: 7px;
  margin-right: 2px;
  margin-top: 2px;
  height: 16px;
}
[dir="rtl"] #select-all.pull-left {
  float: right !important;
  float: right;
}
.menu_icon {
  margin-right: 2px;
}
.tab-content .row {
  margin-left: 0px;
  margin-right: 0px;
}
.folder_icon:before {
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  content: "\\f114";
}
.folder_icon:before.fa-pull-left {
  margin-right: .3em;
}
.folder_icon:before.fa-pull-right {
  margin-left: .3em;
}
.folder_icon:before.pull-left {
  margin-right: .3em;
}
.folder_icon:before.pull-right {
  margin-left: .3em;
}
.notebook_icon:before {
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  content: "\\f02d";
  position: relative;
  top: -1px;
}
.notebook_icon:before.fa-pull-left {
  margin-right: .3em;
}
.notebook_icon:before.fa-pull-right {
  margin-left: .3em;
}
.notebook_icon:before.pull-left {
  margin-right: .3em;
}
.notebook_icon:before.pull-right {
  margin-left: .3em;
}
.running_notebook_icon:before {
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  content: "\\f02d";
  position: relative;
  top: -1px;
  color: #5cb85c;
}
.running_notebook_icon:before.fa-pull-left {
  margin-right: .3em;
}
.running_notebook_icon:before.fa-pull-right {
  margin-left: .3em;
}
.running_notebook_icon:before.pull-left {
  margin-right: .3em;
}
.running_notebook_icon:before.pull-right {
  margin-left: .3em;
}
.file_icon:before {
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  content: "\\f016";
  position: relative;
  top: -2px;
}
.file_icon:before.fa-pull-left {
  margin-right: .3em;
}
.file_icon:before.fa-pull-right {
  margin-left: .3em;
}
.file_icon:before.pull-left {
  margin-right: .3em;
}
.file_icon:before.pull-right {
  margin-left: .3em;
}
#notebook_toolbar .pull-right {
  padding-top: 0px;
  margin-right: -1px;
}
ul#new-menu {
  left: auto;
  right: 0;
}
#new-menu .dropdown-header {
  font-size: 10px;
  border-bottom: 1px solid #e5e5e5;
  padding: 0 0 3px;
  margin: -3px 20px 0;
}
.kernel-menu-icon {
  padding-right: 12px;
  width: 24px;
  content: "\\f096";
}
.kernel-menu-icon:before {
  content: "\\f096";
}
.kernel-menu-icon-current:before {
  content: "\\f00c";
}
#tab_content {
  padding-top: 20px;
}
#running .panel-group .panel {
  margin-top: 3px;
  margin-bottom: 1em;
}
#running .panel-group .panel .panel-heading {
  background-color: #EEE;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 7px;
  padding-right: 7px;
  line-height: 22px;
}
#running .panel-group .panel .panel-heading a:focus,
#running .panel-group .panel .panel-heading a:hover {
  text-decoration: none;
}
#running .panel-group .panel .panel-body {
  padding: 0px;
}
#running .panel-group .panel .panel-body .list_container {
  margin-top: 0px;
  margin-bottom: 0px;
  border: 0px;
  border-radius: 0px;
}
#running .panel-group .panel .panel-body .list_container .list_item {
  border-bottom: 1px solid #ddd;
}
#running .panel-group .panel .panel-body .list_container .list_item:last-child {
  border-bottom: 0px;
}
.delete-button {
  display: none;
}
.duplicate-button {
  display: none;
}
.rename-button {
  display: none;
}
.move-button {
  display: none;
}
.download-button {
  display: none;
}
.shutdown-button {
  display: none;
}
.dynamic-instructions {
  display: inline-block;
  padding-top: 4px;
}
/*!
*
* IPython text editor webapp
*
*/
.selected-keymap i.fa {
  padding: 0px 5px;
}
.selected-keymap i.fa:before {
  content: "\\f00c";
}
#mode-menu {
  overflow: auto;
  max-height: 20em;
}
.edit_app #header {
  -webkit-box-shadow: 0px 0px 12px 1px rgba(87, 87, 87, 0.2);
  box-shadow: 0px 0px 12px 1px rgba(87, 87, 87, 0.2);
}
.edit_app #menubar .navbar {
  /* Use a negative 1 bottom margin, so the border overlaps the border of the
    header */
  margin-bottom: -1px;
}
.dirty-indicator {
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 20px;
}
.dirty-indicator.fa-pull-left {
  margin-right: .3em;
}
.dirty-indicator.fa-pull-right {
  margin-left: .3em;
}
.dirty-indicator.pull-left {
  margin-right: .3em;
}
.dirty-indicator.pull-right {
  margin-left: .3em;
}
.dirty-indicator-dirty {
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 20px;
}
.dirty-indicator-dirty.fa-pull-left {
  margin-right: .3em;
}
.dirty-indicator-dirty.fa-pull-right {
  margin-left: .3em;
}
.dirty-indicator-dirty.pull-left {
  margin-right: .3em;
}
.dirty-indicator-dirty.pull-right {
  margin-left: .3em;
}
.dirty-indicator-clean {
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 20px;
}
.dirty-indicator-clean.fa-pull-left {
  margin-right: .3em;
}
.dirty-indicator-clean.fa-pull-right {
  margin-left: .3em;
}
.dirty-indicator-clean.pull-left {
  margin-right: .3em;
}
.dirty-indicator-clean.pull-right {
  margin-left: .3em;
}
.dirty-indicator-clean:before {
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  content: "\\f00c";
}
.dirty-indicator-clean:before.fa-pull-left {
  margin-right: .3em;
}
.dirty-indicator-clean:before.fa-pull-right {
  margin-left: .3em;
}
.dirty-indicator-clean:before.pull-left {
  margin-right: .3em;
}
.dirty-indicator-clean:before.pull-right {
  margin-left: .3em;
}
#filename {
  font-size: 16pt;
  display: table;
  padding: 0px 5px;
}
#current-mode {
  padding-left: 5px;
  padding-right: 5px;
}
#texteditor-backdrop {
  padding-top: 20px;
  padding-bottom: 20px;
}
@media not print {
  #texteditor-backdrop {
    background-color: #EEE;
  }
}
@media print {
  #texteditor-backdrop #texteditor-container .CodeMirror-gutter,
  #texteditor-backdrop #texteditor-container .CodeMirror-gutters {
    background-color: #fff;
  }
}
@media not print {
  #texteditor-backdrop #texteditor-container .CodeMirror-gutter,
  #texteditor-backdrop #texteditor-container .CodeMirror-gutters {
    background-color: #fff;
  }
}
@media not print {
  #texteditor-backdrop #texteditor-container {
    padding: 0px;
    background-color: #fff;
    -webkit-box-shadow: 0px 0px 12px 1px rgba(87, 87, 87, 0.2);
    box-shadow: 0px 0px 12px 1px rgba(87, 87, 87, 0.2);
  }
}
.CodeMirror-dialog {
  background-color: #fff;
}
/*!
*
* IPython notebook
*
*/
/* CSS font colors for translated ANSI escape sequences */
/* The color values are a mix of
   http://www.xcolors.net/dl/baskerville-ivorylight and
   http://www.xcolors.net/dl/euphrasia */
.ansi-black-fg {
  color: #3E424D;
}
.ansi-black-bg {
  background-color: #3E424D;
}
.ansi-black-intense-fg {
  color: #282C36;
}
.ansi-black-intense-bg {
  background-color: #282C36;
}
.ansi-red-fg {
  color: #E75C58;
}
.ansi-red-bg {
  background-color: #E75C58;
}
.ansi-red-intense-fg {
  color: #B22B31;
}
.ansi-red-intense-bg {
  background-color: #B22B31;
}
.ansi-green-fg {
  color: #00A250;
}
.ansi-green-bg {
  background-color: #00A250;
}
.ansi-green-intense-fg {
  color: #007427;
}
.ansi-green-intense-bg {
  background-color: #007427;
}
.ansi-yellow-fg {
  color: #DDB62B;
}
.ansi-yellow-bg {
  background-color: #DDB62B;
}
.ansi-yellow-intense-fg {
  color: #B27D12;
}
.ansi-yellow-intense-bg {
  background-color: #B27D12;
}
.ansi-blue-fg {
  color: #208FFB;
}
.ansi-blue-bg {
  background-color: #208FFB;
}
.ansi-blue-intense-fg {
  color: #0065CA;
}
.ansi-blue-intense-bg {
  background-color: #0065CA;
}
.ansi-magenta-fg {
  color: #D160C4;
}
.ansi-magenta-bg {
  background-color: #D160C4;
}
.ansi-magenta-intense-fg {
  color: #A03196;
}
.ansi-magenta-intense-bg {
  background-color: #A03196;
}
.ansi-cyan-fg {
  color: #60C6C8;
}
.ansi-cyan-bg {
  background-color: #60C6C8;
}
.ansi-cyan-intense-fg {
  color: #258F8F;
}
.ansi-cyan-intense-bg {
  background-color: #258F8F;
}
.ansi-white-fg {
  color: #C5C1B4;
}
.ansi-white-bg {
  background-color: #C5C1B4;
}
.ansi-white-intense-fg {
  color: #A1A6B2;
}
.ansi-white-intense-bg {
  background-color: #A1A6B2;
}
.ansi-default-inverse-fg {
  color: #FFFFFF;
}
.ansi-default-inverse-bg {
  background-color: #000000;
}
.ansi-bold {
  font-weight: bold;
}
.ansi-underline {
  text-decoration: underline;
}
/* The following styles are deprecated an will be removed in a future version */
.ansibold {
  font-weight: bold;
}
.ansi-inverse {
  outline: 0.5px dotted;
}
/* use dark versions for foreground, to improve visibility */
.ansiblack {
  color: black;
}
.ansired {
  color: darkred;
}
.ansigreen {
  color: darkgreen;
}
.ansiyellow {
  color: #c4a000;
}
.ansiblue {
  color: darkblue;
}
.ansipurple {
  color: darkviolet;
}
.ansicyan {
  color: steelblue;
}
.ansigray {
  color: gray;
}
/* and light for background, for the same reason */
.ansibgblack {
  background-color: black;
}
.ansibgred {
  background-color: red;
}
.ansibggreen {
  background-color: green;
}
.ansibgyellow {
  background-color: yellow;
}
.ansibgblue {
  background-color: blue;
}
.ansibgpurple {
  background-color: magenta;
}
.ansibgcyan {
  background-color: cyan;
}
.ansibggray {
  background-color: gray;
}
div.cell {
  /* Old browsers */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-box-align: stretch;
  display: -moz-box;
  -moz-box-orient: vertical;
  -moz-box-align: stretch;
  display: box;
  box-orient: vertical;
  box-align: stretch;
  /* Modern browsers */
  display: flex;
  flex-direction: column;
  align-items: stretch;
  border-radius: 2px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  border-width: 1px;
  border-style: solid;
  border-color: transparent;
  width: 100%;
  padding: 5px;
  /* This acts as a spacer between cells, that is outside the border */
  margin: 0px;
  outline: none;
  position: relative;
  overflow: visible;
}
div.cell:before {
  position: absolute;
  display: block;
  top: -1px;
  left: -1px;
  width: 5px;
  height: calc(100% +  2px);
  content: '';
  background: transparent;
}
div.cell.jupyter-soft-selected {
  border-left-color: #E3F2FD;
  border-left-width: 1px;
  padding-left: 5px;
  border-right-color: #E3F2FD;
  border-right-width: 1px;
  background: #E3F2FD;
}
@media print {
  div.cell.jupyter-soft-selected {
    border-color: transparent;
  }
}
div.cell.selected,
div.cell.selected.jupyter-soft-selected {
  border-color: #ababab;
}
div.cell.selected:before,
div.cell.selected.jupyter-soft-selected:before {
  position: absolute;
  display: block;
  top: -1px;
  left: -1px;
  width: 5px;
  height: calc(100% +  2px);
  content: '';
  background: #42A5F5;
}
@media print {
  div.cell.selected,
  div.cell.selected.jupyter-soft-selected {
    border-color: transparent;
  }
}
.edit_mode div.cell.selected {
  border-color: #66BB6A;
}
.edit_mode div.cell.selected:before {
  position: absolute;
  display: block;
  top: -1px;
  left: -1px;
  width: 5px;
  height: calc(100% +  2px);
  content: '';
  background: #66BB6A;
}
@media print {
  .edit_mode div.cell.selected {
    border-color: transparent;
  }
}
.prompt {
  /* This needs to be wide enough for 3 digit prompt numbers: In[100]: */
  min-width: 14ex;
  /* This padding is tuned to match the padding on the CodeMirror editor. */
  padding: 0.4em;
  margin: 0px;
  font-family: monospace;
  text-align: right;
  /* This has to match that of the the CodeMirror class line-height below */
  line-height: 1.21429em;
  /* Don't highlight prompt number selection */
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  /* Use default cursor */
  cursor: default;
}
@media (max-width: 540px) {
  .prompt {
    text-align: left;
  }
}
div.inner_cell {
  min-width: 0;
  /* Old browsers */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-box-align: stretch;
  display: -moz-box;
  -moz-box-orient: vertical;
  -moz-box-align: stretch;
  display: box;
  box-orient: vertical;
  box-align: stretch;
  /* Modern browsers */
  display: flex;
  flex-direction: column;
  align-items: stretch;
  /* Old browsers */
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  box-flex: 1;
  /* Modern browsers */
  flex: 1;
}
/* input_area and input_prompt must match in top border and margin for alignment */
div.input_area {
  border: 1px solid #cfcfcf;
  border-radius: 2px;
  background: #f7f7f7;
  line-height: 1.21429em;
}
/* This is needed so that empty prompt areas can collapse to zero height when there
   is no content in the output_subarea and the prompt. The main purpose of this is
   to make sure that empty JavaScript output_subareas have no height. */
div.prompt:empty {
  padding-top: 0;
  padding-bottom: 0;
}
div.unrecognized_cell {
  padding: 5px 5px 5px 0px;
  /* Old browsers */
  display: -webkit-box;
  -webkit-box-orient: horizontal;
  -webkit-box-align: stretch;
  display: -moz-box;
  -moz-box-orient: horizontal;
  -moz-box-align: stretch;
  display: box;
  box-orient: horizontal;
  box-align: stretch;
  /* Modern browsers */
  display: flex;
  flex-direction: row;
  align-items: stretch;
}
div.unrecognized_cell .inner_cell {
  border-radius: 2px;
  padding: 5px;
  font-weight: bold;
  color: red;
  border: 1px solid #cfcfcf;
  background: #eaeaea;
}
div.unrecognized_cell .inner_cell a {
  color: inherit;
  text-decoration: none;
}
div.unrecognized_cell .inner_cell a:hover {
  color: inherit;
  text-decoration: none;
}
@media (max-width: 540px) {
  div.unrecognized_cell > div.prompt {
    display: none;
  }
}
div.code_cell {
  /* avoid page breaking on code cells when printing */
}
@media print {
  div.code_cell {
    page-break-inside: avoid;
  }
}
/* any special styling for code cells that are currently running goes here */
div.input {
  page-break-inside: avoid;
  /* Old browsers */
  display: -webkit-box;
  -webkit-box-orient: horizontal;
  -webkit-box-align: stretch;
  display: -moz-box;
  -moz-box-orient: horizontal;
  -moz-box-align: stretch;
  display: box;
  box-orient: horizontal;
  box-align: stretch;
  /* Modern browsers */
  display: flex;
  flex-direction: row;
  align-items: stretch;
}
@media (max-width: 540px) {
  div.input {
    /* Old browsers */
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-box-align: stretch;
    display: -moz-box;
    -moz-box-orient: vertical;
    -moz-box-align: stretch;
    display: box;
    box-orient: vertical;
    box-align: stretch;
    /* Modern browsers */
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }
}
/* input_area and input_prompt must match in top border and margin for alignment */
div.input_prompt {
  color: #303F9F;
  border-top: 1px solid transparent;
}
div.input_area > div.highlight {
  margin: 0.4em;
  border: none;
  padding: 0px;
  background-color: transparent;
}
div.input_area > div.highlight > pre {
  margin: 0px;
  border: none;
  padding: 0px;
  background-color: transparent;
}
/* The following gets added to the <head> if it is detected that the user has a
 * monospace font with inconsistent normal/bold/italic height.  See
 * notebookmain.js.  Such fonts will have keywords vertically offset with
 * respect to the rest of the text.  The user should select a better font.
 * See: https://github.com/ipython/ipython/issues/1503
 *
 * .CodeMirror span {
 *      vertical-align: bottom;
 * }
 */
.CodeMirror {
  line-height: 1.21429em;
  /* Changed from 1em to our global default */
  font-size: 14px;
  height: auto;
  /* Changed to auto to autogrow */
  background: none;
  /* Changed from white to allow our bg to show through */
}
.CodeMirror-scroll {
  /*  The CodeMirror docs are a bit fuzzy on if overflow-y should be hidden or visible.*/
  /*  We have found that if it is visible, vertical scrollbars appear with font size changes.*/
  overflow-y: hidden;
  overflow-x: auto;
}
.CodeMirror-lines {
  /* In CM2, this used to be 0.4em, but in CM3 it went to 4px. We need the em value because */
  /* we have set a different line-height and want this to scale with that. */
  /* Note that this should set vertical padding only, since CodeMirror assumes
       that horizontal padding will be set on CodeMirror pre */
  padding: 0.4em 0;
}
.CodeMirror-linenumber {
  padding: 0 8px 0 4px;
}
.CodeMirror-gutters {
  border-bottom-left-radius: 2px;
  border-top-left-radius: 2px;
}
.CodeMirror pre {
  /* In CM3 this went to 4px from 0 in CM2. This sets horizontal padding only,
    use .CodeMirror-lines for vertical */
  padding: 0 0.4em;
  border: 0;
  border-radius: 0;
}
.CodeMirror-cursor {
  border-left: 1.4px solid black;
}
@media screen and (min-width: 2138px) and (max-width: 4319px) {
  .CodeMirror-cursor {
    border-left: 2px solid black;
  }
}
@media screen and (min-width: 4320px) {
  .CodeMirror-cursor {
    border-left: 4px solid black;
  }
}
/*

Original style from softwaremaniacs.org (c) Ivan Sagalaev <Maniac@SoftwareManiacs.Org>
Adapted from GitHub theme

*/
.highlight-base {
  color: #000;
}
.highlight-variable {
  color: #000;
}
.highlight-variable-2 {
  color: #1a1a1a;
}
.highlight-variable-3 {
  color: #333333;
}
.highlight-string {
  color: #BA2121;
}
.highlight-comment {
  color: #408080;
  font-style: italic;
}
.highlight-number {
  color: #080;
}
.highlight-atom {
  color: #88F;
}
.highlight-keyword {
  color: #008000;
  font-weight: bold;
}
.highlight-builtin {
  color: #008000;
}
.highlight-error {
  color: #f00;
}
.highlight-operator {
  color: #AA22FF;
  font-weight: bold;
}
.highlight-meta {
  color: #AA22FF;
}
/* previously not defined, copying from default codemirror */
.highlight-def {
  color: #00f;
}
.highlight-string-2 {
  color: #f50;
}
.highlight-qualifier {
  color: #555;
}
.highlight-bracket {
  color: #997;
}
.highlight-tag {
  color: #170;
}
.highlight-attribute {
  color: #00c;
}
.highlight-header {
  color: blue;
}
.highlight-quote {
  color: #090;
}
.highlight-link {
  color: #00c;
}
/* apply the same style to codemirror */
.cm-s-ipython span.cm-keyword {
  color: #008000;
  font-weight: bold;
}
.cm-s-ipython span.cm-atom {
  color: #88F;
}
.cm-s-ipython span.cm-number {
  color: #080;
}
.cm-s-ipython span.cm-def {
  color: #00f;
}
.cm-s-ipython span.cm-variable {
  color: #000;
}
.cm-s-ipython span.cm-operator {
  color: #AA22FF;
  font-weight: bold;
}
.cm-s-ipython span.cm-variable-2 {
  color: #1a1a1a;
}
.cm-s-ipython span.cm-variable-3 {
  color: #333333;
}
.cm-s-ipython span.cm-comment {
  color: #408080;
  font-style: italic;
}
.cm-s-ipython span.cm-string {
  color: #BA2121;
}
.cm-s-ipython span.cm-string-2 {
  color: #f50;
}
.cm-s-ipython span.cm-meta {
  color: #AA22FF;
}
.cm-s-ipython span.cm-qualifier {
  color: #555;
}
.cm-s-ipython span.cm-builtin {
  color: #008000;
}
.cm-s-ipython span.cm-bracket {
  color: #997;
}
.cm-s-ipython span.cm-tag {
  color: #170;
}
.cm-s-ipython span.cm-attribute {
  color: #00c;
}
.cm-s-ipython span.cm-header {
  color: blue;
}
.cm-s-ipython span.cm-quote {
  color: #090;
}
.cm-s-ipython span.cm-link {
  color: #00c;
}
.cm-s-ipython span.cm-error {
  color: #f00;
}
.cm-s-ipython span.cm-tab {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAMCAYAAAAkuj5RAAAAAXNSR0IArs4c6QAAAGFJREFUSMft1LsRQFAQheHPowAKoACx3IgEKtaEHujDjORSgWTH/ZOdnZOcM/sgk/kFFWY0qV8foQwS4MKBCS3qR6ixBJvElOobYAtivseIE120FaowJPN75GMu8j/LfMwNjh4HUpwg4LUAAAAASUVORK5CYII=);
  background-position: right;
  background-repeat: no-repeat;
}
div.output_wrapper {
  /* this position must be relative to enable descendents to be absolute within it */
  position: relative;
  /* Old browsers */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-box-align: stretch;
  display: -moz-box;
  -moz-box-orient: vertical;
  -moz-box-align: stretch;
  display: box;
  box-orient: vertical;
  box-align: stretch;
  /* Modern browsers */
  display: flex;
  flex-direction: column;
  align-items: stretch;
  z-index: 1;
}
/* class for the output area when it should be height-limited */
div.output_scroll {
  /* ideally, this would be max-height, but FF barfs all over that */
  height: 24em;
  /* FF needs this *and the wrapper* to specify full width, or it will shrinkwrap */
  width: 100%;
  overflow: auto;
  border-radius: 2px;
  -webkit-box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.8);
  box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.8);
  display: block;
}
/* output div while it is collapsed */
div.output_collapsed {
  margin: 0px;
  padding: 0px;
  /* Old browsers */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-box-align: stretch;
  display: -moz-box;
  -moz-box-orient: vertical;
  -moz-box-align: stretch;
  display: box;
  box-orient: vertical;
  box-align: stretch;
  /* Modern browsers */
  display: flex;
  flex-direction: column;
  align-items: stretch;
}
div.out_prompt_overlay {
  height: 100%;
  padding: 0px 0.4em;
  position: absolute;
  border-radius: 2px;
}
div.out_prompt_overlay:hover {
  /* use inner shadow to get border that is computed the same on WebKit/FF */
  -webkit-box-shadow: inset 0 0 1px #000;
  box-shadow: inset 0 0 1px #000;
  background: rgba(240, 240, 240, 0.5);
}
div.output_prompt {
  color: #D84315;
}
/* This class is the outer container of all output sections. */
div.output_area {
  padding: 0px;
  page-break-inside: avoid;
  /* Old browsers */
  display: -webkit-box;
  -webkit-box-orient: horizontal;
  -webkit-box-align: stretch;
  display: -moz-box;
  -moz-box-orient: horizontal;
  -moz-box-align: stretch;
  display: box;
  box-orient: horizontal;
  box-align: stretch;
  /* Modern browsers */
  display: flex;
  flex-direction: row;
  align-items: stretch;
}
div.output_area .MathJax_Display {
  text-align: left !important;
}
div.output_area .rendered_html table {
  margin-left: 0;
  margin-right: 0;
}
div.output_area .rendered_html img {
  margin-left: 0;
  margin-right: 0;
}
div.output_area img,
div.output_area svg {
  max-width: 100%;
  height: auto;
}
div.output_area img.unconfined,
div.output_area svg.unconfined {
  max-width: none;
}
div.output_area .mglyph > img {
  max-width: none;
}
/* This is needed to protect the pre formating from global settings such
   as that of bootstrap */
.output {
  /* Old browsers */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-box-align: stretch;
  display: -moz-box;
  -moz-box-orient: vertical;
  -moz-box-align: stretch;
  display: box;
  box-orient: vertical;
  box-align: stretch;
  /* Modern browsers */
  display: flex;
  flex-direction: column;
  align-items: stretch;
}
@media (max-width: 540px) {
  div.output_area {
    /* Old browsers */
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-box-align: stretch;
    display: -moz-box;
    -moz-box-orient: vertical;
    -moz-box-align: stretch;
    display: box;
    box-orient: vertical;
    box-align: stretch;
    /* Modern browsers */
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }
}
div.output_area pre {
  margin: 0;
  padding: 1px 0 1px 0;
  border: 0;
  vertical-align: baseline;
  color: black;
  background-color: transparent;
  border-radius: 0;
}
/* This class is for the output subarea inside the output_area and after
   the prompt div. */
div.output_subarea {
  overflow-x: auto;
  padding: 0.4em;
  /* Old browsers */
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  box-flex: 1;
  /* Modern browsers */
  flex: 1;
  max-width: calc(100% - 14ex);
}
div.output_scroll div.output_subarea {
  overflow-x: visible;
}
/* The rest of the output_* classes are for special styling of the different
   output types */
/* all text output has this class: */
div.output_text {
  text-align: left;
  color: #000;
  /* This has to match that of the the CodeMirror class line-height below */
  line-height: 1.21429em;
}
/* stdout/stderr are 'text' as well as 'stream', but execute_result/error are *not* streams */
div.output_stderr {
  background: #fdd;
  /* very light red background for stderr */
}
div.output_latex {
  text-align: left;
}
/* Empty output_javascript divs should have no height */
div.output_javascript:empty {
  padding: 0;
}
.js-error {
  color: darkred;
}
/* raw_input styles */
div.raw_input_container {
  line-height: 1.21429em;
  padding-top: 5px;
}
pre.raw_input_prompt {
  /* nothing needed here. */
}
input.raw_input {
  font-family: monospace;
  font-size: inherit;
  color: inherit;
  width: auto;
  /* make sure input baseline aligns with prompt */
  vertical-align: baseline;
  /* padding + margin = 0.5em between prompt and cursor */
  padding: 0em 0.25em;
  margin: 0em 0.25em;
}
input.raw_input:focus {
  box-shadow: none;
}
p.p-space {
  margin-bottom: 10px;
}
div.output_unrecognized {
  padding: 5px;
  font-weight: bold;
  color: red;
}
div.output_unrecognized a {
  color: inherit;
  text-decoration: none;
}
div.output_unrecognized a:hover {
  color: inherit;
  text-decoration: none;
}
.rendered_html {
  color: #000;
  /* any extras will just be numbers: */
}
.rendered_html em {
  font-style: italic;
}
.rendered_html strong {
  font-weight: bold;
}
.rendered_html u {
  text-decoration: underline;
}
.rendered_html :link {
  text-decoration: underline;
}
.rendered_html :visited {
  text-decoration: underline;
}
.rendered_html h1 {
  font-size: 185.7%;
  margin: 1.08em 0 0 0;
  font-weight: bold;
  line-height: 1.0;
}
.rendered_html h2 {
  font-size: 157.1%;
  margin: 1.27em 0 0 0;
  font-weight: bold;
  line-height: 1.0;
}
.rendered_html h3 {
  font-size: 128.6%;
  margin: 1.55em 0 0 0;
  font-weight: bold;
  line-height: 1.0;
}
.rendered_html h4 {
  font-size: 100%;
  margin: 2em 0 0 0;
  font-weight: bold;
  line-height: 1.0;
}
.rendered_html h5 {
  font-size: 100%;
  margin: 2em 0 0 0;
  font-weight: bold;
  line-height: 1.0;
  font-style: italic;
}
.rendered_html h6 {
  font-size: 100%;
  margin: 2em 0 0 0;
  font-weight: bold;
  line-height: 1.0;
  font-style: italic;
}
.rendered_html h1:first-child {
  margin-top: 0.538em;
}
.rendered_html h2:first-child {
  margin-top: 0.636em;
}
.rendered_html h3:first-child {
  margin-top: 0.777em;
}
.rendered_html h4:first-child {
  margin-top: 1em;
}
.rendered_html h5:first-child {
  margin-top: 1em;
}
.rendered_html h6:first-child {
  margin-top: 1em;
}
.rendered_html ul:not(.list-inline),
.rendered_html ol:not(.list-inline) {
  padding-left: 2em;
}
.rendered_html ul {
  list-style: disc;
}
.rendered_html ul ul {
  list-style: square;
  margin-top: 0;
}
.rendered_html ul ul ul {
  list-style: circle;
}
.rendered_html ol {
  list-style: decimal;
}
.rendered_html ol ol {
  list-style: upper-alpha;
  margin-top: 0;
}
.rendered_html ol ol ol {
  list-style: lower-alpha;
}
.rendered_html ol ol ol ol {
  list-style: lower-roman;
}
.rendered_html ol ol ol ol ol {
  list-style: decimal;
}
.rendered_html * + ul {
  margin-top: 1em;
}
.rendered_html * + ol {
  margin-top: 1em;
}
.rendered_html hr {
  color: black;
  background-color: black;
}
.rendered_html pre {
  margin: 1em 2em;
  padding: 0px;
  background-color: #fff;
}
.rendered_html code {
  background-color: #eff0f1;
}
.rendered_html p code {
  padding: 1px 5px;
}
.rendered_html pre code {
  background-color: #fff;
}
.rendered_html pre,
.rendered_html code {
  border: 0;
  color: #000;
  font-size: 100%;
}
.rendered_html blockquote {
  margin: 1em 2em;
}
.rendered_html table {
  margin-left: auto;
  margin-right: auto;
  border: none;
  border-collapse: collapse;
  border-spacing: 0;
  color: black;
  font-size: 12px;
  table-layout: fixed;
}
.rendered_html thead {
  border-bottom: 1px solid black;
  vertical-align: bottom;
}
.rendered_html tr,
.rendered_html th,
.rendered_html td {
  text-align: right;
  vertical-align: middle;
  padding: 0.5em 0.5em;
  line-height: normal;
  white-space: normal;
  max-width: none;
  border: none;
}
.rendered_html th {
  font-weight: bold;
}
.rendered_html tbody tr:nth-child(odd) {
  background: #f5f5f5;
}
.rendered_html tbody tr:hover {
  background: rgba(66, 165, 245, 0.2);
}
.rendered_html * + table {
  margin-top: 1em;
}
.rendered_html p {
  text-align: left;
}
.rendered_html * + p {
  margin-top: 1em;
}
.rendered_html img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.rendered_html * + img {
  margin-top: 1em;
}
.rendered_html img,
.rendered_html svg {
  max-width: 100%;
  height: auto;
}
.rendered_html img.unconfined,
.rendered_html svg.unconfined {
  max-width: none;
}
.rendered_html .alert {
  margin-bottom: initial;
}
.rendered_html * + .alert {
  margin-top: 1em;
}
[dir="rtl"] .rendered_html p {
  text-align: right;
}
div.text_cell {
  /* Old browsers */
  display: -webkit-box;
  -webkit-box-orient: horizontal;
  -webkit-box-align: stretch;
  display: -moz-box;
  -moz-box-orient: horizontal;
  -moz-box-align: stretch;
  display: box;
  box-orient: horizontal;
  box-align: stretch;
  /* Modern browsers */
  display: flex;
  flex-direction: row;
  align-items: stretch;
}
@media (max-width: 540px) {
  div.text_cell > div.prompt {
    display: none;
  }
}
div.text_cell_render {
  /*font-family: "Helvetica Neue", Arial, Helvetica, Geneva, sans-serif;*/
  outline: none;
  resize: none;
  width: inherit;
  border-style: none;
  padding: 0.5em 0.5em 0.5em 0.4em;
  color: #000;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
a.anchor-link:link {
  text-decoration: none;
  padding: 0px 20px;
  visibility: hidden;
}
h1:hover .anchor-link,
h2:hover .anchor-link,
h3:hover .anchor-link,
h4:hover .anchor-link,
h5:hover .anchor-link,
h6:hover .anchor-link {
  visibility: visible;
}
.text_cell.rendered .input_area {
  display: none;
}
.text_cell.rendered .rendered_html {
  overflow-x: auto;
  overflow-y: hidden;
}
.text_cell.rendered .rendered_html tr,
.text_cell.rendered .rendered_html th,
.text_cell.rendered .rendered_html td {
  max-width: none;
}
.text_cell.unrendered .text_cell_render {
  display: none;
}
.text_cell .dropzone .input_area {
  border: 2px dashed #bababa;
  margin: -1px;
}
.cm-header-1,
.cm-header-2,
.cm-header-3,
.cm-header-4,
.cm-header-5,
.cm-header-6 {
  font-weight: bold;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}
.cm-header-1 {
  font-size: 185.7%;
}
.cm-header-2 {
  font-size: 157.1%;
}
.cm-header-3 {
  font-size: 128.6%;
}
.cm-header-4 {
  font-size: 110%;
}
.cm-header-5 {
  font-size: 100%;
  font-style: italic;
}
.cm-header-6 {
  font-size: 100%;
  font-style: italic;
}
/*!
*
* IPython notebook webapp
*
*/
@media (max-width: 767px) {
  .notebook_app {
    padding-left: 0px;
    padding-right: 0px;
  }
}
#ipython-main-app {
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  height: 100%;
}
div#notebook_panel {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  height: 100%;
}
div#notebook {
  font-size: 14px;
  line-height: 20px;
  overflow-y: hidden;
  overflow-x: auto;
  width: 100%;
  /* This spaces the page away from the edge of the notebook area */
  padding-top: 20px;
  margin: 0px;
  outline: none;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  min-height: 100%;
}
@media not print {
  #notebook-container {
    padding: 15px;
    background-color: #fff;
    min-height: 0;
    -webkit-box-shadow: 0px 0px 12px 1px rgba(87, 87, 87, 0.2);
    box-shadow: 0px 0px 12px 1px rgba(87, 87, 87, 0.2);
  }
}
@media print {
  #notebook-container {
    width: 100%;
  }
}
div.ui-widget-content {
  border: 1px solid #ababab;
  outline: none;
}
pre.dialog {
  background-color: #f7f7f7;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0.4em;
  padding-left: 2em;
}
p.dialog {
  padding: 0.2em;
}
/* Word-wrap output correctly.  This is the CSS3 spelling, though Firefox seems
   to not honor it correctly.  Webkit browsers (Chrome, rekonq, Safari) do.
 */
pre,
code,
kbd,
samp {
  white-space: pre-wrap;
}
#fonttest {
  font-family: monospace;
}
p {
  margin-bottom: 0;
}
.end_space {
  min-height: 100px;
  transition: height .2s ease;
}
.notebook_app > #header {
  -webkit-box-shadow: 0px 0px 12px 1px rgba(87, 87, 87, 0.2);
  box-shadow: 0px 0px 12px 1px rgba(87, 87, 87, 0.2);
}
@media not print {
  .notebook_app {
    background-color: #EEE;
  }
}
kbd {
  border-style: solid;
  border-width: 1px;
  box-shadow: none;
  margin: 2px;
  padding-left: 2px;
  padding-right: 2px;
  padding-top: 1px;
  padding-bottom: 1px;
}
.jupyter-keybindings {
  padding: 1px;
  line-height: 24px;
  border-bottom: 1px solid gray;
}
.jupyter-keybindings input {
  margin: 0;
  padding: 0;
  border: none;
}
.jupyter-keybindings i {
  padding: 6px;
}
.well code {
  background-color: #ffffff;
  border-color: #ababab;
  border-width: 1px;
  border-style: solid;
  padding: 2px;
  padding-top: 1px;
  padding-bottom: 1px;
}
/* CSS for the cell toolbar */
.celltoolbar {
  border: thin solid #CFCFCF;
  border-bottom: none;
  background: #EEE;
  border-radius: 2px 2px 0px 0px;
  width: 100%;
  height: 29px;
  padding-right: 4px;
  /* Old browsers */
  display: -webkit-box;
  -webkit-box-orient: horizontal;
  -webkit-box-align: stretch;
  display: -moz-box;
  -moz-box-orient: horizontal;
  -moz-box-align: stretch;
  display: box;
  box-orient: horizontal;
  box-align: stretch;
  /* Modern browsers */
  display: flex;
  flex-direction: row;
  align-items: stretch;
  /* Old browsers */
  -webkit-box-pack: end;
  -moz-box-pack: end;
  box-pack: end;
  /* Modern browsers */
  justify-content: flex-end;
  display: -webkit-flex;
}
@media print {
  .celltoolbar {
    display: none;
  }
}
.ctb_hideshow {
  display: none;
  vertical-align: bottom;
}
/* ctb_show is added to the ctb_hideshow div to show the cell toolbar.
   Cell toolbars are only shown when the ctb_global_show class is also set.
*/
.ctb_global_show .ctb_show.ctb_hideshow {
  display: block;
}
.ctb_global_show .ctb_show + .input_area,
.ctb_global_show .ctb_show + div.text_cell_input,
.ctb_global_show .ctb_show ~ div.text_cell_render {
  border-top-right-radius: 0px;
  border-top-left-radius: 0px;
}
.ctb_global_show .ctb_show ~ div.text_cell_render {
  border: 1px solid #cfcfcf;
}
.celltoolbar {
  font-size: 87%;
  padding-top: 3px;
}
.celltoolbar select {
  display: block;
  width: 100%;
  height: 32px;
  padding: 6px 12px;
  font-size: 13px;
  line-height: 1.42857143;
  color: #555555;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 2px;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  -webkit-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
  -o-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
  transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
  height: 30px;
  padding: 5px 10px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 1px;
  width: inherit;
  font-size: inherit;
  height: 22px;
  padding: 0px;
  display: inline-block;
}
.celltoolbar select:focus {
  border-color: #66afe9;
  outline: 0;
  -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, 0.6);
  box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, 0.6);
}
.celltoolbar select::-moz-placeholder {
  color: #999;
  opacity: 1;
}
.celltoolbar select:-ms-input-placeholder {
  color: #999;
}
.celltoolbar select::-webkit-input-placeholder {
  color: #999;
}
.celltoolbar select::-ms-expand {
  border: 0;
  background-color: transparent;
}
.celltoolbar select[disabled],
.celltoolbar select[readonly],
fieldset[disabled] .celltoolbar select {
  background-color: #eeeeee;
  opacity: 1;
}
.celltoolbar select[disabled],
fieldset[disabled] .celltoolbar select {
  cursor: not-allowed;
}
textarea.celltoolbar select {
  height: auto;
}
select.celltoolbar select {
  height: 30px;
  line-height: 30px;
}
textarea.celltoolbar select,
select[multiple].celltoolbar select {
  height: auto;
}
.celltoolbar label {
  margin-left: 5px;
  margin-right: 5px;
}
.tags_button_container {
  width: 100%;
  display: flex;
}
.tag-container {
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  overflow: hidden;
  position: relative;
}
.tag-container > * {
  margin: 0 4px;
}
.remove-tag-btn {
  margin-left: 4px;
}
.tags-input {
  display: flex;
}
.cell-tag:last-child:after {
  content: "";
  position: absolute;
  right: 0;
  width: 40px;
  height: 100%;
  /* Fade to background color of cell toolbar */
  background: linear-gradient(to right, rgba(0, 0, 0, 0), #EEE);
}
.tags-input > * {
  margin-left: 4px;
}
.cell-tag,
.tags-input input,
.tags-input button {
  display: block;
  width: 100%;
  height: 32px;
  padding: 6px 12px;
  font-size: 13px;
  line-height: 1.42857143;
  color: #555555;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 2px;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  -webkit-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
  -o-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
  transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
  height: 30px;
  padding: 5px 10px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 1px;
  box-shadow: none;
  width: inherit;
  font-size: inherit;
  height: 22px;
  line-height: 22px;
  padding: 0px 4px;
  display: inline-block;
}
.cell-tag:focus,
.tags-input input:focus,
.tags-input button:focus {
  border-color: #66afe9;
  outline: 0;
  -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, 0.6);
  box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, 0.6);
}
.cell-tag::-moz-placeholder,
.tags-input input::-moz-placeholder,
.tags-input button::-moz-placeholder {
  color: #999;
  opacity: 1;
}
.cell-tag:-ms-input-placeholder,
.tags-input input:-ms-input-placeholder,
.tags-input button:-ms-input-placeholder {
  color: #999;
}
.cell-tag::-webkit-input-placeholder,
.tags-input input::-webkit-input-placeholder,
.tags-input button::-webkit-input-placeholder {
  color: #999;
}
.cell-tag::-ms-expand,
.tags-input input::-ms-expand,
.tags-input button::-ms-expand {
  border: 0;
  background-color: transparent;
}
.cell-tag[disabled],
.tags-input input[disabled],
.tags-input button[disabled],
.cell-tag[readonly],
.tags-input input[readonly],
.tags-input button[readonly],
fieldset[disabled] .cell-tag,
fieldset[disabled] .tags-input input,
fieldset[disabled] .tags-input button {
  background-color: #eeeeee;
  opacity: 1;
}
.cell-tag[disabled],
.tags-input input[disabled],
.tags-input button[disabled],
fieldset[disabled] .cell-tag,
fieldset[disabled] .tags-input input,
fieldset[disabled] .tags-input button {
  cursor: not-allowed;
}
textarea.cell-tag,
textarea.tags-input input,
textarea.tags-input button {
  height: auto;
}
select.cell-tag,
select.tags-input input,
select.tags-input button {
  height: 30px;
  line-height: 30px;
}
textarea.cell-tag,
textarea.tags-input input,
textarea.tags-input button,
select[multiple].cell-tag,
select[multiple].tags-input input,
select[multiple].tags-input button {
  height: auto;
}
.cell-tag,
.tags-input button {
  padding: 0px 4px;
}
.cell-tag {
  background-color: #fff;
  white-space: nowrap;
}
.tags-input input[type=text]:focus {
  outline: none;
  box-shadow: none;
  border-color: #ccc;
}
.completions {
  position: absolute;
  z-index: 110;
  overflow: hidden;
  border: 1px solid #ababab;
  border-radius: 2px;
  -webkit-box-shadow: 0px 6px 10px -1px #adadad;
  box-shadow: 0px 6px 10px -1px #adadad;
  line-height: 1;
}
.completions select {
  background: white;
  outline: none;
  border: none;
  padding: 0px;
  margin: 0px;
  overflow: auto;
  font-family: monospace;
  font-size: 110%;
  color: #000;
  width: auto;
}
.completions select option.context {
  color: #286090;
}
#kernel_logo_widget .current_kernel_logo {
  display: none;
  margin-top: -1px;
  margin-bottom: -1px;
  width: 32px;
  height: 32px;
}
[dir="rtl"] #kernel_logo_widget {
  float: left !important;
  float: left;
}
.modal .modal-body .move-path {
  display: flex;
  flex-direction: row;
  justify-content: space;
  align-items: center;
}
.modal .modal-body .move-path .server-root {
  padding-right: 20px;
}
.modal .modal-body .move-path .path-input {
  flex: 1;
}
#menubar {
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  margin-top: 1px;
}
#menubar .navbar {
  border-top: 1px;
  border-radius: 0px 0px 2px 2px;
  margin-bottom: 0px;
}
#menubar .navbar-toggle {
  float: left;
  padding-top: 7px;
  padding-bottom: 7px;
  border: none;
}
#menubar .navbar-collapse {
  clear: left;
}
[dir="rtl"] #menubar .navbar-toggle {
  float: right;
}
[dir="rtl"] #menubar .navbar-collapse {
  clear: right;
}
[dir="rtl"] #menubar .navbar-nav {
  float: right;
}
[dir="rtl"] #menubar .nav {
  padding-right: 0px;
}
[dir="rtl"] #menubar .navbar-nav > li {
  float: right;
}
[dir="rtl"] #menubar .navbar-right {
  float: left !important;
}
[dir="rtl"] ul.dropdown-menu {
  text-align: right;
  left: auto;
}
[dir="rtl"] ul#new-menu.dropdown-menu {
  right: auto;
  left: 0;
}
.nav-wrapper {
  border-bottom: 1px solid #e7e7e7;
}
i.menu-icon {
  padding-top: 4px;
}
[dir="rtl"] i.menu-icon.pull-right {
  float: left !important;
  float: left;
}
ul#help_menu li a {
  overflow: hidden;
  padding-right: 2.2em;
}
ul#help_menu li a i {
  margin-right: -1.2em;
}
[dir="rtl"] ul#help_menu li a {
  padding-left: 2.2em;
}
[dir="rtl"] ul#help_menu li a i {
  margin-right: 0;
  margin-left: -1.2em;
}
[dir="rtl"] ul#help_menu li a i.pull-right {
  float: left !important;
  float: left;
}
.dropdown-submenu {
  position: relative;
}
.dropdown-submenu > .dropdown-menu {
  top: 0;
  left: 100%;
  margin-top: -6px;
  margin-left: -1px;
}
[dir="rtl"] .dropdown-submenu > .dropdown-menu {
  right: 100%;
  margin-right: -1px;
}
.dropdown-submenu:hover > .dropdown-menu {
  display: block;
}
.dropdown-submenu > a:after {
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: block;
  content: "\\f0da";
  float: right;
  color: #333333;
  margin-top: 2px;
  margin-right: -10px;
}
.dropdown-submenu > a:after.fa-pull-left {
  margin-right: .3em;
}
.dropdown-submenu > a:after.fa-pull-right {
  margin-left: .3em;
}
.dropdown-submenu > a:after.pull-left {
  margin-right: .3em;
}
.dropdown-submenu > a:after.pull-right {
  margin-left: .3em;
}
[dir="rtl"] .dropdown-submenu > a:after {
  float: left;
  content: "\\f0d9";
  margin-right: 0;
  margin-left: -10px;
}
.dropdown-submenu:hover > a:after {
  color: #262626;
}
.dropdown-submenu.pull-left {
  float: none;
}
.dropdown-submenu.pull-left > .dropdown-menu {
  left: -100%;
  margin-left: 10px;
}
#notification_area {
  float: right !important;
  float: right;
  z-index: 10;
}
[dir="rtl"] #notification_area {
  float: left !important;
  float: left;
}
.indicator_area {
  float: right !important;
  float: right;
  color: #777;
  margin-left: 5px;
  margin-right: 5px;
  width: 11px;
  z-index: 10;
  text-align: center;
  width: auto;
}
[dir="rtl"] .indicator_area {
  float: left !important;
  float: left;
}
#kernel_indicator {
  float: right !important;
  float: right;
  color: #777;
  margin-left: 5px;
  margin-right: 5px;
  width: 11px;
  z-index: 10;
  text-align: center;
  width: auto;
  border-left: 1px solid;
}
#kernel_indicator .kernel_indicator_name {
  padding-left: 5px;
  padding-right: 5px;
}
[dir="rtl"] #kernel_indicator {
  float: left !important;
  float: left;
  border-left: 0;
  border-right: 1px solid;
}
#modal_indicator {
  float: right !important;
  float: right;
  color: #777;
  margin-left: 5px;
  margin-right: 5px;
  width: 11px;
  z-index: 10;
  text-align: center;
  width: auto;
}
[dir="rtl"] #modal_indicator {
  float: left !important;
  float: left;
}
#readonly-indicator {
  float: right !important;
  float: right;
  color: #777;
  margin-left: 5px;
  margin-right: 5px;
  width: 11px;
  z-index: 10;
  text-align: center;
  width: auto;
  margin-top: 2px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  display: none;
}
.modal_indicator:before {
  width: 1.28571429em;
  text-align: center;
}
.edit_mode .modal_indicator:before {
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  content: "\\f040";
}
.edit_mode .modal_indicator:before.fa-pull-left {
  margin-right: .3em;
}
.edit_mode .modal_indicator:before.fa-pull-right {
  margin-left: .3em;
}
.edit_mode .modal_indicator:before.pull-left {
  margin-right: .3em;
}
.edit_mode .modal_indicator:before.pull-right {
  margin-left: .3em;
}
.command_mode .modal_indicator:before {
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  content: ' ';
}
.command_mode .modal_indicator:before.fa-pull-left {
  margin-right: .3em;
}
.command_mode .modal_indicator:before.fa-pull-right {
  margin-left: .3em;
}
.command_mode .modal_indicator:before.pull-left {
  margin-right: .3em;
}
.command_mode .modal_indicator:before.pull-right {
  margin-left: .3em;
}
.kernel_idle_icon:before {
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  content: "\\f10c";
}
.kernel_idle_icon:before.fa-pull-left {
  margin-right: .3em;
}
.kernel_idle_icon:before.fa-pull-right {
  margin-left: .3em;
}
.kernel_idle_icon:before.pull-left {
  margin-right: .3em;
}
.kernel_idle_icon:before.pull-right {
  margin-left: .3em;
}
.kernel_busy_icon:before {
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  content: "\\f111";
}
.kernel_busy_icon:before.fa-pull-left {
  margin-right: .3em;
}
.kernel_busy_icon:before.fa-pull-right {
  margin-left: .3em;
}
.kernel_busy_icon:before.pull-left {
  margin-right: .3em;
}
.kernel_busy_icon:before.pull-right {
  margin-left: .3em;
}
.kernel_dead_icon:before {
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  content: "\\f1e2";
}
.kernel_dead_icon:before.fa-pull-left {
  margin-right: .3em;
}
.kernel_dead_icon:before.fa-pull-right {
  margin-left: .3em;
}
.kernel_dead_icon:before.pull-left {
  margin-right: .3em;
}
.kernel_dead_icon:before.pull-right {
  margin-left: .3em;
}
.kernel_disconnected_icon:before {
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  content: "\\f127";
}
.kernel_disconnected_icon:before.fa-pull-left {
  margin-right: .3em;
}
.kernel_disconnected_icon:before.fa-pull-right {
  margin-left: .3em;
}
.kernel_disconnected_icon:before.pull-left {
  margin-right: .3em;
}
.kernel_disconnected_icon:before.pull-right {
  margin-left: .3em;
}
.notification_widget {
  color: #777;
  z-index: 10;
  background: rgba(240, 240, 240, 0.5);
  margin-right: 4px;
  color: #333;
  background-color: #fff;
  border-color: #ccc;
}
.notification_widget:focus,
.notification_widget.focus {
  color: #333;
  background-color: #e6e6e6;
  border-color: #8c8c8c;
}
.notification_widget:hover {
  color: #333;
  background-color: #e6e6e6;
  border-color: #adadad;
}
.notification_widget:active,
.notification_widget.active,
.open > .dropdown-toggle.notification_widget {
  color: #333;
  background-color: #e6e6e6;
  border-color: #adadad;
}
.notification_widget:active:hover,
.notification_widget.active:hover,
.open > .dropdown-toggle.notification_widget:hover,
.notification_widget:active:focus,
.notification_widget.active:focus,
.open > .dropdown-toggle.notification_widget:focus,
.notification_widget:active.focus,
.notification_widget.active.focus,
.open > .dropdown-toggle.notification_widget.focus {
  color: #333;
  background-color: #d4d4d4;
  border-color: #8c8c8c;
}
.notification_widget:active,
.notification_widget.active,
.open > .dropdown-toggle.notification_widget {
  background-image: none;
}
.notification_widget.disabled:hover,
.notification_widget[disabled]:hover,
fieldset[disabled] .notification_widget:hover,
.notification_widget.disabled:focus,
.notification_widget[disabled]:focus,
fieldset[disabled] .notification_widget:focus,
.notification_widget.disabled.focus,
.notification_widget[disabled].focus,
fieldset[disabled] .notification_widget.focus {
  background-color: #fff;
  border-color: #ccc;
}
.notification_widget .badge {
  color: #fff;
  background-color: #333;
}
.notification_widget.warning {
  color: #fff;
  background-color: #f0ad4e;
  border-color: #eea236;
}
.notification_widget.warning:focus,
.notification_widget.warning.focus {
  color: #fff;
  background-color: #ec971f;
  border-color: #985f0d;
}
.notification_widget.warning:hover {
  color: #fff;
  background-color: #ec971f;
  border-color: #d58512;
}
.notification_widget.warning:active,
.notification_widget.warning.active,
.open > .dropdown-toggle.notification_widget.warning {
  color: #fff;
  background-color: #ec971f;
  border-color: #d58512;
}
.notification_widget.warning:active:hover,
.notification_widget.warning.active:hover,
.open > .dropdown-toggle.notification_widget.warning:hover,
.notification_widget.warning:active:focus,
.notification_widget.warning.active:focus,
.open > .dropdown-toggle.notification_widget.warning:focus,
.notification_widget.warning:active.focus,
.notification_widget.warning.active.focus,
.open > .dropdown-toggle.notification_widget.warning.focus {
  color: #fff;
  background-color: #d58512;
  border-color: #985f0d;
}
.notification_widget.warning:active,
.notification_widget.warning.active,
.open > .dropdown-toggle.notification_widget.warning {
  background-image: none;
}
.notification_widget.warning.disabled:hover,
.notification_widget.warning[disabled]:hover,
fieldset[disabled] .notification_widget.warning:hover,
.notification_widget.warning.disabled:focus,
.notification_widget.warning[disabled]:focus,
fieldset[disabled] .notification_widget.warning:focus,
.notification_widget.warning.disabled.focus,
.notification_widget.warning[disabled].focus,
fieldset[disabled] .notification_widget.warning.focus {
  background-color: #f0ad4e;
  border-color: #eea236;
}
.notification_widget.warning .badge {
  color: #f0ad4e;
  background-color: #fff;
}
.notification_widget.success {
  color: #fff;
  background-color: #5cb85c;
  border-color: #4cae4c;
}
.notification_widget.success:focus,
.notification_widget.success.focus {
  color: #fff;
  background-color: #449d44;
  border-color: #255625;
}
.notification_widget.success:hover {
  color: #fff;
  background-color: #449d44;
  border-color: #398439;
}
.notification_widget.success:active,
.notification_widget.success.active,
.open > .dropdown-toggle.notification_widget.success {
  color: #fff;
  background-color: #449d44;
  border-color: #398439;
}
.notification_widget.success:active:hover,
.notification_widget.success.active:hover,
.open > .dropdown-toggle.notification_widget.success:hover,
.notification_widget.success:active:focus,
.notification_widget.success.active:focus,
.open > .dropdown-toggle.notification_widget.success:focus,
.notification_widget.success:active.focus,
.notification_widget.success.active.focus,
.open > .dropdown-toggle.notification_widget.success.focus {
  color: #fff;
  background-color: #398439;
  border-color: #255625;
}
.notification_widget.success:active,
.notification_widget.success.active,
.open > .dropdown-toggle.notification_widget.success {
  background-image: none;
}
.notification_widget.success.disabled:hover,
.notification_widget.success[disabled]:hover,
fieldset[disabled] .notification_widget.success:hover,
.notification_widget.success.disabled:focus,
.notification_widget.success[disabled]:focus,
fieldset[disabled] .notification_widget.success:focus,
.notification_widget.success.disabled.focus,
.notification_widget.success[disabled].focus,
fieldset[disabled] .notification_widget.success.focus {
  background-color: #5cb85c;
  border-color: #4cae4c;
}
.notification_widget.success .badge {
  color: #5cb85c;
  background-color: #fff;
}
.notification_widget.info {
  color: #fff;
  background-color: #5bc0de;
  border-color: #46b8da;
}
.notification_widget.info:focus,
.notification_widget.info.focus {
  color: #fff;
  background-color: #31b0d5;
  border-color: #1b6d85;
}
.notification_widget.info:hover {
  color: #fff;
  background-color: #31b0d5;
  border-color: #269abc;
}
.notification_widget.info:active,
.notification_widget.info.active,
.open > .dropdown-toggle.notification_widget.info {
  color: #fff;
  background-color: #31b0d5;
  border-color: #269abc;
}
.notification_widget.info:active:hover,
.notification_widget.info.active:hover,
.open > .dropdown-toggle.notification_widget.info:hover,
.notification_widget.info:active:focus,
.notification_widget.info.active:focus,
.open > .dropdown-toggle.notification_widget.info:focus,
.notification_widget.info:active.focus,
.notification_widget.info.active.focus,
.open > .dropdown-toggle.notification_widget.info.focus {
  color: #fff;
  background-color: #269abc;
  border-color: #1b6d85;
}
.notification_widget.info:active,
.notification_widget.info.active,
.open > .dropdown-toggle.notification_widget.info {
  background-image: none;
}
.notification_widget.info.disabled:hover,
.notification_widget.info[disabled]:hover,
fieldset[disabled] .notification_widget.info:hover,
.notification_widget.info.disabled:focus,
.notification_widget.info[disabled]:focus,
fieldset[disabled] .notification_widget.info:focus,
.notification_widget.info.disabled.focus,
.notification_widget.info[disabled].focus,
fieldset[disabled] .notification_widget.info.focus {
  background-color: #5bc0de;
  border-color: #46b8da;
}
.notification_widget.info .badge {
  color: #5bc0de;
  background-color: #fff;
}
.notification_widget.danger {
  color: #fff;
  background-color: #d9534f;
  border-color: #d43f3a;
}
.notification_widget.danger:focus,
.notification_widget.danger.focus {
  color: #fff;
  background-color: #c9302c;
  border-color: #761c19;
}
.notification_widget.danger:hover {
  color: #fff;
  background-color: #c9302c;
  border-color: #ac2925;
}
.notification_widget.danger:active,
.notification_widget.danger.active,
.open > .dropdown-toggle.notification_widget.danger {
  color: #fff;
  background-color: #c9302c;
  border-color: #ac2925;
}
.notification_widget.danger:active:hover,
.notification_widget.danger.active:hover,
.open > .dropdown-toggle.notification_widget.danger:hover,
.notification_widget.danger:active:focus,
.notification_widget.danger.active:focus,
.open > .dropdown-toggle.notification_widget.danger:focus,
.notification_widget.danger:active.focus,
.notification_widget.danger.active.focus,
.open > .dropdown-toggle.notification_widget.danger.focus {
  color: #fff;
  background-color: #ac2925;
  border-color: #761c19;
}
.notification_widget.danger:active,
.notification_widget.danger.active,
.open > .dropdown-toggle.notification_widget.danger {
  background-image: none;
}
.notification_widget.danger.disabled:hover,
.notification_widget.danger[disabled]:hover,
fieldset[disabled] .notification_widget.danger:hover,
.notification_widget.danger.disabled:focus,
.notification_widget.danger[disabled]:focus,
fieldset[disabled] .notification_widget.danger:focus,
.notification_widget.danger.disabled.focus,
.notification_widget.danger[disabled].focus,
fieldset[disabled] .notification_widget.danger.focus {
  background-color: #d9534f;
  border-color: #d43f3a;
}
.notification_widget.danger .badge {
  color: #d9534f;
  background-color: #fff;
}
div#pager {
  background-color: #fff;
  font-size: 14px;
  line-height: 20px;
  overflow: hidden;
  display: none;
  position: fixed;
  bottom: 0px;
  width: 100%;
  max-height: 50%;
  padding-top: 8px;
  -webkit-box-shadow: 0px 0px 12px 1px rgba(87, 87, 87, 0.2);
  box-shadow: 0px 0px 12px 1px rgba(87, 87, 87, 0.2);
  /* Display over codemirror */
  z-index: 100;
  /* Hack which prevents jquery ui resizable from changing top. */
  top: auto !important;
}
div#pager pre {
  line-height: 1.21429em;
  color: #000;
  background-color: #f7f7f7;
  padding: 0.4em;
}
div#pager #pager-button-area {
  position: absolute;
  top: 8px;
  right: 20px;
}
div#pager #pager-contents {
  position: relative;
  overflow: auto;
  width: 100%;
  height: 100%;
}
div#pager #pager-contents #pager-container {
  position: relative;
  padding: 15px 0px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
div#pager .ui-resizable-handle {
  top: 0px;
  height: 8px;
  background: #f7f7f7;
  border-top: 1px solid #cfcfcf;
  border-bottom: 1px solid #cfcfcf;
  /* This injects handle bars (a short, wide = symbol) for 
        the resize handle. */
}
div#pager .ui-resizable-handle::after {
  content: '';
  top: 2px;
  left: 50%;
  height: 3px;
  width: 30px;
  margin-left: -15px;
  position: absolute;
  border-top: 1px solid #cfcfcf;
}
.quickhelp {
  /* Old browsers */
  display: -webkit-box;
  -webkit-box-orient: horizontal;
  -webkit-box-align: stretch;
  display: -moz-box;
  -moz-box-orient: horizontal;
  -moz-box-align: stretch;
  display: box;
  box-orient: horizontal;
  box-align: stretch;
  /* Modern browsers */
  display: flex;
  flex-direction: row;
  align-items: stretch;
  line-height: 1.8em;
}
.shortcut_key {
  display: inline-block;
  width: 21ex;
  text-align: right;
  font-family: monospace;
}
.shortcut_descr {
  display: inline-block;
  /* Old browsers */
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  box-flex: 1;
  /* Modern browsers */
  flex: 1;
}
span.save_widget {
  height: 30px;
  margin-top: 4px;
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
  width: 50%;
  flex: 1;
}
span.save_widget span.filename {
  height: 100%;
  line-height: 1em;
  margin-left: 16px;
  border: none;
  font-size: 146.5%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  border-radius: 2px;
}
span.save_widget span.filename:hover {
  background-color: #e6e6e6;
}
[dir="rtl"] span.save_widget.pull-left {
  float: right !important;
  float: right;
}
[dir="rtl"] span.save_widget span.filename {
  margin-left: 0;
  margin-right: 16px;
}
span.checkpoint_status,
span.autosave_status {
  font-size: small;
  white-space: nowrap;
  padding: 0 5px;
}
@media (max-width: 767px) {
  span.save_widget {
    font-size: small;
    padding: 0 0 0 5px;
  }
  span.checkpoint_status,
  span.autosave_status {
    display: none;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  span.checkpoint_status {
    display: none;
  }
  span.autosave_status {
    font-size: x-small;
  }
}
.toolbar {
  padding: 0px;
  margin-left: -5px;
  margin-top: 2px;
  margin-bottom: 5px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
.toolbar select,
.toolbar label {
  width: auto;
  vertical-align: middle;
  margin-right: 2px;
  margin-bottom: 0px;
  display: inline;
  font-size: 92%;
  margin-left: 0.3em;
  margin-right: 0.3em;
  padding: 0px;
  padding-top: 3px;
}
.toolbar .btn {
  padding: 2px 8px;
}
.toolbar .btn-group {
  margin-top: 0px;
  margin-left: 5px;
}
.toolbar-btn-label {
  margin-left: 6px;
}
#maintoolbar {
  margin-bottom: -3px;
  margin-top: -8px;
  border: 0px;
  min-height: 27px;
  margin-left: 0px;
  padding-top: 11px;
  padding-bottom: 3px;
}
#maintoolbar .navbar-text {
  float: none;
  vertical-align: middle;
  text-align: right;
  margin-left: 5px;
  margin-right: 0px;
  margin-top: 0px;
}
.select-xs {
  height: 24px;
}
[dir="rtl"] .btn-group > .btn,
.btn-group-vertical > .btn {
  float: right;
}
.pulse,
.dropdown-menu > li > a.pulse,
li.pulse > a.dropdown-toggle,
li.pulse.open > a.dropdown-toggle {
  background-color: #F37626;
  color: white;
}
/**
 * Primary styles
 *
 * Author: Jupyter Development Team
 */
/** WARNING IF YOU ARE EDITTING THIS FILE, if this is a .css file, It has a lot
 * of chance of beeing generated from the ../less/[samename].less file, you can
 * try to get back the less file by reverting somme commit in history
 **/
/*
 * We'll try to get something pretty, so we
 * have some strange css to have the scroll bar on
 * the left with fix button on the top right of the tooltip
 */
@-moz-keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@-webkit-keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@-moz-keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@-webkit-keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
/*properties of tooltip after "expand"*/
.bigtooltip {
  overflow: auto;
  height: 200px;
  -webkit-transition-property: height;
  -webkit-transition-duration: 500ms;
  -moz-transition-property: height;
  -moz-transition-duration: 500ms;
  transition-property: height;
  transition-duration: 500ms;
}
/*properties of tooltip before "expand"*/
.smalltooltip {
  -webkit-transition-property: height;
  -webkit-transition-duration: 500ms;
  -moz-transition-property: height;
  -moz-transition-duration: 500ms;
  transition-property: height;
  transition-duration: 500ms;
  text-overflow: ellipsis;
  overflow: hidden;
  height: 80px;
}
.tooltipbuttons {
  position: absolute;
  padding-right: 15px;
  top: 0px;
  right: 0px;
}
.tooltiptext {
  /*avoid the button to overlap on some docstring*/
  padding-right: 30px;
}
.ipython_tooltip {
  max-width: 700px;
  /*fade-in animation when inserted*/
  -webkit-animation: fadeOut 400ms;
  -moz-animation: fadeOut 400ms;
  animation: fadeOut 400ms;
  -webkit-animation: fadeIn 400ms;
  -moz-animation: fadeIn 400ms;
  animation: fadeIn 400ms;
  vertical-align: middle;
  background-color: #f7f7f7;
  overflow: visible;
  border: #ababab 1px solid;
  outline: none;
  padding: 3px;
  margin: 0px;
  padding-left: 7px;
  font-family: monospace;
  min-height: 50px;
  -moz-box-shadow: 0px 6px 10px -1px #adadad;
  -webkit-box-shadow: 0px 6px 10px -1px #adadad;
  box-shadow: 0px 6px 10px -1px #adadad;
  border-radius: 2px;
  position: absolute;
  z-index: 1000;
}
.ipython_tooltip a {
  float: right;
}
.ipython_tooltip .tooltiptext pre {
  border: 0;
  border-radius: 0;
  font-size: 100%;
  background-color: #f7f7f7;
}
.pretooltiparrow {
  left: 0px;
  margin: 0px;
  top: -16px;
  width: 40px;
  height: 16px;
  overflow: hidden;
  position: absolute;
}
.pretooltiparrow:before {
  background-color: #f7f7f7;
  border: 1px #ababab solid;
  z-index: 11;
  content: "";
  position: absolute;
  left: 15px;
  top: 10px;
  width: 25px;
  height: 25px;
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -o-transform: rotate(45deg);
}
ul.typeahead-list i {
  margin-left: -10px;
  width: 18px;
}
[dir="rtl"] ul.typeahead-list i {
  margin-left: 0;
  margin-right: -10px;
}
ul.typeahead-list {
  max-height: 80vh;
  overflow: auto;
}
ul.typeahead-list > li > a {
  /** Firefox bug **/
  /* see https://github.com/jupyter/notebook/issues/559 */
  white-space: normal;
}
ul.typeahead-list  > li > a.pull-right {
  float: left !important;
  float: left;
}
[dir="rtl"] .typeahead-list {
  text-align: right;
}
.cmd-palette .modal-body {
  padding: 7px;
}
.cmd-palette form {
  background: white;
}
.cmd-palette input {
  outline: none;
}
.no-shortcut {
  min-width: 20px;
  color: transparent;
}
[dir="rtl"] .no-shortcut.pull-right {
  float: left !important;
  float: left;
}
[dir="rtl"] .command-shortcut.pull-right {
  float: left !important;
  float: left;
}
.command-shortcut:before {
  content: "(command mode)";
  padding-right: 3px;
  color: #777777;
}
.edit-shortcut:before {
  content: "(edit)";
  padding-right: 3px;
  color: #777777;
}
[dir="rtl"] .edit-shortcut.pull-right {
  float: left !important;
  float: left;
}
#find-and-replace #replace-preview .match,
#find-and-replace #replace-preview .insert {
  background-color: #BBDEFB;
  border-color: #90CAF9;
  border-style: solid;
  border-width: 1px;
  border-radius: 0px;
}
[dir="ltr"] #find-and-replace .input-group-btn + .form-control {
  border-left: none;
}
[dir="rtl"] #find-and-replace .input-group-btn + .form-control {
  border-right: none;
}
#find-and-replace #replace-preview .replace .match {
  background-color: #FFCDD2;
  border-color: #EF9A9A;
  border-radius: 0px;
}
#find-and-replace #replace-preview .replace .insert {
  background-color: #C8E6C9;
  border-color: #A5D6A7;
  border-radius: 0px;
}
#find-and-replace #replace-preview {
  max-height: 60vh;
  overflow: auto;
}
#find-and-replace #replace-preview pre {
  padding: 5px 10px;
}
.terminal-app {
  background: #EEE;
}
.terminal-app #header {
  background: #fff;
  -webkit-box-shadow: 0px 0px 12px 1px rgba(87, 87, 87, 0.2);
  box-shadow: 0px 0px 12px 1px rgba(87, 87, 87, 0.2);
}
.terminal-app .terminal {
  width: 100%;
  float: left;
  font-family: monospace;
  color: white;
  background: black;
  padding: 0.4em;
  border-radius: 2px;
  -webkit-box-shadow: 0px 0px 12px 1px rgba(87, 87, 87, 0.4);
  box-shadow: 0px 0px 12px 1px rgba(87, 87, 87, 0.4);
}
.terminal-app .terminal,
.terminal-app .terminal dummy-screen {
  line-height: 1em;
  font-size: 14px;
}
.terminal-app .terminal .xterm-rows {
  padding: 10px;
}
.terminal-app .terminal-cursor {
  color: black;
  background: white;
}
.terminal-app #terminado-container {
  margin-top: 20px;
}
/*# sourceMappingURL=style.min.css.map */
    </style>
<style type="text/css">
    .highlight .hll { background-color: #ffffcc }
.highlight  { background: #f8f8f8; }
.highlight .c { color: #408080; font-style: italic } /* Comment */
.highlight .err { border: 1px solid #FF0000 } /* Error */
.highlight .k { color: #008000; font-weight: bold } /* Keyword */
.highlight .o { color: #666666 } /* Operator */
.highlight .ch { color: #408080; font-style: italic } /* Comment.Hashbang */
.highlight .cm { color: #408080; font-style: italic } /* Comment.Multiline */
.highlight .cp { color: #BC7A00 } /* Comment.Preproc */
.highlight .cpf { color: #408080; font-style: italic } /* Comment.PreprocFile */
.highlight .c1 { color: #408080; font-style: italic } /* Comment.Single */
.highlight .cs { color: #408080; font-style: italic } /* Comment.Special */
.highlight .gd { color: #A00000 } /* Generic.Deleted */
.highlight .ge { font-style: italic } /* Generic.Emph */
.highlight .gr { color: #FF0000 } /* Generic.Error */
.highlight .gh { color: #000080; font-weight: bold } /* Generic.Heading */
.highlight .gi { color: #00A000 } /* Generic.Inserted */
.highlight .go { color: #888888 } /* Generic.Output */
.highlight .gp { color: #000080; font-weight: bold } /* Generic.Prompt */
.highlight .gs { font-weight: bold } /* Generic.Strong */
.highlight .gu { color: #800080; font-weight: bold } /* Generic.Subheading */
.highlight .gt { color: #0044DD } /* Generic.Traceback */
.highlight .kc { color: #008000; font-weight: bold } /* Keyword.Constant */
.highlight .kd { color: #008000; font-weight: bold } /* Keyword.Declaration */
.highlight .kn { color: #008000; font-weight: bold } /* Keyword.Namespace */
.highlight .kp { color: #008000 } /* Keyword.Pseudo */
.highlight .kr { color: #008000; font-weight: bold } /* Keyword.Reserved */
.highlight .kt { color: #B00040 } /* Keyword.Type */
.highlight .m { color: #666666 } /* Literal.Number */
.highlight .s { color: #BA2121 } /* Literal.String */
.highlight .na { color: #7D9029 } /* Name.Attribute */
.highlight .nb { color: #008000 } /* Name.Builtin */
.highlight .nc { color: #0000FF; font-weight: bold } /* Name.Class */
.highlight .no { color: #880000 } /* Name.Constant */
.highlight .nd { color: #AA22FF } /* Name.Decorator */
.highlight .ni { color: #999999; font-weight: bold } /* Name.Entity */
.highlight .ne { color: #D2413A; font-weight: bold } /* Name.Exception */
.highlight .nf { color: #0000FF } /* Name.Function */
.highlight .nl { color: #A0A000 } /* Name.Label */
.highlight .nn { color: #0000FF; font-weight: bold } /* Name.Namespace */
.highlight .nt { color: #008000; font-weight: bold } /* Name.Tag */
.highlight .nv { color: #19177C } /* Name.Variable */
.highlight .ow { color: #AA22FF; font-weight: bold } /* Operator.Word */
.highlight .w { color: #bbbbbb } /* Text.Whitespace */
.highlight .mb { color: #666666 } /* Literal.Number.Bin */
.highlight .mf { color: #666666 } /* Literal.Number.Float */
.highlight .mh { color: #666666 } /* Literal.Number.Hex */
.highlight .mi { color: #666666 } /* Literal.Number.Integer */
.highlight .mo { color: #666666 } /* Literal.Number.Oct */
.highlight .sa { color: #BA2121 } /* Literal.String.Affix */
.highlight .sb { color: #BA2121 } /* Literal.String.Backtick */
.highlight .sc { color: #BA2121 } /* Literal.String.Char */
.highlight .dl { color: #BA2121 } /* Literal.String.Delimiter */
.highlight .sd { color: #BA2121; font-style: italic } /* Literal.String.Doc */
.highlight .s2 { color: #BA2121 } /* Literal.String.Double */
.highlight .se { color: #BB6622; font-weight: bold } /* Literal.String.Escape */
.highlight .sh { color: #BA2121 } /* Literal.String.Heredoc */
.highlight .si { color: #BB6688; font-weight: bold } /* Literal.String.Interpol */
.highlight .sx { color: #008000 } /* Literal.String.Other */
.highlight .sr { color: #BB6688 } /* Literal.String.Regex */
.highlight .s1 { color: #BA2121 } /* Literal.String.Single */
.highlight .ss { color: #19177C } /* Literal.String.Symbol */
.highlight .bp { color: #008000 } /* Name.Builtin.Pseudo */
.highlight .fm { color: #0000FF } /* Name.Function.Magic */
.highlight .vc { color: #19177C } /* Name.Variable.Class */
.highlight .vg { color: #19177C } /* Name.Variable.Global */
.highlight .vi { color: #19177C } /* Name.Variable.Instance */
.highlight .vm { color: #19177C } /* Name.Variable.Magic */
.highlight .il { color: #666666 } /* Literal.Number.Integer.Long */
    </style>
<style type="text/css">
    div#notebook {
 font-family: sans-serif;
 font-size: 11.5pt;
 line-height: 170%;
 color: #b5c2d9;
 -webkit-font-smoothing: antialiased !important;
 padding-top: 25px !important;
}
body,
div.body {
 font-family: sans-serif;
 font-size: 11.5pt;
 color: #899ab8;
 background-color: #1d1e23;
 background: #1d1e23;
 -webkit-font-smoothing: antialiased !important;
}
body.notebook_app {
 padding: 0;
 background-color: #1d1e23;
 background: #1d1e23;
 padding-right: 0px !important;
 overflow-y: hidden;
}
a {
 font-family: sans-serif;
 color: #899ab8;
 -webkit-font-smoothing: antialiased !important;
}
a:hover,
a:focus {
 color: #bbc2e0;
 -webkit-font-smoothing: antialiased !important;
}
div#maintoolbar {
 position: absolute;
 width: 90%;
 margin-left: -10%;
 padding-right: 8%;
 float: left;
 background: transparent !important;
}
#maintoolbar {
 margin-bottom: -3px;
 margin-top: 0px;
 border: 0px;
 min-height: 27px;
 padding-top: 2px;
 padding-bottom: 0px;
}
#maintoolbar .container {
 width: 75%;
 margin-right: auto;
 margin-left: auto;
}
.list_header,
div#notebook_list_header.row.list_header {
 font-size: 14pt;
 color: #bbc2e0;
 background-color: transparent;
 height: 35px;
}
i.fa.fa-folder {
 display: inline-block;
 font: normal normal normal 14px "FontAwesome";
 font-family: "FontAwesome" !important;
 text-rendering: auto;
 -webkit-font-smoothing: antialiased;
 font-size: 18px;
 -moz-osx-font-smoothing: grayscale;
}
#running .panel-group .panel .panel-heading {
 font-size: 14pt;
 color: #899ab8;
 padding: 8px 8px;
 background: #2e3642;
 background-color: #2e3642;
}
#running .panel-group .panel .panel-heading a {
 font-size: 14pt;
 color: #899ab8;
}
#running .panel-group .panel .panel-heading a:focus,
#running .panel-group .panel .panel-heading a:hover {
 font-size: 14pt;
 color: #899ab8;
}
#running .panel-group .panel .panel-body .list_container .list_item {
 background: #384152;
 background-color: #384152;
 padding: 2px;
 border-bottom: 2px solid rgba(80,92,133,.22);
}
#running .panel-group .panel .panel-body .list_container .list_item:hover {
 background: #384152;
 background-color: #384152;
}
#running .panel-group .panel .panel-body {
 padding: 2px;
}
button#refresh_running_list {
 border: none !important;
}
button#refresh_cluster_list {
 border: none !important;
}
div.running_list_info.toolbar_info {
 font-size: 15px;
 padding: 4px 0 4px 0;
 margin-top: 5px;
 margin-bottom: 8px;
 height: 24px;
 line-height: 24px;
 text-shadow: none;
}
.list_placeholder {
 font-weight: normal;
}
#tree-selector {
 padding: 0px;
 border-color: transparent;
}
#project_name > ul > li > a > i.fa.fa-home {
 color: #7aa05d;
 font-size: 17pt;
 display: inline-block;
 position: static;
 padding: 0px 0px;
 font-weight: normal;
 text-align: center;
 vertical-align: text-top;
}
.fa-folder:before {
 color: #4c8be2;
}
.fa-arrow-up:before {
 font-size: 14px;
}
.fa-arrow-down:before {
 font-size: 14px;
}
span#last-modified.btn.btn-xs.btn-default.sort-action:hover .fa,
span#sort-name.btn.btn-xs.btn-default.sort-action:hover .fa {
 color: #7aa05d;
}
.folder_icon:before {
 display: inline-block;
 font: normal normal normal 14px/1 FontAwesome;
 font-size: inherit;
 text-rendering: auto;
 -webkit-font-smoothing: antialiased;
 -moz-osx-font-smoothing: grayscale;
 content: "\\f07b";
 color: #4c8be2;
}
.notebook_icon:before {
 display: inline-block;
 font: normal normal normal 14px/1 FontAwesome;
 font-size: inherit;
 text-rendering: auto;
 -webkit-font-smoothing: antialiased;
 -moz-osx-font-smoothing: grayscale;
 content: "\\f02d";
 position: relative;
 color: #94c273 !important;
 top: 0px;
}
.file_icon:before {
 display: inline-block;
 font: normal normal normal 14px/1 FontAwesome;
 font-size: inherit;
 text-rendering: auto;
 -webkit-font-smoothing: antialiased;
 -moz-osx-font-smoothing: grayscale;
 content: "\\f15b";
 position: relative;
 top: 0px;
 color: #899ab8 !important;
}
#project_name a {
 display: inline-flex;
 padding-left: 7px;
 margin-left: -2px;
 text-align: -webkit-auto;
 vertical-align: baseline;
 font-size: 18px;
}
div#notebook_toolbar div.dynamic-instructions {
 font-family: sans-serif;
 font-size: 17px;
 color: #526488;
}
span#login_widget > .button,
#logout {
 font-family: "Proxima Nova", sans-serif;
 color: #899ab8;
 background: transparent;
 background-color: transparent;
 border: 2px solid #303542;
 font-weight: normal;
 box-shadow: none;
 text-shadow: none;
 border-radius: 3px;
 margin-right: 10px;
 padding: 2px 7px;
}
span#login_widget > .button:hover,
#logout:hover {
 color: #7aa05d;
 background-color: transparent;
 background: transparent;
 border: 2px solid #7aa05d;
 background-image: none;
 box-shadow: none !important;
 border-radius: 3px;
}
span#login_widget > .button:focus,
#logout:focus,
span#login_widget > .button.focus,
#logout.focus,
span#login_widget > .button:active,
#logout:active,
span#login_widget > .button.active,
#logout.active,
.open > .dropdown-togglespan#login_widget > .button,
.open > .dropdown-toggle#logout {
 color: #d8dcee;
 background-color: #899ab8;
 background: #899ab8;
 border-color: #899ab8;
 background-image: none;
 box-shadow: none !important;
 border-radius: 2px;
}
body > #header #header-container {
 padding-bottom: 0px;
 padding-top: 4px;
 box-sizing: border-box;
 -moz-box-sizing: border-box;
 -webkit-box-sizing: border-box;
}
body > #header {
 background: #1d1e23;
 background-color: #1d1e23;
 position: relative;
 z-index: 100;
}
.list_container {
 font-size: 11.5pt;
 color: #899ab8;
 border: none;
 text-shadow: none !important;
}
.list_container > div {
 border-bottom: 1px solid rgba(80,92,133,.22);
 font-size: 11.5pt;
}
.list_header > div,
.list_item > div {
 padding-top: 6px;
 padding-bottom: 2px;
 padding-left: 0px;
}
.list_header > div .item_link,
.list_item > div .item_link {
 margin-left: -1px;
 vertical-align: middle;
 line-height: 22px;
 font-size: 11.5pt;
}
.item_icon {
 color: #4c8be2;
 font-size: 13pt;
 vertical-align: middle;
}
.list_item input:not([type="checkbox"]) {
 padding-right: 0px;
 height: 1.75em;
 width: 25%;
 margin: 0px 0 0;
 margin-top: 0px;
}
.list_header > div .item_link,
.list_item > div .item_link {
 margin-left: -1px;
 vertical-align: middle;
 line-height: 1.5em;
 font-size: 12pt;
 display: inline-table;
 position: static;
}
#button-select-all {
 height: 34px;
 min-width: 55px;
 z-index: 0;
 border: none !important;
 padding-top: 0px;
 padding-bottom: 0px;
 margin-bottom: 0px;
 margin-top: 0px;
 left: -3px;
 border-radius: 0px !important;
}
#button-select-all:focus,
#button-select-all:active:focus,
#button-select-all.active:focus,
#button-select-all.focus,
#button-select-all:active.focus,
#button-select-all.active.focus {
 background-color: #303542 !important;
 background: #303542 !important;
}
button#tree-selector-btn {
 height: 34px;
 font-size: 10.5pt;
 border: none;
 left: 0px;
 border-radius: 0px !important;
}
input#select-all.pull-left.tree-selector {
 margin-left: 7px;
 margin-right: 2px;
 margin-top: 2px;
 top: 4px;
}
input[type="radio"],
input[type="checkbox"] {
 margin-top: 1px;
 line-height: normal;
}
.delete-button {
 border: none !important;
}
i.fa.fa-trash {
 font-size: 13.5pt;
}
.list_container a {
 font-size: 16px;
 color: #899ab8;
 border: none;
 text-shadow: none !important;
 font-weight: normal;
 font-style: normal;
}
div.list_container a:hover {
 color: #bbc2e0;
}
.list_header > div input,
.list_item > div input {
 margin-right: 7px;
 margin-left: 12px;
 vertical-align: baseline;
 line-height: 22px;
 position: relative;
 top: -1px;
}
div.list_item:hover {
 background-color: rgba(80,90,133,.06);
}
.breadcrumb > li {
 font-size: 10.5pt;
 color: #899ab8;
 border: none;
 text-shadow: none !important;
}
.breadcrumb > li + li:before {
 content: "/\\00a0";
 padding: 0px;
 color: #899ab8;
 font-size: 18px;
}
#project_name > .breadcrumb {
 padding: 0px;
 margin-bottom: 0px;
 background-color: transparent;
 font-weight: normal;
 margin-top: -2px;
}
ul#tabs a {
 font-family: sans-serif;
 font-size: 13.5pt;
 font-weight: normal;
 font-style: normal;
 text-shadow: none !important;
}
.nav-tabs {
 font-family: sans-serif;
 font-size: 13.5pt;
 font-weight: normal;
 font-style: normal;
 background-color: transparent;
 border-color: transparent;
 text-shadow: none !important;
 border: 2px solid transparent;
}
.nav-tabs > li > a:active,
.nav-tabs > li > a:focus,
.nav-tabs > li > a:hover,
.nav-tabs > li.active > a,
.nav-tabs > li.active > a:focus,
.nav-tabs > li.active > a:hover,
.nav-tabs > li.active > a,
.nav-tabs > li.active > a:hover,
.nav-tabs > li.active > a:focus {
 color: #7aa05d;
 background-color: transparent;
 border-color: transparent;
 border-bottom: 2px solid transparent;
}
.nav > li.disabled > a,
.nav > li.disabled > a:hover {
 color: #526488;
}
.nav-tabs > li > a:before {
 content: "";
 position: absolute;
 width: 100%;
 height: 2px;
 bottom: -2px;
 left: 0;
 background-color: #7aa05d;
 visibility: hidden;
 -webkit-transform: perspective(0)scaleX(0);
 transform: perspective(0)scaleX(0);
 -webkit-transition: ease 220ms;
 transition: ease 220ms;
 -webkit-font-smoothing: antialiased !important;
}
.nav-tabs > li > a:hover:before {
 visibility: visible;
 -webkit-transform: perspective(1)scaleX(1);
 transform: perspective(1)scaleX(1);
}
.nav-tabs > li.active > a:before {
 content: "";
 position: absolute;
 width: 100%;
 height: 2px;
 bottom: -2px;
 left: 0;
 background-color: #7aa05d;
 visibility: visible;
 -webkit-transform: perspective(1)scaleX(1);
 transform: perspective(1)scaleX(1);
 -webkit-font-smoothing: subpixel-antialiased !important;
}
div#notebook {
 font-family: sans-serif;
 font-size: 11.5pt;
 padding-top: 4px;
}
.notebook_app {
 background-color: #1d1e23;
}
#notebook-container {
 padding: 13px 2px;
 background-color: #1d1e23;
 min-height: 0px;
 box-shadow: none;
 width: 75%;
 margin-right: auto;
 margin-left: auto;
}
div#ipython-main-app.container {
 width: 75%;
 margin-right: auto;
 margin-left: auto;
 margin-right: auto;
 margin-left: auto;
}
.container {
 width: 75%;
 margin-right: auto;
 margin-left: auto;
}
div#menubar-container {
 width: 100%;
 width: 75%;
}
div#header-container {
 width: 75%;
}
.notebook_app #header,
.edit_app #header {
 box-shadow: none !important;
 background-color: #1d1e23;
 border-bottom: 2px solid rgba(80,92,133,.22);
}
#header,
.edit_app #header {
 font-family: sans-serif;
 font-size: 11.5pt;
 box-shadow: none;
 background-color: #1d1e23;
}
#header .header-bar,
.edit_app #header .header-bar {
 background: #1d1e23;
 background-color: #1d1e23;
}
body > #header .header-bar {
 width: 100%;
 background: #1d1e23;
}
span.checkpoint_status,
span.autosave_status {
 font-size: small;
 display: none;
}
#menubar,
div#menubar {
 background-color: #1d1e23;
 padding-top: 0px !important;
}
#menubar .navbar,
.navbar-default {
 background-color: #1d1e23;
 margin-bottom: 0px;
 margin-top: 0px;
}
.navbar {
 border: none;
}
div.navbar-text,
.navbar-text,
.navbar-text.indicator_area,
p.navbar-text.indicator_area {
 margin-top: 8px !important;
 margin-bottom: 0px;
 color: #7aa05d;
}
.navbar-default {
 font-family: sans-serif;
 font-size: 11.5pt;
 background-color: #1d1e23;
 border-color: #313643;
 line-height: 1.5em;
 padding-bottom: 0px;
}
.navbar-default .navbar-nav > li > a {
 font-family: sans-serif;
 font-size: 11.5pt;
 color: #899ab8;
 display: block;
 line-height: 1.5em;
 padding-top: 14px;
 padding-bottom: 11px;
}
.navbar-default .navbar-nav > li > a:hover,
.navbar-default .navbar-nav > li > a:focus {
 color: #bbc2e0 !important;
 background-color: rgba(80,92,133,.22) !important;
 border-color: #313643 !important;
 line-height: 1.5em;
 transition: 80ms ease;
}
.navbar-default .navbar-nav > .open > a,
.navbar-default .navbar-nav > .open > a:hover,
.navbar-default .navbar-nav > .open > a:focus {
 color: #d8dcee;
 background-color: #353b49;
 border-color: #353b49;
 line-height: 1.5em;
}
.navbar-nav > li > .dropdown-menu {
 margin-top: 0px;
}
.navbar-nav {
 margin: 0;
}
div.notification_widget.info,
.notification_widget.info,
.notification_widget:active:hover,
.notification_widget.active:hover,
.open > .dropdown-toggle.notification_widget:hover,
.notification_widget:active:focus,
.notification_widget.active:focus,
.open > .dropdown-toggle.notification_widget:focus,
.notification_widget:active.focus,
.notification_widget.active.focus,
.open > .dropdown-toggle.notification_widget.focus,
div#notification_notebook.notification_widget.btn.btn-xs.navbar-btn,
div#notification_notebook.notification_widget.btn.btn-xs.navbar-btn:hover,
div#notification_notebook.notification_widget.btn.btn-xs.navbar-btn:focus {
 color: #899ab8 !important;
 background-color: transparent !important;
 border-color: transparent !important;
 padding-bottom: 0px !important;
 margin-bottom: 0px !important;
 font-size: 9pt !important;
 z-index: 0;
}
div#notification_notebook.notification_widget.btn.btn-xs.navbar-btn {
 font-size: 9pt !important;
 z-index: 0;
}
.notification_widget {
 color: #4c8be2;
 z-index: -500;
 font-size: 9pt;
 background: transparent;
 background-color: transparent;
 margin-right: 3px;
 border: none;
}
.notification_widget,
div.notification_widget {
 margin-right: 0px;
 margin-left: 0px;
 padding-right: 0px;
 vertical-align: text-top !important;
 margin-top: 6px !important;
 background: transparent !important;
 background-color: transparent !important;
 font-size: 9pt !important;
 border: none;
}
.navbar-btn.btn-xs:hover {
 border: none !important;
 background: transparent !important;
 background-color: transparent !important;
 color: #899ab8 !important;
}
div.notification_widget.info,
.notification_widget.info {
 display: none !important;
}
.edit_mode .modal_indicator:before {
 display: none;
}
.command_mode .modal_indicator:before {
 display: none;
}
.item_icon {
 color: #4c8be2;
}
.item_buttons .kernel-name {
 font-size: 11.5pt;
 color: #4c8be2;
}
.running_notebook_icon:before {
 color: #94c273 !important;
 font: normal normal normal 15px/1 FontAwesome;
 font-size: 15px;
 text-rendering: auto;
 -webkit-font-smoothing: antialiased;
 -moz-osx-font-smoothing: grayscale;
 content: "\\f10c";
 vertical-align: middle;
 position: static;
 display: inherit;
}
.item_buttons .running-indicator {
 padding-top: 4px;
 color: #94c273;
 font-family: sans-serif;
 text-rendering: auto;
 -webkit-font-smoothing: antialiased;
}
#notification_trusted {
 font-family: sans-serif;
 border: none;
 background: transparent;
 background-color: transparent;
 margin-bottom: 0px !important;
 vertical-align: bottom !important;
 color: #526488 !important;
 cursor: default !important;
}
#notification_area,
div.notification_area {
 float: right !important;
 position: static;
 cursor: pointer;
 padding-top: 6px;
 padding-right: 4px;
}
div#notification_notebook.notification_widget.btn.btn-xs.navbar-btn {
 font-size: 9pt !important;
 z-index: 0;
 margin-top: -5px !important;
}
#modal_indicator {
 float: right !important;
 color: #4c8be2;
 background: #1d1e23;
 background-color: #1d1e23;
 margin-top: 8px !important;
 margin-left: 0px;
}
#kernel_indicator {
 float: right !important;
 color: #7aa05d;
 background: #1d1e23;
 background-color: #1d1e23;
 border-left: 2px solid #7aa05d;
 padding-top: 0px;
 padding-bottom: 4px;
 margin-top: 10px !important;
 margin-left: -2px;
 padding-left: 5px !important;
}
#kernel_indicator .kernel_indicator_name {
 font-size: 17px;
 color: #7aa05d;
 background: #1d1e23;
 background-color: #1d1e23;
 padding-left: 5px;
 padding-right: 5px;
 margin-top: 4px;
 vertical-align: text-top;
 padding-bottom: 0px;
}
.kernel_idle_icon:before {
 display: inline-block;
 font: normal normal normal 22px/1 FontAwesome;
 font-size: 22px;
 text-rendering: auto;
 -webkit-font-smoothing: antialiased;
 cursor: pointer;
 margin-left: 0px !important;
 opacity: 0.7;
 vertical-align: bottom;
 margin-top: 1px;
 content: "\\f1db";
}
.kernel_busy_icon:before {
 display: inline-block;
 font: normal normal normal 22px/1 FontAwesome;
 font-size: 22px;
 -webkit-animation: pulsate 2s infinite ease-out;
 animation: pulsate 2s infinite ease-out;
 text-rendering: auto;
 -webkit-font-smoothing: antialiased;
 cursor: pointer;
 margin-left: 0px !important;
 vertical-align: bottom;
 margin-top: 1px;
 content: "\\f111";
}
@-webkit-keyframes pulsate {
 0% {
  -webkit-transform: scale(1.0,1.0);
  opacity: 0.8;
 }
 8% {
  -webkit-transform: scale(1.0,1.0);
  opacity: 0.8;
 }
 50% {
  -webkit-transform: scale(0.75,0.75);
  opacity: 0.3;
 }
 92% {
  -webkit-transform: scale(1.0,1.0);
  opacity: 0.8;
 }
 100% {
  -webkit-transform: scale(1.0,1.0);
  opacity: 0.8;
 }
}
div.notification_widget.info,
.notification_widget.info,
.notification_widget:active:hover,
.notification_widget.active:hover,
.open > .dropdown-toggle.notification_widget:hover,
.notification_widget:active:focus,
.notification_widget.active:focus,
.open > .dropdown-toggle.notification_widget:focus,
.notification_widget:active.focus,
.notification_widget.active.focus,
.open > .dropdown-toggle.notification_widget.focus,
div#notification_notebook.notification_widget.btn.btn-xs.navbar-btn,
div#notification_notebook.notification_widget.btn.btn-xs.navbar-btn:hover,
div#notification_notebook.notification_widget.btn.btn-xs.navbar-btn:focus {
 color: #899ab8;
 background-color: #1d1e23;
 border-color: #1d1e23;
}
#notification_area,
div.notification_area {
 float: right !important;
 position: static;
}
.notification_widget,
div.notification_widget {
 margin-right: 0px;
 margin-left: 0px;
 padding-right: 0px;
 vertical-align: text-top !important;
 margin-top: 6px !important;
 z-index: 1000;
}
#kernel_logo_widget,
#kernel_logo_widget .current_kernel_logo {
 display: none;
}
div#ipython_notebook {
 display: none;
}
i.fa.fa-icon {
 -webkit-font-smoothing: antialiased;
 -moz-osx-font-smoothing: grayscale;
 text-rendering: auto;
}
.fa {
 display: inline-block;
 font: normal normal normal 10pt/1 "FontAwesome", sans-serif;
 text-rendering: auto;
 -webkit-font-smoothing: antialiased;
 -moz-osx-font-smoothing: grayscale;
}
.dropdown-menu {
 font-family: sans-serif;
 font-size: 11.5pt;
 box-shadow: none;
 padding: 0px;
 text-align: left;
 border: none;
 background-color: #353b49;
 background: #353b49;
 line-height: 1;
}
.dropdown-menu:hover {
 font-family: sans-serif;
 font-size: 11.5pt;
 box-shadow: none;
 padding: 0px;
 text-align: left;
 border: none;
 background-color: #353b49;
 box-shadow: none;
 line-height: 1;
}
.dropdown-menu > li > a {
 font-family: sans-serif;
 font-size: 10.5pt;
 display: block;
 padding: 10px 20px 9px 10px;
 color: #899ab8;
 background-color: #353b49;
 background: #353b49;
}
.dropdown-menu > li > a:hover,
.dropdown-menu > li > a:focus {
 color: #bbc2e0;
 background-color: #313643;
 background: #313643;
 border-color: #313643;
 transition: 200ms ease;
}
.dropdown-menu .divider {
 height: 1px;
 margin: 0px 0px;
 overflow: hidden;
 background-color: rgba(80,92,133,.45);
}
.dropdown-submenu > .dropdown-menu {
 display: none;
 top: 2px !important;
 left: 100%;
 margin-top: -2px;
 margin-left: 0px;
 padding-top: 0px;
 transition: 200ms ease;
}
.dropdown-menu > .disabled > a,
.dropdown-menu > .disabled > a:hover,
.dropdown-menu > .disabled > a:focus {
 font-family: sans-serif;
 font-size: 10.5pt;
 font-weight: normal;
 color: #526488;
 padding: none;
 display: block;
 clear: both;
 white-space: nowrap;
}
.dropdown-submenu > a:after {
 color: #899ab8;
 margin-right: -16px;
 margin-top: 0px;
 display: inline-block;
}
.dropdown-submenu:hover > a:after,
.dropdown-submenu:active > a:after,
.dropdown-submenu:focus > a:after,
.dropdown-submenu:visited > a:after {
 color: #7aa05d;
 margin-right: -16px;
 display: inline-block !important;
}
div.kse-dropdown > .dropdown-menu,
.kse-dropdown > .dropdown-menu {
 min-width: 0;
 top: 94%;
}
.btn,
.btn-default {
 font-family: sans-serif;
 color: #899ab8;
 background: #303542;
 background-color: #303542;
 border: 2px solid #303542;
 font-weight: normal;
 box-shadow: none;
 text-shadow: none;
 border-radius: 3px;
 font-size: initial;
}
.btn:hover,
.btn:active:hover,
.btn.active:hover,
.btn-default:hover,
.open > .dropdown-toggle.btn-default:hover,
.open > .dropdown-toggle.btn:hover {
 color: #7aa05d;
 border: 2px solid #2a2e39;
 background-color: #2a2e39;
 background: #2a2e39;
 background-image: none;
 box-shadow: none !important;
 border-radius: 3px;
}
.btn:active,
.btn.active,
.btn:active:focus,
.btn.active:focus,
.btn:active.focus,
.btn.active.focus,
.btn-default:focus,
.btn-default.focus,
.btn-default:active,
.btn-default.active,
.btn-default:active:hover,
.btn-default.active:hover,
.btn-default:active:focus,
.btn-default.active:focus,
.btn-default:active.focus,
.btn-default.active.focus,
.open > .dropdown-toggle.btn:focus,
.open > .dropdown-toggle.btn.focus,
.open > .dropdown-toggle.btn-default:hover,
.open > .dropdown-toggle.btn-default:focus,
.open > .dropdown-toggle.btn-default.hover,
.open > .dropdown-toggle.btn-default.focus {
 color: #7aa05d;
 border: 2px solid #2a2e39;
 background-color: #2a2e39 !important;
 background: #2a2e39 !important;
 background-image: none;
 box-shadow: none !important;
 border-radius: 3px;
}
.btn-default:active:hover,
.btn-default.active:hover,
.btn-default:active:focus,
.btn-default.active:focus,
.btn-default:active.focus,
.btn-default.active.focus {
 color: #8adc4b !important;
 background-color: #303542;
 border-color: #546745 !important;
 transition: 2000ms ease;
}
.btn:focus,
.btn.focus,
.btn:active:focus,
.btn.active:focus,
.btn:active,
.btn.active,
.btn:active.focus,
.btn.active.focus {
 color: #8adc4b !important;
 outline: none !important;
 outline-width: 0px !important;
 background: #546745 !important;
 background-color: #546745 !important;
 border-color: #546745 !important;
 transition: 200ms ease !important;
}
.item_buttons > .btn,
.item_buttons > .btn-group,
.item_buttons > .input-group {
 font-size: 11.5pt;
 background: transparent;
 background-color: transparent;
 border: 0px solid #2e3642;
 border-bottom: 2px solid transparent;
 margin-left: 5px;
 padding-top: 4px !important;
}
.item_buttons > .btn:hover,
.item_buttons > .btn-group:hover,
.item_buttons > .input-group:hover,
.item_buttons > .btn.active,
.item_buttons > .btn-group.active,
.item_buttons > .input-group.active,
.item_buttons > .btn.focus {
 margin-left: 5px;
 background: #2a313c;
 padding-top: 4px !important;
 background-color: transparent;
 border: 0px solid transparent;
 border-bottom: 2px solid #7aa05d;
 border-radius: 0px;
 transition: none;
}
.item_buttons {
 line-height: 1.5em !important;
}
.item_buttons .btn {
 min-width: 11ex;
}
.btn-group > .btn:first-child {
 margin-left: 3px;
}
.btn-group > .btn-mini,
.btn-sm,
.btn-group-sm > .btn,
.btn-xs,
.btn-group-xs > .btn,
.alternate_upload .btn-upload,
.btn-group,
.btn-group-vertical {
 font-size: inherit;
 font-weight: normal;
 height: inherit;
 line-height: inherit;
}
.btn-xs,
.btn-group-xs > .btn {
 font-size: initial !important;
 background-image: none;
 font-weight: normal;
 text-shadow: none;
 display: inline-table;
 padding: 2px 5px;
 line-height: 1.45;
}
.btn-group > .btn:first-child {
 margin-left: 3px;
}
div#new-buttons > button,
#new-buttons > button,
div#refresh_notebook_list,
#refresh_notebook_list {
 background: transparent;
 background-color: transparent;
 border: none;
}
div#new-buttons > button:hover,
#new-buttons > button:hover,
div#refresh_notebook_list,
#refresh_notebook_list,
div.alternate_upload .btn-upload,
.alternate_upload .btn-upload,
div.dynamic-buttons > button,
.dynamic-buttons > button,
.dynamic-buttons > button:focus,
.dynamic-buttons > button:active:focus,
.dynamic-buttons > button.active:focus,
.dynamic-buttons > button.focus,
.dynamic-buttons > button:active.focus,
.dynamic-buttons > button.active.focus,
#new-buttons > button:focus,
#new-buttons > button:active:focus,
#new-buttons > button.active:focus,
#new-buttons > button.focus,
#new-buttons > button:active.focus,
#new-buttons > button.active.focus,
.alternate_upload .btn-upload:focus,
.alternate_upload .btn-upload:active:focus,
.alternate_upload .btn-upload.active:focus,
.alternate_upload .btn-upload.focus,
.alternate_upload .btn-upload:active.focus,
.alternate_upload .btn-upload.active.focus {
 background: transparent !important;
 background-color: transparent !important;
 border: none !important;
}
.alternate_upload input.fileinput {
 text-align: center;
 vertical-align: bottom;
 margin-left: -.5ex;
 display: inline-table;
 border: solid 0px #303542;
 margin-bottom: -1ex;
}
.alternate_upload .btn-upload {
 display: inline-table;
 background: transparent;
 border: none;
}
.btn-group .btn + .btn,
.btn-group .btn + .btn-group,
.btn-group .btn-group + .btn,
.btn-group .btn-group + .btn-group {
 margin-left: -2px;
}
.btn-group > .btn:first-child:not(:last-child):not(.dropdown-toggle) {
 border-bottom-right-radius: 0;
 border-top-right-radius: 0;
 z-index: 2;
}
.dropdown-header {
 font-family: sans-serif !important;
 font-size: 11.5pt !important;
 color: #7aa05d !important;
 border-bottom: none !important;
 padding: 0px !important;
 margin: 6px 6px 0px !important;
}
span#last-modified.btn.btn-xs.btn-default.sort-action,
span#sort-name.btn.btn-xs.btn-default.sort-action,
span#file-size.btn.btn-xs.btn-default.sort-action {
 font-family: sans-serif;
 font-size: 16px;
 background-color: transparent;
 background: transparent;
 border: none;
 color: #899ab8;
 padding-bottom: 0px;
 margin-bottom: 0px;
 vertical-align: sub;
}
span#last-modified.btn.btn-xs.btn-default.sort-action {
 margin-left: 19px;
}
button.close {
 border: 0px none;
 font-family: sans-serif;
 font-size: 20pt;
 font-weight: normal;
}
.dynamic-buttons {
 padding-top: 0px;
 display: inline-block;
}
.close {
 color: #dc6972;
 opacity: .5;
 text-shadow: none;
 font-weight: normal;
}
.close:hover {
 color: #dc6972;
 opacity: 1;
 font-weight: normal;
}
div.nbext-enable-btns .btn[disabled],
div.nbext-enable-btns .btn[disabled]:hover,
.btn-default.disabled,
.btn-default[disabled],
.btn-default.disabled:hover,
.btn-default[disabled]:hover,
fieldset[disabled] .btn-default:hover,
.btn-default.disabled:focus,
.btn-default[disabled]:focus,
fieldset[disabled] .btn-default:focus,
.btn-default.disabled.focus,
.btn-default[disabled].focus,
fieldset[disabled] .btn-default.focus {
 color: #687b96;
 background: #2e333f;
 background-color: #2e333f;
 border-color: #2e333f;
 transition: 200ms ease;
}
.input-group-addon {
 padding: 2px 5px;
 font-size: 11.5pt;
 font-weight: normal;
 height: auto;
 color: #899ab8;
 text-align: center;
 background-color: transparent;
 border: 2px solid transparent !important;
 text-transform: capitalize;
}
a.btn.btn-default.input-group-addon:hover {
 background: transparent !important;
 background-color: transparent !important;
}
.btn-group > .btn + .dropdown-toggle {
 padding-left: 8px;
 padding-right: 8px;
 height: 100%;
}
.btn-group > .btn + .dropdown-toggle:hover {
 background: #2a2e39 !important;
}
.input-group-btn {
 position: relative;
 font-size: inherit;
 white-space: nowrap;
 background: #2e3642;
 background-color: #2e3642;
 border: none;
}
.input-group-btn:hover {
 background: #2a313c;
 background-color: #2a313c;
 border: none;
}
.input-group-btn:first-child > .btn,
.input-group-btn:first-child > .btn-group {
 background: #2e3642;
 background-color: #2e3642;
 border: none;
 margin-left: 2px;
 margin-right: -1px;
 font-size: inherit;
}
.input-group-btn:first-child > .btn:hover,
.input-group-btn:first-child > .btn-group:hover {
 background: #2a2e39;
 background-color: #2a2e39;
 border: none;
 font-size: inherit;
 transition: 200ms ease;
}
div.modal .btn-group > .btn:first-child {
 background: #2e3642;
 background-color: #2e3642;
 border: 1px solid #2c343f;
 margin-top: 0px !important;
 margin-left: 0px;
 margin-bottom: 2px;
}
div.modal .btn-group > .btn:first-child:hover {
 background: #2a313c;
 background-color: #2a313c;
 border: 1px solid #2a313c;
 transition: 200ms ease;
}
div.modal > button,
div.modal-footer > button {
 background: #2e3642;
 background-color: #2e3642;
 border-color: #2e3642;
}
div.modal > button:hover,
div.modal-footer > button:hover {
 background: #2a313c;
 background-color: #2a313c;
 border-color: #2a313c;
 transition: 200ms ease;
}
.modal-content {
 font-family: sans-serif;
 font-size: 10.5pt;
 position: relative;
 background: #2e3642;
 background-color: #2e3642;
 border: none;
 border-radius: 1px;
 background-clip: padding-box;
 outline: none;
}
.modal-header {
 font-family: sans-serif;
 font-size: 11.5pt;
 color: #899ab8;
 background: #2e3642;
 background-color: #2e3642;
 border-color: rgba(80,92,133,.22);
 padding: 12px;
 min-height: 16.4286px;
}
.modal-content h4 {
 font-family: sans-serif;
 font-size: 16pt;
 color: #899ab8;
 padding: 5px;
}
.modal-body {
 background-color: #384152;
 position: relative;
 padding: 15px;
}
.modal-footer {
 padding: 8px;
 text-align: right;
 background-color: #384152;
 border-top: none;
}
.alert-info {
 background-color: #4a5467;
 border-color: rgba(80,92,133,.22);
 color: #899ab8;
}
.modal-header .close {
 margin-top: -5px;
 font-size: 25pt;
}
.modal-backdrop,
.modal-backdrop.in {
 opacity: 0.85;
 background-color: notebook-bg;
}
div.panel,
div.panel-default,
.panel,
.panel-default {
 font-family: sans-serif;
 font-size: 11.5pt;
 background-color: #384152;
 color: #899ab8;
 margin-bottom: 14px;
 border: 0;
 box-shadow: none;
}
div.panel > .panel-heading,
div.panel-default > .panel-heading {
 font-size: 14pt;
 color: #899ab8;
 background: #2e3642;
 background-color: #2e3642;
 border: 0;
}
.modal .modal-dialog {
 min-width: 950px;
 margin: 50px auto;
}
div.container-fluid {
 margin-right: auto;
 margin-left: auto;
 padding-left: 0px;
 padding-right: 5px;
}
div.form-control,
.form-control {
 font-family: sans-serif;
 font-size: initial;
 color: #899ab8;
 background-color: #262c36;
 border: 1px solid #262c36 !important;
 margin-left: 2px;
 box-shadow: none;
 transition: border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;
}
.form-control-static {
 min-height: inherit;
 height: inherit;
}
.form-group.list-group-item {
 color: #899ab8;
 background-color: #384152;
 border-color: rgba(80,92,133,.22);
 margin-bottom: 0px;
}
.form-group .input-group {
 float: left;
}
input,
button,
select,
textarea {
 background-color: #262c36;
 font-weight: normal;
 border: 1px solid rgba(80,92,133,.22);
}
select.form-control.select-xs {
 height: 33px;
 font-size: 11.5pt;
}
.toolbar select,
.toolbar label {
 width: auto;
 vertical-align: middle;
 margin-right: 0px;
 margin-bottom: 0px;
 display: inline;
 font-size: 92%;
 margin-left: 10px;
 padding: 0px;
 background: #303542 !important;
 background-color: #303542 !important;
 border: 2px solid #303542 !important;
}
.form-control:focus {
 border-color: #7aa05d;
 outline: 2px solid rgba(53,114,198,.75);
 -webkit-box-shadow: none;
}
::-webkit-input-placeholder {
 color: #526488;
}
::-moz-placeholder {
 color: #526488;
}
:-ms-input-placeholder {
 color: #526488;
}
:-moz-placeholder {
 color: #526488;
}
[dir="ltr"] #find-and-replace .input-group-btn + .form-control {
 border: 2px solid rgba(80,92,133,.22) !important;
}
[dir="ltr"] #find-and-replace .input-group-btn + .form-control:focus {
 border-color: #7aa05d;
 outline: 2px solid rgba(53,114,198,.75);
 -webkit-box-shadow: none;
 box-shadow: none;
}
div.output.output_scroll {
 box-shadow: none;
}
::-webkit-scrollbar {
 width: 11px;
 max-height: 9px;
 background-color: #292d3a;
 border-radius: 3px;
 border: none;
}
::-webkit-scrollbar-track {
 background: #292d3a;
 border: none;
 width: 11px;
 max-height: 9px;
}
::-webkit-scrollbar-thumb {
 border-radius: 2px;
 border: none;
 background: #3f4555;
 background-clip: content-box;
 width: 11px;
}
HTML,
body,
div,
dl,
dt,
dd,
ul,
ol,
li,
h1,
h2,
h3,
h4,
h5,
h6,
pre,
code,
form,
fieldset,
legend,
input,
button,
textarea,
p,
blockquote,
th,
td,
span,
a {
 text-rendering: geometricPrecision;
 -webkit-font-smoothing: subpixel-antialiased;
 font-weight: 400;
}
div.input_area {
 background-color: #2c303c;
 background: #2c303c;
 padding-right: 1.2em;
 border: 0px;
 border-radius: 0px;
 border-top-right-radius: 4px;
 border-bottom-right-radius: 4px;
}
div.cell {
 padding: 0px;
 background: #2c303c;
 background-color: #2c303c;
 border: medium solid #1d1e23;
 border-radius: 4px;
 top: 0;
}
div.cell.selected {
 background: #2c303c;
 background-color: #2c303c;
 border: medium solid #1d1e23;
 padding: 0px;
 border-radius: 5px;
}
.edit_mode div.cell.selected {
 padding: 0px;
 background: #2c303c;
 background-color: #2c303c;
 border: medium solid #1d1e23;
 border-radius: 5px;
}
div.cell.edit_mode {
 padding: 0px;
 background: #2c303c;
 background-color: #2c303c;
}
div.CodeMirror-sizer {
 margin-left: 0px;
 margin-bottom: -21px;
 border-right-width: 16px;
 min-height: 37px;
 padding-right: 0px;
 padding-bottom: 0px;
 margin-top: 0px;
}
div.cell.selected:before,
.edit_mode div.cell.selected:before,
div.cell.selected:before,
div.cell.selected.jupyter-soft-selected:before {
 background: #2c303c !important;
 border: none;
 border-radius: 3px;
 position: absolute;
 display: block;
 top: 0px;
 left: 0px;
 width: 0px;
 height: 100%;
}
div.cell.text_cell.selected::before,
.edit_mode div.cell.text_cell.selected:before,
div.cell.text_cell.selected:before,
div.cell.text_cell.selected.jupyter-soft-selected:before {
 background: #2c303c !important;
 background-color: #2c303c !important;
 border-color: #48536f !important;
}
div.cell.code_cell .input {
 border-left: 5px solid #2c303c !important;
 border-radius: 3px;
 border-bottom-left-radius: 3px;
 border-top-left-radius: 3px;
}
div.cell.code_cell.selected .input {
 border-left: 5px solid #2769c3 !important;
 border-radius: 3px;
}
.edit_mode div.cell.code_cell.selected .input {
 border-left: 5px solid #33517c !important;
 border-radius: 3px;
}
.edit_mode div.cell.selected:before {
 height: 100%;
 border-left: 5px solid #33517c !important;
 border-radius: 3px;
}
div.cell.jupyter-soft-selected,
div.cell.selected.jupyter-soft-selected {
 border-left-color: #33517c !important;
 border-left-width: 0px !important;
 padding-left: 7px !important;
 border-right-color: #33517c !important;
 border-right-width: 0px !important;
 background: #33517c !important;
 border-radius: 6px !important;
}
div.cell.selected.jupyter-soft-selected .input {
 border-left: 5px solid #2c303c !important;
}
div.cell.selected.jupyter-soft-selected {
 border-left-color: #2769c3;
 border-color: #1d1e23;
 padding-left: 7px;
 border-radius: 6px;
}
div.cell.code_cell.selected .input {
 border-left: none;
 border-radius: 3px;
}
div.cell.selected.jupyter-soft-selected .prompt,
div.cell.text_cell.selected.jupyter-soft-selected .prompt {
 top: 0;
 border-left: #2c303c !important;
 border-radius: 2px;
}
div.cell.text_cell.selected.jupyter-soft-selected .input_prompt {
 border-left: none !important;
}
div.cell.text_cell.jupyter-soft-selected,
div.cell.text_cell.selected.jupyter-soft-selected {
 border-left-color: #48536f !important;
 border-left-width: 0px !important;
 padding-left: 26px !important;
 border-right-color: #48536f !important;
 border-right-width: 0px !important;
 background: #48536f !important;
 border-radius: 5px !important;
}
div.cell.jupyter-soft-selected .input,
div.cell.selected.jupyter-soft-selected .input {
 border-left-color: #33517c !important;
}
div.prompt,
.prompt {
 font-family: monospace, monospace;
 font-size: 9pt !important;
 font-weight: normal;
 color: transparent;
 line-height: 170%;
 padding: 0px;
 padding-top: 4px;
 padding-left: 0px;
 padding-right: 1px;
 text-align: right !important;
 min-width: 8ex !important;
 width: 8ex !important;
}
div.prompt.input_prompt {
 font-size: 9pt !important;
 background-color: #2c303c;
 border-top: 0px;
 border-top-right-radius: 0px;
 border-bottom-left-radius: 0px;
 border-bottom-right-radius: 0px;
 padding-right: 3px;
 min-width: 8ex;
 width: 8ex !important;
}
div.cell.code_cell .input_prompt {
 border-right: 2px solid rgba(53,114,198,.75);
}
div.cell.selected .prompt {
 top: 0;
}
.edit_mode div.cell.selected .prompt {
 top: 0;
}
.edit_mode div.cell.selected .prompt {
 top: 0;
}
.run_this_cell {
 visibility: hidden;
 color: transparent;
 padding-top: 0px;
 padding-bottom: 0px;
 padding-left: 3px;
 padding-right: 12px;
 width: 1.5ex;
 width: 0ex;
 background: transparent;
 background-color: transparent;
}
div.code_cell:hover div.input .run_this_cell {
 visibility: visible;
}
div.cell.code_cell.rendered.selected .run_this_cell:hover {
 background-color: #232730;
 background: #232730;
 color: #2769c3 !important;
}
div.cell.code_cell.rendered.unselected .run_this_cell:hover {
 background-color: #232730;
 background: #232730;
 color: #2769c3 !important;
}
i.fa-step-forward.fa {
 display: inline-block;
 font: normal normal normal 9px "FontAwesome";
}
.fa-step-forward:before {
 content: "\\f04b";
}
div.cell.selected.jupyter-soft-selected .run_this_cell,
div.cell.selected.jupyter-soft-selected .run_this_cell:hover,
div.cell.unselected.jupyter-soft-selected .run_this_cell:hover,
div.cell.code_cell.rendered.selected.jupyter-soft-selected .run_this_cell:hover,
div.cell.code_cell.rendered.unselected.jupyter-soft-selected .run_this_cell:hover {
 background-color: #33517c !important;
 background: #33517c !important;
 color: #33517c !important;
}
div.output_wrapper {
 background-color: #373e4b;
 border: 0px;
 left: 0px;
 margin-bottom: 0em;
 margin-top: 0em;
 border-top-right-radius: 0px;
 border-top-left-radius: 0px;
}
div.output_subarea.output_text.output_stream.output_stdout,
div.output_subarea.output_text {
 font-family: monospace, monospace;
 font-size: 20pt !important;
 line-height: 150% !important;
 background-color: #373e4b;
 color: #b1bed6;
 border-top-right-radius: 0px;
 border-top-left-radius: 0px;
 margin-left: 11.5px;
}
div.output_area pre {
 font-family: monospace, monospace;
 font-size: 20pt !important;
 line-height: 151% !important;
 color: #b1bed6;
 border-top-right-radius: 0px;
 border-top-left-radius: 0px;
}
div.output_area {
 display: -webkit-box;
}
div.output_html {
 font-family: monospace, monospace;
 font-size: 20pt;
 color: #dbdfef;
 background-color: #373e4b;
 background: #373e4b;
}
div.output_subarea {
 overflow-x: auto;
 padding: 1.2em !important;
 -webkit-box-flex: 1;
 -moz-box-flex: 1;
 box-flex: 1;
 flex: 1;
}
div.btn.btn-default.output_collapsed {
 background: #242a33;
 background-color: #242a33;
 border-color: #242a33;
}
div.btn.btn-default.output_collapsed:hover {
 background: #1f252d;
 background-color: #1f252d;
 border-color: #1f252d;
}
div.prompt.output_prompt {
 font-family: monospace, monospace;
 font-weight: bold !important;
 background-color: #373e4b;
 color: transparent;
 border-bottom-left-radius: 4px;
 border-top-right-radius: 0px;
 border-top-left-radius: 0px;
 border-bottom-right-radius: 0px;
 min-width: 11ex !important;
 width: 11ex !important;
 border-right: 2px solid transparent;
}
div.out_prompt_overlay.prompt {
 font-family: monospace, monospace;
 font-weight: bold !important;
 background-color: #373e4b;
 border-bottom-left-radius: 2px;
 border-top-right-radius: 0px;
 border-top-left-radius: 0px;
 border-bottom-right-radius: 0px;
 min-width: 11ex !important;
 width: 11ex !important;
 border-right: 2px solid transparent;
 color: transparent;
}
div.out_prompt_overlay.prompt:hover {
 background-color: #3e4458;
 box-shadow: none !important;
 border: none;
 border-bottom-left-radius: 2px;
 -webkit-border-: 2px;
 -moz-border-radius: 2px;
 border-top-right-radius: 0px;
 border-top-left-radius: 0px;
 min-width: 11ex !important;
 width: 11ex !important;
 border-right: 2px solid #3e4458 !important;
}
div.cell.code_cell .output_prompt {
 border-right: 2px solid transparent;
 color: transparent;
}
div.cell.selected .output_prompt,
div.cell.selected .out_prompt_overlay.prompt {
 border-left: 5px solid #48536f;
 border-right: 2px solid #373e4b;
 border-radius: 0px !important;
}
.edit_mode div.cell.selected .output_prompt,
.edit_mode div.cell.selected .out_prompt_overlay.prompt {
 border-left: 5px solid #48536f;
 border-right: 2px solid #373e4b;
 border-radius: 0px !important;
}
div.text_cell,
div.text_cell_render pre,
div.text_cell_render {
 font-family: sans-serif;
 font-size: 11pt;
 line-height: 130% !important;
 color: #abb7ce;
 background: #2c303c;
 background-color: #2c303c;
 border-radius: 0px;
}
div .text_cell_render {
 padding: 0.4em 0.4em 0.4em 0.4em;
}
div.cell.text_cell .CodeMirror-lines {
 padding-top: .7em !important;
 padding-bottom: .4em !important;
 padding-left: .5em !important;
 padding-right: .5em !important;
 margin-top: .4em;
 margin-bottom: .3em;
}
div.cell.text_cell.unrendered div.input_area,
div.cell.text_cell.rendered div.input_area {
 background-color: #2c303c;
 background: #2c303c;
 border: 0px;
 border-radius: 2px;
}
div.cell.text_cell .CodeMirror,
div.cell.text_cell .CodeMirror pre {
 line-height: 170% !important;
}
div.cell.text_cell.rendered.selected {
 font-family: sans-serif;
 line-height: 170% !important;
 background: #2c303c;
 background-color: #2c303c;
 border-radius: 0px;
}
div.cell.text_cell.unrendered.selected {
 font-family: sans-serif;
 line-height: 170% !important;
 background: #2c303c;
 background-color: #2c303c;
 border-radius: 0px;
}
div.cell.text_cell.selected {
 font-family: sans-serif;
 line-height: 170% !important;
 background: #2c303c;
 background-color: #2c303c;
 border-radius: 0px;
}
.edit_mode div.cell.text_cell.selected {
 font-family: sans-serif;
 line-height: 170% !important;
 background: #2c303c;
 background-color: #2c303c;
 border-radius: 0px;
}
div.text_cell.unrendered,
div.text_cell.unrendered.selected,
div.edit_mode div.text_cell.unrendered {
 font-family: sans-serif;
 line-height: 170% !important;
 background: #2c303c;
 background-color: #2c303c;
 border-radius: 0px;
}
div.cell.text_cell .prompt {
 border-right: 0;
 min-width: 8ex !important;
 width: 8ex !important;
}
div.cell.text_cell.rendered .prompt {
 font-family: monospace, monospace;
 font-size: 9.5pt !important;
 font-weight: normal;
 color: transparent !important;
 text-align: right !important;
 min-width: 11ex !important;
 width: 11ex !important;
 background-color: #2c303c;
 border-right: 2px solid transparent;
 border-left: 4px solid #2c303c;
}
div.cell.text_cell.unrendered .prompt {
 font-family: monospace, monospace;
 font-size: 9.5pt !important;
 font-weight: normal;
 color: transparent !important;
 text-align: right !important;
 min-width: 11ex !important;
 width: 11ex !important;
 border-right: 2px solid transparent;
 border-left: 4px solid #2c303c;
 background-color: #2c303c;
}
div.cell.text_cell.rendered .prompt {
 border-right: 2px solid transparent;
}
div.cell.text_cell.rendered.selected .prompt {
 top: 0;
 border-left: 4px solid #48536f;
 border-right: 2px solid transparent;
}
div.text_cell.unrendered.selected .prompt,
div.text_cell.rendered.selected .prompt {
 top: 0;
 background: #2c303c;
 border-left: 4px solid #48536f;
 border-right: 2px solid transparent;
}
div.rendered_html code {
 font-family: monospace, monospace;
 font-size: 9.5pt;
 padding-top: 3px;
 padding-left: 2px;
 color: #b5c2d9;
 background: #262c36;
 background-color: #262c36;
}
pre,
code,
kbd,
samp {
 white-space: pre-wrap;
}
.well code,
code {
 font-family: monospace, monospace;
 font-size: 9.5pt !important;
 line-height: 170% !important;
 color: #abb7ce;
 background: #262c36;
 background-color: #262c36;
 border-color: #262c36;
}
kbd {
 padding: 1px;
 font-size: 9.5pt;
 font-weight: 800;
 color: #b5c2d9;
 background-color: transparent !important;
 border: 0;
 box-shadow: none;
}
pre {
 display: block;
 padding: 8.5px;
 margin: 0 0 9px;
 font-size: 10.5pt;
 line-height: 1.42857143;
 color: #b5c2d9;
 background-color: #262c36;
 border: 1px solid #262c36;
 border-radius: 2px;
}
div.rendered_html {
 color: #abb7ce;
}
.rendered_html * + ul {
 margin-top: .4em;
 margin-bottom: .3em;
}
.rendered_html * + p {
 margin-top: .5em;
 margin-bottom: .5em;
}
div.rendered_html pre {
 font-family: monospace, monospace;
 font-size: 9.5pt !important;
 line-height: 170% !important;
 color: #abb7ce !important;
 background: #262c36;
 background-color: #262c36;
 max-width: 80%;
 border-radius: 0px;
 border-left: 3px solid #262c36;
 max-width: 80%;
 border-radius: 0px;
 padding-left: 5px;
 margin-left: 6px;
}
div.text_cell_render pre,
div.text_cell_render code {
 font-family: monospace, monospace;
 font-size: 9.5pt !important;
 line-height: 170% !important;
 color: #abb7ce;
 background: #1d1e23;
 background-color: #1d1e23;
 max-width: 80%;
 border-radius: 0px;
 border-left: none;
}
div.text_cell_render pre {
 border-left: 3px solid rgba(53,114,198,.75) !important;
 max-width: 80%;
 border-radius: 0px;
 padding-left: 5px;
 margin-left: 6px;
}
div.text_cell_render h1,
div.rendered_html h1,
div.text_cell_render h2,
div.rendered_html h2,
div.text_cell_render h3,
div.rendered_html h3,
div.text_cell_render h4,
div.rendered_html h4,
div.text_cell_render h5,
div.rendered_html h5 {
 font-family: sans-serif;
 margin: 0.4em .2em .3em .2em !important;
}
.rendered_html h1:first-child,
.rendered_html h2:first-child,
.rendered_html h3:first-child,
.rendered_html h4:first-child,
.rendered_html h5:first-child,
.rendered_html h6:first-child {
 margin-top: 0.2em !important;
 margin-bottom: 0.2em !important;
}
.rendered_html h1,
.text_cell_render h1 {
 color: #7aa05d !important;
 font-size: 200%;
 text-align: left;
 font-style: normal;
 font-weight: normal;
}
.rendered_html h2,
.text_cell_render h2 {
 color: #7aa05d !important;
 font-size: 170%;
 font-style: normal;
 font-weight: normal;
}
.rendered_html h3,
.text_cell_render h3 {
 color: #7aa05d !important;
 font-size: 140%;
 font-style: normal;
 font-weight: normal;
}
.rendered_html h4,
.text_cell_render h4 {
 color: #7aa05d !important;
 font-size: 110%;
 font-style: normal;
 font-weight: normal;
}
.rendered_html h5,
.text_cell_render h5 {
 color: #7aa05d !important;
 font-size: 100%;
 font-style: normal;
 font-weight: normal;
}
hr {
 margin-top: 8px;
 margin-bottom: 10px;
 border: 0;
 border-top: 1px solid #7aa05d;
}
.rendered_html hr {
 color: #7aa05d;
 background-color: #7aa05d;
 margin-right: 2em;
}
#complete > select > option:hover {
 background: #313643;
 background-color: #313643;
}
div#_vivaldi-spatnav-focus-indicator._vivaldi-spatnav-focus-indicator {
 position: absolute;
 z-index: 9999999999;
 top: 0px;
 left: 0px;
 box-shadow: none;
 pointer-events: none;
 border-radius: 2px;
}
.rendered_html tr,
.rendered_html th,
.rendered_html td {
 text-align: left;
 vertical-align: middle;
 padding: 0.42em 0.47em;
 line-height: normal;
 white-space: normal;
 max-width: none;
 border: none;
}
.rendered_html td {
 font-family: sans-serif !important;
 font-size: 9.3pt;
}
.rendered_html table {
 font-family: sans-serif !important;
 margin-left: 8px;
 margin-right: auto;
 border: none;
 border-collapse: collapse;
 border-spacing: 0;
 color: #dbdfef;
 table-layout: fixed;
}
.rendered_html thead {
 font-family: sans-serif !important;
 font-size: 10.3pt !important;
 background: #2e3642;
 color: #d4d8ec;
 border-bottom: 1px solid #2e3642;
 vertical-align: bottom;
}
.rendered_html tbody tr:nth-child(odd) {
 background: #414b5e;
}
.rendered_html tbody tr {
 background: #3b4455;
}
.rendered_html tbody tr:hover:nth-child(odd) {
 background: #3f495b;
}
.rendered_html tbody tr:hover {
 background: #394152;
}
.rendered_html * + table {
 margin-top: .05em;
}
div.widget-area {
 background-color: #373e4b;
 background: #373e4b;
 color: #b1bed6;
}
div.widget-area a {
 font-family: sans-serif;
 font-size: 10.5pt;
 font-weight: normal;
 font-style: normal;
 color: #899ab8;
 text-shadow: none !important;
}
div.widget-area a:hover,
div.widget-area a:focus {
 font-family: sans-serif;
 font-size: 10.5pt;
 font-weight: normal;
 font-style: normal;
 color: #bbc2e0;
 background: rgba(80,92,133,.22);
 background-color: rgba(80,92,133,.22);
 border-color: transparent;
 background-image: none;
 text-shadow: none !important;
}
div.widget_item.btn-group > button.btn.btn-default.widget-combo-btn,
div.widget_item.btn-group > button.btn.btn-default.widget-combo-btn:hover {
 background: #2c343f;
 background-color: #2c343f;
 border: 2px solid #2c343f !important;
 font-size: inherit;
 z-index: 0;
}
div.jupyter-widgets.widget-hprogress.widget-hbox {
 display: inline-table !important;
 width: 38% !important;
 margin-left: 10px;
}
div.jupyter-widgets.widget-hprogress.widget-hbox .widget-label,
div.widget-hbox .widget-label,
.widget-hbox .widget-label,
.widget-inline-hbox .widget-label,
div.widget-label {
 text-align: -webkit-auto !important;
 margin-left: 15px !important;
 max-width: 240px !important;
 min-width: 100px !important;
 vertical-align: text-top !important;
 color: #b1bed6 !important;
 font-size: 14px !important;
}
.widget-hprogress .progress {
 flex-grow: 1;
 height: 20px;
 margin-top: auto;
 margin-left: 12px;
 margin-bottom: auto;
 width: 300px;
}
.progress {
 overflow: hidden;
 height: 22px;
 margin-bottom: 10px;
 padding-left: 10px;
 background-color: #546379 !important;
 border-radius: 2px;
 -webkit-box-shadow: none;
 box-shadow: none;
 z-index: 10;
}
.progress-bar-danger {
 background-color: #e16256 !important;
}
.progress-bar-info {
 background-color: #3498db !important;
}
.progress-bar-warning {
 background-color: #ff914d !important;
}
.progress-bar-success {
 background-color: #83a83b !important;
}
.widget-select select {
 margin-left: 12px;
}
.rendered_html :link {
 font-family: sans-serif;
 font-size: 100%;
 color: #7aa05d;
 text-decoration: underline;
}
.rendered_html :visited,
.rendered_html :visited:active,
.rendered_html :visited:focus {
 color: #85a26f;
}
.rendered_html :visited:hover,
.rendered_html :link:hover {
 font-family: sans-serif;
 font-size: 100%;
 color: #64963e;
}
div.cell.text_cell a.anchor-link:link {
 font-size: inherit;
 text-decoration: none;
 padding: 0px 20px;
 visibility: none;
 color: rgba(0,0,0,.32);
}
div.cell.text_cell a.anchor-link:link:hover {
 font-size: inherit;
 color: #94c273;
}
.navbar-text {
 margin-top: 4px;
 margin-bottom: 0px;
}
#clusters > a {
 color: #94c273;
 text-decoration: underline;
 cursor: auto;
}
#clusters > a:hover {
 color: #4c8be2;
 text-decoration: underline;
 cursor: auto;
}
#nbextensions-configurator-container > div.row.container-fluid.nbext-selector > h3 {
 font-size: 17px;
 margin-top: 5px;
 margin-bottom: 8px;
 height: 24px;
 padding: 4px 0 4px 0;
}
div#nbextensions-configurator-container.container,
#nbextensions-configurator-container.container {
 width: 100%;
 margin-right: auto;
 margin-left: auto;
}
div.nbext-selector > nav > .nav > li > a {
 font-family: sans-serif;
 font-size: 10.5pt;
 padding: 2px 5px;
}
div.nbext-selector > nav > .nav > li > a:hover {
 background: transparent;
}
div.nbext-selector > nav > .nav > li:hover {
 background-color: rgba(80,92,133,.22) !important;
 background: rgba(80,92,133,.22) !important;
}
div.nbext-selector > nav > .nav > li.active:hover {
 background: transparent !important;
 background-color: transparent !important;
}
.nav-pills > li.active > a,
.nav-pills > li.active > a:active,
.nav-pills > li.active > a:hover,
.nav-pills > li.active > a:focus {
 color: #d8dcee;
 background-color: rgba(80,92,133,.22) !important;
 background: rgba(80,92,133,.22) !important;
 -webkit-backface-visibility: hidden;
 -webkit-font-smoothing: subpixel-antialiased !important;
}
div.nbext-readme > .nbext-readme-contents > .rendered_html {
 font-family: sans-serif;
 font-size: 11.5pt;
 line-height: 145%;
 padding: 1em 1em;
 color: #abb7ce;
 background-color: #2c303c;
 -webkit-box-shadow: none;
 -moz-box-shadow: none;
 box-shadow: none;
}
.nbext-icon,
.nbext-desc,
.nbext-compat-div,
.nbext-enable-btns,
.nbext-params {
 margin-bottom: 8px;
 font-size: 11.5pt;
}
div.nbext-readme > .nbext-readme-contents {
 padding: 0;
 overflow-y: hidden;
}
div.nbext-readme > .nbext-readme-contents:not(:empty) {
 margin-top: 0.5em;
 margin-bottom: 2em;
 border: none;
 border-top-color: rgba(148,204,114,.4);
}
.nbext-showhide-incompat {
 padding-bottom: 0.5em;
 color: #687b96;
 font-size: 10.5pt;
}
.nbext-filter-menu.dropdown-menu > li > a:hover,
.nbext-filter-menu.dropdown-menu > li > a:focus,
.nbext-filter-menu.dropdown-menu > li > a.ui-state-focus {
 color: #bbc2e0 !important;
 background-color: #313643 !important;
 background: #313643 !important;
 border-color: #313643 !important;
}
.nbext-filter-input-wrap > .nbext-filter-input-subwrap,
.nbext-filter-input-wrap > .nbext-filter-input-subwrap > input {
 border: none;
 outline: none;
 background-color: transparent;
 padding: 0;
 vertical-align: middle;
 margin-top: -2px;
}
span.rendered_html code {
 background-color: transparent;
 color: #899ab8;
}
#nbextensions-configurator-container > div.row.container-fluid.nbext-selector {
 padding-left: 0px;
 padding-right: 0px;
}
.nbext-filter-menu {
 max-height: 55vh !important;
 overflow-y: auto;
 outline: none;
 border: none;
}
.nbext-filter-menu:hover {
 border: none;
}
.alert-warning {
 background-color: #384152;
 border-color: #384152;
 color: #899ab8;
}
.notification_widget.danger {
 color: #ffffff;
 background-color: #e16256;
 border-color: #e16256;
 padding-right: 5px;
}
#nbextensions-configurator-container > div.nbext-buttons.tree-buttons.no-padding.pull-right > span > button {
 border: none !important;
}
button#refresh_running_list {
 border: none !important;
}
mark,
.mark {
 background-color: #2c303c;
 color: #abb7ce;
 padding: .15em;
}
a.text-warning,
a.text-warning:hover {
 color: #526488;
}
a.text-warning.bg-warning {
 background-color: #1d1e23;
}
span.bg-success.text-success {
 background-color: transparent;
 color: #94c273;
}
span.bg-danger.text-danger {
 background-color: #1d1e23;
 color: #dc6972;
}
.has-success .input-group-addon {
 color: #94c273;
 border-color: transparent;
 background: inherit;
 background-color: rgba(83,180,115,.10);
}
.has-success .form-control {
 border-color: #94c273;
 -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,0.025);
 box-shadow: inset 0 1px 1px rgba(0,0,0,0.025);
}
.has-error .input-group-addon {
 color: #dc6972;
 border-color: transparent;
 background: inherit;
 background-color: rgba(192,57,67,.10);
}
.has-error .form-control {
 border-color: #dc6972;
 -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,0.025);
 box-shadow: inset 0 1px 1px rgba(0,0,0,0.025);
}
.kse-input-group-pretty > kbd {
 font-family: monospace, monospace;
 color: #899ab8;
 font-weight: normal;
 background: transparent;
}
.kse-input-group-pretty > kbd {
 font-family: monospace, monospace;
 color: #899ab8;
 font-weight: normal;
 background: transparent;
}
div.nbext-enable-btns .btn[disabled],
div.nbext-enable-btns .btn[disabled]:hover,
.btn-default.disabled,
.btn-default[disabled] {
 background: #2e333f;
 background-color: #2e333f;
 color: #7f92b2;
}
label#Keyword-Filter {
 display: none;
}
.input-group .nbext-list-btn-add,
.input-group-btn:last-child > .btn-group > .btn {
 background: #2e3642;
 background-color: #2e3642;
 border-color: #2e3642;
 border: 2px solid #2e3642;
}
.input-group .nbext-list-btn-add:hover,
.input-group-btn:last-child > .btn-group > .btn:hover {
 background: #2a313c;
 background-color: #2a313c;
 border-color: #2a313c;
 border: 2px solid #2a313c;
}
#notebook-container > div.cell.code_cell.rendered.selected > div.widget-area > div.widget-subarea > div > div.widget_item.btn-group > button.btn.btn-default.dropdown-toggle.widget-combo-carrot-btn {
 background: #2e3642;
 background-color: #2e3642;
 border-color: #2e3642;
}
#notebook-container > div.cell.code_cell.rendered.selected > div.widget-area > div.widget-subarea > div > div.widget_item.btn-group > button.btn.btn-default.dropdown-toggle.widget-combo-carrot-btn:hover {
 background: #2a313c;
 background-color: #2a313c;
 border-color: #2a313c;
}
.ui-widget-content {
 background: #303542;
 background-color: #303542;
 border: 2px solid #303542;
 color: #899ab8;
}
div.collapsible_headings_toggle {
 color: rgba(80,92,133,.45) !important;
}
div.collapsible_headings_toggle:hover {
 color: #7aa05d !important;
}
.collapsible_headings_toggle .h1,
.collapsible_headings_toggle .h2,
.collapsible_headings_toggle .h3,
.collapsible_headings_toggle .h4,
.collapsible_headings_toggle .h5,
.collapsible_headings_toggle .h6 {
 margin: 0.3em .4em 0em 0em !important;
 line-height: 1.2 !important;
}
div.collapsible_headings_toggle .fa-caret-down:before,
div.collapsible_headings_toggle .fa-caret-right:before {
 font-size: xx-large;
 transition: transform 1000ms;
 transform: none !important;
}
.collapsible_headings_collapsed.collapsible_headings_ellipsis .rendered_html h1:after,
.collapsible_headings_collapsed.collapsible_headings_ellipsis .rendered_html h2:after,
.collapsible_headings_collapsed.collapsible_headings_ellipsis .rendered_html h3:after,
.collapsible_headings_collapsed.collapsible_headings_ellipsis .rendered_html h4:after,
.collapsible_headings_collapsed.collapsible_headings_ellipsis .rendered_html h5:after,
.collapsible_headings_collapsed.collapsible_headings_ellipsis .rendered_html h6:after {
 position: absolute;
 right: 0;
 bottom: 20% !important;
 content: "[\\002026]";
 color: rgba(80,92,133,.45) !important;
 padding: 0.5em 0em 0em 0em !important;
}
.collapsible_headings_ellipsis .rendered_html h1,
.collapsible_headings_ellipsis .rendered_html h2,
.collapsible_headings_ellipsis .rendered_html h3,
.collapsible_headings_ellipsis .rendered_html h4,
.collapsible_headings_ellipsis .rendered_html h5,
.collapsible_headings_ellipsis .rendered_html h6,
.collapsible_headings_toggle .fa {
 transition: transform 1000ms !important;
 -webkit-transform: inherit !important;
 -moz-transform: inherit !important;
 -ms-transform: inherit !important;
 -o-transform: inherit !important;
 transform: inherit !important;
 padding-right: 0px !important;
}
#toc-wrapper {
 z-index: 90;
 position: fixed !important;
 display: flex;
 flex-direction: column;
 overflow: hidden;
 padding: 10px;
 border-style: solid;
 border-width: thin;
 border-right-width: medium !important;
 background-color: #1d1e23 !important;
}
#toc-wrapper.ui-draggable.ui-resizable.sidebar-wrapper {
 border-color: rgba(80,92,133,.22) !important;
}
#toc a,
#navigate_menu a,
.toc {
 color: #899ab8 !important;
 font-size: 9.5pt !important;
}
#toc li > span:hover {
 background-color: #313643 !important;
}
#toc a:hover,
#navigate_menu a:hover,
.toc {
 color: #d8dcee !important;
 font-size: 9.5pt !important;
}
#toc-wrapper .toc-item-num {
 color: #7aa05d !important;
 font-size: 9.5pt !important;
}
input.raw_input {
 font-family: monospace, monospace;
 font-size: 9.5pt !important;
 color: #b5c2d9;
 background-color: #262c36;
 border-color: #242a33;
 background: #242a33;
 width: auto;
 vertical-align: baseline;
 padding: 0em 0.25em;
 margin: 0em 0.25em;
 -webkit-box-shadow: none;
 box-shadow: none;
}
audio,
video {
 display: inline;
 vertical-align: middle;
 align-content: center;
 margin-left: 20%;
}
.cmd-palette .modal-body {
 padding: 0px;
 margin: 0px;
}
.cmd-palette form {
 background: #293547;
 background-color: #293547;
}
.typeahead-field input:last-child,
.typeahead-hint {
 background: #293547;
 background-color: #293547;
 z-index: 1;
}
.typeahead-field input {
 font-family: sans-serif;
 color: #b5c2d9;
 border: none;
 font-size: 28pt;
 display: inline-block;
 line-height: inherit;
 padding: 3px 10px;
 height: 70px;
}
.typeahead-select {
 background-color: #293547;
}
body > div.modal.cmd-palette.typeahead-field {
 display: table;
 border-collapse: separate;
 background-color: #2b3850;
}
.typeahead-container button {
 font-family: sans-serif;
 font-size: 28pt;
 background-color: #2e3642;
 border: none;
 display: inline-block;
 line-height: inherit;
 padding: 3px 10px;
 height: 70px;
}
.typeahead-search-icon {
 min-width: 40px;
 min-height: 55px;
 display: block;
 vertical-align: middle;
 text-align: center;
}
.typeahead-container button:focus,
.typeahead-container button:hover {
 color: #bbc2e0;
 background-color: #2a313c;
 border-color: #2a2e39;
}
.typeahead-list > li.typeahead-group.active > a,
.typeahead-list > li.typeahead-group > a,
.typeahead-list > li.typeahead-group > a:focus,
.typeahead-list > li.typeahead-group > a:hover {
 display: none;
}
.typeahead-dropdown > li > a,
.typeahead-list > li > a {
 color: #899ab8;
 text-decoration: none;
}
.typeahead-dropdown,
.typeahead-list {
 font-family: sans-serif;
 font-size: 11.5pt;
 color: #899ab8;
 background-color: #202937;
 border: none;
 background-clip: padding-box;
 margin-top: 0px;
 padding: 3px 2px 3px 0px;
 line-height: 1.7;
}
.typeahead-dropdown > li.active > a,
.typeahead-dropdown > li > a:focus,
.typeahead-dropdown > li > a:hover,
.typeahead-list > li.active > a,
.typeahead-list > li > a:focus,
.typeahead-list > li > a:hover {
 color: #bbc2e0;
 background-color: #2b3850;
 border-color: #2b3850;
}
.command-shortcut:before {
 content: "(command)";
 padding-right: 3px;
 color: #526488;
}
.edit-shortcut:before {
 content: "(edit)";
 padding-right: 3px;
 color: #526488;
}
ul.typeahead-list i {
 margin-left: 1px;
 width: 18px;
 margin-right: 10px;
}
ul.typeahead-list {
 max-height: 50vh;
 overflow: auto;
}
.typeahead-list > li {
 position: relative;
 border: none;
}
div.input.typeahead-hint,
input.typeahead-hint,
body > div.modal.cmd-palette.in > div > div > div > form > div > div.typeahead-field > span.typeahead-query > input.typeahead-hint {
 color: #526488 !important;
 background-color: transparent;
 padding: 3px 10px;
}
.typeahead-dropdown > li > a,
.typeahead-list > li > a {
 display: block;
 padding: 5px;
 clear: both;
 font-weight: 400;
 line-height: 1.7;
 border: 1px solid #202937;
 border-bottom-color: rgba(80,92,133,.45);
}
body > div.modal.cmd-palette.in > div {
 min-width: 750px;
 margin: 150px auto;
}
.typeahead-container strong {
 font-weight: bolder;
 color: #7aa05d;
}
#find-and-replace #replace-preview .match,
#find-and-replace #replace-preview .insert {
 color: #ffffff;
 background-color: #2769c3;
 border-color: #2769c3;
 border-style: solid;
 border-width: 1px;
 border-radius: 0px;
}
#find-and-replace #replace-preview .replace .match {
 background-color: #dc6972;
 border-color: #dc6972;
 border-radius: 0px;
}
#find-and-replace #replace-preview .replace .insert {
 background-color: #94c273;
 border-color: #94c273;
 border-radius: 0px;
}
.jupyter-dashboard-menu-item.selected::before {
 font-family: 'FontAwesome' !important;
 content: '\\f00c' !important;
 position: absolute !important;
 color: #7aa05d !important;
 left: 0px !important;
 top: 13px !important;
 font-size: 12px !important;
}
.shortcut_key,
span.shortcut_key {
 display: inline-block;
 width: 16ex;
 text-align: right;
 font-family: monospace;
}
.jupyter-keybindings {
 padding: 1px;
 line-height: 24px;
 border-bottom: 1px solid rgba(80,92,133,.22);
}
.jupyter-keybindings i {
 background: #262c36;
 font-size: small;
 padding: 5px;
 margin-left: 7px;
}
div#short-key-bindings-intro.well,
.well {
 background-color: #2e3642;
 border: 1px solid #2e3642;
 color: #899ab8;
 border-radius: 2px;
 -webkit-box-shadow: none;
 box-shadow: none;
}
#texteditor-backdrop {
 background: #1d1e23;
 background-color: #1d1e23;
}
#texteditor-backdrop #texteditor-container .CodeMirror-gutter,
#texteditor-backdrop #texteditor-container .CodeMirror-gutters {
 background: #353a48;
 background-color: #353a48;
 color: #526488;
}
.edit_app #menubar .navbar {
 margin-bottom: 0px;
}
#texteditor-backdrop #texteditor-container {
 padding: 0px;
 background-color: #2c303c;
 box-shadow: none;
}
.terminal-app {
 background: #1d1e23;
}
.terminal-app > #header {
 background: #1d1e23;
}
.terminal-app .terminal {
 font-family: monospace, monospace;
 font-size: 9.5pt;
 line-height: 170%;
 color: #b5c2d9;
 background: #2c303c;
 padding: 0.4em;
 border-radius: 2px;
 -webkit-box-shadow: none;
 box-shadow: none;
}
.terminal .xterm-viewport {
 background-color: #2c303c;
 color: #b5c2d9;
 overflow-y: auto;
}
.terminal .xterm-color-0 {
 color: #7aa05d;
}
.terminal .xterm-color-1 {
 color: #ea8080;
}
.terminal .xterm-color-2 {
 color: #cc89e0;
}
.terminal .xterm-color-3 {
 color: #ea8080;
}
.terminal .xterm-color-4 {
 color: #fea47f;
}
.terminal .xterm-color-5 {
 color: #94c273;
}
.terminal .xterm-color-6 {
 color: #61afef;
}
.terminal .xterm-color-7 {
 color: #61afef;
}
.terminal .xterm-color-8 {
 color: #94c273;
}
.terminal .xterm-color-9 {
 color: #94c273;
}
.terminal .xterm-color-10 {
 color: #ea8080;
}
.terminal .xterm-color-14 {
 color: #61afef;
}
.terminal .xterm-bg-color-15 {
 background-color: #2c303c;
}
.terminal:not(.xterm-cursor-style-underline):not(.xterm-cursor-style-bar) .terminal-cursor {
 background-color: #7aa05d;
 color: #2c303c;
}
.terminal:not(.focus) .terminal-cursor {
 outline: 1px solid #7aa05d;
 outline-offset: -1px;
}
.celltoolbar {
 font-size: 100%;
 padding-top: 3px;
 border-color: transparent;
 border-bottom: thin solid rgba(148,204,114,.4);
 background: transparent;
}
.cell-tag,
.tags-input input,
.tags-input button {
 color: #899ab8;
 background-color: #1d1e23;
 background-image: none;
 border: 1px solid #899ab8;
 border-radius: 1px;
 box-shadow: none;
 width: inherit;
 font-size: inherit;
 height: 22px;
 line-height: 22px;
}
#notebook-container > div.cell.code_cell.rendered.selected > div.input > div.inner_cell > div.ctb_hideshow.ctb_show > div > div > button,
#notebook-container > div.input > div.inner_cell > div.ctb_hideshow.ctb_show > div > div > button {
 font-size: 10pt;
 color: #899ab8;
 background-color: #1d1e23;
 background-image: none;
 border: 1px solid #899ab8;
 border-radius: 1px;
 box-shadow: none;
 width: inherit;
 font-size: inherit;
 height: 22px;
 line-height: 22px;
}
div#pager #pager-contents {
 background: #1d1e23 !important;
 background-color: #1d1e23 !important;
}
div#pager pre {
 color: #b5c2d9 !important;
 background: #2c303c !important;
 background-color: #2c303c !important;
 padding: 0.4em;
}
div#pager .ui-resizable-handle {
 top: 0px;
 height: 8px;
 background: #7aa05d !important;
 border-top: 1px solid #7aa05d;
 border-bottom: 1px solid #7aa05d;
}
div.CodeMirror,
div.CodeMirror pre {
 font-family: monospace, monospace;
 font-size: 9.5pt;
 line-height: 170%;
 color: #b5c2d9;
}
div.CodeMirror-lines {
 padding-bottom: .9em;
 padding-left: .5em;
 padding-right: 1.5em;
 padding-top: .7em;
}
span.ansiblack,
.ansi-black-fg {
 color: #2b303b;
}
span.ansiblue,
.ansi-blue-fg,
.ansi-blue-intense-fg {
 color: #61afef;
}
span.ansigray,
.ansi-gray-fg,
.ansi-gray-intense-fg {
 color: #899ab8;
}
span.ansigreen,
.ansi-green-fg {
 color: #8fca9a;
}
.ansi-green-intense-fg {
 color: #899ab8;
}
span.ansipurple,
.ansi-purple-fg,
.ansi-purple-intense-fg {
 color: #b399ef;
}
span.ansicyan,
.ansi-cyan-fg,
.ansi-cyan-intense-fg {
 color: #b399ef;
}
span.ansiyellow,
.ansi-yellow-fg,
.ansi-yellow-intense-fg {
 color: #ddd7a3;
}
span.ansired,
.ansi-red-fg,
.ansi-red-intense-fg {
 color: #e07a7a;
}
div.output-stderr {
 background-color: #e07a7a;
}
div.output-stderr pre {
 color: #d0d4e6;
}
div.js-error {
 color: #e07a7a;
}
.ipython_tooltip {
 font-family: monospace, monospace;
 font-size: 9.5pt;
 line-height: 170%;
 border: 2px solid #21262c;
 background: #323a44;
 background-color: #323a44;
 border-radius: 2px;
 overflow-x: visible;
 overflow-y: visible;
 box-shadow: none;
 position: absolute;
 z-index: 1000;
}
.ipython_tooltip .tooltiptext pre {
 font-family: monospace, monospace;
 font-size: 9.5pt;
 line-height: 170%;
 background: #323a44;
 background-color: #323a44;
 color: #b5c2d9;
 overflow-x: visible;
 overflow-y: visible;
 max-width: 900px;
}
div#tooltip.ipython_tooltip {
 overflow-x: wrap;
 overflow-y: visible;
 max-width: 800px;
}
div.tooltiptext.bigtooltip {
 overflow-x: visible;
 overflow-y: scroll;
 height: 400px;
 max-width: 800px;
}
.cm-s-ipython.CodeMirror {
 font-family: monospace, monospace;
 font-size: 9.5pt;
 background: #2c303c;
 color: #b5c2d9;
 border-radius: 2px;
 font-style: normal;
 font-weight: normal;
}
.cm-s-ipython div.CodeMirror-selected {
 background: #373d4b;
}
.CodeMirror-gutters {
 border: none;
 border-right: 1px solid #353a48 !important;
 background-color: #353a48 !important;
 background: #353a48 !important;
 border-radius: 0px;
 white-space: nowrap;
}
.cm-s-ipython .CodeMirror-gutters {
 background: #353a48;
 border: none;
 border-radius: 0px;
 width: 36px;
}
.cm-s-ipython .CodeMirror-linenumber {
 color: #526488;
}
.CodeMirror-sizer {
 margin-left: 40px;
}
.CodeMirror-linenumber,
div.CodeMirror-linenumber,
.CodeMirror-gutter.CodeMirror-linenumberdiv.CodeMirror-gutter.CodeMirror-linenumber {
 padding-right: 1px;
 margin-left: 0px;
 margin: 0px;
 width: 26px !important;
 padding: 0px;
 text-align: right;
}
.CodeMirror-linenumber {
 color: #526488;
}
.cm-s-ipython .CodeMirror-cursor {
 border-left: 2px solid #0095ff !important;
}
.cm-s-ipython span.cm-comment {
 color: #526488;
 font-style: italic;
}
.cm-s-ipython span.cm-atom {
 color: #61afef;
}
.cm-s-ipython span.cm-number {
 color: #fea47f;
}
.cm-s-ipython span.cm-property {
 color: #b5c2d9;
}
.cm-s-ipython span.cm-attribute {
 color: #b5c2d9;
}
.cm-s-ipython span.cm-keyword {
 color: #cc89e0;
 font-weight: normal;
}
.cm-s-ipython span.cm-string {
 color: #94c273;
}
.cm-s-ipython span.cm-meta {
 color: #ddd7a3;
}
.cm-s-ipython span.cm-operator {
 color: #61afef;
}
.cm-s-ipython span.cm-builtin {
 color: #ea8080;
}
.cm-s-ipython span.cm-variable {
 color: #b5c2d9;
}
.cm-s-ipython span.cm-variable-2 {
 color: #ea8080;
}
.cm-s-ipython span.cm-variable-3 {
 color: #cc89e0;
}
.cm-s-ipython span.cm-def {
 color: #61afef;
 font-weight: normal;
}
.cm-s-ipython span.cm-error {
 background: rgba(192,57,67,.3);
}
.cm-s-ipython span.cm-tag {
 color: #61afef;
}
.cm-s-ipython span.cm-link {
 color: #94c273;
}
.cm-s-ipython span.cm-storage {
 color: #61afef;
}
.cm-s-ipython span.cm-entity {
 color: #61afef;
}
.cm-s-ipython span.cm-quote {
 color: #94c273;
}
div.CodeMirror span.CodeMirror-matchingbracket {
 color: #ffffff;
 font-weight: bold;
 background-color: #4c8be2;
}
div.CodeMirror span.CodeMirror-nonmatchingbracket {
 color: #ffffff;
 font-weight: bold;
 background: rgba(192,57,67,.3) !important;
}
.cm-header-1 {
 font-size: 215%;
}
.cm-header-2 {
 font-size: 180%;
}
.cm-header-3 {
 font-size: 150%;
}
.cm-header-4 {
 font-size: 120%;
}
.cm-header-5 {
 font-size: 100%;
}
.cm-s-default .cm-hr {
 color: #61afef;
}
div.cell.text_cell .cm-s-default .cm-header {
 font-family: sans-serif;
 font-weight: normal;
 color: #7aa05d !important;
 margin-top: 0.3em !important;
 margin-bottom: 0.3em !important;
}
div.cell.text_cell .cm-s-default span.cm-variable-2 {
 color: #abb7ce !important;
}
div.cell.text_cell .cm-s-default span.cm-variable-3 {
 color: #cc89e0 !important;
}
.cm-s-default span.cm-comment {
 color: #526488 !important;
}
.cm-s-default .cm-tag {
 color: #8fb36a;
}
.cm-s-default .cm-builtin {
 color: #ea8080;
}
.cm-s-default .cm-string {
 color: #94c273;
}
.cm-s-default .cm-keyword {
 color: #cc89e0;
}
.cm-s-default .cm-number {
 color: #fea47f;
}
.cm-s-default .cm-error {
 color: #61afef;
}
.cm-s-default .cm-link {
 color: #94c273;
}
.cm-s-default .cm-atom {
 color: #fea47f;
}
.cm-s-default .cm-def {
 color: #61afef;
}
.CodeMirror-cursor {
 border-left: 2px solid #0095ff !important;
 border-right: none;
 width: 0;
}
.cm-s-default div.CodeMirror-selected {
 background: #373d4b;
}
.cm-s-default .cm-selected {
 background: #373d4b;
}
.MathJax_Display,
.MathJax {
 border: 0 !important;
 font-size: 100% !important;
 text-align: center !important;
 margin: 0em !important;
 line-height: 2.25 !important;
}
.MathJax:focus,
body :focus .MathJax {
 display: inline-block !important;
}
.MathJax:focus,
body :focus .MathJax {
 display: inline-block !important;
}
.completions {
 position: absolute;
 z-index: 110;
 overflow: hidden;
 border: medium solid rgba(53,114,198,.75);
 box-shadow: none;
 line-height: 1;
}
.completions select {
 background: #2c303c;
 background-color: #2c303c;
 outline: none;
 border: none;
 padding: 0px;
 margin: 0px;
 margin-left: 2px;
 overflow: auto;
 font-family: monospace, monospace;
 font-size: 9.5pt;
 color: #b5c2d9;
 width: auto;
}
div#maintoolbar {
 margin-left: 8px !important;
}
.toolbar.container {
 width: 100% !important;
}
#header-container {
 display: none !important;
}

<script>
    MathJax.Hub.Config({
        "HTML-CSS": {
            /*preferredFont: "TeX",*/
            /*availableFonts: ["TeX", "STIX"],*/
            styles: {
                scale: 100,
                ".MathJax_Display": {
                    "font-size": "100%",
                }
            }
        }
    });
</script>
    
    </style>


<style type="text/css">
/* Overrides of notebook CSS for static HTML export */
body {
  overflow: visible;
  padding: 8px;
}

div#notebook {
  overflow: visible;
  border-top: none;
}@media print {
  div.cell {
    display: block;
    page-break-inside: avoid;
  } 
  div.output_wrapper { 
    display: block;
    page-break-inside: avoid; 
  }
  div.output { 
    display: block;
    page-break-inside: avoid; 
  }
}
</style>

<!-- Custom stylesheet, it must be in the same directory as the html file -->
<link rel="stylesheet" href="custom.css">

<!-- Loading mathjax macro -->
<!-- Load mathjax -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/latest.js?config=TeX-AMS_HTML"></script>
    <!-- MathJax configuration -->
    <script type="text/x-mathjax-config">
    MathJax.Hub.Config({
        tex2jax: {
            inlineMath: [ ['$','$'], ["\\\\(","\\\\)"] ],
            displayMath: [ ['$$','$$'], ["\\\\[","\\\\]"] ],
            processEscapes: true,
            processEnvironments: true
        },
        // Center justify equations in code and markdown cells. Elsewhere
        // we use CSS to left justify single line equations in code cells.
        displayAlign: 'center',
        "HTML-CSS": {
            styles: {'.MathJax_Display': {"margin": 0}},
            linebreaks: { automatic: true }
        }
    });
    </script>
    <!-- End of mathjax configuration --></head>
<body>
  <div tabindex="-1" id="notebook" class="border-box-sizing">
    <div class="container" id="notebook-container">

<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[1]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="c1"># # Sentiment Analysis on Reddit News Headlines with Python’s Natural Language Toolkit (NLTK)</span>

<span class="kn">from</span> <span class="nn">IPython</span> <span class="kn">import</span> <span class="n">display</span>
<span class="kn">from</span> <span class="nn">os</span> <span class="kn">import</span> <span class="n">environ</span><span class="p">,</span> <span class="n">path</span>
<span class="kn">import</span> <span class="nn">datetime</span>
<span class="kn">import</span> <span class="nn">math</span>
<span class="kn">from</span> <span class="nn">pprint</span> <span class="kn">import</span> <span class="n">pprint</span>
<span class="kn">import</span> <span class="nn">pandas</span> <span class="k">as</span> <span class="nn">pd</span>
<span class="kn">import</span> <span class="nn">numpy</span> <span class="k">as</span> <span class="nn">np</span>
<span class="kn">import</span> <span class="nn">nltk</span>
<span class="kn">import</span> <span class="nn">matplotlib.pyplot</span> <span class="k">as</span> <span class="nn">plt</span>
<span class="kn">import</span> <span class="nn">seaborn</span> <span class="k">as</span> <span class="nn">sns</span>
<span class="n">sns</span><span class="o">.</span><span class="n">set</span><span class="p">(</span><span class="n">style</span><span class="o">=</span><span class="s1">&#39;darkgrid&#39;</span><span class="p">,</span> <span class="n">context</span><span class="o">=</span><span class="s1">&#39;talk&#39;</span><span class="p">,</span> <span class="n">palette</span><span class="o">=</span><span class="s1">&#39;Dark2&#39;</span><span class="p">)</span>

<span class="k">def</span> <span class="nf">load_env</span><span class="p">():</span>
    <span class="c1"># https://stackoverflow.com/a/54028874/1426788 </span>
    <span class="o">%</span><span class="k">load_ext</span> dotenv
    <span class="o">%</span><span class="k">dotenv</span>

<span class="n">load_env</span><span class="p">()</span>

<span class="kn">import</span> <span class="nn">praw</span>

<span class="n">reddit</span> <span class="o">=</span> <span class="n">praw</span><span class="o">.</span><span class="n">Reddit</span><span class="p">(</span><span class="n">client_id</span><span class="o">=</span><span class="n">environ</span><span class="o">.</span><span class="n">get</span><span class="p">(</span><span class="s1">&#39;CLIENT_ID&#39;</span><span class="p">),</span>
                     <span class="n">client_secret</span><span class="o">=</span><span class="n">environ</span><span class="o">.</span><span class="n">get</span><span class="p">(</span><span class="s1">&#39;CLIENT_SECRET&#39;</span><span class="p">),</span>
                     <span class="n">user_agent</span><span class="o">=</span><span class="s1">&#39;sentimine&#39;</span><span class="p">)</span>
</pre></div>

    </div>
</div>
</div>

</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[2]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">headlines</span> <span class="o">=</span> <span class="nb">set</span><span class="p">()</span>
<span class="n">version</span> <span class="o">=</span> <span class="nb">str</span><span class="p">(</span><span class="n">datetime</span><span class="o">.</span><span class="n">datetime</span><span class="o">.</span><span class="n">now</span><span class="p">())</span><span class="o">.</span><span class="n">replace</span><span class="p">(</span><span class="s1">&#39; &#39;</span><span class="p">,</span> <span class="s1">&#39;-&#39;</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="s1">&#39;version:&#39;</span><span class="p">,</span> <span class="n">version</span><span class="p">)</span>
</pre></div>

    </div>
</div>
</div>

<div class="output_wrapper">
<div class="output">


<div class="output_area">

    <div class="prompt"></div>


<div class="output_subarea output_stream output_stdout output_text">
<pre>version: 2020-02-23-16:00:07.856289
</pre>
</div>
</div>

</div>
</div>

</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[3]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="k">for</span> <span class="n">submission</span> <span class="ow">in</span> <span class="n">reddit</span><span class="o">.</span><span class="n">subreddit</span><span class="p">(</span><span class="n">environ</span><span class="o">.</span><span class="n">get</span><span class="p">(</span><span class="s1">&#39;SUBREDDIT&#39;</span><span class="p">))</span><span class="o">.</span><span class="n">new</span><span class="p">(</span><span class="n">limit</span><span class="o">=</span><span class="kc">None</span><span class="p">):</span>
    <span class="n">headlines</span><span class="o">.</span><span class="n">add</span><span class="p">(</span><span class="n">submission</span><span class="o">.</span><span class="n">title</span><span class="p">)</span>
    <span class="n">display</span><span class="o">.</span><span class="n">clear_output</span><span class="p">()</span>
    <span class="nb">print</span><span class="p">(</span><span class="s1">&#39;# of headlines processed&#39;</span><span class="p">,</span> <span class="nb">len</span><span class="p">(</span><span class="n">headlines</span><span class="p">))</span>
</pre></div>

    </div>
</div>
</div>

<div class="output_wrapper">
<div class="output">


<div class="output_area">

    <div class="prompt"></div>


<div class="output_subarea output_stream output_stdout output_text">
<pre># of headlines processed 981
</pre>
</div>
</div>

</div>
</div>

</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[4]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="kn">from</span> <span class="nn">nltk.sentiment.vader</span> <span class="kn">import</span> <span class="n">SentimentIntensityAnalyzer</span> <span class="k">as</span> <span class="n">SIA</span>

<span class="n">sia</span> <span class="o">=</span> <span class="n">SIA</span><span class="p">()</span>
<span class="n">results</span> <span class="o">=</span> <span class="p">[]</span>

<span class="k">for</span> <span class="n">line</span> <span class="ow">in</span> <span class="n">headlines</span><span class="p">:</span>
    <span class="n">pol_score</span> <span class="o">=</span> <span class="n">sia</span><span class="o">.</span><span class="n">polarity_scores</span><span class="p">(</span><span class="n">line</span><span class="p">)</span>
    <span class="n">pol_score</span><span class="p">[</span><span class="s1">&#39;headline&#39;</span><span class="p">]</span> <span class="o">=</span> <span class="n">line</span>
    <span class="n">results</span><span class="o">.</span><span class="n">append</span><span class="p">(</span><span class="n">pol_score</span><span class="p">)</span>

<span class="n">pprint</span><span class="p">(</span><span class="n">results</span><span class="p">[:</span><span class="mi">3</span><span class="p">],</span> <span class="n">width</span><span class="o">=</span><span class="mi">100</span><span class="p">)</span>
</pre></div>

    </div>
</div>
</div>

<div class="output_wrapper">
<div class="output">


<div class="output_area">

    <div class="prompt"></div>


<div class="output_subarea output_stream output_stdout output_text">
<pre>[{&#39;compound&#39;: -0.0772,
  &#39;headline&#39;: &#39;How big of a cock can you make on your robinhood graph challenge&#39;,
  &#39;neg&#39;: 0.124,
  &#39;neu&#39;: 0.775,
  &#39;pos&#39;: 0.101},
 {&#39;compound&#39;: -0.128,
  &#39;headline&#39;: &#39;Is the jdi quarter report delay important?&#39;,
  &#39;neg&#39;: 0.253,
  &#39;neu&#39;: 0.549,
  &#39;pos&#39;: 0.198},
 {&#39;compound&#39;: -0.1779,
  &#39;headline&#39;: &#39;Why are they all doing the same movement. Weird&#39;,
  &#39;neg&#39;: 0.175,
  &#39;neu&#39;: 0.825,
  &#39;pos&#39;: 0.0}]
</pre>
</div>
</div>

</div>
</div>

</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[5]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">df</span> <span class="o">=</span> <span class="n">pd</span><span class="o">.</span><span class="n">DataFrame</span><span class="o">.</span><span class="n">from_records</span><span class="p">(</span><span class="n">results</span><span class="p">)</span>
<span class="n">df</span><span class="o">.</span><span class="n">head</span><span class="p">()</span>
</pre></div>

    </div>
</div>
</div>

<div class="output_wrapper">
<div class="output">


<div class="output_area">

    <div class="prompt output_prompt">Out[5]:</div>



<div class="output_html rendered_html output_subarea output_execute_result">
<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>neg</th>
      <th>neu</th>
      <th>pos</th>
      <th>compound</th>
      <th>headline</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>0.124</td>
      <td>0.775</td>
      <td>0.101</td>
      <td>-0.0772</td>
      <td>How big of a cock can you make on your robinho...</td>
    </tr>
    <tr>
      <th>1</th>
      <td>0.253</td>
      <td>0.549</td>
      <td>0.198</td>
      <td>-0.1280</td>
      <td>Is the jdi quarter report delay important?</td>
    </tr>
    <tr>
      <th>2</th>
      <td>0.175</td>
      <td>0.825</td>
      <td>0.000</td>
      <td>-0.1779</td>
      <td>Why are they all doing the same movement. Weird</td>
    </tr>
    <tr>
      <th>3</th>
      <td>0.000</td>
      <td>1.000</td>
      <td>0.000</td>
      <td>0.0000</td>
      <td>Canada is bear territory now 🏳️‍🌈</td>
    </tr>
    <tr>
      <th>4</th>
      <td>0.000</td>
      <td>1.000</td>
      <td>0.000</td>
      <td>0.0000</td>
      <td>HOLY GRAIL NIO DD AND YOU</td>
    </tr>
  </tbody>
</table>
</div>
</div>

</div>

</div>
</div>

</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[6]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">df</span><span class="p">[</span><span class="s1">&#39;label&#39;</span><span class="p">]</span> <span class="o">=</span> <span class="mi">0</span>
<span class="n">df</span><span class="o">.</span><span class="n">loc</span><span class="p">[</span><span class="n">df</span><span class="p">[</span><span class="s1">&#39;compound&#39;</span><span class="p">]</span> <span class="o">&gt;</span> <span class="mf">0.2</span><span class="p">,</span> <span class="s1">&#39;label&#39;</span><span class="p">]</span> <span class="o">=</span> <span class="mi">1</span>
<span class="n">df</span><span class="o">.</span><span class="n">loc</span><span class="p">[</span><span class="n">df</span><span class="p">[</span><span class="s1">&#39;compound&#39;</span><span class="p">]</span> <span class="o">&lt;</span> <span class="o">-</span><span class="mf">0.2</span><span class="p">,</span> <span class="s1">&#39;label&#39;</span><span class="p">]</span> <span class="o">=</span> <span class="o">-</span><span class="mi">1</span>
<span class="n">df</span><span class="o">.</span><span class="n">head</span><span class="p">()</span>
</pre></div>

    </div>
</div>
</div>

<div class="output_wrapper">
<div class="output">


<div class="output_area">

    <div class="prompt output_prompt">Out[6]:</div>



<div class="output_html rendered_html output_subarea output_execute_result">
<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>neg</th>
      <th>neu</th>
      <th>pos</th>
      <th>compound</th>
      <th>headline</th>
      <th>label</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>0.124</td>
      <td>0.775</td>
      <td>0.101</td>
      <td>-0.0772</td>
      <td>How big of a cock can you make on your robinho...</td>
      <td>0</td>
    </tr>
    <tr>
      <th>1</th>
      <td>0.253</td>
      <td>0.549</td>
      <td>0.198</td>
      <td>-0.1280</td>
      <td>Is the jdi quarter report delay important?</td>
      <td>0</td>
    </tr>
    <tr>
      <th>2</th>
      <td>0.175</td>
      <td>0.825</td>
      <td>0.000</td>
      <td>-0.1779</td>
      <td>Why are they all doing the same movement. Weird</td>
      <td>0</td>
    </tr>
    <tr>
      <th>3</th>
      <td>0.000</td>
      <td>1.000</td>
      <td>0.000</td>
      <td>0.0000</td>
      <td>Canada is bear territory now 🏳️‍🌈</td>
      <td>0</td>
    </tr>
    <tr>
      <th>4</th>
      <td>0.000</td>
      <td>1.000</td>
      <td>0.000</td>
      <td>0.0000</td>
      <td>HOLY GRAIL NIO DD AND YOU</td>
      <td>0</td>
    </tr>
  </tbody>
</table>
</div>
</div>

</div>

</div>
</div>

</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[7]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">df2</span> <span class="o">=</span> <span class="n">df</span><span class="p">[[</span><span class="s1">&#39;headline&#39;</span><span class="p">,</span> <span class="s1">&#39;label&#39;</span><span class="p">]]</span>
</pre></div>

    </div>
</div>
</div>

</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[8]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">df2</span><span class="o">.</span><span class="n">to_csv</span><span class="p">(</span><span class="s1">&#39;./tmp/reddit_headlines_labels.csv&#39;</span><span class="p">,</span> <span class="n">mode</span><span class="o">=</span><span class="s1">&#39;a&#39;</span><span class="p">,</span> <span class="n">encoding</span><span class="o">=</span><span class="s1">&#39;utf-8&#39;</span><span class="p">,</span> <span class="n">index</span><span class="o">=</span><span class="kc">False</span><span class="p">)</span>
</pre></div>

    </div>
</div>
</div>

</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[9]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">df</span><span class="o">.</span><span class="n">label</span><span class="o">.</span><span class="n">value_counts</span><span class="p">()</span>
</pre></div>

    </div>
</div>
</div>

<div class="output_wrapper">
<div class="output">


<div class="output_area">

    <div class="prompt output_prompt">Out[9]:</div>




<div class="output_text output_subarea output_execute_result">
<pre> 0    611
 1    209
-1    161
Name: label, dtype: int64</pre>
</div>

</div>

</div>
</div>

</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[10]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="nb">print</span><span class="p">(</span><span class="s2">&quot;Positive headlines:</span><span class="se">\\n</span><span class="s2">&quot;</span><span class="p">)</span>
<span class="n">pprint</span><span class="p">(</span><span class="nb">list</span><span class="p">(</span><span class="n">df</span><span class="p">[</span><span class="n">df</span><span class="p">[</span><span class="s1">&#39;label&#39;</span><span class="p">]</span> <span class="o">==</span> <span class="mi">1</span><span class="p">]</span><span class="o">.</span><span class="n">headline</span><span class="p">)[:</span><span class="mi">5</span><span class="p">],</span> <span class="n">width</span><span class="o">=</span><span class="mi">200</span><span class="p">)</span>

<span class="nb">print</span><span class="p">(</span><span class="s2">&quot;</span><span class="se">\\n</span><span class="s2">Negative headlines:</span><span class="se">\\n</span><span class="s2">&quot;</span><span class="p">)</span>
<span class="n">pprint</span><span class="p">(</span><span class="nb">list</span><span class="p">(</span><span class="n">df</span><span class="p">[</span><span class="n">df</span><span class="p">[</span><span class="s1">&#39;label&#39;</span><span class="p">]</span> <span class="o">==</span> <span class="o">-</span><span class="mi">1</span><span class="p">]</span><span class="o">.</span><span class="n">headline</span><span class="p">)[:</span><span class="mi">5</span><span class="p">],</span> <span class="n">width</span><span class="o">=</span><span class="mi">200</span><span class="p">)</span>
</pre></div>

    </div>
</div>
</div>

<div class="output_wrapper">
<div class="output">


<div class="output_area">

    <div class="prompt"></div>


<div class="output_subarea output_stream output_stdout output_text">
<pre>Positive headlines:

[&#39;Give yourselves a round of applause&#39;,
 &#39;Would the SECURE act have an effect on the market&#39;,
 &#34;Here&#39;s the truth about $MSFT&#34;,
 &#39;Top 10 trending stocks (last 2 weeks)&#39;,
 &#39;Closed our SPCE swing trade today for an 87.28% gain and RIGHT before the 27% crash. Phew!&#39;]

Negative headlines:

[&#39;New York drops fight against T-Mobile-Sprint merger&#39;,
 &#39;I fucking love this sub but I hate that I didn’t find you retards sooner.&#39;,
 &#39;Skeptical of $DXCM&#39;,
 &#39;$SPCE going higher. See you poor bears at 50+&#39;,
 &#39;Has everyone forgotten about TGT?&#39;]
</pre>
</div>
</div>

</div>
</div>

</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[11]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">df</span><span class="o">.</span><span class="n">label</span><span class="o">.</span><span class="n">value_counts</span><span class="p">(</span><span class="n">normalize</span><span class="o">=</span><span class="kc">True</span><span class="p">)</span> <span class="o">*</span> <span class="mi">100</span>
</pre></div>

    </div>
</div>
</div>

<div class="output_wrapper">
<div class="output">


<div class="output_area">

    <div class="prompt output_prompt">Out[11]:</div>




<div class="output_text output_subarea output_execute_result">
<pre> 0    62.283384
 1    21.304791
-1    16.411825
Name: label, dtype: float64</pre>
</div>

</div>

</div>
</div>

</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[12]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">fig</span><span class="p">,</span> <span class="n">ax</span> <span class="o">=</span> <span class="n">plt</span><span class="o">.</span><span class="n">subplots</span><span class="p">(</span><span class="n">figsize</span><span class="o">=</span><span class="p">(</span><span class="mi">8</span><span class="p">,</span> <span class="mi">8</span><span class="p">))</span>

<span class="n">counts</span> <span class="o">=</span> <span class="n">df</span><span class="o">.</span><span class="n">label</span><span class="o">.</span><span class="n">value_counts</span><span class="p">(</span><span class="n">normalize</span><span class="o">=</span><span class="kc">True</span><span class="p">)</span> <span class="o">*</span> <span class="mi">100</span>

<span class="n">sns</span><span class="o">.</span><span class="n">barplot</span><span class="p">(</span><span class="n">x</span><span class="o">=</span><span class="n">counts</span><span class="o">.</span><span class="n">index</span><span class="p">,</span> <span class="n">y</span><span class="o">=</span><span class="n">counts</span><span class="p">,</span> <span class="n">ax</span><span class="o">=</span><span class="n">ax</span><span class="p">)</span>

<span class="n">ax</span><span class="o">.</span><span class="n">set_xticklabels</span><span class="p">([</span><span class="s1">&#39;Negative&#39;</span><span class="p">,</span> <span class="s1">&#39;Neutral&#39;</span><span class="p">,</span> <span class="s1">&#39;Positive&#39;</span><span class="p">])</span>
<span class="n">ax</span><span class="o">.</span><span class="n">set_ylabel</span><span class="p">(</span><span class="s2">&quot;Percentage&quot;</span><span class="p">)</span>

<span class="n">plt</span><span class="o">.</span><span class="n">show</span><span class="p">()</span>
</pre></div>

    </div>
</div>
</div>

<div class="output_wrapper">
<div class="output">


<div class="output_area">

    <div class="prompt"></div>




<div class="output_png output_subarea ">
<img src="data:image/png;base64,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0pNPPqlZs2apT58+mj9/vvM9qeT9qLi4WHFxcTp79qwSEhL08ssv6ze/+Y3Gjh1b6qvlJenBBx9Uz549Va9ePaWlpal79+4u/Q0bNlT79u21ceNGl/aNGzeqZs2aiomJkcPh0EMPPaRVq1bpvvvuU0pKilq1aqVx48bpvffeq5DXpCqoGheZcVmBgYGaOnWqHnvsMb366qsaNWqUS39GRoZWrVqlSZMmafTo0ZKkLl26qKioSImJibrrrrvkcDi0ePFijRgxQo8++qgk6ZZbbtH333+vDz74wLmvo0eP6v7771d8fLyzrWHDhho0aJDS09PVp08f57B/ixYt1KJFi1L1xsTE6Nlnn9XGjRs1ZswYSdK7774rb29v3XbbbXI4HJo1a5Z69OihGTNmOLerX7++xo0bp7179+p3v/udh149uMMT51rt2rWveJz69eurfv36kqS2bdu69N10000uk0z/9re/qUuXLkpISHDOO+ncubO2b9+u3bt36/bbby/PPxke5nA4VFhY6Fw+deqUPvjgA61cuVK33XabsrOztXbtWk2aNEn33XefpAv/P2vVqqVZs2Zp5MiRqlOnjr788ks9+OCD6tatmyQpMjJS8+bNu+jkwsaNGyswMNB5CUCSfvrpJ5d1YmNjNW3aNH333Xe67rrrJEmbNm1Sz5495efnp127dunDDz9UUlKSYmJiJEldu3bVmTNnNHPmTPXq1cvzL1YVwEjAVaJv377q2bOnEhMTSyXhjz/+WA6HQz169FBhYaHzp2fPnsrJydGBAwe0f/9+nTt3znlyl/jlG+iUKVP02GOP6cyZM9q/f7/WrVunFStWSJIKCgp+Va1+fn669dZbtWnTJmfbxo0b1aNHD1177bX68ssv9c0336hnz54u9d5yyy2qUaOGPvroo7K8RPCQ8p5r5dWqVSuX5YEDByo1NVXnz5/Xp59+qq1btyopKUlFRUW/+pxE5fn444/Vpk0b50+XLl00depUde/eXc8884x2794tSerXr5/LdiWjhLt371bdunXVokULTZ06VY8//rjWr1+v4uJiPfHEE7rhhhvKVNdtt92mGjVq6N1335V0YWTif//7n/O4//znP+Xt7a2uXbuWOre/+uorl0um1QkjAVeRZ555Rv369dOTTz6p1157zdn+448/Srpwkl/Md9995/wE9ctJMnXr1nVZ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
"
>
</div>

</div>

</div>
</div>

</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[13]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="kn">from</span> <span class="nn">nltk.tokenize</span> <span class="kn">import</span> <span class="n">word_tokenize</span><span class="p">,</span> <span class="n">RegexpTokenizer</span>

<span class="n">example</span> <span class="o">=</span> <span class="s2">&quot;This is an example sentence! However, it isn&#39;t a very informative one&quot;</span>

<span class="nb">print</span><span class="p">(</span><span class="n">word_tokenize</span><span class="p">(</span><span class="n">example</span><span class="p">,</span> <span class="n">language</span><span class="o">=</span><span class="s1">&#39;english&#39;</span><span class="p">))</span>
</pre></div>

    </div>
</div>
</div>

<div class="output_wrapper">
<div class="output">


<div class="output_area">

    <div class="prompt"></div>


<div class="output_subarea output_stream output_stdout output_text">
<pre>[&#39;This&#39;, &#39;is&#39;, &#39;an&#39;, &#39;example&#39;, &#39;sentence&#39;, &#39;!&#39;, &#39;However&#39;, &#39;,&#39;, &#39;it&#39;, &#39;is&#39;, &#34;n&#39;t&#34;, &#39;a&#39;, &#39;very&#39;, &#39;informative&#39;, &#39;one&#39;]
</pre>
</div>
</div>

</div>
</div>

</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[14]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">tokenizer</span> <span class="o">=</span> <span class="n">RegexpTokenizer</span><span class="p">(</span><span class="sa">r</span><span class="s1">&#39;\\w+&#39;</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="n">tokenizer</span><span class="o">.</span><span class="n">tokenize</span><span class="p">(</span><span class="n">example</span><span class="p">))</span>
</pre></div>

    </div>
</div>
</div>

<div class="output_wrapper">
<div class="output">


<div class="output_area">

    <div class="prompt"></div>


<div class="output_subarea output_stream output_stdout output_text">
<pre>[&#39;This&#39;, &#39;is&#39;, &#39;an&#39;, &#39;example&#39;, &#39;sentence&#39;, &#39;However&#39;, &#39;it&#39;, &#39;isn&#39;, &#39;t&#39;, &#39;a&#39;, &#39;very&#39;, &#39;informative&#39;, &#39;one&#39;]
</pre>
</div>
</div>

</div>
</div>

</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[15]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="kn">from</span> <span class="nn">nltk.corpus</span> <span class="kn">import</span> <span class="n">stopwords</span>

<span class="n">stop_words</span> <span class="o">=</span> <span class="n">stopwords</span><span class="o">.</span><span class="n">words</span><span class="p">(</span><span class="s1">&#39;english&#39;</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="n">stop_words</span><span class="p">[:</span><span class="mi">20</span><span class="p">])</span>
</pre></div>

    </div>
</div>
</div>

<div class="output_wrapper">
<div class="output">


<div class="output_area">

    <div class="prompt"></div>


<div class="output_subarea output_stream output_stdout output_text">
<pre>[&#39;i&#39;, &#39;me&#39;, &#39;my&#39;, &#39;myself&#39;, &#39;we&#39;, &#39;our&#39;, &#39;ours&#39;, &#39;ourselves&#39;, &#39;you&#39;, &#34;you&#39;re&#34;, &#34;you&#39;ve&#34;, &#34;you&#39;ll&#34;, &#34;you&#39;d&#34;, &#39;your&#39;, &#39;yours&#39;, &#39;yourself&#39;, &#39;yourselves&#39;, &#39;he&#39;, &#39;him&#39;, &#39;his&#39;]
</pre>
</div>
</div>

</div>
</div>

</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[16]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="k">def</span> <span class="nf">process_text</span><span class="p">(</span><span class="n">headlines</span><span class="p">):</span>
    <span class="n">tokens</span> <span class="o">=</span> <span class="p">[]</span>
    <span class="k">for</span> <span class="n">line</span> <span class="ow">in</span> <span class="n">headlines</span><span class="p">:</span>
        <span class="n">line</span> <span class="o">=</span> <span class="n">line</span><span class="o">.</span><span class="n">lower</span><span class="p">()</span>
        <span class="n">toks</span> <span class="o">=</span> <span class="n">tokenizer</span><span class="o">.</span><span class="n">tokenize</span><span class="p">(</span><span class="n">line</span><span class="p">)</span>
        <span class="n">toks</span> <span class="o">=</span> <span class="p">[</span><span class="n">t</span> <span class="k">for</span> <span class="n">t</span> <span class="ow">in</span> <span class="n">toks</span> <span class="k">if</span> <span class="n">t</span> <span class="ow">not</span> <span class="ow">in</span> <span class="n">stop_words</span><span class="p">]</span>
        <span class="n">tokens</span><span class="o">.</span><span class="n">extend</span><span class="p">(</span><span class="n">toks</span><span class="p">)</span>
    
    <span class="k">return</span> <span class="n">tokens</span>
</pre></div>

    </div>
</div>
</div>

</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[17]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">pos_lines</span> <span class="o">=</span> <span class="nb">list</span><span class="p">(</span><span class="n">df</span><span class="p">[</span><span class="n">df</span><span class="o">.</span><span class="n">label</span> <span class="o">==</span> <span class="mi">1</span><span class="p">]</span><span class="o">.</span><span class="n">headline</span><span class="p">)</span>

<span class="n">pos_tokens</span> <span class="o">=</span> <span class="n">process_text</span><span class="p">(</span><span class="n">pos_lines</span><span class="p">)</span>
<span class="n">pos_freq</span> <span class="o">=</span> <span class="n">nltk</span><span class="o">.</span><span class="n">FreqDist</span><span class="p">(</span><span class="n">pos_tokens</span><span class="p">)</span>

<span class="n">pos_freq</span><span class="o">.</span><span class="n">most_common</span><span class="p">(</span><span class="mi">20</span><span class="p">)</span>
</pre></div>

    </div>
</div>
</div>

<div class="output_wrapper">
<div class="output">


<div class="output_area">

    <div class="prompt output_prompt">Out[17]:</div>




<div class="output_text output_subarea output_execute_result">
<pre>[(&#39;spce&#39;, 21),
 (&#39;wsb&#39;, 14),
 (&#39;yolo&#39;, 14),
 (&#39;thanks&#39;, 13),
 (&#39;calls&#39;, 12),
 (&#39;good&#39;, 12),
 (&#39;time&#39;, 11),
 (&#39;earnings&#39;, 11),
 (&#39;week&#39;, 11),
 (&#39;today&#39;, 10),
 (&#39;play&#39;, 10),
 (&#39;first&#39;, 9),
 (&#39;gains&#39;, 8),
 (&#39;msft&#39;, 7),
 (&#39;2&#39;, 7),
 (&#39;gain&#39;, 7),
 (&#39;amd&#39;, 7),
 (&#39;tendies&#39;, 7),
 (&#39;dd&#39;, 7),
 (&#39;tesla&#39;, 7)]</pre>
</div>

</div>

</div>
</div>

</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[18]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">y_val</span> <span class="o">=</span> <span class="p">[</span><span class="n">x</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span> <span class="k">for</span> <span class="n">x</span> <span class="ow">in</span> <span class="n">pos_freq</span><span class="o">.</span><span class="n">most_common</span><span class="p">()]</span>

<span class="n">fig</span> <span class="o">=</span> <span class="n">plt</span><span class="o">.</span><span class="n">figure</span><span class="p">(</span><span class="n">figsize</span><span class="o">=</span><span class="p">(</span><span class="mi">10</span><span class="p">,</span><span class="mi">5</span><span class="p">))</span>
<span class="n">plt</span><span class="o">.</span><span class="n">plot</span><span class="p">(</span><span class="n">y_val</span><span class="p">)</span>

<span class="n">plt</span><span class="o">.</span><span class="n">xlabel</span><span class="p">(</span><span class="s2">&quot;Words&quot;</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">ylabel</span><span class="p">(</span><span class="s2">&quot;Frequency&quot;</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">title</span><span class="p">(</span><span class="s2">&quot;Word Frequency Distribution (Positive)&quot;</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">show</span><span class="p">()</span>
</pre></div>

    </div>
</div>
</div>

<div class="output_wrapper">
<div class="output">


<div class="output_area">

    <div class="prompt"></div>




<div class="output_png output_subarea ">
<img src="data:image/png;base64,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
"
>
</div>

</div>

</div>
</div>

</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[19]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">y_final</span> <span class="o">=</span> <span class="p">[]</span>
<span class="k">for</span> <span class="n">i</span><span class="p">,</span> <span class="n">k</span><span class="p">,</span> <span class="n">z</span><span class="p">,</span> <span class="n">t</span> <span class="ow">in</span> <span class="nb">zip</span><span class="p">(</span><span class="n">y_val</span><span class="p">[</span><span class="mi">0</span><span class="p">::</span><span class="mi">4</span><span class="p">],</span> <span class="n">y_val</span><span class="p">[</span><span class="mi">1</span><span class="p">::</span><span class="mi">4</span><span class="p">],</span> <span class="n">y_val</span><span class="p">[</span><span class="mi">2</span><span class="p">::</span><span class="mi">4</span><span class="p">],</span> <span class="n">y_val</span><span class="p">[</span><span class="mi">3</span><span class="p">::</span><span class="mi">4</span><span class="p">]):</span>
    <span class="n">y_final</span><span class="o">.</span><span class="n">append</span><span class="p">(</span><span class="n">math</span><span class="o">.</span><span class="n">log</span><span class="p">(</span><span class="n">i</span> <span class="o">+</span> <span class="n">k</span> <span class="o">+</span> <span class="n">z</span> <span class="o">+</span> <span class="n">t</span><span class="p">))</span>

<span class="n">x_val</span> <span class="o">=</span> <span class="p">[</span><span class="n">math</span><span class="o">.</span><span class="n">log</span><span class="p">(</span><span class="n">i</span> <span class="o">+</span> <span class="mi">1</span><span class="p">)</span> <span class="k">for</span> <span class="n">i</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="nb">len</span><span class="p">(</span><span class="n">y_final</span><span class="p">))]</span>

<span class="n">fig</span> <span class="o">=</span> <span class="n">plt</span><span class="o">.</span><span class="n">figure</span><span class="p">(</span><span class="n">figsize</span><span class="o">=</span><span class="p">(</span><span class="mi">10</span><span class="p">,</span><span class="mi">5</span><span class="p">))</span>

<span class="n">plt</span><span class="o">.</span><span class="n">xlabel</span><span class="p">(</span><span class="s2">&quot;Words (Log)&quot;</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">ylabel</span><span class="p">(</span><span class="s2">&quot;Frequency (Log)&quot;</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">title</span><span class="p">(</span><span class="s2">&quot;Word Frequency Distribution (Positive)&quot;</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">plot</span><span class="p">(</span><span class="n">x_val</span><span class="p">,</span> <span class="n">y_final</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">show</span><span class="p">()</span>
</pre></div>

    </div>
</div>
</div>

<div class="output_wrapper">
<div class="output">


<div class="output_area">

    <div class="prompt"></div>




<div class="output_png output_subarea ">
<img src="data:image/png;base64,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
"
>
</div>

</div>

</div>
</div>

</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[20]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">neg_lines</span> <span class="o">=</span> <span class="nb">list</span><span class="p">(</span><span class="n">df2</span><span class="p">[</span><span class="n">df2</span><span class="o">.</span><span class="n">label</span> <span class="o">==</span> <span class="o">-</span><span class="mi">1</span><span class="p">]</span><span class="o">.</span><span class="n">headline</span><span class="p">)</span>

<span class="n">neg_tokens</span> <span class="o">=</span> <span class="n">process_text</span><span class="p">(</span><span class="n">neg_lines</span><span class="p">)</span>
<span class="n">neg_freq</span> <span class="o">=</span> <span class="n">nltk</span><span class="o">.</span><span class="n">FreqDist</span><span class="p">(</span><span class="n">neg_tokens</span><span class="p">)</span>

<span class="n">neg_freq</span><span class="o">.</span><span class="n">most_common</span><span class="p">(</span><span class="mi">20</span><span class="p">)</span>
</pre></div>

    </div>
</div>
</div>

<div class="output_wrapper">
<div class="output">


<div class="output_area">

    <div class="prompt output_prompt">Out[20]:</div>




<div class="output_text output_subarea output_execute_result">
<pre>[(&#39;spce&#39;, 17),
 (&#39;money&#39;, 13),
 (&#39;fuck&#39;, 10),
 (&#39;amd&#39;, 10),
 (&#39;wsb&#39;, 9),
 (&#39;going&#39;, 8),
 (&#39;buy&#39;, 8),
 (&#39;stop&#39;, 8),
 (&#39;calls&#39;, 7),
 (&#39;fucked&#39;, 7),
 (&#39;today&#39;, 7),
 (&#39;sub&#39;, 6),
 (&#39;go&#39;, 6),
 (&#39;loss&#39;, 6),
 (&#39;lost&#39;, 6),
 (&#39;anyone&#39;, 6),
 (&#39;coronavirus&#39;, 6),
 (&#39;bears&#39;, 5),
 (&#39;recession&#39;, 5),
 (&#39;retarded&#39;, 5)]</pre>
</div>

</div>

</div>
</div>

</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[21]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">y_val</span> <span class="o">=</span> <span class="p">[</span><span class="n">x</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span> <span class="k">for</span> <span class="n">x</span> <span class="ow">in</span> <span class="n">neg_freq</span><span class="o">.</span><span class="n">most_common</span><span class="p">()]</span>

<span class="n">fig</span> <span class="o">=</span> <span class="n">plt</span><span class="o">.</span><span class="n">figure</span><span class="p">(</span><span class="n">figsize</span><span class="o">=</span><span class="p">(</span><span class="mi">10</span><span class="p">,</span><span class="mi">5</span><span class="p">))</span>
<span class="n">plt</span><span class="o">.</span><span class="n">plot</span><span class="p">(</span><span class="n">y_val</span><span class="p">)</span>

<span class="n">plt</span><span class="o">.</span><span class="n">xlabel</span><span class="p">(</span><span class="s2">&quot;Words&quot;</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">ylabel</span><span class="p">(</span><span class="s2">&quot;Frequency&quot;</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">title</span><span class="p">(</span><span class="s2">&quot;Word Frequency Distribution (Negative)&quot;</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">show</span><span class="p">()</span>
</pre></div>

    </div>
</div>
</div>

<div class="output_wrapper">
<div class="output">


<div class="output_area">

    <div class="prompt"></div>




<div class="output_png output_subarea ">
<img src="data:image/png;base64,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qVMnrF69GuPHj0d8fDxWr16Nzp07P6uwzfYgOwO3Mx6VdhhERERUjikEwVY2MCkZnU6QbecOrU6HHodX42FOJvZ2nITn7B1keU55ZWuztSyJdScN60061p10rDvpbK3u3Nw0UCpN93BafYufLcjMy8GdzH+QnafFrczU0g6HiIiIyikmflZApXj8NujYAEtEREQyYeJnBQomflpBV4qREBERUXnGxM8KKAvMNGaLHxEREcmFiZ8VKNjil8cWPyIiIpIJEz8roFQooEB+qx9b/IiIiEguTPyshOrf7l62+BEREZFcmPhZCeW/3b1M/IiIiEguTPyshL7Fj129REREJBcmflZCpWSLHxEREcmLiZ+VUIldvWzxIyIiInkw8bMSj7t62eJHRERE8mDiZyWUbPEjIiIimTHxsxJqzuolIiIimTHxsxJKdvUSERGRzJj4WYnHs3rZ1UtERETyYOJnJfSzetniR0RERHJh4mclVBzjR0RERDJj4mclHu/Vy65eIiIikgcTPyuhFLt6mfgRERGRPJj4WQk1t2wjIiIimTHxsxJKsauXiR8RERHJg4mflVCxq5eIiIhkxsTPSrDFj4iIiOTGxM9KcMs2IiIikpvVJH4xMTHw8/PD7du3Dco7d+4MX19fo6+UlJRC76XVavHpp58iODgYgYGBGDx4MM6dOyf3SygRzuolIiIiualLOwAAuHz5MsaMGQOtVmtQnp6ejsTEREybNg3Nmzc3OFa5cuVC77dgwQLs2LED06dPx/PPP4+IiAgMHz4cP/zwA2rUqCHLaygpruNHREREcivVxE+r1WLr1q1YtmwZ7OzsjI7HxcVBEAR07NgRdevWLdY9k5KSsHXrVsyZMweDBg0CALz00kvo0qUL1q9fj3nz5ln0NVgKt2wjIiIiuZVqV290dDSWLl2KkSNHYvr06UbHY2JiULFiRdSqVavY9zxx4gTy8vLQpUsXscze3h4hISE4duyYJcKWherfdfy0TPyIiIhIJqWa+NWtWxcHDhzAxIkToVKpjI7HxcXB2dkZU6dORVBQEJo0aYLw8HDcu3ev0HteuXIFzs7OcHV1NSivWbMmbt68iaysLIu/Dkvgci5EREQkt1Lt6nV3dy/yeGxsLO7fv4/69etj6NChuHLlClauXIlhw4Zhx44dqFixotE1aWlp0Gg0RuWOjo4A8scNmrru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ROR61bjnbu/evYSFhfHVV19RUVHhLOzi4+NZvXo1JSUlJCQksHv3budyly5dYsmSJYSEhPDBBx8QGBgIwD333ENKSgpPPfUUQ4cOxc/PD4ALFy7w+uuvExISAkB9fT0vvvgiAwYMYO3atc5xkZGRPPnkk845VlRU8PHHH/O73/2OWbNmAZCamooxhpMnT7ZCSiJyI9EePxERD/r3709QUJDzAo+ioiKsViuxsbHA5T2CVquVzz77DLh8YUe3bt3o1asXX375JeXl5aSlpTmLPoBbbrmFadOmcfr0ab744gtne8+ePZ1FH8CBAweoqKhg4sSJzqIPYMKECQQHBzvfBwUFcfPNN/Puu++yZcsWampqAFi6dCmrV6/+/4ciIjc0FX4iIh74+PgQExPjvMCjqKgIm83mLOSCgoK4/fbb+fzzzwHYs2eP8zDwqVOnAJq8yKNPnz4A/Pvf/3a2de7c2WXM119/DVwuCP+X1WqlV69ezvf+/v4sWbKEiooKHn74YeLj45k1axbvv/++zvETETcq/EREmhEbG8uhQ4eora2luLjYeZi3UXx8PPv27aOyspKjR486Dw8bYzx+ZmPf/+7Js1qtLmMsFgtw+RDwDzU0NLi8HzduHDt27ODZZ59l+PDh7Nmzh0WLFjF58mTn+YciIqDCT0SkWXFxcVy8eJGPPvqI7777zu3GzAkJCdTU1LB582aMMc7+7t27A3DkyBG3zzx69CgA3bp18/i9PXr0AOD48eMu7cYY595AuPykkOLiYiwWC3fffTevvvoqn3zyCTNmzODQoUMUFhZexVqLSHulwk9EpBlRUVHcfPPNvPfee/j5+RETE+PSHxMTg6+vLxs3bqR79+7Ogi0qKoouXbqwbt06qqurneOrq6t599136dKlCzabzeP3RkZG0r17d9atW8f333/vbN+8ebPLY+T++c9/kpaWxoYNG5xt/v7+REZGAu57EkXEu+mqXhGRZvj6+mK329m5cyexsbHcdNNNLv0dOnRgwIAB7N69m1/84hfOdj8/PxYsWMCjjz7KpEmTuPvuuwHYsGED33zzDcuXL8fHx/Nvb4vFwsKFC/nNb37DlClTmDRpEqdPnyY3N5dbb73VOW7gwIHExsby8ssvU1ZWRkREBGVlZeTk5NCnTx8GDx78f05ERG5k2uMnInIFjY9v++H5fY0aD+/+8DFtycnJrFq1iq5du7JixQqysrIIDQ1lzZo1JCUlXfF7R4wYQVZWFjfddBPLli2joKCAZ5991nlxCFwuEFesWME999zD9u3bWbJkCX/6058YPXo0a9aswd/f/2pXW0TaIYtp7gxkEREREWk3tMdPRERExEuo8BMRERHxEir8RERERLyECj8RERERL6HCT0RERMRLqPATERER8RIq/ERERES8hAo/ERERES+hwk9ERETES6jwExEREfES/wGtjLjCPuFcVAAAAABJRU5ErkJggg==
"
>
</div>

</div>

</div>
</div>

</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[22]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">y_final</span> <span class="o">=</span> <span class="p">[]</span>
<span class="k">for</span> <span class="n">i</span><span class="p">,</span> <span class="n">k</span><span class="p">,</span> <span class="n">z</span> <span class="ow">in</span> <span class="nb">zip</span><span class="p">(</span><span class="n">y_val</span><span class="p">[</span><span class="mi">0</span><span class="p">::</span><span class="mi">3</span><span class="p">],</span> <span class="n">y_val</span><span class="p">[</span><span class="mi">1</span><span class="p">::</span><span class="mi">3</span><span class="p">],</span> <span class="n">y_val</span><span class="p">[</span><span class="mi">2</span><span class="p">::</span><span class="mi">3</span><span class="p">]):</span>
    <span class="k">if</span> <span class="n">i</span> <span class="o">+</span> <span class="n">k</span> <span class="o">+</span> <span class="n">z</span> <span class="o">==</span> <span class="mi">0</span><span class="p">:</span>
        <span class="k">break</span>
    <span class="n">y_final</span><span class="o">.</span><span class="n">append</span><span class="p">(</span><span class="n">math</span><span class="o">.</span><span class="n">log</span><span class="p">(</span><span class="n">i</span> <span class="o">+</span> <span class="n">k</span> <span class="o">+</span> <span class="n">z</span><span class="p">))</span>

<span class="n">x_val</span> <span class="o">=</span> <span class="p">[</span><span class="n">math</span><span class="o">.</span><span class="n">log</span><span class="p">(</span><span class="n">i</span><span class="o">+</span><span class="mi">1</span><span class="p">)</span> <span class="k">for</span> <span class="n">i</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="nb">len</span><span class="p">(</span><span class="n">y_final</span><span class="p">))]</span>

<span class="n">fig</span> <span class="o">=</span> <span class="n">plt</span><span class="o">.</span><span class="n">figure</span><span class="p">(</span><span class="n">figsize</span><span class="o">=</span><span class="p">(</span><span class="mi">10</span><span class="p">,</span><span class="mi">5</span><span class="p">))</span>

<span class="n">plt</span><span class="o">.</span><span class="n">xlabel</span><span class="p">(</span><span class="s2">&quot;Words (Log)&quot;</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">ylabel</span><span class="p">(</span><span class="s2">&quot;Frequency (Log)&quot;</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">title</span><span class="p">(</span><span class="s2">&quot;Word Frequency Distribution (Negative)&quot;</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">plot</span><span class="p">(</span><span class="n">x_val</span><span class="p">,</span> <span class="n">y_final</span><span class="p">)</span>
<span class="n">plt</span><span class="o">.</span><span class="n">show</span><span class="p">()</span>
</pre></div>

    </div>
</div>
</div>

<div class="output_wrapper">
<div class="output">


<div class="output_area">

    <div class="prompt"></div>




<div class="output_png output_subarea ">
<img src="data:image/png;base64,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
"
>
</div>

</div>

</div>
</div>

</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[&nbsp;]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span>
</pre></div>

    </div>
</div>
</div>

</div>
    </div>
  </div>
</body>

 


</html>
`
  return new Response(body, {
    headers: { 'content-type': 'text/html' },
  })
}
