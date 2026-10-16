// // import { useState, useEffect, useRef, useCallback } from "react";
// // import {
// //   AppBar,
// //   Toolbar,
// //   Box,
// //   Typography,
// //   IconButton,
// //   Drawer,
// //   List,
// //   ListItem,
// //   ListItemButton,
// //   ListItemText,
// // } from "@mui/material";

// // import MenuIcon from "@mui/icons-material/Menu";
// // import CloseIcon from "@mui/icons-material/Close";
// // import CustomButton from "./CustomButton";
// // import logo from "../assets/CampuspeLogo.png";

// // const navItems = [
// //   { label: "Colleges", href: "#colleges" },
// //   { label: "Employers", href: "#employers" },
// //   { label: "Jobs", href: "#jobs" },
// //   { label: "Blogs", href: "#blogs" },
// // ];

// // const Navbar = () => {
// //   const [mobileOpen, setMobileOpen] = useState(false);
// //   const [hidden, setHidden] = useState(false);

// //   const lastScrollY = useRef(0);

// //   const handleDrawerToggle = useCallback(() => {
// //     setMobileOpen((prev) => !prev);
// //   }, []);

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       const currentScrollY = window.scrollY;
// //       const previousScrollY = lastScrollY.current;

// //       // Always show the navbar at the top.
// //       if (currentScrollY <= 100) {
// //         setHidden(false);
// //       } else if (currentScrollY > previousScrollY) {
// //         // Scrolling down: hide navbar.
// //         setHidden(true);
// //       } else if (currentScrollY < previousScrollY) {
// //         // Scrolling up: show navbar.
// //         setHidden(false);
// //       }

// //       lastScrollY.current = currentScrollY;
// //     };

// //     window.addEventListener("scroll", handleScroll, {
// //       passive: true,
// //     });

// //     return () => {
// //       window.removeEventListener("scroll", handleScroll);
// //     };
// //   }, []);

// //   // Keep the navbar visible while the mobile drawer is open.
// //   const navbarHidden = hidden && !mobileOpen;

// //   return (
// //     <>
// //       <AppBar
// //         position="fixed"
// //         elevation={0}
// //         sx={{
// //           top: 0,
// //           left: 0,
// //           width: "100%",
// //           backgroundColor: "transparent",
// //           backgroundImage: "none",
// //           backdropFilter: "none",
// //           borderBottom: "none",
// //           boxShadow: "none",
// //           color: "var(--navy-900)",

// //           transform: navbarHidden ? "translateY(-100%)" : "translateY(0)",

// //           transition: "transform 0.3s ease-in-out",
// //           willChange: "transform",
// //           zIndex: (theme) => theme.zIndex.appBar,
// //         }}
// //       >
// //         {/* Navbar frame: maximum width 1440px */}
// //         <Box
// //           sx={{
// //             width: "100%",
// //             maxWidth: "1440px",
// //             mx: "auto",
// //           }}
// //         >
// //           <Toolbar
// //             disableGutters
// //             sx={{
// //               boxSizing: "border-box",
// //               width: "100%",
// //               height: { xs: "64px", lg: "80px" },
// //               minHeight: { xs: "64px", lg: "80px" },
// //               justifyContent: "space-between",
// //               alignItems: "center",
// //               pl: { xs: "20px", lg: "100px" },
// //               pr: { xs: "20px", lg: "100px" },
// //               py: 0,
// //             }}
// //           >
// //             {/* Logo */}
// //             <Box
// //               component="a"
// //               href="#"
// //               aria-label="Campuspe home"
// //               sx={{
// //                 display: "flex",
// //                 alignItems: "center",
// //                 flexShrink: 0,
// //                 textDecoration: "none",
// //               }}
// //             >
// //               <Box
// //                 component="img"
// //                 src={logo}
// //                 alt="Campuspe logo"
// //                 sx={{
// //                   width: { xs: "132px", lg: "178px" },
// //                   height: { xs: "40px", lg: "54px" },
// //                   objectFit: "contain",
// //                   display: "block",
// //                 }}
// //               />
// //             </Box>

