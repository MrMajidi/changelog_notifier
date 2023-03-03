import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import Menu from "@mui/material/Menu";
import { ChangelogResponse } from "@/interfaces";
import ChangelogPopup from "./ChangelogPopup";

const Navbar = ({
  unSeenCount,
  setUnSeenCount,
  unSeens,
}: {
  unSeenCount: number;
  setUnSeenCount: (count: number) => void;
  unSeens: string[];
}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setUnSeenCount(0);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = "primary-search-account-menu";
  const renderNotifications = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <ChangelogPopup changelogItems={unSeens} />
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Home task - Changelog Notifications
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Badge badgeContent={unSeenCount} color="error">
              <a
                href="#"
                className="text-white"
                onClick={handleProfileMenuOpen}
              >
                Release Notes
              </a>
            </Badge>
          </Box>
        </Toolbar>
      </AppBar>
      {renderNotifications}
    </Box>
  );
};

export default Navbar;
