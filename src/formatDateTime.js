import React from 'react'
import PropTypes from "prop-types"

export const FormateDateTime = (props) =>{
    const childrenFrom = props.children
    const {from,offsetIn,resultIsIn,show} = props;
    const combimedFrom = !from? childrenFrom: from 
    const  daysInMonth = (month,year) =>{
        return new Date(year,month,0).getDate()
        }

   if(!from && !childrenFrom){
    console.error("You have pass empty date object");
    return null 
   }
 
        const offsetInPros = {
            secs:'secs',
            minutes:'minutes',
            hours:'hours',
            weeks:'weeks',
            days:'days',
            months:'months',
            years:'years',
            default:null

        };
        
        const currentDay = new Date()
        const passDate = new Date(combimedFrom)
        const diffDateMSecs = Math.abs(currentDay - passDate)
        const diffDateSecs = Math.floor(diffDateMSecs / (1000))
        const diffYears = Math.floor(diffDateSecs / (60 * 60 * 24 * daysInMonth((passDate.getMonth() + 1),passDate.getFullYear()) * 12))
        const diffMonths = Math.floor(diffDateSecs / (60 * 60 * 24 * daysInMonth((passDate.getMonth() + 1),passDate.getFullYear())))
        const diffWeeks = Math.floor(diffDateSecs / (60 * 60 * 24 * 7))
        const diffDays = Math.floor(diffDateSecs / (60 * 60 * 24))
        const diffHours = Math.floor(diffDateSecs / (60 * 60))
        const diffMinutes = Math.floor(diffDateSecs / (60))
        const diffSecs = Math.floor(diffDateMSecs / (1000))
if(passDate > currentDay){
console.error(" You can't pass date in the future");
return null
}
const Checker = () =>{
var data
switch(true){
case 0:

    data = {
                                   
        statement: 'Now',
        dateOffset:(value)=>{
            let date = {
                secs: diffSecs > 1?`${diffSecs} Seconds ago`: `${diffSecs} Second ago` ,
                minutes: diffMinutes > 1?`${diffMinutes} Munites ago`: `${diffMinutes} Munite ago`,
                hours: diffHours > 1?`${diffHours} Hours ago`: `${diffHours} Hours ago`,
                weeks: diffWeeks > 1?`${diffWeeks} Weeks ago`: `${diffWeeks} Week ago`,
                days: diffDays > 1?`${diffDays} Days ago`: `${diffDays} Day ago`,
                months:  diffMonths > 1?`${diffMonths} Months ago`: `${diffMonths} Month ago`,
                years:  diffYears > 1?`${diffYears} Years ago`: `${diffYears} Year ago`,
                                                        
                }
                return (date[value]);
        },
          isIn:'Now'                              
        }
 return  data
case (diffDateSecs <= 60) :

    data = {
                                   
        statement: diffSecs > 1? `${diffSecs} Seconds`: `${diffSecs} Second`,
        dateOffset:(value)=>{
            let date = {
                secs: diffSecs > 1?`${diffSecs} Seconds ago`: `${diffSecs} Second ago` ,
                minutes: diffMinutes > 1?`${diffMinutes} Munites ago`: `${diffMinutes} Munite ago`,
                hours: diffHours > 1?`${diffHours} Hours ago`: `${diffHours} Hours ago`,
                weeks: diffWeeks > 1?`${diffWeeks} Weeks ago`: `${diffWeeks} Week ago`,
                days: diffDays > 1?`${diffDays} Days ago`: `${diffDays} Day ago`,
                months:  diffMonths > 1?`${diffMonths} Months ago`: `${diffMonths} Month ago`,
                years:  diffYears > 1?`${diffYears} Years ago`: `${diffYears} Year ago`,
                                                        
                }
                return date[value];
        },
        isIn:'Secs' 
                                         
        }
return  data
case (diffDateSecs <=  3600  ):
    data = {
                                   
        statement: diffMinutes > 1? `${diffMinutes} Munites ago`: `${diffMinutes} Munite ago`,
        dateOffset:(value)=>{
            let date = {
                secs: diffSecs > 1?`${diffSecs} Seconds ago`: `${diffSecs} Second ago` ,
                minutes: diffMinutes > 1?`${diffMinutes} Munites ago`: `${diffMinutes} Munite ago`,
                hours: diffHours > 1?`${diffHours} Hours ago`: `${diffHours} Hours ago`,
                weeks: diffWeeks > 1?`${diffWeeks} Weeks ago`: `${diffWeeks} Week ago`,
                days: diffDays > 1?`${diffDays} Days ago`: `${diffDays} Day ago`,
                months:  diffMonths > 1?`${diffMonths} Months ago`: `${diffMonths} Month ago`,
                years:  diffYears > 1?`${diffYears} Years ago`: `${diffYears} Year ago`,
                                                        
                }
                return date[value];
        },
        isIn:'Munites' 
                                         
        }
return data
case (diffDateSecs <=  86390):
                            
data = {
                                   
statement: diffHours > 1? `${diffHours} Hours ago `: `${diffHours} Hour ago`,
dateOffset:(value)=>{
    let date = {
        secs: diffSecs > 1?`${diffSecs} Seconds ago`: `${diffSecs} Second ago` ,
        minutes: diffMinutes > 1?`${diffMinutes} Munites ago`: `${diffMinutes} Munite ago`,
        hours: diffHours > 1?`${diffHours} Hours ago`: `${diffHours} Hours ago`,
        weeks: diffWeeks > 1?`${diffWeeks} Weeks ago`: `${diffWeeks} Week ago`,
        days: diffDays > 1?`${diffDays} Days ago`: `${diffDays} Day ago`,
        months:  diffMonths > 1?`${diffMonths} Months ago`: `${diffMonths} Month ago`,
        years:  diffYears > 1?`${diffYears} Years ago`: `${diffYears} Year ago`,
                                                
        }
        return date[value];
},
isIn:'Hour' 
                                 
}

return data
case (diffDateSecs <=  (60 * 60 * 24 * 6) ):
    data = {
                                   
        statement: diffDays > 1? `${diffDays} Days ago`: `${diffDays} Days ago`,
        dateOffset:(value)=>{
            let date = {
                secs: diffSecs > 1?`${diffSecs} Seconds ago`: `${diffSecs} Second ago` ,
                minutes: diffMinutes > 1?`${diffMinutes} Munites ago`: `${diffMinutes} Munite ago`,
                hours: diffHours > 1?`${diffHours} Hours ago`: `${diffHours} Hours ago`,
                weeks: diffWeeks > 1?`${diffWeeks} Weeks ago`: `${diffWeeks} Week ago`,
                days: diffDays > 1?`${diffDays} Days ago`: `${diffDays} Day ago`,
                months:  diffMonths > 1?`${diffMonths} Months ago`: `${diffMonths} Month ago`,
                years:  diffYears > 1?`${diffYears} Years ago`: `${diffYears} Year ago`,
                                                        
                }
                return date[value];
        },
        isIn:'Day' 
                                         
        }
return data
case (diffDateSecs <=  (60 * 60 * 24 * 7) ):
data = {
                                           
statement: ` 1 Week ago `,
dateOffset:(value)=>{
    let date = {
        secs: diffSecs > 1?`${diffSecs} Seconds ago`: `${diffSecs} Second ago` ,
        minutes: diffMinutes > 1?`${diffMinutes} Munites ago`: `${diffMinutes} Munite ago`,
        hours: diffHours > 1?`${diffHours} Hours ago`: `${diffHours} Hours ago`,
        weeks: diffWeeks > 1?`${diffWeeks} Weeks ago`: `${diffWeeks} Week ago`,
        days: diffDays > 1?`${diffDays} Days ago`: `${diffDays} Day ago`,
        months:  diffMonths > 1?`${diffMonths} Months ago`: `${diffMonths} Month ago`,
        years:  diffYears > 1?`${diffYears} Years ago`: `${diffYears} Year ago`,
                                                
        }
        return date[value];
},
isIn:'Week' 
                                         
}
return data
case (diffDateSecs <=  (60 * 60 * 24 * 14) ):
data = {
                                               
statement: ` 2 weeks ago `,
dateOffset:(value)=>{
    let date = {
        secs: diffSecs > 1?`${diffSecs} Seconds ago`: `${diffSecs} Second ago` ,
        minutes: diffMinutes > 1?`${diffMinutes} Munites ago`: `${diffMinutes} Munite ago`,
        hours: diffHours > 1?`${diffHours} Hours ago`: `${diffHours} Hours ago`,
        weeks: diffWeeks > 1?`${diffWeeks} Weeks ago`: `${diffWeeks} Week ago`,
        days: diffDays > 1?`${diffDays} Days ago`: `${diffDays} Day ago`,
        months:  diffMonths > 1?`${diffMonths} Months ago`: `${diffMonths} Month ago`,
        years:  diffYears > 1?`${diffYears} Years ago`: `${diffYears} Year ago`,
                                                
        }
        return date[value];
},
isIn:'Week' 
                                             
}
return data
case (diffDateSecs <=  (60 * 60 * 24 * daysInMonth((passDate.getMonth() + 1),passDate.getFullYear())) ):
data = {
                                                   
statement: ` 3 weeks ago `,
dateOffset:(value)=>{
    let date = {
        secs: diffSecs > 1?`${diffSecs} Seconds ago`: `${diffSecs} Second ago` ,
        minutes: diffMinutes > 1?`${diffMinutes} Munites ago`: `${diffMinutes} Munite ago`,
        hours: diffHours > 1?`${diffHours} Hours ago`: `${diffHours} Hours ago`,
        weeks: diffWeeks > 1?`${diffWeeks} Weeks ago`: `${diffWeeks} Week ago`,
        days: diffDays > 1?`${diffDays} Days ago`: `${diffDays} Day ago`,
        months:  diffMonths > 1?`${diffMonths} Months ago`: `${diffMonths} Month ago`,
        years:  diffYears > 1?`${diffYears} Years ago`: `${diffYears} Year ago`,
                                                
        }
        return date[value];
},
isIn:'Week' 
                                                 
}
return data
                                    
case (diffDateSecs <= (60 * 60 * 24 * daysInMonth((passDate.getMonth() + 1),passDate.getFullYear()) * 12) ):
    data = {
                                   
        statement: diffMonths > 1? `${diffMonths} Months ago`: `${diffMonths} Months ago`,
        dateOffset:(value)=>{
            let date = {
                secs: diffSecs > 1?`${diffSecs} Seconds ago`: `${diffSecs} Second ago` ,
                minutes: diffMinutes > 1?`${diffMinutes} Munites ago`: `${diffMinutes} Munite ago`,
                hours: diffHours > 1?`${diffHours} Hours ago`: `${diffHours} Hours ago`,
                weeks: diffWeeks > 1?`${diffWeeks} Weeks ago`: `${diffWeeks} Week ago`,
                days: diffDays > 1?`${diffDays} Days ago`: `${diffDays} Day ago`,
                months:  diffMonths > 1?`${diffMonths} Months ago`: `${diffMonths} Month ago`,
                years:  diffYears > 1?`${diffYears} Years ago`: `${diffYears} Year ago`,
                                                        
                }
                return date[value];
        },
        isIn:'Month' 
                                         
        }
return data;
case (diffDateSecs >= (60 * 60 * 24 * daysInMonth((passDate.getMonth() + 1),passDate.getFullYear()) * 12)  ):
    data = {
                                   
        statement: diffYears  > 1? `${diffYears } Years ago`: `${diffYears} Year ago`,
        dateOffset:(value)=>{
            let date = {
                secs: diffSecs > 1?`${diffSecs} Seconds ago`: `${diffSecs} Second ago` ,
                minutes: diffMinutes > 1?`${diffMinutes} Munites ago`: `${diffMinutes} Munite ago`,
                hours: diffHours > 1?`${diffHours} Hours ago`: `${diffHours} Hours ago`,
                weeks: diffWeeks > 1?`${diffWeeks} Weeks ago`: `${diffWeeks} Week ago`,
                days: diffDays > 1?`${diffDays} Days ago`: `${diffDays} Day ago`,
                months:  diffMonths > 1?`${diffMonths} Months ago`: `${diffMonths} Month ago`,
                years:  diffYears > 1?`${diffYears} Years ago`: `${diffYears} Year ago`,
                                                        
                }
                return date[value];
        },
        isIn:'Year' 
                                         
        }
return data;
default:
data = {
                                               
statement: 'NaN',
dateOffset:(value)=>{
    let date = {
        secs: 'NaN' ,
        minutes: 'NaN',
        hours: 'NaN',
        weeks: 'NaN',
        days: 'NaN',
        months:  'NaN',
        years:  'NaN',
                                                
        }
        return date[value];
},
isIn:'NaN' 
                                             
}
return data;
}
}


return (
<span>
{ 
resultIsIn?
resultIsIn(Checker().isIn) 
:
null

}
{
show?
(offsetInPros[offsetIn?.toLowerCase()] || offsetInPros['default'])?
Checker().dateOffset(offsetInPros[offsetIn.toLowerCase()])
:
Checker().statement
:
null
}
</span>
);

 
    

    
}
FormateDateTime.defaultProps = {
   /**
     * Assign a default value for from props
     */
    from: null,
    /**
     * Assign a default value for offset props
     */
     offsetIn: null, 
      /**
     * Assign a default value for Interval props
     */
    resultIsIn: null,
          /**
     * Assign a default value for Interval props
     */
    show: true,

}    
FormateDateTime.propTypes = {
/**
 * Date object pass to props
 */
from: PropTypes.string,
/**
 * Offset Formatter result
 */
offsetIn:PropTypes.string,
/**
 * Assign a Props ResultIn 
 */
 resultIsIn:PropTypes.func,
 /**
 * Assign a Props ResultIn 
 */
  show:PropTypes.bool
  }