// //             {/* Desktop navigation */}
// //             <Box
// //               component="nav"
// //               aria-label="Main navigation"
// //               sx={{
// //                 display: { xs: "none", lg: "flex" },
// //                 alignItems: "center",
// //                 justifyContent: "center",
// //                 boxSizing: "border-box",
// //                 minWidth: "436px",
// //                 width: "fit-content",
// //                 height: "35px",
// //                 px: "20px",
// //                 gap: "56px",
// //               }}
// //             >
// //               {navItems.map((item) => (
// //                 <Typography
// //                   key={item.label}
// //                   component="a"
// //                   href={item.href}
// //                   sx={{
// //                     fontFamily: '"Inter Variable", "Inter", sans-serif',
// //                     fontWeight: 500,
// //                     fontSize: "16px",
// //                     lineHeight: "100%",
// //                     letterSpacing: 0,
// //                     color: "var(--slate-700)",
// //                     textDecoration: "none",
// //                     whiteSpace: "nowrap",
// //                     transition: "color 0.2s ease",
// //                     "&:hover": {
// //                       color: "var(--blue-primary)",
// //                     },
// //                   }}
// //                 >
// //                   {item.label}
// //                 </Typography>
// //               ))}
// //             </Box>

// //             {/* Desktop CTA */}
// //             <Box
// //               sx={{
// //                 display: { xs: "none", lg: "flex" },
// //                 flexShrink: 0,
// //               }}
// //             >
// //               {/* Sign In - Ghost Button */}
// //               <CustomButton
// //                 size="sm"
// //                 type="Ghost"
// //                 href="#signin"
// //                 sx={{
// //                   width: "76px",
// //                   height: "36px",
// //                   minWidth: "64px",
// //                   padding: "2px 8px",
// //                   gap: 0,
// //                   borderRadius: "100px",

// //                   backgroundColor: "transparent",
// //                   backgroundImage: "none",
// //                   color: "#1B1818",
// //                   boxShadow: "none",

// //                   fontFamily: '"Inter", sans-serif',
// //                   fontSize: "16px",
// //                   fontWeight: 500,
// //                   lineHeight: "100%",
// //                   letterSpacing: "0%",
// //                   whiteSpace: "nowrap",

// //                   "&:hover": {
// //                     backgroundColor: "#F5F5F5",
// //                     backgroundImage: "none",
// //                     boxShadow: "none",
// //                     transform: "none",
// //                   },

// //                   "&:active": {
// //                     transform: "none",
// //                   },
// //                 }}
// //               >
// //                 Sign In
// //               </CustomButton>

// //               <CustomButton
// //                 size="md"
// //                 type="Primary"
// //                 pill
// //                 href="#contact"
// //                 sx={{
// //                   width: "92px",
// //                   height: "36px",
// //                   minWidth: "80px",
// //                   padding: "6px 12px",
// //                   gap: "4px",
// //                   borderRadius: "100px",
// //                   backgroundColor: "#007FFC",
// //                   backgroundImage: "none",
// //                   color: "#FFFFFF",
// //                   boxShadow: "none",

// //                   fontFamily: '"Inter", sans-serif',
// //                   fontSize: "16px",
// //                   fontWeight: 500,
// //                   lineHeight: "19px",
// //                   letterSpacing: 0,
// //                   whiteSpace: "nowrap",

// //                   "&:hover": {
// //                     backgroundColor: "#006BE6",
// //                     backgroundImage: "none",
// //                     boxShadow: "0px 2px 5px rgba(0, 127, 252, 0.18)",
// //                     transform: "translateY(-1px)",
// //                   },

// //                   "&:active": {
// //                     transform: "translateY(0)",
// //                   },
// //                 }}
// //               >
// //                 Sign up
// //               </CustomButton>
// //             </Box>

// //             {/* Mobile menu button */}
// //             <IconButton
// //               edge="end"
// //               aria-label="Open navigation menu"
// //               aria-expanded={mobileOpen}
// //               onClick={handleDrawerToggle}
// //               sx={{
// //                 display: { xs: "inline-flex", lg: "none" },
// //                 color: "var(--slate-800)",
// //               }}
// //             >
// //               <MenuIcon />
// //             </IconButton>
// //           </Toolbar>
// //         </Box>
// //       </AppBar>

