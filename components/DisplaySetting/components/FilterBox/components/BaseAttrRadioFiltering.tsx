import React from 'react'


import { withStyles } from '@material-ui/core/styles';
import { green, blue, red, grey } from '@material-ui/core/colors';
import Radio, { RadioProps } from '@material-ui/core/Radio';


const GreyRadio = withStyles({
    root: {
      color: grey[400],
      '&$checked': {
        color: grey[600],
      },
    },
    checked: {},
  })((props: RadioProps) => <Radio color="default" {...props} />);
const GreenRadio = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props: RadioProps) => <Radio color="default" {...props} />);
const BlueRadio = withStyles({
    root: {
      color: blue[400],
      '&$checked': {
        color: blue[600],
      },
    },
    checked: {},
  })((props: RadioProps) => <Radio color="default" {...props} />);

  const RedRadio = withStyles({
    root: {
      color: red[400],
      '&$checked': {
        color: red[600],
      },
    },
    checked: {},
  })((props: RadioProps) => <Radio color="default" {...props} />);
  


interface Props {
    onFilterHero: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const BaseAttrRadioFiltering = ({onFilterHero}) => {
  const [selectedBaseAttr, setSelectedBaseAttr] = React.useState('all');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedBaseAttr(event.target.value);
  };

  return (
    <div>
         <GreyRadio
        checked={selectedBaseAttr === 'all'}
        onChange={handleChange}
        value="all"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'all' }}
      />
      <GreenRadio
        checked={selectedBaseAttr === 'agi'}
        onChange={handleChange}
        value="agi"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'agi' }}
      />
      <BlueRadio
        checked={selectedBaseAttr === 'int'}
        onChange={handleChange}
        value="int"
        color="default"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'int' }}
      />
      <RedRadio
        checked={selectedBaseAttr === 'str'}
        onChange={handleChange}
        value="str"
        color="default"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'str' }}
        size="small"
      />
    </div>
  );
}

export default BaseAttrRadioFiltering
