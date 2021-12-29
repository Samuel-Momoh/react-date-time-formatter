# react-date-time-formatter

> A simple libray to get actual date and time in relation to a formal date, this is library is useful in Message app, notifications and Chat center app. It provides you with the time diffirence to the bearest seconds. It also handles special function like formating date and time to a more readable and user friendly pattern

[![NPM](https://img.shields.io/npm/v/react-date-time-formatter.svg)](https://www.npmjs.com/package/react-date-time-formatter) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-date-time-formatter
```

## Usage
This library export serveral useful package each design for it's purpose, The library accept the three basic date and time format which are;
1.  ISO Date
2.  Short Date
3.  Long Date
All of the different Date format are accept and will return a result.

## Formater 
Formater collects data object containing date and returns the differences with the current date, this element format the date in time ago in respect to the current time and date by default, this can be alter by passing value to offSetIn or a custom function can be pass to alter the result. See props table for more info

```jsx
import React from 'react'

import {Formater} from 'react-date-time-formatter'

const = App () =>{
const data = [] // Must be an Array of objct
  return (
  <Formater 
  objKey='date' // objKey is required to fetch the date from dataObj if not provided will return defalut of date
  dataObj={data}
  renderItem={props =>  <Card data={props} key={props.data.index}/>} // Element to render the date return
  />
  );

}

```
That is it, Simple right ? Let get it more twist say i want to render my own result in my own styling not the default, for this example i want my date just like Github date references on repository.

```jsx
import React from 'react'

import {Formater,FormatMonth,FormatDay,FormatYear} from 'react-date-time-formatter'

const = App () =>{
const data = [] // Must be an Array of objct
  return (
  <Formater 
  objKey='date'
  dataObj={arr}
  renderItem={props =>  <Card data={props} key={props.data.index}/>}
  show={false}    
  resultIn={(prop)=>{   
    const {isIn,date} = prop
    const conIsIn = isIn.toLowerCase()
    if(conIsIn === 'month'){
      return   (<div><FormatDay offset={true}> {date} </FormatDay>  <FormatMonth > {date} </FormatMonth></div> )
    }else if(conIsIn === 'year'){
      return  ( <div> <FormatMonth > {date} </FormatMonth>  <FormatYear >{date} </FormatYear></div>)
    }
    else if(conIsIn === 'day'){
      return  (<div> <FormatDay offset={true}>{date} </FormatDay> <FormatMonth > {date} </FormatMonth></div> )
    }else{
      return <FormatDate seperator='/'>{date} </FormatDate>
    }

  }

}
  />
  );

}

```
>Result
>
>Feb 2020
>
>13 Dec
>
>13 Nov

This example i import some other component from the library which helps reformat date since the formater bounce back the date don't worry your head you will learn about that later, this bacause show `false` props prevent the rendering of the formater. It quite important to pass show `false` if custom functons are to be rendered in.

## props
| Property               | Required                  | Type | Description                                                                                                                                                                                                                                                                                       |
| ---------------------- | ------------------------ | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| objKey           | true                  | String              |  date key in the data object pass.                                                                                                                                                                                                                                             |
| dataObj                | true                   | object               | data object containing date.                                                                                                                                                                                                                                                         |
| renderItem            | true                  | function               | Element to be rendered by the formatter.                                                                                                                                                                                                                                                    |
| show               | Optional                    | Boolean               | prevent render from formater .                                                                                                                                                                                                                                 |
| resultIn      | Optional                     | function               | Accept function and pass props of the result of the formatter                                                                                                                                                                                                                                                                    |
| offSetIn               | Optional                    | String               | Offset the result of the formatter from the default order. Accepted value are `secs` `minutes` `hours` `weeks` `days` `months` `years`.                                                                                                                                                                                                                          |
| style               | Optional                   | Object              | Style for the the formatter container                                                                                                                                                                                                                 |

## FormateDateTime
This actually the core of this this library, which actually runs behind the sence in the Formater element to format the date and time but only format a single date string. Lets dive in and see what it does;
```jsx
import React from 'react'

import {FormateDateTime} from 'react-date-time-formatter'

const = App () =>{
  return (
<FormateDateTime  from='Mon Nov 13 2021 21:02:23 GMT+0100 (West Africa Standard Time)' /> 
// or   <FormateDateTime  >Mon Dec 12 2021 05:19:23 GMT+0100 (West Africa Standard Time)</FormateDateTime >
  );

}

```
Result 3 Days ago

## props
| Property               | Required                  | Type | Description                                                                                                                                                                                                                                                                                       |
| ---------------------- | ------------------------ | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| from           | true                  | String              |  Date object to  formatter in response to current date.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| show               | Optional                    | Boolean               | prevent render of the formater .                                                                                                                                                                                                                                 |
| resultIn      | Optional                     | function               | Accept function and pass props of the result of the formatter                                                                                                                                                                                                                                                                    |
| offSetIn               | Optional                    | String               | Offset the result of the formatter from the default order. Accepted value are `secs` `minutes` `hours` `weeks` `days` `months` `years`.                                                                                                                                                                                                                          |
## FormatDate
Use to get customize date of date object
```jsx
import React from 'react'

import {FormatDate} from 'react-date-time-formatter'

const = App () =>{
  return (
  <FormatDate >Mon Nov 13 2021 21:02:23 GMT+0100 (West Africa Standard Time) </FormatDate>
  );

}

```
> Result 13/11/2021

## props
| Property               | Required                  | Type | Description                                                                                                                                                                                                                                                                                       |
| ---------------------- | ------------------------ | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| date           | true                  | String              |  Date object to  formatter in response to current date.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| seperator               | Optional                    | String              | Seperator for the result, default is `/` .                                                                                                                                                                                                                                 |
| offsetAll      | Optional                     | Boolean               | Offset all `day` and ` month`                                                                                                                                                                                                                                                                     |
| offsetDay               | Optional                    | String               | Offset the result of the formatter by day. |
| offsetMonth               | Optional                    | String               | Offset the result of the formatter by month. |

## FormatTime
Use to get time of date object
```jsx
import React from 'react'

import {FormatTime} from 'react-date-time-formatter'

const = App () =>{
  return (
  <FormatTime >Mon Nov 13 2021 21:02:23 GMT+0100 (West Africa Standard Time) </FormatTime>
  );

}

```
> Result 21:02:23

## props
| Property               | Required                  | Type | Description                                                                                                                                                                                                                                                                                       |
| ---------------------- | ------------------------ | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| date           | true                  | String              |  Date object to  formatter in response to current date.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| seperator               | Optional                    | String              | Seperator for the result, default is `:` .                                                                                                                                                                                                                                 |

## Library Helper 
This are helper Element for rendering date and time to specific desire, they are called helpers because the are mostly use at the core to assist other function, they also come very handen as they so powerful not to be negleted.

##  FormatMonthDays
Use to get the number of days in a month

```jsx
import React from 'react'

import {FormatMonthDays} from 'react-date-time-formatter'

const = App () =>{
  return (
   <FormatMonthDays date='Mon Feb 13 2008 21:02:23 GMT+0100 (West Africa Standard Time)' />
   // or  <FormatMonthDays  > Mon Feb 13 2008 21:02:23 GMT+0100 (West Africa Standard Time) </FormatMonthDays>

  );

}

```
Result 29

##  FormatYear
Use to get the year of date object
```jsx
import React from 'react'

import {FormatYear} from 'react-date-time-formatter'

const = App () =>{
  return (
   <FormatYear date='Mon Feb 13 2008 21:02:23 GMT+0100 (West Africa Standard Time)' />
   // or  <FormatYear  > Mon Feb 13 2008 21:02:23 GMT+0100 (West Africa Standard Time) </FormatYear>

  );

}

```
Result 2008

##  FormatMonth
Use to get the month of date object
```jsx
import React from 'react'

import {FormatMonth} from 'react-date-time-formatter'

const = App () =>{
  return (
   <FormatMonth date='Mon Feb 13 2008 21:02:23 GMT+0100 (West Africa Standard Time)' />
   // or  <FormatMonth  > Mon Feb 13 2008 21:02:23 GMT+0100 (West Africa Standard Time) </FormatMonth>

  );

}

```
>Result Feb 

*Passing offset props `true` get* 

>Result 2

## props
| Property               | Required                  | Type | Description                                                                                                                                                                                                                                                                                       |
| ---------------------- | ------------------------ | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| date           | true                  | String              |  Date object to  formatter in response to current date.|
| offset      | Optional                     | Boolean               | Offset the result |

## FormatDay
Use to get the day of date object
```jsx
import React from 'react'

import {FormatDay} from 'react-date-time-formatter'

const = App () =>{
  return (
   <FormatDay date='Mon Feb 13 2008 21:02:23 GMT+0100 (West Africa Standard Time)' />
   // or <FormatDay>Mon Nov 13 2021 21:02:23 GMT+0100 (West Africa Standard Time)</FormatDay>

  );

}

```
> Result 13

*Passing offset props `true` get*

> Result Wenesday

## props
| Property               | Required                  | Type | Description                                                                                                                                                                                                                                                                                       |
| ---------------------- | ------------------------ | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| date           | true                  | String              |  Date object to  formatter in response to current date.|
| offset      | Optional                     | Boolean               | Offset the result |


## FormatHours
Use to get hours of date object
```jsx
import React from 'react'

import {FormatHours} from 'react-date-time-formatter'

const = App () =>{
  return (
  <FormatHours >Mon Nov 13 2021 21:02:23 GMT+0100 (West Africa Standard Time) </FormatHours>
  );

}

```
> Result 21

## FormatMinutes
Use to get minutes of date object
```jsx
import React from 'react'

import {FormatMinutes} from 'react-date-time-formatter'

const = App () =>{
  return (
  <FormatMinutes >Mon Nov 13 2021 21:02:23 GMT+0100 (West Africa Standard Time) </FormatMinutes>
  );

}

```
> Result 2

## FormatSeconds
Use to get seconds of date object
```jsx
import React from 'react'

import {FormatSeconds} from 'react-date-time-formatter'

const = App () =>{
  return (
  <FormatSeconds >Mon Nov 13 2021 21:02:23 GMT+0100 (West Africa Standard Time) </FormatSeconds>
  );

}

```
> Result 23
## License

[MIT](./LICENSE) © [samuel-momoh](https://github.com/samuel-momoh)
