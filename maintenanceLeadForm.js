class MaintenanceLeadFormG extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<link href="https://fonts.googleapis.com/css?family=Lato&amp;amp;display=swap" rel="stylesheet"><style>.flatpickr-calendar{background:transparent;opacity:0;display:none;text-align:center;visibility:hidden;padding:0;-webkit-animation:none;animation:none;direction:ltr;border:0;font-size:14px;line-height:24px;border-radius:5px;position:absolute;width:307.875px;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-touch-action:manipulation;touch-action:manipulation;background:#fff;-webkit-box-shadow:1px 0 0 #e6e6e6,-1px 0 0 #e6e6e6,0 1px 0 #e6e6e6,0 -1px 0 #e6e6e6,0 3px 13px rgba(0,0,0,0.08);box-shadow:1px 0 0 #e6e6e6,-1px 0 0 #e6e6e6,0 1px 0 #e6e6e6,0 -1px 0 #e6e6e6,0 3px 13px rgba(0,0,0,0.08);}.flatpickr-calendar.open,.flatpickr-calendar.inline{opacity:1;max-height:640px;visibility:visible}.flatpickr-calendar.open{display:inline-block;z-index:100000}.flatpickr-calendar.animate.open{-webkit-animation:fpFadeInDown 300ms cubic-bezier(.23,1,.32,1);animation:fpFadeInDown 300ms cubic-bezier(.23,1,.32,1)}.flatpickr-calendar.inline{display:block;position:relative;top:2px}.flatpickr-calendar.static{position:absolute;top:calc(100% + 2px);}.flatpickr-calendar.static.open{z-index:999;display:block}.flatpickr-calendar.multiMonth .flatpickr-days .dayContainer:nth-child(n+1) .flatpickr-day.inRange:nth-child(7n+7){-webkit-box-shadow:none !important;box-shadow:none !important}.flatpickr-calendar.multiMonth .flatpickr-days .dayContainer:nth-child(n+2) .flatpickr-day.inRange:nth-child(7n+1){-webkit-box-shadow:-2px 0 0 #e6e6e6,5px 0 0 #e6e6e6;box-shadow:-2px 0 0 #e6e6e6,5px 0 0 #e6e6e6}.flatpickr-calendar .hasWeeks .dayContainer,.flatpickr-calendar .hasTime .dayContainer{border-bottom:0;border-bottom-right-radius:0;border-bottom-left-radius:0}.flatpickr-calendar .hasWeeks .dayContainer{border-left:0}.flatpickr-calendar.showTimeInput.hasTime .flatpickr-time{height:40px;border-top:1px solid #e6e6e6}.flatpickr-calendar.noCalendar.hasTime .flatpickr-time{height:auto}.flatpickr-calendar:before,.flatpickr-calendar:after{position:absolute;display:block;pointer-events:none;border:solid transparent;content:'';height:0;width:0;left:22px}.flatpickr-calendar.rightMost:before,.flatpickr-calendar.rightMost:after{left:auto;right:22px}.flatpickr-calendar:before{border-width:5px;margin:0 -5px}.flatpickr-calendar:after{border-width:4px;margin:0 -4px}.flatpickr-calendar.arrowTop:before,.flatpickr-calendar.arrowTop:after{bottom:100%}.flatpickr-calendar.arrowTop:before{border-bottom-color:#e6e6e6}.flatpickr-calendar.arrowTop:after{border-bottom-color:#fff}.flatpickr-calendar.arrowBottom:before,.flatpickr-calendar.arrowBottom:after{top:100%}.flatpickr-calendar.arrowBottom:before{border-top-color:#e6e6e6}.flatpickr-calendar.arrowBottom:after{border-top-color:#fff}.flatpickr-calendar:focus{outline:0}.flatpickr-wrapper{position:relative;display:inline-block}.flatpickr-months{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.flatpickr-months .flatpickr-month{background:transparent;color:rgba(0,0,0,0.9);fill:rgba(0,0,0,0.9);height:28px;line-height:1;text-align:center;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow:hidden;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.flatpickr-months .flatpickr-prev-month,.flatpickr-months .flatpickr-next-month{text-decoration:none;cursor:pointer;position:absolute;top:0;line-height:16px;height:28px;padding:10px;z-index:3;color:rgba(0,0,0,0.9);fill:rgba(0,0,0,0.9);}.flatpickr-months .flatpickr-prev-month.disabled,.flatpickr-months .flatpickr-next-month.disabled{display:none}.flatpickr-months .flatpickr-prev-month i,.flatpickr-months .flatpickr-next-month i{position:relative}.flatpickr-months .flatpickr-prev-month.flatpickr-prev-month,.flatpickr-months .flatpickr-next-month.flatpickr-prev-month{/*      /*rtl:begin:ignore*/left:0;/*      /*rtl:end:ignore*/}/*      /*rtl:begin:ignore*//*      /*rtl:end:ignore*/.flatpickr-months .flatpickr-prev-month.flatpickr-next-month,.flatpickr-months .flatpickr-next-month.flatpickr-next-month{/*      /*rtl:begin:ignore*/right:0;/*      /*rtl:end:ignore*/}/*      /*rtl:begin:ignore*//*      /*rtl:end:ignore*/.flatpickr-months .flatpickr-prev-month:hover,.flatpickr-months .flatpickr-next-month:hover{color:#959ea9;}.flatpickr-months .flatpickr-prev-month:hover svg,.flatpickr-months .flatpickr-next-month:hover svg{fill:#f64747}.flatpickr-months .flatpickr-prev-month svg,.flatpickr-months .flatpickr-next-month svg{width:14px;height:14px;}.flatpickr-months .flatpickr-prev-month svg path,.flatpickr-months .flatpickr-next-month svg path{-webkit-transition:fill .1s;transition:fill .1s;fill:inherit}.numInputWrapper{position:relative;height:auto;}.numInputWrapper input,.numInputWrapper span{display:inline-block}.numInputWrapper input{width:100%;}.numInputWrapper input::-ms-clear{display:none}.numInputWrapper input::-webkit-outer-spin-button,.numInputWrapper input::-webkit-inner-spin-button{margin:0;-webkit-appearance:none}.numInputWrapper span{position:absolute;right:0;width:14px;padding:0 4px 0 2px;height:50%;line-height:50%;opacity:0;cursor:pointer;border:1px solid rgba(57,57,57,0.15);-webkit-box-sizing:border-box;box-sizing:border-box;}.numInputWrapper span:hover{background:rgba(0,0,0,0.1)}.numInputWrapper span:active{background:rgba(0,0,0,0.2)}.numInputWrapper span:after{display:block;content:"";position:absolute}.numInputWrapper span.arrowUp{top:0;border-bottom:0;}.numInputWrapper span.arrowUp:after{border-left:4px solid transparent;border-right:4px solid transparent;border-bottom:4px solid rgba(57,57,57,0.6);top:26%}.numInputWrapper span.arrowDown{top:50%;}.numInputWrapper span.arrowDown:after{border-left:4px solid transparent;border-right:4px solid transparent;border-top:4px solid rgba(57,57,57,0.6);top:40%}.numInputWrapper span svg{width:inherit;height:auto;}.numInputWrapper span svg path{fill:rgba(0,0,0,0.5)}.numInputWrapper:hover{background:rgba(0,0,0,0.05);}.numInputWrapper:hover span{opacity:1}.flatpickr-current-month{font-size:135%;line-height:inherit;font-weight:300;color:inherit;position:absolute;width:75%;left:12.5%;padding:6.16px 0 0 0;line-height:1;height:28px;display:inline-block;text-align:center;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);}.flatpickr-current-month span.cur-month{font-family:inherit;font-weight:700;color:inherit;display:inline-block;margin-left:.5ch;padding:0;}.flatpickr-current-month span.cur-month:hover{background:rgba(0,0,0,0.05)}.flatpickr-current-month .numInputWrapper{width:6ch;width:7ch\0;display:inline-block;}.flatpickr-current-month .numInputWrapper span.arrowUp:after{border-bottom-color:rgba(0,0,0,0.9)}.flatpickr-current-month .numInputWrapper span.arrowDown:after{border-top-color:rgba(0,0,0,0.9)}.flatpickr-current-month input.cur-year{background:transparent;-webkit-box-sizing:border-box;box-sizing:border-box;color:inherit;cursor:text;padding:0 0 0 .5ch;margin:0;display:inline-block;font-size:inherit;font-family:inherit;font-weight:300;line-height:inherit;height:auto;border:0;border-radius:0;vertical-align:initial;-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield;}.flatpickr-current-month input.cur-year:focus{outline:0}.flatpickr-current-month input.cur-year[disabled],.flatpickr-current-month input.cur-year[disabled]:hover{font-size:100%;color:rgba(0,0,0,0.5);background:transparent;pointer-events:none}.flatpickr-weekdays{background:transparent;text-align:center;overflow:hidden;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:28px;}.flatpickr-weekdays .flatpickr-weekdaycontainer{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}span.flatpickr-weekday{cursor:default;font-size:90%;background:transparent;color:rgba(0,0,0,0.54);line-height:1;margin:0;text-align:center;display:block;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;font-weight:bolder}.dayContainer,.flatpickr-weeks{padding:1px 0 0 0}.flatpickr-days{position:relative;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;width:307.875px;}.flatpickr-days:focus{outline:0}.dayContainer{padding:0;outline:0;text-align:left;width:307.875px;min-width:307.875px;max-width:307.875px;-webkit-box-sizing:border-box;box-sizing:border-box;display:inline-block;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-wrap:wrap;-ms-flex-pack:justify;-webkit-justify-content:space-around;justify-content:space-around;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);opacity:1;}.dayContainer + .dayContainer{-webkit-box-shadow:-1px 0 0 #e6e6e6;box-shadow:-1px 0 0 #e6e6e6}.flatpickr-day{background:none;border:1px solid transparent;border-radius:150px;-webkit-box-sizing:border-box;box-sizing:border-box;color:#393939;cursor:pointer;font-weight:400;width:14.2857143%;-webkit-flex-basis:14.2857143%;-ms-flex-preferred-size:14.2857143%;flex-basis:14.2857143%;max-width:39px;height:39px;line-height:39px;margin:0;display:inline-block;position:relative;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;}.flatpickr-day.inRange,.flatpickr-day.prevMonthDay.inRange,.flatpickr-day.nextMonthDay.inRange,.flatpickr-day.today.inRange,.flatpickr-day.prevMonthDay.today.inRange,.flatpickr-day.nextMonthDay.today.inRange,.flatpickr-day:hover,.flatpickr-day.prevMonthDay:hover,.flatpickr-day.nextMonthDay:hover,.flatpickr-day:focus,.flatpickr-day.prevMonthDay:focus,.flatpickr-day.nextMonthDay:focus{cursor:pointer;outline:0;background:#e6e6e6;border-color:#e6e6e6}.flatpickr-day.today{border-color:#959ea9;}.flatpickr-day.today:hover,.flatpickr-day.today:focus{border-color:#959ea9;background:#959ea9;color:#fff}.flatpickr-day.selected,.flatpickr-day.startRange,.flatpickr-day.endRange,.flatpickr-day.selected.inRange,.flatpickr-day.startRange.inRange,.flatpickr-day.endRange.inRange,.flatpickr-day.selected:focus,.flatpickr-day.startRange:focus,.flatpickr-day.endRange:focus,.flatpickr-day.selected:hover,.flatpickr-day.startRange:hover,.flatpickr-day.endRange:hover,.flatpickr-day.selected.prevMonthDay,.flatpickr-day.startRange.prevMonthDay,.flatpickr-day.endRange.prevMonthDay,.flatpickr-day.selected.nextMonthDay,.flatpickr-day.startRange.nextMonthDay,.flatpickr-day.endRange.nextMonthDay{background:#569ff7;-webkit-box-shadow:none;box-shadow:none;color:#fff;border-color:#569ff7}.flatpickr-day.selected.startRange,.flatpickr-day.startRange.startRange,.flatpickr-day.endRange.startRange{border-radius:50px 0 0 50px}.flatpickr-day.selected.endRange,.flatpickr-day.startRange.endRange,.flatpickr-day.endRange.endRange{border-radius:0 50px 50px 0}.flatpickr-day.selected.startRange + .endRange:not(:nth-child(7n+1)),.flatpickr-day.startRange.startRange + .endRange:not(:nth-child(7n+1)),.flatpickr-day.endRange.startRange + .endRange:not(:nth-child(7n+1)){-webkit-box-shadow:-10px 0 0 #569ff7;box-shadow:-10px 0 0 #569ff7}.flatpickr-day.selected.startRange.endRange,.flatpickr-day.startRange.startRange.endRange,.flatpickr-day.endRange.startRange.endRange{border-radius:50px}.flatpickr-day.inRange{border-radius:0;-webkit-box-shadow:-5px 0 0 #e6e6e6,5px 0 0 #e6e6e6;box-shadow:-5px 0 0 #e6e6e6,5px 0 0 #e6e6e6}.flatpickr-day.disabled,.flatpickr-day.disabled:hover,.flatpickr-day.prevMonthDay,.flatpickr-day.nextMonthDay,.flatpickr-day.notAllowed,.flatpickr-day.notAllowed.prevMonthDay,.flatpickr-day.notAllowed.nextMonthDay{color:rgba(57,57,57,0.3);background:transparent;border-color:transparent;cursor:default}.flatpickr-day.disabled,.flatpickr-day.disabled:hover{cursor:not-allowed;color:rgba(57,57,57,0.1)}.flatpickr-day.week.selected{border-radius:0;-webkit-box-shadow:-5px 0 0 #569ff7,5px 0 0 #569ff7;box-shadow:-5px 0 0 #569ff7,5px 0 0 #569ff7}.flatpickr-day.hidden{visibility:hidden}.rangeMode .flatpickr-day{margin-top:1px}.flatpickr-weekwrapper{display:inline-block;float:left;}.flatpickr-weekwrapper .flatpickr-weeks{padding:0 12px;-webkit-box-shadow:1px 0 0 #e6e6e6;box-shadow:1px 0 0 #e6e6e6}.flatpickr-weekwrapper .flatpickr-weekday{float:none;width:100%;line-height:28px}.flatpickr-weekwrapper span.flatpickr-day,.flatpickr-weekwrapper span.flatpickr-day:hover{display:block;width:100%;max-width:none;color:rgba(57,57,57,0.3);background:transparent;cursor:default;border:none}.flatpickr-innerContainer{display:block;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden;}.flatpickr-rContainer{display:inline-block;padding:0;-webkit-box-sizing:border-box;box-sizing:border-box}.flatpickr-time{text-align:center;outline:0;display:block;height:0;line-height:40px;max-height:40px;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.flatpickr-time:after{content:"";display:table;clear:both}.flatpickr-time .numInputWrapper{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;width:40%;height:40px;float:left;}.flatpickr-time .numInputWrapper span.arrowUp:after{border-bottom-color:#393939}.flatpickr-time .numInputWrapper span.arrowDown:after{border-top-color:#393939}.flatpickr-time.hasSeconds .numInputWrapper{width:26%}.flatpickr-time.time24hr .numInputWrapper{width:49%}.flatpickr-time input{background:transparent;-webkit-box-shadow:none;box-shadow:none;border:0;border-radius:0;text-align:center;margin:0;padding:0;height:inherit;line-height:inherit;color:#393939;font-size:14px;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield;}.flatpickr-time input.flatpickr-hour{font-weight:bold}.flatpickr-time input.flatpickr-minute,.flatpickr-time input.flatpickr-second{font-weight:400}.flatpickr-time input:focus{outline:0;border:0}.flatpickr-time .flatpickr-time-separator,.flatpickr-time .flatpickr-am-pm{height:inherit;display:inline-block;float:left;line-height:inherit;color:#393939;font-weight:bold;width:2%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center}.flatpickr-time .flatpickr-am-pm{outline:0;width:18%;cursor:pointer;text-align:center;font-weight:400}.flatpickr-time input:hover,.flatpickr-time .flatpickr-am-pm:hover,.flatpickr-time input:focus,.flatpickr-time .flatpickr-am-pm:focus{background:#eee}.flatpickr-input[readonly]{cursor:pointer}@-webkit-keyframes fpFadeInDown{from{opacity:0;-webkit-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0)}to{opacity:1;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}@keyframes fpFadeInDown{from{opacity:0;-webkit-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0)}to{opacity:1;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}</style><style>body{    font-family: 'Lato', sans-serif;}.sa-input{    box-sizing: border-box;    width: 100%;    outline: none;    background-color: #fff;    border-radius: 6px;    border-color: #AEB8C0;    border-style: solid;    border-width: 1px;    background-size: 16px 16px;    height: 32px;}.sa-text{    padding: 10px 28px 10px 15px;    font-size: 14px;}.sa-dropdown {    height: auto;}.sa-textarea{    resize: none;    height: auto;    padding: 10px 28px 10px 15px;    font-size: 14px;}.sa-form{    position: relative;    max-width: 1024px;    margin: 0 auto;    background-color: white;}.sa-form-review{    margin: 0 auto;    background-color: white;}.sa-form-body{    background-color: white;    color: black;}.sa-form-field{    margin: 24px 2%;}.sa-form-page{    padding: 1px 2px;    max-width: 1024px;    margin: 0 auto;}.sa-form-page-nav{    display: flex;    flex-direction: row;    flex-wrap: wrap;    justify-content: space-between;    padding-bottom: 16px;    margin: 12px 2%;}.sa-form-page-prev,.sa-form-page-next,.sa-form-page-submit{    white-space: nowrap;    text-align: center;    cursor: pointer;    filter: brightness(100%);    width: 200px;    min-width: 20%;    max-width: 46%;    margin-bottom: 10px;}.sa-form-page-prev.disabled,.sa-form-page-next.disabled,.sa-form-page-submit.disabled {    filter: brightness(50%);    cursor: not-allowed;}.sa-calendar-container {    min-height: 250px;}@media only screen and (max-width: 600px) {    .sa-form-page-prev, .sa-form-page-next, .sa-form-page-submit    {        width: 100%;        min-width: 50%;        max-width: 100%;    }}    .sa-form-page-prev:hover,    .sa-form-page-next:hover,    .sa-form-page-submit:hover    {        filter: brightness(75%);    }    .sa-form-page-prev:active,    .sa-form-page-next:active,    .sa-form-page-submit:active    {        filter: brightness(105%);    }.sa-character-counter{    display: flex;    flex-direction: row;    justify-content: flex-end;}.sa-character-limit-exceeded input,.sa-character-limit-exceeded textarea,.sa-invalid, input[type="hidden"].sa-invalid + input[type="date"]{    border: 1px solid red;    background-color: rgba(255, 0, 0, 0.1);}.sa-invalid-label {    color: red;}.sa-character-limit-exceeded label{    color: red;}.sa-required::before{    content: '* ';    color: red;}.sa-input.sa-required::before{    position: relative;    top: -24px;    content: '*';    color: red;}/* Radio Buttons */.sa-radio-container{    display: block;    position: relative;    padding-left: 12px;    margin-bottom: 12px;    cursor: pointer;    font-size: 16px;    -webkit-user-select: none;    -moz-user-select: none;    -ms-user-select: none;    user-select: none;}    /* Hide the browser's default radio button */    .sa-radio-container input    {        position: absolute;        opacity: 0;        cursor: pointer;    }    .sa-radio-container label    {        cursor: pointer;    }.sa-radio{    position: absolute;    width: 16px;    height: 16px;    border: 2px solid #777777;    border-radius: 50%;    cursor: pointer;}.sa-radio-checkmark{    position: absolute;    top: 2px;    left: 2px;    width: 12px;    height: 12px;    border-radius: 50%;    content: '';    display: none;}.sa-radio-container:hover input ~ .sa-radio > .sa-radio-checkmark{    background-color: #777777;    content: '';    display: block;}.sa-radio-container input:checked ~ .sa-radio > .sa-radio-checkmark{    display: block;}.sa-radio-container .sa-radio-label{    margin-left: 26px;}/* Checkbox */.sa-checkbox-container{    display: block;    position: relative;    padding-left: 12px;    margin-bottom: 12px;    cursor: pointer;    font-size: 16px;    -webkit-user-select: none;    -moz-user-select: none;    -ms-user-select: none;    user-select: none;}    /* Hide the browser's default checkbox button */    .sa-checkbox-container input    {        position: absolute;        opacity: 0;        cursor: pointer;    }    .sa-checkbox-container label    {        cursor: pointer;    }/* Create a custom checkbox button */.sa-checkbox{    position: absolute;    width: 16px;    height: 16px;    border: 2px solid #777777;    border-radius: 25%;    cursor: pointer;}.sa-checkbox-checkmark{    position: absolute;    top: 2px;    left: 2px;    width: 12px;    height: 12px;    border-radius: 25%;}.sa-checkbox-checkmark{    content: '';    position: absolute;    display: none;}.sa-checkbox-container:hover input:not(:checked) ~ .sa-checkbox > .sa-checkbox-checkmark{    content: '';    display: block;    left: 4px;    top: 0px;    width: 5px;    height: 10px;    border: solid #777777;    border-width: 0 3px 3px 0;    -webkit-transform: rotate(45deg);    -ms-transform: rotate(45deg);    transform: rotate(45deg);}.sa-checkbox-container input:checked ~ .sa-checkbox > .sa-checkbox-checkmark{    display: block;    left: 4px;    top: 0px;    width: 5px;    height: 10px;    border: solid white;    border-width: 0 3px 3px 0;    -webkit-transform: rotate(45deg);    -ms-transform: rotate(45deg);    transform: rotate(45deg);}.sa-checkbox-container .sa-checkbox-label{    margin-left: 26px;}/* Themes */.sa-theme0 {    background-color: white;}.sa-theme1{    background-color: #E6F9E6;    font-family: Helvetica;}.sa-theme2{    background-color: #F3F3F3;    font-family: 'Times New Roman';}.sa-theme3{    background-color: #ECF3FC;    font-family: Verdana;}.sa-theme4{    background-color: #686868;    font-family: Arial;}.sa-theme5{    background-color: #FFF2E5;    font-family: 'Courier New';    font-size: 16px;}.sa-theme6{    background-color: #F3E7FE;    font-family: 'Trebuchet MS';    font-size: 16px;}/* Placeholder Styles */.sa-placeholder-Arial::-webkit-input-placeholder{    font-family: Arial;}.sa-placeholder-Chalkboard::-webkit-input-placeholder{    font-family: Chalkboard;}.sa-placeholder-ComicSansMS::-webkit-input-placeholder{    font-family: 'Comic Sans MS';}.sa-placeholder-CourierNew::-webkit-input-placeholder{    font-family: 'Courier New';}.sa-placeholder-Georgia::-webkit-input-placeholder{    font-family: Georgia;}.sa-placeholder-Helvetica::-webkit-input-placeholder{    font-family: Helvetica;}.sa-placeholder-Impact::-webkit-input-placeholder{    font-family: Impact;}.sa-placeholder-LucidaSansUnicode::-webkit-input-placeholder{    font-family: 'Lucida Sans Unicode';}.sa-placeholder-Tahoma::-webkit-input-placeholder{    font-family: Tahoma;}.sa-placeholder-TimesNewRoman::-webkit-input-placeholder{    font-family: 'Times New Roman';}.sa-placeholder-TrebuchetMS::-webkit-input-placeholder{    font-family: 'Trebuchet MS';}.sa-placeholder-Verdana::-webkit-input-placeholder{    font-family: Verdana;}.sa-placeholder-Arial::-moz-placeholder{    font-family: Arial;}.sa-placeholder-Chalkboard::-moz-placeholder{    font-family: Chalkboard;}.sa-placeholder-ComicSansMS::-moz-placeholder{    font-family: 'Comic Sans MS';}.sa-placeholder-CourierNew::-moz-placeholder{    font-family: 'Courier New';}.sa-placeholder-Georgia::-moz-placeholder{    font-family: Georgia;}.sa-placeholder-Helvetica::-moz-placeholder{    font-family: Helvetica;}.sa-placeholder-Impact::-moz-placeholder{    font-family: Impact;}.sa-placeholder-LucidaSansUnicode::-moz-placeholder{    font-family: 'Lucida Sans Unicode';}.sa-placeholder-Tahoma::-moz-placeholder{    font-family: Tahoma;}.sa-placeholder-TimesNewRoman::-moz-placeholder{    font-family: 'Times New Roman';}.sa-placeholder-TrebuchetMS::-moz-placeholder{    font-family: 'Trebuchet MS';}.sa-placeholder-Verdana::-moz-placeholder{    font-family: Verdana;}.sa-placeholder-italic::-webkit-input-placeholder{    font-style: italic;}.sa-placeholder-bold::-webkit-input-placeholder{    font-weight: bold}.sa-placeholder-underlined::-webkit-input-placeholder{    text-decoration: underline;}.sa-placeholder-italic::-moz-placeholder{    font-style: italic;}.sa-placeholder-bold::-moz-placeholder{    font-weight: bold}.sa-placeholder-underlined::-moz-placeholder{    text-decoration: underline;}.sa-form-divider{    padding: 8px 0;}.sa-form-video {    width: 420px;    height: 315px;}.sa-form-video-container {    width: 420px;    text-align: center;}    .sa-formRating .sa-formRating--Container    {        background-color: #ffffff;        border-top: solid 1px #9e9e9e;        border-bottom: solid 1px #9e9e9e;        border-right: solid 1px #9e9e9e;        border-left: solid 1px #9e9e9e;        display: flex;        flex-direction: column;        align-items: center;        justify-content: space-around;    }    .sa-invalid-rating .sa-formRating .sa-formRating--Container  {        border: 1px solid red;    }        .sa-formRating .sa-formRating--Container:not(:checked) > input        {            display: none;        }        .sa-formRating .sa-formRating--Container .sa-formRating--Container-Link        {            padding: 16px 10px 10px 10px;            height: 26px;            width: 50px;            text-align: center;            cursor: pointer;        }.sa-chooseFile{    white-space: nowrap;    text-align: center;    cursor: pointer;    padding: 10px 20px;    background-color: #E1E1E1;    color: #1e1e1e;    border-radius: 6px;    border: none;    margin-bottom: 25px;    line-height: inherit;    font-size: 16px;}    .sa-chooseFile:hover    {        background-color: #d1d1d1;        color: #1e1e1e;        border: none;    }.sa-fileDiv{    padding-top: 15px;}.sa-uploadedFileContainer{    margin: 25px 0;}.sa-uploadedFile{    border: 1px solid #C3C3C3;    border-radius: 6px;    box-shadow: 0 0 2px 0 rgba(0,0,0,0.3), 0 2px 2px 0 rgba(0,0,0,0.3);    padding: 10px;    margin: 10px 0;}    .sa-uploadedFile .sa-uploadedFile--Remove    {        justify-content: flex-end;        color: #D0021B;        cursor: pointer;        align-self: center;    }    .sa-uploadedFile .sa-uploadedFile--FileName    {        padding-left: 10px;    }    .sa-uploadedFile .sa-uploadedFile--Size    {        font-size: 12px;    }.sa-loadingSpinner{    border: 3px solid #f3f3f3;    border-radius: 50%;    border-top: 3px solid #3498db;    width: 10px;    height: 10px;    animation: sa-loadingSpinner 2s linear infinite;}    .sa-loadingSpinner.sa-loadingSpinner-GridRow    {        width: 12px;        height: 12px;    }    .sa-loadingSpinner.sa-loadingSpinner-Inline    {        margin-right: 5px;    }    .sa-loadingSpinner.sa-loadingSpinner-ActivityTimeline    {        width: 12px;        height: 12px;        margin-right: 6px;    }@-webkit-keyframes sa-loadingSpinner{    0%    {        -webkit-transform: rotate(0deg);    }    100%    {        -webkit-transform: rotate(360deg);    }}@-moz-keyframes sa-loadingSpinner{    0%    {        -webkit-transform: rotate(0deg);    }    100%    {        -webkit-transform: rotate(360deg);    }}@keyframes sa-loadingSpinner{    0%    {        -webkit-transform: rotate(0deg);    }    100%    {        -webkit-transform: rotate(360deg);    }}.l-SA-FormRating{    display: flex;    flex-direction: row;    flex: 0 0 98%;    flex-wrap: wrap;}.l-SA-UploadFile{    display: flex;    flex-direction: row;    justify-content: space-between;    align-items: center;}.l-SA-FileName{    display: flex;    flex-direction: row;    justify-content: flex-start;    align-items: center;}.sa-ico-CircleCheck{    background-repeat: no-repeat;    background-position: center center;    display: inline-block;    vertical-align: middle;    width: 24px;    height: 24px;    background-size: 24px 24px;    background-image: url(https://my.serviceautopilot.com/v3-images/CircleCheck.svg);    filter: brightness(0) saturate(100%) invert(43%) sepia(100%) saturate(421%) hue-rotate(97deg) brightness(97%) contrast(93%);}.sa-ico-Trashcan{    background-repeat: no-repeat;    background-position: center center;    display: inline-block;    vertical-align: middle;    width: 24px;    height: 24px;    background-size: 24px 24px;    background-image: url(https://my.serviceautopilot.com/v3-images/Trashcan.svg);    filter: invert(9%) sepia(97%) saturate(6260%) hue-rotate(349deg) brightness(90%) contrast(102%);  /*red*/}.sa-ico-Failed{    background-repeat: no-repeat;    background-position: center center;    display: inline-block;    vertical-align: middle;    width: 24px;    height: 24px;    background-size: 24px 24px;    background-image: url(https://my.serviceautopilot.com/v3-images/void.svg);    filter: invert(9%) sepia(97%) saturate(6260%) hue-rotate(349deg) brightness(90%) contrast(102%); /*red*/}.sa-ico-Processing{    background-repeat: no-repeat;    background-position: center center;    display: inline-block;    vertical-align: middle;    width: 24px;    height: 24px;    background-size: 24px 24px;    background-image: url(https://my.serviceautopilot.com/v3-images/Processing.svg);    animation-name: rotateCounterClockwise;    animation-duration: 1.4s;    animation-iteration-count: infinite;    animation-timing-function: linear;}@keyframes rotateCounterClockwise{    0% { transform: rotate(0deg); }    100% { transform: rotate(-360deg); }}    @media only screen and (max-width: 767.98px){    .sa-form-video    {        width: 100%;        height: 245px;    }    .sa-input-wrapper    {        width: 100% !important;    }}.sa-form-confirmation-message,.sa-submission-progress-box{    box-shadow: 0 0 2px rgba(0,0,0, 0.4);    border-radius: 4px;    margin: 10px auto;    display: flex;    align-items: center;    justify-content: center;    flex-direction: column;}.sa-submission-progress-box{    width: calc(100vw - 40px);    max-width: calc(100% - 40px);}.sa-form-confirmation-message{    background-color: rgb(255,255,255);}.sa-submission-progress-container{    position: absolute;    top: 0;    left: 0;    z-index: 99999;    background-color: rgba(1,1,1,0.25);    width: 100%;    height: 100%;}.sa-form-confirmation-message img{    width: 100px;    height: 100px;}.sa-form-confirmation-message .sa-form-confirmation-message-content,.sa-submission-progress-box .sa-submission-progress-message{    padding: 20px;    line-height: 1.5em;    max-height: 90vh;    overflow: auto;}@keyframes sa-ellipses-slide-1{    0% { transform: translateX(32px); }    10% { transform: translateX(32px); }    50% { transform: translateX(80px); }    90% { transform: translateX(128px); }    100% { transform: translateX(128px); }}@keyframes sa-ellipses-slide-2{    0% { transform: translateX(80px); }    10% { transform: translateX(80px); }    50% { transform: translateX(128px); }    90% { transform: translateX(32px); }    100% { transform: translateX(32px); }}@keyframes sa-ellipses-slide-3{    0% { transform: translateX(128px); }    10% { transform: translateX(128px); }    50% { transform: translateX(32px); }    90% { transform: translateX(80px); }    100% { transform: translateX(80px); }}.sa-ellipses{    margin-left: -24px;    width: 160px;}    .sa-ellipses div    {        position: absolute;        transform: translateX(32px) scale(1);        width: 12px;        height: 12px;        border-radius: 50%;        margin-right: 12px;        background-color: white;        border: 1px solid #1e1e1e;    }        .sa-ellipses div:nth-child(1)        {            animation: sa-ellipses-slide-1 1s infinite cubic-bezier(0,0.5,0.5,1);        }        .sa-ellipses div:nth-child(2)        {            animation: sa-ellipses-slide-2 1s infinite cubic-bezier(0,0.5,0.5,1);        }        .sa-ellipses div:nth-child(3)        {            animation: sa-ellipses-slide-3 1s infinite cubic-bezier(0,0.5,0.5,1);        }.sa-ohnohoney-container {    padding-left: 20px;    display: flex;    flex-direction: column;}.sa-ohnohoney {    opacity: 0;    position: absolute;    top: 0;    left: 0;    height: 0;    width: 0;    z-index: -1;}</style><style></style></head><body><div class="sa-form sa-theme1"><div data-index="1" class="sa-form-page" style="display:block"><div data-page="1" data-field="1" class="sa-form-field" style="font-size:30px"><strong><span style="color: rgb(13, 197, 14);">Lawn Service (Maintenance) - Service Estimate</span></strong></div><div data-page="1" data-field="2" style="padding:0px 0px 0px 0px"><div class="sa-form-field sa-form-divider" style="border-bottom-style:dashed;border-bottom-width:3px;border-bottom-color:#1F1F1F"></div></div><div data-page="1" data-field="3" class="sa-form-field">Welcome to our Lawn Service (Maintenance) Service Estimate page. At Premier Landscaping Services, we are dedicated to keeping your lawn green, healthy, and vibrant. Please complete the following form to request a customized estimate for our lawn maintenance services.</div><div data-page="1" data-field="4" class="sa-form-field" style="font-size:30px"><strong><span style="color: rgb(13, 197, 14);">Tell Us About Yourself</span></strong></div><div id="sa-txt-e1455d7b-6bb0-4763-861e-4493a9c389b6" data-fieldType="shortText" required="" data-page="1" data-field="5" class="sa-form-field"><p class="sa-required"><span style="color:rgb(31, 31, 31);font-family: Helvetica"><strong>First Name</strong></span></p><div class="sa-input-wrapper" style="width:30%"><input id="sa-txt-e1455d7b-6bb0-4763-861e-4493a9c389b6-input" type="text" value="" required="" data-limit="100" class="sa-input sa-text" style="width:100%"><label for="sa-txt-e1455d7b-6bb0-4763-861e-4493a9c389b6-input" class="sa-character-counter" style="display:none">0/100</label></div></div><div id="sa-txt-4d86ab5c-1214-4bb3-a5d1-ede7c54afd47" data-fieldType="shortText" required="" data-page="1" data-field="6" class="sa-form-field"><p class="sa-required"><span style="color:rgb(31, 31, 31);font-family: Helvetica"><strong>Last Name</strong></span></p><div class="sa-input-wrapper" style="width:30%"><input id="sa-txt-4d86ab5c-1214-4bb3-a5d1-ede7c54afd47-input" type="text" value="" required="" data-limit="100" class="sa-input sa-text" style="width:100%"><label for="sa-txt-4d86ab5c-1214-4bb3-a5d1-ede7c54afd47-input" class="sa-character-counter" style="display:none">0/100</label></div></div><div id="sa-email-41feec26-d5ca-42aa-8698-46252b2db6cf" data-fieldType="email" required="" data-page="1" data-field="7" class="sa-form-field"><p class="sa-required"><span style="color:rgb(31, 31, 31);font-family: Helvetica"><strong>Email</strong></span></p><div class="sa-input-wrapper" style="width:30%"><input id="sa-email-41feec26-d5ca-42aa-8698-46252b2db6cf-input" type="email" pattern="[a-z0-9._%&#x2B;-]&#x2B;@[a-z0-9.-]&#x2B;\.[a-z]{2,3}$" value="" data-limit="100" class="sa-input sa-text" style="width:100%"><label for="sa-email-41feec26-d5ca-42aa-8698-46252b2db6cf-input" class="sa-character-counter" style="display:none">0/100</label></div></div><div id="sa-txt-105f3ef1-6ca5-41f1-96c5-a85136968b58" data-fieldType="shortText" required="" data-page="1" data-field="8" class="sa-form-field"><p class="sa-required"><span style="color:rgb(31, 31, 31);font-family: Helvetica"><strong>Phone Number</strong></span></p><div class="sa-input-wrapper" style="width:30%"><input id="sa-txt-105f3ef1-6ca5-41f1-96c5-a85136968b58-input" type="text" value="" required="" placeholder="###-###-####" data-limit="20" class="sa-input sa-text sa-placeholder-Helvetica" style="width:100%"><label for="sa-txt-105f3ef1-6ca5-41f1-96c5-a85136968b58-input" class="sa-character-counter" style="display:none">0/20</label></div></div><div data-fieldType="dropdown" required="" data-page="1" data-field="9" class="sa-form-field"><p class="sa-required"><legend>How did you discover Guardian Of Orlando?</legend></p><select id="sa-dd-d66d4121-5bfc-43d2-b5c1-faa67b5ceed5" class="sa-input sa-text sa-dropdown sa-input-wrapper" style="width:30%"><option value="-1" disabled="" hidden="" selected=""></option><option data-value="3b4c5e7d-0cad-4343-94b3-b20ddb3a58cc" value="3b4c5e7d-0cad-4343-94b3-b20ddb3a58cc">Email from Guardian</option><option data-value="ccc66f41-fd9c-4676-8eee-6602312672ce" value="ccc66f41-fd9c-4676-8eee-6602312672ce">Google, Yahoo Search Engine</option><option data-value="366084b6-3d01-4034-826b-3e0bc549bd2f" value="366084b6-3d01-4034-826b-3e0bc549bd2f">Instagram Facebook Social Site</option><option data-value="75c2076a-9d94-4e1b-9d15-ba7a473a5f97" value="75c2076a-9d94-4e1b-9d15-ba7a473a5f97">Post Card or Door Hanger</option><option data-value="24f4208d-3300-44b3-8dfe-5d76f06c217c" value="24f4208d-3300-44b3-8dfe-5d76f06c217c">Recommended by Friend, Family,</option></select></div><div data-page="1" data-field="10" style="padding:0px 0px 0px 0px"><div class="sa-form-field sa-form-divider" style="border-bottom-style:dashed;border-bottom-width:3px;border-bottom-color:#1F1F1F"></div></div><div data-page="1" data-field="11" class="sa-form-field" style="font-size:30px"><span style="color:rgb(13, 197, 14);font-family: Helvetica;"><strong>Service Address</strong></span></div><div id="sa-txt-f8f850bd-12b7-4525-839f-a991dfea9b4f" data-fieldType="shortText" required="" data-page="1" data-field="12" class="sa-form-field"><p class="sa-required"><span style="color:rgb(31, 31, 31);font-family: Helvetica"><strong>Address  Line 1</strong></span></p><div class="sa-input-wrapper" style="width:30%"><input id="sa-txt-f8f850bd-12b7-4525-839f-a991dfea9b4f-input" type="text" value="" required="" data-limit="500" class="sa-input sa-text" style="width:100%"><label for="sa-txt-f8f850bd-12b7-4525-839f-a991dfea9b4f-input" class="sa-character-counter" style="display:none">0/500</label></div></div><div id="sa-txt-1606738a-f260-4eed-a6b5-b5ad7072b8ca" data-fieldType="shortText" data-page="1" data-field="13" class="sa-form-field"><p><span style="color:rgb(31, 31, 31);font-family: Helvetica"><strong>Address  Line 2</strong></span></p><div class="sa-input-wrapper" style="width:30%"><input id="sa-txt-1606738a-f260-4eed-a6b5-b5ad7072b8ca-input" type="text" value="" data-limit="500" class="sa-input sa-text" style="width:100%"><label for="sa-txt-1606738a-f260-4eed-a6b5-b5ad7072b8ca-input" class="sa-character-counter" style="display:none">0/500</label></div></div><div id="sa-txt-ae6ef695-4bda-4331-b834-c86b962c5609" data-fieldType="shortText" required="" data-page="1" data-field="14" class="sa-form-field"><p class="sa-required"><span style="color:rgb(31, 31, 31);font-family: Helvetica"><strong>City</strong></span></p><div class="sa-input-wrapper" style="width:30%"><input id="sa-txt-ae6ef695-4bda-4331-b834-c86b962c5609-input" type="text" value="" required="" data-limit="255" class="sa-input sa-text" style="width:100%"><label for="sa-txt-ae6ef695-4bda-4331-b834-c86b962c5609-input" class="sa-character-counter" style="display:none">0/255</label></div></div><div data-fieldType="dropdown" required="" data-page="1" data-field="15" class="sa-form-field"><p class="sa-required"><span style="color:rgb(31, 31, 31);font-family: Helvetica"><strong>State</strong></span></p><select id="sa-dd-47eefeac-db1d-4392-ace7-f1c784e2d070" class="sa-input sa-text sa-dropdown sa-input-wrapper" style="width:30%"><option value="-1" disabled="" hidden="" selected=""></option><option data-value="8f2e084b-2f32-4af0-8480-a9c63ff846ad" value="8f2e084b-2f32-4af0-8480-a9c63ff846ad">Alabama</option><option data-value="9f69b55d-ce3d-4237-845f-aa6b7afeca97" value="9f69b55d-ce3d-4237-845f-aa6b7afeca97">Alaska</option><option data-value="4f4f1feb-5dd8-43cf-a4b4-66ded1657f61" value="4f4f1feb-5dd8-43cf-a4b4-66ded1657f61">Arizona</option><option data-value="81fef62e-e452-4c6b-881c-a63a7973a7ba" value="81fef62e-e452-4c6b-881c-a63a7973a7ba">Arkansas</option><option data-value="80373360-727a-45d1-aca3-65592364a190" value="80373360-727a-45d1-aca3-65592364a190">California</option><option data-value="af91e5a1-5e6c-4580-ae1f-d7154ef0ed8c" value="af91e5a1-5e6c-4580-ae1f-d7154ef0ed8c">Colorado</option><option data-value="d294495b-1d45-4876-a8a6-1bb3d81eb0ab" value="d294495b-1d45-4876-a8a6-1bb3d81eb0ab">Connecticut</option><option data-value="9a0e1871-040f-4f3a-930b-1aadfb0255e0" value="9a0e1871-040f-4f3a-930b-1aadfb0255e0">Delaware</option><option data-value="1274e9f8-aea7-44d2-8056-14ee8ba13680" value="1274e9f8-aea7-44d2-8056-14ee8ba13680">District of Columbia</option><option data-value="ed2c6af5-9adb-42f4-8cb6-aa7db36949e1" value="ed2c6af5-9adb-42f4-8cb6-aa7db36949e1">Florida</option><option data-value="dadd4835-52e0-40d2-9e0e-1b0d852af3aa" value="dadd4835-52e0-40d2-9e0e-1b0d852af3aa">Georgia</option><option data-value="dd6c42b0-c6f4-44e4-8456-d19c7c5a49fd" value="dd6c42b0-c6f4-44e4-8456-d19c7c5a49fd">Hawaii</option><option data-value="4d296a72-3f69-4249-be58-fcfe0b5ae4f3" value="4d296a72-3f69-4249-be58-fcfe0b5ae4f3">Idaho</option><option data-value="acc3ddb1-6631-4b5d-8dd9-56393f9a40ea" value="acc3ddb1-6631-4b5d-8dd9-56393f9a40ea">Illinois</option><option data-value="5dda5f0c-289c-4c1e-840f-6dcb5f32f368" value="5dda5f0c-289c-4c1e-840f-6dcb5f32f368">Indiana</option><option data-value="8dcbd41e-c869-40ce-952a-17f4885d3120" value="8dcbd41e-c869-40ce-952a-17f4885d3120">Iowa</option><option data-value="4c8a17ad-cae6-4316-803d-d2e221713247" value="4c8a17ad-cae6-4316-803d-d2e221713247">Kansas</option><option data-value="3330761a-1102-4ba1-a697-434f70a40292" value="3330761a-1102-4ba1-a697-434f70a40292">Kentucky</option><option data-value="ab525ea0-4e0a-40a6-9d01-d322d7fc8d2e" value="ab525ea0-4e0a-40a6-9d01-d322d7fc8d2e">Louisiana</option><option data-value="2fda888d-f721-4d49-8eef-892710b4e729" value="2fda888d-f721-4d49-8eef-892710b4e729">Maine</option><option data-value="617babd9-41d6-4e11-8566-f18e716012d9" value="617babd9-41d6-4e11-8566-f18e716012d9">Maryland</option><option data-value="d0e4eec3-904f-41a5-98ad-ef90d53dbd2a" value="d0e4eec3-904f-41a5-98ad-ef90d53dbd2a">Massachusetts</option><option data-value="22b15341-a6a6-40de-ad0c-47e7c5131a0c" value="22b15341-a6a6-40de-ad0c-47e7c5131a0c">Michigan</option><option data-value="e9a796b4-d835-4319-9943-b72d338f5e6a" value="e9a796b4-d835-4319-9943-b72d338f5e6a">Minnesota</option><option data-value="9a43ff39-403a-4f9b-8a29-487990d2c38d" value="9a43ff39-403a-4f9b-8a29-487990d2c38d">Mississippi</option><option data-value="1aff058d-07c5-44dd-8af3-efaecfb6b6cb" value="1aff058d-07c5-44dd-8af3-efaecfb6b6cb">Missouri</option><option data-value="b030fcd3-b5e9-4a59-acf3-536d9c3566ad" value="b030fcd3-b5e9-4a59-acf3-536d9c3566ad">Montana</option><option data-value="56f57fcb-d941-4ace-bb36-81f63f774341" value="56f57fcb-d941-4ace-bb36-81f63f774341">Nebraska</option><option data-value="dbdf6020-82a9-426e-affd-23df53d2eb8e" value="dbdf6020-82a9-426e-affd-23df53d2eb8e">Nevada</option><option data-value="b55bd246-747a-4268-8dfd-e90d58689df3" value="b55bd246-747a-4268-8dfd-e90d58689df3">New Hampshire</option><option data-value="196c01a0-74f3-4392-b9d2-64dc95442354" value="196c01a0-74f3-4392-b9d2-64dc95442354">New Jersey</option><option data-value="6d500502-b1ad-4f9e-a3a3-c75e9b1dc22b" value="6d500502-b1ad-4f9e-a3a3-c75e9b1dc22b">New Mexico</option><option data-value="d25fbed1-cd88-473e-8e1b-d17f19b006ba" value="d25fbed1-cd88-473e-8e1b-d17f19b006ba">New York</option><option data-value="df65a56f-cd3b-4899-9033-3d9cd7b2fa4a" value="df65a56f-cd3b-4899-9033-3d9cd7b2fa4a">North Carolina</option><option data-value="48a1bc79-ba7e-4314-812d-a582bc5b7780" value="48a1bc79-ba7e-4314-812d-a582bc5b7780">North Dakota</option><option data-value="e18cb59e-2516-4c7a-8c67-a33280463823" value="e18cb59e-2516-4c7a-8c67-a33280463823">Ohio</option><option data-value="bad71576-075c-4bf5-9b73-d84d8f613c20" value="bad71576-075c-4bf5-9b73-d84d8f613c20">Oklahoma</option><option data-value="97956655-3e67-4056-a0b2-a40a8494e0f9" value="97956655-3e67-4056-a0b2-a40a8494e0f9">Oregon</option><option data-value="775f9c9c-8c4f-438b-ae1d-2cb7aebacf2d" value="775f9c9c-8c4f-438b-ae1d-2cb7aebacf2d">Pennsylvania</option><option data-value="9c8d0210-d543-40f3-9d93-90198b480179" value="9c8d0210-d543-40f3-9d93-90198b480179">Rhode Island</option><option data-value="1c7061c9-3beb-4339-a528-b251dce29024" value="1c7061c9-3beb-4339-a528-b251dce29024">South Carolina</option><option data-value="09b57ba1-db10-4dff-a364-b998b6d77b89" value="09b57ba1-db10-4dff-a364-b998b6d77b89">South Dakota</option><option data-value="2ed71621-cc90-41c4-aff7-dea977c3e9dd" value="2ed71621-cc90-41c4-aff7-dea977c3e9dd">Tennessee</option><option data-value="6edb7fc8-7643-4e42-99cf-e9e539efad60" value="6edb7fc8-7643-4e42-99cf-e9e539efad60">Texas</option><option data-value="875d6392-4892-4828-b769-ff958758861c" value="875d6392-4892-4828-b769-ff958758861c">Utah</option><option data-value="3a444d32-c7c3-4bf5-bfa5-e7434dece3c7" value="3a444d32-c7c3-4bf5-bfa5-e7434dece3c7">Vermont</option><option data-value="657f383f-eb84-4e3e-a798-535b1bb7f6b4" value="657f383f-eb84-4e3e-a798-535b1bb7f6b4">Virginia</option><option data-value="a1821fab-4c69-4f36-8f73-64924a207b46" value="a1821fab-4c69-4f36-8f73-64924a207b46">Washington</option><option data-value="b06a60c8-0c84-45a8-8866-1b54765f3dbd" value="b06a60c8-0c84-45a8-8866-1b54765f3dbd">West Virginia</option><option data-value="155160f7-81b1-46c2-9046-3b8b8bc45b40" value="155160f7-81b1-46c2-9046-3b8b8bc45b40">Wisconsin</option><option data-value="63573cfd-647d-4728-8b42-2dfcc71c6421" value="63573cfd-647d-4728-8b42-2dfcc71c6421">Wyoming</option></select></div><div id="sa-txt-40994c81-42cd-4794-9e3d-508e4a8df4e0" data-fieldType="shortText" required="" data-page="1" data-field="16" class="sa-form-field"><p class="sa-required"><span style="color:rgb(31, 31, 31);font-family: Helvetica"><strong>Postal Code</strong></span></p><div class="sa-input-wrapper" style="width:30%"><input id="sa-txt-40994c81-42cd-4794-9e3d-508e4a8df4e0-input" type="text" value="" required="" data-limit="31" class="sa-input sa-text" style="width:100%"><label for="sa-txt-40994c81-42cd-4794-9e3d-508e4a8df4e0-input" class="sa-character-counter" style="display:none">0/31</label></div></div><div data-fieldType="dropdown" required="" data-page="1" data-field="17" class="sa-form-field"><p class="sa-required"><strong>Property Type</strong></p><select id="sa-dd-f84e9f8b-bb6c-48cb-8431-2fbabee14aa0" class="sa-input sa-text sa-dropdown sa-input-wrapper" style="width:30%"><option value="-1" disabled="" hidden="" selected=""></option><option data-value="0380d4b0-7ba7-41fa-ac9d-4119144895bc" value="0380d4b0-7ba7-41fa-ac9d-4119144895bc">Commercial</option><option data-value="7c9a3955-58d0-431e-936d-81bad8dff3c1" value="7c9a3955-58d0-431e-936d-81bad8dff3c1">Residential</option></select></div><div data-page="1" data-field="18" style="padding:0px 0px 0px 0px"><div class="sa-form-field sa-form-divider" style="border-bottom-style:dashed;border-bottom-width:3px;border-bottom-color:#1F1F1F"></div></div><div data-page="1" data-field="19" class="sa-form-field" style="font-size:30px"><strong><span style="color: rgb(13, 197, 14);">Lawn Maintenance</span></strong></div><div data-fieldType="checklist" required="" data-page="1" data-field="20" class="sa-form-field"><p class="sa-required"><strong><span style="font-size: 14px;">Recurring | Mowing</span></strong><span style="font-size: 14px;"><br>Includes regular services Mowing, edging, string trimming, and blowing lawns keep them healthy and attractive. Customizable service schedules based on lawn size, grass type, and climate.</span></p><div id="sa-CL-9988935f-5387-4bc1-919b-81c34281c9a5" class="sa-input-wrapper" style="width:60%"><style>#sa-CL-9988935f-5387-4bc1-919b-81c34281c9a5 .sa-checkbox-container input:checked ~ .sa-checkbox {background-color:#007AFF}</style><div class="sa-checkbox-container"><input type="checkbox" id="cb277ead01-481f-40ab-96e0-de0b980f9693" value="1" class="sa-checkboxBtn"><label for="cb277ead01-481f-40ab-96e0-de0b980f9693" data-color="#007AFF" class="sa-checkbox"><span class="sa-checkbox-checkmark"></span></label><label for="cb277ead01-481f-40ab-96e0-de0b980f9693" class="sa-checkbox-label">Weekly Summer, Bi-weekly Winter | Mowing</label></div><div class="sa-checkbox-container"><input type="checkbox" id="cb60863160-86b8-4994-8900-885af5247679" value="4" class="sa-checkboxBtn"><label for="cb60863160-86b8-4994-8900-885af5247679" data-color="#007AFF" class="sa-checkbox"><span class="sa-checkbox-checkmark"></span></label><label for="cb60863160-86b8-4994-8900-885af5247679" class="sa-checkbox-label">Bi-weekly | Mowing</label></div></div></div><div data-fieldType="radio" required="" data-page="1" data-field="21" class="sa-form-field"><p class="sa-required"><strong><span style="font-size: 14px;">Monthly | Bush &amp; Bed Maintenance</span></strong><span style="font-size: 14px;"><br>Trimming hedges &amp; shrubs **5ft &amp; below**<br>Pulling &amp; Spraying weed control</span></p><div class="sa-input-wrapper sa-multipleChoice" style="width:60%"><div data-color="#007AFF" data-name="sa-DivMC-c028b9f2-a920-4afd-a891-90c1e912dddc" class="sa-radio-container"><input type="radio" name="sa-MC-3ad5a2c8-aee5-473e-b287-44fd9f52377d" id="sa-rbMC-97e12a11-6f43-434f-aa15-7773b58d1ed8" data-value="0" value="0" class="sa-radioBtn"><label for="sa-rbMC-97e12a11-6f43-434f-aa15-7773b58d1ed8" class="sa-radio"><span class="sa-radio-checkmark"></span></label><label for="sa-rbMC-97e12a11-6f43-434f-aa15-7773b58d1ed8" class="sa-radio-label">Yes </label></div><div data-color="#007AFF" data-name="sa-DivMC-c028b9f2-a920-4afd-a891-90c1e912dddc" class="sa-radio-container"><input type="radio" name="sa-MC-3ad5a2c8-aee5-473e-b287-44fd9f52377d" id="sa-rbMC-5e6e6f29-8968-4ce2-92ad-447cfd3b5a38" data-value="1" value="1" class="sa-radioBtn"><label for="sa-rbMC-5e6e6f29-8968-4ce2-92ad-447cfd3b5a38" class="sa-radio"><span class="sa-radio-checkmark"></span></label><label for="sa-rbMC-5e6e6f29-8968-4ce2-92ad-447cfd3b5a38" class="sa-radio-label">No</label></div></div></div><div data-fieldType="radio" required="" data-page="1" data-field="22" class="sa-form-field"><p class="sa-required"><strong><span style="font-size: 14px;">Privacy, or Tall Hedges **5ft &amp; above**</span></strong><span style="font-size: 14px;"><br>Trimming **Above 5ft**</span></p><div class="sa-input-wrapper sa-multipleChoice" style="width:60%"><div data-color="#007AFF" data-name="sa-DivMC-3ca42a84-98e5-4d11-a4af-8a4c10b49a6d" class="sa-radio-container"><input type="radio" name="sa-MC-ad77b2f7-b709-4061-acd8-58671a235943" id="sa-rbMC-3130d1f1-3721-44d3-8be7-32059e856926" data-value="0" value="0" class="sa-radioBtn"><label for="sa-rbMC-3130d1f1-3721-44d3-8be7-32059e856926" class="sa-radio"><span class="sa-radio-checkmark"></span></label><label for="sa-rbMC-3130d1f1-3721-44d3-8be7-32059e856926" class="sa-radio-label">Yes</label></div><div data-color="#007AFF" data-name="sa-DivMC-3ca42a84-98e5-4d11-a4af-8a4c10b49a6d" class="sa-radio-container"><input type="radio" name="sa-MC-ad77b2f7-b709-4061-acd8-58671a235943" id="sa-rbMC-1c88954f-8148-4ebf-974d-c2539b2234fd" data-value="1" value="1" class="sa-radioBtn"><label for="sa-rbMC-1c88954f-8148-4ebf-974d-c2539b2234fd" class="sa-radio"><span class="sa-radio-checkmark"></span></label><label for="sa-rbMC-1c88954f-8148-4ebf-974d-c2539b2234fd" class="sa-radio-label">No</label></div></div></div><div id="sa-txt-d6eceedc-5307-43c6-a94f-3a308289a034" data-fieldType="longText" required="" data-page="1" data-field="23" class="sa-form-field"><p class="sa-required"><strong>Additional Comments/Questions:</strong></p><p>Feel free to include any specific details or questions related to your lawn maintenance requirements in this section.</p><div class="sa-input-wrapper" style="width:30%"><textarea id="sa-txt-d6eceedc-5307-43c6-a94f-3a308289a034-input" rows="4" placeholder="Enter text..." required="" class="sa-input sa-textarea sa-placeholder-Helvetica" style="width:100%"></textarea></div></div><div id="sa-dateField-4b125ecc-5e10-4a06-bafe-6707f3ab4af0" data-fieldType="dateTime" required="" data-page="1" data-field="24" class="sa-form-field"><p class="sa-required"><strong>Preferred Start Date</strong></p><p>Let us know your preferred date and time for service, and we'll do our best to accommodate your schedule.</p><div class="sa-input-wrapper" style="width:30%"><input id="sa-dateField-4b125ecc-5e10-4a06-bafe-6707f3ab4af0-input" type="text" value="" data-dateTimeSettings="{&quot;enableTime&quot;:false,&quot;noCalendar&quot;:false,&quot;allowInput&quot;:true,&quot;time_24hr&quot;:false,&quot;dateFormat&quot;:&quot;m-d-Y&quot;}" class="sa-input sa-text flatpickr sa-required" style="width:100%"><div id="sa-dateField-4b125ecc-5e10-4a06-bafe-6707f3ab4af0-div"></div></div></div><div data-fieldType="radio" data-page="1" data-field="25" data-jump-rules="[]" class="sa-form-field"><p><label for="formItemInput3"><strong>Would you like to be notified when the job is dispatched?</strong></label></p><div class="sa-input-wrapper sa-multipleChoice" style="width:60%"><div data-color="#007AFF" data-name="sa-DivMC-ce99881d-8add-4c3a-ad62-99ec9d5c228c" class="sa-radio-container"><input type="radio" name="sa-MC-c73d7ec0-b68c-4b87-8ec0-fd34e303d92d" id="sa-rbMC-d19e672c-6f8c-473d-9495-ecb1d3cda270" data-value="0" value="0" class="sa-radioBtn"><label for="sa-rbMC-d19e672c-6f8c-473d-9495-ecb1d3cda270" class="sa-radio"><span class="sa-radio-checkmark"></span></label><label for="sa-rbMC-d19e672c-6f8c-473d-9495-ecb1d3cda270" class="sa-radio-label">Yes</label></div><div data-color="#007AFF" data-name="sa-DivMC-ce99881d-8add-4c3a-ad62-99ec9d5c228c" class="sa-radio-container"><input type="radio" name="sa-MC-c73d7ec0-b68c-4b87-8ec0-fd34e303d92d" id="sa-rbMC-94fe3e9b-4b84-454c-b26f-e393cc097a05" data-value="1" value="1" class="sa-radioBtn"><label for="sa-rbMC-94fe3e9b-4b84-454c-b26f-e393cc097a05" class="sa-radio"><span class="sa-radio-checkmark"></span></label><label for="sa-rbMC-94fe3e9b-4b84-454c-b26f-e393cc097a05" class="sa-radio-label">No</label></div></div></div><div data-page="1" data-field="26" class="sa-form-field">Once you've filled out the form, click the <strong>"Submit"</strong> button below, and we'll get in touch with you promptly to provide you with a customized estimate for your Lawn Service needs. Thank you for choosing Guardina of Orlando - A Better Outdoor Solution for your outdoor cleaning needs. Your satisfaction is our priority, and we look forward to serving you!</div><div class="sa-ohnohoney-container"><input autocomplete="somethingAutofillDoesntKnow" id="customers-first-name-id" name="customers-first-name" type="text" class="sa-ohnohoney"><input autocomplete="somethingAutofillDoesntKnow" id="customers-email-id" name="customers-email" type="text" class="sa-ohnohoney"></div><div class="sa-form-page-nav"><span id="sa-form-submit" class="sa-form-page-submit" style="height:30px;line-height:30px;background-color:#0DC50E;color:#FFFFFF;border-radius:6px">Submit</span></div></div><div id="sa-submission-progress-container" class="sa-submission-progress-container" style="display:none"><div class="sa-submission-progress-box sa-theme1"><h1 class="sa-submission-progress-title">Submitting Form</h1><div class="sa-ellipses"><div></div><div></div><div></div></div><p class="sa-submission-progress-message">Wait while we submit your form.</p></div></div></div><div id="sa-form-confirmation" class="sa-form-page sa-theme1" style="display:none"><div class="sa-form-confirmation-message"><div class="sa-form-confirmation-message-content">Thanks for submitting the form. &nbsp;We'll be in touch soon!</div></div></div></body></html>`;
  }
}


