import { Box, TextField, Typography, Divider, Fab, Tooltip  } from '@mui/material';
import React, {useState, useEffect} from 'react';


import Header from './header';
function Contact() {

  const [fieldVals, setFieldVals]: any = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  })

  const [validForm, setValidForm] = useState(false);
  const [tip, setTip] = useState("All fields are required to submit.")

  useEffect(() => {
    let answer = true;
    for(const field in fieldVals){
      if(!fieldVals[field]){
        answer = false;
      }
    }
    if(answer){
      setTip("")
    }else{
      setTip("All fields are required to submit.")
    }
    setValidForm(answer)
    
  },[fieldVals])

  const handleChange = (e: any) => {
    let prevVals = {...fieldVals}
    if(e.target.id === "first-name"){
      prevVals.firstName = e.target.value;
    }
    if(e.target.id === "last-name"){
      prevVals.lastName = e.target.value;
    }
    if(e.target.id === "email"){
      prevVals.email = e.target.value;
    }
    if(e.target.id === "subject"){
      prevVals.subject = e.target.value;
    }
    if(e.target.id === "message"){
      prevVals.message = e.target.value;
    }

    setFieldVals(prevVals)
  }

  const resetForm = () => {
    setTimeout(function(){ 
      let emptyField = {...fieldVals};
      for(const field in emptyField){
        emptyField[field] = ""
      }
      setFieldVals(emptyField)
    }, 1000)
  }



  const textFieldStyle = {
    marginBottom: '20px',
    input: {
      color: '#FFFFFA'
    },
    '& label': {
      color: '#FFFFFA',
      "&.Mui-focused": {
        color: '#702632'
      }
    },
    
    "& .MuiOutlinedInput-root": {
      '& fieldset': {
        border: '1px solid #FFFFFA',
      },
      '&:hover fieldset': {
        border: '1px solid #FFFFFA',
    },
      "&.Mui-focused fieldset": {
        border: '2px solid #702632'
      }
    }
}

  return (
    <Box sx={{borderTop: '3px solid #912F40', display: 'flex', flexDirection: 'column', height: '80vh', backgroundColor: 'black', width: '100%'}}>
      
        <form action="https://docs.google.com/forms/d/e/1FAIpQLSf7UTvZdGp2LE0Swo66UwrWvt-4EeXVyj-YfoYz0jhgSXYtlQ/formResponse" method="POST" target="_blank" style={{margin: '20px 30% 0px 30%', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center'}}>
          <Typography sx={{color: '#FFFFFA', fontSize: '37px', marginBottom: '1px'}}>Contact</Typography>
          <Divider sx={{ borderBottomWidth: '1px', borderColor: '#912F40', marginBottom: '20px' }} /> 
          <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
            <TextField onChange={handleChange} value={fieldVals.firstName} name="entry.1808372734" id="first-name" variant="outlined" label="First Name"size="small" sx={{...textFieldStyle}} />
            <TextField onChange={handleChange} value={fieldVals.lastName} name="entry.616832984" id="last-name" variant="outlined" label="Last Name"size="small" sx={{...textFieldStyle}} />
          </Box>
          <TextField onChange={handleChange} value={fieldVals.email} name="entry.1065293215" id="email" variant="outlined" label="Email"size="small" sx={{...textFieldStyle}} />
          <TextField onChange={handleChange} value={fieldVals.subject} name="entry.398358897" id="subject" variant="outlined" label="Subject"size="small" sx={{...textFieldStyle}} />
          <TextField onChange={handleChange} value={fieldVals.message} name="entry.1338912525" id="message" variant="outlined" inputProps={{ style: { color: "#FFFFFA" } }} label="Message"size="small" multiline rows={3} sx={{...textFieldStyle}} />
          <Divider sx={{ borderBottomWidth: '1px', borderColor: '#912F40', marginTop: '10px', marginBottom: '10px' }} />
          <Tooltip title={tip}>
            <Box sx={{display: 'flex', justifyContent: 'center'}}>
              <Fab type="submit" onClick={() => resetForm()} disabled={!validForm ? true : undefined} sx={{borderRadius: '15px', width: '150px', height: '20px', marginTop: '10px', backgroundColor: 'black', border: '2px solid #912F40', color: "#FFFFFA", "&:hover":{backgroundColor: '#702632'}, '&.Mui-disabled': {color: '#FFFFFA', backgroundColor: '#40434E'}}}> Submit </Fab>
            </Box>
          </Tooltip>
        </form>
      
    </Box>
  )
}

export default Contact;