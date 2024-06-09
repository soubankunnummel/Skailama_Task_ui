"use client";
import { configureStore } from "@reduxjs/toolkit";
import projectSlice from "./features/podcasts/projectSlice";

export const store = configureStore({
  reducer: {
    project: projectSlice,
  },
});
