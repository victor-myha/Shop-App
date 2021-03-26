let initialState = {
    products: [
        {
        id: 1,
        imageUrl: 'https://www.fabrica-vika.com.ua/components/com_jshopping/files/img_products/Divan-Chikago-B3.jpg',
        name: 'Диван',
        detailInfo: 'Диван Кароліна з його простим, акуратним і універсальним дизайном підійде для приміщень різного типу.',
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
        name: 'Подушка',
        detailInfo: 'Легкий і пишний наповнювач надає подушці мякість і стійку повітряну форму. Подушка для сну (холлофайбер) володіє високими гігієнічними і антиалергенними властивостями.',
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
        name: 'Плед',
        detailInfo: 'Полушерстяной плед Ярослав изготовлен из овечьей шерсти с добавлением акрила высочайшего качества. Такой плед очень практичен в эксплуатации, теплый, удобный и устойчив к сминанию.',
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
  case "DELETE_PRODUCT":
    return{
      ...state,
    //   products: state.products.splice(action.id, 1,' ')
      products: state.products.splice(action.id,1)
      }
  case "SORT_COUNT":
    return{
      ...state,
      isSortCount: action.isSortCount
      }
      
  default:
    return state;
 }
}

export default itemReducer;