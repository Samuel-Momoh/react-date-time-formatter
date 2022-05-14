import React from 'react'
import PropTypes from "prop-types"

const days = [ 'Sunday','Monday', 'Tesday', 'Wenesday', 'Thursday', 'Friday', 'Saturday']
const Months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
// Function Returns the number of days in a month from date object
export const  FormatMonthDays = (props) =>{
    const {date} = props
    const childrenFrom = props.children
    const combimedFrom = !date? childrenFrom : date
    let passDate;
    !combimedFrom?
     passDate = new Date()
    :
    passDate = new Date(combimedFrom)

    const year = passDate.getFullYear();
    const month = (passDate.getMonth() + 1);
    return (
        <span>
        {new Date(year,month,0).getDate()}
        </span>
    )
    }

   
     FormatMonthDays.propTypes = {
     /**
      * Date object pass to props
      */
     date: PropTypes.instanceOf(Date),
       }
// This function returns the full year
export const  FormatYear = (props) =>{
    const {date} = props
    const childrenFrom = props.children
    const combimedFrom = !date? childrenFrom : date
    let passDate;
    !combimedFrom?
     passDate = new Date()
    :
    passDate = new Date(combimedFrom)

    const Year = (passDate.getFullYear());
    
    return (
        <span>
       {Year}
        </span>
    )
    }

   
    FormatYear .propTypes = {
     /**
      * Date object pass to props
      */
     date: PropTypes.instanceOf(Date),
       }
// This function returns the name of the month
       export const  FormatMonth = (props) =>{
        const {date,offset} = props
        const childrenFrom = props.children
        const combimedFrom = !date? childrenFrom : date
        let passDate;
        !combimedFrom?
         passDate = new Date()
        :
        passDate = new Date(combimedFrom)
    
        const month = (passDate.getMonth());
        
        return (
            <span>
           {
           offset? 
           month
               :
               Months[month]
                }
            </span>
        )
        }
        FormatMonth.defaultProps= {
 
            /**
          * Offset default value
          */
             offset: false,
           }
       
         FormatMonth.propTypes = {
         /**
          * Date object pass to props
          */
         date: PropTypes.instanceOf(Date),
            /**
            * Offset the result
            */
            offset: PropTypes.bool
           }
// Function returns the name of the day
           export const  FormatDay = (props) =>{
            const {date, offset} = props
            const childrenFrom = props.children
            const combimedFrom = !date? childrenFrom : date
            let passDate;

            !combimedFrom?
             passDate = new Date()
            :
            passDate = new Date(combimedFrom)
        
            const day = (passDate.getDay());
            const daysInMonth = passDate.getDate()
            return (
                <span>
               { 
               offset? 
               daysInMonth
               :
               days[day]
                }
                </span>
            )
            }
        
           
    FormatDay.defaultProps= {
 
        /**
      * Offset default value 
      */
         offset: false,
       }
             FormatDay.propTypes = {
             /**
              * Date object pass to props
              */
             date: PropTypes.instanceOf(Date),
             /**
              * Offset the result
              */
             offset: PropTypes.bool
               }
// Funtion returns date in Custom style
export const  FormatDate = (props) =>{
    const {date,seperator,offsetAll,offsetDay,offsetMonth} = props
    const childrenFrom = props.children
    const combimedFrom = !date? childrenFrom : date
    let passDate;

    !combimedFrom?
     passDate = new Date()
    :
    passDate = new Date(combimedFrom)

    return (
        <span> 
{offsetAll?<FormatDay offset={true}> {passDate} </FormatDay>: <FormatDay offset={offsetDay}> {passDate} </FormatDay>}
        {seperator}
        {
offsetAll?<FormatMonth offset={true}> {passDate} </FormatMonth>:<FormatMonth offset={offsetMonth}> {passDate} </FormatMonth>
        }
        {seperator}
<FormatYear> {passDate} </FormatYear>       

        </span>
    )
    }

    FormatDate.defaultProps= {
 
        /**
         * Seperator for formating date 
         */
       seperator: '/',
       /**
        * Offset all value
        */
        offsetAll: false,
        /**
        * Offset  day default value
        */
        offsetDay: false,
        /**
       * Offset Month deffault value
       */
       offsetMonth: false,
          }
    FormatDate.propTypes = {
     /**
      * Date object pass to props
      */
     date: PropTypes.instanceOf(Date),
        /**
      * Seperator for formating date 
      */
    seperator: PropTypes.string,
      /**
      * Seperator for formating date 
      */
       offsetAll: PropTypes.bool,
       /**
        * Offset only day
        */
        offsetDay: PropTypes.bool,
               /**
        * Offset only day
        */
        offsetMonth: PropTypes.bool,
       }
// Function for  Time
/**
 * 
 * @param  date
 * @returns 
 */
// This function returns the Time in Hours
export const  FormatHours = (props) =>{
    const {date} = props
    const childrenFrom = props.children
    const combimedFrom = !date? childrenFrom : date
    let passDate;
    !combimedFrom?
     passDate = new Date()
    :
    passDate = new Date(combimedFrom)

    const Hour = (passDate.getHours());
    
    return (
        <span>
       {Hour}
        </span>
    )
    }

   
    FormatHours .propTypes = {
     /**
      * Date object pass to props
      */
     date: PropTypes.instanceOf(Date),
       }
// This function returns the Munites in date object
       export const  FormatMinutes = (props) =>{ 
        const {date} = props
        const childrenFrom = props.children
        const combimedFrom = !date? childrenFrom : date
        let passDate;
        !combimedFrom?
         passDate = new Date()
        :
        passDate = new Date(combimedFrom)
    
        const munite = (passDate.getMinutes());
        
        return (
            <span>
           {munite}
            </span>
        )
        }

       
        FormatMinutes.propTypes = {
         /**
          * Date object pass to props
          */
         date: PropTypes.instanceOf(Date),
 
           }
// Function returns the Date in Seconds
           export const  FormatSeconds = (props) =>{
            const {date, offset} = props
            const childrenFrom = props.children
            const combimedFrom = !date? childrenFrom : date
            let passDate;

            !combimedFrom?
             passDate = new Date()
            :
            passDate = new Date(combimedFrom)
        
            const second = (passDate.getSeconds());
            return (
                <span>
              {second}
                </span>
            )
            }
        
           

       FormatSeconds.propTypes = {
             /**
              * Date object pass to props
              */
             date: PropTypes.instanceOf(Date),
               }
               export const  FormatTime = (props) =>{
                const {date,seperator} = props
                const childrenFrom = props.children
                const combimedFrom = !date? childrenFrom : date
                let passDate;
            
                !combimedFrom?
                 passDate = new Date()
                :
                passDate = new Date(combimedFrom)
            
                return (
                    <span> 
            <FormatHours > {passDate} </FormatHours>
                    {seperator}
            <FormatMinutes > {passDate} </FormatMinutes>
                    
                    {seperator}
            <FormatSeconds> {passDate} </FormatSeconds>       
            
                    </span>
                )
                }
            
                FormatTime.defaultProps= {
             
                    /**
                     * Seperator for formating date 
                     */
                   seperator: ':',
  
                      }
                FormatTime.propTypes = {
                 /**
                  * Date object pass to props
                  */
                 date: PropTypes.instanceOf(Date),
                    /**
                  * Seperator for formating date 
                  */
                seperator: PropTypes.string,
                   }