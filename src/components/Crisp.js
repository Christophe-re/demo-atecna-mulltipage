"use client";

import React, { Component } from "react";

import { Crisp } from "crisp-sdk-web";

class CrispChat extends Component {
  componentDidMount() {
    Crisp.configure("ed587bec-28fc-4a26-a7b0-3c31de3b67a7");
  }

  render() {
    return null;
  }
}
export default CrispChat;
