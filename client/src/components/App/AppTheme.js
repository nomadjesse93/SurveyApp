import {createMuiTheme} from "@material-ui/core";

export const theme = createMuiTheme({
// overrides:{
//     MuiInput:{
//         underline:{
//             "&::after":{
//                 borderBottom: `solid 2px #43dde6`
//             },
//
//
//
//         },
//
//     },
//
//     MuiFormLabel: {
//         root: {
//             "&$focused": {
//                 color: 'rgba(40,197,215,0.6)',
//             },
//         },
//     },
// },
    palette:{
    primary:{
        main:'#f0f0f0'
    },
        secondary:{
        main:'#43dde6',
            light:'rgba(40,197,215,0.6)',
            dark:'#364f6b'
        },
        error:{
        main:"#fc5185"
        }

    }
})


























