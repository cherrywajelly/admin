import { ReactNode, useContext } from 'react';
import { ContextProps, SidebarMenu, SidebarMenusProps } from '../types/Props.tsx';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Context from '../contexts/Context.tsx';

const Sidebar = (props: SidebarMenusProps): ReactNode => {
  const { sidebarMenus, externalLinks } = props;

  const { setSelectedMenu } = useContext(Context) as ContextProps;
  const navigate = useNavigate();

  return (
    <Box className={`bg-gray-80 w-56 p-4 flex flex-col justify-between h-dvh`}>
      <nav aria-label="sidebar navigation">
        <List className="!py-0">
          {sidebarMenus.map((sidebarMenu: SidebarMenu, idx: number) => (
            <ListItem disablePadding key={idx}>
              <ListItemButton
                className="!p-2"
                onClick={(): void => {
                  setSelectedMenu(sidebarMenu.menu);
                  navigate(sidebarMenu.url);
                }}
              >
                <ListItemText primary={sidebarMenu.menu} className="text-white" />
              </ListItemButton>
            </ListItem>
          ))}

          {externalLinks && (
            <div>
              <Divider sx={{ backgroundColor: 'white' }} />
              {externalLinks.map((externalLink: SidebarMenu, idx: number) => (
                <ListItem disablePadding key={idx}>
                  <ListItemButton
                    className="!p-2"
                    component="a"
                    href={externalLink.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ListItemText primary={externalLink.menu} className="text-white" />
                    <OpenInNewIcon className="ml-2 w-1 h-1 text-white" />
                  </ListItemButton>
                </ListItem>
              ))}
            </div>
          )}
        </List>
      </nav>
    </Box>
  );
};

export default Sidebar;
