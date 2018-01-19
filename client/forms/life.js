
export default {
  questions: [
    {
      id: 1,
      details: {
        name: 'What are your shittiest accomplishments?',
        answer: {
          type: 'TEXTLIST',
          list: [
            { id: 1, placeholder: 'shitty thing one', model: '.accomplishments.first'},
            { id: 2, placeholder: 'shitty thing two', model: '.accomplishments.second'},
            { id: 3, placeholder: 'shitty thing three', model: '.accomplishments.third'},
            { id: 4, placeholder: 'shitty thing four', model: '.accomplishments.fourth'}
          ]
        }
      },
      current: true,
    },
    {
      id: 2,
      details: {
        name: 'Are you a Republican?',
        answer: {
          type: 'RADIOLIST',
          list: [
            'Yes',
            'No'
          ],
          dataName: 'departure',
          dataID: 'republican',
          dataModel: '.republican',
        }
      },
      current: false,
    },
    {
      id: 3,
      details: {
        name: 'If yes, what time will you kill yourself?',
        answer: {
          type: 'DATE',
          dataName: 'mortalitydate',
          dataID: 'mortality',
          dataModel: '.mortalityDate',
        }
      },
      current: false,
    }
  ]
}