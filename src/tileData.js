import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import StarIcon from '@material-ui/icons/Star';
import SendIcon from '@material-ui/icons/Send';
import MailIcon from '@material-ui/icons/Mail';
import DeleteIcon from '@material-ui/icons/Delete';
import ReportIcon from '@material-ui/icons/Report';

export const mailFolderListItems = (
  <div>
    <ListItem button>

      <ListItemText primary="版型" />
    </ListItem>
    <ListItem button>
      
      <ListItemText primary="貼圖" />
    </ListItem>
    <ListItem button>
      
      <ListItemText primary="文字" />
    </ListItem>
    <ListItem button>
      <ListItemText primary="頁面管理" />
    </ListItem>
  </div>
);

