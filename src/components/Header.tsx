"use client";

import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useTransition } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Icon from '@mui/material/Icon';
import "flag-icons/css/flag-icons.min.css";
import {useTranslations} from 'next-intl';

export default function Header() {

  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();

  const t = useTranslations('UserRegistrationPage');

  const handleChange = (string: string) => {
    const nextLocale = string;
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {t('registration')}
          </Typography>
          
          <Select
            className='MuiSelect-iconOutlined'
            defaultValue={localActive}
            disabled={isPending}
            onChange={(e) => handleChange(e.target.value as string)}
            sx={{ backgroundColor:'secondary' }}
          >
            <MenuItem key="en" value="en">
              <ListItemIcon>
                <Icon className="fi fi-gb"></Icon>
              </ListItemIcon>
              English
            </MenuItem>
            <MenuItem key="kz" value="kz">
              <ListItemIcon>
                <Icon className="fi fi-kz"></Icon>
              </ListItemIcon>
              Қазақша
            </MenuItem>
            <MenuItem key="cn" value="cn">
              <ListItemIcon>
                <Icon className="fi fi-cn"></Icon>
              </ListItemIcon>
              中文
            </MenuItem>
            <MenuItem key="ru" value="ru">
              <ListItemIcon>
                <Icon className="fi fi-ru"></Icon>
              </ListItemIcon>
              Русский
            </MenuItem>
          </Select>
        </Toolbar>      
      </AppBar>
    </Box>
  );
}
