$("#toggleDark").click( () => {
  if ($("#toggleDark").hasClass("bi-moon-fill")) {
    $("#toggleDark").removeClass("bi-moon-fill");
    $("#toggleDark").addClass("bi-brightness-high-fill");
  } else {
    $("#toggleDark").removeClass("bi-brightness-high-fill");
    $("#toggleDark").addClass("bi-moon-fill");
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