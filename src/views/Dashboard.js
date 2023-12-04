import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../features/counter/counterSlice";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Dashboard = () => {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <Card>
        <CardContent>
          <Typography
            sx={{ fontSize: 14 }}
            color="text.secondary"
            gutterBottom
          ></Typography>
          <Typography variant="h3" component="div">
             Dashboard
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Counter: {counter}
          </Typography>
          <CardActions>
            <Button onClick={() => dispatch(increment())}>Increment</Button>
            <Button onClick={() => dispatch(decrement())}>Decrement</Button>
          </CardActions>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
