import React from 'react'
import PropTypes from "prop-types"
import {FormateDateTime} from './formatDateTime'

export const Formater = (props) => {
const {
    objKey,
    dataObj,
    renderItem: renderFunction,
    show,
    offSetIn,
    resultIn:resultFunc,
    style,
  } = props;
/**
 * @param
 */
  const key = objKey.trim()
/**
 * @argument
 */
if(typeof dataObj !=='object' && dataObj ==null){
    console.error('dateObj is not an object')
    return null
}
/**
 * Check if the data object is empty
 */
if(dataObj.length == 0){
    console.error('dateObj is empty')
    return null
}
/**
 * @argument
 * Check if Key pass match the that of date object
 */

if(!dataObj[0][key]){
    console.error('Date key pass does not match that in dateObj')
    return null
}
/**
 * 
 * @param {*} funcProps 
 * @returns 
 */
const renderFuc = (funcProps) => {
    return resultFunc(funcProps);
}
/**
 * 
 * @param {*} dataProps 
 * @returns 
 */
  function renderItem(dataProps) {
    const date =<FormateDateTime offsetIn={offSetIn} show={show} resultIsIn={(prop)=>renderFuc({isIn:prop,date:dataProps.item[key]})} >
  {dataProps.item[key]}
      </FormateDateTime >

    return renderFunction({data:dataProps,date:date,index:dataProps.index});
  }
  return (
    <div style={style}>
  {
    dataObj?
    dataObj.map((item,index)=>(
        renderItem({item,index})

    ))
    :
    null
  }
  </div>
  )
}

Formater.defaultProps = {
    /** 
     * Assign key to identify dateTime in dataObj
     */
    objKey:'date',
    /*
   * Assign an array of data objects which should be
   * rendered in respect to the entered text.
   */
    // dateData: PropTypes.instanceOf(Date),
    dataObj: [],
    /*
    /**
     * Render a Pass React Elemet
     */
     renderItem: PropTypes.func,
    /**
   * Assign show props to FormatDateTime
   */
    show: true,
    /**
   * Assign offsetIn props to FormatDateTime
   */
     offsetIn: null,
         /**
   * Assign offsetIn props to FormatDateTime
   */
    style: {
        display:'flex',
        flexDirection:'column',
        justifyContents:'space-between'
    },
  }
  

Formater.propTypes = {
    /**
     * Styles for Formatter containter
     */
    style: PropTypes.object,
  /** 
   * Assign key to identify dateTime in dataObj
   */
   objKey:PropTypes.string.isRequired,
  /*
 * Assign an array of data objects which should be
 * rendered in respect to the entered text.
 */
  // dateData: PropTypes.instanceOf(Date),
  dataObj: PropTypes.array.isRequired,
  /*
  /**
   * Render a Pass React Elemet
   */
   renderItem: PropTypes.func,
  /**
 * Assign show props to FormatDateTime
 */
  show: PropTypes.bool,
  /**
 * Assign offsetIn props to FormatDateTime
 */
    offSetIn: PropTypes.string,
/**
 * Assign  resultIn props to FormatDateTime
 */
    resultIn: PropTypes.func,
}





