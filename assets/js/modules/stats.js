import { Module } from '../core/module'

export class Stats extends Module {
  selector = '.js-stats'

  mounted () {
    console.log('found a stats module')
  }
}
