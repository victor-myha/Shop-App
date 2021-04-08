let initialState = {
    products: [
        {
        id: 1,
        imageUrl: 'https://www.fabrica-vika.com.ua/components/com_jshopping/files/img_products/Divan-Chikago-B3.jpg',
        name: 'Ящірка',
        detailInfo: 'Диван Кароліна з його простим, акуратним і універсальним дизайном підійде для приміщень різного типу.',
        briefDescription: 'Короткий опис',
        count: 4,
        size: '200x200',
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
        size: '200x200',
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
        size: '200x200',
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
productDetailsPage: [],
}

const itemReducer = (state = initialState,action) => {
  
  switch (action.type) {
  case 'DELETE_PRODUCT':
    return{
      ...state,
    products: [...state.products].filter(item => item.id !== action.id)
    }
  case 'ADD_PRODUCT':
    const proArr = [...state.products];
    const count = proArr.push(action.newProductData);
    return{
      ...state,
    products: proArr
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
  case 'PRODUCT_DETAILS_PAGE':
    return{
      ...state,
      productDetailsPage: [...state.products].filter(item => item.id == action.productId)
    }
  case 'EDIT_PRODUCT':
    const proArr2 = [...state.products];
    const position = action.editProductData.id - 1;
    const count2 = proArr2.splice(position, 1, action.editProductData);
    return{
      ...state,
    products: proArr2
    }
    
  default:
    return state;
 }
}


export default itemReducer;