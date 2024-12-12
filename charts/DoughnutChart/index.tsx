// React, NextJS imports
import React from 'react';

// External Library imports
import { Grid, Card, useMediaQuery } from '@mui/material';
import ReactECharts from 'echarts-for-react';
import styled, { useTheme } from 'styled-components';

// Internal Components imports
import { ItemHV2 } from '../../components/Reusables/SharedStyling';
import { Text } from '../../components/Reusables/SharedStyling';
import { ThemeType } from '../../types/theme';

const DoughnutChart = ({ data, title, label, value, colorSet }: any) => {
  const theme = useTheme() as ThemeType;
  // Checking whether screen is mobile screen
  const isMobile = useMediaQuery('(max-width:480px)');

  // Constructing data for chart
  const getTotal = (data: any) => {
    let total = 0;
    for (let value in data) {
      total += data[value];
    }
    return total;
  };
  const getDataPoints = ({ data, label }: any) => {
    let values: any[] = [];
    // const sum = getTotal(data);
    // ((data[key] / sum) * 100).toFixed(2)
    for (let key in data) {
      values.push({ value: data[key], name: key });
    }

    return {
      tooltip: {
        theme: 'dark',
        trigger: 'item',
        valueFormatter: (value: number) => value,
        backgroundColor: theme.background.tooltip,
        textStyle: {
          color: theme.text.primary,
          fontFamily: 'var(--font-family)',
        },
        borderWidth: 0,
        borderRadius: 10,
      },
      legend: {
        show: isMobile ? false : true,
        orient: 'vertical',
        left: 'left',
        selectedMode: false,
        top: value ? 30 : 0,
        textStyle: {
          color: theme.graph.legendText,
          fontSize: 12,
          fontFamily: 'var(--font-family)',
          fontWeight: 500,
        },
        itemWidth: 15,
        itemHeight: 6,
        itemStyle: {
          borderRadius: 6,
        },
        icon: 'roundRect',
      },
      color: colorSet,
      series: [
        {
          name: label,
          type: 'pie',
          radius: ['38%', '70%'],
          center: isMobile ? ['50%', '50%'] : ['62%', '46%'],
          data: [...values],
          emphasis: {
            itemStyle: {
              shadowBlur: 0,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
          label: {
            show: true,
            // formatter: (value) =>
            //   `{a|${value?.name}}\n {b|${value?.value}}\t\t\t\t\t`,'{b}\n {d}%',
            formatter: '{a|{b}}\n {b|{d}%}\t\t\t\t',
            color: theme.graph.primaryLabel,
            fontWeight: 500,
            rich: {
              a: {
                lineHeight: 15,
                color: theme.graph.primaryLabel,
                fontFamily: 'var(--font-family)',
                fontSize: '12px',
              },
              b: {
                fontWeight: 500,
                color: theme.graph.secondaryLabel,
                fontFamily: 'var(--font-family)',
                fontSize: '14px',
                lineHeight: 20,
              },
            },
          },
        },
      ],
    };
  };

  return (
    <Grid
      sx={{
        minHeight: '389px',
        position: 'relative',
        '@media(max-width:901px)': {
          minWidth: '100%',
        },
      }}
      item
      xs={12}
      sm={12}
      md={6}
      lg={6}
    >
      <Card
        sx={{
          backgroundColor: isMobile ? 'transparent' : theme.background.card,
          border: `1px solid ${theme.background.border}`,
          borderRadius: '28px',
          padding: isMobile
            ? value
              ? '30px 0px 0px'
              : '50px 0px 0px'
            : '28px 30px',
          boxShadow: 'none',
          '@media(max-width:480px)': {
            border: 'none',
          },
        }}
      >
        <Text
          weight={500}
          size="18px"
          color={theme.text.primary}
          marginBottom={value ? '5px' : isMobile ? '0px' : '45px'}
        >
          {title}
        </Text>
        {value && (
          <Text
            weight={500}
            size="28px"
            color={theme.text.primary}
            marginBottom={value ? '5px' : '0px'}
          >
            $ {value?.toLocaleString()}
          </Text>
        )}
        <GraphContainer>
          <ReactECharts
            style={{
              minHeight: '100%',
              minWidth: '100%',
            }}
            option={getDataPoints({ data, label })}
          />
        </GraphContainer>
      </Card>
    </Grid>
  );
};

export default DoughnutChart;

const GraphContainer = styled(ItemHV2)`
  padding: 0px;
  min-height: 100%;
  min-width: 100%;
`;
