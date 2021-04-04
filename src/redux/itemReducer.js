let initialState = {
    products: [
        {
        id: 1,
        imageUrl: 'https://www.fabrica-vika.com.ua/components/com_jshopping/files/img_products/Divan-Chikago-B3.jpg',
        name: 'Ящірка',
        detailInfo: 'Диван Кароліна з його простим, акуратним і універсальним дизайном підійде для приміщень різного типу.',
        briefDescription: 'Короткий опис',
        count: 4,
        size: {
            width: 200,
            height: 200
        },
        weight: '200g',
        comments: [
            {
            id: 3,
            productId: 1,
            description: 'some text here',
            date: "14:00 22.08.2021",
        },
    ]},
    {
        id: 2,
        imageUrl: 'https://if-matras.com/image/cache/catalog/tovar/podushki/hollofaiber/podushka-dlja-sna-1126x750.jpg',
        name: 'Трактор',
        detailInfo: 'Легкий і пишний наповнювач надає подушці мякість і стійку повітряну форму. Подушка для сну (холлофайбер) володіє високими гігієнічними і антиалергенними властивостями.',
        briefDescription: 'Короткий опис',
        count: 10,
        size: {
            width: 400,
            height: 100
        },
        weight: '200g',
        comments: [
            {
            id: 3,
            productId: 1,
            description: 'some text here',
            date: "14:00 22.08.2021",
        },
    ]},
    {
        id: 3,
        imageUrl: 'https://modateks.com.ua/image/cache/catalog/yaroslav/odeyalo/40_2_-1000x1000-400x400.jpg',
        name: 'Адреналін',
        detailInfo: 'Полушерстяной плед Ярослав изготовлен из овечьей шерсти с добавлением акрила высочайшего качества. Такой плед очень практичен в эксплуатации, теплый, удобный и устойчив к сминанию.',
        briefDescription: 'Короткий опис',
        count: 7,
        size: {
            width: 500,
            height: 200
        },
        weight: '200g',
        comments: [
            {
            id: 3,
            productId: 1,
            description: 'some text here',
            date: "14:00 22.08.2021",
        },
    ]},
],
isSortCount: false,
    
}

const itemReducer = (state = initialState,action) => {
  
  switch (action.type) {
  case 'DELETE_PRODUCT':
    return{
      ...state,
    products: [...state.products].filter(item => item.id !== action.id)
    }
  case 'SORT_COUNT':
    return{
      ...state,
      isSortCount: action.isSortCount
      }
  case 'INCREASE':
    return{
      ...state,
    products: [...state.products].sort(function(a, b) {
        return a.count - b.count;
      })

    }
  case 'DECREASE':
    return{
      ...state,
    products: [...state.products].sort(function(a, b) {
        return b.count - a.count;
      })

    }
  case 'ALPHABET':
    return{
      ...state,
    products: [...state.products].sort(function(a, b){
        var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
        if (nameA < nameB) //сортируем строки по возрастанию
          return -1
        if (nameA > nameB)
          return 1
        return 0 // Никакой сортировки
        })

    }
    
  default:
    return state;
 }
}


export default itemReducer;