// //       {/* Reserve navbar space in the page layout */}
// //       <Box
// //         aria-hidden="true"
// //         sx={{
// //           height: { xs: "64px", lg: "80px" },
// //           flexShrink: 0,
// //         }}
// //       />

// //       {/* Mobile drawer */}
// //       <Drawer
// //         anchor="right"
// //         open={mobileOpen}
// //         onClose={() => setMobileOpen(false)}
// //         PaperProps={{
// //           sx: {
// //              width: { xs: "85vw", sm: "360px" },
// //             p: 2,
// //             backgroundColor: "#ffffff",
// //           },
// //         }}
// //       >
// //         <Box
// //           sx={{
// //             display: "flex",
// //             justifyContent: "flex-end",
// //             mb: 2,
// //           }}
// //         >
// //           <IconButton
// //             aria-label="Close navigation menu"
// //             onClick={() => setMobileOpen(false)}
// //           >
// //             <CloseIcon />
// //           </IconButton>
// //         </Box>

// //         <List>
// //           {navItems.map((item) => (
// //             <ListItem key={item.label} disablePadding>
// //               <ListItemButton
// //                 component="a"
// //                 href={item.href}
// //                 onClick={() => setMobileOpen(false)}
// //                 sx={{
// //                   borderRadius: "8px",
// //                   my: 0.5,
// //                   px: 2,
// //                   py: 1.2,
// //                   textDecoration: "none",
// //                   color: "var(--slate-800)",
// //                 }}
// //               >
// //                 <ListItemText
// //                   primary={item.label}
// //                   primaryTypographyProps={{
// //                     fontWeight: 500,
// //                     fontSize: "16px",
// //                     fontFamily: '"Inter Variable", "Inter", sans-serif',
// //                   }}
// //                 />
// //               </ListItemButton>
// //             </ListItem>
// //           ))}

// //           <Box sx={{ mt: 3 }}>
// //             <CustomButton
// //               size="lg"
// //               type="Primary"
// //               pill
// //               fullWidth
// //               href="#contact"
// //               onClick={() => setMobileOpen(false)}
// //               sx={{
// //                 backgroundColor: "#007FFC",
// //                 backgroundImage: "none",
// //                 color: "#FFFFFF",
// //                 borderRadius: "9999px",
// //                 height: "44px",
// //                 boxShadow: "0px 1px 2px 0px #0000000D",
// //                 "&:hover": {
// //                   backgroundColor: "#006BE6",
// //                   backgroundImage: "none",
// //                   boxShadow: "0px 3px 8px rgba(0, 127, 252, 0.2)",
// //                   transform: "translateY(-1px)",
// //                 },
// //               }}
// //             >
// //               Sign up
// //             </CustomButton>
// //           </Box>
// //         </List>
// //       </Drawer>
// //     </>
// //   );
// // };

// // export default Navbar;

// // FILE: src/components/Navbar.jsx

// import { useState, useEffect, useRef, useCallback } from "react";
// import {
//   AppBar,
//   Toolbar,
//   Box,
//   Typography,
//   IconButton,
//   Drawer,
//   List,
//   ListItem,
//   ListItemButton,
//   ListItemText,
// } from "@mui/material";

// import MenuIcon from "@mui/icons-material/Menu";
// import CloseIcon from "@mui/icons-material/Close";
// import CustomButton from "./CustomButton";
// import logo from "../assets/CampuspeLogo.png";

// const navItems = [
//   { label: "Colleges", href: "#colleges" },
//   { label: "Employers", href: "#employers" },
//   { label: "Jobs", href: "#jobs" },
//   { label: "Blogs", href: "#blogs" },
// ];

// const Navbar = () => {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [hidden, setHidden] = useState(false);

//   const lastScrollY = useRef(0);

//   const handleDrawerToggle = useCallback(() => {
//     setMobileOpen((prev) => !prev);
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;
//       const previousScrollY = lastScrollY.current;

