import { CardMedia } from "@mui/material";
export default function LandingpageCard({ url }: any) {
  console.log(url);
  return (
    <>
      <CardMedia
        sx={{
          clipPath: "polygon(15% 0%, 100% 0%,85% 100%,0% 100%)",
          height: 220,
          width: 220,
          transition: "0.2s",
          transitionDelay: "0.02s",
          backgroundSize: "cover",
          // borderRadius: "20px",
          "&:hover": {
            clipPath: "polygon(9% 0%, 100% 0%,91% 100%,0% 100%)",
            height: 220,
            width: 300,
            backgroundImage: `linear-gradient(134.22deg, rgba(1, 124, 117, 0.3) 23.94%, rgba(147, 2, 171, 0.3) 80.19%), url(https://img.youtube.com/vi/${url}/maxresdefault.jpg)`,
            // borderTopRightRadius: 15,
            // borderBottomRightRadius: 50,
            // transition: "0.2s",
          },
          backgroundImage: `url(https://img.youtube.com/vi/${url}/maxresdefault.jpg)`,
        }}
      />
    </>
  );
}
// ujIre04ZtAY
