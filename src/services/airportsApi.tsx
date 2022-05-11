import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Airport } from "../models/airport.model";

export const airportsApi = createApi({
  reducerPath: "airportsApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://gist.githubusercontent.com/tdreyno/4278655/raw/7b0762c09b519f40397e4c3e100b097d861f5588/",
  }),
  endpoints: (builder) => ({
    airports: builder.query<Airport[], void>({
      query: () => "/airports.json", // How to avoid tping ".json" ?
    }),
  }),
});

export const { useAirportsQuery } = airportsApi;
