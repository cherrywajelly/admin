import { ReactNode, useContext } from 'react';
import { ContextProps } from '../../types/Props.tsx';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Context from '../../contexts/Context.tsx';

const Sidebar = (): ReactNode => {
  const { setSelectedMenu } = useContext(Context) as ContextProps;
  const navigate = useNavigate();

  const handleIconListClick = (): void => {
    setSelectedMenu('아이콘 목록');
    navigate('/creator/icons');
  };

  const handleIconRegisterClick = (): void => {
    setSelectedMenu('아이콘 등록');
    navigate('/creator/register');
  };

  const handleSettlementClick = (): void => {
    setSelectedMenu('정산');
    navigate('/creator/settlements');
  };

  const handleMyPageClick = (): void => {
    setSelectedMenu('마이페이지');
    navigate('/creator/mypage');
  };

  return (
    <Box className="bg-[#4E4540] w-48 h-screen p-4 flex flex-col justify-between">
      <nav aria-label="sidebar navigation">
        <List className="!pt-0">
          <ListItem disablePadding>
            <ListItemButton onClick={handleIconListClick}>
              <ListItemText primary="아이콘 목록" className="text-white" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={handleIconRegisterClick}>
              <ListItemText primary="아이콘 등록" className="text-white" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={handleSettlementClick}>
              <ListItemText primary="정산" className="text-white" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={handleMyPageClick}>
              <ListItemText primary="마이페이지" className="text-white" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
};

export default Sidebar;
