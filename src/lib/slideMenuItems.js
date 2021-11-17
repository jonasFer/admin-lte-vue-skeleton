module.exports = [
  {
    type: 'item',
    isHeader: true,
    name: 'MENU'
  },
  {
    type: 'tree',
    icon: 'fa fa-dashboard',
    name: 'Dashboard',
    router: {
      name: 'dashboard'
    }
  },
  {
    type: 'tree',
    icon: 'fa fa-dashboard',
    name: 'Configuração',
    items: [
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: 'Empresa',
        router: {
          name: 'config-empresa'
        }
      }
    ]
  }
]
