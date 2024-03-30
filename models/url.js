const mongoose = require("mongoose");
const express=require("express");
const urlschema = new mongoose.Schema(
  {
    shortId: {
      type: String,
      required: true,
      unique: true,
    },
    redirecturl: {
      type: String,
      required: true,
      unique: true,
    },
    visithistory: [{timestamp:{
        type:Number
    }}],
    createdby:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"users"
    }
  },
  { timestamps: true }
);
const URL=mongoose.model("url",urlschema);
module.exports = URL;

