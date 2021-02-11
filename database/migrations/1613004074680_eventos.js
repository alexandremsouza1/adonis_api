'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EventosSchema extends Schema {
  up () {
    this.create('eventos', (table) => {
      table.string('class')
      table.date('end')
      table.date('start')
      table.string('content')
      table.string('title')
      table.timestamps()
    })
  }

  down () {
    this.drop('eventos')
  }
}

module.exports = EventosSchema