//       // Always show the navbar at the top.
//       if (currentScrollY <= 100) {
//         setHidden(false);
//       } else if (currentScrollY > previousScrollY) {
//         // Scrolling down: hide navbar.
//         setHidden(true);
//       } else if (currentScrollY < previousScrollY) {
//         // Scrolling up: show navbar.
//         setHidden(false);
//       }

//       lastScrollY.current = currentScrollY;
//     };

//     window.addEventListener("scroll", handleScroll, {
//       passive: true,
//     });

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   // Keep the navbar visible while the mobile drawer is open.
//   const navbarHidden = hidden && !mobileOpen;

//   return (
//     <>
//       <AppBar
//         position="fixed"
//         elevation={0}
//         sx={{
//           top: 0,
//           left: 0,
//           width: "100%",
//           backgroundColor: "transparent",
//           backgroundImage: "none",
//           backdropFilter: "none",
//           borderBottom: "none",
//           boxShadow: "none",
//           color: "var(--navy-900)",

//           transform: navbarHidden ? "translateY(-100%)" : "translateY(0)",

//           transition: "transform 0.3s ease-in-out",
//           willChange: "transform",
//           zIndex: (theme) => theme.zIndex.appBar,
//         }}
//       >
//         {/* Navbar frame: maximum width 1440px */}
//         <Box
//           sx={{
//             width: "100%",
//             maxWidth: "1440px",
//             mx: "auto",
//           }}
//         >
//           <Toolbar
//             disableGutters
//             sx={{
//               boxSizing: "border-box",
//               width: "100%",
//               height: { xs: "64px", lg: "80px" },
//               minHeight: { xs: "64px", lg: "80px" },
//               justifyContent: "space-between",
//               alignItems: "center",
//               pl: { xs: "20px", lg: "100px" },
//               pr: { xs: "20px", lg: "100px" },
//               py: 0,
//             }}
//           >
//             {/* Logo */}
//             <Box
//               component="a"
//               href="#"
//               aria-label="Campuspe home"
//               sx={{
//                 display: "flex",
//                 alignItems: "center",
//                 flexShrink: 0,
//                 textDecoration: "none",
//               }}
//             >
//               <Box
//                 component="img"
//                 src={logo}
//                 alt="Campuspe logo"
//                 sx={{
//                   width: { xs: "132px", lg: "178px" },
//                   height: { xs: "40px", lg: "54px" },
//                   objectFit: "contain",
//                   display: "block",
//                 }}
//               />
//             </Box>

//             {/* Desktop navigation */}
//             <Box
//               component="nav"
//               aria-label="Main navigation"
//               sx={{
//                 display: { xs: "none", lg: "flex" },
//                 alignItems: "center",
//                 justifyContent: "center",
//                 boxSizing: "border-box",
//                 minWidth: "436px",
//                 width: "fit-content",
//                 height: "35px",
//                 px: "20px",
//                 gap: "56px",
//               }}
//             >
//               {navItems.map((item) => (
//                 <Typography
//                   key={item.label}
//                   component="a"
//                   href={item.href}
//                   sx={{
//                     fontFamily: '"Inter Variable", "Inter", sans-serif',
//                     fontWeight: 500,
//                     fontSize: "16px",
//                     lineHeight: "100%",
//                     letterSpacing: 0,
//                     color: "var(--slate-700)",
//                     textDecoration: "none",
//                     whiteSpace: "nowrap",
//                     transition: "color 0.2s ease",
//                     "&:hover": {
//                       color: "var(--blue-primary)",
//                     },
//                   }}
//                 >
//                   {item.label}
//                 </Typography>
//               ))}
//             </Box>

//             {/* Desktop CTA */}
//             <Box
//               sx={{
//                 display: { xs: "none", lg: "flex" },
//                 flexShrink: 0,
//               }}
//             >
//               {/* Sign In - Ghost Button */}
//               <CustomButton
//                 size="sm"
//                 type="Ghost"
//                 href="#signin"
//                 sx={{
//                   width: "76px",
//                   height: "36px",
//                   minWidth: "64px",
//                   padding: "2px 8px",
//                   gap: 0,
//                   borderRadius: "100px",

//                   backgroundColor: "transparent",
//                   backgroundImage: "none",
//                   color: "#1B1818",
//                   boxShadow: "none",

