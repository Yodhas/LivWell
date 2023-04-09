import React from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Switch from "@material-ui/core/Switch";
import { FcCheckmark } from "react-icons/fc";
import { ImCross } from "react-icons/im";

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundImage: 'url("nereus-assets/img/bg/pattern1.png")',
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  cardHeader: {
    paddingTop: theme.spacing(3),
  },
}));

export default function Pricing(props) {
  const classes = useStyles();

  const content = {
    badge: "LIVWELL PREMIUM",
    "header-p1": "Subscribe for Livwell Premium",
    "header-p2": "",
    description: "Premium feature lets you - ",
    d1: " Rank Higher in Search  ",
    d2: "Multiply your Leads  ",
    d3: "Close more deals  ",
    d4: "Drive your business growth",
    option1: "Monthly",
    option2: "Annual",
    "01_title": "Silver",
    "01_price": "₹50",
    "01_suffix": " / mo",
    "01_benefit1": "Validity - 60 days",
    "01_benefit2": "Response Rate - Moderate",
    "01_benefit3": "Verified Tag",
    "01_benefit4": "Listing Priority",
    "primary-action": "Select plan",
    "secondary-action": "Learn more",
    "02_title": "Gold",
    "02_price": "₹100",
    "02_suffix": " / mo",
    "02_benefit1": "Validity - 60 days",
    "02_benefit2": "Response Rate - Good",
    "02_benefit3": "Verified Tags",
    "02_benefit4": "Listing Priority",
    "03_title": "Platinum",
    "03_price": "₹200",
    "03_suffix": " / mo",
    "03_benefit1": "Validity - 90 days",
    "03_benefit2": "Response Rate - High",
    "03_benefit3": "Verified Tags",
    "03_benefit4": "Listing Priority",

    ...props.content,
  };

  const [state, setState] = React.useState({
    checkbox: true,
  });

  const handleChange = (event) => {
    setState({ ...state, checkbox: event.target.checked });
  };

  const initPayment = (data) => {
    const options = {
      key: "rzp_test_wy8irY0bXtDdI0",
      amount: data.amount,
      currency: data.currency,
      name: content["01_title"],
      description: "Test Transaction",
      order_id: data.id,
      handler: async (response) => {
        try {
          const verifyUrl = "http://localhost:5000/api/payment/verify";
          axios.defaults.withCredentials = true;
          const { data } = await axios.post(verifyUrl, {
            response,
            withCredentials: true,
          });

          console.log(data);
        } catch (error) {
          console.log("error hai");
          console.log(error);
        }
      },
      theme: {
        color: "#3399cc",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  const priceS = 50;

  const handlePaymentS = async () => {
    try {
      const orderUrl = "http://localhost:5000/api/payment/orders";
      axios.defaults.withCredentials = true;
      const { data } = await axios.post(orderUrl, {
        amount: priceS,
        withCredentials: true,
      });
      console.log(data);
      initPayment(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const priceG = 100;

  const handlePaymentG = async () => {
    try {
      const orderUrl = "http://localhost:5000/api/payment/orders";
      axios.defaults.withCredentials = true;
      const { data } = await axios.post(orderUrl, {
        amount: priceG,
        withCredentials: true,
      });
      console.log(data);
      initPayment(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const priceP = 200;

  const handlePaymentP = async () => {
    try {
      const orderUrl = "http://localhost:5000/api/payment/orders";
      axios.defaults.withCredentials = true;
      const { data } = await axios.post(orderUrl, {
        amount: priceP,
        withCredentials: true,
      });
      console.log(data);
      initPayment(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className={classes.section}>
      <Container maxWidth="lg" style={{ fontFamily: "Open Sans" }}>
        <Box py={8} textAlign="center">
          <Box mb={3}>
            <Container maxWidth="sm">
              <Typography
                variant="overline"
                color="primary"
                style={{ fontSize: "1.3rem" }}
              >
                <strong>{content["badge"]}</strong>
              </Typography>
              <Typography variant="h3" component="h2" gutterBottom={true}>
                <Typography
                  variant="h3"
                  component="span"
                  color="primary"
                  style={{ color: "#FF487E" }}
                >
                  {content["header-p1"]}{" "}
                </Typography>
                <br></br>
                <Typography variant="h3" component="span">
                  {content["header-p2"]}
                </Typography>
              </Typography>
              <Typography
                variant="h5"
                component="h4"
                color="textSecondary"
                paragraph={true}
              >
                Premium Feature lets you :
              </Typography>
              <Typography
                variant="subtitle1"
                color=""
                paragraph={true}
                style={{ fontSize: "1.2rem" }}
              >
                <FcCheckmark></FcCheckmark>
                {content["d1"]}
                {"   "}
                <FcCheckmark></FcCheckmark> {content["d2"]}
                {"   "}
                <FcCheckmark></FcCheckmark> {content["d3"]}
                {"   "}
                <FcCheckmark></FcCheckmark> {content["d4"]}
              </Typography>

              <div>
                <Typography variant="subtitle1" component="span">
                  {content["option1"]}
                </Typography>
                &nbsp;{" "}
                <Switch
                  name="checkbox"
                  color="primary"
                  checked={state.checkbox}
                  onChange={handleChange}
                />{" "}
                &nbsp;
                <Typography variant="subtitle1" component="span">
                  {content["option2"]}
                </Typography>
              </div>
            </Container>
          </Box>

          <div className="container">
            <Grid container spacing={10}>
              <Grid item xs={12} md={4}>
                <Card
                  variant="outlined"
                  style={{
                    boxShadow:
                      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                  }}
                >
                  <CardHeader></CardHeader>
                  <Typography variant="h3" color="primary" component="span">
                    {content["01_title"]}
                  </Typography>
                  <CardContent>
                    <Box px={1} pb={2}>
                      <Typography
                        variant="h3"
                        component="h2"
                        gutterBottom={true}
                      >
                        {content["01_price"]}
                        <Typography
                          variant="h6"
                          color="textSecondary"
                          component="span"
                        >
                          {content["01_suffix"]}
                        </Typography>
                      </Typography>
                      <div
                        style={{
                          textAlign: "left",
                          paddingLeft: "10vh",
                          fontSize: "1.2rem",
                        }}
                      >
                        <Typography
                          color=""
                          variant="subtitle1"
                          component="p"
                          textAlign="left"
                          style={{ fontSize: "1.2rem" }}
                        >
                          <FcCheckmark></FcCheckmark> &nbsp;&nbsp;&nbsp;
                          {content["01_benefit1"]}
                        </Typography>
                        <Typography
                          color=""
                          variant="subtitle1"
                          component="p"
                          style={{ fontSize: "1.2rem" }}
                        >
                          <FcCheckmark></FcCheckmark> &nbsp;&nbsp;&nbsp;
                          {content["01_benefit2"]}
                        </Typography>
                        <Typography
                          color=""
                          variant="subtitle1"
                          component="p"
                          style={{ fontSize: "1.2rem" }}
                        >
                          <ImCross></ImCross> &nbsp;&nbsp;&nbsp;
                          {content["01_benefit3"]}
                        </Typography>
                        <Typography
                          color=""
                          variant="subtitle1"
                          component="p"
                          paragraph={true}
                          style={{ fontSize: "1.2rem" }}
                        >
                          <ImCross></ImCross> &nbsp;&nbsp;&nbsp;
                          {content["01_benefit4"]}
                        </Typography>
                      </div>
                    </Box>

                    <Button
                      onClick={handlePaymentS}
                      variant="contained"
                      color="primary"
                      className="btn btn-primary"
                      style={{ color: "white" }}
                    >
                      {content["primary-action"]}
                    </Button>
                    <Box mt={1}>
                      <Link href="#" color="primary">
                        {content["secondary-action"]}
                      </Link>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={4}>
                <Card
                  variant="outlined"
                  style={{
                    boxShadow:
                      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                  }}
                >
                  <CardHeader></CardHeader>
                  <Typography variant="h3" color="primary" component="span">
                    {content["02_title"]}
                  </Typography>
                  <CardContent>
                    <Box px={1} pb={2}>
                      <Typography
                        variant="h3"
                        component="h2"
                        gutterBottom={true}
                      >
                        {content["02_price"]}
                        <Typography
                          variant="h6"
                          color="textSecondary"
                          component="span"
                        >
                          {content["02_suffix"]}
                        </Typography>
                      </Typography>

                      <div style={{ textAlign: "left", paddingLeft: "10vh" }}>
                        <Typography
                          color=""
                          variant="subtitle1"
                          component="p"
                          style={{ fontSize: "1.2rem" }}
                        >
                          <FcCheckmark></FcCheckmark> &nbsp;&nbsp;&nbsp;
                          {content["02_benefit1"]}
                        </Typography>
                        <Typography
                          color=""
                          variant="subtitle1"
                          component="p"
                          style={{ fontSize: "1.2rem" }}
                        >
                          <FcCheckmark></FcCheckmark> &nbsp;&nbsp;&nbsp;
                          {content["02_benefit2"]}
                        </Typography>
                        <Typography
                          color=""
                          variant="subtitle1"
                          component="p"
                          style={{ fontSize: "1.2rem" }}
                        >
                          <FcCheckmark></FcCheckmark> &nbsp;&nbsp;&nbsp;
                          {content["02_benefit3"]}
                        </Typography>
                        <Typography
                          color=""
                          variant="subtitle1"
                          component="p"
                          paragraph={true}
                          style={{ fontSize: "1.2rem" }}
                        >
                          <ImCross></ImCross> &nbsp;&nbsp;&nbsp;
                          {content["02_benefit4"]}
                        </Typography>
                      </div>
                    </Box>

                    <Button
                      onClick={handlePaymentG}
                      variant="contained"
                      color="primary"
                      className="btn btn-primary"
                      style={{ color: "white" }}
                    >
                      {content["primary-action"]}
                    </Button>
                    <Box mt={1}>
                      <Link href="#" color="primary">
                        {content["secondary-action"]}
                      </Link>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={4}>
                <Card
                  variant="outlined"
                  style={{
                    boxShadow:
                      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                  }}
                >
                  <CardHeader></CardHeader>
                  <Typography variant="h3" color="primary" component="span">
                    {content["03_title"]}
                  </Typography>
                  <CardContent>
                    <Box px={1} pb={2}>
                      <Typography
                        variant="h3"
                        component="h2"
                        gutterBottom={true}
                      >
                        {content["03_price"]}
                        <Typography
                          variant="h6"
                          color="textSecondary"
                          component="span"
                        >
                          {content["03_suffix"]}
                        </Typography>
                      </Typography>
                      <div style={{ textAlign: "left", paddingLeft: "10vh" }}>
                        <Typography
                          color=""
                          variant="subtitle1"
                          component="p"
                          style={{ fontSize: "1.2rem" }}
                        >
                          <FcCheckmark></FcCheckmark> &nbsp;&nbsp;&nbsp;
                          {content["03_benefit1"]}
                        </Typography>
                        <Typography
                          color=""
                          variant="subtitle1"
                          component="p"
                          style={{ fontSize: "1.2rem" }}
                        >
                          <FcCheckmark></FcCheckmark> &nbsp;&nbsp;&nbsp;
                          {content["03_benefit2"]}
                        </Typography>
                        <Typography
                          color=""
                          variant="subtitle1"
                          component="p"
                          style={{ fontSize: "1.2rem" }}
                        >
                          <FcCheckmark></FcCheckmark> &nbsp;&nbsp;&nbsp;
                          {content["03_benefit3"]}
                        </Typography>
                        <Typography
                          color=""
                          variant="subtitle1"
                          component="p"
                          paragraph={true}
                          style={{ fontSize: "1.2rem" }}
                        >
                          <FcCheckmark></FcCheckmark> &nbsp;&nbsp;&nbsp;
                          {content["03_benefit4"]}
                        </Typography>
                      </div>
                    </Box>
                    <Button
                      onClick={handlePaymentP}
                      variant="contained"
                      color="primary"
                      className="btn btn-primary"
                      style={{ color: "white" }}
                    >
                      {content["primary-action"]}
                    </Button>

                    <Box mt={1}>
                      <Link href="#" color="primary">
                        {content["secondary-action"]}
                      </Link>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </div>
        </Box>
      </Container>
    </section>
  );
}
