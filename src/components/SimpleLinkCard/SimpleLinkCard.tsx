import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import rawMaterialImage from "./../../assets/images/raw-material.jpeg";
import productionDetailImage from "./../../assets/images/production-detail.jpeg";
import { useNavigate } from "react-router-dom";
export type SimpleLinkCardProps = {
  title: string;
  description: string;
  imageName?: string;
  height?: number;
  linkPath: string;
};

const SimpleLinkCard = ({
  title,
  description,
  imageName,
  height,
  linkPath,
}: // link,
SimpleLinkCardProps) => {
  const navigate = useNavigate();
  let imagePath = rawMaterialImage;

  switch (imageName) {
    case "raw-material":
      // setImagePath(rawMaterialImage);
      imagePath = rawMaterialImage;
      break;
    case "production-detail":
      // setImagePath(rawMaterialImage);
      imagePath = productionDetailImage;
      break;
    default:
      // setImagePath(rawMaterialImage);
      imagePath = rawMaterialImage;
  }

  return (
    <Card sx={{ maxWidth: 345, height: height || 300 }}>
      <CardActionArea
        onClick={() => {
          navigate(linkPath);
        }}
      >
        <CardMedia component="img" height="140" image={imagePath} alt={title} />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default SimpleLinkCard;