//                   fontFamily: '"Inter", sans-serif',
//                   fontSize: "16px",
//                   fontWeight: 500,
//                   lineHeight: "100%",
//                   letterSpacing: "0%",
//                   whiteSpace: "nowrap",

//                   "&:hover": {
//                     backgroundColor: "#F5F5F5",
//                     backgroundImage: "none",
//                     boxShadow: "none",
//                     transform: "none",
//                   },

//                   "&:active": {
//                     transform: "none",
//                   },
//                 }}
//               >
//                 Sign In
//               </CustomButton>

//               <CustomButton
//                 size="md"
//                 type="Primary"
//                 pill
//                 href="#contact"
//                 sx={{
//                   width: "92px",
//                   height: "36px",
//                   minWidth: "80px",
//                   padding: "6px 12px",
//                   gap: "4px",
//                   borderRadius: "100px",
//                   backgroundColor: "#007FFC",
//                   backgroundImage: "none",
//                   color: "#FFFFFF",
//                   boxShadow: "none",

//                   fontFamily: '"Inter", sans-serif',
//                   fontSize: "16px",
//                   fontWeight: 500,
//                   lineHeight: "19px",
//                   letterSpacing: 0,
//                   whiteSpace: "nowrap",

//                   "&:hover": {
//                     backgroundColor: "#006BE6",
//                     backgroundImage: "none",
//                     boxShadow: "0px 2px 5px rgba(0, 127, 252, 0.18)",
//                     transform: "translateY(-1px)",
//                   },

//                   "&:active": {
//                     transform: "translateY(0)",
//                   },
//                 }}
//               >
//                 Sign up
//               </CustomButton>
//             </Box>

//             {/* Mobile menu button */}
//             <IconButton
//               edge="end"
//               aria-label="Open navigation menu"
//               aria-expanded={mobileOpen}
//               onClick={handleDrawerToggle}
//               sx={{
//                 display: { xs: "inline-flex", lg: "none" },
//                 color: "var(--slate-800)",
//               }}
//             >
//               <MenuIcon />
//             </IconButton>
//           </Toolbar>
//         </Box>
//       </AppBar>

//       {/* Reserve navbar space in the page layout */}
//       <Box
//         aria-hidden="true"
//         sx={{
//           height: { xs: "64px", lg: "80px" },
//           flexShrink: 0,
//         }}
//       />

//       {/* Mobile drawer */}
//       <Drawer
//         anchor="right"
//         open={mobileOpen}
//         onClose={() => setMobileOpen(false)}
//         PaperProps={{
//           sx: {
//             width: { xs: "85vw", sm: "380px" },
//             maxWidth: "420px",
//             minWidth: { xs: "280px", sm: "320px" },
//             height: "100dvh",
//             boxSizing: "border-box",
//             p: 0, // Control padding inside individual sections
//             backgroundColor: "#FFFFFF",
//             overflowX: "hidden",
//           },
//         }}
//       >
//         {/* Mobile drawer close button */}
//         <Box
//           sx={{
//             display: "flex",
//             justifyContent: "flex-end",
//             mb: 2,
//           }}
//         >
//           <IconButton
//             aria-label="Close navigation menu"
//             onClick={() => setMobileOpen(false)}
//           >
//             <CloseIcon />
//           </IconButton>
//         </Box>

//         {/* Mobile navigation links */}
//         <List>
//           {navItems.map((item) => (
//             <ListItem key={item.label} disablePadding>
//               <ListItemButton
//                 component="a"
//                 href={item.href}
//                 onClick={() => setMobileOpen(false)}
//                 sx={{
//                   borderRadius: "10px",
//                   my: 0.75, // UPDATED: more vertical spacing
//                   px: 2,
//                   py: 1.8, // UPDATED: larger touch target
//                   textDecoration: "none",
//                   color: "var(--slate-800)",
//                 }}
//               >
//                 <ListItemText
//                   primary={item.label}
//                   primaryTypographyProps={{
//                     fontWeight: 500,
//                     fontSize: "17px", // UPDATED: larger mobile text
//                     fontFamily: '"Inter Variable", "Inter", sans-serif',
//                   }}
//                 />
//               </ListItemButton>
//             </ListItem>
//           ))}

