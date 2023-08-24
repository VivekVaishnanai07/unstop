import { Autocomplete, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { LocalizationProvider, TimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import * as React from 'react';
import CloseIcon from '../../assets/icon/close';
import { dialogData } from '../../utils/util';
import "./new-assessment-dialog.css";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function NewAssessmentDialog(props: any) {
  const { open, showDiv, setOpen, window } = props;
  const [purpose, setPurpose] = React.useState('');
  const [description, setDescription] = React.useState('');

  const handlePurposeChange = (event: SelectChangeEvent) => {
    setPurpose(event.target.value as string);
  };

  const handleDescriptionChange = (event: SelectChangeEvent) => {
    setDescription(event.target.value as string);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const date = new Date();
  console.log(window);
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <div className='dialog-header'>
        <DialogTitle className='dialog-title'>{"Create new assessment"}</DialogTitle>
        <div className='icon-box'>
          <CloseIcon color={showDiv ? "#1C4980" : "#D63500"} className="close-icon" onClick={handleClose} />
        </div>
      </div>
      <div className='dialog-body'>
        <div className='dialog-field-box'>
          <div className='dialog-field-title-box'>
            <div className='dialog-field-title'>
              Name of assessment
            </div>
          </div>
          <div className='text-field-width'>
            <TextField fullWidth label="Type Here" variant="outlined" autoComplete='false' />
          </div>
        </div>
        <div className='dialog-field-box'>
          <div className='dialog-field-title-box'>
            <div className='dialog-field-title'>
              Purpose of the test is
            </div>
          </div>
          <div className='text-field-width'>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Select</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={purpose}
                label="Select"
                onChange={handlePurposeChange}
              >
                <MenuItem value={11}>Diagnostic assessment</MenuItem>
                <MenuItem value={12}>Formative assessments</MenuItem>
                <MenuItem value={13}>Summative assessments</MenuItem>
                <MenuItem value={14}>Ipsative assessments</MenuItem>
                <MenuItem value={15}>Norm-referenced assessments</MenuItem>
                <MenuItem value={16}>Criterion-referenced assessments</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <div className='dialog-field-box'>
          <div className='dialog-field-title-box'>
            <div className='dialog-field-title'>
              Description
            </div>
          </div>
          <div className='text-field-width'>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Select</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={description}
                label="Type Here"
                onChange={handleDescriptionChange}
              >
                <MenuItem value={1}>Diagnostic assessment</MenuItem>
                <MenuItem value={2}>Formative assessments</MenuItem>
                <MenuItem value={3}>Summative assessments</MenuItem>
                <MenuItem value={4}>Ipsative assessments</MenuItem>
                <MenuItem value={5}>Norm-referenced assessments</MenuItem>
                <MenuItem value={6}>Criterion-referenced assessments</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <div className='dialog-field-box'>
          <div className='dialog-field-title-box'>
            <div className='dialog-field-title'>
              Skills
            </div>
          </div>
          <div className='text-field-width'>
            <Autocomplete
              multiple
              id="tags-outlined"
              options={dialogData}
              getOptionLabel={(option) => option.title}
              defaultValue={[dialogData[13]]}
              filterSelectedOptions
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="filterSelectedOptions"
                  placeholder="Type here"
                />
              )}
            />
          </div>
        </div>
        <div className='dialog-field-box'>
          <div className='dialog-field-title-box'>
            <div className='dialog-field-title'>
              Duration of assessment
            </div>
          </div>
          <div className='text-field-width'>
            <LocalizationProvider dateAdapter={AdapterDayjs} >
              <TimePicker className='text-field-width' format='hh:mm:ss' views={['hours', 'minutes', 'seconds']} defaultValue={dayjs(date)} />
            </LocalizationProvider>
          </div>
        </div>
      </div>
      <div className='footer-button'>
        <Button variant="contained" className='save-btn' onClick={handleClose}>Save</Button>
      </div>
    </Dialog>
  );
}
