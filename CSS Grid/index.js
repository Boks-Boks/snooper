var form = document.querySelector("div2");

  form.addEventListener("submit", function(e) {
    e.preventDefault();
    var search = form.querySelector("input[type=search]");
    search.value = "map: //" + search.value;
    form.submit();
  });