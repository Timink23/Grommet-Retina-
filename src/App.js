import React, { Component } from 'react';
import Retina from './Components/Retina';
import {
Box,
Button,
Collapsible,
Heading,
Grommet,
Layer,
ResponsiveContext,
//Chart,
//Text,
//Card,
//CardBody,
//CardFooter,
//DropButton,
//Grid
} from 'grommet';

import { FormClose, Notification } from 'grommet-icons';



const theme = {
    themeMode: 'dark',
  global: {
    font: {
      family: `-apple-system,
           BlinkMacSystemFont,
           "Segoe UI"`,
    },
    },
  card: {
    hover: {
      container: {
        elevation: 'large',
      },
    },
    container: {
      elevation: 'medium',
      extend: `transition: all 0.2s ease-in-out;`,
    },
    footer: {
      pad: { horizontal: 'medium', vertical: 'small' },
      background: '#00000008',
    },
  },
    //global: {
    //    colors: {
    //        brand: '#228BE6',
    //    },
    //    font: {
    //        family: 'Roboto',
    //        size: '14px',
    //        height: '20px',
    //    },
    //},


};




const AppBar = (props) => (
    <Box
        tag='header'
        direction='row'
        align='center'
        justify='between'
        background='brand'
        pad={{ left: 'medium', right: 'small', vertical: 'small' }}
        elevation='medium'
        style={{ zIndex: '1' }}
        {...props}
    />
);

const arr = [{
    "48ecc709f02949d5bad028e233349b0d": {
        "signal_id": "48ecc709f02949d5bad028e233349b0d",
        "qi_signal_id": "2802 JP",
        "symbol": "2802 JP",
        "signal": {
            "valuation_signal": "Bullish",
            "qi_fvg": -1.27,
            "qi_rsq": 81,
            "3d price change": 1.22,
            "3d qi model change": 0.99,
            "qi_model_value": 3229.12,
            "currency": "JPY",
            "model_name": "2802 JP",
            "asset_class": "Equity",
            "tags": [
                "Stock",
                "Consumer Defensive",
                "JPY",
                "APAC"
            ],
            "signal_strength_value": 4,
            "mv_gradient_strength": 3,
            "backtest_strength": 4,
            "momentum_strength": 3,
            "security_name": "Ajinomoto Co.,Inc.",
            "first_live_timestamp": "2022-06-22T07:16:03Z",
            "signal_status": "closed",
            "last_live_timestamp": "2022-06-22T21:55:35Z",
            "closed_timestamp": "2022-06-27T07:14:56Z",
            "symbol": "2802 JP"
        },
        "signal_status": "closed"
    },
    "8d1a1d07774c414697b30bd59a9335ee": {
        "signal_id": "8d1a1d07774c414697b30bd59a9335ee",
        "qi_signal_id": "RILBA",
        "symbol": "RILBA",
        "signal": {
            "valuation_signal": "Bullish",
            "qi_fvg": -1.05,
            "qi_rsq": 78,
            "3d price change": 0.25,
            "3d qi model change": 0.93,
            "qi_model_value": 835.64,
            "currency": "DKK",
            "model_name": "RILBA",
            "asset_class": "Equity",
            "tags": [
                "Stock",
                "EUR",
                "Euro Stoxx 600"
            ],
            "signal_strength_value": 3,
            "mv_gradient_strength": 1,
            "backtest_strength": 4,
            "momentum_strength": 2,
            "security_name": "Ringkjøbing Landbobank A/S",
            "first_live_timestamp": "2022-06-22T08:50:51Z",
            "signal_status": "in-play",
            "last_live_timestamp": "2022-06-28T21:55:34Z",
            "symbol": "RILBA"
        },
        "signal_status": "in-play"
    },
    "12942595492949c7813bfa2b88b03069": {
        "signal_id": "12942595492949c7813bfa2b88b03069",
        "qi_signal_id": "EXV3 vs. EXV7",
        "symbol": "EXV3 vs. EXV7",
        "signal": {
            "valuation_signal": "Bearish",
            "qi_fvg": 1.19,
            "qi_rsq": 79,
            "qi_model_value": 0.4213,
            "currency": null,
            "model_name": "EXV3 vs. EXV7",
            "asset_class": "ETFs",
            "tags": [
                "EUR",
                "ETF-Equity RV"
            ],
            "signal_strength_value": 4,
            "mv_gradient_strength": 4,
            "backtest_strength": 4,
            "momentum_strength": 3,
            "security_name": "ISH.S.EU.600 TEC.U.ETF A./IS.S.EU.600 CHEM.U.ETF A.",
            "first_live_timestamp": "2022-06-17T15:11:38Z",
            "signal_status": "in-play",
            "last_live_timestamp": "2022-06-29T16:40:35Z",
            "3d price change": -0.37,
            "3d qi model change": -2.69,
            "symbol": "EXV3 vs. EXV7"
        },
        "signal_status": "in-play"
    },
}]

