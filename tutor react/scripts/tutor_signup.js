function getTutorQueryString() {
  var name = document.getElementById("sf-name").value;
  var email = document.getElementById("sf-email").value;
  var zip = document.getElementById("sf-zip").value;
  var subjects = document.getElementsByClassName("check-input");
  var school = document.getElementById("sf-school").value;
  var distance = document.getElementById("distance").value;
  var checkedSubjects = "";

  for (var i = 0; i != subjects.length; ++i) {
    if ((subjects[i].type = "checkbox" && subjects[i].checked == true)) {
      checkedSubjects += subjects[i].value + ",";
    }
  }
  if (checkedSubjects.length == 0) checkedSubjects = "none";
  checkedSubjects = checkedSubjects.substr(0, checkedSubjects.length - 1);

  name.replace(" ", "+");
  email.replace(".", "%2E");
  email.replace("@", "%40");

  sessionStorage.setItem("name", name);
  sessionStorage.setItem("t_name", name);
  sessionStorage.setItem("email", email);
  sessionStorage.setItem("zip", zip);
  sessionStorage.setItem("subjects", subjects);
  sessionStorage.setItem("school", school);
  sessionStorage.setItem("distance", distance);

  var queryString =
    "?name=" +
    name +
    "&zip=" +
    zip +
    "&subjects=" +
    checkedSubjects +
    "&distance=" +
    distance +
    "&school=" +
    school;
  console.log("isn't this so secure");
  return queryString;
}

window.addEventListener("load", function() {
  document
    .getElementById("tutor__signup")
    .addEventListener("submit", function(e) {
      e.preventDefault();
      queryString = getTutorQueryString();
      sessionStorage.setItem("isTutor", true);
      window.location.href = "view-tutors.html" + queryString;
      // checkHill();
    });
});

function checkHill() {
  var name = document.getElementById("sf-name").value;
  if (name.toLowerCase() == "patrick hill") {
    e.preventDefault();
    window.location.href = "https://www.youtube.com/watch?v=q7GAZZ-9zsc";
  }
}
