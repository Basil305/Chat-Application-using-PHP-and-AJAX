$(document).ready(function(){$(".vertical-scroll").perfectScrollbar({suppressScrollX:!0,theme:"dark"}),$(".horizontal-scroll").perfectScrollbar({suppressScrollY:!0,theme:"dark"}),$(".both-side-scroll").perfectScrollbar({theme:"dark"}),$(".visible-scroll").perfectScrollbar({theme:"dark"}),$(".min-scroll-length").perfectScrollbar({minScrollbarLength:200}),$(".scrollbar-margins").perfectScrollbar(),$(".default-handlers").perfectScrollbar(),$(".no-keyboard").perfectScrollbar({handlers:["click-rail","drag-scrollbar","wheel","touch"]}),$(".click-drag-handler").perfectScrollbar({handlers:["click-rail","drag-scrollbar"]}),$(".default-wheel-speed").perfectScrollbar(),$(".higher-wheel-speed").perfectScrollbar({wheelSpeed:10}),$(".lower-wheel-speed").perfectScrollbar({wheelSpeed:.1})});