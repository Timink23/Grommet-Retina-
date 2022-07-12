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





const data = [

    {
        icon: <Storage size="large" />,
        title: 'Storage',//What type of signal, The stock
        subTitle: 'Sub-system and Devices',//inception, duration
        message: '36.8 TB available',//valuation, trend, backtest. overall
        type: 'line',
    },


    //{
    //    "48ecc709f02949d5bad028e233349b0d": {
    //        "qi_signal_id": "2802 jp",
    //        "symbol": "2802 jp",
    //        "signal": {
    //            "valuation_signal": "bullish",
    //            "qi_fvg": -1.27,
    //            "qi_rsq": 81,
    //            "3d price change": 1.22,
    //            "3d qi model change": 0.99,
    //            "qi_model_value": 3229.12,
    //            "currency": "jpy",
    //            "model_name": "2802 jp",
    //            "asset_class": "equity",
    //            "tags": [
    //                "stock",
    //                "consumer defensive",
    //                "jpy",
    //                "apac"
    //            ],
    //            "signal_strength_value": 4,
    //            "mv_gradient_strength": 3,
    //            "backtest_strength": 4,
    //            "momentum_strength": 3,
    //            "security_name": "ajinomoto co.,inc.",
    //            "first_live_timestamp": "2022-06-22t07:16:03z",
    //            "signal_status": "closed",
    //            "last_live_timestamp": "2022-06-22t21:55:35z",
    //            "closed_timestamp": "2022-06-27t07:14:56z",
    //            "symbol": "2802 jp"
    //        },
    //        "signal_status": "closed",

    //    },
    //}
];




class Test extends Component
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

            <Grid gap="medium" columns={{ count: 'fit', size: 'small' }}>
                {data.map((value) => (
                    <Card
                        key={value.title}
                        onClick={() => {

                            alert('Card was Clicked!');
                        }}
                    >
                        <CardBody pad="small">
                            <Identifier
                                title={value.title}

                                subTitle={value.subTitle}
                                size="small"
                            >
                                {value.icon}
                            </Identifier>
                            <ChartPreview type={value.type} />

                        </CardBody>
                        <CardFooter pad={{ horizontal: 'medium', vertical: 'small' }}>
                            <Text size="xsmall">{value.message}</Text>
                        </CardFooter>
                    </Card>
                ))}
            </Grid>
        </Box>
        )
    }
}
export default Test;