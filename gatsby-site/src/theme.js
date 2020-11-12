// カラーなどテーマを決めるファイル

import { createMuiTheme } from "@material-ui/core/styles"
// material-uiのカラーを使用するときはインポートする
import purple from "@material-ui/core/colors/purple"
import blue from "@material-ui/core/colors/blue"

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: blue,
  },
  // IconButtonの規定色を白に上書き
  overrides: {
    MuiIconButton: {
      label: {
        color: "white",
      },
    },
  },
})

export default theme
