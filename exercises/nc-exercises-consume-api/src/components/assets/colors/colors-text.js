

import { css } from 'styled-components'

// Colors System
import {
    red,
    pink,
    purple,
    deepPurple,
    indigo,
    blue,
    lightBlue,
    cyan,
    teal,
    green,
    lightGreen,
    lime,
    yellow,
    amber,
    orange,
    deepOrange,
    brown,
    gray,
    blueGray,
    black,
    white,
    darkText,
    lightText,
    darkIcons,
    lightIcons
    } from './colors-system'

const colorsText = css `

    /* ============================== COLORS ================================= */
    /* White */
    ${ props => props.textWhite && css ` color: ${ white }; `}
    
    /* Black */
    ${ props => props.textBlack && css ` color: ${ black }; `}
    /* Red */
    ${ props => props.textRed50 && css ` color: ${ red[50] }; `}
    ${ props => props.textRed100 && css ` color: ${ red[100] }; `}
    ${ props => props.textRed200 && css ` color: ${ red[200] }; `}
    ${ props => props.textRed300 && css ` color: ${ red[300] }; `}
    ${ props => props.textRed400 && css ` color: ${ red[400] }; `}
    ${ props => props.textRed500 && css ` color: ${ red[500] }; `}
    ${ props => props.textRed600 && css ` color: ${ red[600] }; `}
    ${ props => props.textRed700 && css ` color: ${ red[700] }; `}
    ${ props => props.textRed800 && css ` color: ${ red[800] }; `}
    ${ props => props.textRed900 && css ` color: ${ red[900] }; `}
    ${ props => props.textRedA100 && css ` color: ${ red.a100 }; `}
    ${ props => props.textRedA200 && css ` color: ${ red.a200 }; `}
    ${ props => props.textRedA400 && css ` color: ${ red.a400 }; `}
    ${ props => props.textRedA700 && css ` color: ${ red.a700 }; `}

    /* Pink */
    ${ props => props.textPink50 && css ` color: ${ pink[50] }; `}
    ${ props => props.textPink100 && css ` color: ${ pink[100] }; `}
    ${ props => props.textPink200 && css ` color: ${ pink[200] }; `}
    ${ props => props.textPink300 && css ` color: ${ pink[300] }; `}
    ${ props => props.textPink400 && css ` color: ${ pink[400] }; `}
    ${ props => props.textPink500 && css ` color: ${ pink[500] }; `}
    ${ props => props.textPink600 && css ` color: ${ pink[600] }; `}
    ${ props => props.textPink700 && css ` color: ${ pink[700] }; `}
    ${ props => props.textPink800 && css ` color: ${ pink[800] }; `}
    ${ props => props.textPink900 && css ` color: ${ pink[900] }; `}
    ${ props => props.textPinkA100 && css ` color: ${ pink.a100 }; `}
    ${ props => props.textPinkA200 && css ` color: ${ pink.a200 }; `}
    ${ props => props.textPinkA400 && css ` color: ${ pink.a400 }; `}
    ${ props => props.textPinkA700 && css ` color: ${ pink.a700 }; `}

    /* Purple */
    ${ props => props.textPurple50 && css ` color: ${ purple[50] }; `}
    ${ props => props.textPurple100 && css ` color: ${ purple[100] }; `}
    ${ props => props.textPurple200 && css ` color: ${ purple[200] }; `}
    ${ props => props.textPurple300 && css ` color: ${ purple[300] }; `}
    ${ props => props.textPurple400 && css ` color: ${ purple[400] }; `}
    ${ props => props.textPurple500 && css ` color: ${ purple[500] }; `}
    ${ props => props.textPurple600 && css ` color: ${ purple[600] }; `}
    ${ props => props.textPurple700 && css ` color: ${ purple[700] }; `}
    ${ props => props.textPurple800 && css ` color: ${ purple[800] }; `}
    ${ props => props.textPurple900 && css ` color: ${ purple[900] }; `}
    ${ props => props.textPurpleA100 && css ` color: ${ purple.a100 }; `}
    ${ props => props.textPurpleA200 && css ` color: ${ purple.a200 }; `}
    ${ props => props.textPurpleA400 && css ` color: ${ purple.a400 }; `}
    ${ props => props.textPurpleA700 && css ` color: ${ purple.a700 }; `}

    /* Depp Purple */
    ${ props => props.textDeepPurple50 && css ` color: ${ deepPurple[50] }; `}
    ${ props => props.textDeepPurple100 && css ` color: ${ deepPurple[100] }; `}
    ${ props => props.textDeepPurple200 && css ` color: ${ deepPurple[200] }; `}
    ${ props => props.textDeepPurple300 && css ` color: ${ deepPurple[300] }; `}
    ${ props => props.textDeepPurple400 && css ` color: ${ deepPurple[400] }; `}
    ${ props => props.textDeepPurple500 && css ` color: ${ deepPurple[500] }; `}
    ${ props => props.textDeepPurple600 && css ` color: ${ deepPurple[600] }; `}
    ${ props => props.textDeepPurple700 && css ` color: ${ deepPurple[700] }; `}
    ${ props => props.textDeepPurple800 && css ` color: ${ deepPurple[800] }; `}
    ${ props => props.textDeepPurple900 && css ` color: ${ deepPurple[900] }; `}
    ${ props => props.textDeepPurpleA100 && css ` color: ${ deepPurple.a100 }; `}
    ${ props => props.textDeepPurpleA200 && css ` color: ${ deepPurple.a200 }; `}
    ${ props => props.textDeepPurpleA400 && css ` color: ${ deepPurple.a400 }; `}
    ${ props => props.textDeepPurpleA700 && css ` color: ${ deepPurple.a700 }; `}

    /* Indigo */
    ${ props => props.textIndigo50 && css ` color: ${ indigo[50] }; `}
    ${ props => props.textIndigo100 && css ` color: ${ indigo[100] }; `}
    ${ props => props.textIndigo200 && css ` color: ${ indigo[200] }; `}
    ${ props => props.textIndigo300 && css ` color: ${ indigo[300] }; `}
    ${ props => props.textIndigo400 && css ` color: ${ indigo[400] }; `}
    ${ props => props.textIndigo500 && css ` color: ${ indigo[500] }; `}
    ${ props => props.textIndigo600 && css ` color: ${ indigo[600] }; `}
    ${ props => props.textIndigo700 && css ` color: ${ indigo[700] }; `}
    ${ props => props.textIndigo800 && css ` color: ${ indigo[800] }; `}
    ${ props => props.textIndigo900 && css ` color: ${ indigo[900] }; `}
    ${ props => props.textIndigoA100 && css ` color: ${ indigo.a100 }; `}
    ${ props => props.textIndigoA200 && css ` color: ${ indigo.a200 }; `}
    ${ props => props.textIndigoA400 && css ` color: ${ indigo.a400 }; `}
    ${ props => props.textIndigoA700 && css ` color: ${ indigo.a700 }; `}

    /* Blue */
    ${ props => props.textBlue50 && css ` color: ${ blue[50] }; `}
    ${ props => props.textBlue100 && css ` color: ${ blue[100] }; `}
    ${ props => props.textBlue200 && css ` color: ${ blue[200] }; `}
    ${ props => props.textBlue300 && css ` color: ${ blue[300] }; `}
    ${ props => props.textBlue400 && css ` color: ${ blue[400] }; `}
    ${ props => props.textBlue500 && css ` color: ${ blue[500] }; `}
    ${ props => props.textBlue600 && css ` color: ${ blue[600] }; `}
    ${ props => props.textBlue700 && css ` color: ${ blue[700] }; `}
    ${ props => props.textBlue800 && css ` color: ${ blue[800] }; `}
    ${ props => props.textBlue900 && css ` color: ${ blue[900] }; `}
    ${ props => props.textBlueA100 && css ` color: ${ blue.a100 }; `}
    ${ props => props.textBlueA200 && css ` color: ${ blue.a200 }; `}
    ${ props => props.textBlueA400 && css ` color: ${ blue.a400 }; `}
    ${ props => props.textBlueA700 && css ` color: ${ blue.a700 }; `}

    /* Light Blue */
    ${ props => props.textLightBlue50 && css ` color: ${ lightBlue[50] }; `}
    ${ props => props.textLightBlue100 && css ` color: ${ lightBlue[100] }; `}
    ${ props => props.textLightBlue200 && css ` color: ${ lightBlue[200] }; `}
    ${ props => props.textLightBlue300 && css ` color: ${ lightBlue[300] }; `}
    ${ props => props.textLightBlue400 && css ` color: ${ lightBlue[400] }; `}
    ${ props => props.textLightBlue500 && css ` color: ${ lightBlue[500] }; `}
    ${ props => props.textLightBlue600 && css ` color: ${ lightBlue[600] }; `}
    ${ props => props.textLightBlue700 && css ` color: ${ lightBlue[700] }; `}
    ${ props => props.textLightBlue800 && css ` color: ${ lightBlue[800] }; `}
    ${ props => props.textLightBlue900 && css ` color: ${ lightBlue[900] }; `}
    ${ props => props.textLightBlueA100 && css ` color: ${ lightBlue.a100 }; `}
    ${ props => props.textLightBlueA200 && css ` color: ${ lightBlue.a200 }; `}
    ${ props => props.textLightBlueA400 && css ` color: ${ lightBlue.a400 }; `}
    ${ props => props.textLightBlueA700 && css ` color: ${ lightBlue.a700 }; `}

    /* Cyan */
    ${ props => props.textCyan50 && css ` color: ${ cyan[50] }; `}
    ${ props => props.textCyan100 && css ` color: ${ cyan[100] }; `}
    ${ props => props.textCyan200 && css ` color: ${ cyan[200] }; `}
    ${ props => props.textCyan300 && css ` color: ${ cyan[300] }; `}
    ${ props => props.textCyan400 && css ` color: ${ cyan[400] }; `}
    ${ props => props.textCyan500 && css ` color: ${ cyan[500] }; `}
    ${ props => props.textCyan600 && css ` color: ${ cyan[600] }; `}
    ${ props => props.textCyan700 && css ` color: ${ cyan[700] }; `}
    ${ props => props.textCyan800 && css ` color: ${ cyan[800] }; `}
    ${ props => props.textCyan900 && css ` color: ${ cyan[900] }; `}
    ${ props => props.textCyanA100 && css ` color: ${ cyan.a100 }; `}
    ${ props => props.textCyanA200 && css ` color: ${ cyan.a200 }; `}
    ${ props => props.textCyanA400 && css ` color: ${ cyan.a400 }; `}
    ${ props => props.textCyanA700 && css ` color: ${ cyan.a700 }; `}

    /* Teal */
    ${ props => props.textTeal50 && css ` color: ${ teal[50] }; `}
    ${ props => props.textTeal100 && css ` color: ${ teal[100] }; `}
    ${ props => props.textTeal200 && css ` color: ${ teal[200] }; `}
    ${ props => props.textTeal300 && css ` color: ${ teal[300] }; `}
    ${ props => props.textTeal400 && css ` color: ${ teal[400] }; `}
    ${ props => props.textTeal500 && css ` color: ${ teal[500] }; `}
    ${ props => props.textTeal600 && css ` color: ${ teal[600] }; `}
    ${ props => props.textTeal700 && css ` color: ${ teal[700] }; `}
    ${ props => props.textTeal800 && css ` color: ${ teal[800] }; `}
    ${ props => props.textTeal900 && css ` color: ${ teal[900] }; `}
    ${ props => props.textTealA100 && css ` color: ${ teal.a100 }; `}
    ${ props => props.textTealA200 && css ` color: ${ teal.a200 }; `}
    ${ props => props.textTealA400 && css ` color: ${ teal.a400 }; `}
    ${ props => props.textTealA700 && css ` color: ${ teal.a700 }; `}

    /* Green */
    ${ props => props.textGreen50 && css ` color: ${ green[50] }; `}
    ${ props => props.textGreen100 && css ` color: ${ green[100] }; `}
    ${ props => props.textGreen200 && css ` color: ${ green[200] }; `}
    ${ props => props.textGreen300 && css ` color: ${ green[300] }; `}
    ${ props => props.textGreen400 && css ` color: ${ green[400] }; `}
    ${ props => props.textGreen500 && css ` color: ${ green[500] }; `}
    ${ props => props.textGreen600 && css ` color: ${ green[600] }; `}
    ${ props => props.textGreen700 && css ` color: ${ green[700] }; `}
    ${ props => props.textGreen800 && css ` color: ${ green[800] }; `}
    ${ props => props.textGreen900 && css ` color: ${ green[900] }; `}
    ${ props => props.textGreenA100 && css ` color: ${ green.a100 }; `}
    ${ props => props.textGreenA200 && css ` color: ${ green.a200 }; `}
    ${ props => props.textGreenA400 && css ` color: ${ green.a400 }; `}
    ${ props => props.textGreenA700 && css ` color: ${ green.a700 }; `}

    /* Light Green */
    ${ props => props.textLightGreen50 && css ` color: ${ lightGreen[50] }; `}
    ${ props => props.textLightGreen100 && css ` color: ${ lightGreen[100] }; `}
    ${ props => props.textLightGreen200 && css ` color: ${ lightGreen[200] }; `}
    ${ props => props.textLightGreen300 && css ` color: ${ lightGreen[300] }; `}
    ${ props => props.textLightGreen400 && css ` color: ${ lightGreen[400] }; `}
    ${ props => props.textLightGreen500 && css ` color: ${ lightGreen[500] }; `}
    ${ props => props.textLightGreen600 && css ` color: ${ lightGreen[600] }; `}
    ${ props => props.textLightGreen700 && css ` color: ${ lightGreen[700] }; `}
    ${ props => props.textLightGreen800 && css ` color: ${ lightGreen[800] }; `}
    ${ props => props.textLightGreen900 && css ` color: ${ lightGreen[900] }; `}
    ${ props => props.textLightGreenA100 && css ` color: ${ lightGreen.a100 }; `}
    ${ props => props.textLightGreenA200 && css ` color: ${ lightGreen.a200 }; `}
    ${ props => props.textLightGreenA400 && css ` color: ${ lightGreen.a400 }; `}
    ${ props => props.textLightGreenA700 && css ` color: ${ lightGreen.a700 }; `}

    /* Lime */
    ${ props => props.textLime50 && css ` color: ${ lime[50] }; `}
    ${ props => props.textLime100 && css ` color: ${ lime[100] }; `}
    ${ props => props.textLime200 && css ` color: ${ lime[200] }; `}
    ${ props => props.textLime300 && css ` color: ${ lime[300] }; `}
    ${ props => props.textLime400 && css ` color: ${ lime[400] }; `}
    ${ props => props.textLime500 && css ` color: ${ lime[500] }; `}
    ${ props => props.textLime600 && css ` color: ${ lime[600] }; `}
    ${ props => props.textLime700 && css ` color: ${ lime[700] }; `}
    ${ props => props.textLime800 && css ` color: ${ lime[800] }; `}
    ${ props => props.textLime900 && css ` color: ${ lime[900] }; `}
    ${ props => props.textLimeA100 && css ` color: ${ lime.a100 }; `}
    ${ props => props.textLimeA200 && css ` color: ${ lime.a200 }; `}
    ${ props => props.textLimeA400 && css ` color: ${ lime.a400 }; `}
    ${ props => props.textLimeA700 && css ` color: ${ lime.a700 }; `}

    /* Yellow */
    ${ props => props.textYellow50 && css ` color: ${ yellow[50] }; `}
    ${ props => props.textYellow100 && css ` color: ${ yellow[100] }; `}
    ${ props => props.textYellow200 && css ` color: ${ yellow[200] }; `}
    ${ props => props.textYellow300 && css ` color: ${ yellow[300] }; `}
    ${ props => props.textYellow400 && css ` color: ${ yellow[400] }; `}
    ${ props => props.textYellow500 && css ` color: ${ yellow[500] }; `}
    ${ props => props.textYellow600 && css ` color: ${ yellow[600] }; `}
    ${ props => props.textYellow700 && css ` color: ${ yellow[700] }; `}
    ${ props => props.textYellow800 && css ` color: ${ yellow[800] }; `}
    ${ props => props.textYellow900 && css ` color: ${ yellow[900] }; `}
    ${ props => props.textYellowA100 && css ` color: ${ yellow.a100 }; `}
    ${ props => props.textYellowA200 && css ` color: ${ yellow.a200 }; `}
    ${ props => props.textYellowA400 && css ` color: ${ yellow.a400 }; `}
    ${ props => props.textYellowA700 && css ` color: ${ yellow.a700 }; `}

    /* Amber */
    ${ props => props.textAmber50 && css ` color: ${ amber[50] }; `}
    ${ props => props.textAmber100 && css ` color: ${ amber[100] }; `}
    ${ props => props.textAmber200 && css ` color: ${ amber[200] }; `}
    ${ props => props.textAmber300 && css ` color: ${ amber[300] }; `}
    ${ props => props.textAmber400 && css ` color: ${ amber[400] }; `}
    ${ props => props.textAmber500 && css ` color: ${ amber[500] }; `}
    ${ props => props.textAmber600 && css ` color: ${ amber[600] }; `}
    ${ props => props.textAmber700 && css ` color: ${ amber[700] }; `}
    ${ props => props.textAmber800 && css ` color: ${ amber[800] }; `}
    ${ props => props.textAmber900 && css ` color: ${ amber[900] }; `}
    ${ props => props.textAmberA100 && css ` color: ${ amber.a100 }; `}
    ${ props => props.textAmberA200 && css ` color: ${ amber.a200 }; `}
    ${ props => props.textAmberA400 && css ` color: ${ amber.a400 }; `}
    ${ props => props.textAmberA700 && css ` color: ${ amber.a700 }; `}

    /* Orange */
    ${ props => props.textOrange50 && css ` color: ${ orange[50] }; `}
    ${ props => props.textOrange100 && css ` color: ${ orange[100] }; `}
    ${ props => props.textOrange200 && css ` color: ${ orange[200] }; `}
    ${ props => props.textOrange300 && css ` color: ${ orange[300] }; `}
    ${ props => props.textOrange400 && css ` color: ${ orange[400] }; `}
    ${ props => props.textOrange500 && css ` color: ${ orange[500] }; `}
    ${ props => props.textOrange600 && css ` color: ${ orange[600] }; `}
    ${ props => props.textOrange700 && css ` color: ${ orange[700] }; `}
    ${ props => props.textOrange800 && css ` color: ${ orange[800] }; `}
    ${ props => props.textOrange900 && css ` color: ${ orange[900] }; `}
    ${ props => props.textOrangeA100 && css ` color: ${ orange.a100 }; `}
    ${ props => props.textOrangeA200 && css ` color: ${ orange.a200 }; `}
    ${ props => props.textOrangeA400 && css ` color: ${ orange.a400 }; `}
    ${ props => props.textOrangeA700 && css ` color: ${ orange.a700 }; `}

    /* Deep Orange */
    ${ props => props.textDeepOrange50 && css ` color: ${ deepOrange[50] }; `}
    ${ props => props.textDeepOrange100 && css ` color: ${ deepOrange[100] }; `}
    ${ props => props.textDeepOrange200 && css ` color: ${ deepOrange[200] }; `}
    ${ props => props.textDeepOrange300 && css ` color: ${ deepOrange[300] }; `}
    ${ props => props.textDeepOrange400 && css ` color: ${ deepOrange[400] }; `}
    ${ props => props.textDeepOrange500 && css ` color: ${ deepOrange[500] }; `}
    ${ props => props.textDeepOrange600 && css ` color: ${ deepOrange[600] }; `}
    ${ props => props.textDeepOrange700 && css ` color: ${ deepOrange[700] }; `}
    ${ props => props.textDeepOrange800 && css ` color: ${ deepOrange[800] }; `}
    ${ props => props.textDeepOrange900 && css ` color: ${ deepOrange[900] }; `}
    ${ props => props.textDeepOrangeA100 && css ` color: ${ deepOrange.a100 }; `}
    ${ props => props.textDeepOrangeA200 && css ` color: ${ deepOrange.a200 }; `}
    ${ props => props.textDeepOrangeA400 && css ` color: ${ deepOrange.a400 }; `}
    ${ props => props.textDeepOrangeA700 && css ` color: ${ deepOrange.a700 }; `}

    /* Brown */
    ${ props => props.textBrown50 && css ` color: ${ brown[50] }; `}
    ${ props => props.textBrown100 && css ` color: ${ brown[100] }; `}
    ${ props => props.textBrown200 && css ` color: ${ brown[200] }; `}
    ${ props => props.textBrown300 && css ` color: ${ brown[300] }; `}
    ${ props => props.textBrown400 && css ` color: ${ brown[400] }; `}
    ${ props => props.textBrown500 && css ` color: ${ brown[500] }; `}
    ${ props => props.textBrown600 && css ` color: ${ brown[600] }; `}
    ${ props => props.textBrown700 && css ` color: ${ brown[700] }; `}
    ${ props => props.textBrown800 && css ` color: ${ brown[800] }; `}
    ${ props => props.textBrown900 && css ` color: ${ brown[900] }; `}
    ${ props => props.textBrownA100 && css ` color: ${ brown.a100 }; `}
    ${ props => props.textBrownA200 && css ` color: ${ brown.a200 }; `}
    ${ props => props.textBrownA400 && css ` color: ${ brown.a400 }; `}
    ${ props => props.textBrownA700 && css ` color: ${ brown.a700 }; `}

    /* Gray */
    ${ props => props.textGray50 && css ` color: ${ gray[50] }; `}
    ${ props => props.textGray100 && css ` color: ${ gray[100] }; `}
    ${ props => props.textGray200 && css ` color: ${ gray[200] }; `}
    ${ props => props.textGray300 && css ` color: ${ gray[300] }; `}
    ${ props => props.textGray400 && css ` color: ${ gray[400] }; `}
    ${ props => props.textGray500 && css ` color: ${ gray[500] }; `}
    ${ props => props.textGray600 && css ` color: ${ gray[600] }; `}
    ${ props => props.textGray700 && css ` color: ${ gray[700] }; `}
    ${ props => props.textGray800 && css ` color: ${ gray[800] }; `}
    ${ props => props.textGray900 && css ` color: ${ gray[900] }; `}
    ${ props => props.textGrayA100 && css ` color: ${ gray.a100 }; `}
    ${ props => props.textGrayA200 && css ` color: ${ gray.a200 }; `}
    ${ props => props.textGrayA400 && css ` color: ${ gray.a400 }; `}
    ${ props => props.textGrayA700 && css ` color: ${ gray.a700 }; `}

    /* Blue Gray */
    ${ props => props.textBlueGray50 && css ` color: ${ blueGray[50] }; `}
    ${ props => props.textBlueGray100 && css ` color: ${ blueGray[100] }; `}
    ${ props => props.textBlueGray200 && css ` color: ${ blueGray[200] }; `}
    ${ props => props.textBlueGray300 && css ` color: ${ blueGray[300] }; `}
    ${ props => props.textBlueGray400 && css ` color: ${ blueGray[400] }; `}
    ${ props => props.textBlueGray500 && css ` color: ${ blueGray[500] }; `}
    ${ props => props.textBlueGray600 && css ` color: ${ blueGray[600] }; `}
    ${ props => props.textBlueGray700 && css ` color: ${ blueGray[700] }; `}
    ${ props => props.textBlueGray800 && css ` color: ${ blueGray[800] }; `}
    ${ props => props.textBlueGray900 && css ` color: ${ blueGray[900] }; `}
    ${ props => props.textBlueGrayA100 && css ` color: ${ blueGray.a100 }; `}
    ${ props => props.textBlueGrayA200 && css ` color: ${ blueGray.a200 }; `}
    ${ props => props.textBlueGrayA400 && css ` color: ${ blueGray.a400 }; `}
    ${ props => props.textBlueGrayA700 && css ` color: ${ blueGray.a700 }; `}

    

    
    /* ============================== COLORS ================================= */

`;


export default colorsText;