//           {/* Mobile Sign In and Sign Up buttons */}
//           <Box
//             sx={{
//               mt: 4,
//               display: "flex",
//               flexDirection: "column",
//               gap: 1.5,
//             }}
//           >
//             {/* NEW: Mobile Sign In button */}
//             <CustomButton
//               size="lg"
//               type="Secondary"
//               fullWidth
//               href="#signin"
//               onClick={() => setMobileOpen(false)}
//               sx={{
//                 height: "48px",
//                 borderRadius: "9999px",
//                 fontSize: "16px",
//                 fontWeight: 600,
//                 backgroundColor: "#FFFFFF",
//                 color: "#007FFC",
//                 border: "1px solid #0098FF",
//                 boxShadow: "none",
//                 "&:hover": {
//                   backgroundColor: "#F0F8FF",
//                   boxShadow: "none",
//                   transform: "none",
//                 },
//               }}
//             >
//               Sign In
//             </CustomButton>

//             {/* UPDATED: Mobile Sign Up button */}
//             <CustomButton
//               size="lg"
//               type="Primary"
//               pill
//               fullWidth
//               href="#contact"
//               onClick={() => setMobileOpen(false)}
//               sx={{
//                 height: "48px",
//                 borderRadius: "9999px",
//                 fontSize: "16px",
//                 fontWeight: 600,
//                 backgroundColor: "#007FFC",
//                 backgroundImage: "none",
//                 color: "#FFFFFF",
//                 boxShadow: "0px 1px 2px 0px #0000000D",
//                 "&:hover": {
//                   backgroundColor: "#006BE6",
//                   backgroundImage: "none",
//                   boxShadow: "0px 3px 8px rgba(0, 127, 252, 0.2)",
//                   transform: "translateY(-1px)",
//                 },
//               }}
//             >
//               Sign Up
//             </CustomButton>
//           </Box>
//         </List>
//       </Drawer>
//     </>
//   );
// };

// export default Navbar;



import { useState, useEffect, useRef, useCallback } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import CustomButton from "./CustomButton";
import logo from "../assets/CampuspeLogo.png";

