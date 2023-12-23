// import { styled, Typography, Theme } from "@mui/material";
// import { Box, Container } from "@mui/system";
// import React from "react";

// import fbIcon from "../media/fbicon.png";
// import twitterIcon from "../media/twittericon.png";
// import linkedinIcon from "../media/linkedinicon.png";

// const Footer: React.FC = () => {
//   const CustomContainer = styled(Container)<{ theme: Theme }>(({
//     theme
//   }) => ({
//     display: "flex",
//     justifyContent: "space-around",
//     gap: theme.spacing(5),
//     [theme.breakpoints.down("sm")]: {
//       flexDirection: "column",
//       textAlign: "center",
//     },
//   }));

//   const IconBox = styled(Box)<{ theme: Theme }>(({
//     theme
//   }) => ({
//     display: "flex",
//     alignItems: "center",
//     gap: "1rem",
//     [theme.breakpoints.down("sm")]: {
//       justifyContent: "center",
//     },
//   }));

//   const FooterLink = styled("span")(({ theme }) => ({
//     fontSize: "16px",
//     color: "#7A7A7E",
//     fontWeight: "300",
//     cursor: "pointer",
//     "&:hover": {
//       color: "#000",
//     },
//   }));

//   return (
//     <Box sx={{ py: 10 }}>
//       <CustomContainer>
//         <CustomContainer>
//           <Box>
//             <Typography
//               sx={{
//                 fontSize: "20px",
//                 color: "#1C1C1D",
//                 fontWeight: "700",
//                 mb: 2,
//               }}
//             >
//               Products
//             </Typography>

//             <FooterLink>Listing</FooterLink>
//             <br />
//             <FooterLink>Properties</FooterLink>
//             <br />
//             <FooterLink>Agents</FooterLink>
//             <br />
//             <FooterLink>Blog</FooterLink>
//           </Box>

//           <Box>
//             <Typography
//               sx={{
//                 fontSize: "20px",
//                 color: "#1C1C1D",
//                 fontWeight: "700",
//                 mb: 2,
//               }}
//             >
//               Resources
//             </Typography>

//             <FooterLink>Our Platform</FooterLink>
//             <br />
//             <FooterLink>Stories</FooterLink>
//             <br />
//             <FooterLink>Video</FooterLink>
//             <br />
//             <FooterLink>Free Trial</FooterLink>
//           </Box>

//           <Box>
//             <Typography
//               sx={{
//                 fontSize: "20px",
//                 color: "#1C1C1D",
//                 fontWeight: "700",
//                 mb: 2,
//               }}
//             >
//               Company
//             </Typography>

//             <FooterLink>Partnerships</FooterLink>
//             <br />
//             <FooterLink>Terms of use</FooterLink>
//             <br />
//             <FooterLink>Privacy</FooterLink>
//             <br />
//             <FooterLink>Sitemap</FooterLink>
//           </Box>

//           <Box>
//             <Typography
//               sx={{
//                 fontSize: "20px",
//                 color: "#1C1C1D",
//                 fontWeight: "700",
//                 mb: 2,
//               }}
//             >
//               Get in touch
//             </Typography>

//             <Typography
//               sx={{
//                 fontSize: "16px",
//                 color: "#7A7A7E",
//                 fontWeight: "500",
//                 mb: 2,
//               }}
//             >
//               Discover the ultimate platform to elevate your ad campaigns!
//             </Typography>

//             <IconBox>
//               <img src={fbIcon} alt="fbIcon" style={{ cursor: "pointer" }} />
//               <img
//                 src={twitterIcon}
//                 alt="twitterIcon"
//                 style={{ cursor: "pointer" }}
//               />
//               <img
//                 src={linkedinIcon}
//                 alt="linkedinIcon"
//                 style={{ cursor: "pointer" }}
//               />
//             </IconBox>
//           </Box>
//         </CustomContainer>
//       </CustomContainer>
//     </Box>
//   );
// };

// export default Footer;
import { styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";

// import fbIcon from "../media/fbicon.png";
// import twitterIcon from "../media/twittericon.png";
// import linkedinIcon from "../media/linkedinicon.png";

const Footer: React.FC = () => {
  const CustomContainer = styled(Container)({
    display: "flex",
    justifyContent: "space-around",
    gap: "1rem",
    flexDirection: "column",
    textAlign: "center",
  });

  const IconBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    justifyContent: "center",
  });

  const FooterLink = styled("span")({
    fontSize: "16px",
    color: "#7A7A7E",
    fontWeight: "300",
    cursor: "pointer",
    "&:hover": {
      color: "#000",
    },
  });

  return (
    <Box sx={{ py: 10 }}>
      <CustomContainer>
        <Box>
          <Typography
            sx={{
              fontSize: "20px",
              color: "#1C1C1D",
              fontWeight: "700",
              mb: 2,
            }}
          >
            Products
          </Typography>

          <FooterLink>Listing</FooterLink>
          <br />
          <FooterLink>Properties</FooterLink>
          <br />
          <FooterLink>Agents</FooterLink>
          <br />
          <FooterLink>Blog</FooterLink>
        </Box>

        <Box>
          <Typography
            sx={{
              fontSize: "20px",
              color: "#1C1C1D",
              fontWeight: "700",
              mb: 2,
            }}
          >
            Resources
          </Typography>

          <FooterLink>Our Platform</FooterLink>
          <br />
          <FooterLink>Stories</FooterLink>
          <br />
          <FooterLink>Video</FooterLink>
          <br />
          <FooterLink>Free Trial</FooterLink>
        </Box>

        <Box>
          <Typography
            sx={{
              fontSize: "20px",
              color: "#1C1C1D",
              fontWeight: "700",
              mb: 2,
            }}
          >
            Company
          </Typography>

          <FooterLink>Partnerships</FooterLink>
          <br />
          <FooterLink>Terms of use</FooterLink>
          <br />
          <FooterLink>Privacy</FooterLink>
          <br />
          <FooterLink>Sitemap</FooterLink>
        </Box>

        <Box>
          <Typography
            sx={{
              fontSize: "20px",
              color: "#1C1C1D",
              fontWeight: "700",
              mb: 2,
            }}
          >
            Get in touch
          </Typography>

          <Typography
            sx={{
              fontSize: "16px",
              color: "#7A7A7E",
              fontWeight: "500",
              mb: 2,
            }}
          >
            Discover the ultimate platform to elevate your ad campaigns!
          </Typography>

          <IconBox>
            <img src='/media/fbicon.png' alt="fbIcon" style={{ cursor: "pointer" }} />
            <img
              src='/media/twittericon.png'
              alt="twitterIcon"
              style={{ cursor: "pointer" }}
            />
            <img
              src= '/media/linkedinicon.png'
              alt="linkedinIcon"
              style={{ cursor: "pointer" }}
            />
          </IconBox>
        </Box>
      </CustomContainer>
    </Box>
  );
};

export default Footer;