//CURRENTLY 8 VALUES IN EACH.
//is there a way for me to put class app in this forloop and just have each value[x]. input for each round.

const data = []
Object.values(arr).forEach(value => {
    //checking if its the right value.
    const res2 = JSON.stringify(value)

    //VALUE IS EACH DATA SET WE NEED
    for (let x in value) {
        a = JSON.stringify(value[x])
        //console.log(x + ": "+ a)
        console.log(a)//a is every signal, bunch by bunch
        console.log('-----------------')
        console.log(value[x].signal.valuation_signal)
        console.log('-----------------')
        for (let y in a) {
            //console.log(y+":"+a[y])
        }
    }
    //console.log(res2)

});




class App extends Component {
    state = {
        showSidebar: false,
    }
    render() {
        const { showSidebar } = this.state;
        return (
            <Grommet theme={theme} full>
                <ResponsiveContext.Consumer>
                    {size => (
                        <Box fill>
                            <AppBar>
                                <Heading level='3' margin='none'>My App</Heading>
                                <Button
                                    icon={<Notification />}//can change the icon in the top right
                                    onClick={() => this.setState({ showSidebar: !this.state.showSidebar })}
                                />

                            </AppBar>  {/*CODE FOR APP BAR TAB*/}
                            

                            <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
                                <Box flex align='center' justify='center'>
                                    <Retina symbols="anything"
                                        valuation_signal="Bullish"
                                        qi_fvg="-1.27"
                                        signal_strength_value="4/4"
                                        my_gradient_strength="3/4"
                                        backtest_strength="4/4"
                                        time_inception="2022-05,22"
                                        signal_status="closed"
                                    />

                                    {/*<Retina //define props and data is passed through the app file. 
                                     * keep it as a variable in app with 2 static data sets. FOR LOOP HERE, pass retina everytime with each data/>*/}
                                    
                                    <dropbutton
                                        label="fancy selector"
                                        dropcontent={
                                            <box pad="large" background="light-2" />
                                        }
                                    />
                                    

                                </Box> {/*SIDEBAR CODE*/ }
                                {(!showSidebar || size !== 'small') ? (
                                    <Collapsible direction="horizontal" open={showSidebar}>
                                        <Box
                                            flex
                                            width='medium'
                                            background='light-2'
                                            elevation='small'
                                            align='center'
                                            justify='center'
                                           
                                        >

                                            sidebar
                                        </Box>
                                    </Collapsible>
                                ) : (
                                    <Layer>
                                            <Box

                                            background='light-2'
                                            tag='header'
                                            justify='end'
                                            align='center'
                                            direction='row'
                                        >
                                            <Button
                                                icon={<FormClose />}
                                                onClick={() => this.setState({ showSidebar: false })}
                                            />
                                            </Box>

                                        <Box
                                            fill
                                            background='light-2'
                                            align='center'
                                                justify='center'

                                        >
                                            sidebar
                                        </Box>
                                    </Layer>
                                )}
                            </Box>
                        </Box>
                    )}
                </ResponsiveContext.Consumer>
            </Grommet>
        );
    }
}

//Clickable.parameters = {
//chromatic: { disable: true },
//};

export default App;
//export { data };
//export default Clickable;