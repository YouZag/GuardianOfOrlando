class LeadFormG extends HTMLElement {

  connectedCallback() {

    const gclid = getQueryParameters().gclid;

    if(gclid) {
      sessionStorage.setItem("gclid", gclid);
    }

    const gclidValue = sessionStorage.getItem("gclid") || gclid || "";

    this.innerHTML = `
<style>
  .container-fluid,.container{margin-left:auto;margin-right:auto;width:100%;padding-left:2px;padding-right:2px;box-sizing:border-box}.container{max-width:1470px}.row{margin-left:-10px;margin-right:-10px;box-sizing:border-box;font-size:0}.row>*{font-size:1rem}[class^=col-],[class*=" col-"]{display:inline-block;vertical-align:top;width:100%;min-height:1px;padding-left:10px;padding-right:10px;box-sizing:border-box}.col-1{width:8.3333333333%}.col-offset-1{margin-left:8.3333333333%}.col-2{width:16.6666666667%}.col-offset-2{margin-left:16.6666666667%}.col-3{width:25%}.col-offset-3{margin-left:25%}.col-4{width:33.3333333333%}.col-offset-4{margin-left:33.3333333333%}.col-5{width:41.6666666667%}.col-offset-5{margin-left:41.6666666667%}.col-6{width:50%}.col-offset-6{margin-left:50%}.col-7{width:58.3333333333%}.col-offset-7{margin-left:58.3333333333%}.col-8{width:66.6666666667%}.col-offset-8{margin-left:66.6666666667%}.col-9{width:75%}.col-offset-9{margin-left:75%}.col-10{width:83.3333333333%}.col-offset-10{margin-left:83.3333333333%}.col-11{width:91.6666666667%}.col-offset-11{margin-left:91.6666666667%}.col-12{width:100%}.col-offset-12{margin-left:100%}@media(min-width: 600px){.col-sm-offset-0{margin-left:0}.col-sm-1{width:8.3333333333%}.col-sm-offset-1{margin-left:8.3333333333%}.col-sm-2{width:16.6666666667%}.col-sm-offset-2{margin-left:16.6666666667%}.col-sm-3{width:25%}.col-sm-offset-3{margin-left:25%}.col-sm-4{width:33.3333333333%}.col-sm-offset-4{margin-left:33.3333333333%}.col-sm-5{width:41.6666666667%}.col-sm-offset-5{margin-left:41.6666666667%}.col-sm-6{width:50%}.col-sm-offset-6{margin-left:50%}.col-sm-7{width:58.3333333333%}.col-sm-offset-7{margin-left:58.3333333333%}.col-sm-8{width:66.6666666667%}.col-sm-offset-8{margin-left:66.6666666667%}.col-sm-9{width:75%}.col-sm-offset-9{margin-left:75%}.col-sm-10{width:83.3333333333%}.col-sm-offset-10{margin-left:83.3333333333%}.col-sm-11{width:91.6666666667%}.col-sm-offset-11{margin-left:91.6666666667%}.col-sm-12{width:100%}.col-sm-offset-12{margin-left:100%}}@media(min-width: 900px){.col-md-offset-0{margin-left:0}.col-md-1{width:8.3333333333%}.col-md-offset-1{margin-left:8.3333333333%}.col-md-2{width:16.6666666667%}.col-md-offset-2{margin-left:16.6666666667%}.col-md-3{width:25%}.col-md-offset-3{margin-left:25%}.col-md-4{width:33.3333333333%}.col-md-offset-4{margin-left:33.3333333333%}.col-md-5{width:41.6666666667%}.col-md-offset-5{margin-left:41.6666666667%}.col-md-6{width:50%}.col-md-offset-6{margin-left:50%}.col-md-7{width:58.3333333333%}.col-md-offset-7{margin-left:58.3333333333%}.col-md-8{width:66.6666666667%}.col-md-offset-8{margin-left:66.6666666667%}.col-md-9{width:75%}.col-md-offset-9{margin-left:75%}.col-md-10{width:83.3333333333%}.col-md-offset-10{margin-left:83.3333333333%}.col-md-11{width:91.6666666667%}.col-md-offset-11{margin-left:91.6666666667%}.col-md-12{width:100%}.col-md-offset-12{margin-left:100%}}@media(min-width: 1200px){.col-lg-offset-0{margin-left:0}.col-lg-1{width:8.3333333333%}.col-lg-offset-1{margin-left:8.3333333333%}.col-lg-2{width:16.6666666667%}.col-lg-offset-2{margin-left:16.6666666667%}.col-lg-3{width:25%}.col-lg-offset-3{margin-left:25%}.col-lg-4{width:33.3333333333%}.col-lg-offset-4{margin-left:33.3333333333%}.col-lg-5{width:41.6666666667%}.col-lg-offset-5{margin-left:41.6666666667%}.col-lg-6{width:50%}.col-lg-offset-6{margin-left:50%}.col-lg-7{width:58.3333333333%}.col-lg-offset-7{margin-left:58.3333333333%}.col-lg-8{width:66.6666666667%}.col-lg-offset-8{margin-left:66.6666666667%}.col-lg-9{width:75%}.col-lg-offset-9{margin-left:75%}.col-lg-10{width:83.3333333333%}.col-lg-offset-10{margin-left:83.3333333333%}.col-lg-11{width:91.6666666667%}.col-lg-offset-11{margin-left:91.6666666667%}.col-lg-12{width:100%}.col-lg-offset-12{margin-left:100%}}@media(min-width: 1800px){.col-xl-offset-0{margin-left:0}.col-xl-1{width:8.3333333333%}.col-xl-offset-1{margin-left:8.3333333333%}.col-xl-2{width:16.6666666667%}.col-xl-offset-2{margin-left:16.6666666667%}.col-xl-3{width:25%}.col-xl-offset-3{margin-left:25%}.col-xl-4{width:33.3333333333%}.col-xl-offset-4{margin-left:33.3333333333%}.col-xl-5{width:41.6666666667%}.col-xl-offset-5{margin-left:41.6666666667%}.col-xl-6{width:50%}.col-xl-offset-6{margin-left:50%}.col-xl-7{width:58.3333333333%}.col-xl-offset-7{margin-left:58.3333333333%}.col-xl-8{width:66.6666666667%}.col-xl-offset-8{margin-left:66.6666666667%}.col-xl-9{width:75%}.col-xl-offset-9{margin-left:75%}.col-xl-10{width:83.3333333333%}.col-xl-offset-10{margin-left:83.3333333333%}.col-xl-11{width:91.6666666667%}.col-xl-offset-11{margin-left:91.6666666667%}.col-xl-12{width:100%}.col-xl-offset-12{margin-left:100%}}
  .sa-ohnohoney {opacity: 0; position: absolute; top: 0;  left: 0;  height: 0;  width: 0;  z-index: -1;}.sa-invalid-honey-label { color: red;}
  #BacktellForm0231943 input, textarea {
    width: 100%;
    padding: 10px;
    border: 2px solid rgba(72,179,100, .5);
    margin: 5px 0;
    border-radius: 3px;
    background-color: #f4f4f4;
    outline: none !important;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 16px;
  }
  #BacktellForm0231943 input:focus, textarea:focus {
    border: 2px solid rgba(72,179,100, 1);
    outline: none !important;
  }
  button {
    margin: 5px 0;
    border-radius: 10px;
    display: block;
    text-align: center;
    font-weight: bold;
    font-size: 16px;
    width: 100%;
    border: none;
    background-color: #48BE64;
    padding: 14px 28px;
    cursor: pointer;
    color: #fff;
  }
</style>
<div class="container">
  <form id="BacktellForm0231943" action="https://my.serviceautopilot.com/ProcessForm.aspx"
        enctype="multipart/form-data"
        onsubmit="return false;"
        data-ajax="false" method="post">
    <input type="hidden" name="Source" value="web"/>
    <input type="hidden" name="FormID" value="003c131d-554e-4bd2-a100-9c83071370de"/>
    <div class="row">
      <div class="col-6">
        <input placeholder="First Name" name="adacaf4d-22a4-4bc8-a9bb-7a2e4055bf3c_First" type="text" value=""/>
      </div>
      <div class="col-6">
        <input placeholder="Last Name" name="adacaf4d-22a4-4bc8-a9bb-7a2e4055bf3c_Last" type="text" value=""/>
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <input placeholder="Phone Number" name="7366cb29-71a2-4bd8-9677-1ac7c677edda" type="text" placeholder="###-###-####"/>
      </div>
      <div class="col-6">
        <input placeholder="Email Address" name="c7e69a4f-d665-4d5a-bded-f706b1efa094" type="text" maxlength="255" value=""/>
      </div>
    </div>
    <div class="row">
      <div class="col-8">
        <input placeholder="Address" name="5dc5a74c-4335-4b43-8559-13a0e8831c36_Address" type="text" maxlength="255" value=""/>
      </div>
      <div class="col-4">
        <input placeholder="Zip" name="5dc5a74c-4335-4b43-8559-13a0e8831c36_Zip" type="text" maxlength="255" value=""/>
      </div>
    </div>
    <textarea placeholder="Service Details/Notes" name="65acc81e-be5a-4814-8aa7-cb4fbe24819a" maxlength="255"></textarea>
    <input type="hidden" name="dd9bd058-ae6c-4da4-a290-02a5522f58e1" value="${gclidValue}" />
    <input type="hidden" name="5dc5a74c-4335-4b43-8559-13a0e8831c36_City" value="City" />
    <input type="hidden" name="5dc5a74c-4335-4b43-8559-13a0e8831c36_State" value="Florida"/>
    <input class='sa-ohnohoney' autocomplete='somethingAutofillDoesntKnow' id='customers-first-name' type='text' />
    <input class='sa-ohnohoney' autocomplete='somethingAutofillDoesntKnow' id='customers-email' type='text' />
    <button onclick="Validate('g')" type="button">Submit Request</button>
  </form>
</div>
    `;
  }
}
function RemoveClass(elem, name) {
  elem.className = elem.className.replace(name, '');
}

