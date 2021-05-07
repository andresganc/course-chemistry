



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
    white,
    black,
    darkText,
    lightText,
    darkIcons,
    lightIcons
    } from './colors-system'

const colors = css `

    // ============================== COLORS =================================
    /* White */
    ${ props => props.white && css ` ${ white }; `}
    
    /* Black */
    ${ props => props.black && css ` ${ black }; `}

    /* Red */
    ${ props => props.red50 && css ` ${ red[50] }; `}
    ${ props => props.red100 && css ` ${ red[100] }; `}
    ${ props => props.red200 && css ` ${ red[200] }; `}
    ${ props => props.red300 && css ` ${ red[300] }; `}
    ${ props => props.red400 && css ` ${ red[400] }; `}
    ${ props => props.red500 && css ` ${ red[500] }; `}
    ${ props => props.red600 && css ` ${ red[600] }; `}
    ${ props => props.red700 && css ` ${ red[700] }; `}
    ${ props => props.red800 && css ` ${ red[800] }; `}
    ${ props => props.red900 && css ` ${ red[900] }; `}
    ${ props => props.redA100 && css ` ${ red.a100 }; `}
    ${ props => props.redA200 && css ` ${ red.a200 }; `}
    ${ props => props.redA400 && css ` ${ red.a400 }; `}
    ${ props => props.redA700 && css ` ${ red.a700 }; `}

    /* Pink */
    ${ props => props.pink50 && css ` ${ pink[50] }; `}
    ${ props => props.pink100 && css ` ${ pink[100] }; `}
    ${ props => props.pink200 && css ` ${ pink[200] }; `}
    ${ props => props.pink300 && css ` ${ pink[300] }; `}
    ${ props => props.pink400 && css ` ${ pink[400] }; `}
    ${ props => props.pink500 && css ` ${ pink[500] }; `}
    ${ props => props.pink600 && css ` ${ pink[600] }; `}
    ${ props => props.pink700 && css ` ${ pink[700] }; `}
    ${ props => props.pink800 && css ` ${ pink[800] }; `}
    ${ props => props.pink900 && css ` ${ pink[900] }; `}
    ${ props => props.pinkA100 && css ` ${ pink.a100 }; `}
    ${ props => props.pinkA200 && css ` ${ pink.a200 }; `}
    ${ props => props.pinkA400 && css ` ${ pink.a400 }; `}
    ${ props => props.pinkA700 && css ` ${ pink.a700 }; `}

    /* Purple */
    ${ props => props.purple50 && css ` ${ purple[50] }; `}
    ${ props => props.purple100 && css ` ${ purple[100] }; `}
    ${ props => props.purple200 && css ` ${ purple[200] }; `}
    ${ props => props.purple300 && css ` ${ purple[300] }; `}
    ${ props => props.purple400 && css ` ${ purple[400] }; `}
    ${ props => props.purple500 && css ` ${ purple[500] }; `}
    ${ props => props.purple600 && css ` ${ purple[600] }; `}
    ${ props => props.purple700 && css ` ${ purple[700] }; `}
    ${ props => props.purple800 && css ` ${ purple[800] }; `}
    ${ props => props.purple900 && css ` ${ purple[900] }; `}
    ${ props => props.purpleA100 && css ` ${ purple.a100 }; `}
    ${ props => props.purpleA200 && css ` ${ purple.a200 }; `}
    ${ props => props.purpleA400 && css ` ${ purple.a400 }; `}
    ${ props => props.purpleA700 && css ` ${ purple.a700 }; `}

    /* Depp Purple */
    ${ props => props.deepPurple50 && css ` ${ deepPurple[50] }; `}
    ${ props => props.deepPurple100 && css ` ${ deepPurple[100] }; `}
    ${ props => props.deepPurple200 && css ` ${ deepPurple[200] }; `}
    ${ props => props.deepPurple300 && css ` ${ deepPurple[300] }; `}
    ${ props => props.deepPurple400 && css ` ${ deepPurple[400] }; `}
    ${ props => props.deepPurple500 && css ` ${ deepPurple[500] }; `}
    ${ props => props.deepPurple600 && css ` ${ deepPurple[600] }; `}
    ${ props => props.deepPurple700 && css ` ${ deepPurple[700] }; `}
    ${ props => props.deepPurple800 && css ` ${ deepPurple[800] }; `}
    ${ props => props.deepPurple900 && css ` ${ deepPurple[900] }; `}
    ${ props => props.deepPurpleA100 && css ` ${ deepPurple.a100 }; `}
    ${ props => props.deepPurpleA200 && css ` ${ deepPurple.a200 }; `}
    ${ props => props.deepPurpleA400 && css ` ${ deepPurple.a400 }; `}
    ${ props => props.deepPurpleA700 && css ` ${ deepPurple.a700 }; `}

    /* Indigo */
    ${ props => props.indigo50 && css ` ${ indigo[50] }; `}
    ${ props => props.indigo100 && css ` ${ indigo[100] }; `}
    ${ props => props.indigo200 && css ` ${ indigo[200] }; `}
    ${ props => props.indigo300 && css ` ${ indigo[300] }; `}
    ${ props => props.indigo400 && css ` ${ indigo[400] }; `}
    ${ props => props.indigo500 && css ` ${ indigo[500] }; `}
    ${ props => props.indigo600 && css ` ${ indigo[600] }; `}
    ${ props => props.indigo700 && css ` ${ indigo[700] }; `}
    ${ props => props.indigo800 && css ` ${ indigo[800] }; `}
    ${ props => props.indigo900 && css ` ${ indigo[900] }; `}
    ${ props => props.indigoA100 && css ` ${ indigo.a100 }; `}
    ${ props => props.indigoA200 && css ` ${ indigo.a200 }; `}
    ${ props => props.indigoA400 && css ` ${ indigo.a400 }; `}
    ${ props => props.indigoA700 && css ` ${ indigo.a700 }; `}

    /* Blue */
    ${ props => props.blue50 && css ` ${ blue[50] }; `}
    ${ props => props.blue100 && css ` ${ blue[100] }; `}
    ${ props => props.blue200 && css ` ${ blue[200] }; `}
    ${ props => props.blue300 && css ` ${ blue[300] }; `}
    ${ props => props.blue400 && css ` ${ blue[400] }; `}
    ${ props => props.blue500 && css ` ${ blue[500] }; `}
    ${ props => props.blue600 && css ` ${ blue[600] }; `}
    ${ props => props.blue700 && css ` ${ blue[700] }; `}
    ${ props => props.blue800 && css ` ${ blue[800] }; `}
    ${ props => props.blue900 && css ` ${ blue[900] }; `}
    ${ props => props.blueA100 && css ` ${ blue.a100 }; `}
    ${ props => props.blueA200 && css ` ${ blue.a200 }; `}
    ${ props => props.blueA400 && css ` ${ blue.a400 }; `}
    ${ props => props.blueA700 && css ` ${ blue.a700 }; `}

    /* Light Blue */
    ${ props => props.lightBlue50 && css ` ${ lightBlue[50] }; `}
    ${ props => props.lightBlue100 && css ` ${ lightBlue[100] }; `}
    ${ props => props.lightBlue200 && css ` ${ lightBlue[200] }; `}
    ${ props => props.lightBlue300 && css ` ${ lightBlue[300] }; `}
    ${ props => props.lightBlue400 && css ` ${ lightBlue[400] }; `}
    ${ props => props.lightBlue500 && css ` ${ lightBlue[500] }; `}
    ${ props => props.lightBlue600 && css ` ${ lightBlue[600] }; `}
    ${ props => props.lightBlue700 && css ` ${ lightBlue[700] }; `}
    ${ props => props.lightBlue800 && css ` ${ lightBlue[800] }; `}
    ${ props => props.lightBlue900 && css ` ${ lightBlue[900] }; `}
    ${ props => props.lightBlueA100 && css ` ${ lightBlue.a100 }; `}
    ${ props => props.lightBlueA200 && css ` ${ lightBlue.a200 }; `}
    ${ props => props.lightBlueA400 && css ` ${ lightBlue.a400 }; `}
    ${ props => props.lightBlueA700 && css ` ${ lightBlue.a700 }; `}

    /* Cyan */
    ${ props => props.cyan50 && css ` ${ cyan[50] }; `}
    ${ props => props.cyan100 && css ` ${ cyan[100] }; `}
    ${ props => props.cyan200 && css ` ${ cyan[200] }; `}
    ${ props => props.cyan300 && css ` ${ cyan[300] }; `}
    ${ props => props.cyan400 && css ` ${ cyan[400] }; `}
    ${ props => props.cyan500 && css ` ${ cyan[500] }; `}
    ${ props => props.cyan600 && css ` ${ cyan[600] }; `}
    ${ props => props.cyan700 && css ` ${ cyan[700] }; `}
    ${ props => props.cyan800 && css ` ${ cyan[800] }; `}
    ${ props => props.cyan900 && css ` ${ cyan[900] }; `}
    ${ props => props.cyanA100 && css ` ${ cyan.a100 }; `}
    ${ props => props.cyanA200 && css ` ${ cyan.a200 }; `}
    ${ props => props.cyanA400 && css ` ${ cyan.a400 }; `}
    ${ props => props.cyanA700 && css ` ${ cyan.a700 }; `}

    /* Teal */
    ${ props => props.teal50 && css ` ${ teal[50] }; `}
    ${ props => props.teal100 && css ` ${ teal[100] }; `}
    ${ props => props.teal200 && css ` ${ teal[200] }; `}
    ${ props => props.teal300 && css ` ${ teal[300] }; `}
    ${ props => props.teal400 && css ` ${ teal[400] }; `}
    ${ props => props.teal500 && css ` ${ teal[500] }; `}
    ${ props => props.teal600 && css ` ${ teal[600] }; `}
    ${ props => props.teal700 && css ` ${ teal[700] }; `}
    ${ props => props.teal800 && css ` ${ teal[800] }; `}
    ${ props => props.teal900 && css ` ${ teal[900] }; `}
    ${ props => props.tealA100 && css ` ${ teal.a100 }; `}
    ${ props => props.tealA200 && css ` ${ teal.a200 }; `}
    ${ props => props.tealA400 && css ` ${ teal.a400 }; `}
    ${ props => props.tealA700 && css ` ${ teal.a700 }; `}

    /* Green */
    ${ props => props.green50 && css ` ${ green[50] }; `}
    ${ props => props.green100 && css ` ${ green[100] }; `}
    ${ props => props.green200 && css ` ${ green[200] }; `}
    ${ props => props.green300 && css ` ${ green[300] }; `}
    ${ props => props.green400 && css ` ${ green[400] }; `}
    ${ props => props.green500 && css ` ${ green[500] }; `}
    ${ props => props.green600 && css ` ${ green[600] }; `}
    ${ props => props.green700 && css ` ${ green[700] }; `}
    ${ props => props.green800 && css ` ${ green[800] }; `}
    ${ props => props.green900 && css ` ${ green[900] }; `}
    ${ props => props.greenA100 && css ` ${ green.a100 }; `}
    ${ props => props.greenA200 && css ` ${ green.a200 }; `}
    ${ props => props.greenA400 && css ` ${ green.a400 }; `}
    ${ props => props.greenA700 && css ` ${ green.a700 }; `}

    /* Light Green */
    ${ props => props.lightGreen50 && css ` ${ lightGreen[50] }; `}
    ${ props => props.lightGreen100 && css ` ${ lightGreen[100] }; `}
    ${ props => props.lightGreen200 && css ` ${ lightGreen[200] }; `}
    ${ props => props.lightGreen300 && css ` ${ lightGreen[300] }; `}
    ${ props => props.lightGreen400 && css ` ${ lightGreen[400] }; `}
    ${ props => props.lightGreen500 && css ` ${ lightGreen[500] }; `}
    ${ props => props.lightGreen600 && css ` ${ lightGreen[600] }; `}
    ${ props => props.lightGreen700 && css ` ${ lightGreen[700] }; `}
    ${ props => props.lightGreen800 && css ` ${ lightGreen[800] }; `}
    ${ props => props.lightGreen900 && css ` ${ lightGreen[900] }; `}
    ${ props => props.lightGreenA100 && css ` ${ lightGreen.a100 }; `}
    ${ props => props.lightGreenA200 && css ` ${ lightGreen.a200 }; `}
    ${ props => props.lightGreenA400 && css ` ${ lightGreen.a400 }; `}
    ${ props => props.lightGreenA700 && css ` ${ lightGreen.a700 }; `}

    /* Lime */
    ${ props => props.lime50 && css ` ${ lime[50] }; `}
    ${ props => props.lime100 && css ` ${ lime[100] }; `}
    ${ props => props.lime200 && css ` ${ lime[200] }; `}
    ${ props => props.lime300 && css ` ${ lime[300] }; `}
    ${ props => props.lime400 && css ` ${ lime[400] }; `}
    ${ props => props.lime500 && css ` ${ lime[500] }; `}
    ${ props => props.lime600 && css ` ${ lime[600] }; `}
    ${ props => props.lime700 && css ` ${ lime[700] }; `}
    ${ props => props.lime800 && css ` ${ lime[800] }; `}
    ${ props => props.lime900 && css ` ${ lime[900] }; `}
    ${ props => props.limeA100 && css ` ${ lime.a100 }; `}
    ${ props => props.limeA200 && css ` ${ lime.a200 }; `}
    ${ props => props.limeA400 && css ` ${ lime.a400 }; `}
    ${ props => props.limeA700 && css ` ${ lime.a700 }; `}

    /* Yellow */
    ${ props => props.yellow50 && css ` ${ yellow[50] }; `}
    ${ props => props.yellow100 && css ` ${ yellow[100] }; `}
    ${ props => props.yellow200 && css ` ${ yellow[200] }; `}
    ${ props => props.yellow300 && css ` ${ yellow[300] }; `}
    ${ props => props.yellow400 && css ` ${ yellow[400] }; `}
    ${ props => props.yellow500 && css ` ${ yellow[500] }; `}
    ${ props => props.yellow600 && css ` ${ yellow[600] }; `}
    ${ props => props.yellow700 && css ` ${ yellow[700] }; `}
    ${ props => props.yellow800 && css ` ${ yellow[800] }; `}
    ${ props => props.yellow900 && css ` ${ yellow[900] }; `}
    ${ props => props.yellowA100 && css ` ${ yellow.a100 }; `}
    ${ props => props.yellowA200 && css ` ${ yellow.a200 }; `}
    ${ props => props.yellowA400 && css ` ${ yellow.a400 }; `}
    ${ props => props.yellowA700 && css ` ${ yellow.a700 }; `}

    /* Amber */
    ${ props => props.amber50 && css ` ${ amber[50] }; `}
    ${ props => props.amber100 && css ` ${ amber[100] }; `}
    ${ props => props.amber200 && css ` ${ amber[200] }; `}
    ${ props => props.amber300 && css ` ${ amber[300] }; `}
    ${ props => props.amber400 && css ` ${ amber[400] }; `}
    ${ props => props.amber500 && css ` ${ amber[500] }; `}
    ${ props => props.amber600 && css ` ${ amber[600] }; `}
    ${ props => props.amber700 && css ` ${ amber[700] }; `}
    ${ props => props.amber800 && css ` ${ amber[800] }; `}
    ${ props => props.amber900 && css ` ${ amber[900] }; `}
    ${ props => props.amberA100 && css ` ${ amber.a100 }; `}
    ${ props => props.amberA200 && css ` ${ amber.a200 }; `}
    ${ props => props.amberA400 && css ` ${ amber.a400 }; `}
    ${ props => props.amberA700 && css ` ${ amber.a700 }; `}

    /* Orange */
    ${ props => props.orange50 && css ` ${ orange[50] }; `}
    ${ props => props.orange100 && css ` ${ orange[100] }; `}
    ${ props => props.orange200 && css ` ${ orange[200] }; `}
    ${ props => props.orange300 && css ` ${ orange[300] }; `}
    ${ props => props.orange400 && css ` ${ orange[400] }; `}
    ${ props => props.orange500 && css ` ${ orange[500] }; `}
    ${ props => props.orange600 && css ` ${ orange[600] }; `}
    ${ props => props.orange700 && css ` ${ orange[700] }; `}
    ${ props => props.orange800 && css ` ${ orange[800] }; `}
    ${ props => props.orange900 && css ` ${ orange[900] }; `}
    ${ props => props.orangeA100 && css ` ${ orange.a100 }; `}
    ${ props => props.orangeA200 && css ` ${ orange.a200 }; `}
    ${ props => props.orangeA400 && css ` ${ orange.a400 }; `}
    ${ props => props.orangeA700 && css ` ${ orange.a700 }; `}

    /* Deep Orange */
    ${ props => props.deepOrange50 && css ` ${ deepOrange[50] }; `}
    ${ props => props.deepOrange100 && css ` ${ deepOrange[100] }; `}
    ${ props => props.deepOrange200 && css ` ${ deepOrange[200] }; `}
    ${ props => props.deepOrange300 && css ` ${ deepOrange[300] }; `}
    ${ props => props.deepOrange400 && css ` ${ deepOrange[400] }; `}
    ${ props => props.deepOrange500 && css ` ${ deepOrange[500] }; `}
    ${ props => props.deepOrange600 && css ` ${ deepOrange[600] }; `}
    ${ props => props.deepOrange700 && css ` ${ deepOrange[700] }; `}
    ${ props => props.deepOrange800 && css ` ${ deepOrange[800] }; `}
    ${ props => props.deepOrange900 && css ` ${ deepOrange[900] }; `}
    ${ props => props.deepOrangeA100 && css ` ${ deepOrange.a100 }; `}
    ${ props => props.deepOrangeA200 && css ` ${ deepOrange.a200 }; `}
    ${ props => props.deepOrangeA400 && css ` ${ deepOrange.a400 }; `}
    ${ props => props.deepOrangeA700 && css ` ${ deepOrange.a700 }; `}

    /* Brown */
    ${ props => props.brown50 && css ` ${ brown[50] }; `}
    ${ props => props.brown100 && css ` ${ brown[100] }; `}
    ${ props => props.brown200 && css ` ${ brown[200] }; `}
    ${ props => props.brown300 && css ` ${ brown[300] }; `}
    ${ props => props.brown400 && css ` ${ brown[400] }; `}
    ${ props => props.brown500 && css ` ${ brown[500] }; `}
    ${ props => props.brown600 && css ` ${ brown[600] }; `}
    ${ props => props.brown700 && css ` ${ brown[700] }; `}
    ${ props => props.brown800 && css ` ${ brown[800] }; `}
    ${ props => props.brown900 && css ` ${ brown[900] }; `}
    ${ props => props.brownA100 && css ` ${ brown.a100 }; `}
    ${ props => props.brownA200 && css ` ${ brown.a200 }; `}
    ${ props => props.brownA400 && css ` ${ brown.a400 }; `}
    ${ props => props.brownA700 && css ` ${ brown.a700 }; `}

    /* Gray */
    ${ props => props.gray50 && css ` ${ gray[50] }; `}
    ${ props => props.gray100 && css ` ${ gray[100] }; `}
    ${ props => props.gray200 && css ` ${ gray[200] }; `}
    ${ props => props.gray300 && css ` ${ gray[300] }; `}
    ${ props => props.gray400 && css ` ${ gray[400] }; `}
    ${ props => props.gray500 && css ` ${ gray[500] }; `}
    ${ props => props.gray600 && css ` ${ gray[600] }; `}
    ${ props => props.gray700 && css ` ${ gray[700] }; `}
    ${ props => props.gray800 && css ` ${ gray[800] }; `}
    ${ props => props.gray900 && css ` ${ gray[900] }; `}
    ${ props => props.grayA100 && css ` ${ gray.a100 }; `}
    ${ props => props.grayA200 && css ` ${ gray.a200 }; `}
    ${ props => props.grayA400 && css ` ${ gray.a400 }; `}
    ${ props => props.grayA700 && css ` ${ gray.a700 }; `}

    /* Blue Gray */
    ${ props => props.blueGray50 && css ` ${ blueGray[50] }; `}
    ${ props => props.blueGray100 && css ` ${ blueGray[100] }; `}
    ${ props => props.blueGray200 && css ` ${ blueGray[200] }; `}
    ${ props => props.blueGray300 && css ` ${ blueGray[300] }; `}
    ${ props => props.blueGray400 && css ` ${ blueGray[400] }; `}
    ${ props => props.blueGray500 && css ` ${ blueGray[500] }; `}
    ${ props => props.blueGray600 && css ` ${ blueGray[600] }; `}
    ${ props => props.blueGray700 && css ` ${ blueGray[700] }; `}
    ${ props => props.blueGray800 && css ` ${ blueGray[800] }; `}
    ${ props => props.blueGray900 && css ` ${ blueGray[900] }; `}
    ${ props => props.blueGrayA100 && css ` ${ blueGray.a100 }; `}
    ${ props => props.blueGrayA200 && css ` ${ blueGray.a200 }; `}
    ${ props => props.blueGrayA400 && css ` ${ blueGray.a400 }; `}
    ${ props => props.blueGrayA700 && css ` ${ blueGray.a700 }; `}

    

    

    
    // ============================== COLORS =================================

`;


export default colors;