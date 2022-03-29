import {
  Button,
  Card,
  CardMedia,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import MediaControlCard from "../components/MediaControlCard";
import MediaControlCardDuo from "../components/MediaControlCardDuo";
import MediaPlayer from "../components/MediaPlayer";
import MusicPlayer from "../components/MusicPlayer";
import RecommendedCard from "../components/RecommendedCard";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import { gql, useQuery } from "@apollo/client";

const AllQuery = gql`
  query {
    demos {
      youtubeId
      name
      artist
      style
      requirement
      youtubeId
    }
  }
`;
const getAudioUrl = gql`
  query {
    getAudioUrl(youtubeIdInput: "$id")
  }
`;
export default function landingPage() {
  const [allContents, setAllContents] = useState<any>([]);
  const [audioUrl, setAudioUrl] = useState("");
  const [onPlay, setOnPlay] = useState(false);
  const { data, error, loading } = useQuery(AllQuery);
  const contentRef = useRef(null);

  useEffect(() => {
    var newAllContents = new Array();
    if (data) {
      setAllContents(data.demos);
      console.log(data.demos);
    }
  }, data);
  if (loading) {
    return <h1>Loading</h1>;
  }
  var refCard: any;
  var checkOdd = false;
  return (
    <Container
      maxWidth={false}
      disableGutters
      // maxWidth="md"
      sx={{
        // paddingTop: "80px",
        background:
          "radial-gradient(61.36% 61.36% at 32.88% 35.63%, #E6F9FF 0%, #F8F3FD 100%)",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflow: "hidden",
        zIndex: 0,
      }}
    >
      <Box
        sx={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          overflow: "auto",
          background:
            "radial-gradient(61.36% 61.36% at 32.88% 35.63%, #E6F9FF 0%, #F8F3FD 100%)",
        }}
        // bgcolor="violet"
        component={motion.div}
        ref={contentRef}
      >
        <Box
          component={motion.div}
          drag
          dragConstraints={contentRef}
          id="boxtest"
          sx={{
            paddingTop: "100px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            position: "fixed",
            top: "67%",
            left: "77%",
            width: "350px",
            height: "250px",
            paddingBottom: "30px",
            // bgcolor: "yellowgreen",
            zIndex: 2,
          }}
        >
          <MusicPlayer
            audioUrl={audioUrl}
            onPlay={onPlay}
            setOnPlay={setOnPlay}
          />
        </Box>
        <Typography
          sx={{ mt: "100px" }}
          fontWeight="400"
          lineHeight="67.84px"
          color="#0E5379"
          component={motion.div}
          animate={{ fontSize: "32px" }}
          // alignSelf="center"
        >
          RECCOMMENDED SONGS
        </Typography>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing="0.5"
          // height="350px"
          // sx={{ bgcolor: "yellow" }}
          // sx={{ zIndex: 0 }}
        >
          {allContents.slice(0, 5).map((content: any) => (
            <RecommendedCard
              content={content}
              audioUrl={audioUrl}
              setAudioUrl={setAudioUrl}
              onPlay={onPlay}
              setOnPlay={setOnPlay}
            />
          ))}
        </Stack>
        <Typography
          fontWeight="400"
          lineHeight="67.84px"
          color="#0E5379"
          // marginTop="30px"
          marginBottom="30px"
          component={motion.div}
          animate={{ fontSize: "32px" }}
          // alignSelf="center"
        >
          SONG LIST
        </Typography>
        {allContents.map((content: any) => {
          if (checkOdd) {
            checkOdd = !checkOdd;
            return (
              <MediaControlCardDuo
                content1={refCard}
                content2={content}
                audioUrl={audioUrl}
                setAudioUrl={setAudioUrl}
                onPlay={onPlay}
                setOnPlay={setOnPlay}
              />
            );
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
      </Box>
    </Container>
  );
}
