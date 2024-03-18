import dashboards from "./dashboards";
import admin from "./admin";
import apps from "./apps";
import pages from "./pages";
import React, { useState, useEffect } from "react";
import userInterface from "./user-interface";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";

const navigation = [...dashboards, ...apps];


export default navigation;