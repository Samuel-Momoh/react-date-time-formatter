import React from 'react'

import { Formater,FormateDateTime,FormatMonthDays,FormatMonth,FormatDay,FormatTime, FormatDate,FormatYear } from 'react-date-time-formatter'
import 'react-date-time-formatter/dist/index.css'

const App = () => {
const arr = [
      
  {
  statement: `30 Seconds ago` ,
  date:'Mon Feb 13 2020 21:02:23 GMT+0100 (West Africa Standard Time)'
},
    
{
  statement: `30 Seconds ago` ,
  date:'Mon Dec 13 2021 21:02:23 GMT+0100 (West Africa Standard Time)'
},
    
{
  statement: `30 Seconds ago` ,
  date:'Mon Nov 13 2021 21:02:23 GMT+0100 (West Africa Standard Time)'
}
]
const Card = (prop) =>{
  const data = prop
  return(
    <span >
      {prop.data.date}
    </span>

  )
}

  return (
  <>
  {/* <Formater 
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
      return <FormatDate seperator=' '>{date} </FormatDate>
    }

  }

}
  /> */}
  {/* Using Custom render */}
  {/* <FormateDateTime from='Mon Nov 13 2021 21:02:23 GMT+0100 (West Africa Standard Time)'
  resultIsIn={(prop)=>{
    const isIn = prop.toLowerCase()
    if(isIn === 'month'){
      return   <FormatDate >Mon Nov 13 2021 21:02:23 GMT+0100 (West Africa Standard Time) </FormatDate>
    }
  }
   
  }
  show={false}
  /> */}
  {/* <FormateDateTime offsetIn='hours' from='Mon Nov 13 2021 21:02:23 GMT+0100 (West Africa Standard Time)' /> */}
   {/* <FormatDay>Mon Nov 13 2021 21:02:23 GMT+0100 (West Africa Standard Time)</FormatDay> */}
  {/* <FormatMonth >Mon Feb 12 2021 05:19:23 GMT+0100 (West Africa Standard Time) </FormatMonth> */}
  {/* <FormateDateTime  >
  Mon Dec 12 2021 05:19:23 GMT+0100 (West Africa Standard Time)
  </FormateDateTime > */}
  {/* <FormatMonthDays date='Mon Nov 13 2021 21:02:23 GMT+0100 (West Africa Standard Time)' /> */}
  <FormatMonthDays  > Mon Feb 13 2008 21:02:23 GMT+0100 (West Africa Standard Time) </FormatMonthDays>
  {/* <FormatTime>Mon Nov 13 2021 21:02:23 GMT+0100 (West Africa Standard Time)</FormatTime> */}
  {/* <FormatDate >Mon Nov 13 2021 21:02:23 GMT+0100 (West Africa Standard Time) </FormatDate> */}
  {/* <FormatYear >Mon Nov 13 2021 21:02:23 GMT+0100 (West Africa Standard Time)</FormatYear> */}
  {
//  arr.map((item,i)=>(
//   <FormateDateTime  >
// { item.date}
//   </FormateDateTime >
  
//  ))
  }
 
  </>
  )
}

export default App