const navItems = [
  { label: "Colleges", href: "#colleges" },
  { label: "Employers", href: "#employers" },
  { label: "Jobs", href: "#jobs" },
  { label: "Blogs", href: "#blogs" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  const lastScrollY = useRef(0);

  const handleDrawerToggle = useCallback(() => {
    setMobileOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const previousScrollY = lastScrollY.current;

      if (currentScrollY <= 100) {
        setHidden(false);
      } else if (currentScrollY > previousScrollY) {
        setHidden(true);
      } else if (currentScrollY < previousScrollY) {
        setHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Keep navbar visible when the mobile drawer is open.
  const navbarHidden = hidden && !mobileOpen;

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          top: 0,
          left: 0,
          width: "100%",
          backgroundColor: "transparent",
          backgroundImage: "none",
          backdropFilter: "none",
          borderBottom: "none",
          boxShadow: "none",
          color: "var(--navy-900)",
          transform: navbarHidden
            ? "translateY(-100%)"
            : "translateY(0)",
          transition: "transform 0.3s ease-in-out",
          willChange: "transform",
          zIndex: (theme) => theme.zIndex.appBar,
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: "1440px",
            mx: "auto",
          }}
        >
          <Toolbar
            disableGutters
            sx={{
              boxSizing: "border-box",
              width: "100%",
              height: { xs: "64px", lg: "80px" },
              minHeight: { xs: "64px", lg: "80px" },
              justifyContent: "space-between",
              alignItems: "center",
              pl: { xs: "20px", lg: "100px" },
              pr: { xs: "20px", lg: "100px" },
              py: 0,
            }}
          >
            {/* Logo */}
            <Box
              component="a"
              href="#"
              aria-label="Campuspe home"
              sx={{
                display: "flex",
                alignItems: "center",
                flexShrink: 0,
                textDecoration: "none",
              }}
            >
              <Box
                component="img"
                src={logo}
                alt="Campuspe logo"
                sx={{
                  width: { xs: "132px", lg: "178px" },
                  height: { xs: "40px", lg: "54px" },
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </Box>

            {/* Desktop navigation */}
            <Box
              component="nav"
              aria-label="Main navigation"
              sx={{
                display: { xs: "none", lg: "flex" },
                alignItems: "center",
                justifyContent: "center",
                boxSizing: "border-box",
                minWidth: "436px",
                width: "fit-content",
                height: "35px",
                px: "20px",
                gap: "56px",
              }}
            >
              {navItems.map((item) => (
                <Typography
                  key={item.label}
                  component="a"
                  href={item.href}
                  sx={{
                    fontFamily: '"Inter Variable", "Inter", sans-serif',
                    fontWeight: 500,
                    fontSize: "16px",
                    lineHeight: "100%",
                    letterSpacing: 0,
                    color: "var(--slate-700)",
                    textDecoration: "none",
                    whiteSpace: "nowrap",
                    transition: "color 0.2s ease",
                    "&:hover": {
                      color: "var(--blue-primary)",
                    },
                  }}
                >
                  {item.label}
                </Typography>
              ))}
            </Box>

            {/* Desktop buttons */}
            <Box
              sx={{
                display: { xs: "none", lg: "flex" },
                alignItems: "center",
                flexShrink: 0,
              }}
            >
              <CustomButton
                size="sm"
                type="Ghost"
                href="#signin"
                sx={{
                  width: "76px",
                  height: "36px",
                  minWidth: "64px",
                  padding: "2px 8px",
                  gap: 0,
                  borderRadius: "100px",
                  backgroundColor: "transparent",
                  backgroundImage: "none",
                  color: "#1B1818",
                  boxShadow: "none",
                  fontFamily: '"Inter", sans-serif',
                  fontSize: "16px",
                  fontWeight: 500,
                  lineHeight: "100%",
                  whiteSpace: "nowrap",
                  "&:hover": {
                    backgroundColor: "#F5F5F5",
                    backgroundImage: "none",
                    boxShadow: "none",
                    transform: "none",
                  },
                  "&:active": {
                    transform: "none",
                  },
                }}
              >
                Sign In
              </CustomButton>

              <CustomButton
                size="md"
                type="Primary"
                pill
                href="#contact"
                sx={{
                  width: "92px",
                  height: "36px",
                  minWidth: "80px",
                  padding: "6px 12px",
                  gap: "4px",
                  borderRadius: "100px",
                  backgroundColor: "#007FFC",
                  backgroundImage: "none",
                  color: "#FFFFFF",
                  boxShadow: "none",
                  fontFamily: '"Inter", sans-serif',
                  fontSize: "16px",
                  fontWeight: 500,
                  lineHeight: "19px",
                  whiteSpace: "nowrap",
                  "&:hover": {
                    backgroundColor: "#006BE6",
                    backgroundImage: "none",
                    boxShadow: "0px 2px 5px rgba(0, 127, 252, 0.18)",
                    transform: "translateY(-1px)",
                  },
                  "&:active": {
                    transform: "translateY(0)",
                  },
                }}
              >
                Sign up
              </CustomButton>
            </Box>

            {/* Mobile menu icon */}
            <IconButton
              edge="end"
              aria-label="Open navigation menu"
              aria-expanded={mobileOpen}
              onClick={handleDrawerToggle}
              sx={{
                display: { xs: "inline-flex", lg: "none" },
                color: "var(--slate-800)",
                p: 1,
              }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Box>
      </AppBar>

      {/* Reserve navbar space */}
      <Box
        aria-hidden="true"
        sx={{
          height: { xs: "64px", lg: "80px" },
          flexShrink: 0,
        }}
      />

      {/* ================= MOBILE DRAWER ================= */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{
          sx: {
            // IMPORTANT: Set the actual drawer panel width here.
            width: "min(88vw, 420px) !important",
            minWidth: "280px",
            maxWidth: "420px",
            height: "100%",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#FFFFFF",
            overflowX: "hidden",
            overflowY: "auto",
            borderTopLeftRadius: { xs: "20px", sm: "0px" },
            borderBottomLeftRadius: { xs: "20px", sm: "0px" },
            boxShadow: "-12px 0 40px rgba(15, 23, 42, 0.12)",
          },
        }}
      >
        {/* Drawer header and close button */}
        <Box
          sx={{
            width: "100%",
            boxSizing: "border-box",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: 3,
            pt: 2.5,
            pb: 2,
            borderBottom: "1px solid #F1F5F9",
          }}
        >
          <Typography
            sx={{
              fontFamily: '"Inter Variable", "Inter", sans-serif',
              fontSize: "18px",
              fontWeight: 700,
              color: "#172033",
            }}
          >
            Menu
          </Typography>

          <IconButton
            aria-label="Close navigation menu"
            onClick={() => setMobileOpen(false)}
            sx={{
              width: "42px",
              height: "42px",
              color: "#334155",
              backgroundColor: "#F8FAFC",
              "&:hover": {
                backgroundColor: "#EAF3FF",
              },
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Navigation links with generous spacing */}
        <List
          component="nav"
          aria-label="Mobile navigation"
          sx={{
            width: "100%",
            boxSizing: "border-box",
            px: 3,
            py: 3,
            m: 0,
          }}
        >
          {navItems.map((item) => (
            <ListItem
              key={item.label}
              disablePadding
              sx={{
                display: "block",
                width: "100%",
                mb: 1.25,
              }}
            >
              <ListItemButton
                component="a"
                href={item.href}
                onClick={() => setMobileOpen(false)}
                sx={{
                  display: "flex",
                  width: "100%",
                  minHeight: "58px",
                  boxSizing: "border-box",
                  px: 2.5,
                  py: 2,
                  borderRadius: "12px",
                  border: "1px solid #F1F5F9",
                  backgroundColor: "#FFFFFF",
                  color: "#1E293B",
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    backgroundColor: "#F0F7FF",
                    borderColor: "#D6E9FF",
                  },
                  "&:active": {
                    backgroundColor: "#E6F2FF",
                  },
                }}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontFamily: '"Inter Variable", "Inter", sans-serif',
                    fontWeight: 600,
                    fontSize: "17px",
                    lineHeight: 1.4,
                    color: "inherit",
                  }}
                />

                <Typography
                  aria-hidden="true"
                  sx={{
                    ml: 1,
                    fontSize: "24px",
                    lineHeight: 1,
                    color: "#94A3B8",
                  }}
                >
                  ›
                </Typography>
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        {/* Sign In and Sign Up buttons */}
        <Box
          sx={{
            width: "100%",
            boxSizing: "border-box",
            mt: "auto",
            px: 3,
            pt: 2,
            pb: 4,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            borderTop: "1px solid #F1F5F9",
          }}
        >
          <CustomButton
            size="lg"
            type="Secondary"
            fullWidth
            href="#signin"
            onClick={() => setMobileOpen(false)}
            sx={{
              width: "100%",
              height: "50px",
              boxSizing: "border-box",
              borderRadius: "9999px",
              fontSize: "16px",
              fontWeight: 600,
              backgroundColor: "#FFFFFF",
              color: "#007FFC",
              border: "1px solid #0098FF",
              boxShadow: "none",
              "&:hover": {
                backgroundColor: "#F0F8FF",
                boxShadow: "none",
                transform: "none",
              },
            }}
          >
            Sign In
          </CustomButton>

          <CustomButton
            size="lg"
            type="Primary"
            pill
            fullWidth
            href="#contact"
            onClick={() => setMobileOpen(false)}
            sx={{
              width: "100%",
              height: "50px",
              boxSizing: "border-box",
              borderRadius: "9999px",
              fontSize: "16px",
              fontWeight: 600,
              backgroundColor: "#007FFC",
              backgroundImage: "none",
              color: "#FFFFFF",
              boxShadow: "0px 1px 2px 0px #0000000D",
              "&:hover": {
                backgroundColor: "#006BE6",
                backgroundImage: "none",
                boxShadow: "0px 3px 8px rgba(0, 127, 252, 0.2)",
                transform: "translateY(-1px)",
              },
            }}
          >
            Sign Up
          </CustomButton>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
