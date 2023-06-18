$(document).ready(function () {
  ////////////////////////////
  ////////// Step 1 //////////
  ////////////////////////////
  var energy_supplier = $('input[name="energy_supplier"]');
  $("#step_1 .next").click(function () {
    validating_state(this);
    var required_fields_valid = true;
    setTimeout(function () {
      // Energy supplier
      if ($(energy_supplier).val().length > 2) {
        hide_all_errors(energy_supplier);
        show_step_2();
      } else {
        show_error_primary(energy_supplier);
        scroll_to_first_error(energy_supplier);
        required_fields_valid = false;
      }
      localStorage.setItem("energy_supplier", $(energy_supplier).val());
    }, 500);
  });
  // Step 1 revalidate fields based on action
  $(energy_supplier).keyup(function () {
    if ($(energy_supplier).val().length > 2) {
      hide_all_errors(energy_supplier);
    }
  });

  ////////////////////////////
  ////////// Step 2 //////////
  ////////////////////////////
  var energy_utility_type = $('input[name="energy_utility_type"]');
  var energy_broker_commission = $('input[name="energy_broker_commission"]');
  $("#step_2 .next").click(function () {
    validating_state(this);
    var required_fields_valid = true;
    setTimeout(function () {
      // Enery supplier utility type
      if ($(energy_utility_type).is(":checked")) {
        hide_all_errors(energy_utility_type);
      } else {
        show_error_primary(energy_utility_type);
        scroll_to_first_error(energy_utility_type);
        required_fields_valid = false;
      }
      // Energy broker commission
      if ($(energy_broker_commission).is(":checked")) {
        hide_all_errors(energy_broker_commission);
      } else {
        show_error_primary(energy_broker_commission);
        scroll_to_first_error(energy_broker_commission);
        required_fields_valid = false;
      }
      // Validate all of step 3
      if (required_fields_valid) {
        show_step_3();
      }
      localStorage.setItem("energy_supplier", $(energy_supplier).val());
    }, 500);
  });
  // Step 2 revalidate fields based on action
  $(energy_utility_type).click(function () {
    hide_all_errors(energy_utility_type);
    localStorage.setItem(
      "energy_utility_type",
      $('input[name="energy_utility_type"]:checked').val()
    );
  });
  $(energy_broker_commission).click(function () {
    hide_all_errors(energy_broker_commission);
    localStorage.setItem(
      "energy_broker_commission",
      $('input[name="energy_broker_commission"]:checked').val()
    );
  });
  // Step 2 back
  $("#step_2 .back").click(function () {
    validating_state(this);
    setTimeout(function () {
      show_step_1();
    }, 500);
  });

  ////////////////////////////
  ////////// Step 3 //////////
  ////////////////////////////
  var company_name_input = $('input[name="company_name_input"]');
  var company_select = $("#company_select");
  $("#company_search").click(function () {
    validating_state(this);
    setTimeout(function () {
      // company name
      if ($(company_name_input).val().length > 1) {
        hide_all_errors(company_name_input);
        company_name_valid();
      } else {
        show_error_primary(company_name_input);
        scroll_to_first_error_single(company_name_input);
      }
    }, 500);
  });
  // revalidate company name input on action
  $(company_name_input).keyup(function () {
    if ($(company_name_input).val().length > 2) {
      hide_all_errors(company_name_input);
    }
  });
  // If company name is valid
  function company_name_valid() {
    var settings = {
      url:
        "https://api.company-information.service.gov.uk/search/companies?q=" +
        $(company_name_input).val() +
        "&items_per_page=200",
      method: "GET",
      timeout: 0,
      // crossDomain: true,
      headers: {
        Accept: "application/json, text/plain, */*",
        Authorization: "Basic YzI3YWE5ZWQtMTMxMy00NDNkLWIxNWMtMmJiODdkMzc2Mjdh"
      }
    };
    $.ajax(settings).done(function (json) {
      console.log(json);
      // Reset user to top of page
      $("html, body").animate(
        {
          scrollTop: $("#reset").offset().top - 0
        },
        0
      );
      $(".loading-step").hide();
      $(".company_name_pull").text($(company_name_input).val());
      $(".loading-page").show();
      $("body").addClass("disable-scroll");
      // Faux loading, which will be based on API response, not a set timer
      setTimeout(function () {
        $(".loading-page").hide();
        // Show confirmation modal
        $(".modal").hide();
        $("#company_confirmation_modal").show();
      }, 1000);
      $("#company_select option").each(function () {
        if ($(this).text() != "Select your business") {
          $(this).remove();
        }
      });
      var selectElem = $("#company_select");
      //var obj = jQuery.parseJSON(json);
      $.each(json.items, function (key, value) {
        // Set some re-usable vars
        var company_name = value.title.toUpperCase();
        var address = value.address;
        var company_number = value.company_number;
        var company_type = value.company_type;
        // Append option to select
        $("<option/>", {
          value: company_number,
          text: company_name,
          address_line_1:
            address && address.address_line_1 ? address.address_line_1 : "",
          region: address && address.region ? address.region : "",
          postal_code:
            address && address.postal_code ? address.postal_code : "",
          premises: address && address.premises ? address.premises : "",
          locality: address && address.locality ? address.locality : "",
          company_number: company_number,
          company_type: company_type
        }).appendTo(selectElem);
      });
    });
  }
  // Handle company select dropdown
  $("#company_select").on("change", function () {
    var company_name = $("#company_select option:selected").text();
    console.log(company_name);
    var selected_company = [
      "BRITISH GAS",
      "BULB ENERGY",
      "EDF ENERGY",
      "ENERGY UTILITY",
      "E.ON",
      "OVO",
      "OCTOPUS ENERGY",
      "UTILITA",
      "SCOTTISH GAS",
      "SCOTTISH POWER",
      "SO ENERGY",
      "SSE",
      "SHELL ENERGY"
    ];
    if (
      selected_company.some((v) =>
        company_name.toLowerCase().includes(v.toLowerCase())
      )
    ) {
      // Selected company contains key word of an energy company
      $("#company_select_container").addClass("hide");
      $("#company_reject_name").removeClass("hide");
      populate_company_data();
    } else {
      $("#company_select_container").addClass("hide");
      $("#company_confirmation").removeClass("hide");
      $("html, body").animate(
        {
          scrollTop: $("#reset").offset().top - 0
        },
        0
      );
      populate_company_data();
    }
  });
  // When none of the companies apply to the user
  $(".company_none_apply").click(function () {
    $(".modal").hide();
    $("body").removeClass("disable-scroll");
    $("#company_select_container").removeClass("hide");
    $("#company_confirmation").addClass("hide");
    $("#company_reject_name").addClass("hide");
    $("#company_select").val("0");
    $(company_name_input).val("");
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)
    ) {
    } else {
      $(company_name_input).first().focus();
    }
  });
  // When the company information is incorrect
  $("#company_incorrect_info").click(function () {
    $("#company_select_container").removeClass("hide");
    $("#company_confirmation").addClass("hide");
    $("#company_select").val("0");
    $(".company_name_pull").text($(company_name_input).val());
  });
  // When the company information is correct
  $(".company_confirm_correct").click(function () {
    $(".modal").hide();
    $("#company_select_container").removeClass("hide");
    $("#company_confirmation").addClass("hide");
    $("#company_reject_name").addClass("hide");
    $("body").removeClass("disable-scroll");
    show_step_4();
  });
  function populate_company_data() {
    // Pull data from attached select option
    var company_name = $("#company_select option:selected").text();
    var company_line_1 = $(company_select)
      .find(":selected")
      .attr("address_line_1");
    var company_region = $(company_select).find(":selected").attr("region");
    var company_postcode = $(company_select)
      .find(":selected")
      .attr("postal_code");
    var company_premises = $(company_select).find(":selected").attr("premises");
    var company_locality = $(company_select).find(":selected").attr("locality");
    var company_number = $(company_select)
      .find(":selected")
      .attr("company_number");
    var company_type = $(company_select).find(":selected").attr("company_type");
    // Update form fields with selected option data
    $('input[name="company_name"]').val(company_name);
    $('input[name="company_number"]').val(company_number);
    $('input[name="company_type"]').val(company_type);
    $('input[name="company_premises"]').val(company_premises);
    $('input[name="company_line_1"]').val(company_line_1);
    $('input[name="company_region"]').val(company_region);
    $('input[name="company_postcode"]').val(company_postcode);
    $('input[name="company_locality"]').val(company_locality);
    // Update modal with selected option data
    $(".company_name_pull").text(company_name);
    $(".company_number_pull").text(company_number);
    $(".company_line_1_pull").text(company_line_1);
    $(".company_region_pull").text(company_region);
    $(".company_postcode_pull").text(company_postcode);
    $(".company_premises_pull").text(company_premises);
    $(".company_locality_pull").text(company_locality);
    // Create localStorage with selected data
    localStorage.setItem("company_name", company_name);
    localStorage.setItem("company_number", company_number);
    localStorage.setItem("company_type", company_type);
    localStorage.setItem("company_premises", company_premises);
    localStorage.setItem("company_line_1", company_line_1);
    localStorage.setItem("company_region", company_region);
    localStorage.setItem("company_postcode", company_postcode);
    localStorage.setItem("company_locality", company_locality);
  }
  // Step 3 back
  $("#step_3 .back").click(function () {
    validating_state(this);
    setTimeout(function () {
      show_step_2();
    }, 500);
  });

  ////////////////////////////
  ////////// Step 4 //////////
  ////////////////////////////
  var title = $('select[name="title"]');
  var fname = $('input[name="fname"]');
  var lname = $('input[name="lname"]');
  var date_of_birth = $('input[name="date_of_birth"]');
  var company_job_title = $('input[name="company_job_title"]');
  $("#step_4 .next").click(function () {
    validating_state(this);
    var required_fields_valid = true;
    setTimeout(function () {
      // Title
      if ($(title).val()) {
        hide_all_errors(title);
      } else {
        show_error_primary(title);
        scroll_to_first_error(title);
        required_fields_valid = false;
      }
      // First name
      if ($(fname).val().length > 1) {
        hide_all_errors(fname);
      } else {
        show_error_primary(fname);
        scroll_to_first_error(fname);
        required_fields_valid = false;
      }
      // Last name
      if ($(lname).val().length > 1) {
        hide_all_errors(lname);
      } else {
        show_error_primary(lname);
        scroll_to_first_error(lname);
        required_fields_valid = false;
      }
      // Date of birth
      var date_of_birth_moment = moment(
        date_of_birth.val(),
        "DD/MM/YYYY",
        true
      );
      if (date_of_birth.val().length > 9 && date_of_birth_moment.isValid()) {
        if (validate_past_date_only(date_of_birth.val())) {
          if (validate_over_18(date_of_birth.val())) {
            hide_all_errors(date_of_birth);
          } else {
            show_error_tertiary(date_of_birth);
            scroll_to_first_error(date_of_birth);
            required_fields_valid = false;
          }
        } else {
          show_error_secondary(date_of_birth);
          scroll_to_first_error(date_of_birth);
          required_fields_valid = false;
        }
      } else {
        show_error_primary(date_of_birth);
        scroll_to_first_error(date_of_birth);
        required_fields_valid = false;
      }
      // Job title
      if ($(company_job_title).val().length > 1) {
        hide_all_errors(company_job_title);
      } else {
        show_error_primary(company_job_title);
        scroll_to_first_error(company_job_title);
        required_fields_valid = false;
      }
      // Validate all of step 3
      if (required_fields_valid) {
        show_step_5();
        $(".fname_pull").text($(fname).val());
      }
      localStorage.setItem("fname", $(fname).val());
      localStorage.setItem("lname", $(lname).val());
      localStorage.setItem("date_of_birth", $(date_of_birth).val());
      localStorage.setItem("company_job_title", $(company_job_title).val());
    }, 500);
  });
  // Step 4 revalidate fields based on action
  $(title).change(function () {
    hide_all_errors(title);
  });
  $(fname).keyup(function () {
    if ($(fname).val().length > 2) {
      hide_all_errors(fname);
    }
  });
  $(lname).keyup(function () {
    if ($(lname).val().length > 2) {
      hide_all_errors(lname);
    }
  });
  $(date_of_birth).keyup(function () {
    var date_of_birth_moment = moment(date_of_birth.val(), "DD/MM/YYYY", true);
    if (date_of_birth.val().length > 9 && date_of_birth_moment.isValid()) {
      if (validate_past_date_only($(date_of_birth).val())) {
        if (validate_over_18($(date_of_birth).val())) {
          hide_all_errors(date_of_birth);
        }
      }
    }
  });
  $(company_job_title).keyup(function () {
    if ($(company_job_title).val().length > 2) {
      hide_all_errors(company_job_title);
    }
  });
  // Step 4 back
  $("#step_4 .back").click(function () {
    validating_state(this);
    setTimeout(function () {
      $("#company_select").val("0");
      show_step_3();
    }, 500);
  });

  ////////////////////////////
  ////////// Step 5 //////////
  ////////////////////////////
  var telephone_number = $('input[name="telephone_number"]');
  var validate_telephone_number = $('input[name="validate_telephone_number"]');
  var email_address = $('input[name="email_address"]');
  var validate_email_address = $('input[name="validate_email_address"]');
  var email_validation_regex =
    /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  $("#step_1_form .submit").click(function (event) {
    event.preventDefault();
    validating_state(this);
    setTimeout(function () {
      // Telephone_number
      if ($(telephone_number).val().length > 10) {
        cleanse_telephone_number($(telephone_number).val());
      } else {
        $(validate_telephone_number).val("");
        show_error_primary(telephone_number);
        scroll_to_first_error(telephone_number);
      }
      // Email address
      if ($(email_address).val().length > 2) {
        if (email_validation_regex.test($(email_address).val())) {
          cleanse_email_address($(email_address).val());
        } else {
          $(validate_email_address).val("");
          show_error_secondary(email_address);
          scroll_to_first_error(email_address);
        }
      } else {
        $(validate_email_address).val("");
        show_error_primary(email_address);
        scroll_to_first_error(email_address);
      }
      // Validate all of step 5
    }, 500);
    localStorage.setItem("telephone_number", $(telephone_number).val());
    localStorage.setItem("email_address", $(email_address).val());
  });
  // Step 5 revalidate fields based on action
  $(telephone_number).keyup(function () {
    if ($(telephone_number).closest(".field").hasClass("field-error")) {
      if ($(telephone_number).val().length > 10) {
        hide_all_errors(telephone_number);
      }
    }
  });
  $(email_address).keyup(function () {
    if ($(email_address).closest(".field").hasClass("field-error")) {
      if ($(email_address).val().length > 2) {
        if (email_validation_regex.test($(email_address).val())) {
          hide_all_errors(email_address);
        }
      }
    }
  });
  // Validate all of step 5
  function step_5_validate_all() {
    if (
      $(validate_telephone_number).val() == "true" &&
      $(validate_email_address).val() == "true"
    ) {
      $("#step_1_form").on("submit", function (e) {
        e.preventDefault();
        var formData = $("#step_1_form").serializeArray();
        var jsonData = {};
        console.log({ formData });
        $.each(formData, function (index, field) {
          console.log(field.value);
          jsonData[field.name] = field.value;
        });
        console.log({ jsonData });
        sendSubmissionEmail(jsonData);
      });
      $("#step_1_form").submit();
    }
  }

  function sendSubmissionEmail(data) {
    const modified = {
      service_id: "service_7r6zf2j",
      template_id: "template_997kbdi",
      user_id: "wFTM3AjkphtrnUL3x",
      template_params: {
        from_name: "",
        to_name: "",
        data: JSON.stringify(data)
      }
    };

    $.ajax("https://api.emailjs.com/api/v1.0/email/send", {
      type: "POST",
      data: JSON.stringify(modified),
      contentType: "application/json"
    })
      .done(() => {
        window.location.href = "/energy-claim/step-signature.html";
      })
      .fail((e) => {
        alert("could not submit your form");
      });
  }
  // Step 5 back
  $("#step_5 .back").click(function () {
    validating_state(this);
    setTimeout(function () {
      show_step_4();
    }, 500);
  });

  // Show step 1
  function show_step_1() {
    $(".step").hide();
    $("#step_1").show();
    $(".form_hide").removeClass("hide");
    $(".first").removeClass("min-height-90");
    $(".form-navigation, .form-security").removeClass("varied_padding");
    $(".varied_wrap_width").removeClass("larger mobile_full");
    $(".loading-step").hide();
    scroll_to_top_of_page();
  }

  // Show step 2
  function show_step_2() {
    $(".step").hide();
    $("#step_2").show();
    $(".form_hide").addClass("hide");
    $(".first").addClass("min-height-90");
    $(".form-navigation, .form-security").addClass("varied_padding");
    $(".varied_wrap_width").addClass("larger mobile_full");
    $(".loading-step").hide();
    scroll_to_top_of_page();
    $("#step_2 .progress-bar div").css("width", "25%");
  }

  // Show step 3
  function show_step_3() {
    $(".step").hide();
    $("#step_3").show();
    $(".loading-step").hide();
    scroll_to_top_of_page();
    $("#step_3 .progress-bar div").css("width", "50%");
  }

  // Show step 4
  function show_step_4() {
    $(".step").hide();
    $("#step_4").show();
    $(".loading-step").hide();
    scroll_to_top_of_page();
    $("#step_4 .progress-bar div").css("width", "75%");
  }

  // Show step 5
  function show_step_5() {
    $(".step").hide();
    $("#step_5").show();
    $(".loading-step").hide();
    scroll_to_top_of_page();
    $("#step_5 .progress-bar div").css("width", "100%");
  }

  // Show primary error
  function show_error_primary(element) {
    $(element).closest(".field").addClass("field-error");
    $(element).closest(".field").find(".error").hide();
    $(element).closest(".field").find(".error.primary").show();
  }

  // Show secondary error
  function show_error_secondary(element) {
    $(element).closest(".field").addClass("field-error");
    $(element).closest(".field").find(".error").hide();
    $(element).closest(".field").find(".error.secondary").show();
  }

  // Show tertiary error
  function show_error_tertiary(element) {
    $(element).closest(".field").addClass("field-error");
    $(element).closest(".field").find(".error").hide();
    $(element).closest(".field").find(".error.tertiary").show();
  }

  // Show quaternary error
  function show_error_quaternary(element) {
    $(element).closest(".field").addClass("field-error");
    $(element).closest(".field").find(".error").hide();
    $(element).closest(".field").find(".error.quaternary").show();
  }

  // Show quaternary error
  function show_error_quinary(element) {
    $(element).closest(".field").addClass("field-error");
    $(element).closest(".field").find(".error").hide();
    $(element).closest(".field").find(".error.quinary").show();
  }

  // Hide all errors
  function hide_all_errors(element) {
    $(element)
      .closest(".field")
      .removeClass("field-error")
      .addClass("field-valid");
    $(element).closest(".field").find(".error").hide();
  }

  // Show validating state
  function validating_state(element) {
    $(element).closest(".step").find(".loading-step").show();
    $(element).closest(".step").find(".field").removeClass("field-error");
    $(element).closest(".step").find(".field").find(".error").hide();
  }

  // Scroll to first error
  function scroll_to_first_error(element) {
    $(element).closest(".step").find(".loading-step").hide();
    $("html, body").animate(
      {
        scrollTop: $(".field-error").first().offset().top - 150
      },
      0
    );
  }

  // Scroll to first error singular
  function scroll_to_first_error_single(element) {
    $(element).closest(".step").find(".loading-step").hide();
    $("html, body").animate(
      {
        scrollTop: $(".field-error").first().offset().top - 150
      },
      0
    );
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)
    ) {
    } else {
      $(".field-error input").first().focus();
    }
  }

  // Scroll to top of the page
  function scroll_to_top_of_page() {
    $("html, body").animate(
      {
        scrollTop: $("#reset").offset().top - 0
      },
      400
    );
  }

  // Clean names
  function clean_name(element) {
    var formatted_name = element.replace(/[^a-z]/gi, "");
    const capitalise_name =
      formatted_name.charAt(0).toUpperCase() + formatted_name.slice(1);
    return capitalise_name;
  }
  $(fname).keyup(function () {
    $('input[name="fname_clean"]').val(clean_name($(fname).val()));
  });
  $(lname).keyup(function () {
    $('input[name="lname_clean"]').val(clean_name($(lname).val()));
  });

  // Validate today and past date only
  function validate_past_date_only(element) {
    var today = new moment();
    element = moment(element, "DD/MM/YYYY", true);
    return element.startOf("day") <= today.startOf("day");
  }

  // Validate age over 18
  function validate_over_18(element) {
    var dateString = element.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
    var d = new Date(dateString[3], dateString[2] - 1, dateString[1]);
    var theDOB = new Date(d);
    var currentDate = new Date().toJSON().slice(0, 10) + " 01:00:00";
    var theAge = ~~((Date.now(currentDate) - theDOB) / 31557600000);
    if (theAge >= 18) {
      return true;
    } else {
      return false;
    }
  }

  // Show rejected modal
  function show_rejected_modal(element) {
    $(element).closest(".step").find(".loading-step").hide();
    $(element).closest(".step").find("input").prop("checked", false);
    $("#rejected_modal").show();
    $("body").addClass("disable-scroll");
  }

  // Currency Input
  function number_with_commas(n) {
    n = String(n);
    if (n == "") {
      return "";
    }
    return (
      Math.round(parseFloat(n.replace(/,/g, "")) * 100) / 100
    ).toLocaleString();
  }
  $(document).on("keyup", ".currency_input", function () {
    var clean_currency_value = $(this).val().replace(/\D/g, "");
    $(this).val(number_with_commas(clean_currency_value));
  });

  // Letters only input
  $(".letters_only").keyup(function () {
    $(this).val(
      $(this)
        .val()
        .replace(/[^a-z-]/gi, "")
    );
  });

  // Numbers only input
  $(".numbers_only").keyup(function () {
    $(this).val(
      $(this)
        .val()
        .replace(/[^0-9]/g, "")
    );
  });

  // Numbers and letters only input
  $(".numbers_and_letters_only").keyup(function () {
    $(this).val(
      $(this)
        .val()
        .replace(/[^A-Za-z0-9]+/g, "")
    );
  });

  // Uppercase input value
  $(".input_value_uppercase").keyup(function () {
    $(this).val($(this).val().toUpperCase().replace(" ", ""));
  });

  // Mask date inputs
  $(".date_input").mask("00/00/0000");

  // Cleanse email address function
  function cleanse_email_address(email) {
    $(validate_email_address).val("");
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regex.test(email)) {
      show_cleansed_email_address({ OriginalValid: true });
    } else {
      show_cleansed_email_address({ OriginalValid: false });
    }
  }
  function show_cleansed_email_address(result) {
    if (result.OriginalValid === false) {
      $(validate_email_address).val("");
      $(email_address).closest(".field").addClass("field-error");
      scroll_to_first_error_single(email_address);
    } else {
      $(validate_email_address).val("true");
      hide_all_errors(email_address);
      step_5_validate_all();
    }
  }

  // Cleanse telephone number
  function cleanse_telephone_number(telephoneNumber) {
    $(validate_telephone_number).val("");
    var regex = /^(?:(?:\+|0{0,2})44|0)7(?:[45789]\d{2}|624)\d{6}$/;
    if (regex.test(telephoneNumber)) {
      show_cleansed_telephone_number({ Status: { Success: true } });
    } else {
      show_cleansed_telephone_number({ Status: { Success: false } });
    }
  }
  function show_cleansed_telephone_number(result) {
    if (result.Status.Success === false) {
      $(validate_telephone_number).val("");
      show_error_secondary(telephone_number);
      scroll_to_first_error_single(telephone_number);
      return false;
    } else {
      $(validate_telephone_number).val("true");
      hide_all_errors(telephone_number);
      step_5_validate_all();
    }
  }

  // Job title list (autocomplete)
  var job_title_list = [
    "Abattoir Operative",
    "Accommodation Warden",
    "Accountant - Management",
    "Accountant - Private Practice",
    "Accountant - Public Sector",
    "Accounting Technician",
    "Accounts Assistant",
    "Actor",
    "Actuary",
    "Acupuncturist",
    "Administrative Assistant or Officer - Courts",
    "Advertising Account Executive",
    "Advertising Account Planner",
    "Advertising Copywriter",
    "Advice Worker",
    "Advocate",
    "Advocates' Clerk",
    "Aerial and Satellite Installer",
    "Aerospace Engineer",
    "Agricultural Consultant",
    "Agricultural or Horticultural Scientist",
    "Air Cabin Crew",
    "Air Conditioning Engineer",
    "Air Quality Consultant",
    "Air Traffic Controller",
    "Aircraft Mechanic or Engineer",
    "Airline or Airport Passenger Service Assistant",
    "Airline Pilot",
    "Ambulance Care Assistant",
    "Ambulance Technician",
    "Ames Taper",
    "Anatomical Pathology Technologist",
    "Animal Care Assistant",
    "Animal Technician",
    "Animator",
    "Applications Developer",
    "Arborist",
    "Archaeologist",
    "Architect",
    "Architectural Technologist",
    "Archivist",
    "Army - Officer",
    "Army - Soldier",
    "Aromatherapist",
    "Art Therapist",
    "Arts Administrator",
    "Assembler - Electronics",
    "Assistance Dog Trainer",
    "Astronomer or Astrophysicist",
    "Auctioneer",
    "Audiologist",
    "Automotive Engineer",
    "Baker or Confectioner",
    "Bank or Building Society Customer Branch Adviser",
    "Bank or Building Society Manager",
    "Bar Worker",
    "Barber",
    "Beauty Consultant",
    "Beauty Therapist",
    "Bill Poster or Advertising Installer",
    "BIM Technician",
    "Biochemist",
    "Biologist",
    "Biomedical Scientist",
    "Biotechnologist",
    "Blacksmith",
    "Boat or Ship Builder",
    "Body Piercer",
    "Bodyguard",
    "Bookmaker",
    "Border Force Officer or Assistant Officer",
    "Botanist",
    "Brewery Worker",
    "Bricklayer",
    "British Sign Language Interpreter",
    "Broadcast Engineer",
    "Broadcast Journalist",
    "Builders' Merchant",
    "Building Services Engineer",
    "Building Standards Surveyor",
    "Building Technician",
    "Bus or Coach Driver",
    "Butcher",
    "Cabinet Maker",
    "CAD Technician",
    "Call Centre Agent",
    "Camera Operator",
    "Car Valet",
    "Cardiac Physiologist",
    "Care Assistant or Support Worker",
    "Care Home Manager",
    "Careers Adviser",
    "Caretaker",
    "Carpet and Upholstery Cleaner",
    "Cartographer",
    "Casino Dealer",
    "Catering Manager",
    "CCTV Operator",
    "Ceiling Fixer",
    "Cemetery Worker",
    "Ceramic Designer",
    "Character Artist",
    "Charity Fundraiser",
    "Chef or Cook",
    "Chemical Engineer",
    "Chemical Engineering Technician",
    "Chemical Plant Process Operative",
    "Chemist",
    "Childminder",
    "Children's Holiday Representative",
    "Chiropractor",
    "Choreographer",
    "Cinema or Theatre Assistant",
    "Cinema or Theatre Manager",
    "Civil Engineer",
    "Civil Engineering Technician",
    "Civil Service Administrative Assistant and Officer",
    "Civil Service Administrator - Fast Stream",
    "Classroom Assistant - Primary or Early Years",
    "Cleaner",
    "Clerical or Administrative Assistant",
    "Clerk of Court",
    "Clerk of Works",
    "Clinical or Biomedical Engineer",
    "Clinical Perfusionist",
    "Clinical Photographer",
    "Clinical Technologist",
    "Clothing Alteration Hand",
    "CNC Machinist",
    "Coastguard",
    "Colour Technologist",
    "Commissioning Editor",
    "Community Arts Worker",
    "Community Learning and Development Officer",
    "Community Warden",
    "Company Secretary",
    "Composer or Songwriter",
    "Conference Producer",
    "Construction Manager or Site Manager",
    "Control and Instrument Engineer",
    "Copy Editor",
    "Costume Designer",
    "Counsellor",
    "Countryside Ranger or Warden",
    "Courier",
    "Craft Designer or Worker",
    "Credit Manager",
    "Crematorium Technician",
    "Crime Scene Examiner",
    "Cruise Ship Worker",
    "Customer Service Administrator",
    "Cyber Security Analyst",
    "Director",
    "Dance Movement Psychotherapist",
    "Dance Teacher",
    "Dancer",
    "Data Analyst",
    "Data Scientist",
    "Database Administrator",
    "Delivery Assistant",
    "Delivery Driver",
    "Demolition Operative",
    "Dental Hygienist or Therapist",
    "Dental Nurse",
    "Dental Technician",
    "Dentist",
    "Derrickhand",
    "Design Engineer",
    "Dietetic Support Worker",
    "Dietitian",
    "Digital Content Editor",
    "Digital Marketer",
    "Diplomatic Service Operational Officer",
    "Disc Jockey - DJ",
    "Dispensing Optician",
    "Distillery Worker",
    "Diver",
    "Doctor - General Practitioner",
    "Doctor - Hospital",
    "Document Controller",
    "Dog Groomer",
    "Dog Handler",
    "Dramatherapist",
    "Driller",
    "Drilling Engineer",
    "Driving Examiner",
    "Driving Instructor",
    "Dry Cleaning or Laundry Worker",
    "Dryliner",
    "Dynamic Positioning Operator",
    "Early Years Practitioner",
    "Economic Development Officer",
    "Economist",
    "Electrical Engineer",
    "Electrical or Electronic Engineering Technician",
    "Electrician",
    "Electricity Distribution Worker",
    "Electronics Engineer",
    "Embalmer",
    "Emergency Call Handler",
    "Engineering Assembler",
    "Engineering Machine Operator",
    "Environmental Consultant",
    "Environmental Health Officer",
    "Environmental Manager",
    "Ergonomist",
    "Estate Agent",
    "Estate or Land Manager",
    "Estimator",
    "Events Organiser",
    "Exhibition Designer",
    "Export Sales Manager",
    "Fabric Cutter",
    "Fabricator or Plater",
    "Facilities Manager",
    "Factor - Property",
    "Farm Manager",
    "Farm Worker or Stockperson",
    "Farrier",
    "Fashion Designer",
    "Fashion Model",
    "Field Service Technician",
    "Film or Video Editor",
    "Financial Adviser",
    "Fine Artist",
    "Firefighter",
    "Fish Farm Manager",
    "Fish Farm Worker",
    "Fisherman or Woman",
    "Fitness Instructor",
    "Flight Dispatcher",
    "Floor Layer or Carpet Fitter",
    "Floor Manager - Television",
    "Florist",
    "Food Counter Assistant",
    "Food Scientist or Technologist",
    "Forensic Computer Analyst",
    "Forensic Scientist",
    "Forest or Wildlife Manager",
    "Forest or Wildlife Ranger",
    "Forest Worker",
    "Forklift Truck Operator",
    "Formworker",
    "Freight Forwarder",
    "Front End Developer",
    "Fundraising Manager",
    "Funeral Director",
    "Furniture Designer",
    "Furniture Polisher or Finisher",
    "Gamekeeper",
    "Games Designer",
    "Games Programmer",
    "Games Tester",
    "Garden Centre Assistant",
    "Gardener",
    "Garment Technologist",
    "Gas Heating Engineer",
    "Gas Service Engineer",
    "General Construction Operative",
    "Geneticist",
    "Geologist",
    "Geophysicist",
    "Glass Designer or Maker",
    "Glazier",
    "Glazing Technician",
    "Government Intelligence Officer or Analyst",
    "Graphic Designer",
    "Groundsperson",
    "Gym Instructor",
    "Hair Stylist",
    "Health and Safety Inspector",
    "Health and Safety Officer",
    "Health Improvement Officer",
    "Health Records Staff",
    "Health Service Manager",
    "Health Visitor or Public Health Nurse",
    "Heat Treatment Operative",
    "Heating and Ventilation Engineer",
    "Helicopter Pilot",
    "Herbalist",
    "Heritage Centre Manager",
    "Holiday Centre Worker",
    "Homeopath",
    "Hospital Porter",
    "Hotel General Manager",
    "Hotel Porter",
    "Hotel Receptionist",
    "Housekeeping Manager",
    "Housing Officer",
    "Human Resources Officer or Manager",
    "Hypnotherapist",
    "Illustrator",
    "Immigration Officer",
    "Indexer",
    "Insurance Account Manager",
    "Insurance Broker",
    "Insurance Claims Handler",
    "Insurance Loss Adjuster",
    "Insurance Risk Surveyor",
    "Insurance Underwriter",
    "Interior Designer",
    "Interpreter",
    "Investment Analyst",
    "Investment Banker",
    "Investment Operations Administrator",
    "IT Helpdesk Analyst",
    "IT Support Engineer",
    "IT Trainer",
    "Jeweller - Retail",
    "Jewellery Designer",
    "Joiner or Carpenter",
    "Journalist or Reporter",
    "Judge or Sheriff",
    "Kitchen Assistant",
    "Laboratory Technician",
    "Landbased Service Engineer",
    "Landscape Architect",
    "Landscaper",
    "Learning Support Assistant",
    "Lecturer - Further Education",
    "Lecturer - Higher Education",
    "Legal Secretary",
    "Library or Information Assistant",
    "Library or Information Professional",
    "Lifeguard or Pool Attendant",
    "Lighting Technician",
    "Lightning Protection Engineer",
    "Literary Agent",
    "Local Government Administrative Assistant or Officer",
    "Local Government Officer",
    "Local Government Revenues Officer",
    "Locksmith",
    "Loft and Cavity Insulation Technician",
    "Logistics Manager",
    "Lorry or LGV Driver",
    "Machine Printer",
    "Make-up Artist",
    "Management Consultant",
    "Manufacturing Systems Engineer",
    "Marine Biologist",
    "Marine Engineer",
    "Market Research Executive",
    "Market Research Interviewer",
    "Marketing Manager",
    "Mastic Asphalter",
    "Materials Scientist or Engineer",
    "Maternity Support Worker",
    "Mathematician",
    "Meat Process Worker",
    "Mechanical Engineer",
    "Mechanical Engineering Technician",
    "Medical Pathologist",
    "Medical Physicist",
    "Medical Representative",
    "Medical Secretary",
    "Member of Parliament",
    "Merchant Navy Deck Officer",
    "Merchant Navy Engineering Officer",
    "Merchant Navy Rating",
    "Meteorologist",
    "Meter Reader",
    "Microbiologist",
    "Midwife",
    "Mining Engineer",
    "Model Maker",
    "Motor Vehicle Technician",
    "Motorcycle Instructor",
    "Motorcycle Technician",
    "Mudlogger",
    "Museum Assistant or Visitor Centre Assistant",
    "Museum Conservation Officer",
    "Museum or Art Gallery Curator",
    "Music Promotions Manager",
    "Music Therapist",
    "Musical Instrument Technologist",
    "Musician - Classical",
    "Musician - Popular",
    "Nail Technician",
    "Nanny",
    "Nanotechnologist",
    "Nature Conservationist",
    "Naturopath",
    "Naval Architect",
    "Network Architect",
    "Network Engineer",
    "Neurophysiologist",
    "Nuclear Engineer",
    "Nurse - Adult",
    "Nurse - Child",
    "Nurse - District",
    "Nurse - General Practice",
    "Nurse - Learning Disabilities",
    "Nurse - Mental Health",
    "Nursing Support Worker",
    "Occupational Therapist",
    "Occupational Therapy Support Worker",
    "Oceanographer",
    "Office Manager",
    "Offshore Medic",
    "Offshore Service Technician",
    "Operating Department Practitioner",
    "Operational Researcher",
    "Optical Assistant",
    "Optical Technician",
    "Optometrist",
    "Orthodontist",
    "Orthoptist",
    "Osteopath",
    "Outdoor Activities Instructor or Leader",
    "Packer",
    "Painter and Decorator",
    "Paralegal",
    "Paramedic",
    "Parking Attendant or Traffic Warden",
    "Parliamentary Assistant",
    "Patent Attorney",
    "Patent Examiner",
    "Pattern Cutter or Grader",
    "Personal or Executive Assistant",
    "Personal Trainer",
    "Pest Control Technician",
    "Pet Shop Assistant",
    "Petroleum or Reservoir Engineer",
    "Pharmacist",
    "Pharmacologist",
    "Pharmacy Assistant",
    "Pharmacy Technician",
    "Phlebotomist",
    "Photographer",
    "Photographic Stylist",
    "Photographic Technician",
    "Physicist",
    "Physiotherapist",
    "Physiotherapy Support Worker",
    "Piano Tuner",
    "Picture Framer",
    "Picture Researcher",
    "Plant Fitter",
    "Plant Operator",
    "Plasterer",
    "Play Therapist",
    "Playworker or Play Leader",
    "Plumber",
    "Podiatrist",
    "Podiatry Assistant Practitioner",
    "Police Officer",
    "Port Operative",
    "Post Office Customer Service Consultant",
    "Postman or Postwoman",
    "Pre-press Operator",
    "Print Finisher or Bookbinder",
    "Print Manager",
    "Prison Officer",
    "Private Tutor",
    "Procurator Fiscal",
    "Procurement Administrator",
    "Procurement Manager",
    "Producer - Radio",
    "Producer - TV or Film",
    "Product Designer",
    "Production Assistant",
    "Production Controller or Manager",
    "Production Worker",
    "Project Manager",
    "Prop Maker",
    "Prosthetic or Orthotic Technician",
    "Prosthetist or Orthotist",
    "Psychologist",
    "Psychologist - Clinical",
    "Psychologist - Counselling",
    "Psychologist - Educational",
    "Psychologist - Forensic",
    "Psychologist - Health",
    "Psychologist - Occupational",
    "Psychologist - Sport and Exercise",
    "Psychotherapist",
    "Public Relations Officer",
    "Quality Control Technician",
    "Radio Broadcast Assistant",
    "Radiographer - Diagnostic",
    "Radiographer - Therapeutic",
    "Radiography Support Worker",
    "Railway Maintenance Engineering Technician - Distribution and Plant",
    "Railway Maintenance Engineering Technician - Overhead Line",
    "Railway Maintenance Engineering Technician - Signalling",
    "Railway Maintenance Engineering Technician - Telecoms",
    "Railway Maintenance Engineering Technician - Track",
    "Railway Station Assistant",
    "Ramp Agent",
    "Receptionist",
    "Recruitment Consultant",
    "Recycling Officer",
    "Recycling Operative",
    "Reflexologist",
    "Refrigeration Engineer",
    "Refuse Collector",
    "Registrar of Births, Deaths, Marriages and Civil Partnerships",
    "Rehabilitation Engineering Technician",
    "Removals Operative",
    "Renewable Energy Consultant",
    "Renewable Energy Engineer",
    "Reporter to the Children's Panel",
    "Reprographic Assistant",
    "Researcher - Broadcasting",
    "Resort Representative",
    "Respiratory Physiologist",
    "Restaurant Manager",
    "Retail Assistant",
    "Retail Buyer",
    "Retail Manager",
    "Revenue and Customs Officer",
    "Riding Instructor",
    "Risk Manager",
    "Road Worker",
    "Roadie",
    "Roof Sheeter and Cladder",
    "Roofer",
    "Roofer - Felt",
    "Room Attendant",
    "Roustabout",
    "ROV Pilot Technician",
    "Royal Air Force Airman or Airwoman",
    "Royal Air Force Officer",
    "Royal Marine",
    "Royal Marines Officer",
    "Royal Navy Officer",
    "Royal Navy Rating",
    "Runner",
    "Sales Representative",
    "Scaffolder",
    "Scenic Artist",
    "School Janitor",
    "Scientific or Technical Illustrator",
    "Scottish SPCA Animal Rescue Officer",
    "Scottish SPCA Inspector",
    "Sculptor",
    "Security Officer or Guard",
    "Security Systems Installer",
    "SEO Specialist",
    "Set Designer",
    "Sewing Machinist",
    "Sheet Metal Worker",
    "Sheriff Officer or Messenger-at-Arms",
    "Shoe Repairer",
    "Shopfitter",
    "Signaller",
    "Signwriter",
    "Singer - Classical",
    "Singer - Popular",
    "Smart Meter Installer",
    "Social Worker",
    "Software Engineer or Developer",
    "Software Tester",
    "Solicitor",
    "Sound Technician",
    "Special Effects Technician",
    "Speech and Language Therapist",
    "Speech and Language Therapy Support Worker",
    "Sport and Exercise Scientist",
    "Sports Coach or Instructor",
    "Sports Development Officer",
    "Sports or Leisure Centre Assistant",
    "Sports or Leisure Centre Manager",
    "Sports Professional",
    "Sports Therapist",
    "Stablehand or Groom",
    "Stage Manager",
    "Stagehand",
    "Statistician",
    "Steeplejack",
    "Sterile Services Technician",
    "Stockbroker",
    "Stonemason",
    "Store Detective",
    "Storyboard Artist",
    "Street Cleaning Operative",
    "Structural Engineer",
    "Structural Engineering Technician",
    "Stunt Performer",
    "Sub-editor â€” Journalism",
    "Subsea Engineer",
    "Supermarket Assistant",
    "Surgeon",
    "Surveyor",
    "Surveyor - Building",
    "Surveyor - Hydrographic",
    "Surveyor - Land or Geomatics",
    "Surveyor - Minerals or Waste Management",
    "Surveyor - Planning and Development",
    "Surveyor - Quantity",
    "Surveyor - Rural Practice",
    "Surveyor - Valuation",
    "Swimming Teacher",
    "Systems Analyst",
    "Tailor or Dressmaker",
    "Tattooist",
    "Tax Officer",
    "Taxi or Car Driver",
    "Teacher - Additional Support for Learning",
    "Teacher - Primary or Early Years",
    "Teacher - Secondary School",
    "Teacher - Secondary School - Art and Design",
    "Teacher - Secondary School - Biology with Science",
    "Teacher - Secondary School - Business Education",
    "Teacher - Secondary School - Chemistry with Science",
    "Teacher - Secondary School - Computing",
    "Teacher - Secondary School - Design and Technology / Technological Education",
    "Teacher - Secondary School - Drama",
    "Teacher - Secondary School - English",
    "Teacher - Secondary School - Gaelic",
    "Teacher - Secondary School - Geography",
    "Teacher - Secondary School - History",
    "Teacher - Secondary School - Home Economics",
    "Teacher - Secondary School - Mathematics",
    "Teacher - Secondary School - Modern Foreign Languages",
    "Teacher - Secondary School - Modern Studies",
    "Teacher - Secondary School - Music",
    "Teacher - Secondary School - Physical Education",
    "Teacher - Secondary School - Physics with Science",
    "Teacher - Secondary School - Religious Education",
    "Teacher of English as a Foreign Language",
    "Technical Author",
    "Technical Brewer",
    "Technical Distiller",
    "Technical Surveyor",
    "Telecommunications Engineer",
    "Textile Designer",
    "Textile Operative",
    "Textile Technologist",
    "Theatre Support Worker",
    "Thermal Insulation Engineer",
    "Toolmaker",
    "Toolpusher",
    "Tour Guide",
    "Tour Leader or Manager",
    "Town Planner",
    "Town Planning Assistant or Technician",
    "Track Maintenance Operative",
    "Trade Union Official",
    "Trading Standards Officer",
    "Train Conductor",
    "Train Driver",
    "Train Maintenance Technician",
    "Training Officer or Manager",
    "Translator",
    "Travel Agency Manager",
    "Travel Consultant",
    "TV or Film Director",
    "TV or Radio Presenter",
    "Tyre or Exhaust Fitter",
    "Upholsterer",
    "User Experience (UX) Designer",
    "Vehicle Body Repairer",
    "Vehicle Breakdown Engineer",
    "Vehicle MET Technician",
    "Vehicle Parts Advisor",
    "Vehicle Salesperson",
    "Vehicle Spray Painter",
    "Veterinary Nurse",
    "Veterinary Surgeon",
    "Visitor Attraction Manager",
    "Visitor Services Advisor",
    "Visual Merchandiser",
    "Waiter or Waitress",
    "Wall and Floor Tiler",
    "Warden or Housing Support Officer - Sheltered Housing",
    "Wardrobe Assistant - Film, TV or Theatre",
    "Warehouse Operative",
    "Waste Energy Engineer",
    "Watch and Clock Repairer",
    "Water or Waste Water Network Operative",
    "Water or Waste Water Treatment Operative",
    "Waterway Operative",
    "Web Designer",
    "Web Developer",
    "Welder",
    "Wind Turbine Technician",
    "Window Cleaner",
    "Window Fitter",
    "Wood Machinist",
    "Writer or Author",
    "Yoga Teacher",
    "Zookeeper",
    "Zoologist"
  ];
  $(".job_title_list").autocomplete({
    minLength: 1,
    source: function (request, response) {
      var matcher = new RegExp(
        "^" + $.ui.autocomplete.escapeRegex(request.term),
        "i"
      );
      response(
        $.grep(job_title_list, function (item) {
          return matcher.test(item.label || item.value || item);
        })
      );
    },
    select: function (event, ui) {
      hide_all_errors(company_job_title);
    }
  });

  // Energy supplier list (autocomplete)
  var energy_supplier_list = [
    "Avro Energy",
    "Better Energy",
    "Boost Power",
    "British Gas",
    "Bulb Energy",
    "Co-operative Energy",
    "E.ON",
    "EDF Energy",
    "Engie",
    "Energy Plus",
    "Enstroga",
    "Entice Energy",
    "ESB Energy",
    "Extra Energy",
    "Flow Energy",
    "Foxglove Energy",
    "Future Energy",
    "GB Energy Supply",
    "Good Energy",
    "Great North Energy",
    "Green Energy UK",
    "Green Network Energy",
    "Igloo Energy",
    "Lumo Energy",
    "M&S Energy",
    "Nabuh Energy",
    "npower",
    "Octopus Energy",
    "OVO Energy",
    "People's Energy",
    "Powershop UK",
    "Pure Planet",
    "Robin Hood Energy",
    "Scottish Power",
    "Shell Energy",
    "So Energy",
    "SSE",
    "Tonik Energy",
    "Utilita Energy",
    "Utility Point",
    "Utility Warehouse",
    "Yorkshire Energy"
  ];
  $(".energy_supplier_list").autocomplete({
    minLength: 1,
    source: function (request, response) {
      var matcher = new RegExp(
        "^" + $.ui.autocomplete.escapeRegex(request.term),
        "i"
      );
      response(
        $.grep(energy_supplier_list, function (item) {
          return matcher.test(item.label || item.value || item);
        })
      );
    },
    select: function (event, ui) {
      hide_all_errors(energy_supplier);
    }
  });
});
