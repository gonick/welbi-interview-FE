export class DateParser {
  static getDateString(date: string) {
    try {
      return new Date(date).toDateString()
    } catch (e) {
      console.error(e)
      return '-'
      // log to bug snag for e.g
    }
  }
  static getTimeString(date: string) {
    try {
      return new Date(date).toLocaleTimeString()
    } catch (e) {
      console.error(e)
      return '-'
      // log to bug snag for e.g
    }
  }

  static getDateAndTimeString(date: string) {
    return `${DateParser.getDateString(date)}, ${DateParser.getTimeString(date)}`
  }
}
