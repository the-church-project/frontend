import { FormLabel, Form } from 'react-bootstrap'
import { Fade } from 'react-reveal'
import { Formik, useFormikContext } from 'formik'
import React, { useState } from 'react'
import { CustomButton } from './basic'
import OtpInput from 'react-otp-input';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/bootstrap.css'
import * as Yup from 'yup'


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
function PhoneField(props) {
   const { values } = useFormikContext();
   const [otp, setOtp] = useState(values[props.fieldname]);
   return (
      <PhoneInput
         country={'in'}
         prefix={"+"}
         disabled={props.readonly === "readonly"}
         onlyCountries={['in', 'kz']}
         inputStyle={{ marginLeft: "55px", width: "100%" }}
         onChange={(val) => {
            setOtp(val);
            values[props.fieldname] = val
         }}
         onBlur={props.formik.handleBlur}
         value={otp}
      />
   )
}
function CustomFields(props) {
   var reveal = props.formik.touched[props.fieldname] && props.formik.errors[props.fieldname]
   if (props.type === 'phonenumber') {
      return (
         // <Form.Group className="mb-3" controlId={props.id ? props.id : 'defaultForm'}>
         //    {props.label ? <FormLabel className="text-muted text-capitalize mb-1">{props.label}</FormLabel> : null}<br />
         //    <div className="d-flex flex-row">
         //       <Form.Control as='select' className="phone-code" style={{ marginRight: '15px' }} {...props.formik.getFieldProps('countrycode')} readOnly={props.readonly ? 'readonly' : null}>
         //          <option key="+91" value="+91">+91</option>
         //       </Form.Control>
         //       <Form.Control type="text" placeholder={props.placeholder ? props.placeholder : ""}
         //          {...props.formik.getFieldProps(props.fieldname)} readOnly={props.readonly ? 'readonly' : null} />
         //    </div>
         //    {reveal ? (<Fade bottom><Form.Text className="text-danger">{props.formik.errors[props.fieldname]}</Form.Text></Fade>) : null}
         //    {props.helptext ? <Form.Text className="text-muted text-capitalize">{props.helptext}</Form.Text> : null}
         // </Form.Group>
         <Form.Group className="mb-3" controlId={props.id ? props.id : 'defaultForm'}>
            {props.label ? <FormLabel className="text-muted text-capitalize mb-1">{props.label}</FormLabel> : null}<br />
            <div className="d-flex flex-row">
               <PhoneField {...props} />
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
   constructor(props) {
      super(props);
      this.state = {
         submitErrors: []
      }
   }
   getInitialValues = (items) => {
      var final = {}
      items.map((value, key) => {
         final[value.fieldname] = value.initialvalue ? value.initialvalue : ''
         // if (value.type === 'phonenumber') {
         //    final['countrycode'] = value.initialcodevalue ? value.initialcodevalue : '+91'
         // }
         return null
      })
      return final
   }

   clean(values) {
      for (var i = 0; i < this.props.formlist.length; i++) {
         if (this.props.formlist[i].type === "phonenumber" && values[this.props.formlist[i].fieldname].charAt(0) !== "+") {
            // values[this.props.formlist[i].fieldname] = values.countrycode ? values.countrycode + values[this.props.formlist[i].fieldname] : values[this.props.formlist[i].fieldname]
            // delete values.countrycode
            values[this.props.formlist[i].fieldname] = "+" + values[this.props.formlist[i].fieldname]
         }
      }
      return values
   }

   handleSubmit(values) {
      if (this.props.onSubmit) {
         var value = this.clean(values)
         this.props.onSubmit(value, this.props.history)
      } else { console.log(values) }
   }

   validationSchemaGenerator(formlist) {
      let schema = {}
      formlist.map(item => {
         schema[item.fieldname] = item.validation
         return null
      })
      return Yup.object().shape(schema)
   }

   render() {
      return (
         <Formik initialValues={this.getInitialValues(this.props.formlist)} onSubmit={(val) => this.handleSubmit(val)}
            validate={this.props.validate ? this.props.validate : null}
            validationSchema={this.validationSchemaGenerator(this.props.formlist)}
         >
            {props => (
               <Form onSubmit={e => { props.handleSubmit(e) }} style={this.props.style} className={"w-100 " + this.props.className}>
                  {
                     this.props.formlist.map((value, key) =>
                        <CustomFields {...value} key={key} formik={props} />
                     )
                  }
                  {this.props.children ? this.props.children : <CustomButton className="my-3" type="submit" text="Sbmit" />}
               </Form>
            )}
         </Formik>
      )
   }
}

export default BasicForm