import { Module } from '../core/module'

export class Stats extends Module {
  static selector = '.js-stats'

  mounted () {
    console.log('found a stats module')
  }
}
