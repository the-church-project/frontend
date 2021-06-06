import { FormLabel, Form } from 'react-bootstrap'
import { Fade } from 'react-reveal'
import { Formik, useFormikContext } from 'formik'
import React, { useState } from 'react'
import { CustomButton } from './basic'
import OtpInput from 'react-otp-input';
import { Redirect } from 'react-router'


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
            inputStyle={{ fontSize: '20px', width: "30px" }}
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
               <Form.Control as='select' className="phone-code" style={{ marginRight: '15px' }} {...props.formik.getFieldProps('countrycode')} readOnly={props.readonly ? 'readonly' : null}>
                  <option>~</option>
                  <option>+91</option>
               </Form.Control>
               <Form.Control type="number" placeholder={props.placeholder ? props.placeholder : ""}
                  {...props.formik.getFieldProps(props.fieldname)} readOnly={props.readonly ? 'readonly' : null} />
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
            <Form.Control type={props.type} placeholder={props.placeholder ? props.placeholder : ""}  {...props.formik.getFieldProps(props.fieldname)} readOnly={props.readonly ? 'readonly' : null} />
            {reveal ? (<Fade bottom ><Form.Text className="text-danger">{props.formik.errors[props.fieldname]}</Form.Text></Fade>) : null}
            {props.helptext ? <Form.Text className="text-muted text-capitalize">{props.helptext}</Form.Text> : null}
         </Form.Group>
      )
   }
}

class BasicForm extends React.Component {
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

   clean(values) {
      for (var i = 0; i < this.props.formlist.length; i++) {
         if (this.props.formlist[i].type === "phonenumber") {
            values[this.props.formlist[i].fieldname] = values.countrycode ? values.countrycode + values[this.props.formlist[i].fieldname] : values[this.props.formlist[i].fieldname]
            delete values.countrycode
         }
      }
      return values
   }

   handleSubmit(values) {
      if (this.props.onSubmit) {
         var value = this.clean(values)
         this.props.onSubmit(values)
         console.log(this.props.history)
         this.props.history.push("/")
      } else { console.log(values) }
   }

   render() {
      return (
         <Formik initialValues={this.getInitialValues(this.props.formlist)} onSubmit={(val) => this.handleSubmit(val)}
            validate={value => {
               let errors = {}
               this.props.formlist.map((val) => {
                  if (!value[val.fieldname]) {
                     errors[val.fieldname] = 'Required'
                  }
               })
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