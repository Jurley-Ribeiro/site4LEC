const scrollerConfig = {
  section: ".scrollable",
  sectionName: false,
  easing: "easeOutExpo",
  scrollSpeed: 1300,
  offset: 0,
  scrollbars: true,
  touchScroll: false,
  standardScrollElements: "", // Elementos que precisar de Scroll normal.
}

$(function() {
  $.scrollify(scrollerConfig);
});