import React from "react"
import AppBar from "@material-ui/core/AppBar"
import Button from "@material-ui/core/Button"
import CameraIcon from "@material-ui/icons/PhotoCamera"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import CssBaseline from "@material-ui/core/CssBaseline"
import Grid from "@material-ui/core/Grid"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"

import Layout from "../components/layout"
import theme from "../theme"

import { ThemeProvider } from "@material-ui/core/styles"

//  各コンポーネント用のCSS?の設定
const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    // paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}))

// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const texts = ["a", "b", "c", "d", "e", "f", "g", "h"]

const json = [
  {
    texts: "VINX 非接触型セルフＰＯＳシステム",
    description:
      "This is a media card. You can use this section to describe the content.",
    media: "https://www.youtube.com/embed/zqwaPGFGO00",
  },
  {
    texts: "VINX Commerce Gate特徴的な機能",
    description:
      "This is a media card. You can use this section to describe the content.",
    media: "https://www.youtube.com/embed/oXYdfsKAigE",
  },
  {
    texts: "VINX 企業紹介",
    description:
      "This is a media card. You can use this section to describe the content.",
    media: "https://www.youtube.com/embed/B0-f_DsllpY",
  },
  {
    texts: "VINX キャッシュレス・セルフPOS",
    description:
      "This is a media card. You can use this section to describe the content.",
    media: "https://www.youtube.com/embed/REZZmsAzYbs",
  },
]

export default function Album() {
  const classes = useStyles()

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Layout>
          <CssBaseline />
          <AppBar position="relative">
            <Toolbar>
              <IconButton aria-label="delete" className={classes.margin}>
                <MenuIcon className={classes.icon} />
              </IconButton>

              <Typography variant="h6" color="inherit" noWrap>
                Movie List
              </Typography>
            </Toolbar>
          </AppBar>
          <main>
            {/* Hero unit */}
            <div className={classes.heroContent}>
              <Container maxWidth="sm">
                <Typography
                  component="h1"
                  variant="h2"
                  align="center"
                  color="textPrimary"
                  gutterBottom
                >
                  React Staticsite
                </Typography>
                <Typography
                  variant="h5"
                  align="center"
                  color="textSecondary"
                  paragraph
                ></Typography>
                <div className={classes.heroButtons}>
                  <Grid container spacing={2} justify="center">
                    <Grid item>
                      <Button variant="contained" color="primary">
                        Main call to action
                      </Button>
                    </Grid>
                    {/* <Grid item>
                      <Button variant="outlined" color="primary">
                        Secondary action
                      </Button>
                    </Grid> */}
                  </Grid>
                </div>
              </Container>
            </div>
            <Container className={classes.cardGrid} maxWidth="md">
              {/* End hero unit */}
              <Grid container spacing={4}>
                {json.map((item, i) => (
                  <Grid item key={item} xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                      <CardMedia
                        component="iframe"
                        className={classes.cardMedia}
                        image={item.media}
                        title="Image title"
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {item.texts}
                        </Typography>
                        <Typography>{item.description}</Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small" color="primary">
                          View
                        </Button>
                        <Button size="small" color="primary">
                          Edit
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Container>
          </main>
        </Layout>
      </ThemeProvider>
    </React.Fragment>
  )
}
