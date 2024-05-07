"use client";

import React, { useCallback, useEffect, useState } from "react";
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
} from "@mui/material";
import DashboardCard from "@/app/_components/HomeComponent/DashboardCard";
import Navbar from "@/app/_components/Navbar";
import { AdCreative } from "@/app/_models/adAccount.model";
import AdCreativeForm from "@/app/_components/Ads/AdCreativeForm";
import { useRouter, useSearchParams } from "next/navigation";
import { getAllAdcreativesService } from "@/app/_services/adAccountService";

const AdCreatives = () => {
  const [creatives, setCreatives] = useState<AdCreative[]>([]);

  const router = useRouter()
  const searchParams = useSearchParams();
  var selectedAdsetId: string | null = searchParams.get("selectedAdsetId");
  if (selectedAdsetId == null) selectedAdsetId = "";
  
  useEffect(() => {
    getAdCreatives();
  }, []);

  const getAdCreatives = async () => {
    try {
      const response = await getAllAdcreativesService();
      if (response.statusCode == "200") {
        setCreatives(response.responseData);
        console.log("creatives: ", creatives)
      }
    } catch (error) {
      console.error(error);
    }
  };

  const ScheduleAd = useCallback(
    (name1: string, value: string, name2:string, value2: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name1, value);
      params.set(name2, value2);
  
      return params.toString()
    },
    [searchParams]
  )

  return (
    <>
      <Navbar/>
      <Box sx={{ mt: 15 }}>
      <AdCreativeForm
          adset={selectedAdsetId}
        />
      </Box>
        <DashboardCard>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Typography variant="h5" fontWeight={550}>
              Ad Creatives
            </Typography>
            {/* <div>
              <AdCampaignModal />
            </div> */}
          </Box>

          <Box sx={{ overflow: "auto", width: { xs: "280px", sm: "auto" } }}>
            <Table
              aria-label="simple table"
              sx={{
                whiteSpace: "nowrap",
                mt: 2,
              }}
            >
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Typography variant="subtitle2" fontWeight={600}>
                      Creative Name
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2" fontWeight={600}>
  
                      Image
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2" fontWeight={600}>
                      Message
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {creatives?.map((data, key) => (
                  <TableRow key={data.creativeId}>
                    <TableCell>
                      <Typography
                        sx={{
                          fontSize: "15px",
                          fontWeight: "500",
                        }}
                      >
                        {data.creativeName}
                      </Typography>
                    </TableCell>

                    <TableCell>
                      <Typography
                        sx={{
                          fontSize: "15px",
                          fontWeight: "500",
                        }}
                      >
                        {data.fileName}
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography
                        color="textSecondary"
                        variant="subtitle2"
                        fontWeight={400}
                      >
                        {data.message}
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                    <Button 
                       onClick={() => {
                        router.push('/ads' + '?' + ScheduleAd('selectedAdsetId' ,data.adsetId, 'selectedCreativeId', data.creativeId))
                      }}
                      variant="contained"
                      sx={{
                        marginRight: "10px",
                        backgroundColor: "#597FB5 !important",
                        color: "#fff !important",
                        "&:hover": {
                          backgroundColor: "#405D80 !important",
                        },
                      }}>
                        Schedule ad
                      </Button>         
                    {/* <AdSetModal selectedCampaign={data.campaignId} selectedObjective={data.objective}/> */}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        </DashboardCard>
      {/* </Box> */}
    </>
  );
};

export default AdCreatives;
