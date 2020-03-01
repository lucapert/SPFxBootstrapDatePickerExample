import * as React from 'react';
import * as ReactDom from 'react-dom';

import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'DatepickerWebPartStrings';
import Datepicker from './components/Datepicker';
import { IDatepickerProps } from './components/IDatepickerProps';



export interface IDatepickerWebPartProps {
  description: string;
}

export default class DatepickerWebPart extends BaseClientSideWebPart<IDatepickerWebPartProps> {

  public render(): void {
    
    const element: React.ReactElement<IDatepickerProps > = React.createElement(
      Datepicker,
      {
        description: this.properties.description
      }
    )
    ReactDom.render(element, this.domElement);
  }
public onInit(): Promise<void>
{
  return Promise.resolve();
}

private PageLoad():void{  
    
}

protected onDispose(): void {
  ReactDom.unmountComponentAtNode(this.domElement);
}

protected get dataVersion(): Version {
  return Version.parse('1.0');
}

protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
  return {
    pages: [
      {
        header: {
          description: strings.PropertyPaneDescription
        },
        groups: [
          {
            groupName: strings.BasicGroupName,
            groupFields: [
              PropertyPaneTextField('description', {
                label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}import { SPComponentLoader } from '@microsoft/sp-loader';
