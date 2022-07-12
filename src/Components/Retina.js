// JavaScript source code
import React, { Component } from 'react';

import {
    Box,
    //Button,
    //Collapsible,
    //Heading,
    //Grommet,
    //Layer,
    //ResponsiveContext,
    Chart,
    Text,
    Card,
    CardBody,
    CardFooter,
    //DropButton,
    Grid
} from 'grommet';

import { Bluetooth as Storage } from 'grommet-icons';


const gradient = [
    { value: 28, color: 'status-ok' },
    { value: 50, color: 'status-warning' },
    { value: 80, color: 'status-critical' },
];

const ChartPreview = ({ type }) => (
  <Box>
    <Chart
      type={type}
      id={type}
      dash={type === 'line'}
      round
      thickness="xsmall"
      bounds={[
        [0, 6],
        [0, 100],
      ]}
      values={[
        { value: [6, 100], label: 'one hundred' },
        { value: [5, 70], label: 'seventy' },
        { value: [4, 40], label: 'sixty' },
        { value: [3, 80], label: 'eighty' },
        { value: [2, 25], label: 'forty' },
        { value: [1, 50], label: 'thirty' },
        { value: [0, 25], label: 'sixty' },
      ]}
      aria-label="chart card"
      color={gradient}
      size={{ height: 'xsmall' }}
    />
  </Box>
);

const Identifier = ({ children, title, subTitle, size, ...rest }) => (
  <Box gap="small" align="center" direction="row" pad="small" {...rest}>
    {children}
    <Box>
      <Text size={size} weight="bold">
        {title}
      </Text>
      <Text size={size}>{subTitle}</Text>
    </Box>
  </Box>
);
const theme = {
    thememode: 'dark',
    global: {
        font: {
            family: `-apple-system,
           blinkmacsystemfont,
           "segoe ui"`,
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
    //        brand: '#228be6',
    //    },
    //    font: {
    //        family: 'roboto',
    //        size: '14px',
    //        height: '20px',
    //    },
    //},

};










//
//############################################################################################





var data = [

    //{
    //    icon: <Storage size="large" />,
    //    title: 'Storage',//What type of signal, The stock
    //    subTitle: 'Sub-system and Devices',//inception, duration
    //    message: '36.8 TB available',//valuation, trend, backtest. overall
    //    type: 'line',
    //},
    {
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
    }]



//const data = []
//Object.values(arr).forEach(value => {
//    //checking if its the right value.
//    //const res2 = JSON.stringify(value)

//    //VALUE IS EACH DATA SET WE NEED
//    for (let x in value) {
//        a = value[x]
//        //console.log(x + ": "+ a)
//        console.log(a)
//        for (let y in a) {
//            //console.log(y+":"+a[y])
//        }
//    }
//    //console.log(res2)

//});


//const data = [];

    
        
////#################FUNCTION MAKING DATA USABLE & ASSIGNING VALUES###############################
//arr.forEach(function (item) {
//    const res = item
//    //convert to string
//    const res2 = JSON.stringify(res)
//    //remove tag at top. 37 as first 37 need to be removed
//    const newstr = res2.substring(37)
//    //remove last bracket
//    const newstr2 = newstr.slice(0, -1)
//    //console.log(newstr2)

//    //convert back to JSON & add needed brackets
//    const final1 = '[{' + newstr2 + ']'
//    //console.log(final1)
//    const final2 = JSON.parse(final1)

//    final2.forEach(function (item) {
//        const symbol = item.symbol
//        data.push(symbol)
//        const valuation_signal = item.signal.valuation_signal
//        data.push(valuation_signal)
//        const qi_fvg = item.signal.qi_fvg
//        data.push(qi_fvg)
//        const valuation = item.signal.signal_strength_value
//        data.push(valuation)
//        const trend = item.signal.mv_gradient_strength
//        data.push(trend)
//        const backtest = item.signal.backtest_strength
//        data.push(backtest)
//        const inception = item.signal.first_live_timestamp
//        data.push(inception)
//        const signal_status = item.signal_status
//        data.push(signal_status)

//    });//FAT FUCKING DUB HOLY SHIT THAT SUCKED

//});

    





//get it in a static text,
//generate 1, import it all in app and pass it all to component in react


class Retina extends Component
{
    render() {
        return(
        //<Box
        //    direction="row"
        //    border={{ color: 'brand', size: 'large' }}
        //    pad="medium"
        //>
        //    test
        //    <Box pad="small" background="dark-3" />
        //    <Box pad="medium" background="light-3" />
        //    </Box>

         
        <Box pad="large" height="100%">
               {/* changed value with data*/}
            <Grid gap="medium" columns={{ count: 'fit', size: 'small' }}>
                    <Card
                        onClick={() => {

                            alert('Card was Clicked!');
                        }}
                    >
                        <CardBody pad="small">
                            <Identifier
                                title={this.props.valuation_signal + "------------- " + this.props.symbols + "----------" + this.props.signal_status}

                                subTitle={this.props.time_inception}
                                //this.props.s
                                size="small"
                            >
                                {data.icon}
                            </Identifier>

                            <p> {this.props.qi_fvg}</p>


                            <ChartPreview type={data.type} />
                        </CardBody>
                        <CardFooter pad={{ horizontal: 'medium', vertical: 'small' }}>
                            <Text size="xsmall">{"fvg:" + this.props.qi_fvg + ",Valuation strength:" + this.props.signal_strength_value + "Trend strength:" + this.props.my_gradient_strength + ", Backtest strength:" + this.props.backtest_strength +""}</Text>
                        </CardFooter>
                    </Card>
            </Grid>
        </Box>
        )
    }
}
export default Retina;