const go = function() {
  var sa = {
    form: {
      rootEl: null,
      init: []
    },
    utils: {
      fireLayoutChangedEvent(scrollToTop) {
        if (sa.form.rootEl == null) {
          return;
        }
        if (scrollToTop) {
          let target = window.parent.document.querySelector('#formDialog') ? window.parentElement : window.parent.document.querySelector('#viewOverlayBodyRegionContainer');
          if (target) {
            target.scrollTop = 0;
          } else if (window.parent.document.querySelector('#formOverlayDomID')) {
            window.parent.scrollTo(0, 0);
          }
        }
        sa.form.rootEl.dispatchEvent(new CustomEvent('formLayoutChanged'));
      }
    }
  };
  function InitializeForm() {
    sa.form.rootEl = document.querySelector(".sa-form");
    for (let i = 0; i < sa.form.init.length; i++) {
      if (typeof sa.form.init[i] === "function") {
        sa.form.init[i]();
      }
    }
    document.removeEventListener("DOMContentLoaded", InitializeForm);
  }
  document.addEventListener("DOMContentLoaded", InitializeForm);
  var SaValidation = {
    text: function(field, isValid, isRequired, inputType) {
      const input = field.querySelector(inputType);
      const overLimit = input.getAttribute("data-limit") ? parseInt(input.getAttribute("data-limit")) < input.value.length: false;
      input.classList.remove("sa-invalid");
      if (!input.checkValidity() || overLimit || (input.value.trim() === "" && isRequired)) {
        isValid.value = false;
        input.classList.add("sa-invalid");
      }
    },
    number: function(field, isValid, isRequired) {
      this.text(field, isValid, isRequired, "input");
    },
    shortText: function(field, isValid, isRequired) {
      this.text(field, isValid, isRequired, "input");
    },
    longText: function(field, isValid, isRequired) {
      this.text(field, isValid, isRequired, "textarea");
    },
    email: function(field, isValid, isRequired) {
      const input = field.querySelector("input");
      input.classList.remove("sa-invalid");
      const div = field.querySelector("div");
      if ((input.value === "" && isRequired) || (input.value !== "" && !/(.+)@(.+){2,}\.(.+){2,}/.test(input.value)) || (div.classList.contains("sa-character-limit-exceeded"))) {
        isValid.value = false;
        input.classList.add("sa-invalid");
      }
    },
    dropdown: function(field, isValid, isRequired) {
      const input = field.querySelector("select");
      input.classList.remove("sa-invalid");
      if (input.selectedIndex === 0 && isRequired) {
        isValid.value = false;
        input.classList.add("sa-invalid");
      }
    },
    checklist: function(field, isValid, isRequired) {
      field.classList.remove("sa-invalid-label");
      const checkboxes = field.querySelectorAll("input");
      var chkValid = false;
      for (let j = 0; j < checkboxes.length; j++) {
        if (checkboxes[j].checked) {
          chkValid = true;
          break;
        }
      }
      if (!chkValid && isRequired) {
        isValid.value = false;
        field.classList.add("sa-invalid-label");
      }
    },
    radio: function(field, isValid, isRequired) {
      field.classList.remove("sa-invalid-label");
      const radioInputs = field.querySelectorAll("input");
      var radioValid = false;
      for (let j = 0; j < radioInputs.length; j++) {
        if (radioInputs[j].checked) {
          radioValid = true;
          break;
        }
      }
      if (!radioValid && isRequired) {
        isValid.value = false;
        field.classList.add("sa-invalid-label");
      }
    },
    rating: function(field, isValid, isRequired) {
      field.classList.remove("sa-invalid-rating");
      const ratingInputs = field.querySelectorAll("input");
      var ratingValid = false;
      for (let j = 0; j < ratingInputs.length; j++) {
        if (ratingInputs[j].checked) {
          ratingValid = true;
          break;
        }
      }
      if (!ratingValid && isRequired) {
        isValid.value = false;
        field.classList.add("sa-invalid-rating");
      }
    },
    review: function(field, isValid, isRequired) {
      const reviewInputs = field.querySelectorAll("input");
      var reviewValid = false;
      for (let j = 0; j < reviewInputs.length; j++) {
        if (reviewInputs[j].checked) {
          reviewValid = true;
          break;
        }
      }
      const reviewTextArea = field.querySelector("textarea");
      reviewTextArea.classList.remove("sa-invalid");
      if (reviewTextArea.value.trim() === "") {
        reviewValid = false;
      }
      if (!reviewValid && isRequired) {
        isValid.value = false;
        reviewTextArea.classList.add("sa-invalid");
      }
    },
    dateTime: function(field, isValid, isRequired) {
      const input = field.querySelector("input");
      input.classList.remove("sa-invalid");
      const settings = JSON.parse(input.getAttribute("data-dateTimeSettings"));
      if (settings.noCalendar === true && input.value.trim() === "" && isRequired) {
        isValid.value = false;
        input.classList.add("sa-invalid");
      } else if (settings.noCalendar === false) {
        let parseDate = input.value.toString();
        if (parseDate.length === 0 && isRequired) {
          input.classList.add("sa-invalid");
          isValid.value = false;
          return;
        }
        const dateParts = parseDate.split("-");
        if (dateParts.length != 3) {
          if (isRequired) {
            input.classList.add("sa-invalid");
            isValid.value = false;
          } else {
            input.value = "";
          }
          return;
        }
        if (settings.dateFormat === "d-m-Y") {
          const dateMonth = dateParts[1];
          const dateDay = dateParts[0];
          dateParts[0] = dateMonth;
          dateParts[1] = dateDay;
        }
        let month = parseInt(dateParts[0]);
        let day = parseInt(dateParts[1]);
        let year = parseInt(dateParts[2]);
        if (month <= 0 || month > 12) {
          input.classList.add("sa-invalid");
          isValid.value = false;
        } else if (month == 2) {
          let leapYear = (!(year % 4) && year % 100) || !(year % 400);
          if ((leapYear == false && day >= 29) || (leapYear == true && day > 29)) {
            input.classList.add("sa-invalid");
            isValid.value = false;
          }
        } else {
          let listofDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
          if (day > listofDays[month - 1]) {
            input.classList.add("sa-invalid");
            isValid.value = false;
          }
        }
      }
    },
    ccupdate: function(field, isValid, isRequired) {
      let button = field.querySelector('#Clearent-pay-now');
      if (isRequired) {
        let ccresult = field.getAttribute('data-ccresult');
        if (ccresult === null || ccresult.length === 0) {
          isValid.value = false;
          button.classList.add('sa-invalid');
          return;
        }
        let obj = JSON.parse(ccresult);
        isValid.value = !!obj.token && obj.token.length > 0;
        if (isValid.value) button.classList.remove('sa-invalid');
        else button.classList.add('sa-invalid');
        return;
      }
      if (button != null) button.classList.remove('sa-invalid');
    },
    hidden: function(field, isValid, isRequired) {
      return;
    }
  };
  var SaValidationStyle = {
    number: function(field) {
      const input = field.querySelector("input");
      input.addEventListener("change",
        function(event) {
          if (event.target.checkValidity()) event.target.classList.remove("sa-invalid");
          else event.target.classList.add("sa-invalid");
        });
    },
    shortText: function(field) {
      const input = field.querySelector("input");
      input.addEventListener("change",
        function(event) {
          if (event.target.value.trim() !== "") event.target.classList.remove("sa-invalid");
        });
    },
    longText: function(field) {
      const input = field.querySelector("textarea");
      input.addEventListener("change",
        function(event) {
          if (event.target.value.trim() !== "") event.target.classList.remove("sa-invalid");
        });
    },
    email: function(field) {
      const input = field.querySelector("input");
      input.addEventListener("change",
        function(event) {
          if (/(.+)@(.+){2,}\.(.+){2,}/.test(event.target.value)) event.target.classList.remove("sa-invalid");
        });
    },
    dropdown: function(field) {
      const input = field.querySelector("select");
      input.addEventListener("change",
        function(event) {
          if (event.target.selectedIndex !== 0) {
            event.target.classList.remove("sa-invalid");
          }
        });
    },
    checklist: function(field) {
      const checkboxes = field.querySelectorAll("input");
      for (let j = 0; j < checkboxes.length; j++) {
        checkboxes[j].addEventListener("change",
          function(event) {
            if (event.target.checked) {
              const wrapper = event.target.closest(".sa-invalid-label");
              if (wrapper) wrapper.classList.remove("sa-invalid-label");
            }
          });
      }
    },
    radio: function(field) {
      const radioInputs = field.querySelectorAll("input");
      for (let j = 0; j < radioInputs.length; j++) {
        radioInputs[j].addEventListener("change",
          function(event) {
            if (event.target.checked) {
              const wrapper = event.target.closest(".sa-invalid-label");
              if (wrapper) wrapper.classList.remove("sa-invalid-label");
            }
          });
      }
    },
    rating: function(field) {
      const ratingInputs = field.querySelectorAll("input");
      for (let j = 0; j < ratingInputs.length; j++) {
        ratingInputs[j].addEventListener("change",
          function(event) {
            if (event.target.checked) {
              const wrapper = event.target.closest(".sa-invalid-rating");
              if (wrapper) wrapper.classList.remove("sa-invalid-rating");
            }
          });
      }
    },
    review: function(field) {
      const reviewInputs = field.querySelectorAll("input");
      const reviewTextArea = field.querySelector("textarea");
      for (let j = 0; j < reviewInputs.length; j++) {
        reviewInputs[j].addEventListener("change",
          function(event) {
            if (event.target.checked && reviewTextArea.value.trim() !== "") {
              reviewTextArea.classList.remove("sa-invalid");
            }
          });
      }
      reviewTextArea.addEventListener("change",
        function(event) {
          if (event.target.value.trim() !== "") event.target.classList.remove("sa-invalid");
        });
    },
    dateTime: function(field) {
      const input = field.querySelector("input");
      input.addEventListener("change",
        function(event) {
          if (event.target.value.trim() !== "") event.target.classList.remove("sa-invalid");
        });
    },
    ccupdate: function(field) {
      const config = {
        attributes: true,
        childList: false,
        subtree: false,
        attributeFilter: ['data-ccresult']
      };
      const callback = function(mutationsList, observer) {
        for (let mutation of mutationsList) {
          let button = mutation.target.querySelector('#Clearent-pay-now');
          if (button === null || button === undefined) {
            button = mutation.target.querySelector('.Payroc-btn');
          }
          let ccresult = mutation.target.getAttribute('data-ccresult');
          if (ccresult.length === 0 || JSON.parse(ccresult).token.length === 0) button.classList.add('sa-invalid');
          else button.classList.remove('sa-invalid');
        }
      };
      const observer = new MutationObserver(callback);
      observer.observe(field, config);
    },
    hidden: function(field, isValid, isRequired) {
      return;
    }
  };
  var SaValidateNavRules = {
    text: function(field, rule, inputType) {
      const input = field.querySelector(inputType);
      const value = rule.values[0];
      switch (rule.condition) {
        case 10:
          return input.value === value;
        case 11:
          return input.value.indexOf(value) > -1;
        case 12:
          return input.value.indexOf(value) === 0;
        case 13:
          return input.value.indexOf(value) < 0;
        default:
          return false;
      }
    },
    numeric: function(condition, inputValue, value) {
      switch (condition) {
        case 0:
          return inputValue === value;
        case 1:
          return inputValue < value;
        case 2:
          return inputValue > value;
        case 3:
          return inputValue <= value;
        case 4:
          return inputValue >= value;
        default:
          return false;
      }
    },
    number: function(field, rule) {
      const input = field.querySelector('input');
      const inputValue = parseInt(input.value);
      const value = parseInt(rule.values[0]);
      return this.numeric(rule.condition, inputValue, value);
    },
    shortText: function(field, rule) {
      return this.text(field, rule, 'input');
    },
    longText: function(field, rule) {
      return this.text(field, rule, 'textarea');
    },
    email: function(field, rule) {
      return this.text(field, rule, 'input');
    },
    dropdown: function(field, rule) {
      const input = field.querySelector('select');
      const value = rule.values[0];
      const selectedOption = input[input.selectedIndex];
      let selectedValue = selectedOption.getAttribute('data-value').toString();
      if (selectedValue.length !== value.length && isNaN(parseInt(selectedValue))) {
        selectedValue = input.selectedIndex.toString();
      }
      /*         * the following switch block can be replaced with "return selectedValue === value;"         *         * I did not do this because by the time I realized it was like this, the R1 release was a few days away.         */
      switch (rule.condition) {
        case 10:
          return selectedValue === value;
        default:
          return false;
      }
    },
    checklist: function(field, rule) {
      const inputs = field.querySelectorAll('input');
      switch (rule.condition) {
        case 20:
          for (let i = 0; i < rule.values.length; i++) {
            let index = parseInt(rule.values[i]);
            if (!inputs[index].checked) return false;
          }
          return true;
        case 21:
          for (let i = 0; i < rule.values.length; i++) {
            let index = parseInt(rule.values[i]);
            if (inputs[index].checked) return true;
          }
          return false;
        case 23:
          for (let i = 0; i < rule.values.length; i++) {
            let index = parseInt(rule.values[i]);
            if (inputs[index].checked) return false;
          }
          return true;
        default:
          return false;
      }
    },
    radio: function(field, rule) {
      const value = rule.values[0];
      const inputs = field.querySelectorAll("input");
      let selectedValue = '';
      for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].checked) {
          selectedValue = inputs[i].getAttribute('data-value').toString();
          if (selectedValue.length !== value.length && isNaN(parseInt(selectedValue))) selectedValue = (i + 1).toString();
          break;
        }
      }
      /*         * the following switch block can be replaced with "return selectedValue === value;"         *          * I did not do this because by the time I realized it was like this, the R1 release was a few days away.         */
      switch (rule.condition) {
        case 10:
          return selectedValue === value;
        default:
          return false;
      }
    },
    rating: function(field, rule) {
      const inputs = field.querySelectorAll("input");
      const value = parseInt(rule.values[0]);
      var inputValue = 0;
      for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].checked) {
          inputValue = i;
          break;
        }
      }
      return this.numeric(rule.condition, inputValue, value);
    },
    review: function(field, rule) {
      const inputs = field.querySelectorAll("input");
      const value = parseInt(rule.values[0]);
      var inputValue = 0;
      for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].checked) {
          inputValue = parseInt(inputs[i].value);
          break;
        }
      }
      return this.numeric(rule.condition, inputValue, value);
    },
    dateTime: function(field, rule) {
      const input = field.querySelector("input");
      const settings = JSON.parse(input.getAttribute("data-dateTimeSettings"));
      let value = new Date(rule.values[0]);
      value = new Date(value.getFullYear(), value.getMonth(), value.getDate()).getTime();
      if (settings.noCalendar === true && input.value.trim() === "") return false;
      else if (settings.noCalendar === false) {
        let day = -1;
        let month = -1;
        let year = -1;
        let parseDate = input.value;
        const dateParts = parseDate.split("-");
        let monthIndex = 0;
        let dayIndex = 1;
        if (settings.dateFormat === "d-m-Y") {
          dayIndex = 0;
          monthIndex = 1;
        }
        day = parseInt(dateParts[dayIndex]);
        month = parseInt(dateParts[monthIndex]) - 1;
        let yearString = dateParts[2].split(' ')[0];
        if (yearString.length === 2) yearString = '20' + yearString;
        year = parseInt(yearString);
        let date = new Date(year, month, day).getTime();
        switch (rule.condition) {
          case 30:
            return date === value;
          case 31:
            return date < value;
          case 32:
            return date > value;
          case 33:
            return date <= value;
          case 34:
            return date >= value;
          default:
            return false;
        }
      }
      return false;
    },
    ccupdate: function(field, rule) {
      return false;
    }
  };
  function ValidateFields(page) {
    const isValid = {
      value: true
    };
    const fields = page.querySelectorAll("[data-fieldtype]");
    var scrolledToInvalidField = false;
    for (let i = 0; i < fields.length; i++) {
      const field = fields[i];
      const fieldType = field.getAttribute("data-fieldtype");
      let isRequired = false;
      const reqValue = field.getAttribute("required");
      if (reqValue === "") isRequired = true;
      if (SaValidation[fieldType] == null) continue;
      SaValidation[fieldType](field, isValid, isRequired);
      if (!scrolledToInvalidField && !isValid.value) {
        field.scrollIntoView();
        scrolledToInvalidField = true;
      }
    }
    if (!scrolledToInvalidField) UpdatePageNavigation(page);
    return ! scrolledToInvalidField;
  }
  function CheckHoneyPot() {
    var isRobot = false;
    const honeypot = document.querySelectorAll(".sa-ohnohoney");
    for (let i = 0; i < honeypot.length; i++) {
      if (honeypot[i].value !== '') {
        isRobot = true;
        break;
      }
    }
    if (!isRobot) {
      isRobot = CheckKeywordBlacklist();
    }
    return isRobot;
  }
  function CheckKeywordBlacklist() {
    var hasKeywordBlacklist = false;
    var keywords = '';
    if (keywords.length === 0) {
      return hasKeywordBlacklist;
    }
    var blacklist = keywords.split(",");
    var inputs = document.getElementsByClassName('sa-input sa-text');
    for (var i = 0; i < inputs.length; i++) {
      var value = inputs[i].value.toLowerCase();
      if (blacklist.some(v => value.includes(v))) {
        hasKeywordBlacklist = true;
        break;
      }
    }
    return hasKeywordBlacklist;
  }
  function UpdateInputValidStyle() {
    const fields = document.querySelectorAll("[data-fieldtype]");
    for (let i = 0; i < fields.length; i++) {
      const field = fields[i];
      const fieldType = field.getAttribute("data-fieldtype");
      if (fieldType !== "attachment") SaValidationStyle[fieldType](field);
    }
  }
  function UpdatePageNavigation(page) {
    var nextPage = page.getAttribute('data-next-page-default');
    const fields = page.querySelectorAll('[data-fieldtype]');
    for (let i = 0; i < fields.length; i++) {
      var field = fields[i];
      const fieldType = field.getAttribute('data-fieldtype');
      var serialized = field.getAttribute('data-jump-rules');
      if (serialized === undefined || serialized === null) continue;
      var jumpRules = JSON.parse(serialized);
      for (let j = 0; j < jumpRules.length; j++) {
        var validator = SaValidateNavRules[fieldType];
        if (validator === undefined || validator === null) continue;
        var rule = jumpRules[j];
        if (SaValidateNavRules[fieldType](field, rule)) {
          nextPage = rule.jumpTo;
          break;
        }
      }
    }
    page.setAttribute('data-next-page', nextPage);
  }
  sa.form.init.push(UpdateInputValidStyle);
  function LoadSubmitButton(confirmationType, data) {
    var submitBtn = document.getElementById("sa-form-submit");
    switch (confirmationType) {
      case "Document":
      case "URL":
        submitBtn.addEventListener("click",
          function() {
            var isDisabled = submitBtn.classList.contains('disabled');
            if (isDisabled) return;
            const page = submitBtn.parentElement.parentElement;
            if (CheckHoneyPot()) {
              DisplayConfirmation();
            } else if (ValidateFields(page)) {
              SubmitForm(page,
                function() {
                  GoToConfirmationUrl(data);
                  let progressIndicator = document.querySelector('#sa-submission-progress-container');
                  progressIndicator.style.display = "none";
                  EnablePaging();
                });
            }
          });
        break;
      case "SimpleMessage":
        submitBtn.addEventListener("click",
          function() {
            var isDisabled = submitBtn.classList.contains('disabled');
            if (isDisabled) return;
            const page = submitBtn.parentElement.parentElement;
            if (CheckHoneyPot()) {
              DisplayConfirmation();
            } else if (ValidateFields(page)) {
              SubmitForm(page, DisplayConfirmation);
            }
          });
        break;
    }
  }
  function DisablePaging() {
    let nextButtons = document.getElementsByClassName("sa-form-page-next");
    for (let i = 0; i < nextButtons.length; i++) nextButtons[i].classList.add("disabled");
    let previousButtons = document.getElementsByClassName("sa-form-page-prev");
    for (let i = 0; i < previousButtons.length; i++) previousButtons[i].classList.add("disabled");
    let submitBtn = document.getElementById("sa-form-submit");
    submitBtn.classList.add("disabled");
  };
  function EnablePaging() {
    let nextButtons = document.getElementsByClassName("sa-form-page-next");
    for (let i = 0; i < nextButtons.length; i++) nextButtons[i].classList.remove("disabled");
    let previousButtons = document.getElementsByClassName("sa-form-page-prev");
    for (let i = 0; i < previousButtons.length; i++) previousButtons[i].classList.remove("disabled");
    let submitBtn = document.getElementById("sa-form-submit");
    submitBtn.classList.remove("disabled");
  };
  function DisplayConfirmation() {
    let progressIndicator = document.querySelector('#sa-submission-progress-container');
    progressIndicator.style.display = "none";
    EnablePaging();
    const formEl = document.getElementsByClassName("sa-form");
    if (formEl !== null) formEl[0].style.display = "none";
    document.getElementById("sa-form-confirmation").style.display = "block";
    sa.utils.fireLayoutChangedEvent();
  }
  function GoToConfirmationUrl(data) {
    if (data !== "") {
      data = data.startsWith("http") ? data: "http://" + data;
      window.top.location = data;
    } else {
      DisplayConfirmation();
    }
  }
  function Post(url, data, success, failure) {
    var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
    xhr.open('POST', url);
    xhr.onreadystatechange = function() {
      if (xhr.readyState > 3) {
        if (xhr.status == 200) success(xhr.response);
        else if ( !! failure && typeof failure === 'function') failure(xhr.response);
      }
    };
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
    xhr.setRequestHeader('x-CompanyID', '28f5e7f1-d267-4dfd-aec9-893905851ec8');
    xhr.responseType = "json";
    xhr.withCredentials = false;
    xhr.crossDomain = true;
    xhr.send(JSON.stringify(data));
    return xhr;
  }
  function GetUrlVars() {
    var vars = {};
    window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,
      function(m, key, value) {
        vars[key] = value;
      });
    return vars;
  }
  var saFormUploads = saFormUploads || {
    Pending: []
  };
  function SubmitForm(page, success) {
    if (saFormUploads !== undefined && saFormUploads.Pending.length > 0) return;
    DisablePaging();
    var docTop = document.querySelector(".sa-form");
    window.scrollTo(window.scrollX, docTop.offsetTop);
    document.querySelector("html").style = "overflow: hidden";
    let progressIndicator = document.querySelector('#sa-submission-progress-container');
    progressIndicator.style.display = "block";
    AddPageFormData(page);
    let error = function(response) {
      let progressIndicator = document.querySelector('#sa-submission-progress-container');
      progressIndicator.style.display = "none";
      alert('We were unable to submit the form. Try again in a few moments.');
      console.error(response);
      EnablePaging();
    };
    /*@begincap@*/
    let viewState = document.querySelector('#saFormData');
    let saFormData = viewState.value;
    const urlVars = GetUrlVars();
    const submitData = JSON.parse(saFormData);
    const data = {
      request: {
        formTemplateId: '551e2721-9eb5-4d15-9d65-04f36568f9b2',
        submittedById: urlVars["sId"],
        submittedByType: urlVars["sType"],
        parentId: urlVars["pId"],
        parentType: urlVars["pType"],
        source: urlVars["source"],
        data: submitData
      }
    };
    Post("https://my.serviceautopilot.com/MarketingBFF/Form/SubmitForm", data, success, error);
    /*@endcap@*/
  }
  function ApplyTagsOnClick() {
    const urlVars = GetUrlVars();
    const data = {
      request: {
        formTemplateId: '551e2721-9eb5-4d15-9d65-04f36568f9b2',
        companyId: '28f5e7f1-d267-4dfd-aec9-893905851ec8',
        parentId: urlVars["pId"],
        parentType: urlVars["pType"]
      }
    };
    Post("https://my.serviceautopilot.com/MarketingBFF/Form/ApplyTagsOnClick", data,
      function() {});
  }
  function InitializeSubmit() {
    ApplyTagsOnClick();
    LoadSubmitButton("URL", "https://www.guardianoforlando.com/valuedcustomer?maintenance");
  }
  sa.form.init.push(InitializeSubmit);
  function InitializeCharacterCounters() {
    const counters = document.getElementsByClassName("sa-character-counter");
    for (let i = 0; i < counters.length; i++) {
      const inputId = counters[i].getAttribute('for');
      const input = document.getElementById(inputId);
      if (input === null || input === undefined) continue;
      input.addEventListener("keyup",
        function() {
          const maxValue = this.getAttribute("data-limit");
          const count = this.value.length;
          const value = count / maxValue;
          this.nextSibling.style.display = 'none';
          if (value >= .75) {
            this.nextSibling.textContent = count + "/" + maxValue;
            this.nextSibling.style.display = '';
          }
          if (count > maxValue) {
            this.parentElement.classList.add("sa-character-limit-exceeded");
          } else {
            this.parentElement.classList.remove("sa-character-limit-exceeded");
          }
        });
    }
  }
  sa.form.init.push(InitializeCharacterCounters);
  function InitializeChecklistField() {
    var choices = document.getElementsByClassName("sa-checkbox-container");
    for (var i = 0; i < choices.length; i++) {
      var choice = choices[i];
      choice.onclick = function(data) {
        var radio = data.currentTarget.getElementsByClassName("sa-checkboxBtn")[0];
        getChoiceBtns(radio);
      };
    }
    function getChoiceBtns(currentTarget) {
      var currentId = currentTarget.id;
      var x = document.getElementsByClassName("sa-checkbox-container");
      for (var i = 0; i < x.length; i++) {
        var div = x[i];
        var label = div.getElementsByClassName("sa-checkbox")[0];
        if (label.getAttribute("for") === currentId) {
          if (currentTarget.checked) label.style.borderColor = label.getAttribute("data-color");
          else label.style.borderColor = "#777777";
        }
      }
    }
  }
  sa.form.init.push(InitializeChecklistField);
  var dateInputInterval = null;
  function InitializeDateTimeFields() {
    /*var datePickers = document.querySelectorAll(".flatpickr:not(.flatpickr-mobile)");*/
    var datePickers = document.querySelectorAll(".flatpickr");
    for (var i = 0; i < datePickers.length; i++) {
      var datePicker = datePickers[i];
      var options = JSON.parse(datePicker.getAttribute("data-dateTimeSettings"));
      options.attachTo = datePicker;
      options.onClose = function(selectedDates, dateStr, instance) {
        var id = instance.element.id.slice(0, instance.element.id.length - 6) + "-div";
        document.getElementById(id).classList.remove("sa-calendar-container");
        sa.utils.fireLayoutChangedEvent()
      };
      flatpickr(datePicker, options);
      datePicker.addEventListener("click",
        function(event) {
          var id = event.target.id.slice(0, event.target.id.length - 6) + "-div";
          if (document.querySelector(".flatpickr-calendar.open") !== null) {
            document.getElementById(id).classList.add("sa-calendar-container");
            sa.utils.fireLayoutChangedEvent()
          }
        });
      datePicker.addEventListener("keyup",
        function(event) {
          clearInterval(dateInputInterval);
          dateInputInterval = setInterval(function() {
              document.getElementById(event.target.id)._flatpickr.setDate(event.target.value);
              clearInterval(dateInputInterval);
            },
            2000);
        });
      datePicker.addEventListener("keydown",
        function(event) {
          clearInterval(dateInputInterval);
        });
    }
  };
  sa.form.init.push(InitializeDateTimeFields);
  /* flatpickr v4.5.7, @license MIT */
  !
    function() {
      "use strict";
      var e = function() {
          return (e = Object.assign ||
            function(e) {
              for (var t, n = 1,
                     a = arguments.length; n < a; n++) for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              return e
            }).apply(this, arguments)
        },
        t = ["onChange", "onClose", "onDayCreate", "onDestroy", "onKeyDown", "onMonthChange", "onOpen", "onParseConfig", "onReady", "onValueUpdate", "onYearChange", "onPreCalendarPosition"],
        n = {
          _disable: [],
          _enable: [],
          allowInput: !1,
          altFormat: "F j, Y",
          altInput: !1,
          altInputClass: "form-control input",
          animate: "object" == typeof window && -1 === window.navigator.userAgent.indexOf("MSIE"),
          ariaDateFormat: "F j, Y",
          clickOpens: !0,
          closeOnSelect: !0,
          conjunction: ", ",
          dateFormat: "Y-m-d",
          defaultHour: 12,
          defaultMinute: 0,
          defaultSeconds: 0,
          disable: [],
          disableMobile: !1,
          enable: [],
          enableSeconds: !1,
          enableTime: !1,
          errorHandler: function(e) {
            return "undefined" != typeof console && console.warn(e)
          },
          getWeek: function(e) {
            var t = new Date(e.getTime());
            t.setHours(0, 0, 0, 0),
              t.setDate(t.getDate() + 3 - (t.getDay() + 6) % 7);
            var n = new Date(t.getFullYear(), 0, 4);
            return 1 + Math.round(((t.getTime() - n.getTime()) / 864e5 - 3 + (n.getDay() + 6) % 7) / 7)
          },
          hourIncrement: 1,
          ignoredFocusElements: [],
          inline: !1,
          locale: "default",
          minuteIncrement: 5,
          mode: "single",
          nextArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
          noCalendar: !1,
          now: new Date,
          onChange: [],
          onClose: [],
          onDayCreate: [],
          onDestroy: [],
          onKeyDown: [],
          onMonthChange: [],
          onOpen: [],
          onParseConfig: [],
          onReady: [],
          onValueUpdate: [],
          onYearChange: [],
          onPreCalendarPosition: [],
          plugins: [],
          position: "auto",
          positionElement: void 0,
          prevArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
          shorthandCurrentMonth: !1,
          showMonths: 1,
          static: !1,
          time_24hr: !1,
          weekNumbers: !1,
          wrap: !1
        },
        a = {
          weekdays: {
            shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            longhand: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
          },
          months: {
            shorthand: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            longhand: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
          },
          daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
          firstDayOfWeek: 0,
          ordinal: function(e) {
            var t = e % 100;
            if (t > 3 && t < 21) return "th";
            switch (t % 10) {
              case 1:
                return "st";
              case 2:
                return "nd";
              case 3:
                return "rd";
              default:
                return "th"
            }
          },
          rangeSeparator: " to ",
          weekAbbreviation: "Wk",
          scrollTitle: "Scroll to increment",
          toggleTitle: "Click to toggle",
          amPM: ["AM", "PM"],
          yearAriaLabel: "Year"
        },
        i = function(e) {
          return ("0" + e).slice( - 2)
        },
        o = function(e) {
          return ! 0 === e ? 1 : 0
        };
      function r(e, t, n) {
        var a;
        return void 0 === n && (n = !1),
          function() {
            var i = this,
              o = arguments;
            null !== a && clearTimeout(a),
              a = window.setTimeout(function() {
                  a = null,
                  n || e.apply(i, o)
                },
                t),
            n && !a && e.apply(i, o)
          }
      }
      var l = function(e) {
        return e instanceof Array ? e: [e]
      };
      function c(e, t, n) {
        if (!0 === n) return e.classList.add(t);
        e.classList.remove(t)
      }
      function d(e, t, n) {
        var a = window.document.createElement(e);
        return t = t || "",
          n = n || "",
          a.className = t,
        void 0 !== n && (a.textContent = n),
          a
      }
      function s(e) {
        for (; e.firstChild;) e.removeChild(e.firstChild)
      }
      function u(e, t) {
        var n = d("div", "numInputWrapper"),
          a = d("input", "numInput " + e),
          i = d("span", "arrowUp"),
          o = d("span", "arrowDown");
        if ( - 1 === navigator.userAgent.indexOf("MSIE 9.0") ? a.type = "number": (a.type = "text", a.pattern = "\\d*"), void 0 !== t) for (var r in t) a.setAttribute(r, t[r]);
        return n.appendChild(a),
          n.appendChild(i),
          n.appendChild(o),
          n
      }
      var f = function() {},
        m = function(e, t, n) {
          return n.months[t ? "shorthand": "longhand"][e]
        },
        g = {
          D: f,
          F: function(e, t, n) {
            e.setMonth(n.months.longhand.indexOf(t))
          },
          G: function(e, t) {
            e.setHours(parseFloat(t))
          },
          H: function(e, t) {
            e.setHours(parseFloat(t))
          },
          J: function(e, t) {
            e.setDate(parseFloat(t))
          },
          K: function(e, t, n) {
            e.setHours(e.getHours() % 12 + 12 * o(new RegExp(n.amPM[1], "i").test(t)))
          },
          M: function(e, t, n) {
            e.setMonth(n.months.shorthand.indexOf(t))
          },
          S: function(e, t) {
            e.setSeconds(parseFloat(t))
          },
          U: function(e, t) {
            return new Date(1e3 * parseFloat(t))
          },
          W: function(e, t) {
            var n = parseInt(t);
            return new Date(e.getFullYear(), 0, 2 + 7 * (n - 1), 0, 0, 0, 0)
          },
          Y: function(e, t) {
            e.setFullYear(parseFloat(t))
          },
          Z: function(e, t) {
            return new Date(t)
          },
          d: function(e, t) {
            e.setDate(parseFloat(t))
          },
          h: function(e, t) {
            e.setHours(parseFloat(t))
          },
          i: function(e, t) {
            e.setMinutes(parseFloat(t))
          },
          j: function(e, t) {
            e.setDate(parseFloat(t))
          },
          l: f,
          m: function(e, t) {
            e.setMonth(parseFloat(t) - 1)
          },
          n: function(e, t) {
            e.setMonth(parseFloat(t) - 1)
          },
          s: function(e, t) {
            e.setSeconds(parseFloat(t))
          },
          u: function(e, t) {
            return new Date(parseFloat(t))
          },
          w: f,
          y: function(e, t) {
            e.setFullYear(2e3 + parseFloat(t))
          }
        },
        p = {
          D: "(\\w+)",
          F: "(\\w+)",
          G: "(\\d\\d|\\d)",
          H: "(\\d\\d|\\d)",
          J: "(\\d\\d|\\d)\\w+",
          K: "",
          M: "(\\w+)",
          S: "(\\d\\d|\\d)",
          U: "(.+)",
          W: "(\\d\\d|\\d)",
          Y: "(\\d{4})",
          Z: "(.+)",
          d: "(\\d\\d|\\d)",
          h: "(\\d\\d|\\d)",
          i: "(\\d\\d|\\d)",
          j: "(\\d\\d|\\d)",
          l: "(\\w+)",
          m: "(\\d\\d|\\d)",
          n: "(\\d\\d|\\d)",
          s: "(\\d\\d|\\d)",
          u: "(.+)",
          w: "(\\d\\d|\\d)",
          y: "(\\d{2})"
        },
        h = {
          Z: function(e) {
            return e.toISOString()
          },
          D: function(e, t, n) {
            return t.weekdays.shorthand[h.w(e, t, n)]
          },
          F: function(e, t, n) {
            return m(h.n(e, t, n) - 1, !1, t)
          },
          G: function(e, t, n) {
            return i(h.h(e, t, n))
          },
          H: function(e) {
            return i(e.getHours())
          },
          J: function(e, t) {
            return void 0 !== t.ordinal ? e.getDate() + t.ordinal(e.getDate()) : e.getDate()
          },
          K: function(e, t) {
            return t.amPM[o(e.getHours() > 11)]
          },
          M: function(e, t) {
            return m(e.getMonth(), !0, t)
          },
          S: function(e) {
            return i(e.getSeconds())
          },
          U: function(e) {
            return e.getTime() / 1e3
          },
          W: function(e, t, n) {
            return n.getWeek(e)
          },
          Y: function(e) {
            return e.getFullYear()
          },
          d: function(e) {
            return i(e.getDate())
          },
          h: function(e) {
            return e.getHours() % 12 ? e.getHours() % 12 : 12
          },
          i: function(e) {
            return i(e.getMinutes())
          },
          j: function(e) {
            return e.getDate()
          },
          l: function(e, t) {
            return t.weekdays.longhand[e.getDay()]
          },
          m: function(e) {
            return i(e.getMonth() + 1)
          },
          n: function(e) {
            return e.getMonth() + 1
          },
          s: function(e) {
            return e.getSeconds()
          },
          u: function(e) {
            return e.getTime()
          },
          w: function(e) {
            return e.getDay()
          },
          y: function(e) {
            return String(e.getFullYear()).substring(2)
          }
        },
        v = function(e) {
          var t = e.config,
            i = void 0 === t ? n: t,
            o = e.l10n,
            r = void 0 === o ? a: o;
          return function(e, t, n) {
            var a = n || r;
            return void 0 !== i.formatDate ? i.formatDate(e, t, a) : t.split("").map(function(t, n, o) {
              return h[t] && "\\" !== o[n - 1] ? h[t](e, a, i) : "\\" !== t ? t: ""
            }).join("")
          }
        },
        D = function(e) {
          var t = e.config,
            i = void 0 === t ? n: t,
            o = e.l10n,
            r = void 0 === o ? a: o;
          return function(e, t, a, o) {
            if (0 === e || e) {
              var l, c = o || r,
                d = e;
              if (e instanceof Date) l = new Date(e.getTime());
              else if ("string" != typeof e && void 0 !== e.toFixed) l = new Date(e);
              else if ("string" == typeof e) {
                var s = t || (i || n).dateFormat,
                  u = String(e).trim();
                if ("today" === u) l = new Date,
                  a = !0;
                else if (/Z$/.test(u) || /GMT$/.test(u)) l = new Date(e);
                else if (i && i.parseDate) l = i.parseDate(e, s);
                else {
                  l = i && i.noCalendar ? new Date((new Date).setHours(0, 0, 0, 0)) : new Date((new Date).getFullYear(), 0, 1, 0, 0, 0, 0);
                  for (var f = void 0,
                         m = [], h = 0, v = 0, D = ""; h < s.length; h++) {
                    var w = s[h],
                      b = "\\" === w,
                      C = "\\" === s[h - 1] || b;
                    if (p[w] && !C) {
                      D += p[w];
                      var M = new RegExp(D).exec(e);
                      M && (f = !0) && m["Y" !== w ? "push": "unshift"]({
                        fn: g[w],
                        val: M[++v]
                      })
                    } else b || (D += ".");
                    m.forEach(function(e) {
                      var t = e.fn,
                        n = e.val;
                      return l = t(l, n, c) || l
                    })
                  }
                  l = f ? l: void 0
                }
              }
              if (l instanceof Date && !isNaN(l.getTime())) return ! 0 === a && l.setHours(0, 0, 0, 0),
                l;
              i.errorHandler(new Error("Invalid date provided: " + d))
            }
          }
        };
      function w(e, t, n) {
        return void 0 === n && (n = !0),
          !1 !== n ? new Date(e.getTime()).setHours(0, 0, 0, 0) - new Date(t.getTime()).setHours(0, 0, 0, 0) : e.getTime() - t.getTime()
      }
      var b = function(e, t, n) {
          return e > Math.min(t, n) && e < Math.max(t, n)
        },
        C = {
          DAY: 864e5
        };
      "function" != typeof Object.assign && (Object.assign = function(e) {
        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        if (!e) throw TypeError("Cannot convert undefined or null to object");
        for (var a = function(t) {
            t && Object.keys(t).forEach(function(n) {
              return e[n] = t[n]
            })
          },
               i = 0, o = t; i < o.length; i++) {
          a(o[i])
        }
        return e
      });
      var M = 300;
      function y(n, f) {
        var g = {
          config: e({},
            E.defaultConfig),
          l10n: a
        };
        function h(e) {
          return e.bind(g)
        }
        function y() {
          var e = g.config; ! 1 === e.weekNumbers && 1 === e.showMonths || !0 !== e.noCalendar && window.requestAnimationFrame(function() {
            if (void 0 !== g.calendarContainer && (g.calendarContainer.style.visibility = "hidden", g.calendarContainer.style.display = "block"), void 0 !== g.daysContainer) {
              var t = (g.days.offsetWidth + 1) * e.showMonths;
              g.daysContainer.style.width = t + "px",
                g.calendarContainer.style.width = t + (void 0 !== g.weekWrapper ? g.weekWrapper.offsetWidth: 0) + "px",
                g.calendarContainer.style.removeProperty("visibility"),
                g.calendarContainer.style.removeProperty("display")
            }
          })
        }
        function x(e) {
          0 === g.selectedDates.length && ne(),
          void 0 !== e && "blur" !== e.type &&
          function(e) {
            e.preventDefault();
            var t = "keydown" === e.type,
              n = e.target;
            void 0 !== g.amPM && e.target === g.amPM && (g.amPM.textContent = g.l10n.amPM[o(g.amPM.textContent === g.l10n.amPM[0])]);
            var a = parseFloat(n.getAttribute("min")),
              r = parseFloat(n.getAttribute("max")),
              l = parseFloat(n.getAttribute("step")),
              c = parseInt(n.value, 10),
              d = e.delta || (t ? 38 === e.which ? 1 : -1 : 0),
              s = c + l * d;
            if (void 0 !== n.value && 2 === n.value.length) {
              var u = n === g.hourElement,
                f = n === g.minuteElement;
              s < a ? (s = r + s + o(!u) + (o(u) && o(!g.amPM)), f && Y(void 0, -1, g.hourElement)) : s > r && (s = n === g.hourElement ? s - r - o(!g.amPM) : a, f && Y(void 0, 1, g.hourElement)),
              g.amPM && u && (1 === l ? s + c === 23 : Math.abs(s - c) > l) && (g.amPM.textContent = g.l10n.amPM[o(g.amPM.textContent === g.l10n.amPM[0])]),
                n.value = i(s)
            }
          } (e);
          var t = g._input.value;
          T(),
            ve(),
          g._input.value !== t && g._debouncedChange()
        }
        function T() {
          if (void 0 !== g.hourElement && void 0 !== g.minuteElement) {
            var e, t, n = (parseInt(g.hourElement.value.slice( - 2), 10) || 0) % 24,
              a = (parseInt(g.minuteElement.value, 10) || 0) % 60,
              i = void 0 !== g.secondElement ? (parseInt(g.secondElement.value, 10) || 0) % 60 : 0;
            void 0 !== g.amPM && (e = n, t = g.amPM.textContent, n = e % 12 + 12 * o(t === g.l10n.amPM[1]));
            var r = void 0 !== g.config.minTime || g.config.minDate && g.minDateHasTime && g.latestSelectedDateObj && 0 === w(g.latestSelectedDateObj, g.config.minDate, !0);
            if (void 0 !== g.config.maxTime || g.config.maxDate && g.maxDateHasTime && g.latestSelectedDateObj && 0 === w(g.latestSelectedDateObj, g.config.maxDate, !0)) {
              var l = void 0 !== g.config.maxTime ? g.config.maxTime: g.config.maxDate; (n = Math.min(n, l.getHours())) === l.getHours() && (a = Math.min(a, l.getMinutes())),
              a === l.getMinutes() && (i = Math.min(i, l.getSeconds()))
            }
            if (r) {
              var c = void 0 !== g.config.minTime ? g.config.minTime: g.config.minDate; (n = Math.max(n, c.getHours())) === c.getHours() && (a = Math.max(a, c.getMinutes())),
              a === c.getMinutes() && (i = Math.max(i, c.getSeconds()))
            }
            O(n, a, i)
          }
        }
        function k(e) {
          var t = e || g.latestSelectedDateObj;
          t && O(t.getHours(), t.getMinutes(), t.getSeconds())
        }
        function I() {
          var e = g.config.defaultHour,
            t = g.config.defaultMinute,
            n = g.config.defaultSeconds;
          if (void 0 !== g.config.minDate) {
            var a = g.config.minDate.getHours(),
              i = g.config.minDate.getMinutes(); (e = Math.max(e, a)) === a && (t = Math.max(i, t)),
            e === a && t === i && (n = g.config.minDate.getSeconds())
          }
          if (void 0 !== g.config.maxDate) {
            var o = g.config.maxDate.getHours(),
              r = g.config.maxDate.getMinutes(); (e = Math.min(e, o)) === o && (t = Math.min(r, t)),
            e === o && t === r && (n = g.config.maxDate.getSeconds())
          }
          O(e, t, n)
        }
        function O(e, t, n) {
          void 0 !== g.latestSelectedDateObj && g.latestSelectedDateObj.setHours(e % 24, t, n || 0, 0),
          g.hourElement && g.minuteElement && !g.isMobile && (g.hourElement.value = i(g.config.time_24hr ? e: (12 + e) % 12 + 12 * o(e % 12 == 0)), g.minuteElement.value = i(t), void 0 !== g.amPM && (g.amPM.textContent = g.l10n.amPM[o(e >= 12)]), void 0 !== g.secondElement && (g.secondElement.value = i(n)))
        }
        function S(e) {
          var t = parseInt(e.target.value) + (e.delta || 0); (t / 1e3 > 1 || "Enter" === e.key && !/[^\d]/.test(t.toString())) && V(t)
        }
        function _(e, t, n, a) {
          return t instanceof Array ? t.forEach(function(t) {
            return _(e, t, n, a)
          }) : e instanceof Array ? e.forEach(function(e) {
            return _(e, t, n, a)
          }) : (e.addEventListener(t, n, a), void g._handlers.push({
            element: e,
            event: t,
            handler: n,
            options: a
          }))
        }
        function N(e) {
          return function(t) {
            1 === t.which && e(t)
          }
        }
        function F() {
          fe("onChange")
        }
        function P(e) {
          var t = void 0 !== e ? g.parseDate(e) : g.latestSelectedDateObj || (g.config.minDate && g.config.minDate > g.now ? g.config.minDate: g.config.maxDate && g.config.maxDate < g.now ? g.config.maxDate: g.now);
          try {
            void 0 !== t && (g.currentYear = t.getFullYear(), g.currentMonth = t.getMonth())
          } catch(e) {
            e.message = "Invalid date supplied: " + t,
              g.config.errorHandler(e)
          }
          g.redraw()
        }
        function A(e) {~e.target.className.indexOf("arrow") && Y(e, e.target.classList.contains("arrowUp") ? 1 : -1)
        }
        function Y(e, t, n) {
          var a = e && e.target,
            i = n || a && a.parentNode && a.parentNode.firstChild,
            o = me("increment");
          o.delta = t,
          i && i.dispatchEvent(o)
        }
        function j(e, t, n, a) {
          var i = Z(t, !0),
            o = d("span", "flatpickr-day " + e, t.getDate().toString());
          return o.dateObj = t,
            o.$i = a,
            o.setAttribute("aria-label", g.formatDate(t, g.config.ariaDateFormat)),
          -1 === e.indexOf("hidden") && 0 === w(t, g.now) && (g.todayDateElem = o, o.classList.add("today"), o.setAttribute("aria-current", "date")),
            i ? (o.tabIndex = -1, ge(t) && (o.classList.add("selected"), g.selectedDateElem = o, "range" === g.config.mode && (c(o, "startRange", g.selectedDates[0] && 0 === w(t, g.selectedDates[0], !0)), c(o, "endRange", g.selectedDates[1] && 0 === w(t, g.selectedDates[1], !0)), "nextMonthDay" === e && o.classList.add("inRange")))) : o.classList.add("disabled"),
          "range" === g.config.mode &&
          function(e) {
            return ! ("range" !== g.config.mode || g.selectedDates.length < 2) && w(e, g.selectedDates[0]) >= 0 && w(e, g.selectedDates[1]) <= 0
          } (t) && !ge(t) && o.classList.add("inRange"),
          g.weekNumbers && 1 === g.config.showMonths && "prevMonthDay" !== e && n % 7 == 1 && g.weekNumbers.insertAdjacentHTML("beforeend", "<span class='flatpickr-day'>" + g.config.getWeek(t) + "</span>"),
            fe("onDayCreate", o),
            o
        }
        function H(e) {
          e.focus(),
          "range" === g.config.mode && ee(e)
        }
        function L(e) {
          for (var t = e > 0 ? 0 : g.config.showMonths - 1, n = e > 0 ? g.config.showMonths: -1, a = t; a != n; a += e) for (var i = g.daysContainer.children[a], o = e > 0 ? 0 : i.children.length - 1, r = e > 0 ? i.children.length: -1, l = o; l != r; l += e) {
            var c = i.children[l];
            if ( - 1 === c.className.indexOf("hidden") && Z(c.dateObj)) return c
          }
        }
        function W(e, t) {
          var n = Q(document.activeElement || document.body),
            a = void 0 !== e ? e: n ? document.activeElement: void 0 !== g.selectedDateElem && Q(g.selectedDateElem) ? g.selectedDateElem: void 0 !== g.todayDateElem && Q(g.todayDateElem) ? g.todayDateElem: L(t > 0 ? 1 : -1);
          return void 0 === a ? g._input.focus() : n ? void
            function(e, t) {
              for (var n = -1 === e.className.indexOf("Month") ? e.dateObj.getMonth() : g.currentMonth, a = t > 0 ? g.config.showMonths: -1, i = t > 0 ? 1 : -1, o = n - g.currentMonth; o != a; o += i) for (var r = g.daysContainer.children[o], l = n - g.currentMonth === o ? e.$i + t: t < 0 ? r.children.length - 1 : 0, c = r.children.length, d = l; d >= 0 && d < c && d != (t > 0 ? c: -1); d += i) {
                var s = r.children[d];
                if ( - 1 === s.className.indexOf("hidden") && Z(s.dateObj) && Math.abs(e.$i - d) >= Math.abs(t)) return H(s)
              }
              g.changeMonth(i),
                W(L(i), 0)
            } (a, t) : H(a)
        }
        function R(e, t) {
          for (var n = (new Date(e, t, 1).getDay() - g.l10n.firstDayOfWeek + 7) % 7, a = g.utils.getDaysInMonth((t - 1 + 12) % 12), i = g.utils.getDaysInMonth(t), o = window.document.createDocumentFragment(), r = g.config.showMonths > 1, l = r ? "prevMonthDay hidden": "prevMonthDay", c = r ? "nextMonthDay hidden": "nextMonthDay", s = a + 1 - n, u = 0; s <= a; s++, u++) o.appendChild(j(l, new Date(e, t - 1, s), s, u));
          for (s = 1; s <= i; s++, u++) o.appendChild(j("", new Date(e, t, s), s, u));
          for (var f = i + 1; f <= 42 - n && (1 === g.config.showMonths || u % 7 != 0); f++, u++) o.appendChild(j(c, new Date(e, t + 1, f % i), f, u));
          var m = d("div", "dayContainer");
          return m.appendChild(o),
            m
        }
        function B() {
          if (void 0 !== g.daysContainer) {
            s(g.daysContainer),
            g.weekNumbers && s(g.weekNumbers);
            for (var e = document.createDocumentFragment(), t = 0; t < g.config.showMonths; t++) {
              var n = new Date(g.currentYear, g.currentMonth, 1);
              n.setMonth(g.currentMonth + t),
                e.appendChild(R(n.getFullYear(), n.getMonth()))
            }
            g.daysContainer.appendChild(e),
              g.days = g.daysContainer.firstChild,
            "range" === g.config.mode && 1 === g.selectedDates.length && ee()
          }
        }
        function K() {
          var e = d("div", "flatpickr-month"),
            t = window.document.createDocumentFragment(),
            n = d("span", "cur-month"),
            a = u("cur-year", {
              tabindex: "-1"
            }),
            i = a.getElementsByTagName("input")[0];
          i.setAttribute("aria-label", g.l10n.yearAriaLabel),
          g.config.minDate && i.setAttribute("min", g.config.minDate.getFullYear().toString()),
          g.config.maxDate && (i.setAttribute("max", g.config.maxDate.getFullYear().toString()), i.disabled = !!g.config.minDate && g.config.minDate.getFullYear() === g.config.maxDate.getFullYear());
          var o = d("div", "flatpickr-current-month");
          return o.appendChild(n),
            o.appendChild(a),
            t.appendChild(o),
            e.appendChild(t),
            {
              container: e,
              yearElement: i,
              monthElement: n
            }
        }
        function J() {
          s(g.monthNav),
            g.monthNav.appendChild(g.prevMonthNav),
          g.config.showMonths && (g.yearElements = [], g.monthElements = []);
          for (var e = g.config.showMonths; e--;) {
            var t = K();
            g.yearElements.push(t.yearElement),
              g.monthElements.push(t.monthElement),
              g.monthNav.appendChild(t.container)
          }
          g.monthNav.appendChild(g.nextMonthNav)
        }
        function U() {
          g.weekdayContainer ? s(g.weekdayContainer) : g.weekdayContainer = d("div", "flatpickr-weekdays");
          for (var e = g.config.showMonths; e--;) {
            var t = d("div", "flatpickr-weekdaycontainer");
            g.weekdayContainer.appendChild(t)
          }
          return q(),
            g.weekdayContainer
        }
        function q() {
          var e = g.l10n.firstDayOfWeek,
            t = g.l10n.weekdays.shorthand.slice();
          e > 0 && e < t.length && (t = t.splice(e, t.length).concat(t.splice(0, e)));
          for (var n = g.config.showMonths; n--;) g.weekdayContainer.children[n].innerHTML = "\n      <span class='flatpickr-weekday'>\n        " + t.join("</span><span class='flatpickr-weekday'>") + "\n      </span>\n      "
        }
        function $(e, t) {
          void 0 === t && (t = !0);
          var n = t ? e: e - g.currentMonth;
          n < 0 && !0 === g._hidePrevMonthArrow || n > 0 && !0 === g._hideNextMonthArrow || (g.currentMonth += n, (g.currentMonth < 0 || g.currentMonth > 11) && (g.currentYear += g.currentMonth > 11 ? 1 : -1, g.currentMonth = (g.currentMonth + 12) % 12, fe("onYearChange")), B(), fe("onMonthChange"), pe())
        }
        function z(e) {
          return ! (!g.config.appendTo || !g.config.appendTo.contains(e)) || g.calendarContainer.contains(e)
        }
        function G(e) {
          if (g.isOpen && !g.config.inline) {
            var t = "function" == typeof(r = e).composedPath ? r.composedPath()[0] : r.target,
              n = z(t),
              a = t === g.input || t === g.altInput || g.element.contains(t) || e.path && e.path.indexOf && (~e.path.indexOf(g.input) || ~e.path.indexOf(g.altInput)),
              i = "blur" === e.type ? a && e.relatedTarget && !z(e.relatedTarget) : !a && !n && !z(e.relatedTarget),
              o = !g.config.ignoredFocusElements.some(function(e) {
                return e.contains(t)
              });
            i && o && (g.close(), "range" === g.config.mode && 1 === g.selectedDates.length && (g.clear(!1), g.redraw()))
          }
          var r
        }
        function V(e) {
          if (! (!e || g.config.minDate && e < g.config.minDate.getFullYear() || g.config.maxDate && e > g.config.maxDate.getFullYear())) {
            var t = e,
              n = g.currentYear !== t;
            g.currentYear = t || g.currentYear,
              g.config.maxDate && g.currentYear === g.config.maxDate.getFullYear() ? g.currentMonth = Math.min(g.config.maxDate.getMonth(), g.currentMonth) : g.config.minDate && g.currentYear === g.config.minDate.getFullYear() && (g.currentMonth = Math.max(g.config.minDate.getMonth(), g.currentMonth)),
            n && (g.redraw(), fe("onYearChange"))
          }
        }
        function Z(e, t) {
          void 0 === t && (t = !0);
          var n = g.parseDate(e, void 0, t);
          if (g.config.minDate && n && w(n, g.config.minDate, void 0 !== t ? t: !g.minDateHasTime) < 0 || g.config.maxDate && n && w(n, g.config.maxDate, void 0 !== t ? t: !g.maxDateHasTime) > 0) return ! 1;
          if (0 === g.config.enable.length && 0 === g.config.disable.length) return ! 0;
          if (void 0 === n) return ! 1;
          for (var a = g.config.enable.length > 0,
                 i = a ? g.config.enable: g.config.disable, o = 0, r = void 0; o < i.length; o++) {
            if ("function" == typeof(r = i[o]) && r(n)) return a;
            if (r instanceof Date && void 0 !== n && r.getTime() === n.getTime()) return a;
            if ("string" == typeof r && void 0 !== n) {
              var l = g.parseDate(r, void 0, !0);
              return l && l.getTime() === n.getTime() ? a: !a
            }
            if ("object" == typeof r && void 0 !== n && r.from && r.to && n.getTime() >= r.from.getTime() && n.getTime() <= r.to.getTime()) return a
          }
          return ! a
        }
        function Q(e) {
          return void 0 !== g.daysContainer && ( - 1 === e.className.indexOf("hidden") && g.daysContainer.contains(e))
        }
        function X(e) {
          var t = e.target === g._input,
            n = g.config.allowInput,
            a = g.isOpen && (!n || !t),
            i = g.config.inline && t && !n;
          if (13 === e.keyCode && t) {
            if (n) return g.setDate(g._input.value, !0, e.target === g.altInput ? g.config.altFormat: g.config.dateFormat),
              e.target.blur();
            g.open()
          } else if (z(e.target) || a || i) {
            var o = !!g.timeContainer && g.timeContainer.contains(e.target);
            switch (e.keyCode) {
              case 13:
                o ? (x(), le()) : ce(e);
                break;
              case 27:
                e.preventDefault(),
                  le();
                break;
              case 8:
              case 46:
                t && !g.config.allowInput && (e.preventDefault(), g.clear());
                break;
              case 37:
              case 39:
                if (o) g.hourElement && g.hourElement.focus();
                else if (e.preventDefault(), void 0 !== g.daysContainer && (!1 === n || document.activeElement && Q(document.activeElement))) {
                  var r = 39 === e.keyCode ? 1 : -1;
                  e.ctrlKey ? (e.stopPropagation(), $(r), W(L(1), 0)) : W(void 0, r)
                }
                break;
              case 38:
              case 40:
                e.preventDefault();
                var l = 40 === e.keyCode ? 1 : -1;
                g.daysContainer && void 0 !== e.target.$i || e.target === g.input ? e.ctrlKey ? (e.stopPropagation(), V(g.currentYear - l), W(L(1), 0)) : o || W(void 0, 7 * l) : g.config.enableTime && (!o && g.hourElement && g.hourElement.focus(), x(e), g._debouncedChange());
                break;
              case 9:
                if (o) {
                  var c = [g.hourElement, g.minuteElement, g.secondElement, g.amPM].filter(function(e) {
                      return e
                    }),
                    d = c.indexOf(e.target);
                  if ( - 1 !== d) {
                    var s = c[d + (e.shiftKey ? -1 : 1)];
                    void 0 !== s ? (e.preventDefault(), s.focus()) : e.shiftKey && (e.preventDefault(), g._input.focus())
                  }
                }
            }
          }
          if (void 0 !== g.amPM && e.target === g.amPM) switch (e.key) {
            case g.l10n.amPM[0].charAt(0):
            case g.l10n.amPM[0].charAt(0).toLowerCase():
              g.amPM.textContent = g.l10n.amPM[0],
                T(),
                ve();
              break;
            case g.l10n.amPM[1].charAt(0):
            case g.l10n.amPM[1].charAt(0).toLowerCase():
              g.amPM.textContent = g.l10n.amPM[1],
                T(),
                ve()
          }
          fe("onKeyDown", e)
        }
        function ee(e) {
          if (1 === g.selectedDates.length && (!e || e.classList.contains("flatpickr-day") && !e.classList.contains("disabled"))) {
            for (var t = e ? e.dateObj.getTime() : g.days.firstElementChild.dateObj.getTime(), n = g.parseDate(g.selectedDates[0], void 0, !0).getTime(), a = Math.min(t, g.selectedDates[0].getTime()), i = Math.max(t, g.selectedDates[0].getTime()), o = g.daysContainer.lastChild.lastChild.dateObj.getTime(), r = !1, l = 0, c = 0, d = a; d < o; d += C.DAY) Z(new Date(d), !0) || (r = r || d > a && d < i, d < n && (!l || d > l) ? l = d: d > n && (!c || d < c) && (c = d));
            for (var s = 0; s < g.config.showMonths; s++) for (var u = g.daysContainer.children[s], f = g.daysContainer.children[s - 1], m = function(a, i) {
                var o = u.children[a],
                  d = o.dateObj.getTime(),
                  m = l > 0 && d < l || c > 0 && d > c;
                return m ? (o.classList.add("notAllowed"), ["inRange", "startRange", "endRange"].forEach(function(e) {
                  o.classList.remove(e)
                }), "continue") : r && !m ? "continue": (["startRange", "inRange", "endRange", "notAllowed"].forEach(function(e) {
                  o.classList.remove(e)
                }), void(void 0 !== e && (e.classList.add(t < g.selectedDates[0].getTime() ? "startRange": "endRange"), !u.contains(e) && s > 0 && f && f.lastChild.dateObj.getTime() >= d || (n < t && d === n ? o.classList.add("startRange") : n > t && d === n && o.classList.add("endRange"), d >= l && (0 === c || d <= c) && b(d, n, t) && o.classList.add("inRange")))))
              },
                                                                 p = 0, h = u.children.length; p < h; p++) m(p)
          }
        }
        function te() { ! g.isOpen || g.config.static || g.config.inline || oe()
        }
        function ne() {
          g.setDate(void 0 !== g.config.minDate ? new Date(g.config.minDate.getTime()) : new Date, !1),
            I(),
            ve()
        }
        function ae(e) {
          return function(t) {
            var n = g.config["_" + e + "Date"] = g.parseDate(t, g.config.dateFormat),
              a = g.config["_" + ("min" === e ? "max": "min") + "Date"];
            void 0 !== n && (g["min" === e ? "minDateHasTime": "maxDateHasTime"] = n.getHours() > 0 || n.getMinutes() > 0 || n.getSeconds() > 0),
            g.selectedDates && (g.selectedDates = g.selectedDates.filter(function(e) {
              return Z(e)
            }), g.selectedDates.length || "min" !== e || k(n), ve()),
            g.daysContainer && (re(), void 0 !== n ? g.currentYearElement[e] = n.getFullYear().toString() : g.currentYearElement.removeAttribute(e), g.currentYearElement.disabled = !!a && void 0 !== n && a.getFullYear() === n.getFullYear())
          }
        }
        function ie() {
          "object" != typeof g.config.locale && void 0 === E.l10ns[g.config.locale] && g.config.errorHandler(new Error("flatpickr: invalid locale " + g.config.locale)),
            g.l10n = e({},
              E.l10ns.
                default, "object" == typeof g.config.locale ? g.config.locale: "default" !== g.config.locale ? E.l10ns[g.config.locale] : void 0),
            p.K = "(" + g.l10n.amPM[0] + "|" + g.l10n.amPM[1] + "|" + g.l10n.amPM[0].toLowerCase() + "|" + g.l10n.amPM[1].toLowerCase() + ")",
            g.formatDate = v(g),
            g.parseDate = D({
              config: g.config,
              l10n: g.l10n
            })
        }
        function oe(e) {
          if (void 0 !== g.calendarContainer) {
            fe("onPreCalendarPosition");
            var t = e || g._positionElement,
              n = Array.prototype.reduce.call(g.calendarContainer.children,
                function(e, t) {
                  return e + t.offsetHeight
                },
                0),
              a = g.calendarContainer.offsetWidth,
              i = g.config.position.split(" "),
              o = i[0],
              r = i.length > 1 ? i[1] : null,
              l = t.getBoundingClientRect(),
              d = window.innerHeight - l.bottom,
              s = "above" === o || "below" !== o && d < n && l.top > n,
              u = window.pageYOffset + l.top + (s ? -n - 2 : t.offsetHeight + 2);
            if (c(g.calendarContainer, "arrowTop", !s), c(g.calendarContainer, "arrowBottom", s), !g.config.inline) {
              var f = window.pageXOffset + l.left - (null != r && "center" === r ? (a - l.width) / 2 : 0),
                m = window.document.body.offsetWidth - l.right,
                p = f + a > window.document.body.offsetWidth,
                h = m + a > window.document.body.offsetWidth;
              if (c(g.calendarContainer, "rightMost", p), !g.config.static) if (g.calendarContainer.style.top = u + "px", p) if (h) {
                var v = document.styleSheets[0];
                if (void 0 === v) return;
                var D = window.document.body.offsetWidth,
                  w = Math.max(0, D / 2 - a / 2),
                  b = v.cssRules.length,
                  C = "{left:" + l.left + "px;right:auto;}";
                c(g.calendarContainer, "rightMost", !1),
                  c(g.calendarContainer, "centerMost", !0),
                  v.insertRule(".flatpickr-calendar.centerMost:before,.flatpickr-calendar.centerMost:after" + C, b),
                  g.calendarContainer.style.left = w + "px",
                  g.calendarContainer.style.right = "auto"
              } else g.calendarContainer.style.left = "auto",
                g.calendarContainer.style.right = m + "px";
              else g.calendarContainer.style.left = f + "px",
                  g.calendarContainer.style.right = "auto"
            }
          }
        }
        function re() {
          g.config.noCalendar || g.isMobile || (pe(), B())
        }
        function le() {
          g._input.focus(),
            -1 !== window.navigator.userAgent.indexOf("MSIE") || void 0 !== navigator.msMaxTouchPoints ? setTimeout(g.close, 0) : g.close()
        }
        function ce(e) {
          e.preventDefault(),
            e.stopPropagation();
          var t = function e(t, n) {
            return n(t) ? t: t.parentNode ? e(t.parentNode, n) : void 0
          } (e.target,
            function(e) {
              return e.classList && e.classList.contains("flatpickr-day") && !e.classList.contains("disabled") && !e.classList.contains("notAllowed")
            });
          if (void 0 !== t) {
            var n = t,
              a = g.latestSelectedDateObj = new Date(n.dateObj.getTime()),
              i = (a.getMonth() < g.currentMonth || a.getMonth() > g.currentMonth + g.config.showMonths - 1) && "range" !== g.config.mode;
            if (g.selectedDateElem = n, "single" === g.config.mode) g.selectedDates = [a];
            else if ("multiple" === g.config.mode) {
              var o = ge(a);
              o ? g.selectedDates.splice(parseInt(o), 1) : g.selectedDates.push(a)
            } else "range" === g.config.mode && (2 === g.selectedDates.length && g.clear(!1, !1), g.latestSelectedDateObj = a, g.selectedDates.push(a), 0 !== w(a, g.selectedDates[0], !0) && g.selectedDates.sort(function(e, t) {
              return e.getTime() - t.getTime()
            }));
            if (T(), i) {
              var r = g.currentYear !== a.getFullYear();
              g.currentYear = a.getFullYear(),
                g.currentMonth = a.getMonth(),
              r && fe("onYearChange"),
                fe("onMonthChange")
            }
            if (pe(), B(), ve(), g.config.enableTime && setTimeout(function() {
                return g.showTimeInput = !0
              },
              50), i || "range" === g.config.mode || 1 !== g.config.showMonths ? void 0 !== g.selectedDateElem && void 0 === g.hourElement && g.selectedDateElem && g.selectedDateElem.focus() : H(n), void 0 !== g.hourElement && void 0 !== g.hourElement && g.hourElement.focus(), g.config.closeOnSelect) {
              var l = "single" === g.config.mode && !g.config.enableTime,
                c = "range" === g.config.mode && 2 === g.selectedDates.length && !g.config.enableTime; (l || c) && le()
            }
            F()
          }
        }
        g.parseDate = D({
          config: g.config,
          l10n: g.l10n
        }),
          g._handlers = [],
          g._bind = _,
          g._setHoursFromDate = k,
          g._positionCalendar = oe,
          g.changeMonth = $,
          g.changeYear = V,
          g.clear = function(e, t) {
            void 0 === e && (e = !0);
            void 0 === t && (t = !0);
            g.input.value = "",
            void 0 !== g.altInput && (g.altInput.value = "");
            void 0 !== g.mobileInput && (g.mobileInput.value = "");
            g.selectedDates = [],
              g.latestSelectedDateObj = void 0,
            !0 === t && (g.currentYear = g._initialDate.getFullYear(), g.currentMonth = g._initialDate.getMonth());
            g.showTimeInput = !1,
            !0 === g.config.enableTime && I();
            g.redraw(),
            e && fe("onChange")
          },
          g.close = function() {
            g.isOpen = !1,
            g.isMobile || (void 0 !== g.calendarContainer && g.calendarContainer.classList.remove("open"), void 0 !== g._input && g._input.classList.remove("active"));
            fe("onClose")
          },
          g._createElement = d,
          g.destroy = function() {
            void 0 !== g.config && fe("onDestroy");
            for (var e = g._handlers.length; e--;) {
              var t = g._handlers[e];
              t.element.removeEventListener(t.event, t.handler, t.options)
            }
            if (g._handlers = [], g.mobileInput) g.mobileInput.parentNode && g.mobileInput.parentNode.removeChild(g.mobileInput),
              g.mobileInput = void 0;
            else if (g.calendarContainer && g.calendarContainer.parentNode) if (g.config.static && g.calendarContainer.parentNode) {
              var n = g.calendarContainer.parentNode;
              if (n.lastChild && n.removeChild(n.lastChild), n.parentNode) {
                for (; n.firstChild;) n.parentNode.insertBefore(n.firstChild, n);
                n.parentNode.removeChild(n)
              }
            } else g.calendarContainer.parentNode.removeChild(g.calendarContainer);
            g.altInput && (g.input.type = "text", g.altInput.parentNode && g.altInput.parentNode.removeChild(g.altInput), delete g.altInput);
            g.input && (g.input.type = g.input._type, g.input.classList.remove("flatpickr-input"), g.input.removeAttribute("readonly"), g.input.value = ""); ["_showTimeInput", "latestSelectedDateObj", "_hideNextMonthArrow", "_hidePrevMonthArrow", "__hideNextMonthArrow", "__hidePrevMonthArrow", "isMobile", "isOpen", "selectedDateElem", "minDateHasTime", "maxDateHasTime", "days", "daysContainer", "_input", "_positionElement", "innerContainer", "rContainer", "monthNav", "todayDateElem", "calendarContainer", "weekdayContainer", "prevMonthNav", "nextMonthNav", "currentMonthElement", "currentYearElement", "navigationCurrentMonth", "selectedDateElem", "config"].forEach(function(e) {
              try {
                delete g[e]
              } catch(e) {}
            })
          },
          g.isEnabled = Z,
          g.jumpToDate = P,
          g.open = function(e, t) {
            void 0 === t && (t = g._positionElement);
            if (!0 === g.isMobile) return e && (e.preventDefault(), e.target && e.target.blur()),
            void 0 !== g.mobileInput && (g.mobileInput.focus(), g.mobileInput.click()),
              void fe("onOpen");
            if (g._input.disabled || g.config.inline) return;
            var n = g.isOpen;
            g.isOpen = !0,
            n || (g.calendarContainer.classList.add("open"), g._input.classList.add("active"), fe("onOpen"), oe(t)); ! 0 === g.config.enableTime && !0 === g.config.noCalendar && (0 === g.selectedDates.length && ne(), !1 !== g.config.allowInput || void 0 !== e && g.timeContainer.contains(e.relatedTarget) || setTimeout(function() {
                return g.hourElement.select()
              },
              50))
          },
          g.redraw = re,
          g.set = function(e, n) {
            null !== e && "object" == typeof e ? Object.assign(g.config, e) : (g.config[e] = n, void 0 !== de[e] ? de[e].forEach(function(e) {
              return e()
            }) : t.indexOf(e) > -1 && (g.config[e] = l(n)));
            g.redraw(),
              ve(!1)
          },
          g.setDate = function(e, t, n) {
            void 0 === t && (t = !1);
            void 0 === n && (n = g.config.dateFormat);
            if (0 !== e && !e || e instanceof Array && 0 === e.length) return g.clear(t);
            se(e, n),
              g.showTimeInput = g.selectedDates.length > 0,
              g.latestSelectedDateObj = g.selectedDates[0],
              g.redraw(),
              P(),
              k(),
              ve(t),
            t && fe("onChange")
          },
          g.toggle = function(e) {
            if (!0 === g.isOpen) return g.close();
            g.open(e)
          };
        var de = {
          locale: [ie, q],
          showMonths: [J, y, U]
        };
        function se(e, t) {
          var n = [];
          if (e instanceof Array) n = e.map(function(e) {
            return g.parseDate(e, t)
          });
          else if (e instanceof Date || "number" == typeof e) n = [g.parseDate(e, t)];
          else if ("string" == typeof e) switch (g.config.mode) {
            case "single":
            case "time":
              n = [g.parseDate(e, t)];
              break;
            case "multiple":
              n = e.split(g.config.conjunction).map(function(e) {
                return g.parseDate(e, t)
              });
              break;
            case "range":
              n = e.split(g.l10n.rangeSeparator).map(function(e) {
                return g.parseDate(e, t)
              })
          } else g.config.errorHandler(new Error("Invalid date supplied: " + JSON.stringify(e)));
          g.selectedDates = n.filter(function(e) {
            return e instanceof Date && Z(e, !1)
          }),
          "range" === g.config.mode && g.selectedDates.sort(function(e, t) {
            return e.getTime() - t.getTime()
          })
        }
        function ue(e) {
          return e.slice().map(function(e) {
            return "string" == typeof e || "number" == typeof e || e instanceof Date ? g.parseDate(e, void 0, !0) : e && "object" == typeof e && e.from && e.to ? {
              from: g.parseDate(e.from, void 0),
              to: g.parseDate(e.to, void 0)
            }: e
          }).filter(function(e) {
            return e
          })
        }
        function fe(e, t) {
          if (void 0 !== g.config) {
            var n = g.config[e];
            if (void 0 !== n && n.length > 0) for (var a = 0; n[a] && a < n.length; a++) n[a](g.selectedDates, g.input.value, g, t);
            "onChange" === e && (g.input.dispatchEvent(me("change")), g.input.dispatchEvent(me("input")))
          }
        }
        function me(e) {
          var t = document.createEvent("Event");
          return t.initEvent(e, !0, !0),
            t
        }
        function ge(e) {
          for (var t = 0; t < g.selectedDates.length; t++) if (0 === w(g.selectedDates[t], e)) return "" + t;
          return ! 1
        }
        function pe() {
          g.config.noCalendar || g.isMobile || !g.monthNav || (g.yearElements.forEach(function(e, t) {
            var n = new Date(g.currentYear, g.currentMonth, 1);
            n.setMonth(g.currentMonth + t),
              g.monthElements[t].textContent = m(n.getMonth(), g.config.shorthandCurrentMonth, g.l10n) + " ",
              e.value = n.getFullYear().toString()
          }), g._hidePrevMonthArrow = void 0 !== g.config.minDate && (g.currentYear === g.config.minDate.getFullYear() ? g.currentMonth <= g.config.minDate.getMonth() : g.currentYear < g.config.minDate.getFullYear()), g._hideNextMonthArrow = void 0 !== g.config.maxDate && (g.currentYear === g.config.maxDate.getFullYear() ? g.currentMonth + 1 > g.config.maxDate.getMonth() : g.currentYear > g.config.maxDate.getFullYear()))
        }
        function he(e) {
          return g.selectedDates.map(function(t) {
            return g.formatDate(t, e)
          }).filter(function(e, t, n) {
            return "range" !== g.config.mode || g.config.enableTime || n.indexOf(e) === t
          }).join("range" !== g.config.mode ? g.config.conjunction: g.l10n.rangeSeparator)
        }
        function ve(e) {
          if (void 0 === e && (e = !0), 0 === g.selectedDates.length) return g.clear(e);
          void 0 !== g.mobileInput && g.mobileFormatStr && (g.mobileInput.value = void 0 !== g.latestSelectedDateObj ? g.formatDate(g.latestSelectedDateObj, g.mobileFormatStr) : ""),
            g.input.value = he(g.config.dateFormat),
          void 0 !== g.altInput && (g.altInput.value = he(g.config.altFormat)),
          !1 !== e && fe("onValueUpdate")
        }
        function De(e) {
          e.preventDefault();
          var t = g.prevMonthNav.contains(e.target),
            n = g.nextMonthNav.contains(e.target);
          t || n ? $(t ? -1 : 1) : g.yearElements.indexOf(e.target) >= 0 ? e.target.select() : e.target.classList.contains("arrowUp") ? g.changeYear(g.currentYear + 1) : e.target.classList.contains("arrowDown") && g.changeYear(g.currentYear - 1)
        }
        return function() {
          g.element = g.input = n,
            g.isOpen = !1,
            function() {
              var a = ["wrap", "weekNumbers", "allowInput", "clickOpens", "time_24hr", "enableTime", "noCalendar", "altInput", "shorthandCurrentMonth", "inline", "static", "enableSeconds", "disableMobile"],
                i = e({},
                  f, JSON.parse(JSON.stringify(n.dataset || {}))),
                o = {};
              g.config.parseDate = i.parseDate,
                g.config.formatDate = i.formatDate,
                Object.defineProperty(g.config, "enable", {
                  get: function() {
                    return g.config._enable
                  },
                  set: function(e) {
                    g.config._enable = ue(e)
                  }
                }),
                Object.defineProperty(g.config, "disable", {
                  get: function() {
                    return g.config._disable
                  },
                  set: function(e) {
                    g.config._disable = ue(e)
                  }
                });
              var r = "time" === i.mode;
              i.dateFormat || !i.enableTime && !r || (o.dateFormat = i.noCalendar || r ? "H:i" + (i.enableSeconds ? ":S": "") : E.defaultConfig.dateFormat + " H:i" + (i.enableSeconds ? ":S": "")),
              i.altInput && (i.enableTime || r) && !i.altFormat && (o.altFormat = i.noCalendar || r ? "h:i" + (i.enableSeconds ? ":S K": " K") : E.defaultConfig.altFormat + " h:i" + (i.enableSeconds ? ":S": "") + " K"),
                Object.defineProperty(g.config, "minDate", {
                  get: function() {
                    return g.config._minDate
                  },
                  set: ae("min")
                }),
                Object.defineProperty(g.config, "maxDate", {
                  get: function() {
                    return g.config._maxDate
                  },
                  set: ae("max")
                });
              var c = function(e) {
                return function(t) {
                  g.config["min" === e ? "_minTime": "_maxTime"] = g.parseDate(t, "H:i")
                }
              };
              Object.defineProperty(g.config, "minTime", {
                get: function() {
                  return g.config._minTime
                },
                set: c("min")
              }),
                Object.defineProperty(g.config, "maxTime", {
                  get: function() {
                    return g.config._maxTime
                  },
                  set: c("max")
                }),
              "time" === i.mode && (g.config.noCalendar = !0, g.config.enableTime = !0),
                Object.assign(g.config, o, i);
              for (var d = 0; d < a.length; d++) g.config[a[d]] = !0 === g.config[a[d]] || "true" === g.config[a[d]];
              t.filter(function(e) {
                return void 0 !== g.config[e]
              }).forEach(function(e) {
                g.config[e] = l(g.config[e] || []).map(h)
              }),
                g.isMobile = !g.config.disableMobile && !g.config.inline && "single" === g.config.mode && !g.config.disable.length && !g.config.enable.length && !g.config.weekNumbers && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
              for (var d = 0; d < g.config.plugins.length; d++) {
                var s = g.config.plugins[d](g) || {};
                for (var u in s) t.indexOf(u) > -1 ? g.config[u] = l(s[u]).map(h).concat(g.config[u]) : void 0 === i[u] && (g.config[u] = s[u])
              }
              fe("onParseConfig")
            } (),
            ie(),
            g.input = g.config.wrap ? n.querySelector("[data-input]") : n,
            g.input ? (g.input._type = g.input.type, g.input.type = "text", g.input.classList.add("flatpickr-input"), g._input = g.input, g.config.altInput && (g.altInput = d(g.input.nodeName, g.input.className + " " + g.config.altInputClass), g._input = g.altInput, g.altInput.placeholder = g.input.placeholder, g.altInput.disabled = g.input.disabled, g.altInput.required = g.input.required, g.altInput.tabIndex = g.input.tabIndex, g.altInput.type = "text", g.input.setAttribute("type", "hidden"), !g.config.static && g.input.parentNode && g.input.parentNode.insertBefore(g.altInput, g.input.nextSibling)), g.config.allowInput || g._input.setAttribute("readonly", "readonly"), g._positionElement = g.config.positionElement || g._input) : g.config.errorHandler(new Error("Invalid input element specified")),
            function() {
              g.selectedDates = [],
                g.now = g.parseDate(g.config.now) || new Date;
              var e = g.config.defaultDate || ("INPUT" !== g.input.nodeName && "TEXTAREA" !== g.input.nodeName || !g.input.placeholder || g.input.value !== g.input.placeholder ? g.input.value: null);
              e && se(e, g.config.dateFormat),
                g._initialDate = g.selectedDates.length > 0 ? g.selectedDates[0] : g.config.minDate && g.config.minDate.getTime() > g.now.getTime() ? g.config.minDate: g.config.maxDate && g.config.maxDate.getTime() < g.now.getTime() ? g.config.maxDate: g.now,
                g.currentYear = g._initialDate.getFullYear(),
                g.currentMonth = g._initialDate.getMonth(),
              g.selectedDates.length > 0 && (g.latestSelectedDateObj = g.selectedDates[0]),
              void 0 !== g.config.minTime && (g.config.minTime = g.parseDate(g.config.minTime, "H:i")),
              void 0 !== g.config.maxTime && (g.config.maxTime = g.parseDate(g.config.maxTime, "H:i")),
                g.minDateHasTime = !!g.config.minDate && (g.config.minDate.getHours() > 0 || g.config.minDate.getMinutes() > 0 || g.config.minDate.getSeconds() > 0),
                g.maxDateHasTime = !!g.config.maxDate && (g.config.maxDate.getHours() > 0 || g.config.maxDate.getMinutes() > 0 || g.config.maxDate.getSeconds() > 0),
                Object.defineProperty(g, "showTimeInput", {
                  get: function() {
                    return g._showTimeInput
                  },
                  set: function(e) {
                    g._showTimeInput = e,
                    g.calendarContainer && c(g.calendarContainer, "showTimeInput", e),
                    g.isOpen && oe()
                  }
                })
            } (),
            g.utils = {
              getDaysInMonth: function(e, t) {
                return void 0 === e && (e = g.currentMonth),
                void 0 === t && (t = g.currentYear),
                  1 === e && (t % 4 == 0 && t % 100 != 0 || t % 400 == 0) ? 29 : g.l10n.daysInMonth[e]
              }
            },
          g.isMobile ||
          function() {
            var e = window.document.createDocumentFragment();
            if (g.calendarContainer = d("div", "flatpickr-calendar"), g.calendarContainer.tabIndex = -1, !g.config.noCalendar) {
              if (e.appendChild((g.monthNav = d("div", "flatpickr-months"), g.yearElements = [], g.monthElements = [], g.prevMonthNav = d("span", "flatpickr-prev-month"), g.prevMonthNav.innerHTML = g.config.prevArrow, g.nextMonthNav = d("span", "flatpickr-next-month"), g.nextMonthNav.innerHTML = g.config.nextArrow, J(), Object.defineProperty(g, "_hidePrevMonthArrow", {
                get: function() {
                  return g.__hidePrevMonthArrow
                },
                set: function(e) {
                  g.__hidePrevMonthArrow !== e && (c(g.prevMonthNav, "disabled", e), g.__hidePrevMonthArrow = e)
                }
              }), Object.defineProperty(g, "_hideNextMonthArrow", {
                get: function() {
                  return g.__hideNextMonthArrow
                },
                set: function(e) {
                  g.__hideNextMonthArrow !== e && (c(g.nextMonthNav, "disabled", e), g.__hideNextMonthArrow = e)
                }
              }), g.currentYearElement = g.yearElements[0], pe(), g.monthNav)), g.innerContainer = d("div", "flatpickr-innerContainer"), g.config.weekNumbers) {
                var t = function() {
                    g.calendarContainer.classList.add("hasWeeks");
                    var e = d("div", "flatpickr-weekwrapper");
                    e.appendChild(d("span", "flatpickr-weekday", g.l10n.weekAbbreviation));
                    var t = d("div", "flatpickr-weeks");
                    return e.appendChild(t),
                      {
                        weekWrapper: e,
                        weekNumbers: t
                      }
                  } (),
                  n = t.weekWrapper,
                  a = t.weekNumbers;
                g.innerContainer.appendChild(n),
                  g.weekNumbers = a,
                  g.weekWrapper = n
              }
              g.rContainer = d("div", "flatpickr-rContainer"),
                g.rContainer.appendChild(U()),
              g.daysContainer || (g.daysContainer = d("div", "flatpickr-days"), g.daysContainer.tabIndex = -1),
                B(),
                g.rContainer.appendChild(g.daysContainer),
                g.innerContainer.appendChild(g.rContainer),
                e.appendChild(g.innerContainer)
            }
            g.config.enableTime && e.appendChild(function() {
              g.calendarContainer.classList.add("hasTime"),
              g.config.noCalendar && g.calendarContainer.classList.add("noCalendar"),
                g.timeContainer = d("div", "flatpickr-time"),
                g.timeContainer.tabIndex = -1;
              var e = d("span", "flatpickr-time-separator", ":"),
                t = u("flatpickr-hour");
              g.hourElement = t.getElementsByTagName("input")[0];
              var n = u("flatpickr-minute");
              if (g.minuteElement = n.getElementsByTagName("input")[0], g.hourElement.tabIndex = g.minuteElement.tabIndex = -1, g.hourElement.value = i(g.latestSelectedDateObj ? g.latestSelectedDateObj.getHours() : g.config.time_24hr ? g.config.defaultHour: function(e) {
                switch (e % 24) {
                  case 0:
                  case 12:
                    return 12;
                  default:
                    return e % 12
                }
              } (g.config.defaultHour)), g.minuteElement.value = i(g.latestSelectedDateObj ? g.latestSelectedDateObj.getMinutes() : g.config.defaultMinute), g.hourElement.setAttribute("step", g.config.hourIncrement.toString()), g.minuteElement.setAttribute("step", g.config.minuteIncrement.toString()), g.hourElement.setAttribute("min", g.config.time_24hr ? "0": "1"), g.hourElement.setAttribute("max", g.config.time_24hr ? "23": "12"), g.minuteElement.setAttribute("min", "0"), g.minuteElement.setAttribute("max", "59"), g.timeContainer.appendChild(t), g.timeContainer.appendChild(e), g.timeContainer.appendChild(n), g.config.time_24hr && g.timeContainer.classList.add("time24hr"), g.config.enableSeconds) {
                g.timeContainer.classList.add("hasSeconds");
                var a = u("flatpickr-second");
                g.secondElement = a.getElementsByTagName("input")[0],
                  g.secondElement.value = i(g.latestSelectedDateObj ? g.latestSelectedDateObj.getSeconds() : g.config.defaultSeconds),
                  g.secondElement.setAttribute("step", g.minuteElement.getAttribute("step")),
                  g.secondElement.setAttribute("min", "0"),
                  g.secondElement.setAttribute("max", "59"),
                  g.timeContainer.appendChild(d("span", "flatpickr-time-separator", ":")),
                  g.timeContainer.appendChild(a)
              }
              return g.config.time_24hr || (g.amPM = d("span", "flatpickr-am-pm", g.l10n.amPM[o((g.latestSelectedDateObj ? g.hourElement.value: g.config.defaultHour) > 11)]), g.amPM.title = g.l10n.toggleTitle, g.amPM.tabIndex = -1, g.timeContainer.appendChild(g.amPM)),
                g.timeContainer
            } ()),
              c(g.calendarContainer, "rangeMode", "range" === g.config.mode),
              c(g.calendarContainer, "animate", !0 === g.config.animate),
              c(g.calendarContainer, "multiMonth", g.config.showMonths > 1),
              g.calendarContainer.appendChild(e);
            var r = void 0 !== g.config.appendTo && void 0 !== g.config.appendTo.nodeType;
            if ((g.config.inline || g.config.static) && (g.calendarContainer.classList.add(g.config.inline ? "inline": "static"), g.config.inline && (!r && g.element.parentNode ? g.element.parentNode.insertBefore(g.calendarContainer, g._input.nextSibling) : void 0 !== g.config.appendTo && g.config.appendTo.appendChild(g.calendarContainer)), g.config.static)) {
              var l = d("div", "flatpickr-wrapper");
              g.element.parentNode && g.element.parentNode.insertBefore(l, g.element),
                l.appendChild(g.element),
              g.altInput && l.appendChild(g.altInput),
                l.appendChild(g.calendarContainer)
            }
            g.config.static || g.config.inline || (void 0 !== g.config.appendTo ? g.config.appendTo: window.document.body).appendChild(g.calendarContainer)
          } (),
            function() {
              if (g.config.wrap && ["open", "close", "toggle", "clear"].forEach(function(e) {
                Array.prototype.forEach.call(g.element.querySelectorAll("[data-" + e + "]"),
                  function(t) {
                    return _(t, "click", g[e])
                  })
              }), g.isMobile) !
                function() {
                  var e = g.config.enableTime ? g.config.noCalendar ? "time": "datetime-local": "date";
                  g.mobileInput = d("input", g.input.className + " flatpickr-mobile"),
                    g.mobileInput.step = g.input.getAttribute("step") || "any",
                    g.mobileInput.tabIndex = 1,
                    g.mobileInput.type = e,
                    g.mobileInput.disabled = g.input.disabled,
                    g.mobileInput.required = g.input.required,
                    g.mobileInput.placeholder = g.input.placeholder,
                    g.mobileFormatStr = "datetime-local" === e ? "Y-m-d\\TH:i:S": "date" === e ? "Y-m-d": "H:i:S",
                  g.selectedDates.length > 0 && (g.mobileInput.defaultValue = g.mobileInput.value = g.formatDate(g.selectedDates[0], g.mobileFormatStr)),
                  g.config.minDate && (g.mobileInput.min = g.formatDate(g.config.minDate, "Y-m-d")),
                  g.config.maxDate && (g.mobileInput.max = g.formatDate(g.config.maxDate, "Y-m-d")),
                    g.input.type = "hidden",
                  void 0 !== g.altInput && (g.altInput.type = "hidden");
                  try {
                    g.input.parentNode && g.input.parentNode.insertBefore(g.mobileInput, g.input.nextSibling)
                  } catch(e) {}
                  _(g.mobileInput, "change",
                    function(e) {
                      g.setDate(e.target.value, !1, g.mobileFormatStr),
                        fe("onChange"),
                        fe("onClose")
                    })
                } ();
              else {
                var e = r(te, 50);
                g._debouncedChange = r(F, M),
                g.daysContainer && !/iPhone|iPad|iPod/i.test(navigator.userAgent) && _(g.daysContainer, "mouseover",
                  function(e) {
                    "range" === g.config.mode && ee(e.target)
                  }),
                  _(window.document.body, "keydown", X),
                g.config.static || _(g._input, "keydown", X),
                g.config.inline || g.config.static || _(window, "resize", e),
                  void 0 !== window.ontouchstart ? _(window.document, "click", G) : _(window.document, "mousedown", N(G)),
                  _(window.document, "focus", G, {
                    capture: !0
                  }),
                !0 === g.config.clickOpens && (_(g._input, "focus", g.open), _(g._input, "mousedown", N(g.open))),
                void 0 !== g.daysContainer && (_(g.monthNav, "mousedown", N(De)), _(g.monthNav, ["keyup", "increment"], S), _(g.daysContainer, "mousedown", N(ce))),
                void 0 !== g.timeContainer && void 0 !== g.minuteElement && void 0 !== g.hourElement && (_(g.timeContainer, ["increment"], x), _(g.timeContainer, "blur", x, {
                  capture: !0
                }), _(g.timeContainer, "mousedown", N(A)), _([g.hourElement, g.minuteElement], ["focus", "click"],
                  function(e) {
                    return e.target.select()
                  }), void 0 !== g.secondElement && _(g.secondElement, "focus",
                  function() {
                    return g.secondElement && g.secondElement.select()
                  }), void 0 !== g.amPM && _(g.amPM, "mousedown", N(function(e) {
                  x(e),
                    F()
                })))
              }
            } (),
          (g.selectedDates.length || g.config.noCalendar) && (g.config.enableTime && k(g.config.noCalendar ? g.latestSelectedDateObj || g.config.minDate: void 0), ve(!1)),
            y(),
            g.showTimeInput = g.selectedDates.length > 0 || g.config.noCalendar;
          var a = /^((?!chrome|android).)*safari/i.test(navigator.userAgent); ! g.isMobile && a && oe(),
            fe("onReady")
        } (),
          g
      }
      function x(e, t) {
        for (var n = Array.prototype.slice.call(e).filter(function(e) {
          return e instanceof HTMLElement
        }), a = [], i = 0; i < n.length; i++) {
          var o = n[i];
          try {
            if (null !== o.getAttribute("data-fp-omit")) continue;
            void 0 !== o._flatpickr && (o._flatpickr.destroy(), o._flatpickr = void 0),
              o._flatpickr = y(o, t || {}),
              a.push(o._flatpickr)
          } catch(e) {
            console.error(e)
          }
        }
        return 1 === a.length ? a[0] : a
      }
      "undefined" != typeof HTMLElement && (HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function(e) {
        return x(this, e)
      },
        HTMLElement.prototype.flatpickr = function(e) {
          return x([this], e)
        });
      var E = function(e, t) {
        return "string" == typeof e ? x(window.document.querySelectorAll(e), t) : e instanceof Node ? x([e], t) : x(e, t)
      };
      E.defaultConfig = n,
        E.l10ns = {
          en: e({},
            a),
          default:
            e({},
              a)
        },
        E.localize = function(t) {
          E.l10ns.
            default = e({},
            E.l10ns.
              default, t)
        },
        E.setDefaults = function(t) {
          E.defaultConfig = e({},
            E.defaultConfig, t)
        },
        E.parseDate = D({}),
        E.formatDate = v({}),
        E.compareDates = w,
      "undefined" != typeof jQuery && (jQuery.fn.flatpickr = function(e) {
        return x(this, e)
      }),
        Date.prototype.fp_incr = function(e) {
          return new Date(this.getFullYear(), this.getMonth(), this.getDate() + ("string" == typeof e ? parseInt(e, 10) : e))
        },
      "undefined" != typeof window && (window.flatpickr = E)
    } ();
  function InitializeMultipleChoiceField() {
    var choices = document.getElementsByClassName("sa-radio-container");
    for (var i = 0; i < choices.length; i++) {
      var choice = choices[i];
      choice.onclick = function(data) {
        var radio = data.currentTarget.getElementsByClassName("sa-radioBtn")[0];
        var borderColor = data.currentTarget.getAttribute("data-color");
        var divName = data.currentTarget.getAttribute("data-name");
        getBtns(radio, borderColor, divName);
      };
    }
    function getBtns(currentTarget, borderColor, divName) {
      var currentId = currentTarget.id;
      var x = document.getElementsByClassName("sa-radio-container");
      for (var i = 0; i < x.length; i++) {
        var div = x[i];
        if (divName === div.getAttribute("data-name")) {
          var label = div.getElementsByClassName("sa-radio")[0];
          var span = label.getElementsByClassName("sa-radio-checkmark")[0];
          if (label.getAttribute("for") === currentId) {
            label.style.borderColor = borderColor;
            span.style.backgroundColor = borderColor;
          } else {
            label.style.borderColor = "#777777";
            span.style.backgroundColor = "#777777";
            span.style.display = "";
          }
        }
      }
    }
  }
  sa.form.init.push(InitializeMultipleChoiceField);
  var saFormUploads = saFormUploads || {
    Pending: []
  };
  function GetPageElementById(id) {
    return document.querySelector('.sa-form-page[data-index="' + id + '"]');
  }
  function InitializePaging() {
    let viewState = document.createElement('input');
    viewState.id = 'saFormData';
    viewState.setAttribute('type', 'hidden');
    let saFormData = JSON.stringify({
      pages: []
    });
    viewState.value = (saFormData);
    document.body.appendChild(viewState);
    let firstPageIndex = document.querySelectorAll('.sa-form-page')[0].getAttribute('data-index');
    sessionStorage.setItem("navTrail", JSON.stringify([]));
    sessionStorage.setItem("currentPageId", firstPageIndex);
    var previousButtons = document.getElementsByClassName("sa-form-page-prev");
    for (var i = 0; i < previousButtons.length; i++) {
      var el = previousButtons[i];
      el.onclick = function() {
        if (saFormUploads !== undefined && saFormUploads.Pending.length > 0) return;
        var isDisabled = el.classList.contains('disabled');
        if (isDisabled) return;
        RemovePageFromData();
        var currentPageId = sessionStorage.getItem("currentPageId");
        var currentPageElement = GetPageElementById(currentPageId);
        currentPageElement.style.display = "none";
        var trail = JSON.parse(sessionStorage.getItem("navTrail"));
        if (trail.length === 0) return;
        var previousPageIndex = trail.pop();
        var pageElement = GetPageElementById(previousPageIndex);
        pageElement.style.display = "block";
        var docTop = document.querySelector(".sa-form");
        window.scrollTo(window.scrollX, docTop.offsetTop);
        sa.utils.fireLayoutChangedEvent();
        sessionStorage.setItem("navTrail", JSON.stringify(trail));
        sessionStorage.setItem("currentPageId", previousPageIndex);
      };
    }
    var nextButtons = document.getElementsByClassName("sa-form-page-next");
    for (var i = 0; i < nextButtons.length; i++) {
      var el = nextButtons[i];
      el.onclick = function() {
        if (saFormUploads !== undefined && saFormUploads.Pending.length > 0) return;
        var isDisabled = el.classList.contains('disabled');
        if (isDisabled) return;
        var currentPageId = sessionStorage.getItem("currentPageId");
        var currentPageElement = GetPageElementById(currentPageId);
        if (ValidateFields(currentPageElement)) {
          AddPageFormData(currentPageElement);
          currentPageElement.style.display = "none";
          var nextPageId = currentPageElement.getAttribute("data-next-page");
          var nextPageElement = GetPageElementById(nextPageId);
          nextPageElement.style.display = "block";
          var docTop = document.querySelector(".sa-form");
          window.scrollTo(window.scrollX, docTop.offsetTop);
          sa.utils.fireLayoutChangedEvent();
          var trail = JSON.parse(sessionStorage.getItem("navTrail"));
          trail.push(currentPageId);
          sessionStorage.setItem("navTrail", JSON.stringify(trail));
          sessionStorage.setItem("currentPageId", nextPageId);
        }
      };
    }
  }
  function RemovePageFromData() {
    let viewState = document.querySelector('#saFormData');
    let formData = JSON.parse(viewState.value);
    formData.pages.pop();
    viewState.value = JSON.stringify(formData);
  }
  function AddPageFormData(page) {
    let viewState = document.querySelector('#saFormData');
    let pageIndex = parseInt(page.getAttribute("data-index"));
    let formData = JSON.parse(viewState.value);
    if (formData.pages.findIndex(x => x.page === pageIndex) < 0) {
      formData.pages.push(new PageModel(pageIndex, page));
      viewState.value = JSON.stringify(formData);
    }
  }
  function PageModel(pageIndex, pageElement) {
    let self = this;
    self.page = pageIndex;
    self.fields = [];
    self.GetFieldValues = function() {
      const inputs = pageElement.querySelectorAll("[data-fieldtype]");
      if (window.saUploadFiles === null) window.saUploadFiles = [];
      for (let i = 0; i < inputs.length; i++) {
        const input = inputs[i];
        const fieldId = parseInt(input.getAttribute("data-field"));
        switch (input.getAttribute("data-fieldtype")) {
          case "longText":
            self.fields.push({
              fieldId:
              fieldId,
              value: input.querySelector("textarea").value
            });
            break;
          case "dropdown":
            self.fields.push({
              fieldId:
              fieldId,
              value: input.querySelector("select").value
            });
            break;
          case "radio":
          case "rating":
          {
            let value = '';
            const radio = input.querySelector("input:checked");
            if (radio !== undefined && radio !== null && radio.value) value = radio.value;
            self.fields.push({
              fieldId: fieldId,
              value: value
            });
          }
            break;
          case "checklist":
          {
            const fieldValues = [];
            const checkedItems = input.querySelectorAll("input:checked") ? input.querySelectorAll("input:checked") : [];
            for (let j = 0; j < checkedItems.length; j++) {
              fieldValues.push(checkedItems[j].value);
            }
            self.fields.push({
              fieldId: fieldId,
              values: fieldValues
            });
          }
            break;
          case "review":
          {
            const reviewValue = input.querySelector("input:checked") ? input.querySelector("input:checked").value: 0;
            self.fields.push({
              fieldId: fieldId,
              values: [reviewValue, input.querySelector("textarea").value]
            });
          }
            break;
          case "attachment":
          {
            if (saFormUploads === undefined || saFormUploads === null || saFormUploads.Uploads === undefined || saFormUploads.Uploads === null || saFormUploads.Uploads.length === 0) break;
            const model = saFormUploads.Uploads.find(x => x.FieldId == fieldId);
            if (model == null) break;
            const uploads = model.Uploads;
            const fieldValues = [];
            for (let j = 0; j < uploads.length; j++) fieldValues.push(JSON.stringify(uploads[j].data));
            self.fields.push({
              fieldId: fieldId,
              values: fieldValues
            });
          }
            break;
          case "ccupdate":
          {
            let value = input.getAttribute('data-ccresult');
            self.fields.push({
              fieldId: fieldId,
              value: value
            });
          }
            break;
          case "hidden":
            self.fields.push({
              fieldId:
              fieldId,
              value: input.value
            });
            break;
          default:
            self.fields.push({
              fieldId:
              fieldId,
              value: input.querySelector("input").value
            });
            break;
        }
      }
    };
    self.GetFieldValues(pageElement);
  }
  sa.form.init.push(InitializePaging);
}















customElements.define('maintenance-lead-form-g', MaintenanceLeadFormG);
go();
