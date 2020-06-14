const { Schema, model } = require('mongoose');

const eventSchema = new Schema({
  /**
   * Title of the event
   */
  title: {
    type: String,
    required: true,
  },
  /**
   * Description of the event
   */
  description: {
    type: String,
    required: true,
  },
  /**
   * Price of the event
   */
  price: {
    type: Number,
    required: true,
  },
  /**
   * Date of the event
   */
  date: {
    type: Date,
    required: true,
  },
  /**
   * The creator of the event
   */
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  /**
   * The users who have booked the event
   */
  bookedBy: {
    type: [{
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    }],
    default: [],
  },
});

module.exports = model('event', eventSchema);
