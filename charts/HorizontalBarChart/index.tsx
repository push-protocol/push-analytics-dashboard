// React, NextJS imports
import React from 'react';
import dynamic from 'next/dynamic';

// External Library imports
import { CardContent, Grid, useMediaQuery } from '@mui/material';
import { RotatingLines } from 'react-loader-spinner';
import styled, { useTheme } from 'styled-components';
import _ from 'lodash';
const ReactApexChart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});

// Internal Components imports
import BaseOptions from '../BaseOptions';
import { DAPP_LINKS } from '../../utils/constants';
import { ItemVV2, ItemHV2 } from '../../components/Reusables/SharedStyling';
import { Text } from '../../components/Reusables/SharedStyling';
import { ThemeType } from '../../types/theme';

export default function HorizontalBarChart({
  title,
  label,
  category,
  value,
  isLoading,
}: {
  title: string;
  label: string;
  category?: Array<string>;
  value?: Array<number>;
  isLoading?: boolean;
}) {
  const theme = useTheme() as ThemeType;
  const isMobile = useMediaQuery('(max-width:480px)');

  const options = _.merge(BaseOptions(), {
    series: [
      {
        data: value,
        name: label,
      },
    ],
    chart: {
      type: 'bar',
      height: 380,
      events: {
        xAxisLabelClick: function () {
          window.open(DAPP_LINKS.CHANNELS, '_blank');
        },
      },
      fontFamily: 'var(--font-family)',
    },
    plotOptions: {
      bar: {
        barHeight: '30%',
        borderRadius: 2.5,
        distributed: true,
        horizontal: true,
        dataLabels: {
          position: 'bottom',
        },
      },
    },
    colors: theme.graph.barchartColorSet,

    xaxis: {
      categories: category,
      axisBorder: {
        show: true,
      },
      tickAmount: 8,
      labels: {
        formatter: (value) => {
          if (value > 1000) {
            let dividend: any = 0;
            if (value >= 1000000) {
              dividend = Number.isInteger(value / 1000000)
                ? value / 1000000
                : (value / 1000000).toFixed(1);
              return dividend + 'M';
            } else {
              dividend = Number.isInteger(value / 1000)
                ? value / 1000
                : (value / 1000).toFixed(1);
              return dividend + 'K';
            }
          }
          return value;
        },
        style: {
          fontSize: '12px',
          fontFamily: 'var(--font-family)',
          colors: theme.graph.primaryLabel,
          cursor: 'pointer',
        },
      },
    },
    yaxis: {
      labels: {
        show: true,
        formatter: function (value) {
          const editedValue = isMobile
            ? value.length > 8
              ? value.substr(0, 6) + '...'
              : value
            : value.length > 15
            ? value.substr(0, 11) + '...'
            : value;
          return editedValue;
        },
        style: {
          fontSize: '12px',
          fontFamily: 'var(--font-family)',
          colors: theme.graph.primaryLabel,
        },
      },
      axisBorder: {
        show: false,
      },
    },
    legend: {
      show: false,
    },
    // stroke: {
    //   width: 6,
    //   curve: 'straight',
    // },
    grid: {
      yaxis: {
        lines: {
          show: false,
        },
      },
      xaxis: {
        lines: {
          show: true,
        },
      },
    },
  });

  return (
    <Grid item xs={12} sm={12} md={6} lg={6}>
      <CardContainer
        color={theme.text.primary}
        alignItems="flex-start"
        justifyContent="flex-start"
        height="auto"
        width="-webkit-fill-available"
        background={isMobile ? 'transparent' : theme.background.card}
        border={`1px solid ${theme.background.border}`}
        borderRadius="28px"
        minHeight="384px"
        padding={isMobile ? '35px 0px 0px' : '30px 30px 6px'}
      >
        <Text weight={500} size="18px" color={theme.text.primary}>
          {title}
        </Text>
        <CardContent
          sx={{
            width: '100%',
            padding: '0px',
            '&:last-child': {
              paddingBottom: 0,
            },
          }}
        >
          {isLoading ? (
            <ItemHV2 height="265px" width="100%">
              <RotatingLines
                strokeColor="#CF1C84"
                strokeWidth="4"
                animationDuration="1.9"
                width="50"
                visible={true}
              />
            </ItemHV2>
          ) : (
            <ReactApexChart
              type="bar"
              series={options?.series}
              options={options}
              height={300}
            />
          )}
        </CardContent>
      </CardContainer>
    </Grid>
  );
}

const CardContainer = styled(ItemVV2)`
  @media (max-width: 480px) {
    border: none;
  }
`;
