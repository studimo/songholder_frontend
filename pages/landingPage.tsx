import {
  Button,
  Card,
  CardMedia,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import ReactPlayer from "react-player";
import MediaControlCard from "../components/MediaControlCard";
import MediaControlCardDuo from "../components/MediaControlCardDuo";
import MediaPlayer from "../components/MediaPlayer";
import RecommendedCard from "../components/RecommendedCard";
import ResponsiveAppBar from "../components/ResponsiveAppBar";

export default function landingPage() {
  const allContents = [
    {
      name: "Youth",
      artist: "Troye Sivan",
      style: "Pop",
      requirement: "-",
      id: "XYAghEq5Lfw",
    },
    {
      name: "Faded",
      artist: "Alan Walker",
      style: "EDM",
      requirement: "-",
      id: "60ItHLz5WEA",
    },
    {
      name: "Dance Monkey",
      artist: "Tones and I",
      style: "Dance",
      requirement: "-",
      id: "q0hyYWKXF0Q",
    },
    {
      name: "Truth or Lie",
      artist: "Ayna, Listen, Baku",
      style: "Acoustic",
      requirement: "-",
      id: "0U-b1sfatpo",
    },
    {
      name: "Move On",
      artist: "ปราโมทย์ วิเลปะนะ",
      style: "Pop",
      requirement: "(cover) | ZONA",
      id: "xBFdYaGTi5w",
    },
    {
      name: "สองใจ",
      artist: "ดา เอ็นโดรฟิน",
      style: "Pop",
      requirement: "(cover) | ZONA",
      id: "AXmG_sMY7kU",
    },
    {
      name: "ตายทั้งเป็น",
      artist: "แจ้ ดนุพล แก้วกาญจน์",
      style: "Pop",
      requirement: "(cover) | ZONA",
      id: "AP6CONa3gPI",
    },
  ];
  var refCard: any;
  var checkOdd = false;
  return (
    <Container
      maxWidth={false}
      // maxWidth="md"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflow: "hidden",
        padding: "30px",
        background:
          "radial-gradient(61.36% 61.36% at 32.88% 35.63%, #E6F9FF 0%, #F8F3FD 100%)",
      }}
    >
      <Typography
        sx={{ mt: "100px" }}
        fontWeight="400"
        fontSize="32px"
        lineHeight="67.84px"
        color="#0E5379"
        // alignSelf="center"
      >
        RECCOMMENDED SONGS
      </Typography>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing="0.5"
        height="350px"
      >
        {allContents.slice(0, 5).map((content) => (
          <RecommendedCard content={content} />
        ))}
      </Stack>
      <Typography
        fontWeight="400"
        fontSize="32px"
        lineHeight="67.84px"
        color="#0E5379"
        marginTop="30px"
        marginBottom="30px"
        // alignSelf="center"
      >
        SONG LIST
      </Typography>
      {allContents.map((content) => {
        if (checkOdd) {
          checkOdd = !checkOdd;
          return <MediaControlCardDuo content1={refCard} content2={content} />;
        } else {
          checkOdd = !checkOdd;
          refCard = content;
        }
      })}
      {/* <MediaControlCardDuo
        content1={allContents[0]}
        content2={allContents[1]}
      />
      <MediaControlCardDuo
        content1={allContents[0]}
        content2={allContents[1]}
      /> */}
      {/* <MediaPlayer /> */}
    </Container>
  );
}
