let db = {
  users: {
    '<id.user>': {
      settings: {
        images: [
          { hour: 10, minutes: 30 }, // по дефолту в 10 утра, для заряда мотивации
          { hour: 15, minutes: 0 },
          { hour: 20, minutes: 50 }
        ],
        collection: [
          { name: 'english', source: 'app' },
          { name: 'cars', source: 'user' },
          { name: 'coding-js', source: 'user' }
        ]
      }
    }
  },

  viewed: {
    '<id.user>': {
      today: [
        { collection: 'coding-js', id: '<id.picture>' },
      ],
      items: [
        { collection: 'english', id: '<id.picture>' },
        { collection: 'english', id: '<id.picture>' }
      ]
    }
  },

  pictures: {
    app: { // сюда может загружать только админ/редактор
      english: {
        '<id.picture>': {
          filename: '...', // путь до файла
          title: '...', // заголовок имеет ограничение
          text: '...' // описание имеет ограничение в 140 символов
        }
      }
    },
    users: {
      '<id.user>': { // эти картинки загрузил юзер

      }
    }
  },

  pictures_info: {
    '<id.picture>': {
      like: [
        '<id.comment>',
        '<id.comment>',
        '<id.comment>'
      ],
      dislike: [
        '<id.comment>'
      ]
    }
  },

  comments: [
    '<id.picture>': {
      '<id.comment>': {
        author: 'user1',
        text: 'lorem ipsum',
        type: 'like'
      }
    }
  ],

  collections: {
    app: [
      'english',
      'life',
      'whatever'
    ],
    users: {
      '<id.user>': [

      ]
    }
  },
}
