import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate";
import aggregatePaginate from "mongoose-aggregate-paginate/lib/mongoose-aggregate-paginate";
const videoSchema = new Schema(
  {
    videofile: {
      type: String, // claudnary url
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    owner: {
      types: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
      index: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    views: {
      type: Number,
      default: 0,
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

videoSchema.plugin(aggregatePaginate());

export const Video = mongoose.model("Video", videoSchema);
