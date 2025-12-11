import React from 'react'
import { Form } from 'react-bootstrap'

const Inputs = ({label,register,error,type,name}) => {

  return (
    <Form.Group className="mb-3" >
    <Form.Label>{label}</Form.Label>
    <Form.Control
      type={type}
      {...register(name)}
      isInvalid={error ? true : false}
    />
    <Form.Control.Feedback type="invalid">
      {error}
    </Form.Control.Feedback>
  </Form.Group>
  )
}

export default Inputs