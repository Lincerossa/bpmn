import React from "react";
import { useDispatch } from 'react-redux'

import Modeler from '../components/Modeler/'
import {createModel } from '../redux/models/actions'

export default ({history}) => {
  const dispatch = useDispatch()


  function handleCreateModel(data){
    dispatch(createModel(data))
    history.push('/models')
  }
  
  const data = history.location.state && history.location.state.data
  return <Modeler data={data} createModel={handleCreateModel} />
}