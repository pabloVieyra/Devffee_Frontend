import React from "react";

//Styles
import s from "./Title.module.css";
//MUI
import { Typography } from "@mui/material";

const Title = ({
  titleText,
  titleTextColor = "#46382E",
  titleMuiVariant = "h2",
  imageUrl,
  bckgColor = "#D2BFAF",
  bckgOpacity = "0.4",
  titlePadding = "6rem",
}) => {
  const containerStyles = {
    paddingBlock: titlePadding,
    background: !imageUrl && bckgColor,
  };

  return (
    <div className={s.container} style={containerStyles}>
      <Typography
        align="center"
        color={titleTextColor}
        sx={{
          fontFamily: "Poppins",
          fontWeight: 500,
          fontSize: { xs: "2rem", md: "3rem", lg: "3.5rem" },
        }}
        variant={titleMuiVariant}
      >
        {titleText}
      </Typography>
      {imageUrl && (
        <img
          alt=""
          className={s.bckg}
          src={imageUrl}
          style={{ opacity: `${bckgOpacity}` }}
        />
      )}
    </div>
  );
};

export default Title;
