import { Schema, model, models } from 'mongoose';

const ProjectSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    link: { type: String, required: true },
    image: String,
  },
  { timestamps: true }
);

export default models.Project || model('Project', ProjectSchema);