function AddClass(elem, name) {
  if (elem.className.indexOf(name) == -1) {
    elem.className += (' ' + name);
  }
}

function MarkInvalidElement(el) {
  RemoveClass(el, "requiredInput");
  AddClass(el, "requiredRedInput");
  el.onkeydown = function () {
    RemoveClass(el, "requiredRedInput");
    AddClass(el, "requiredInput");
  };
}

function CheckHoneyPot()
{
  var isRobot = false;
  const honeypot = document.querySelectorAll(".sa-ohnohoney");
  for (let i = 0; i < honeypot.length; i++)
  {
    if (honeypot[i].value !== '')
    {
      isRobot = true;
      break;
    }
  }
  if (isRobot == false)
  {
    isRobot = CheckKeywordBlacklist();
  }

  return isRobot;
}

function CheckKeywordBlacklist()
{
  var hasKeywordBlacklist = false;
  var keywords = '';
  if (keywords.length === 0)
  {
    return hasKeywordBlacklist;
  }
  var blacklist = keywords.split(",");
  var inputs = document.querySelectorAll('input[type=text]');

  for (var i = 0; i < inputs.length; i++)
  {
    var value = inputs[i].value.toLowerCase();
    if (blacklist.some(v => value.includes(v)))
    {
      hasKeywordBlacklist = true;
      break;
    }
  }

  return hasKeywordBlacklist;
}

