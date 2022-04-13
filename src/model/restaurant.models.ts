import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import config from 'config';

const { Schema } = mongoose;

const restaurantSchema = new Schema({
  name:  String, // String is shorthand for {type: String}
  borough: String,
  cuisine: String,
  address: [
    {
      building: String,
      coord: [
        {
          lat: Number,
          long: Number
        }
      ],
      street: String,
      zipcode: Number
    }
  ],
});

export default restaurantSchema;