import Menu, { MenuOrigin, MenuPosition, MenuProps } from './Menu';
import { ComponentMeta } from '@storybook/react';
import Stack from '../Stack';
import Button from '../Button';
import { ChangeEvent, MouseEvent, useState } from 'react';
import MenuItem from '../MenuItem';
import Typography from '../Typography';
import Radio from '../Radio';
import Input from '../Input';

export default {
  title: 'Components/UI/Menu',
  component: Menu
} as ComponentMeta<typeof Menu>;

export const Basic = (args: MenuProps) => {
  const [anchorEl, setAnchorEl] = useState<Element | undefined>(undefined);
  const isOpen = Boolean(anchorEl);

  const handleMenuOpen = (e: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(undefined);
  };

  return (
    <Stack spacing={4} justify="center">
      <Button onClick={handleMenuOpen}>
        Dashboard
      </Button>

      <Menu
        anchorEl={anchorEl}
        {...args}
        onClose={handleMenuClose}
        isOpen={isOpen}
      >
        <MenuItem onClick={handleMenuClose}>
          Profile
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          Account
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          Logout
        </MenuItem>
      </Menu>
    </Stack>
  );
};

export const Elevation = (args: MenuProps) => {
  const [elevation, setElevation] = useState<MenuProps['elevation']>(1);
  const [anchorEl, setAnchorEl] = useState<Element | undefined>(undefined);
  const isOpen = Boolean(anchorEl);

  const handleMenuOpen = (e: MouseEvent<HTMLButtonElement>) => {
    return (elevation: MenuProps['elevation']) => {
      setElevation(elevation);
      setAnchorEl(e.currentTarget);
    };
  };

  const handleMenuClose = () => {
    setAnchorEl(undefined);
  };

  return (
    <Stack spacing={4} justify="center">
      <Button onClick={(e: MouseEvent<HTMLButtonElement>) => handleMenuOpen(e)(1)}>
        Elevation 1
      </Button>
      <Button onClick={(e: MouseEvent<HTMLButtonElement>) => handleMenuOpen(e)(2)}>
        Elevation 2
      </Button>
      <Button onClick={(e: MouseEvent<HTMLButtonElement>) => handleMenuOpen(e)(3)}>
        Elevation 3
      </Button>
      <Button onClick={(e: MouseEvent<HTMLButtonElement>) => handleMenuOpen(e)(4)}>
        Elevation 4
      </Button>
      <Menu
        anchorEl={anchorEl}
        elevation={elevation}
        {...args}
        onClose={handleMenuClose}
        isOpen={isOpen}
      >
        <MenuItem onClick={handleMenuClose}>
          Profile
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          Account
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          Logout
        </MenuItem>
      </Menu>
    </Stack>
  );
};