function Validate(serviceRef) {
  var IsValidated = true;
  var Found = false;

  /* email */
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var fc7e69a4fd6654d5abdedf706b1efa094El = document.getElementsByName('c7e69a4f-d665-4d5a-bded-f706b1efa094')[0];
  var fc7e69a4fd6654d5abdedf706b1efa094Val = fc7e69a4fd6654d5abdedf706b1efa094El.value;
  if (fc7e69a4fd6654d5abdedf706b1efa094Val == "" || re.test(fc7e69a4fd6654d5abdedf706b1efa094Val) != true) {
    IsValidated = false;
    MarkInvalidElement(fc7e69a4fd6654d5abdedf706b1efa094El);
  }/* email */
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var fc7e69a4fd6654d5abdedf706b1efa094El = document.getElementsByName('c7e69a4f-d665-4d5a-bded-f706b1efa094')[0];
  var fc7e69a4fd6654d5abdedf706b1efa094Val = fc7e69a4fd6654d5abdedf706b1efa094El.value;
  if (fc7e69a4fd6654d5abdedf706b1efa094Val == "" || re.test(fc7e69a4fd6654d5abdedf706b1efa094Val) != true) {
    IsValidated = false;
    MarkInvalidElement(fc7e69a4fd6654d5abdedf706b1efa094El);
  }/* required validation */
  var fadacaf4d22a44bc8a9bb7a2e4055bf3c_FirstEl = document.getElementsByName('adacaf4d-22a4-4bc8-a9bb-7a2e4055bf3c_First')[0];
  var fadacaf4d22a44bc8a9bb7a2e4055bf3c_FirstVal = fadacaf4d22a44bc8a9bb7a2e4055bf3c_FirstEl.value.trim();
  if (fadacaf4d22a44bc8a9bb7a2e4055bf3c_FirstVal == "") {
    IsValidated = false;
    MarkInvalidElement(fadacaf4d22a44bc8a9bb7a2e4055bf3c_FirstEl);
  }/* required validation */
  var fadacaf4d22a44bc8a9bb7a2e4055bf3c_LastEl = document.getElementsByName('adacaf4d-22a4-4bc8-a9bb-7a2e4055bf3c_Last')[0];
  var fadacaf4d22a44bc8a9bb7a2e4055bf3c_LastVal = fadacaf4d22a44bc8a9bb7a2e4055bf3c_LastEl.value.trim();
  if (fadacaf4d22a44bc8a9bb7a2e4055bf3c_LastVal == "") {
    IsValidated = false;
    MarkInvalidElement(fadacaf4d22a44bc8a9bb7a2e4055bf3c_LastEl);
  }/* required validation */
  var f7366cb2971a24bd896771ac7c677eddaEl = document.getElementsByName('7366cb29-71a2-4bd8-9677-1ac7c677edda')[0];
  var f7366cb2971a24bd896771ac7c677eddaVal = f7366cb2971a24bd896771ac7c677eddaEl.value.trim();
  if (f7366cb2971a24bd896771ac7c677eddaVal == "") {
    IsValidated = false;
    MarkInvalidElement(f7366cb2971a24bd896771ac7c677eddaEl);
  }/* required validation */
  var f5dc5a74c43354b43855913a0e8831c36_AddressEl = document.getElementsByName('5dc5a74c-4335-4b43-8559-13a0e8831c36_Address')[0];
  var f5dc5a74c43354b43855913a0e8831c36_AddressVal = f5dc5a74c43354b43855913a0e8831c36_AddressEl.value.trim();
  if (f5dc5a74c43354b43855913a0e8831c36_AddressVal == "") {
    IsValidated = false;
    MarkInvalidElement(f5dc5a74c43354b43855913a0e8831c36_AddressEl);
  }/* required validation */
  var f5dc5a74c43354b43855913a0e8831c36_CityEl = document.getElementsByName('5dc5a74c-4335-4b43-8559-13a0e8831c36_City')[0];
  var f5dc5a74c43354b43855913a0e8831c36_CityVal = f5dc5a74c43354b43855913a0e8831c36_CityEl.value.trim();
  if (f5dc5a74c43354b43855913a0e8831c36_CityVal == "") {
    IsValidated = false;
    MarkInvalidElement(f5dc5a74c43354b43855913a0e8831c36_CityEl);
  }/* required validation */
  var f5dc5a74c43354b43855913a0e8831c36_StateEl = document.getElementsByName('5dc5a74c-4335-4b43-8559-13a0e8831c36_State')[0];
  var f5dc5a74c43354b43855913a0e8831c36_StateVal = f5dc5a74c43354b43855913a0e8831c36_StateEl.value.trim();
  if (f5dc5a74c43354b43855913a0e8831c36_StateVal == "") {
    IsValidated = false;
    MarkInvalidElement(f5dc5a74c43354b43855913a0e8831c36_StateEl);
  }/* required validation */
  var f5dc5a74c43354b43855913a0e8831c36_ZipEl = document.getElementsByName('5dc5a74c-4335-4b43-8559-13a0e8831c36_Zip')[0];
  var f5dc5a74c43354b43855913a0e8831c36_ZipVal = f5dc5a74c43354b43855913a0e8831c36_ZipEl.value.trim();
  if (f5dc5a74c43354b43855913a0e8831c36_ZipVal == "") {
    IsValidated = false;
    MarkInvalidElement(f5dc5a74c43354b43855913a0e8831c36_ZipEl);
  }/* required validation */
  var f65acc81ebe5a48148aa7cb4fbe24819aEl = document.getElementsByName('65acc81e-be5a-4814-8aa7-cb4fbe24819a')[0];
  var f65acc81ebe5a48148aa7cb4fbe24819aVal = f65acc81ebe5a48148aa7cb4fbe24819aEl.value.trim();
  if (f65acc81ebe5a48148aa7cb4fbe24819aVal == "") {
    IsValidated = false;
    MarkInvalidElement(f65acc81ebe5a48148aa7cb4fbe24819aEl);
  }/* required validation */
  var fadacaf4d22a44bc8a9bb7a2e4055bf3c_FirstEl = document.getElementsByName('adacaf4d-22a4-4bc8-a9bb-7a2e4055bf3c_First')[0];
  var fadacaf4d22a44bc8a9bb7a2e4055bf3c_FirstVal = fadacaf4d22a44bc8a9bb7a2e4055bf3c_FirstEl.value.trim();
  if (fadacaf4d22a44bc8a9bb7a2e4055bf3c_FirstVal == "") {
    IsValidated = false;
    MarkInvalidElement(fadacaf4d22a44bc8a9bb7a2e4055bf3c_FirstEl);
  }/* required validation */
  var fadacaf4d22a44bc8a9bb7a2e4055bf3c_LastEl = document.getElementsByName('adacaf4d-22a4-4bc8-a9bb-7a2e4055bf3c_Last')[0];
  var fadacaf4d22a44bc8a9bb7a2e4055bf3c_LastVal = fadacaf4d22a44bc8a9bb7a2e4055bf3c_LastEl.value.trim();
  if (fadacaf4d22a44bc8a9bb7a2e4055bf3c_LastVal == "") {
    IsValidated = false;
    MarkInvalidElement(fadacaf4d22a44bc8a9bb7a2e4055bf3c_LastEl);
  }/* required validation */
  var f7366cb2971a24bd896771ac7c677eddaEl = document.getElementsByName('7366cb29-71a2-4bd8-9677-1ac7c677edda')[0];
  var f7366cb2971a24bd896771ac7c677eddaVal = f7366cb2971a24bd896771ac7c677eddaEl.value.trim();
  if (f7366cb2971a24bd896771ac7c677eddaVal == "") {
    IsValidated = false;
    MarkInvalidElement(f7366cb2971a24bd896771ac7c677eddaEl);
  }/* required validation */
  var f5dc5a74c43354b43855913a0e8831c36_AddressEl = document.getElementsByName('5dc5a74c-4335-4b43-8559-13a0e8831c36_Address')[0];
  var f5dc5a74c43354b43855913a0e8831c36_AddressVal = f5dc5a74c43354b43855913a0e8831c36_AddressEl.value.trim();
  if (f5dc5a74c43354b43855913a0e8831c36_AddressVal == "") {
    IsValidated = false;
    MarkInvalidElement(f5dc5a74c43354b43855913a0e8831c36_AddressEl);
  }/* required validation */
  var f5dc5a74c43354b43855913a0e8831c36_CityEl = document.getElementsByName('5dc5a74c-4335-4b43-8559-13a0e8831c36_City')[0];
  var f5dc5a74c43354b43855913a0e8831c36_CityVal = f5dc5a74c43354b43855913a0e8831c36_CityEl.value.trim();
  if (f5dc5a74c43354b43855913a0e8831c36_CityVal == "") {
    IsValidated = false;
    MarkInvalidElement(f5dc5a74c43354b43855913a0e8831c36_CityEl);
  }/* required validation */
  var f5dc5a74c43354b43855913a0e8831c36_StateEl = document.getElementsByName('5dc5a74c-4335-4b43-8559-13a0e8831c36_State')[0];
  var f5dc5a74c43354b43855913a0e8831c36_StateVal = f5dc5a74c43354b43855913a0e8831c36_StateEl.value.trim();
  if (f5dc5a74c43354b43855913a0e8831c36_StateVal == "") {
    IsValidated = false;
    MarkInvalidElement(f5dc5a74c43354b43855913a0e8831c36_StateEl);
  }/* required validation */
  var f5dc5a74c43354b43855913a0e8831c36_ZipEl = document.getElementsByName('5dc5a74c-4335-4b43-8559-13a0e8831c36_Zip')[0];
  var f5dc5a74c43354b43855913a0e8831c36_ZipVal = f5dc5a74c43354b43855913a0e8831c36_ZipEl.value.trim();
  if (f5dc5a74c43354b43855913a0e8831c36_ZipVal == "") {
    IsValidated = false;
    MarkInvalidElement(f5dc5a74c43354b43855913a0e8831c36_ZipEl);
  }/* required validation */
  var f65acc81ebe5a48148aa7cb4fbe24819aEl = document.getElementsByName('65acc81e-be5a-4814-8aa7-cb4fbe24819a')[0];
  var f65acc81ebe5a48148aa7cb4fbe24819aVal = f65acc81ebe5a48148aa7cb4fbe24819aEl.value.trim();
  if (f65acc81ebe5a48148aa7cb4fbe24819aVal == "") {
    IsValidated = false;
    MarkInvalidElement(f65acc81ebe5a48148aa7cb4fbe24819aEl);
  }
  var isHoney = CheckHoneyPot();
  if (isHoney == true)
  {
    var id = $.getUrlVars('rk')['rk'];
    location.href = '/html/FormConfirmation.html?rk=' + id;
  }
  else if (IsValidated == true)
  {

    document.getElementById("BacktellForm0231943").submit();

    setTimeout(() => {
      window.top.location.href = "https://guardianoforlando.com/valuedcustomer?" + serviceRef +"=";
    }, 1000);

  }
  else
  {
    alert("Please fill out all required fields.");

  }
}

function getQueryParameters() {
  const queryStringKeyValue = window.location.search.replace('?', '').split('&');
  return queryStringKeyValue.reduce((acc, curr) => {
    const [key,value] = curr.split('=')
    return {
      ...acc,
      [key]: value
    }
  }, {})
}
customElements.define('lead-form-g', LeadFormG);
