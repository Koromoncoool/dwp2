// importando mongoose
import mongoose from 'mongoose';
// Desestructurando la funcion Schema
const { Schema } = mongoose;

// Construccion de un Schema es un objeto vacío
const BookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  isbn: {
    type: String,
    required: true,
    unique: true,
  },
  copiesAvailable: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// Compilando el schema
// Genera el modelo
export default mongoose.model('book', BookSchema);
