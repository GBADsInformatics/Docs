import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from "../pages/adminTools.module.css";
import axios from "axios";
import NestedEditableDemo from "./fileViewer.js";

function deleteDoc() {
  
  return (
    
      <center>
        <NestedEditableDemo></NestedEditableDemo>
      </center>
  );
}

export default deleteDoc;