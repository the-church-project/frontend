import { FormLabel, Form } from 'react-bootstrap'
import { Fade } from 'react-reveal'
import { Formik, useFormikContext } from 'formik'
import React, { useState } from 'react'
import { CustomButton } from './basic'
import OtpInput from 'react-otp-input';

function OtpField(props) {
   const { values } = useFormikContext();
   const [otp, setOtp] = useState(values[props.fieldname]);
   return (
      <div className="pt-2">
         <OtpInput
            containerStyle={{ justifyContent: props.justify ? props.justify : "start" }}
            numInputs={props.numinput}
            value={otp}
            onChange={(val) => {
               setOtp(val);
               values[props.fieldname] = val
            }}
            separator={<span>&nbsp;&nbsp;</span>}
            inputStyle={{fontSize: '20px', width:"30px" }}
            isDisabled={props.readonly === "readonly"}
         />
      </div>
   )
}

function CustomFields(props) {
   var reveal = props.formik.touched[props.fieldname] && props.formik.errors[props.fieldname]
   if (props.type === 'phonenumber') {
      return (
         <Form.Group className="mb-3" controlId={props.id ? props.id : 'defaultForm'}>
            {props.label ? <FormLabel className="text-muted text-capitalize mb-1">{props.label}</FormLabel> : null}<br />
            <div className="d-flex flex-row">
               <Form.Control as='select' className="phone-code" style={{ marginRight: '15px' }} {...props.formik.getFieldProps('countrycode')} readonly={props.readonly ? 'readonly' : null}>
                  <option>~</option>
                  <option selected>+91</option>
               </Form.Control>
               <Form.Control type={props.type} placeholder={props.placeholder ? props.placeholder : ""}
                  {...props.formik.getFieldProps(props.fieldname)} readonly={props.readonly ? 'readonly' : null} />
            </div>
            {reveal ? (<Fade bottom><Form.Text className="text-danger">{props.formik.errors[props.fieldname]}</Form.Text></Fade>) : null}
            {props.helptext ? <Form.Text className="text-muted text-capitalize">{props.helptext}</Form.Text> : null}
         </Form.Group>
      )
   } else if (props.type === 'otp') {
      return (
         <Form.Group className="mb-3" controlId={props.id ? props.id : 'defaultForm'}>
            {props.label ? <FormLabel className="text-muted text-capitalize mb-1">{props.label}</FormLabel> : null}<br />
            <OtpField fieldname={props.fieldname} justify={props.justify} numinput={props.numinput} readonly={props.readonly ? 'readonly' : null}></OtpField>
            {reveal ? (<Fade bottom ><Form.Text className="text-danger">{props.formik.errors[props.fieldname]}</Form.Text></Fade>) : null}
            {props.helptext ? <Form.Text className="text-muted text-capitalize">{props.helptext}</Form.Text> : null}
         </Form.Group>
      )
   } else {
      return (
         <Form.Group className="mb-3" controlId={props.id ? props.id : 'defaultForm'}>
            {props.label ? <FormLabel className="text-muted text-capitalize mb-1">{props.label}</FormLabel> : null}<br />
            <Form.Control type={props.type} placeholder={props.placeholder ? props.placeholder : ""}  {...props.formik.getFieldProps(props.fieldname)} readonly={props.readonly ? 'readonly' : null} />
            {reveal ? (<Fade bottom ><Form.Text className="text-danger">{props.formik.errors[props.fieldname]}</Form.Text></Fade>) : null}
            {props.helptext ? <Form.Text className="text-muted text-capitalize">{props.helptext}</Form.Text> : null}
         </Form.Group>
      )
   }
}

class BasicForm extends React.Component {
   constructor(props) {
      super(props)
   }
   getInitialValues = (items) => {
      var final = {}
      items.map((value, key) => {
         final[value.fieldname] = value.initialvalue ? value.initialvalue : ''
         if (value.type === 'phonenumber') {
            final['countrycode'] = value.initialcodevalue ? value.initialcodevalue : ''
         }
         return null
      })
      return final
   }

   render() {
      return (
         <Formik initialValues={this.getInitialValues(this.props.formlist)} onSubmit={this.props.onSubmit ? this.props.onSubmit : value => console.log(value)}
            validate={value => {
               let errors = {}
               if (!value.firstname) {
                  errors.firstname = 'Required'
               } if (!value.secondname) {
                  errors.secondname = 'Required'
               } if (!value.otp || value.otp.length !== 6) {
                  errors.otp = 'Required'
               }

               return errors
            }}>
            {props => (
               <Form onSubmit={props.handleSubmit} style={this.props.style} className={"w-100 " + this.props.className}>
                  {
                     this.props.formlist.map((value, key) =>
                        <CustomFields {...value} key={key} formik={props} />
                     )
                  }
                  {/* {console.log(props)} */}
                  {this.props.children ? this.props.children : <CustomButton className="my-3" type="submit" text="Sbmit" />}
               </Form>
            )}
         </Formik>
      )
   }
}

export default BasicForm