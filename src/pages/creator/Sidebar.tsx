import { ReactNode, useContext } from 'react';
import { ContextProps } from '../../types/Props.tsx';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Context from '../../contexts/Context.tsx';

const Sidebar = (): ReactNode => {
  const { setSelectedMenu } = useContext(Context) as ContextProps;

  return (
    <Box className="bg-[#4E4540] w-48 h-screen p-4 flex flex-col justify-between">
      <nav aria-label="sidebar navigation">
        <List className="!pt-0">
          <ListItem disablePadding>
            <ListItemButton onClick={() => setSelectedMenu('아이콘 목록')}>
              <ListItemText primary="아이콘 목록" className="text-white" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => setSelectedMenu('아이콘 등록')}>
              <ListItemText primary="아이콘 등록" className="text-white" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => setSelectedMenu('정산')}>
              <ListItemText primary="정산" className="text-white" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => setSelectedMenu('마이페이지')}>
              <ListItemText primary="마이페이지" className="text-white" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
};

export default Sidebar;
