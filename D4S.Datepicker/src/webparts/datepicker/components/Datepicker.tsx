import * as React from 'react';
import styles from './Datepicker.module.scss';
import { IDatepickerProps } from './IDatepickerProps';
import { SPComponentLoader } from '@microsoft/sp-loader'; 

import { initializeIcons } from '@uifabric/icons';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import * as $ from 'jquery';
import 'bootstrap';
import 'bootstrap-datepicker';

export default class Datepicker extends React.Component < IDatepickerProps, {} > {
  
componentDidMount(){
  SPComponentLoader.loadCss('https://maxcdn.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css');
  SPComponentLoader.loadCss('https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.9.0/css/bootstrap-datepicker.min.css');
  const calendarComponent: JQuery = $(`.input-group.date`);
  
  //default datepicker
  // (calendarComponent as any).datepicker({});
  //datepicker test   
  var active_dates = ["27/2/2015","21/5/2020"];
  (calendarComponent as any).datepicker({
    format: "dd/mm/yyyy",
    autoclose: true,
    todayHighlight: true,
    
    beforeShowDay: function(date){
        var d = date;
        var curr_date = d.getDate();
        var curr_month = d.getMonth() + 1; //Months are zero based
        var curr_year = d.getFullYear();
        var formattedDate = curr_date + "/" + curr_month + "/" + curr_year
        if ($.inArray(formattedDate, active_dates) != -1){
          return {
             classes: styles.activeClass
          };
        }
     return;
    }
  }); 
  // Your CSS as text
  var dinamicStyle = `
  .datepicker table tr td.old,
  .datepicker table tr td.new {
    height: 0;
    line-height: 0;
    visibility: hidden;
  }
  `
  var styleSheet = document.createElement("style")
  styleSheet.type = "text/css"
  styleSheet.innerText = dinamicStyle
  document.head.appendChild(styleSheet)
}

public hideOldCalendarDates(){
  let elements = document.querySelectorAll(".datepicker table tr td.old") as any as Array<HTMLElement>;
    elements.forEach((elem) => {
      elem.style.display = "none";
    });
}

  public render(): React.ReactElement<IDatepickerProps> {
    return(
      <div className="input-group date" id="custom-datepicker">
        <input type="text" className={[styles.customFormControl, "form-control"].join(" ")} /><span className="input-group-addon"><Icon iconName="Calendar"/></span>
      </div>
    );
  }
}
