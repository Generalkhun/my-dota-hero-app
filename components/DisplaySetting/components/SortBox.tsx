import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import SortIcon from '@material-ui/icons/Sort';
import { IconButton, Typography } from '@material-ui/core';
interface Props {
    onSortHero: (sortingTopic: string) => void
}
const SortBox = ({ onSortHero }: Props) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const options = [
        'None',
        'Alphabetic',
        'Pro Win',
        'Turbo Win',
        'Movement Speed',
        'Attack Range'
    ];

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMenuItemClick = (event: React.MouseEvent<HTMLElement>, index: number) => {
        setSelectedIndex(index);
        onSortHero(options[index])
        setAnchorEl(null);
    };
    const handleClose = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAnchorEl(null);

    };
    return (
        <div style={{ marginLeft: 20 }}>
            <IconButton aria-label="delete" onClick={handleClick}>
                <SortIcon fontSize='small' style={{ color: 'white' }} />
                <Typography style={{ color: 'white' }}>{selectedIndex > 0 ? 'Ranked By ' + options[selectedIndex]:'Not Ranked'}</Typography>
            </IconButton>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                defaultValue={1}

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
