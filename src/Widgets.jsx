import React from "react";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widget_article">
      <div className="widgets_articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets_articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets_header">
        <h2>LinkedIn news</h2>
        <InfoIcon />
      </div>
      {newsArticle("React Con 2024", "Top news - 5482 readers")}
      {newsArticle("Elon Musk latest", "Technology - 1514 readers")}
      {newsArticle(
        "Iphone 16 - Do you really need it?",
        "Gadgets - 6492 readers"
      )}
      {newsArticle("Why NextJS won", "Fontend - 936 readers")}
      {newsArticle("Donald Trump backs Bitcoin", "Crypto - 7268 readers")}
    </div>
  );
}

export default Widgets;
