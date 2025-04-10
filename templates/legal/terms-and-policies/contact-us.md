---
wrapper_template: "legal/_base_legal_markdown.html"
context:
  title: "Contact us | Terms and policies"
  copydoc: "https://docs.google.com/document/d/1LU9eJrUSufbbcsvQQUecmrUcw316EfTYgFpFK9HRwJg/edit"
---

<script type="text/javascript">
  // initialize our variables
  var captchaReady = 0;
  var wFORMSReady = 0;

  // when wForms is loaded call this
  var wformsReadyCallback = function () {
    // using this var to denote if wForms is loaded
    wFORMSReady = 1;
    // call our recaptcha function which is dependent on both
    // wForms and an async call to google
    // note the meat of this function wont fire until both
    // wFORMSReady = 1 and captchaReady = 1
    onloadCallback();
  }
  var gCaptchaReadyCallback = function() {
    // using this var to denote if captcha is loaded
    captchaReady = 1;
    // call our recaptcha function which is dependent on both
    // wForms and an async call to google
    // note the meat of this function wont fire until both
    // wFORMSReady = 1 and captchaReady = 1
    onloadCallback();
  };

  // add event listener to fire when wForms is fully loaded
  document.addEventListener("wFORMSLoaded", wformsReadyCallback);

  var enableSubmitButton = function() {
    var submitButton = document.getElementById('submit_button');
    var explanation = document.getElementById('disabled-explanation');
    if (submitButton != null) {
      submitButton.removeAttribute('disabled');
      if (explanation != null) {
        explanation.style.display = 'none';
      }
    }
  };
  var disableSubmitButton = function() {
    var submitButton = document.getElementById('submit_button');
    var explanation = document.getElementById('disabled-explanation');
    if (submitButton != null) {
      submitButton.disabled = true;
      if (explanation != null) {
        explanation.style.display = 'block';
      }
    }
  };

  // call this on both captcha async complete and wforms fully
  // initialized since we can't be sure which will complete first
  // and we need both done for this to function just check that they are
  // done to fire the functionality
  var onloadCallback = function () {
    // if our captcha is ready (async call completed)
    // and wFORMS is completely loaded then we are ready to add
    // the captcha to the page
    if (captchaReady && wFORMSReady) {
      grecaptcha.render('g-recaptcha-render-div', {
        'sitekey': '6LeISQ8UAAAAAL-Qe-lDcy4OIElnii__H_cEGV0C',
        'theme': 'light',
        'size': 'normal',
        'callback': 'enableSubmitButton',
        'expired-callback': 'disableSubmitButton'
      });
      var oldRecaptchaCheck = parseInt('1');
      if (oldRecaptchaCheck === -1) {
        var standardCaptcha = document.getElementById("tfa_captcha_text");
        standardCaptcha = standardCaptcha.parentNode.parentNode.parentNode;
        standardCaptcha.parentNode.removeChild(standardCaptcha);
      }

      if (!wFORMS.instances['paging']) {
        document.getElementById("g-recaptcha-render-div").parentNode.parentNode.parentNode.style.display = "block";
        //document.getElementById("g-recaptcha-render-div").parentNode.parentNode.parentNode.removeAttribute("hidden");
      }
      document.getElementById("g-recaptcha-render-div").getAttributeNode('id').value = 'tfa_captcha_text';

      var captchaError = '';
      if (captchaError == '1') {
        var errMsgText = 'The CAPTCHA was not completed successfully.';
        var errMsgDiv = document.createElement('div');
        errMsgDiv.id = "tfa_captcha_text-E";
        errMsgDiv.className = "err errMsg";
        errMsgDiv.innerText = errMsgText;
        var loc = document.querySelector('.g-captcha-error');
        loc.insertBefore(errMsgDiv, loc.childNodes[0]);

        /* See wFORMS.behaviors.paging.applyTo for origin of this code */
        if (wFORMS.instances['paging']) {
          var b = wFORMS.instances['paging'][0];
          var pp = base2.DOM.Element.querySelector(document, wFORMS.behaviors.paging.CAPTCHA_ERROR);
          if (pp) {
            var lastPage = 1;
            for (var i = 1; i < 100; i++) {
              if (b.behavior.isLastPageIndex(i)) {
                lastPage = i;
                break;
              }
            }
            b.jumpTo(lastPage);
          }
        }
      }
    }
  };
</script>
<script src='https://www.google.com/recaptcha/api.js?onload=gCaptchaReadyCallback&render=explicit&hl=en_GB' async
defer></script>
<script type="text/javascript">
  document.addEventListener("DOMContentLoaded", function() {
    var warning = document.getElementById("javascript-warning");
    if (warning != null) {
      warning.parentNode.removeChild(warning);
    }
    var oldRecaptchaCheck = parseInt('1');
    if (oldRecaptchaCheck !== -1) {
      var explanation = document.getElementById('disabled-explanation');
      var submitButton = document.getElementById('submit_button');
      if (submitButton != null) {
        submitButton.disabled = true;
        if (explanation != null) {
          explanation.style.display = 'block';
        }
      }
    }
  });
</script>
<script type="text/javascript">
  document.addEventListener("DOMContentLoaded", function(){
    const FORM_TIME_START = Math.floor((new Date).getTime()/1000);
    let formElement = document.getElementById("tfa_0");
    if (null === formElement) {
      formElement = document.getElementById("0");
    }
    let appendJsTimerElement = function(){
      let formTimeDiff = Math.floor((new Date).getTime()/1000) - FORM_TIME_START;
      let cumulatedTimeElement = document.getElementById("tfa_dbCumulatedTime");
      if (null !== cumulatedTimeElement) {
        let cumulatedTime = parseInt(cumulatedTimeElement.value);
        if (null !== cumulatedTime && cumulatedTime > 0) {
          formTimeDiff += cumulatedTime;
        }
      }
      let jsTimeInput = document.createElement("input");
      jsTimeInput.setAttribute("type", "hidden");
      jsTimeInput.setAttribute("value", formTimeDiff.toString());
      jsTimeInput.setAttribute("name", "tfa_dbElapsedJsTime");
      jsTimeInput.setAttribute("id", "tfa_dbElapsedJsTime");
      jsTimeInput.setAttribute("autocomplete", "off");
      if (null !== formElement) {
        formElement.appendChild(jsTimeInput);
      }
    };
    if (null !== formElement) {
      if(formElement.addEventListener){
        formElement.addEventListener('submit', appendJsTimerElement, false);
      } else if(formElement.attachEvent){
        formElement.attachEvent('onsubmit', appendJsTimerElement);
      }
    }
  });
