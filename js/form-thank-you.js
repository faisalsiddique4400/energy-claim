$(document).ready(function () {
  // Getting data from previous page
  let searchParams = new URLSearchParams(window.location.search);
  if (searchParams.has("d")) {
    var data = JSON.parse(atob(searchParams.get("d")));
    $(".fname_pull").text(data["fname"]);
    $(".company_name_pull").text(data["company_name"]);
  }
  if (
    localStorage.getItem("company_name") !== null &&
    localStorage.getItem("company_number") !== null &&
    localStorage.getItem("company_type") !== null &&
    localStorage.getItem("company_job_title") !== null &&
    localStorage.getItem("company_postcode") !== null &&
    localStorage.getItem("fname") !== null &&
    localStorage.getItem("lname") !== null &&
    localStorage.getItem("date_of_birth") !== null &&
    localStorage.getItem("telephone_number") !== null &&
    localStorage.getItem("email_address") !== null &&
    localStorage.getItem("energy_supplier") !== null &&
    localStorage.getItem("energy_utility_type") !== null &&
    localStorage.getItem("energy_broker_commission") !== null
  ) {
    if (
      localStorage.getItem("company_name").length !== 0 &&
      localStorage.getItem("company_number").length !== 0 &&
      localStorage.getItem("company_type").length !== 0 &&
      localStorage.getItem("company_job_title").length !== 0 &&
      localStorage.getItem("company_postcode").length !== 0 &&
      localStorage.getItem("fname").length !== 0 &&
      localStorage.getItem("lname").length !== 0 &&
      localStorage.getItem("date_of_birth").length !== 0 &&
      localStorage.getItem("telephone_number").length !== 0 &&
      localStorage.getItem("email_address").length !== 0 &&
      localStorage.getItem("energy_supplier").length !== 0 &&
      localStorage.getItem("energy_utility_type").length !== 0 &&
      localStorage.getItem("energy_broker_commission").length !== 0
    ) {
      $(".conditional_hide").removeClass("hide");
      $(".company_name_pull").text(localStorage.getItem("company_name"));
      $(".company_number_pull").text(localStorage.getItem("company_number"));
      $(".company_type_pull").text(localStorage.getItem("company_type"));
      $(".company_job_title_pull").text(
        localStorage.getItem("company_job_title")
      );
      $(".company_premises_pull").text(
        localStorage.getItem("company_premises")
      );
      $(".company_line_1_pull").text(localStorage.getItem("company_line_1"));
      $(".company_region_pull").text(localStorage.getItem("company_region"));
      $(".company_postcode_pull").text(
        localStorage.getItem("company_postcode")
      );
      $(".company_locality_pull").text(
        localStorage.getItem("company_locality")
      );
      $(".fname_pull").text(localStorage.getItem("fname"));
      $(".lname_pull").text(localStorage.getItem("lname"));
      $(".date_of_birth_pull").text(localStorage.getItem("date_of_birth"));
      $(".energy_supplier_pull").text(localStorage.getItem("energy_supplier"));
      $(".energy_utility_type_pull").text(
        localStorage.getItem("energy_utility_type")
      );
      $(".energy_broker_commission_pull").text(
        localStorage.getItem("energy_broker_commission")
      );
      $(".telephone_number_pull").text(
        localStorage.getItem("telephone_number")
      );
      $(".email_address_pull").text(localStorage.getItem("email_address"));
    }
  }

  // Generate confetti pop canvas
  var thank_you_canvas = document.getElementById("thank_you_confetti");
  thank_you_canvas.confetti =
    thank_you_canvas.confetti ||
    confetti.create(thank_you_canvas, { resize: true });

  // Confetti pop
  setTimeout(function () {
    thank_you_canvas.confetti({
      particleCount: 250,
      colors: ["#4ECDC4", "#FBD774", "#E00400"],
      spread: 200,
      origin: { y: 0.7 }
    });
  }, 400);
});
