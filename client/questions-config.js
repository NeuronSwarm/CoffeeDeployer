
export default {
  questions: [
    {
      id: 1,
      details: {
        name: 'Name(s) of travelers?',
        answer: {
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
          dataName: 'destination',
          dataID: {
            idOne: 'departureLocationSoon',
            idTwo: 'departureLocationLater'
          },
          dataValue: {
            optionOne: 'sooner',
            optionTwo: 'later',
          },
          dataModel: '.destionation',
        }
      },
      current: false,
    }
  ]
}