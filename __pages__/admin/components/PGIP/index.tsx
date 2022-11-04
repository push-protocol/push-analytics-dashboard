import { Grid, Card, CardHeader, Box } from "@mui/material";
import ReactECharts from "echarts-for-react";
import useModal from "hooks/useModal";
import { useEffect, useState } from "react";

const getDataPoints = (data: any) => {
  return {
    tooltip: {
      trigger: "item",
    },
    legend: {
      orient: "vertical",
      left: "left",
    },
    series: [
      {
        name: "Improvement Proposal",
        type: "pie",
        radius: "50%",
        data: [...data],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };
};

const INITIAL_STATE = [
  { value: 0, name: "Closed" },
  { value: 0, name: "Approved" },
];

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const PGIP = () => {
  const [state, setState] = useState(INITIAL_STATE);
  useEffect(() => {
    // const dataPoints = getDataPoints()
    const dataPoints = {
      closed: 70,
      approved: 30,
    };
    setState([
      { value: dataPoints.closed, name: "Closed" },
      { value: dataPoints.approved, name: "Approved" },
    ]);
  }, []);

  return (
    <Grid
      sx={{ height: "500px", position: "relative" }}
      item
      xs={12}
      md={6}
      lg={6}
    >
      <Card sx={{ height: "100%" }}>
        <CardHeader title={`Push Grants Improvement Proposals`} />
        <Box
          sx={{
            p: 3,
            display: "flex",
            justifyContent: "center",
            height: "100%",
            width: "100%",
          }}
          dir="ltr"
        >
          <ReactECharts
            style={{ height: "80%", width: "100%" }}
            option={getDataPoints(state)}
          />
        </Box>
      </Card>
    </Grid>
  );
};

export default PGIP;