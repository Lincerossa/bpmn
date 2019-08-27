import React, { useState } from "react";
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import moment from 'moment'

import Wrapper from '../components/Wrapper/'
import Padder from '../components/Padder/'
import Button from '../components/Button/'
import Input from '../components/MaterialInput'
import TableMaterial from '../components/TableMaterial/'
import Dropzone from '../components/Dropzone/'
import { getModels } from '../redux/models/reducer'
import { deleteModel } from '../redux/models/actions'

export default ({history} ) => {
  const [ search, setSearch] = useState()
  const models = useSelector(getModels)
  const dispatch = useDispatch()
  function handleCreateNew(){
    history.push('/models/create')
  }

  function handleLoadFile(acceptedFiles){
  
    const [ file ] = acceptedFiles

    if(!file) return

    var reader = new FileReader();

    reader.onabort = () => console.log('file reading was aborted')
    reader.onerror = () => console.log('file reading has failed')
    reader.readAsText(file);
    reader.onload = function(e) {
      const data = e.target.result;
      history.push({pathname: '/models/create', state: {data}})
    };
  }





  const filterdModels = models.filter(model => search ? model.id.indexOf(search) > -1 : true)


  return (
    <Wrapper size="big">
      <Padder size="big">
          <Padder size="small">
            <ActionsWrapper>
              <Input onChange={e => setSearch(e.target.value)} label={"Search Bpmn title"} />
              <Actions>
                <Dropzone onDrop={handleLoadFile} accept=".bpmn" />
                <Button full icon="MdAdd" onClick={handleCreateNew}>create</Button>
              </Actions>
              </ActionsWrapper>
            </Padder>          
          <TableMaterial 
            headers={[
              'Title',
              'Date',
              'Link'
            ]} 
            rows={filterdModels.map(model => (
              [() => model.id, () => <div>{model.date && moment(model.date).format("DD-MM-YYYY  h:mm:ss")}</div>, () => (
                <TableActions>
                  <Button  icon="MdDelete" onClick={() => dispatch(deleteModel(model.id))}>delete</Button>
                  <Link to={`/models/${model.id}/edit`} ><Button icon="MdEdit" full >edit</Button></Link>
                </TableActions>
              )]
            ))}/>
        </Padder>
        {(!filterdModels || !filterdModels.length) && models && models.length > 0 && <NoResults>
          <Padder size="big">
              No results for {search}
            </Padder>
          <img src="static/sad.gif" alt="sad" />
        </NoResults>}
    </Wrapper>
  )
}


const NoResults = styled.div`
  font-weight: 600;
  font-size: 2rem;
  text-align: center;

`
const ActionsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Actions = styled.div`
  text-align: center;
  display: grid;
  grid-gap: .5rem;
  grid-template-columns: 1fr 1fr;


  svg{
    width: 50px;
    height: 50px;
    cursor: pointer;
  }
`
const TableActions = styled.div`
  text-align: center;
  display: grid;
  grid-gap: .5rem;
  grid-template-columns: 1fr 1fr;

`