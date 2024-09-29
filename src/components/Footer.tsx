import packageJson from "../../package.json";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";

export default function Footer() {
  return (
    <AppBar
      position="fixed"
      color="primary"
      sx={{ top: "auto", bottom: 0 }}
    >
      <Toolbar className="footer">
        <Box
          sx={{
            flex: 1,
            flexGrow: 1,
            margin: "20px",
            display: "flex",
            justifyContent: "space-between",
            "@media (max-width: 600px)": {
              display: "grid",
            },
          }}
        >
          <Box
            sx={{
              display: "grid",
              alignItems: "center",
              alignContent: "center",
              maxWidth: "700px",
              fontSize: "small",
            }}
          >
            <Typography className="typography">
              This website is under MIT license, ad-free and does not use
              cookies only local storage for save a dice color and manages
              dialogs to improve your experience.
            </Typography>
            <Typography className="typography">
              For more information please visit the project repository.
            </Typography>
            <Typography className="typography">
              Created by Levente in 2024 | v{packageJson.version}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "grid",
              alignItems: "center",
              alignContent: "center",
              justifyItems: "end",
              maxWidth: "700px",
              "@media (max-width: 600px)": {
                justifyItems: "start",
              },
            }}
          >
            <Box
              sx={{
                display: "grid",
                justifyItems: "end",
                "@media (max-width: 600px)": {
                  justifyItems: "start",
                },
              }}
            >
              <Button
                className="button"
                variant="text"
                startIcon={<OpenInNewIcon />}
                size="small"
                target="_blank"
                href="https://github.com/tothlevente/dice"
              >
                Repository
              </Button>
              <Button
                className="button"
                variant="text"
                startIcon={<OpenInNewIcon />}
                size="small"
                target="_blank"
                href="https://github.com/tothlevente/dice/blob/main/LICENSE"
              >
                License
              </Button>
            </Box>
            <Box sx={{ paddingTop: "15px" }}>
              <a href="https://www.netlify.com">
                <img
                  src="https://www.netlify.com/v3/img/components/netlify-color-accent.svg"
                  alt="Deploys by Netlify"
                />
              </a>
            </Box>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
