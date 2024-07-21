import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { NP_API_BASE_URL } from "constants/api";
import { RootState } from "store/store";
import { TNPAddress, TNPCity } from "types/np";

export const fetchCity = createAsyncThunk(
    "delivery/city",
    async (city: TNPCity) => {
        const { data } = await axios.post(NP_API_BASE_URL, {
            apiKey: process.env.REACT_NP_API_BASE_KEY,
            modelName: 'AddressGeneral',
            calledMethod: 'searchSettlements',
            methodProperties: {
              CityName: city,
              Limit: '10',
              Page: '1',
            },
          });
  
      return data.data[0].Addresses;
    }
);

export const fetchAddress = createAsyncThunk(
  "delivery/address",
  async (address: TNPAddress, { getState }) => {
    const state = getState() as RootState

    const { data } = await axios.post('https://api.novaposhta.ua/v2.0/json/', {
      apiKey: process.env.REACT_NP_API_BASE_KEY,
      modelName: 'AddressGeneral',
      calledMethod: 'getWarehouses',
      methodProperties: {
        CityName: state.delivery.citySelect,
        Page: "1",
        Limit: "10",
        Language: "UA",
        FindByString: address
      }})

    return data.data;
  
})