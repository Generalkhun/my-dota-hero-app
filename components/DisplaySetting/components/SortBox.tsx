import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import SortIcon from '@material-ui/icons/Sort';
import { IconButton, Typography } from '@material-ui/core';
interface Props {
    onSortHero: (e: React.ChangeEvent<HTMLInputElement>) => void
}
const SortBox = ({onSortHero}:Props) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const options = [
        'No Sort',
        'Win rate',
        'Movement Speed',
    ];

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMenuItemClick = (event: React.MouseEvent<HTMLElement>, index: number) => {
        setSelectedIndex(index);
        setAnchorEl(null);
      };
    const handleClose = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAnchorEl(null);

    };
    return (
        <div>
            <IconButton aria-label="delete" onClick={handleClick}>
                <Typography style={{ color: 'white' }}>{selectedIndex === 0? '': options[selectedIndex]}</Typography>
                <SortIcon fontSize={selectedIndex === 0 ? "large" : 'small'} style={{ color: 'white' }} />
            </IconButton>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}

            >
                {options.map((option, index) => (
                    <MenuItem
                        key={option}
                        selected={index === selectedIndex}
                        onClick={(event) => handleMenuItemClick(event, index)}
                    >
                        {option}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
}


export default SortBox
