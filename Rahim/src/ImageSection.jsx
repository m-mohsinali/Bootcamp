import React from "react";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function ImageSection({ filteredData, data }) {
  console.log(filteredData);
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        {(filteredData ? filteredData : data.photos).map((value) =>
          !filteredData && value.id === 1 ? (
            <>
              <CardMedia
                component="img"
                height="194"
                image={value.image_url}
                alt="Image"
              />
              <CardContent>
                <Typography variant="h4" color="text.primary">
                  {value.heading}
                </Typography>
                <Typography variant="body5" color="text.secondary">
                  {value.description}
                </Typography>
              </CardContent>
            </>
          ) : filteredData ? (
            <>
              <CardMedia
                component="img"
                height="194"
                image={value.image_url}
                alt="Image"
              />
              <CardContent>
                <Typography variant="h4" color="text.primary">
                  {value.heading}
                </Typography>
                <Typography variant="body5" color="text.secondary">
                  {value.description}
                </Typography>
              </CardContent>
            </>
          ) : null
        )}

        {/* <CardMedia
          component="img"
          height="194"
          image="/static/images/cards/paella.jpg"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent> */}
      </Card>
    </div>
  );
}

export default ImageSection;
