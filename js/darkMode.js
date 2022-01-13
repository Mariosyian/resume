$("#toggleDark").click( () => {
  if ($("#toggleDark").hasClass("fa-moon")) {
    $("#toggleDark").removeClass("fa-moon");
    $("#toggleDark").addClass("fa-sun");
  } else {
    $("#toggleDark").removeClass("fa-sun");
    $("#toggleDark").addClass("fa-moon");
  }
  const elements = [
    { "el": "body", "class": "darkModeBody" },
    { "el": "#root", "class": "bg-dark" },
    { "el": ".container-fluid", "class": "darkModeContainerFluid" },
    { "el": ".icon", "class": "darkModeIcon" },
    { "el": "a", "class": "btn-outline-dark", "classNew": "btn-outline-light" },
  ]
  elements.forEach( (el) => {
    if (el.classNew) {
      if ($(el.el).hasClass(el.class)) {
        $(el.el).removeClass(el.class);
        $(el.el).addClass(el.classNew);
      } else {
        $(el.el).removeClass(el.classNew);
        $(el.el).addClass(el.class);
      }
    } else {
      $(el.el).hasClass(el.class) ? $(el.el).removeClass(el.class) : $(el.el).addClass(el.class);
    }
  })
});