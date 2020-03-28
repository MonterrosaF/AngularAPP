'use strict'

let mongoose = require('mongoose')
let Schema = mongoose.Schema

let UserSchema = Schema({
  documento: Number,
  nombre:String,
  fecha_ini:Date,
  fecha_fin:Date,
  horario_ini:Date,
  horario_fin:Date,
  horario_ini_extra:Date,
  horario_fin_extra:Date,
  motivo:String
})

module.exports = mongoose.model('User', UserSchema)