export const Position = () => {
  const [anchorOrigin, setAnchorOrigin] = useState<MenuOrigin>({
    vertical: 'top',
    horizontal: 'left'
  });
  const [transformOrigin, setTransformOrigin] = useState<MenuOrigin>({
    vertical: 'top',
    horizontal: 'left'
  });
  const [anchorPosition, setAnchorPosition] = useState<MenuPosition>({
    top: 0,
    left: 0,
  });
  const [isAnchorByElement, setIsAnchorByElement] = useState<boolean>(true);
  const [anchorEl, setAnchorEl] = useState<Element | undefined>(undefined);
  const isOpen = Boolean(anchorEl);

  const handleChangeAnchorOrigin = (e: ChangeEvent<HTMLInputElement>, type: keyof MenuOrigin) => {
    setAnchorOrigin((prev) => ({
      ...prev,
      [type]: e.target.value
    }));
  };

  const handleChangeTransformOrigin = (e: ChangeEvent<HTMLInputElement>, type: keyof MenuOrigin) => {
    setTransformOrigin((prev) => ({
      ...prev,
      [type]: e.target.value
    }));
  };

  const handleChangePosition = (e: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setAnchorPosition((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleMenuOpen = (e: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(undefined);
  };

  return (
    <Stack
      spacing={4}
      direction="column"
      justify="center"
      align="center"
      style={{
        height: '50vh',
        padding: '10rem 0'
      }}
    >
      <Button onClick={handleMenuOpen}>
        Open Menu
      </Button>
      <Stack spacing={4} direction="column">
        <Stack spacing="5rem">
          <Stack direction="column" spacing={2}>
            <Typography component="p">
              anchorReference
            </Typography>
            <Stack spacing={2}>
              <Radio
                label="anchorEl"
                name="anchorReference"
                value="anchorEl"
                checked={isAnchorByElement}
                onChange={() => setIsAnchorByElement(true)}
              />
              <Radio
                label="anchorPosition"
                name="anchorReference"
                value="anchorPosition"
                checked={!isAnchorByElement}
                onChange={() => setIsAnchorByElement(false)}
              />
            </Stack>
          </Stack>
          <Stack direction="column" spacing={1}>
            <Input
              name="top"
              type="number"
              variant="outlined"
              value={anchorPosition.top}
              onChange={handleChangePosition}
            />
            <Input
              name="left"
              type="number"
              variant="outlined"
              value={anchorPosition.left}
              onChange={handleChangePosition}
            />
          </Stack>
        </Stack>
        <Stack spacing="5rem">
          <Stack direction="column" spacing={4}>
            <Stack direction="column" spacing={2}>
              <Typography component="p">
                anchorOrigin.vertical
              </Typography>
              <Radio
                label="Top"
                name="anchorOrigin.vertical"
                value="top"
                checked={anchorOrigin?.vertical === 'top'}
                onChange={(e) => handleChangeAnchorOrigin(e, 'vertical')}
              />
              <Radio
                label="Center"
                name="anchorOrigin.vertical"
                value="center"
                checked={anchorOrigin?.vertical === 'center'}
                onChange={(e) => handleChangeAnchorOrigin(e, 'vertical')}
              />
              <Radio
                label="Bottom"
                name="anchorOrigin.vertical"
                value="bottom"
                checked={anchorOrigin?.vertical === 'bottom'}
                onChange={(e) => handleChangeAnchorOrigin(e, 'vertical')}
              />
            </Stack>
            <Stack direction="column" spacing={2}>
              <Typography component="p">
                anchorOrigin.horizontal
              </Typography>
              <Stack spacing={2}>
                <Radio
                  label="Left"
                  name="anchorOrigin.horizontal"
                  value="left"
                  checked={anchorOrigin?.horizontal === 'left'}
                  onChange={(e) => handleChangeAnchorOrigin(e, 'horizontal')}
                />
                <Radio
                  label="Center"
                  name="anchorOrigin.horizontal"
                  value="center"
                  checked={anchorOrigin?.horizontal === 'center'}
                  onChange={(e) => handleChangeAnchorOrigin(e, 'horizontal')}
                />
                <Radio
                  label="Right"
                  name="anchorOrigin.horizontal"
                  value="right"
                  checked={anchorOrigin?.horizontal === 'right'}
                  onChange={(e) => handleChangeAnchorOrigin(e, 'horizontal')}
                />
              </Stack>
            </Stack>
          </Stack>
          <Stack direction="column" spacing={4}>
            <Stack direction="column" spacing={2}>
              <Typography component="p">
                transformOrigin.vertical
              </Typography>
              <Radio
                label="Top"
                name="transformOrigin.vertical"
                value="top"
                checked={transformOrigin?.vertical === 'top'}
                onChange={(e) => handleChangeTransformOrigin(e, 'vertical')}
              />
              <Radio
                label="Center"
                name="transformOrigin.center"
                value="center"
                checked={transformOrigin?.vertical === 'center'}
                onChange={(e) => handleChangeTransformOrigin(e, 'vertical')}
              />
              <Radio
                label="Bottom"
                name="transformOrigin.vertical"
                value="bottom"
                checked={transformOrigin?.vertical === 'bottom'}
                onChange={(e) => handleChangeTransformOrigin(e, 'vertical')}
              />
            </Stack>
            <Stack direction="column" spacing={2}>
              <Typography component="p">
                transformOrigin.horizontal
              </Typography>
              <Stack spacing={2}>
                <Radio
                  label="Left"
                  name="transformOrigin.horizontal"
                  value="left"
                  checked={transformOrigin?.horizontal === 'left'}
                  onChange={(e) => handleChangeTransformOrigin(e, 'horizontal')}
                />
                <Radio
                  label="Center"
                  name="transformOrigin.horizontal"
                  value="center"
                  checked={transformOrigin?.horizontal === 'center'}
                  onChange={(e) => handleChangeTransformOrigin(e, 'horizontal')}
                />
                <Radio
                  label="Right"
                  name="anchorOrigin.horizontal"
                  value="right"
                  checked={transformOrigin?.horizontal === 'right'}
                  onChange={(e) => handleChangeTransformOrigin(e, 'horizontal')}
                />
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>


      <Menu
        anchorEl={anchorEl}
        onClose={handleMenuClose}
        isOpen={isOpen}
        {...(!isAnchorByElement && {
          anchorPosition: anchorPosition
        })}
        anchorOrigin={anchorOrigin}
        transformOrigin={transformOrigin}
      >
        <MenuItem onClick={handleMenuClose}>
          Profile
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          Account
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          Logout
        </MenuItem>
      </Menu>
    </Stack>
  );
};