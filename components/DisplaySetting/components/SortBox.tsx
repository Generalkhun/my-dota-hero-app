import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import SortIcon from '@material-ui/icons/Sort';
import { IconButton, Typography } from '@material-ui/core';
interface Props {
    onSortHero: (e: React.ChangeEvent<HTMLInputElement>) => void
}
const SortBox = ({ onSortHero }: Props) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const options = [
        'Alphabetic',
        'Pro Win Rate',
        'Turbo Win Rate',
        'Movement Speed',
        'Attack Range'
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
        <div style={{marginLeft:20}}>
            <IconButton aria-label="delete" onClick={handleClick}>
                <SortIcon fontSize='small' style={{ color: selectedIndex === 0 ? 'white':'yellow' }} />
                <Typography style={{ color: selectedIndex === 0 ? 'white':'yellow' }}>{'Rank By '+options[selectedIndex]}</Typography>
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
