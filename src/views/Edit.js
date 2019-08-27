import React from "react";
import { useDispatch } from 'react-redux'

import Modeler from '../components/Modeler/'
import { useSelector } from 'react-redux'
import { getModel } from '../redux/models/reducer'
import {editModel } from '../redux/models/actions'



export default (props) => {
  const { match} = props
  const id = match && match.params && match.params.id

  const dispatch = useDispatch()

  function handleEditModel(data){
    dispatch(editModel({data, id}))
  }
  const data = useSelector(state => getModel({state, id}))
  

  return <Modeler data={data && data.data} editModel={handleEditModel} />
}