</script>

<link href="https://www.tfaforms.com/dist/form-builder/5.0.0/wforms-layout.css?v=9cab24f50ea39e2cd0e4eb3def0940a2b3cb2ad2" rel="stylesheet" type="text/css" />

<link href="https://www.tfaforms.com/wForms/3.4/css/blank/wforms.css" rel="stylesheet" type="text/css" />
<link href="https://www.tfaforms.com/dist/form-builder/5.0.0/wforms-jsonly.css?v=9cab24f50ea39e2cd0e4eb3def0940a2b3cb2ad2" rel="alternate stylesheet" title="This stylesheet activated by javascript" type="text/css" />
<script type="text/javascript" src="https://www.tfaforms.com/wForms/3.11/js/wforms.js?v=9cab24f50ea39e2cd0e4eb3def0940a2b3cb2ad2"></script>
<script type="text/javascript">
  wFORMS.behaviors.prefill.skip = false;
</script>
<script type="text/javascript" src="https://www.tfaforms.com/wForms/3.11/js/localization-en_GB.js?v=9cab24f50ea39e2cd0e4eb3def0940a2b3cb2ad2"></script>

<section class="p-strip u-no-padding--top">
  <div class="row">
    <div class="col-8">
      <h1>Trademark enquiries</h1>
      <p>Please contact us using the form below if you'd like to request an Ubuntu trademark license, or have any other trademark enquiry. A member of our trademark's team will be in touch with you shortly.</p>
    </div>
  </div>
  <div class="row">
    <div class="col-8">

      <div class="wFormContainer" >
        <div class="wFormHeader"></div>
        <style type="text/css">
          #tfa_Firstname,
          *[id^="tfa_Firstname["] {
            width: 60 !important;
          }
          #tfa_Firstname-D,
          *[id^="tfa_Firstname["][class~="field-container-D"] {
            width: auto !important;
          }

          #tfa_Lastname,
          *[id^="tfa_Lastname["] {
            width: 60 !important;
          }
          #tfa_Lastname-D,
          *[id^="tfa_Lastname["][class~="field-container-D"] {
            width: auto !important;
          }

          #tfa_Email,
          *[id^="tfa_Email["] {
            width: 60 !important;
          }
          #tfa_Email-D,
          *[id^="tfa_Email["][class~="field-container-D"] {
            width: auto !important;
          }

          #tfa_Phonenumber,
          *[id^="tfa_Phonenumber["] {
            width: 60 !important;
          }
          #tfa_Phonenumber-D,
          *[id^="tfa_Phonenumber["][class~="field-container-D"] {
            width: auto !important;
          }

          #tfa_Areyoumakingther,
          *[id^="tfa_Areyoumakingther["] {
            width: 40 !important;
          }
          #tfa_Areyoumakingther-D,
          *[id^="tfa_Areyoumakingther["][class~="field-container-D"] {
            width: auto !important;
          }

          #tfa_Companyname1,
          *[id^="tfa_Companyname1["] {
            width: 40 !important;
          }
          #tfa_Companyname1-D,
          *[id^="tfa_Companyname1["][class~="field-container-D"] {
            width: auto !important;
          }

          #tfa_Website1,
          *[id^="tfa_Website1["] {
            width: 40 !important;
          }
          #tfa_Website1-D,
          *[id^="tfa_Website1["][class~="field-container-D"] {
            width: auto !important;
          }

          #tfa_Street,
          *[id^="tfa_Street["] {
            width: 40 !important;
          }
          #tfa_Street-D,
          *[id^="tfa_Street["][class~="field-container-D"] {
            width: auto !important;
          }

          #tfa_StateProvince,
          *[id^="tfa_StateProvince["] {
            width: 40 !important;
          }
          #tfa_StateProvince-D,
          *[id^="tfa_StateProvince["][class~="field-container-D"] {
            width: auto !important;
          }

          #tfa_City,
          *[id^="tfa_City["] {
            width: 40 !important;
          }
          #tfa_City-D,
          *[id^="tfa_City["][class~="field-container-D"] {
            width: auto !important;
          }

          #tfa_ZipPostalcode,
          *[id^="tfa_ZipPostalcode["] {
            width: 40 !important;
          }
          #tfa_ZipPostalcode-D,
          *[id^="tfa_ZipPostalcode["][class~="field-container-D"] {
            width: auto !important;
          }

          #tfa_Areyouamemberofa,
          *[id^="tfa_Areyouamemberofa["] {
            width: 40 !important;
          }
          #tfa_Areyouamemberofa-D,
          *[id^="tfa_Areyouamemberofa["][class~="field-container-D"] {
            width: auto !important;
          }

          #tfa_Pleasestatewhich,
          *[id^="tfa_Pleasestatewhich["] {
            width: 40 !important;
          }
          #tfa_Pleasestatewhich-D,
          *[id^="tfa_Pleasestatewhich["][class~="field-container-D"] {
            width: auto !important;
          }

          #tfa_Inwhatcapacitydo,
          *[id^="tfa_Inwhatcapacitydo["] {
            width: 40 !important;
          }
          #tfa_Inwhatcapacitydo-D,
          *[id^="tfa_Inwhatcapacitydo["][class~="field-container-D"] {
            width: auto !important;
          }

          #tfa_Pleaseaddanyothe,
          *[id^="tfa_Pleaseaddanyothe["] {
            width: 90 !important;
          }
          #tfa_Pleaseaddanyothe-D,
          *[id^="tfa_Pleaseaddanyothe["][class~="field-container-D"] {
            width: auto !important;
          }

          #tfa_Pleaseaddanyothe,
          *[id^="tfa_Pleaseaddanyothe["] {
            height: 6
          }
          #tfa_Pleaseaddanyothe-D,
          *[id^="tfa_Pleaseaddanyothe["][class~="field-container-D"] {
            height: auto !important;
          }
          #tfa_Pleaseaddanyothe-L,
          label[id^="tfa_Pleaseaddanyothe["],
          *[id^="tfa_Pleaseaddanyothe["][id$="-L"] {
            height: auto !important;
          }
        </style><div class=""><div class="wForm" id="36087-WRPR" dir="ltr">
          <div class="codesection" id="code-36087"><style type="text/css">
            .supportInfo {
              display: none;
            }
          </style></div>
          <form method="post" action="https://www.tfaforms.com/responses/processor" class=" labelsLeftAligned" id="36087" role="form" enctype="multipart/form-data">
            <div class="htmlSection" id="tfa_9631608629065"><div class="htmlContent" id="tfa_9631608629065-HTML">
              <p class="western" style="margin-bottom: 0cm">* signifies a required field</p>
            </div></div>
            <fieldset id="tfa_Yourcontactdetai" class="section">
              <legend id="tfa_Yourcontactdetai-L">Your contact details</legend>
              <div class="oneField field-container-D    " id="tfa_Firstname-D">
                <label id="tfa_Firstname-L" class="label preField  is-required" for="tfa_Firstname" required>First name</label><div class="inputWrapper"><input type="text" id="tfa_Firstname" name="tfa_Firstname" value="" aria-required="true" title="First name" class="required"></div>
              </div>
              <div class="oneField field-container-D    " id="tfa_Lastname-D">
                <label id="tfa_Lastname-L" class="label preField  is-required" for="tfa_Lastname">Last name</label><div class="inputWrapper"><input type="text" id="tfa_Lastname" name="tfa_Lastname" value="" aria-required="true" title="Last name" class="required"></div>
              </div>
              <div class="oneField field-container-D    " id="tfa_Email-D">
                <label id="tfa_Email-L" class="label preField  is-required" for="tfa_Email">Email</label><div class="inputWrapper"><input type="text" id="tfa_Email" name="tfa_Email" value="" aria-required="true" title="Email" class="validate-email required"></div>
              </div>
              <div class="oneField field-container-D    " id="tfa_Phonenumber-D">
                <label id="tfa_Phonenumber-L" class="label preField  is-required" for="tfa_Phonenumber">Phone number</label><div class="inputWrapper"><input type="text" id="tfa_Phonenumber" name="tfa_Phonenumber" value="" aria-required="true" title="Phone number" class="required"></div>
              </div>
            </fieldset>
            <div class="oneField field-container-D    " id="tfa_Areyoumakingther-D">
              <label id="tfa_Areyoumakingther-L" class="label preField  is-required" for="tfa_Areyoumakingther">Are you making the request on behalf of a company?</label><div class="inputWrapper"><select id="tfa_Areyoumakingther" name="tfa_Areyoumakingther" title="Are you making the request on behalf of a company?" aria-required="true" class="required"><option value="">Please select...</option>
                <option value="tfa_Yes" id="tfa_Yes" data-conditionals="#tfa_CompanyInformati,#tfa_Companyname1,#tfa_Website1,#tfa_Companyaddressre,#tfa_Street,#tfa_StateProvince,#tfa_City,#tfa_ZipPostalcode,#tfa_Country" class="">Yes</option>
                <option value="tfa_No" id="tfa_No" class="">No</option></select></div>
              </div>
              <fieldset id="tfa_CompanyInformati" class="section" data-condition="`#tfa_Yes`">
                <legend id="tfa_CompanyInformati-L">Company Information</legend>
                <div class="oneField field-container-D    " id="tfa_Companyname1-D">
                  <label id="tfa_Companyname1-L" class="label preField  is-required" for="tfa_Companyname1">Company name</label><div class="inputWrapper"><input type="text" id="tfa_Companyname1" name="tfa_Companyname1" value="" aria-required="true" data-condition="`#tfa_Yes`" title="Company name" class="required"></div>
                </div>
                <div class="oneField field-container-D    " id="tfa_Website1-D">
                  <label id="tfa_Website1-L" class="label preField  is-required" for="tfa_Website1">Website</label><div class="inputWrapper"><input type="text" id="tfa_Website1" name="tfa_Website1" value="" aria-required="true" data-condition="`#tfa_Yes`" title="Website" class="required"></div>
                </div>
              </fieldset>
              <fieldset id="tfa_Companyaddressre" class="section" data-condition="`#tfa_Yes`">
                <legend id="tfa_Companyaddressre-L">Company address</legend>
                <div class="oneField field-container-D    " id="tfa_Street-D">
                  <label id="tfa_Street-L" class="label preField  is-required" for="tfa_Street">Street</label><div class="inputWrapper"><input type="text" id="tfa_Street" name="tfa_Street" value="" aria-required="true" data-condition="`#tfa_Yes`" title="Street" class="required"></div>
                </div>
                <div class="oneField field-container-D    " id="tfa_StateProvince-D">
                  <label id="tfa_StateProvince-L" class="label preField  is-required" for="tfa_StateProvince">State/Province</label><div class="inputWrapper"><input type="text" id="tfa_StateProvince" name="tfa_StateProvince" value="" aria-required="true" data-condition="`#tfa_Yes`" title="State/Province" class="required"></div>
                </div>
                <div class="oneField field-container-D    " id="tfa_City-D">
                  <label id="tfa_City-L" class="label preField  is-required" for="tfa_City">City</label><div class="inputWrapper"><input type="text" id="tfa_City" name="tfa_City" value="" aria-required="true" data-condition="`#tfa_Yes`" title="City" class="required"></div>
                </div>
                <div class="oneField field-container-D    " id="tfa_ZipPostalcode-D">
                  <label id="tfa_ZipPostalcode-L" class="label preField  is-required" for="tfa_ZipPostalcode">Zip/Postal code</label><div class="inputWrapper"><input type="text" id="tfa_ZipPostalcode" name="tfa_ZipPostalcode" value="" aria-required="true" data-condition="`#tfa_Yes`" title="Zip/Postal code" class="required"></div>
                </div>
                <div class="oneField field-container-D    " id="tfa_Country-D">
                  <label id="tfa_Country-L" class="label preField " for="tfa_Country">Country</label><div class="inputWrapper"><select id="tfa_Country" name="tfa_Country" data-condition="`#tfa_Yes`" title="Country" class=""><option value="">Please select...</option>
                    <option value="tfa_Afghanistan" id="tfa_Afghanistan" class="">Afghanistan</option>
                    <option value="tfa_Albania" id="tfa_Albania" class="">Albania</option>
                    <option value="tfa_Algeria" id="tfa_Algeria" class="">Algeria</option>
                    <option value="tfa_AmericanSamoa" id="tfa_AmericanSamoa" class="">American Samoa</option>
                    <option value="tfa_Andorra" id="tfa_Andorra" class="">Andorra</option>
                    <option value="tfa_Angola" id="tfa_Angola" class="">Angola</option>
                    <option value="tfa_Anguilla" id="tfa_Anguilla" class="">Anguilla</option>
                    <option value="tfa_Antarctica" id="tfa_Antarctica" class="">Antarctica</option>
                    <option value="tfa_AntiguaandBarbud" id="tfa_AntiguaandBarbud" class="">Antigua and Barbuda</option>
                    <option value="tfa_Argentina" id="tfa_Argentina" class="">Argentina</option>
                    <option value="tfa_Armenia" id="tfa_Armenia" class="">Armenia</option>
                    <option value="tfa_Aruba" id="tfa_Aruba" class="">Aruba</option>
                    <option value="tfa_Australia" id="tfa_Australia" class="">Australia</option>
                    <option value="tfa_Austria" id="tfa_Austria" class="">Austria</option>
                    <option value="tfa_Azerbaijan" id="tfa_Azerbaijan" class="">Azerbaijan</option>
                    <option value="tfa_Bahamas" id="tfa_Bahamas" class="">Bahamas</option>
                    <option value="tfa_Bahrain" id="tfa_Bahrain" class="">Bahrain</option>
                    <option value="tfa_Bangladesh" id="tfa_Bangladesh" class="">Bangladesh</option>
                    <option value="tfa_Barbados" id="tfa_Barbados" class="">Barbados</option>
                    <option value="tfa_Belarus" id="tfa_Belarus" class="">Belarus</option>
                    <option value="tfa_Belgium" id="tfa_Belgium" class="">Belgium</option>
                    <option value="tfa_Belize" id="tfa_Belize" class="">Belize</option>
                    <option value="tfa_Benin" id="tfa_Benin" class="">Benin</option>
                    <option value="tfa_Bermuda" id="tfa_Bermuda" class="">Bermuda</option>
                    <option value="tfa_Bhutan" id="tfa_Bhutan" class="">Bhutan</option>
                    <option value="tfa_Bolivia" id="tfa_Bolivia" class="">Bolivia</option>
                    <option value="tfa_BosniaandHerzego" id="tfa_BosniaandHerzego" class="">Bosnia and Herzegovina</option>
                    <option value="tfa_Botswana" id="tfa_Botswana" class="">Botswana</option>
                    <option value="tfa_BouvetIsland" id="tfa_BouvetIsland" class="">Bouvet Island</option>
                    <option value="tfa_Brazil" id="tfa_Brazil" class="">Brazil</option>
                    <option value="tfa_BritishIndianOce" id="tfa_BritishIndianOce" class="">British Indian Ocean Territory</option>
                    <option value="tfa_Brunei" id="tfa_Brunei" class="">Brunei</option>
                    <option value="tfa_Bulgaria" id="tfa_Bulgaria" class="">Bulgaria</option>
                    <option value="tfa_BurkinaFaso" id="tfa_BurkinaFaso" class="">Burkina Faso</option>
                    <option value="tfa_Burundi" id="tfa_Burundi" class="">Burundi</option>
                    <option value="tfa_Cambodia" id="tfa_Cambodia" class="">Cambodia</option>
                    <option value="tfa_Cameroon" id="tfa_Cameroon" class="">Cameroon</option>
                    <option value="tfa_Canada" id="tfa_Canada" class="">Canada</option>
                    <option value="tfa_CapeVerde" id="tfa_CapeVerde" class="">Cape Verde</option>
                    <option value="tfa_CaymanIslands" id="tfa_CaymanIslands" class="">Cayman Islands</option>
                    <option value="tfa_CentralAfricanRe" id="tfa_CentralAfricanRe" class="">Central African Republic</option>
                    <option value="tfa_Chad" id="tfa_Chad" class="">Chad</option>
                    <option value="tfa_Chile" id="tfa_Chile" class="">Chile</option>
                    <option value="tfa_China" id="tfa_China" class="">China</option>
                    <option value="tfa_ChristmasIsland" id="tfa_ChristmasIsland" class="">Christmas Island</option>
                    <option value="tfa_CocosKeelingIsla" id="tfa_CocosKeelingIsla" class="">Cocos ( Keeling ) Islands</option>
                    <option value="tfa_Colombia" id="tfa_Colombia" class="">Colombia</option>
                    <option value="tfa_Comoros" id="tfa_Comoros" class="">Comoros</option>
                    <option value="tfa_Congo" id="tfa_Congo" class="">Congo</option>
                    <option value="tfa_CookIslands" id="tfa_CookIslands" class="">Cook Islands</option>
                    <option value="tfa_CostaRica" id="tfa_CostaRica" class="">Costa Rica</option>
                    <option value="tfa_CtedIvoire" id="tfa_CtedIvoire" class="">Côte d ' Ivoire</option>
                    <option value="tfa_CroatiaHrvatska" id="tfa_CroatiaHrvatska" class="">Croatia ( Hrvatska )</option>
                    <option value="tfa_Cuba" id="tfa_Cuba" class="">Cuba</option>
                    <option value="tfa_Cyprus" id="tfa_Cyprus" class="">Cyprus</option>
                    <option value="tfa_CzechRepublic" id="tfa_CzechRepublic" class="">Czech Republic</option>
                    <option value="tfa_CongoDRC" id="tfa_CongoDRC" class="">Congo ( DRC )</option>
                    <option value="tfa_Denmark" id="tfa_Denmark" class="">Denmark</option>
                    <option value="tfa_Djibouti" id="tfa_Djibouti" class="">Djibouti</option>
                    <option value="tfa_Dominica" id="tfa_Dominica" class="">Dominica</option>
                    <option value="tfa_DominicanRepubli" id="tfa_DominicanRepubli" class="">Dominican Republic</option>
                    <option value="tfa_EastTimor" id="tfa_EastTimor" class="">East Timor</option>
                    <option value="tfa_Ecuador" id="tfa_Ecuador" class="">Ecuador</option>
                    <option value="tfa_Egypt" id="tfa_Egypt" class="">Egypt</option>
                    <option value="tfa_ElSalvador" id="tfa_ElSalvador" class="">El Salvador</option>
                    <option value="tfa_EquatorialGuinea" id="tfa_EquatorialGuinea" class="">Equatorial Guinea</option>
                    <option value="tfa_Eritrea" id="tfa_Eritrea" class="">Eritrea</option>
                    <option value="tfa_Estonia" id="tfa_Estonia" class="">Estonia</option>
                    <option value="tfa_Ethiopia" id="tfa_Ethiopia" class="">Ethiopia</option>
                    <option value="tfa_FalklandIslandsI" id="tfa_FalklandIslandsI" class="">Falkland Islands ( Islas Malvinas )</option>
                    <option value="tfa_FaroeIslands" id="tfa_FaroeIslands" class="">Faroe Islands</option>
                    <option value="tfa_FijiIslands" id="tfa_FijiIslands" class="">Fiji Islands</option>
                    <option value="tfa_Finland" id="tfa_Finland" class="">Finland</option>
                    <option value="tfa_France" id="tfa_France" class="">France</option>
                    <option value="tfa_FrenchGuiana" id="tfa_FrenchGuiana" class="">French Guiana</option>
                    <option value="tfa_FrenchPolynesia" id="tfa_FrenchPolynesia" class="">French Polynesia</option>
                    <option value="tfa_FrenchSouthernan" id="tfa_FrenchSouthernan" class="">French Southern and Antarctic Lands</option>
                    <option value="tfa_Gabon" id="tfa_Gabon" class="">Gabon</option>
                    <option value="tfa_Gambia" id="tfa_Gambia" class="">Gambia</option>
                    <option value="tfa_Georgia" id="tfa_Georgia" class="">Georgia</option>
                    <option value="tfa_Germany" id="tfa_Germany" class="">Germany</option>
                    <option value="tfa_Ghana" id="tfa_Ghana" class="">Ghana</option>
                    <option value="tfa_Gibraltar" id="tfa_Gibraltar" class="">Gibraltar</option>
                    <option value="tfa_Greece" id="tfa_Greece" class="">Greece</option>
                    <option value="tfa_Greenland" id="tfa_Greenland" class="">Greenland</option>
                    <option value="tfa_Grenada" id="tfa_Grenada" class="">Grenada</option>
                    <option value="tfa_Guadeloupe" id="tfa_Guadeloupe" class="">Guadeloupe</option>
                    <option value="tfa_Guam" id="tfa_Guam" class="">Guam</option>
                    <option value="tfa_Guatemala" id="tfa_Guatemala" class="">Guatemala</option>
                    <option value="tfa_Guinea" id="tfa_Guinea" class="">Guinea</option>
                    <option value="tfa_GuineaBissau" id="tfa_GuineaBissau" class="">Guinea-Bissau</option>
                    <option value="tfa_Guyana" id="tfa_Guyana" class="">Guyana</option>
                    <option value="tfa_Haiti" id="tfa_Haiti" class="">Haiti</option>
                    <option value="tfa_HeardIslandandMc" id="tfa_HeardIslandandMc" class="">Heard Island and McDonald Islands</option>
                    <option value="tfa_Honduras" id="tfa_Honduras" class="">Honduras</option>
                    <option value="tfa_HongKongSAR" id="tfa_HongKongSAR" class="">Hong Kong SAR</option>
                    <option value="tfa_Hungary" id="tfa_Hungary" class="">Hungary</option>
                    <option value="tfa_Iceland" id="tfa_Iceland" class="">Iceland</option>
                    <option value="tfa_India" id="tfa_India" class="">India</option>
                    <option value="tfa_Indonesia" id="tfa_Indonesia" class="">Indonesia</option>
                    <option value="tfa_Iran" id="tfa_Iran" class="">Iran</option>
                    <option value="tfa_Iraq" id="tfa_Iraq" class="">Iraq</option>
                    <option value="tfa_Ireland" id="tfa_Ireland" class="">Ireland</option>
                    <option value="tfa_Israel" id="tfa_Israel" class="">Israel</option>
                    <option value="tfa_Italy" id="tfa_Italy" class="">Italy</option>
                    <option value="tfa_Jamaica" id="tfa_Jamaica" class="">Jamaica</option>
                    <option value="tfa_Japan" id="tfa_Japan" class="">Japan</option>
                    <option value="tfa_Jordan" id="tfa_Jordan" class="">Jordan</option>
                    <option value="tfa_Kazakhstan" id="tfa_Kazakhstan" class="">Kazakhstan</option>
                    <option value="tfa_Kenya" id="tfa_Kenya" class="">Kenya</option>
                    <option value="tfa_Kiribati" id="tfa_Kiribati" class="">Kiribati</option>
                    <option value="tfa_Korea" id="tfa_Korea" class="">Korea</option>
                    <option value="tfa_Kuwait" id="tfa_Kuwait" class="">Kuwait</option>
                    <option value="tfa_Kyrgyzstan" id="tfa_Kyrgyzstan" class="">Kyrgyzstan</option>
                    <option value="tfa_Laos" id="tfa_Laos" class="">Laos</option>
                    <option value="tfa_Latvia" id="tfa_Latvia" class="">Latvia</option>
                    <option value="tfa_Lebanon" id="tfa_Lebanon" class="">Lebanon</option>
                    <option value="tfa_Lesotho" id="tfa_Lesotho" class="">Lesotho</option>
                    <option value="tfa_Liberia" id="tfa_Liberia" class="">Liberia</option>
                    <option value="tfa_Libya" id="tfa_Libya" class="">Libya</option>
                    <option value="tfa_Liechtenstein" id="tfa_Liechtenstein" class="">Liechtenstein</option>
                    <option value="tfa_Lithuania" id="tfa_Lithuania" class="">Lithuania</option>
                    <option value="tfa_Luxembourg" id="tfa_Luxembourg" class="">Luxembourg</option>
                    <option value="tfa_MacaoSAR" id="tfa_MacaoSAR" class="">Macao SAR</option>
                    <option value="tfa_MacedoniaFormerY" id="tfa_MacedoniaFormerY" class="">Macedonia, Former Yugoslav Republic of</option>
                    <option value="tfa_Madagascar" id="tfa_Madagascar" class="">Madagascar</option>
                    <option value="tfa_Malawi" id="tfa_Malawi" class="">Malawi</option>
                    <option value="tfa_Malaysia" id="tfa_Malaysia" class="">Malaysia</option>
                    <option value="tfa_Maldives" id="tfa_Maldives" class="">Maldives</option>
                    <option value="tfa_Mali" id="tfa_Mali" class="">Mali</option>
                    <option value="tfa_Malta" id="tfa_Malta" class="">Malta</option>
                    <option value="tfa_MarshallIslands" id="tfa_MarshallIslands" class="">Marshall Islands</option>
                    <option value="tfa_Martinique" id="tfa_Martinique" class="">Martinique</option>
                    <option value="tfa_Mauritania" id="tfa_Mauritania" class="">Mauritania</option>
                    <option value="tfa_Mauritius" id="tfa_Mauritius" class="">Mauritius</option>
                    <option value="tfa_Mayotte" id="tfa_Mayotte" class="">Mayotte</option>
                    <option value="tfa_Mexico" id="tfa_Mexico" class="">Mexico</option>
                    <option value="tfa_Micronesia" id="tfa_Micronesia" class="">Micronesia</option>
                    <option value="tfa_Moldova" id="tfa_Moldova" class="">Moldova</option>
                    <option value="tfa_Monaco" id="tfa_Monaco" class="">Monaco</option>
                    <option value="tfa_Mongolia" id="tfa_Mongolia" class="">Mongolia</option>
                    <option value="tfa_Montserrat" id="tfa_Montserrat" class="">Montserrat</option>
                    <option value="tfa_Morocco" id="tfa_Morocco" class="">Morocco</option>
                    <option value="tfa_Mozambique" id="tfa_Mozambique" class="">Mozambique</option>
                    <option value="tfa_Myanmar" id="tfa_Myanmar" class="">Myanmar</option>
                    <option value="tfa_Namibia" id="tfa_Namibia" class="">Namibia</option>
                    <option value="tfa_Nauru" id="tfa_Nauru" class="">Nauru</option>
                    <option value="tfa_Nepal" id="tfa_Nepal" class="">Nepal</option>
                    <option value="tfa_Netherlands" id="tfa_Netherlands" class="">Netherlands</option>
                    <option value="tfa_NetherlandsAntil" id="tfa_NetherlandsAntil" class="">Netherlands Antilles</option>
                    <option value="tfa_NewCaledonia" id="tfa_NewCaledonia" class="">New Caledonia</option>
                    <option value="tfa_NewZealand" id="tfa_NewZealand" class="">New Zealand</option>
                    <option value="tfa_Nicaragua" id="tfa_Nicaragua" class="">Nicaragua</option>
                    <option value="tfa_Niger" id="tfa_Niger" class="">Niger</option>
                    <option value="tfa_Nigeria" id="tfa_Nigeria" class="">Nigeria</option>
                    <option value="tfa_Niue" id="tfa_Niue" class="">Niue</option>
                    <option value="tfa_NorfolkIsland" id="tfa_NorfolkIsland" class="">Norfolk Island</option>
                    <option value="tfa_NorthKorea" id="tfa_NorthKorea" class="">North Korea</option>
                    <option value="tfa_NorthernMarianaI" id="tfa_NorthernMarianaI" class="">Northern Mariana Islands</option>
                    <option value="tfa_Norway" id="tfa_Norway" class="">Norway</option>
                    <option value="tfa_Oman" id="tfa_Oman" class="">Oman</option>
                    <option value="tfa_Pakistan" id="tfa_Pakistan" class="">Pakistan</option>
                    <option value="tfa_Palau" id="tfa_Palau" class="">Palau</option>
                    <option value="tfa_Panama" id="tfa_Panama" class="">Panama</option>
                    <option value="tfa_PapuaNewGuinea" id="tfa_PapuaNewGuinea" class="">Papua New Guinea</option>
                    <option value="tfa_Paraguay" id="tfa_Paraguay" class="">Paraguay</option>
                    <option value="tfa_Peru" id="tfa_Peru" class="">Peru</option>
                    <option value="tfa_Philippines" id="tfa_Philippines" class="">Philippines</option>
                    <option value="tfa_PitcairnIslands" id="tfa_PitcairnIslands" class="">Pitcairn Islands</option>
                    <option value="tfa_Poland" id="tfa_Poland" class="">Poland</option>
                    <option value="tfa_Portugal" id="tfa_Portugal" class="">Portugal</option>
                    <option value="tfa_PuertoRico" id="tfa_PuertoRico" class="">Puerto Rico</option>
                    <option value="tfa_Qatar" id="tfa_Qatar" class="">Qatar</option>
                    <option value="tfa_Reunion" id="tfa_Reunion" class="">Reunion</option>
                    <option value="tfa_Romania" id="tfa_Romania" class="">Romania</option>
                    <option value="tfa_Russia" id="tfa_Russia" class="">Russia</option>
                    <option value="tfa_Rwanda" id="tfa_Rwanda" class="">Rwanda</option>
                    <option value="tfa_Samoa" id="tfa_Samoa" class="">Samoa</option>
                    <option value="tfa_SanMarino" id="tfa_SanMarino" class="">San Marino</option>
                    <option value="tfa_SoTomandPrncipe" id="tfa_SoTomandPrncipe" class="">São Tomé and Prìncipe</option>
                    <option value="tfa_SaudiArabia" id="tfa_SaudiArabia" class="">Saudi Arabia</option>
                    <option value="tfa_Senegal" id="tfa_Senegal" class="">Senegal</option>
                    <option value="tfa_SerbiaandMontene" id="tfa_SerbiaandMontene" class="">Serbia and Montenegro</option>
                    <option value="tfa_Seychelles" id="tfa_Seychelles" class="">Seychelles</option>
                    <option value="tfa_SierraLeone" id="tfa_SierraLeone" class="">Sierra Leone</option>
                    <option value="tfa_Singapore" id="tfa_Singapore" class="">Singapore</option>
                    <option value="tfa_Slovakia" id="tfa_Slovakia" class="">Slovakia</option>
                    <option value="tfa_Slovenia" id="tfa_Slovenia" class="">Slovenia</option>
                    <option value="tfa_SolomonIslands" id="tfa_SolomonIslands" class="">Solomon Islands</option>
                    <option value="tfa_Somalia" id="tfa_Somalia" class="">Somalia</option>
                    <option value="tfa_SouthAfrica" id="tfa_SouthAfrica" class="">South Africa</option>
                    <option value="tfa_SouthGeorgiaandt" id="tfa_SouthGeorgiaandt" class="">South Georgia and the South Sandwich Islands</option>
                    <option value="tfa_Spain" id="tfa_Spain" class="">Spain</option>
                    <option value="tfa_SriLanka" id="tfa_SriLanka" class="">Sri Lanka</option>
                    <option value="tfa_StHelena" id="tfa_StHelena" class="">St. Helena</option>
                    <option value="tfa_StKittsandNevis" id="tfa_StKittsandNevis" class="">St. Kitts and Nevis</option>
                    <option value="tfa_StLucia" id="tfa_StLucia" class="">St. Lucia</option>
                    <option value="tfa_StPierreandMique" id="tfa_StPierreandMique" class="">St. Pierre and Miquelon</option>
                    <option value="tfa_StVincentandtheG" id="tfa_StVincentandtheG" class="">St. Vincent and the Grenadines</option>
                    <option value="tfa_Sudan" id="tfa_Sudan" class="">Sudan</option>
                    <option value="tfa_Suriname" id="tfa_Suriname" class="">Suriname</option>
                    <option value="tfa_SvalbardandJanMa" id="tfa_SvalbardandJanMa" class="">Svalbard and Jan Mayen</option>
                    <option value="tfa_Swaziland" id="tfa_Swaziland" class="">Swaziland</option>
                    <option value="tfa_Sweden" id="tfa_Sweden" class="">Sweden</option>
                    <option value="tfa_Switzerland" id="tfa_Switzerland" class="">Switzerland</option>
                    <option value="tfa_Syria" id="tfa_Syria" class="">Syria</option>
                    <option value="tfa_Taiwan" id="tfa_Taiwan" class="">Taiwan</option>
                    <option value="tfa_Tajikistan" id="tfa_Tajikistan" class="">Tajikistan</option>
                    <option value="tfa_Tanzania" id="tfa_Tanzania" class="">Tanzania</option>
                    <option value="tfa_Thailand" id="tfa_Thailand" class="">Thailand</option>
                    <option value="tfa_Togo" id="tfa_Togo" class="">Togo</option>
                    <option value="tfa_Tokelau" id="tfa_Tokelau" class="">Tokelau</option>
                    <option value="tfa_Tonga" id="tfa_Tonga" class="">Tonga</option>
                    <option value="tfa_TrinidadandTobag" id="tfa_TrinidadandTobag" class="">Trinidad and Tobago</option>
                    <option value="tfa_Tunisia" id="tfa_Tunisia" class="">Tunisia</option>
                    <option value="tfa_Turkey" id="tfa_Turkey" class="">Turkey</option>
                    <option value="tfa_Turkmenistan" id="tfa_Turkmenistan" class="">Turkmenistan</option>
                    <option value="tfa_TurksandCaicosIs" id="tfa_TurksandCaicosIs" class="">Turks and Caicos Islands</option>
                    <option value="tfa_Tuvalu" id="tfa_Tuvalu" class="">Tuvalu</option>
                    <option value="tfa_Uganda" id="tfa_Uganda" class="">Uganda</option>
                    <option value="tfa_Ukraine" id="tfa_Ukraine" class="">Ukraine</option>
                    <option value="tfa_UnitedArabEmirat" id="tfa_UnitedArabEmirat" class="">United Arab Emirates</option>
                    <option value="tfa_UnitedKingdom" id="tfa_UnitedKingdom" class="">United Kingdom</option>
                    <option value="tfa_UnitedStates" id="tfa_UnitedStates" class="">United States</option>
                    <option value="tfa_UnitedStatesMino" id="tfa_UnitedStatesMino" class="">United States Minor Outlying Islands</option>
                    <option value="tfa_Uruguay" id="tfa_Uruguay" class="">Uruguay</option>
                    <option value="tfa_Uzbekistan" id="tfa_Uzbekistan" class="">Uzbekistan</option>
                    <option value="tfa_Vanuatu" id="tfa_Vanuatu" class="">Vanuatu</option>
                    <option value="tfa_VaticanCity" id="tfa_VaticanCity" class="">Vatican City</option>
                    <option value="tfa_Venezuela" id="tfa_Venezuela" class="">Venezuela</option>
                    <option value="tfa_VietNam" id="tfa_VietNam" class="">Viet Nam</option>
                    <option value="tfa_VirginIslandsBri" id="tfa_VirginIslandsBri" class="">Virgin Islands ( British )</option>
                    <option value="tfa_VirginIslands" id="tfa_VirginIslands" class="">Virgin Islands</option>
                    <option value="tfa_WallisandFutuna" id="tfa_WallisandFutuna" class="">Wallis and Futuna</option>
                    <option value="tfa_Yemen" id="tfa_Yemen" class="">Yemen</option>
                    <option value="tfa_Zambia" id="tfa_Zambia" class="">Zambia</option>
                    <option value="tfa_Zimbabwe" id="tfa_Zimbabwe" class="">Zimbabwe</option></select></div>
                  </div>
                </fieldset>
                <div class="oneField field-container-D    " id="tfa_Whataredoyouplan-D" role="group" aria-labelledby="tfa_Whataredoyouplan-L" data-tfa-labelledby="-L tfa_Whataredoyouplan-L">
                  <label id="tfa_Whataredoyouplan-L" class="label preField  is-required" aria-label="In what capacity are you requesting to use the trademark?   required">In what capacity are you requesting to use the trademark?</label>

                  <div class="inputWrapper">
                    <span id="tfa_Whataredoyouplan" class="choices  required">
                      <span class="oneChoice">
                        <label class="p-checkbox">
                          <input type="checkbox" value="tfa_Commercial" class="p-checkbox__input" name="tfa_Commercial" aria-labelledby="tfa_Commercial-L" data-tfa-labelledby="tfa_Whataredoyouplan-L tfa_Commercial-L">
                          <span class="p-checkbox__label postField" id="tfa_Commercial-L">
                            Commercial
                          </span>
                        </label>
                      </span>

                      <span class="oneChoice">
                        <label class="p-checkbox">
                          <input type="checkbox" value="tfa_Community" class="p-checkbox__input" name="tfa_Community" data-conditionals="#tfa_Areyouamemberofa" aria-labelledby="tfa_Community-L" data-tfa-labelledby="tfa_Whataredoyouplan-L tfa_Community-L">
                          <span class="p-checkbox__label postField" id="tfa_Community-L">
                            Community
                          </span>
                        </label>
                      </span>
                    </span>
                  </div>
                </div>
                <div class="oneField field-container-D    " id="tfa_Areyouamemberofa-D">
                  <label id="tfa_Areyouamemberofa-L" class="label preField  is-required" for="tfa_Areyouamemberofa">Are you a member of an approved LoCo team?</label><div class="inputWrapper"><select id="tfa_Areyouamemberofa" name="tfa_Areyouamemberofa" data-condition="`#tfa_Community`" title="Are you a member of an approved LoCo team?" aria-required="true" class="required"><option value="">Please select...</option>
                    <option value="tfa_Yes1" id="tfa_Yes1" data-conditionals="#tfa_Pleasestatewhich" class="">Yes</option>
                    <option value="tfa_No1" id="tfa_No1" class="">No</option></select></div>
                  </div>
                  <div class="oneField field-container-D    " id="tfa_Pleasestatewhich-D">
                    <label id="tfa_Pleasestatewhich-L" class="label preField  is-required" for="tfa_Pleasestatewhich">Please state which LoCo team</label><div class="inputWrapper"><input type="text" id="tfa_Pleasestatewhich" name="tfa_Pleasestatewhich" value="" aria-required="true" data-condition="`#tfa_Yes1`" title="Please state which LoCo team" class="required"></div>
                  </div>
                  <div class="oneField field-container-D  labelsLeftAligned  " id="tfa_Inwhatcapacitydo-D">
                    <label id="tfa_Inwhatcapacitydo-L" class="label preField  is-required" for="tfa_Inwhatcapacitydo">In what capacity do you propose to use the Ubuntu trademark? (select all that apply)</label><div class="inputWrapper"><select id="tfa_Inwhatcapacitydo" multiple name="tfa_Inwhatcapacitydo[]" title="In what capacity do you propose to use the Ubuntu trademark? (select all that apply)" aria-required="true" class="required"><option value="">Please select...</option>
                      <option value="tfa_DistributionofUb" id="tfa_DistributionofUb" class="">Distribution of Ubuntu</option>
                      <option value="tfa_Salesofmerchandi" id="tfa_Salesofmerchandi" class="">Sales of merchandise</option>
                      <option value="tfa_Publishing" id="tfa_Publishing" class="">Publishing</option>
                      <option value="tfa_Websiteblog" id="tfa_Websiteblog" class="">Website/blog</option>
                      <option value="tfa_Advertising" id="tfa_Advertising" class="">Advertising</option>
                      <option value="tfa_DomainnameofUbun" id="tfa_DomainnameofUbun" class="">Domain name of Ubuntu</option>
                      <option value="tfa_Derivativedistri" id="tfa_Derivativedistri" class="">Derivative distribution (remix)</option>
                      <option value="tfa_ProductbuiltonUb" id="tfa_ProductbuiltonUb" class="">Product built on Ubuntu</option>
                      <option value="tfa_Other" id="tfa_Other" class="">Other</option></select></div>
                    </div>
                    <div class="oneField field-container-D  labelsAbove  " id="tfa_Pleaseaddanyothe-D">
                      <label id="tfa_Pleaseaddanyothe-L" class="label preField  is-required" for="tfa_Pleaseaddanyothe">Please describe your request in more detail</label><br><div class="inputWrapper"><textarea cols="90" rows="6" aria-required="true" id="tfa_Pleaseaddanyothe" name="tfa_Pleaseaddanyothe" title="Please describe your request in more detail" class="required"></textarea></div>
                    </div>
                    <div class="htmlSection" id="tfa_9631608629066"><div class="htmlContent" id="tfa_9631608629066-HTML"><font color="#a4a4a4">Data collected from this survey will be handled in accordance with the Canonical <a href="/legal">privacy policy</a></font></div></div>
                    <div class="oneField field-container-D    " id="tfa_9631608629067-D">
                      <label id="tfa_9631608629067-L" class="label preField " for="tfa_9631608629067">If you would like to include an attachment with your request please add it here</label><div class="inputWrapper"><input type="file" id="tfa_9631608629067" name="tfa_9631608629067" size="" title="If you would like to include an attachment with your request please add it here" class=""></div>
                    </div>
                    <div class="actions" id="36087-A">
                      <div id="google-captcha" style="display: none">
                        <br><div class="captcha">
                          <div class="oneField">
                            <div class="g-recaptcha" id="g-recaptcha-render-div"></div>
                            <div class="g-captcha-error"></div>
                            <br>
                          </div>
                          <div class="captchaHelp">reCAPTCHA helps prevent automated form spam.<br>
                          </div>
                          <div id="disabled-explanation" class="captchaHelp" style="display: none">The submit button will be disabled until you complete the CAPTCHA.</div>
                        </div>
                      </div>
                      <input type="submit" data-label="Submit" class="primaryAction" id="submit_button" value="Submit">
                    </div>
                    <div style="clear:both"></div>
                    <input type="hidden" value="36087" name="tfa_dbFormId" id="tfa_dbFormId"><input type="hidden" value="" name="tfa_dbResponseId" id="tfa_dbResponseId"><input type="hidden" value="c004ae4348a8919232a477fa58f8a3bf" name="tfa_dbControl" id="tfa_dbControl"><input type="hidden" value="29" name="tfa_dbVersionId" id="tfa_dbVersionId"><input type="hidden" value="" name="tfa_switchedoff" id="tfa_switchedoff">
                  </form>
                </div></div><div class="wFormFooter"><p class="supportInfo"><a target="new" class="contactInfoLink" href="https://www.tfaforms.com/forms/help/36087">Contact Information</a><br></p></div>
                <p class="supportInfo" >
                </p>
              </div>


            </div>
          </div>
        </section>
