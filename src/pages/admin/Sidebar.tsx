import { ReactNode, useContext, useEffect, useState } from 'react';
import { ContextProps } from '../../types/Props.tsx';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Context from '../../contexts/Context.tsx';

const Sidebar = (): ReactNode => {
  const { setSelectedMenu } = useContext(Context) as ContextProps;
  const navigate = useNavigate();

  const handleIconListClick = (): void => {
    setSelectedMenu('아이콘 목록');
    navigate('/admin/icons');
  };

  const handleCreatorListClick = (): void => {
    setSelectedMenu('제작자 목록');
    navigate('/admin/creators');
  };

  const handleSettlementClick = (): void => {
    setSelectedMenu('정산하기');
    navigate('/admin/settlements');
  };

  const handleInquiryClick = (): void => {
    setSelectedMenu('문의 목록');
    navigate('/admin/inquiries');
  };

  return (
    <Box className={`bg-gray-80 w-48 p-4 flex flex-col justify-between h-dvh`}>
      <nav aria-label="sidebar navigation">
        <List className="!pt-0">
          <ListItem disablePadding>
            <ListItemButton onClick={handleIconListClick}>
              <ListItemText primary="아이콘 목록" className="text-white" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={handleCreatorListClick}>
              <ListItemText primary="제작자 목록" className="text-white" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={handleSettlementClick}>
              <ListItemText primary="정산하기" className="text-white" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={handleInquiryClick}>
              <ListItemText primary="문의 목록" className="text-white" />
            </ListItemButton>
          </ListItem>
          <Divider sx={{ backgroundColor: 'white' }} />
          <ListItem disablePadding>
            <ListItemButton
              component="a"
              href="https://prometheus.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ListItemText primary="Prometheus" className="text-white" />
              <OpenInNewIcon className="ml-2 w-2 h-2 text-white" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              component="a"
              href="https://grafana.com/oss/loki/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ListItemText primary="Loki" className="text-white" />
              <OpenInNewIcon className="ml-2 w-5 h-5 text-white" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
};

export default Sidebar;
