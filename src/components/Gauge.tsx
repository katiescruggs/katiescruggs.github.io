import * as React from "react";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

export default function Gauge() {
  const [unit, setUnit] = React.useState<string>("in");
  const [userGaugeStitches, setUserGaugeStitches] = React.useState<number | "">("");
  const [userGaugeMeasurement, setUserGaugeMeasurement] = React.useState<number | "">("");
  const [patternGaugeStitches, setPatternGaugeStitches] = React.useState<number | "">("");
  const [patternGaugeMeasurement, setPatternGaugeMeasurement] = React.useState<number | "">(""); 

  const handleChangeUnit = (event: React.MouseEvent<HTMLElement>, newUnit: string) => {
    setUnit(newUnit);
  };

  const inputNameToChangeMethodMap: any = {
    userGaugeStitches: setUserGaugeStitches,
    userGaugeMeasurement: setUserGaugeMeasurement,
    patternGaugeStitches: setPatternGaugeStitches,
    patternGaugeMeasurement: setPatternGaugeMeasurement,
  };

  const handleChangeNumberInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const setStateMethod = inputNameToChangeMethodMap[name];

    if (value === "") {
      setStateMethod("");
      return;
    }

    const numberValue: number = JSON.parse(value);
    setStateMethod(numberValue);
  };
  
  return (
    <section>
      <Typography variant="h3" component="div" gutterBottom>
        Understanding Gauge
      </Typography>
      <Typography variant="h6" component="div" gutterBottom>
        What is Gauge?
      </Typography>
      <Typography variant="body1" gutterBottom>
        Knitting patterns usually specify gauge, a measurement of number of stitches per 4 inches or 10 cm, and
        recommend knitting a gauge swatch before beginning a project.
        This is especially important for wearable garments
        to make sure your project turns out as you envisioned and that you don't run out of yarn.
        <br></br>
        <br></br>
        Every time I start a new project, I end up measuring and remeasuring my gauge and doing back of the envelope
        math to make sure that my project will turn out the way I want it to. I made this worksheet for myself to help
        streamline this process. I hope you find it useful too!
        <br></br>
      </Typography>
      <div style={{display: "flex", flexDirection: "column"}}>
        <Typography variant="h6" component="div" gutterBottom>
          Calculating Your Stitch Gauge
        </Typography>
        <ToggleButtonGroup
          value={unit}
          exclusive
          onChange={handleChangeUnit}
          aria-label="unit selection (inches or centimeters)"
        >
          <ToggleButton value="in" aria-label="inches" selected={unit === "in"}>
            inches
          </ToggleButton>
          <ToggleButton value="cm" aria-label="centimeters" selected={unit === "cm"}>
            centimeters
          </ToggleButton>
        </ToggleButtonGroup>
        <br></br>
        <br></br>
        <TextField
          id="pattern-gauge-stitches"
          name="patternGaugeStitches"
          className="gauge-worksheet-textfield"
          value={patternGaugeStitches}
          onChange={handleChangeNumberInput}
          label={`Pattern Gauge Stitches`}
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          placeholder="e.g. 20"
        />
        <br></br>
        <br></br>
        <TextField
          id="pattern-gauge-measurement"
          name="patternGaugeMeasurement"
          className="gauge-worksheet-textfield"
          value={patternGaugeMeasurement}
          onChange={handleChangeNumberInput}
          label={`Pattern Gauge Measurement (${unit})`}
          type="number"
          placeholder={`e.g. ${unit === "in" ? "4 in" : "10 cm"} `}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <br></br>
        <br></br>
        <TextField
            id="your-gauge-stitches"
            name="userGaugeStitches"
            className="gauge-worksheet-textfield"
            value={userGaugeStitches}
            onChange={handleChangeNumberInput}
            label={`Your Gauge Stitches`}
            type="number"
            placeholder="e.g. 21"
            InputLabelProps={{
              shrink: true,
            }}
        />
        <br></br>
        <br></br>
        <TextField
          id="your-gauge-measurement"
          name="userGaugeMeasurement"
          className="gauge-worksheet-textfield"
          value={userGaugeMeasurement}
          onChange={handleChangeNumberInput}
          label={`Your Gauge Measurement (${unit})`}
          type="number"
          placeholder={`e.g. ${unit === "in" ? "4 in" : "10 cm"} `}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
      <Typography variant="body2" gutterBottom> Unit is {unit}. Pattern gauge stitches is {patternGaugeStitches}</Typography>
    </section>
  );
}