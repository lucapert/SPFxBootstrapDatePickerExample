import * as React from 'react';
import styles from './Datepicker.module.scss';
import { IDatepickerProps } from './IDatepickerProps';
import { SPComponentLoader } from '@microsoft/sp-loader'; 

import * as $ from 'jquery';
import 'bootstrap';
import 'bootstrap-datepicker';



export default class Datepicker extends React.Component < IDatepickerProps, {} > {
  
componentDidMount(){
  SPComponentLoader.loadCss('https://maxcdn.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css');
  SPComponentLoader.loadCss('https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.9.0/css/bootstrap-datepicker.min.css');
  const calendarComponent: JQuery = $(`.input-group.date`);  
  // debugger;
  // (calendarComponent as any).datepicker({});
  // debugger;

    (calendarComponent as any).datepicker({
    });
}

  public render(): React.ReactElement<IDatepickerProps> {
    return(
      <div className="input-group date">
        <input type="text" className="form-control" /><span className="input-group-addon"><i className="glyphicon glyphicon-th"></i></span>
      </div>
    );
  }
}
