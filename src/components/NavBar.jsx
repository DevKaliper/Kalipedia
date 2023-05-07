import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Box from "@mui/material/Box";
import List from "@mui/material/List";

import ListItem from "@mui/material/ListItem";

import ListItemButton from "@mui/material/ListItemButton";
import Divider from "@mui/material/Divider";

import { list } from "../CONST";

const NavBar = ({ open, setOpen }) => {
  return (
    <>
      <SwipeableDrawer
      sx={{display:{xs:"block", md:"none"}}}
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        style={{ backdropFilter: "blur(10px)" }}>
        <Box sx={{ width: 250 , height:"100%", bgcolor: "#b8d274" }}>
          <nav>
            {list.top.map((item, index) => {
              return (
                <div key={index}>
                  <List>
                    <ListItem>
                      <ListItemButton>{item}</ListItemButton>
                    </ListItem>
                  </List>
                  <Divider />
                </div>
              );
            })}
          </nav>
        </Box>
      </SwipeableDrawer>
    </>
  );
};

export default NavBar;
