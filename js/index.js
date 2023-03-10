async function loadNav() {
  let res = await fetch("templ/nav.html");
  let nav = await res.text();
  $("body").append($(nav));
  $(".dropdown-button").dropdown({
    constrainWidth: false,
    hover: true,
    belowOrigin: true,
    alignment: "right",
  });
  return "loadNav loaded!!!";
}

async function loadBody(secUrl) {
  let res = await loadNav();
  res = await fetch(secUrl);
  let sec = await res.text();
  $("body").append($(sec));
  return "body loaded";
}

async function loadHomeAsync() {
  res = await loadBody("templ/index.html");
  return "loadHomeAsync done!!!";
}

async function loadDataEnggAsync() {
  res = await loadBody("templ/deg.html");
  return "loadDataEnggAsync loaded!!!";
}

async function loadMLOpsAsync() {
  res = await loadBody("templ/mlops.html");
  return "MLOps loaded!!!";
}

function loadHome() {
  loadHomeAsync().then((r) => console.log(r));
}

function loadDataEngg() {
  loadDataEnggAsync().then((r) => console.log(r));
}

function loadMLOps() {
  loadMLOpsAsync().then((r) => console.log(r));
}
