/* eslint-disable react/prop-types */
import * as React from "react";

import { list } from "../CONST";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Container, Grid } from "@mui/material";

const drawerWidth = 240;

function MainFeed(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {list.top.map((text) => (
          <ListItem
            key={text}
            disablePadding>
            <ListItemButton>
              <ListItemText
                className="text-center  italic "
                sx={{ color: "text.hint" }}
                primary={text}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        style={{ backgroundColor: "transparent", backdropFilter: "blur(5px)", boxShadow: "none"}}
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}>
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div">
            Kalipedia
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            backgroundColor: "primary.main",
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}>
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#1A1A1A",
            },
          }}
          open>
          {drawer}
        </Drawer>
      </Box>
      <Box
        style={{}}
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}>
        <Toolbar />
        <Grid
          container
          spacing={2}
          
          columns={16}>
          <Grid
            item
            sx={{pr:2}}
            xs={12}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam iure, temporibus facere possimus quasi natus rerum obcaecati consequuntur nisi earum, necessitatibus ad ea. Eaque libero enim eveniet facere, necessitatibus soluta?
            </Grid>
          <Grid
            item
            sx={{ backgroundColor: "#1A1A1A" }}
            xs={4}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae magni amet doloremque natus nisi, quibusdam, odit, expedita quas magnam quia porro facilis nostrum? Temporibus dignissimos dolorem velit dolore, totam cum.
            </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default MainFeed;
