
export default {
  questions: [
    {
      id: 1,
      details: {
        name: 'What would you like from a Unity companion tool?',
        answer: {
          type: 'TEXTLIST',
          list: [
            { id: 1, placeholder: 'thing one', model: '.wish.first'},
            { id: 2, placeholder: 'thing two', model: '.wish.second'},
            { id: 3, placeholder: 'thing three', model: '.wish.third'},
            { id: 4, placeholder: 'thing four', model: '.wish.fourth'},
            { id: 5, placeholder: 'thing five', model: '.wish.fith'},
            { id: 6, placeholder: 'thing six', model: '.wish.sixth'},
            { id: 7, placeholder: 'thing seven', model: '.wish.seventh'},
            { id: 8, placeholder: 'thing eight', model: '.wish.eighth'}
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