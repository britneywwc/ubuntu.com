---
wrapper_template: "legal/_base_legal_markdown.html"
context:
  title: "Confidentiality agreement"
  copydoc: "https://docs.google.com/document/d/123_RbbqhDzsiWrLQkl1c_1aqr2uT6hKeq0LuNDl21Ms/edit#"
---

  <script type="text/javascript"
          src="https://www.tfaforms.com/wForms/3.7/js/wforms.js"></script>
  <script type="text/javascript"
          src="https://www.tfaforms.com/wForms/3.7/js/localization-en_GB.js"></script>
  <link href="https://www.tfaforms.com/css/form.css"
        rel="stylesheet"
        type="text/css" />
  <script>
    wFORMS.behaviors.prefill.skip = false;
  </script>
  <style type="text/css" media="screen">
    .supportInfo {
      display: none;
    }

    .offstate-b {
      display: none;
    }

    div.error,
    div.ok {
      margin: 20px 50px;
      text-align: center;
      padding: 0;
    }

    div.error p,
    div.ok p {
      margin: 10px;
    }

    .wForm textarea {
      width: 100%;
    }

    div.error {
      background: #FCC;
      color: #200;
      border: 1px solid #D77;
    }

    div.ok {
      background: #DFD;
      color: #020;
      border: 1px solid #0A0;
    }

    form label.reqMark {
      color: #333;
    }

  </style>
  <script>
    /* make jslint happy */
    /*global base2, document, wFORMS, $, $$ */

    // Use this in a FormAssembly code block to add a string to a field's class (that's how standard validations work)
    // this allows form developer to add validations not permitted by FormAssembly's UI.

    function custom_validation(id, class_info) {
      base2.DOM.Element.addEventListener(document, 'DOMContentLoaded',
        function() {
          try {
            document.getElementById(id).className += " " + class_info;
          } catch (err) {
            throw new Error("Custom validation could not be applied to field " + id);
          }
        },
        false);
    }

    // validate-length validates string does not exceed given number of chars

    wFORMS.behaviors.validation.rules.isUnderLimit = {
      selector: ".validate-length",
      check: 'isUnderLimit'
    };
    wFORMS.behaviors.validation.messages.isUnderLimit = "This text is too long.";

    wFORMS.behaviors.validation.instance.prototype.isUnderLimit = function(element, value) {
      var pattern = new RegExp(/validate-length (\d*)/i);
      var matches = element.className.match(pattern);

      if (matches && matches[1]) {
        return (value.length <= matches[1]);
      }
      return true;
    };


    // validate-awsaccountnumber validates string as Amazon AWS Account Number

    // we just check for exactly 12 digits, and each digit may be optionally followed by a dash
    // so dashes are essentially ignored

    wFORMS.behaviors.validation.rules.isAWSAccountNumber = {
      selector: ".validate-awsaccountnumber",
      check: 'validateAWSAccountNumber'
    };
    wFORMS.behaviors.validation.messages.isAWSAccountNumber = "Not a valid Amazon AWS Account number (expected format '1234-5678-0987')";

    wFORMS.behaviors.validation.instance.prototype.validateAWSAccountNumber = function(element, value) {
      var regexp = /^(\d-?){12,12}$/;
      return this.isEmpty(value) || regexp.test(value);
    };

  </script>
  <script>
    // hides US State selection field unless country is US
    document.addEventListener("DOMContentLoaded", function() {
      var countryInput = document.querySelector("#tfa_Country");
      var USStateCont = document.querySelector("#tfa_USState-D");
      var USStateSelect = USStateCont.querySelector("select");

      countryInput.addEventListener("change", function(e) {
        if (e.target.value === "tfa_UnitedStates") {
          USStateCont.classList.remove("offstate-b");
        } else if (e.target.value !== "tfa_UnitedStates") {
          USStateCont.classList.add("offstate-b");
          USStateSelect.selectedIndex = 0;
        }
      })
    });

  </script>

  <div class="row">
    <div class="col-8">
      <h1>Confidentiality agreement</h1>
      <p>
        You can enter into a <a href="https://assets.ubuntu.com/v1/c98a991d-Canonical%20NDA_Online%20Form%20%20-%2025th%20July%202024.docx.pdf">confidentiality agreement</a> with Canonical here, you must complete all the fields in this form.
      </p>
      <div id="faform_form_container">
        <div class="wFormContainer" style="width: default;">
          <div>
            <div class="wForm" id="tfa_0-WRPR" dir="ltr">
              <div class="codesection" id="code-tfa_0"></div>
              <form method="post"
                    action="https://www.tfaforms.com/responses/processor"
                    class="hintsTooltip labelsAbove"
                    id="tfa_0">
                <div style="display:none;">
                  <input type="hidden"
                          name="csrfmiddlewaretoken"
                          value="d7952e7df2133d5703f3001be27d982e" />
                </div>
                <fieldset id="tfa_22" class="section">
                  <legend class="u-off-screen">Organisation details</legend>
                  <h3>Organisation details</h3>
                  <label id="tfa_9-L" for="tfa_9" class="label preField">
                    Individual or organisation name <span>*</span>
                  </label>
                  <input type="text"
                          id="tfa_9"
                          name="tfa_9"
                          value=""
                          placeholder=""
                          class="calc-OrgName required" />
                </fieldset>
                <fieldset id="tfa_Yourcontactdetai1" class="section">
                  <legend class="u-off-screen">Your details</legend>
                  <h3>Your details</h3>
                  <ul class="p-list">
                    <li class="p-list__item">
                      <div id="tfa_17-D" class="oneField">
                        <label id="tfa_17-L" for="tfa_17" class="label preField reqMark">
                          Your job title <span>*</span>
                        </label>
                        <input type="text"
                                id="tfa_17"
                                name="tfa_17"
                                value=""
                                placeholder=""
                                class="required" />
                      </div>
                    </li>
                    <li class="p-list__item">
                      <div id="tfa_11-D" class="oneFieldhintsBelow">
                        <label id="tfa_11-L" for="tfa_11" class="label preField reqMark">
                          First name <span>*</span>
                        </label>

                        <div class="inputWrapper">
                          <input type="text"
                                  id="tfa_11"
                                  name="tfa_11"
                                  value=""
                                  placeholder=""
                                  class="required" />
                        </div>
                      </div>
                    </li>
                    <li class="p-list__item">
                      <div id="tfa_13-D" class="oneField">
                        <label id="tfa_13-L" for="tfa_13" class="label preField reqMark">
                          Last name <span>*</span>
                        </label>

                        <div class="inputWrapper">
                          <input type="text"
                                  id="tfa_13"
                                  name="tfa_13"
                                  value=""
                                  placeholder=""
                                  class="required" />
                        </div>
                      </div>
                    </li>
                    <li class="p-list__item">
                      <div id="tfa_15-D" class="oneField">
                        <label id="tfa_15-L" for="tfa_15" class="label preField reqMark">
                          Email <span>*</span>
                        </label>

                        <div class="inputWrapper">
                          <input type="text"
                                  id="tfa_15"
                                  name="tfa_15"
                                  value="{{ user_info.email }}"
                                  placeholder=""
                                  class="validate-email required" />
                        </div>
                      </div>
                    </li>
                    <li class="p-list__item">
                      <div id="tfa_Country-D" class="oneField">
                        <label id="tfa_Country-L" for="tfa_Country" class="label preField reqMark">
                          Country <span>*</span>
                        </label>

                        <div class="inputWrapper">
                          <select id="tfa_Country" name="tfa_Country" class="required">
                            <option value="">Please select...</option>
                            <option value="tfa_Afghanistan" id="tfa_Afghanistan">Afghanistan</option>
                            <option value="tfa_Albania" id="tfa_Albania">Albania</option>
                            <option value="tfa_Algeria" id="tfa_Algeria">Algeria</option>
                            <option value="tfa_AmericanSamoa" id="tfa_AmericanSamoa">American Samoa</option>
                            <option value="tfa_Andorra" id="tfa_Andorra">Andorra</option>
                            <option value="tfa_Angola" id="tfa_Angola">Angola</option>
                            <option value="tfa_Anguilla" id="tfa_Anguilla">Anguilla</option>
                            <option value="tfa_Antarctica" id="tfa_Antarctica">Antarctica</option>
                            <option value="tfa_AntiguaandBarbud" id="tfa_AntiguaandBarbud">Antigua and Barbuda</option>
                            <option value="tfa_Argentina" id="tfa_Argentina">Argentina</option>
                            <option value="tfa_Armenia" id="tfa_Armenia">Armenia</option>
                            <option value="tfa_Aruba" id="tfa_Aruba">Aruba</option>
                            <option value="tfa_Australia" id="tfa_Australia">Australia</option>
                            <option value="tfa_Austria" id="tfa_Austria">Austria</option>
                            <option value="tfa_Azerbaijan" id="tfa_Azerbaijan">Azerbaijan</option>
                            <option value="tfa_Bahamas" id="tfa_Bahamas">Bahamas</option>
                            <option value="tfa_Bahrain" id="tfa_Bahrain">Bahrain</option>
                            <option value="tfa_Bangladesh" id="tfa_Bangladesh">Bangladesh</option>
                            <option value="tfa_Barbados" id="tfa_Barbados">Barbados</option>
                            <option value="tfa_Belarus" id="tfa_Belarus">Belarus</option>
                            <option value="tfa_Belgium" id="tfa_Belgium">Belgium</option>
                            <option value="tfa_Belize" id="tfa_Belize">Belize</option>
                            <option value="tfa_Benin" id="tfa_Benin">Benin</option>
                            <option value="tfa_Bermuda" id="tfa_Bermuda">Bermuda</option>
                            <option value="tfa_Bhutan" id="tfa_Bhutan">Bhutan</option>
                            <option value="tfa_Bolivia" id="tfa_Bolivia">Bolivia</option>
                            <option value="tfa_BosniaandHerzego" id="tfa_BosniaandHerzego">Bosnia and Herzegovina</option>
                            <option value="tfa_Botswana" id="tfa_Botswana">Botswana</option>
                            <option value="tfa_BouvetIsland" id="tfa_BouvetIsland">Bouvet Island</option>
                            <option value="tfa_Brazil" id="tfa_Brazil">Brazil</option>
                            <option value="tfa_BritishIndianOce" id="tfa_BritishIndianOce">British Indian Ocean Territory</option>
                            <option value="tfa_Brunei" id="tfa_Brunei">Brunei</option>
                            <option value="tfa_Bulgaria" id="tfa_Bulgaria">Bulgaria</option>
                            <option value="tfa_BurkinaFaso" id="tfa_BurkinaFaso">Burkina Faso</option>
                            <option value="tfa_Burundi" id="tfa_Burundi">Burundi</option>
                            <option value="tfa_Cambodia" id="tfa_Cambodia">Cambodia</option>
                            <option value="tfa_Cameroon" id="tfa_Cameroon">Cameroon</option>
                            <option value="tfa_Canada" id="tfa_Canada">Canada</option>
                            <option value="tfa_CapeVerde" id="tfa_CapeVerde">Cape Verde</option>
                            <option value="tfa_CaymanIslands" id="tfa_CaymanIslands">Cayman Islands</option>
                            <option value="tfa_CentralAfricanRe" id="tfa_CentralAfricanRe">Central African Republic</option>
                            <option value="tfa_Chad" id="tfa_Chad">Chad</option>
                            <option value="tfa_Chile" id="tfa_Chile">Chile</option>
                            <option value="tfa_China" id="tfa_China">China</option>
                            <option value="tfa_ChristmasIsland" id="tfa_ChristmasIsland">Christmas Island</option>
                            <option value="tfa_CocosKeelingIsla" id="tfa_CocosKeelingIsla">Cocos ( Keeling ) Islands</option>
                            <option value="tfa_Colombia" id="tfa_Colombia">Colombia</option>
                            <option value="tfa_Comoros" id="tfa_Comoros">Comoros</option>
                            <option value="tfa_Congo" id="tfa_Congo">Congo</option>
                            <option value="tfa_CookIslands" id="tfa_CookIslands">Cook Islands</option>
                            <option value="tfa_CostaRica" id="tfa_CostaRica">Costa Rica</option>
                            <option value="tfa_CtedIvoire" id="tfa_CtedIvoire">Côte d ' Ivoire</option>
                            <option value="tfa_CroatiaHrvatska" id="tfa_CroatiaHrvatska">Croatia ( Hrvatska )</option>
                            <option value="tfa_Cuba" id="tfa_Cuba">Cuba</option>
                            <option value="tfa_Cyprus" id="tfa_Cyprus">Cyprus</option>
                            <option value="tfa_CzechRepublic" id="tfa_CzechRepublic">Czech Republic</option>
                            <option value="tfa_CongoDRC" id="tfa_CongoDRC">Congo ( DRC )</option>
                            <option value="tfa_Denmark" id="tfa_Denmark">Denmark</option>
                            <option value="tfa_Djibouti" id="tfa_Djibouti">Djibouti</option>
                            <option value="tfa_Dominica" id="tfa_Dominica">Dominica</option>
                            <option value="tfa_DominicanRepubli" id="tfa_DominicanRepubli">Dominican Republic</option>
                            <option value="tfa_EastTimor" id="tfa_EastTimor">East Timor</option>
                            <option value="tfa_Ecuador" id="tfa_Ecuador">Ecuador</option>
                            <option value="tfa_Egypt" id="tfa_Egypt">Egypt</option>
                            <option value="tfa_ElSalvador" id="tfa_ElSalvador">El Salvador</option>
                            <option value="tfa_EquatorialGuinea" id="tfa_EquatorialGuinea">Equatorial Guinea</option>
                            <option value="tfa_Eritrea" id="tfa_Eritrea">Eritrea</option>
                            <option value="tfa_Estonia" id="tfa_Estonia">Estonia</option>
                            <option value="tfa_Ethiopia" id="tfa_Ethiopia">Ethiopia</option>
                            <option value="tfa_FalklandIslandsI" id="tfa_FalklandIslandsI">Falkland Islands ( Islas Malvinas )</option>
                            <option value="tfa_FaroeIslands" id="tfa_FaroeIslands">Faroe Islands</option>
                            <option value="tfa_FijiIslands" id="tfa_FijiIslands">Fiji Islands</option>
                            <option value="tfa_Finland" id="tfa_Finland">Finland</option>
                            <option value="tfa_France" id="tfa_France">France</option>
                            <option value="tfa_FrenchGuiana" id="tfa_FrenchGuiana">French Guiana</option>
                            <option value="tfa_FrenchPolynesia" id="tfa_FrenchPolynesia">French Polynesia</option>
                            <option value="tfa_FrenchSouthernan" id="tfa_FrenchSouthernan">French Southern and Antarctic Lands</option>
                            <option value="tfa_Gabon" id="tfa_Gabon">Gabon</option>
                            <option value="tfa_Gambia" id="tfa_Gambia">Gambia</option>
                            <option value="tfa_Georgia" id="tfa_Georgia">Georgia</option>
                            <option value="tfa_Germany" id="tfa_Germany">Germany</option>
                            <option value="tfa_Ghana" id="tfa_Ghana">Ghana</option>
                            <option value="tfa_Gibraltar" id="tfa_Gibraltar">Gibraltar</option>
                            <option value="tfa_Greece" id="tfa_Greece">Greece</option>
                            <option value="tfa_Greenland" id="tfa_Greenland">Greenland</option>
                            <option value="tfa_Grenada" id="tfa_Grenada">Grenada</option>
                            <option value="tfa_Guadeloupe" id="tfa_Guadeloupe">Guadeloupe</option>
                            <option value="tfa_Guam" id="tfa_Guam">Guam</option>
                            <option value="tfa_Guatemala" id="tfa_Guatemala">Guatemala</option>
                            <option value="tfa_Guinea" id="tfa_Guinea">Guinea</option>
                            <option value="tfa_GuineaBissau" id="tfa_GuineaBissau">Guinea-Bissau</option>
                            <option value="tfa_Guyana" id="tfa_Guyana">Guyana</option>
                            <option value="tfa_Haiti" id="tfa_Haiti">Haiti</option>
                            <option value="tfa_HeardIslandandMc" id="tfa_HeardIslandandMc">Heard Island and McDonald Islands</option>
                            <option value="tfa_Honduras" id="tfa_Honduras">Honduras</option>
                            <option value="tfa_HongKongSAR" id="tfa_HongKongSAR">Hong Kong SAR</option>
                            <option value="tfa_Hungary" id="tfa_Hungary">Hungary</option>
                            <option value="tfa_Iceland" id="tfa_Iceland">Iceland</option>
                            <option value="tfa_India" id="tfa_India">India</option>
                            <option value="tfa_Indonesia" id="tfa_Indonesia">Indonesia</option>
                            <option value="tfa_Iran" id="tfa_Iran">Iran</option>
                            <option value="tfa_Iraq" id="tfa_Iraq">Iraq</option>
                            <option value="tfa_Ireland" id="tfa_Ireland">Ireland</option>
                            <option value="tfa_Israel" id="tfa_Israel">Israel</option>
                            <option value="tfa_Italy" id="tfa_Italy">Italy</option>
                            <option value="tfa_Jamaica" id="tfa_Jamaica">Jamaica</option>
                            <option value="tfa_Japan" id="tfa_Japan">Japan</option>
                            <option value="tfa_Jordan" id="tfa_Jordan">Jordan</option>
                            <option value="tfa_Kazakhstan" id="tfa_Kazakhstan">Kazakhstan</option>
                            <option value="tfa_Kenya" id="tfa_Kenya">Kenya</option>
                            <option value="tfa_Kiribati" id="tfa_Kiribati">Kiribati</option>
                            <option value="tfa_Korea" id="tfa_Korea">Korea</option>
                            <option value="tfa_Kuwait" id="tfa_Kuwait">Kuwait</option>
                            <option value="tfa_Kyrgyzstan" id="tfa_Kyrgyzstan">Kyrgyzstan</option>
                            <option value="tfa_Laos" id="tfa_Laos">Laos</option>
                            <option value="tfa_Latvia" id="tfa_Latvia">Latvia</option>
                            <option value="tfa_Lebanon" id="tfa_Lebanon">Lebanon</option>
                            <option value="tfa_Lesotho" id="tfa_Lesotho">Lesotho</option>
                            <option value="tfa_Liberia" id="tfa_Liberia">Liberia</option>
                            <option value="tfa_Libya" id="tfa_Libya">Libya</option>
                            <option value="tfa_Liechtenstein" id="tfa_Liechtenstein">Liechtenstein</option>
                            <option value="tfa_Lithuania" id="tfa_Lithuania">Lithuania</option>
                            <option value="tfa_Luxembourg" id="tfa_Luxembourg">Luxembourg</option>
                            <option value="tfa_MacaoSAR" id="tfa_MacaoSAR">Macao SAR</option>
                            <option value="tfa_MacedoniaFormerY" id="tfa_MacedoniaFormerY">Macedonia, Former Yugoslav Republic of</option>
                            <option value="tfa_Madagascar" id="tfa_Madagascar">Madagascar</option>
                            <option value="tfa_Malawi" id="tfa_Malawi">Malawi</option>
                            <option value="tfa_Malaysia" id="tfa_Malaysia">Malaysia</option>
                            <option value="tfa_Maldives" id="tfa_Maldives">Maldives</option>
                            <option value="tfa_Mali" id="tfa_Mali">Mali</option>
                            <option value="tfa_Malta" id="tfa_Malta">Malta</option>
                            <option value="tfa_MarshallIslands" id="tfa_MarshallIslands">Marshall Islands</option>
                            <option value="tfa_Martinique" id="tfa_Martinique">Martinique</option>
                            <option value="tfa_Mauritania" id="tfa_Mauritania">Mauritania</option>
                            <option value="tfa_Mauritius" id="tfa_Mauritius">Mauritius</option>
                            <option value="tfa_Mayotte" id="tfa_Mayotte">Mayotte</option>
                            <option value="tfa_Mexico" id="tfa_Mexico">Mexico</option>
                            <option value="tfa_Micronesia" id="tfa_Micronesia">Micronesia</option>
                            <option value="tfa_Moldova" id="tfa_Moldova">Moldova</option>
                            <option value="tfa_Monaco" id="tfa_Monaco">Monaco</option>
                            <option value="tfa_Mongolia" id="tfa_Mongolia">Mongolia</option>
                            <option value="tfa_Montserrat" id="tfa_Montserrat">Montserrat</option>
                            <option value="tfa_Morocco" id="tfa_Morocco">Morocco</option>
                            <option value="tfa_Mozambique" id="tfa_Mozambique">Mozambique</option>
                            <option value="tfa_Myanmar" id="tfa_Myanmar">Myanmar</option>
                            <option value="tfa_Namibia" id="tfa_Namibia">Namibia</option>
                            <option value="tfa_Nauru" id="tfa_Nauru">Nauru</option>
                            <option value="tfa_Nepal" id="tfa_Nepal">Nepal</option>
                            <option value="tfa_Netherlands" id="tfa_Netherlands">Netherlands</option>
                            <option value="tfa_NetherlandsAntil" id="tfa_NetherlandsAntil">Netherlands Antilles</option>
                            <option value="tfa_NewCaledonia" id="tfa_NewCaledonia">New Caledonia</option>
                            <option value="tfa_NewZealand" id="tfa_NewZealand">New Zealand</option>
                            <option value="tfa_Nicaragua" id="tfa_Nicaragua">Nicaragua</option>
                            <option value="tfa_Niger" id="tfa_Niger">Niger</option>
                            <option value="tfa_Nigeria" id="tfa_Nigeria">Nigeria</option>
                            <option value="tfa_Niue" id="tfa_Niue">Niue</option>
                            <option value="tfa_NorfolkIsland" id="tfa_NorfolkIsland">Norfolk Island</option>
                            <option value="tfa_NorthKorea" id="tfa_NorthKorea">North Korea</option>
                            <option value="tfa_NorthernMarianaI" id="tfa_NorthernMarianaI">Northern Mariana Islands</option>
                            <option value="tfa_Norway" id="tfa_Norway">Norway</option>
                            <option value="tfa_Oman" id="tfa_Oman">Oman</option>
                            <option value="tfa_Pakistan" id="tfa_Pakistan">Pakistan</option>
                            <option value="tfa_Palau" id="tfa_Palau">Palau</option>
                            <option value="tfa_Panama" id="tfa_Panama">Panama</option>
                            <option value="tfa_PapuaNewGuinea" id="tfa_PapuaNewGuinea">Papua New Guinea</option>
                            <option value="tfa_Paraguay" id="tfa_Paraguay">Paraguay</option>
                            <option value="tfa_Peru" id="tfa_Peru">Peru</option>
                            <option value="tfa_Philippines" id="tfa_Philippines">Philippines</option>
                            <option value="tfa_PitcairnIslands" id="tfa_PitcairnIslands">Pitcairn Islands</option>
                            <option value="tfa_Poland" id="tfa_Poland">Poland</option>
                            <option value="tfa_Portugal" id="tfa_Portugal">Portugal</option>
                            <option value="tfa_PuertoRico" id="tfa_PuertoRico">Puerto Rico</option>
                            <option value="tfa_Qatar" id="tfa_Qatar">Qatar</option>
                            <option value="tfa_Reunion" id="tfa_Reunion">Reunion</option>
                            <option value="tfa_Romania" id="tfa_Romania">Romania</option>
                            <option value="tfa_Russia" id="tfa_Russia">Russia</option>
                            <option value="tfa_Rwanda" id="tfa_Rwanda">Rwanda</option>
                            <option value="tfa_Samoa" id="tfa_Samoa">Samoa</option>
                            <option value="tfa_SanMarino" id="tfa_SanMarino">San Marino</option>
                            <option value="tfa_SoTomandPrncipe" id="tfa_SoTomandPrncipe">São Tomé and Prìncipe</option>
                            <option value="tfa_SaudiArabia" id="tfa_SaudiArabia">Saudi Arabia</option>
                            <option value="tfa_Senegal" id="tfa_Senegal">Senegal</option>
                            <option value="tfa_SerbiaandMontene" id="tfa_SerbiaandMontene">Serbia and Montenegro</option>
                            <option value="tfa_Seychelles" id="tfa_Seychelles">Seychelles</option>
                            <option value="tfa_SierraLeone" id="tfa_SierraLeone">Sierra Leone</option>
                            <option value="tfa_Singapore" id="tfa_Singapore">Singapore</option>
                            <option value="tfa_Slovakia" id="tfa_Slovakia">Slovakia</option>
                            <option value="tfa_Slovenia" id="tfa_Slovenia">Slovenia</option>
                            <option value="tfa_SolomonIslands" id="tfa_SolomonIslands">Solomon Islands</option>
                            <option value="tfa_Somalia" id="tfa_Somalia">Somalia</option>
                            <option value="tfa_SouthAfrica" id="tfa_SouthAfrica">South Africa</option>
                            <option value="tfa_SouthGeorgiaandt" id="tfa_SouthGeorgiaandt">South Georgia and the South Sandwich Islands</option>
                            <option value="tfa_Spain" id="tfa_Spain">Spain</option>
                            <option value="tfa_SriLanka" id="tfa_SriLanka">Sri Lanka</option>
                            <option value="tfa_StHelena" id="tfa_StHelena">St. Helena</option>
                            <option value="tfa_StKittsandNevis" id="tfa_StKittsandNevis">St. Kitts and Nevis</option>
                            <option value="tfa_StLucia" id="tfa_StLucia">St. Lucia</option>
                            <option value="tfa_StPierreandMique" id="tfa_StPierreandMique">St. Pierre and Miquelon</option>
                            <option value="tfa_StVincentandtheG" id="tfa_StVincentandtheG">St. Vincent and the Grenadines</option>
                            <option value="tfa_Sudan" id="tfa_Sudan">Sudan</option>
                            <option value="tfa_Suriname" id="tfa_Suriname">Suriname</option>
                            <option value="tfa_SvalbardandJanMa" id="tfa_SvalbardandJanMa">Svalbard and Jan Mayen</option>
                            <option value="tfa_Swaziland" id="tfa_Swaziland">Swaziland</option>
                            <option value="tfa_Sweden" id="tfa_Sweden">Sweden</option>
                            <option value="tfa_Switzerland" id="tfa_Switzerland">Switzerland</option>
                            <option value="tfa_Syria" id="tfa_Syria">Syria</option>
                            <option value="tfa_Taiwan" id="tfa_Taiwan">Taiwan</option>
                            <option value="tfa_Tajikistan" id="tfa_Tajikistan">Tajikistan</option>
                            <option value="tfa_Tanzania" id="tfa_Tanzania">Tanzania</option>
                            <option value="tfa_Thailand" id="tfa_Thailand">Thailand</option>
                            <option value="tfa_Togo" id="tfa_Togo">Togo</option>
                            <option value="tfa_Tokelau" id="tfa_Tokelau">Tokelau</option>
                            <option value="tfa_Tonga" id="tfa_Tonga">Tonga</option>
                            <option value="tfa_TrinidadandTobag" id="tfa_TrinidadandTobag">Trinidad and Tobago</option>
                            <option value="tfa_Tunisia" id="tfa_Tunisia">Tunisia</option>
                            <option value="tfa_Turkey" id="tfa_Turkey">Turkey</option>
                            <option value="tfa_Turkmenistan" id="tfa_Turkmenistan">Turkmenistan</option>
                            <option value="tfa_TurksandCaicosIs" id="tfa_TurksandCaicosIs">Turks and Caicos Islands</option>
                            <option value="tfa_Tuvalu" id="tfa_Tuvalu">Tuvalu</option>
                            <option value="tfa_Uganda" id="tfa_Uganda">Uganda</option>
                            <option value="tfa_Ukraine" id="tfa_Ukraine">Ukraine</option>
                            <option value="tfa_UnitedArabEmirat" id="tfa_UnitedArabEmirat">United Arab Emirates</option>
                            <option value="tfa_UnitedKingdom" id="tfa_UnitedKingdom">United Kingdom</option>
                            <option value="tfa_UnitedStates"
                                    id="tfa_UnitedStates"
                                    data-conditionals="#tfa_USState"
                                    class="switch-b">United States</option>
                            <option value="tfa_UnitedStatesMino" id="tfa_UnitedStatesMino">United States Minor Outlying Islands</option>
                            <option value="tfa_Uruguay" id="tfa_Uruguay">Uruguay</option>
                            <option value="tfa_Uzbekistan" id="tfa_Uzbekistan">Uzbekistan</option>
                            <option value="tfa_Vanuatu" id="tfa_Vanuatu">Vanuatu</option>
                            <option value="tfa_VaticanCity" id="tfa_VaticanCity">Vatican City</option>
                            <option value="tfa_Venezuela" id="tfa_Venezuela">Venezuela</option>
                            <option value="tfa_VietNam" id="tfa_VietNam">Viet Nam</option>
                            <option value="tfa_VirginIslandsBri" id="tfa_VirginIslandsBri">Virgin Islands ( British )</option>
                            <option value="tfa_VirginIslands" id="tfa_VirginIslands">Virgin Islands</option>
                            <option value="tfa_WallisandFutuna" id="tfa_WallisandFutuna">Wallis and Futuna</option>
                            <option value="tfa_Yemen" id="tfa_Yemen">Yemen</option>
                            <option value="tfa_Zambia" id="tfa_Zambia">Zambia</option>
                            <option value="tfa_Zimbabwe" id="tfa_Zimbabwe">Zimbabwe</option>
                          </select>
                        </div>
                      </div>
                    </li>
                    <li class="p-list__item">
                      <div id="tfa_USState-D" class="oneField field-container-D offstate-b">
                        <label id="tfa_USState-L" for="tfa_USState" class="label preField reqMark">
                          US State <span>*</span>
                        </label>

                        <div class="inputWrapper">
                          <select aria-required="true"
                                  id="tfa_USState"
                                  name="tfa_USState"
                                  data-condition="`#tfa_UnitedStates`"
                                  title="US State"
                                  class="required">
                            <option value="">Please select...</option>
                            <option value="tfa_Alabama" id="tfa_Alabama">Alabama</option>
                            <option value="tfa_Alaska" id="tfa_Alaska">Alaska</option>
                            <option value="tfa_Arizona" id="tfa_Arizona">Arizona</option>
                            <option value="tfa_Arkansas" id="tfa_Arkansas">Arkansas</option>
                            <option value="tfa_California" id="tfa_California">California</option>
                            <option value="tfa_Colorado" id="tfa_Colorado">Colorado</option>
                            <option value="tfa_Connecticut" id="tfa_Connecticut">Connecticut</option>
                            <option value="tfa_Delaware" id="tfa_Delaware">Delaware</option>
                            <option value="tfa_Florida" id="tfa_Florida">Florida</option>
                            <option value="tfa_Georgia1" id="tfa_Georgia1">Georgia</option>
                            <option value="tfa_Hawaii" id="tfa_Hawaii">Hawaii</option>
                            <option value="tfa_Idaho" id="tfa_Idaho">Idaho</option>
                            <option value="tfa_Illinois" id="tfa_Illinois">Illinois</option>
                            <option value="tfa_Indiana" id="tfa_Indiana">Indiana</option>
                            <option value="tfa_Iowa" id="tfa_Iowa">Iowa</option>
                            <option value="tfa_Kansas" id="tfa_Kansas">Kansas</option>
                            <option value="tfa_Kentucky" id="tfa_Kentucky">Kentucky</option>
                            <option value="tfa_Louisiana" id="tfa_Louisiana">Louisiana</option>
                            <option value="tfa_Maine" id="tfa_Maine">Maine</option>
                            <option value="tfa_Maryland" id="tfa_Maryland">Maryland</option>
                            <option value="tfa_Massachusetts" id="tfa_Massachusetts">Massachusetts</option>
                            <option value="tfa_Michigan" id="tfa_Michigan">Michigan</option>
                            <option value="tfa_Minnesota" id="tfa_Minnesota">Minnesota</option>
                            <option value="tfa_Mississippi" id="tfa_Mississippi">Mississippi</option>
                            <option value="tfa_Missouri" id="tfa_Missouri">Missouri</option>
                            <option value="tfa_Montana" id="tfa_Montana">Montana</option>
                            <option value="tfa_Nebraska" id="tfa_Nebraska">Nebraska</option>
                            <option value="tfa_Nevada" id="tfa_Nevada">Nevada</option>
                            <option value="tfa_NewHampshire" id="tfa_NewHampshire">New Hampshire</option>
                            <option value="tfa_NewJersey" id="tfa_NewJersey">New Jersey</option>
                            <option value="tfa_NewMexico" id="tfa_NewMexico">New Mexico</option>
                            <option value="tfa_NewYork" id="tfa_NewYork">New York</option>
                            <option value="tfa_NorthCarolina" id="tfa_NorthCarolina">North Carolina</option>
                            <option value="tfa_NorthDakota" id="tfa_NorthDakota">North Dakota</option>
                            <option value="tfa_Ohio" id="tfa_Ohio">Ohio</option>
                            <option value="tfa_Oklahoma" id="tfa_Oklahoma">Oklahoma</option>
                            <option value="tfa_Oregon" id="tfa_Oregon">Oregon</option>
                            <option value="tfa_Pennsylvania" id="tfa_Pennsylvania">Pennsylvania</option>
                            <option value="tfa_RhodeIsland" id="tfa_RhodeIsland">Rhode Island</option>
                            <option value="tfa_SouthCarolina" id="tfa_SouthCarolina">South Carolina</option>
                            <option value="tfa_SouthDakota" id="tfa_SouthDakota">South Dakota</option>
                            <option value="tfa_Tennessee" id="tfa_Tennessee">Tennessee</option>
                            <option value="tfa_Texas" id="tfa_Texas">Texas</option>
                            <option value="tfa_Utah" id="tfa_Utah">Utah</option>
                            <option value="tfa_Vermont" id="tfa_Vermont">Vermont</option>
                            <option value="tfa_Virginia" id="tfa_Virginia">Virginia</option>
                            <option value="tfa_Washington" id="tfa_Washington">Washington</option>
                            <option value="tfa_WestVirginia" id="tfa_WestVirginia">West Virginia</option>
                            <option value="tfa_Wisconsin" id="tfa_Wisconsin">Wisconsin</option>
                            <option value="tfa_Wyoming" id="tfa_Wyoming">Wyoming</option>
                          </select>
                        </div>
                      </div>
                    </li>
                    <li class="p-list__item">
                      <div id="tfa_Address-D" class="oneField">
                        <label id="tfa_Address-L" for="tfa_Address" class="label preField reqMark">
                          Address <span>*</span>
                        </label>

                        <div class="inputWrapper">
                          <textarea cols="40"
                                    rows="4"
                                    id="tfa_Address"
                                    name="tfa_Address"
                                    class="required"></textarea>
                        </div>
                      </div>
                    </li>
                    <li class="p-list__item">
                      <div id="tfa_7-D" class="oneField hintsBelow">
                        <label id="tfa_7-L" for="tfa_7" class="label preField reqMark">
                          Canonical contact <span>*</span>
                        </label>

                        <div class="inputWrapper">
                          <input type="text"
                                  id="tfa_7"
                                  name="tfa_7"
                                  value=""
                                  placeholder=""
                                  class="calc-CanContact required" />
                          <span class="field-hint-inactive" id="tfa_7-H">
                            <span id="tfa_7-HH" class="hint">Please add the Canonical account manager or contact</span>
                          </span>
                        </div>
                      </div>
                    </li>
                    <li class="p-list__item">
                      <div class="htmlSection" id="tfa_5">
                        <p>
                          By clicking "I agree" below, I confirm that I have read and understood the terms of the confidentiality agreement, <a href="/legal/data-privacy">privacy policy</a> and <a href="/legal/data-privacy/unilateral-nda">privacy notice</a> and warrant that I have authority to enter into the <a href="https://assets.ubuntu.com/v1/c98a991d-Canonical%20NDA_Online%20Form%20%20-%2025th%20July%202024.docx.pdf">confidentiality agreement</a>.
                        </p>
                      </div>
                    </li>
                    <li class="p-list__item">
                      <div class="actions" id="tfa_0-A">
                        <input type="submit" class="p-button--positive" value="I agree" />
                      </div>
                      <div style="clear:both"></div>
                      <input type="hidden" value="353675" name="tfa_dbFormId" id="tfa_dbFormId" />
                      <input type="hidden" value="" name="tfa_dbResponseId" id="tfa_dbResponseId" />
                      <input type="hidden"
                              value="37a451ff42865d207e20e66dc2f54a88"
                              name="tfa_dbControl"
                              id="tfa_dbControl" />
                      <input type="hidden" value="2" name="tfa_dbVersionId" id="tfa_dbVersionId" />
                      <input type="hidden"
                              value="tfa_USState"
                              name="tfa_switchedoff"
                              id="tfa_switchedoff" />
                    </li>
                  </ul>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
