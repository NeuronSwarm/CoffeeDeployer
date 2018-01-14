
export default {
  questions: [
    {
      id: 1,
      details: {
        name: 'Name(s) of travelers?',
        answer: {
          type: 'TEXTLIST',
          list: [
            { id: 1, placeholder: 'first traveler', model: '.first'},
            { id: 2, placeholder: 'second traveler', model: '.second'},
            { id: 3, placeholder: 'third traveler', model: '.third'}
          ],
          dataName: 'travelers',
          dataID: {
            idOne: 'travelersFirst',
            idTwo: 'travelersSecond'
          },
          dataValue: {
            optionOne: 'sooner',
            optionTwo: 'later',
          },
          dataModel: '.travelers',
        }
      },
      current: true,
    },
    {
      id: 2,
      details: {
        name: 'what is your departure date?',
        answer: {
          type: 'RADIOLIST',
          dataName: 'departure',
          dataID: {
            idOne: 'departureDateSoon',
            idTwo: 'departureDateLater'
          },
          dataValue: {
            optionOne: 'sooner',
            optionTwo: 'later',
          },
          dataModel: '.departure',
        }
      },
      current: false,
    },
    {
      id: 3,
      details: {
        name: 'what is your travel destination?',
        answer: {
          type: 'DATE',
          dataName: 'destination',
          dataID: {
            idOne: 'departureLocationSoon',
            idTwo: 'departureLocationLater'
          },
          dataValue: {
            optionOne: 'sooner',
            optionTwo: 'later',
          },
          dataModel: '.destination',
        }
      },
      current: false,
    }
  ]
}