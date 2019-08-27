import React from 'react'
import Dropzone from 'react-dropzone'
import Button from '../Button'


export default ({onDrop, accept}) => (
  <Dropzone onDrop={onDrop} accept={accept}>
    {({getRootProps, getInputProps}) => (
      <section>
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          <Button icon="MdCloudUpload">upload</Button>
        </div>
      </section>
    )}
  </Dropzone>
)