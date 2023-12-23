// // Properties.tsx
// import React from "react";
// import { Box, Container, styled, Typography } from "@mui/material";
// import House from "./House";
// import bedroomsIcon from "../media/bedroomsIcon.png";
// import bathroomsIcon from "../media/bathroomsIcon.png";
// import spaceIcon from "../media/spaceIcon.png";

// const PropertiesBox = styled(Box)(({ theme }) => ({
//   display: "flex",
//   justifyContent: "space-between",
//   marginTop: theme.spacing(5),
//   [theme.breakpoints.down("md")]: {
//     flexDirection: "column",
//     alignItems: "center",
//   },
// }));

// const PropertiesTextBox = styled(Box)(({ theme }) => ({
//   [theme.breakpoints.down("md")]: {
//     textAlign: "center",
//   },
// }));

// const HouseBox = styled(Box)(({ theme }) => ({
//   borderRadius: "15px",
//   overflow: "hidden",
//   boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//   backgroundColor: "#fff",
//   transition: "transform 0.3s",
//   "&:hover": {
//     transform: "scale(1.05)",
//   },
//   [theme.breakpoints.down("md")]: {
//     margin: theme.spacing(2, 0, 2, 0),
//   },
//   maxWidth: 400, // Adjust the maxWidth for a larger card
// }));

// const ImgContainer = styled(Box)(({ theme }) => ({
//   width: "100%",
//   position: "relative",
//   overflow: "hidden",
//   paddingTop: "60%", // Adjusted aspect ratio for better visuals
// }));

// const Img = styled("img")(() => ({
//   width: "100%",
//   height: "100%",
//   objectFit: "cover",
//   position: "absolute",
//   top: 0,
//   left: 0,
// }));

// const InfoBox = styled(Box)(() => ({
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
//   padding: "1rem",
// }));

// const HouseComponent = ({ name, bedrooms, bathrooms, space, img }) => (
//   <HouseBox>
//     <ImgContainer>
//       <Img src={img} alt="housePhoto" />
//     </ImgContainer>

//     <Box sx={{ padding: "1rem" }}>
//       <Typography variant="body2" sx={{ fontWeight: "700" }}>
//         {name}
//       </Typography>
//       <Box sx={{ my: 2 }}>
//         {/* Additional details */}
//       </Box>

//       <Box
//         sx={{
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "space-between",
//         }}
//       >
//         <InfoBox>
//           {/* <img src={bedroomsIcon} alt="bedroomsIcon" /> */}
//           <Typography variant="body2" sx={{ mt: 1 }}>
//             {bedrooms}
//           </Typography>
//         </InfoBox>

//         <InfoBox>
//           {/* <img src={} alt="bathroomssIcon" /> */}
//           <Typography variant="body2" sx={{ mt: 1 }}>
//             {bathrooms}
//           </Typography>
//         </InfoBox>

//         <InfoBox>
//           <img src={spaceIcon} alt="spaceIcon" />
//           <Typography variant="body2" sx={{ mt: 1 }}>
//             {space}
//           </Typography>
//         </InfoBox>
//       </Box>
//     </Box>
//   </HouseBox>
// );

// const Properties = () => (
//   <Box sx={{ mt: 5, backgroundColor: "#F5FAFE", py: 10 }}>
//     <Container>
//       <PropertiesTextBox>
//         <Typography
//           sx={{ color: "#000339", fontSize: "35px", fontWeight: "bold" }}
//         >
//           Featured Platforms
//         </Typography>
//         <Typography sx={{ color: "#5A6473", fontSize: "16px", mt: 1 }}>
//           Platforms where you can unleash your ad campaigns
//         </Typography>
//       </PropertiesTextBox>

//       <PropertiesBox>
//         {properties.map((property) => (
//           <HouseComponent key={property.id} {...property} />
//         ))}
//       </PropertiesBox>
//     </Container>
//   </Box>
// );

// export default Properties;

// // properties.ts
// export const properties = [
//   {
//     id: "1",
//     img: require("./media/image1.png").default, // Using require for dynamic import
//     name: "Facebook",
//     currentAds: "1000",
//   },

//   {
//     id: "2",
//     img: require("./media/image2.png").default,
//     name: "Instagram",
//     currentAds: "1000",
//   },

//   {
//     id: "3",
//     img: require("./media/image3.png").default,
//     name: "Google",
//     currentAds: "1000",
//   },
// ];