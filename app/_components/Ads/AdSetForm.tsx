"use client";
import React, { FormEvent, useState, useRef } from "react";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import {
  Button,
  TextField,
  FormControl,
  MenuItem,
  RadioGroup,
  FormControlLabel,
  Radio,
  Box,
  createTheme,
  ThemeProvider,
  Typography,
  Grid,
  IconButton
} from "@mui/material";
import Cookies from "universal-cookie";
import SearchIcon from '@mui/icons-material/Search';
import optimization from "@/public/jsonData/optimization_goals.json";
import billingEvents from "@/public/jsonData/billing_event.json";
import { AdTargetingCategory, AdsetPayload, GeoLocation, Interest, LocationData } from "../../_models/adAccount.model";
import { CreateAdsetService, GetCitySearchData, GetIndustrySearchData, GetInterestsSearchData } from "../../_services/adAccountService";
import { Toast } from "primereact/toast";

interface AdSetProps {
  campaign: string;
  objective: string;
}
const AdsetForm: React.FC<AdSetProps> = ({ campaign, objective }) => {

  const [adsetName, setAdsetName] = useState("");
  const [optimizationGoal, setOptimizationGoal] = useState("");
  const [billingEvent, setBillingEvent] = useState("");
  const [bidAmount, setBidAmount] = useState(0);
  const [dailyBudget, setDailyBudget] = useState(0);
  const [geolocations, setGeolocations] = useState<string[]>([]);
  const [status, setStatus] = useState("");

  const [cities, setCities] = useState("");
  const [industries, setIndustries] = useState("");
  const [interests, setInterests] = useState("");
  const [startTime, setStartTime] = useState("");

  const [interestsSearchData, setInterestsSearchData] = useState<Interest[]>([]);
  const [citySearchData, setCitySearchData] = useState<LocationData[]>([]);
  const [industrySearchData, setIndustrySearchData] = useState<AdTargetingCategory[]>([]);

  const [returnInterestsData, setReturnInterestsData] = useState<Interest[]>([]);
  const [returnCityData, setReturnCityData] = useState<LocationData[]>([]);
  const [returnIndustryData, setReturnIndustryData] = useState<AdTargetingCategory[]>([]);

  const toast = useRef<Toast>(null);
  const cookies = new Cookies();

  const showSuccessToast = (message: string) => {
    toast.current?.show({
      severity: "success",
      summary: "Success",
      detail: message,
      life: 3000,
    });
  };

  const showErrorToast = (message: string) => {
    toast.current?.show({
      severity: "error",
      summary: "Error Message",
      detail: message,
      life: 3000,
    });
  };

  const handleNextClick = async (e: FormEvent) => {
    e.preventDefault();

    const geo : GeoLocation = {
      cities: returnCityData.map(city => city.key)
    }

    const ind: AdTargetingCategory[] = returnIndustryData;
    const inte: Interest[] = returnInterestsData;
    
    const accessTokenfb = cookies.get('accesstoken_fb');

    const tempAdSetData: AdsetPayload = {
      campaignId: campaign,
      adsetName,
      optimizationGoal,
      billingEvent,
      bidAmount,
      dailyBudget,
      geolocations: geo,
      industries: ind,
      interests: inte,    
      startTime,
      status,
      accessToken: accessTokenfb,
    };
    console.log(tempAdSetData);

    try {
      const response = await CreateAdsetService(tempAdSetData);
      if (response.statusCode == "200") {
        showSuccessToast(response.message);
      }
      setAdsetName("");
      setOptimizationGoal("");
      setBillingEvent("");
      setBidAmount(0),
      setDailyBudget(0),
      setGeolocations([]),
      setIndustries("")
      setInterests(""),
      setStartTime(""),
      setStatus("");
      setReturnIndustryData([]); 
      setReturnInterestsData([]); 
      setReturnCityData([]); 
    } 
    catch (error) {
      showErrorToast("Could not create adset");
      console.error(error);
    }
  };

  const getAvailableInterestsData = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const accessToken = cookies.get('accesstoken_fb');
      const response = await GetInterestsSearchData(interests, accessToken);
      if(response.statusCode == '200'){
        setInterestsSearchData(response.responseData);
        showSuccessToast(response.message);
      }
    } 
    catch (error) {
      showErrorToast("Error searching interests");
    }
  };

  const getAvailableCityData = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const accessToken = cookies.get('accesstoken_fb');
      const response = await GetCitySearchData(cities, accessToken);
      if(response.statusCode === '200'){
        setCitySearchData(response.responseData);
        showSuccessToast(response.message);
      }    
    } 
    catch (error) {
      showErrorToast("Error searching cities");
    }
  };

  const getAvailableIndustryData = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const accessToken = cookies.get('accesstoken_fb');
      const response = await GetIndustrySearchData(accessToken);
      if (response.statusCode == "200") {
        showSuccessToast(response.message);
        setIndustrySearchData(response.responseData);
        showSuccessToast(response.message);
      }
    } catch (error) {
      showErrorToast("Error searching industries");
    }
  };


  const handleIndustrySearchData = (event: SelectChangeEvent<AdTargetingCategory[]>) => {
    const {target: { value },} = event;
    if (Array.isArray(value)) {
      setReturnIndustryData(value);
    } 
    else if (typeof value === 'string') {
      const parsedValue = value.split(',').map((item) => ({
        id: item.trim(),
        name: item.trim(),
        description: item.trim(),
        type: item.trim(), 
      }));
      setReturnIndustryData(parsedValue);
    } 
  };

  const handleCitySearchData = (event: SelectChangeEvent<LocationData[]>) => {
    const {target: { value },} = event;
    if (Array.isArray(value)) {
      setReturnCityData(value);
    } 
    else if (typeof value === 'string') {
      const parsedValue = value.split(',').map((item) => ({
        key: item.trim(),
        cityName: item.trim(),
        countryName: item.trim(),
      }));
      setReturnCityData(parsedValue);
    }
  };

  const handleInterestsSearchData = (event: SelectChangeEvent<Interest[]>) => {
    const {target: { value },} = event;
    if (Array.isArray(value)) {
      setReturnInterestsData(value);
    } 
    else if (typeof value === 'string') {
      const parsedValue = value.split(',').map((item) => ({
        id: parseInt(item), 
        name: item.trim(), 
      }));
      setReturnInterestsData(parsedValue);
    }
  };

  const defaultTheme = createTheme({
    typography: {
      fontFamily:
        'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    },
    components: {
      MuiInputBase: {
        styleOverrides: {
          root: {
            width: "100%",
            boxShadow: "0 3px 6px rgba(0, 0, 0, 0.16)",
            borderRadius: "8px",
            "& .MuiInputLabel-root": {
              transform: "translateY(50%)",
            },
          },
          input: {
            borderRadius: "50%",
            height: "15px",
          },
        },
      },
      // MuiSelect: {
      //   styleOverrides: {
      //     select: {
      //       height: "13px",
      //     },
      // }
      // }
    },
  });

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Typography
          component="h2"
          sx={{ fontWeight: 700, color: "green", textAlign: "left" }}
        >
          Create a new Adset
        </Typography>

        <Box sx={{width: "100%", mt: 3, display: "flex"}}>
          <Box component="form" onSubmit={getAvailableInterestsData}
            sx={{width: "100%", mt: 3, display: "flex"}}>
            <Typography sx={{ fontWeight: 600 }}>Search available interests</Typography>
            <TextField
              size="small"
              margin="dense"
              required
              type="text"
              variant="outlined"
              placeholder="Search Interests"
              autoFocus
              autoComplete="interests"
              value={interests}
              onChange={(e) => setInterests(e.target.value)}
            />
            <IconButton type="submit" aria-label="search">
              <SearchIcon style={{ fill: "blue" }} />
            </IconButton>
          </Box>

          <Box component="form" onSubmit={getAvailableCityData}
            sx={{width: "100%", mt: 3, display: "flex"}}>
            <Typography sx={{ fontWeight: 600 }}>Search available cities</Typography>
            <TextField
              size="small"
              margin="dense"
              required
              type="text"
              placeholder="Search Cities"
              variant="outlined"
              autoFocus
              autoComplete="cities"
              value={cities}
              onChange={(e) => setCities(e.target.value)}
            />
            <IconButton type="submit" aria-label="search">
              <SearchIcon style={{ fill: "blue" }} />
            </IconButton>
          </Box>
          
          <Box component="form" onSubmit={getAvailableIndustryData}
            sx={{width: "100%", mt: 3, display: "flex"}}>
            <Typography sx={{ fontWeight: 600 }}>Search available industries</Typography>
            <TextField
              size="small"
              margin="dense"
              required
              type="text"
              variant="outlined"
              autoFocus
              placeholder="Search Industries"
              autoComplete="industries"
              value={industries}
              onChange={(e) => setIndustries(e.target.value)}
            />
            <IconButton type="submit" aria-label="search">
              <SearchIcon style={{ fill: "blue"}} />
            </IconButton>
          </Box>
        </Box>

        <Box
          component="form"
          onSubmit={handleNextClick}
          sx={{
            width: "100%",
            mt: 3,
          }}
        >
          <Grid container>
            <Grid item xs={12} md={6}>
              <Grid container sx={{ display: "flex"}} >
                <Grid item xs={12} md={6} sx={{ display: "grid", alignItems: "center"}}>
                  <Typography sx={{ fontWeight: 600 }}>Adset Name</Typography>
                  <Typography sx={{ fontWeight: 600 }}>Optimization Goal</Typography>
                  <Typography sx={{ fontWeight: 600 }}>Billing Event</Typography>
                  <Typography sx={{ fontWeight: 600 }}>Bid Amount</Typography>
                  <Typography sx={{ fontWeight: 600 }}>Daily Budget</Typography>
                  <Typography sx={{ fontWeight: 600 }}>Cities</Typography>
                </Grid>

                <Grid item xs={12} md={6} sx={{ display: "grid", justifyContent: "center" }}>
                  <TextField
                    size="small"
                    margin="dense"
                    required
                    type="text"
                    variant="outlined"
                    autoFocus
                    autoComplete="adsetName"
                    value={adsetName}
                    onChange={(e) => setAdsetName(e.target.value)}
                  />

                  <FormControl variant="outlined" margin="dense">
                    <Select
                      value={optimizationGoal}
                      onChange={(e) => setOptimizationGoal(e.target.value)}
                      label="Optimization Goal"
                      sx={{ height: "32px" }}
                    >
                      {optimization
                        .find((obj) => obj.codeWord === objective)
                        ?.["optimizationGoal"].map((goal, index) => (
                          <MenuItem key={index} value={goal.codeWord}>
                            {goal.codeWord} - {goal.description}
                          </MenuItem>
                        ))}
                    </Select>
                  </FormControl>

                  <FormControl variant="outlined" margin="dense">
                    <Select
                      value={billingEvent}
                      onChange={(e) => setBillingEvent(e.target.value)}
                      label="Billing Event"
                      sx={{ height: "32px" }}
                    >
                      {billingEvents.map((obj, id) => (
                        <MenuItem key={id} value={obj.codeWord}>
                          {obj.codeWord} - {obj.description}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>

                  <TextField
                    size="small"
                    margin="dense"
                    required
                    type="number"
                    variant="outlined"
                    autoFocus
                    autoComplete="bidAmount"
                    value={bidAmount}
                    onChange={(e) => setBidAmount(parseFloat(e.target.value))}
                  />

                  <TextField
                    size="small"
                    margin="dense"
                    required
                    type="number"
                    variant="outlined"
                    autoFocus
                    autoComplete="dailyBudget"
                    value={dailyBudget}
                    onChange={(e) => setDailyBudget(parseFloat(e.target.value))}
                  />

                  <FormControl variant="outlined" margin="dense">
                  <Select
                    value={returnCityData}
                    onChange={handleCitySearchData}
                    multiple
                    sx={{ height: "32px" }}
                  >
                    {citySearchData.map((obj, id) => (
                      <MenuItem key={id} value={obj.key}>
                        {obj.cityName}, {obj.countryName}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} md={6}>
              <Grid container>
                <Grid item xs={12} md={6} sx={{ display: "grid", alignItems: "center" }}>
                <Typography sx={{ fontWeight: 600 }}>Industries</Typography>
                <Typography sx={{ fontWeight: 600 }}>Interests</Typography>
                <Typography sx={{ fontWeight: 600 }}>Start Time</Typography>
                <Typography sx={{ fontWeight: 600 }}>Status</Typography>
                </Grid>

                <Grid item xs={12} md={6} sx={{ display: "grid", justifyContent: "center" }}> 
                <FormControl variant="outlined" margin="dense">
                  <Select
                    value={returnIndustryData}
                    onChange={handleIndustrySearchData}
                    multiple
                    sx={{ height: "32px" }}
                  >
                    {industrySearchData.map((obj, id) => (
                    <MenuItem key={id} value={obj.id}>
                      {obj.name}
                    </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <FormControl variant="outlined" margin="dense">
                  <Select
                    value={returnInterestsData}
                    onChange={handleInterestsSearchData}
                    multiple
                    sx={{ height: "32px" }}
                  >
                    {interestsSearchData.map((obj, id) => (
                      <MenuItem key={id} value={obj.id}>
                        {obj.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                  <TextField
                    size="small"
                    margin="dense"
                    required
                    type="datetime-local"
                    variant="outlined"
                    autoFocus
                    autoComplete="startTime"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                  />   

                  <FormControl
                    component="fieldset"
                    variant="outlined"
                    margin="dense"
                    size="small"
                  >
                    <RadioGroup
                      row
                      aria-label="status"
                      name="status"
                      value={status}
                      onChange={(e) => setStatus(e.target.value)}
                      sx={{ justifyContent: "center", height: "15px" }}
                    >
                      <FormControlLabel
                        value="ACTIVE"
                        control={<Radio />}
                        label="Active"
                      />
                      <FormControlLabel
                        value="PAUSED"
                        control={<Radio />}
                        label="Paused"
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>                  
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    mt: 3,
                    width: "50%",
                    alignItems: "right",
                    display: "flex",
                    backgroundColor: "#597FB5 !important",
                    color: "#fff !important",
                    "&:hover": {
                      backgroundColor: "#405D80 !important",
                    },
                  }}
                >Create
                </Button>
              </Grid>
            </Grid>
          </Grid>         
        </Box>
      </ThemeProvider>
    </>
  );
};

export default AdsetForm;