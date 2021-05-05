let initialState = {
  products: [
      { 
      id: 1,
      imageUrl: 'https://1-m.com.ua/image/cache/catalog/p/20/20844/1598160383208440-240x240.webp',
      name: 'Гітара CORT AD810LH (OP)',
      detailInfo: 'Cort AD810 - це прекрасний вибір для початківця з характерним для гітар Cort високим співвідношенням ціна - якість.Саме високе співвідношення ціна - якість дозволило акустичній гітарі CORT AD810 стати лідером продажів на українському ринку! AD810 - це класичний дредноут з великим обємним корпусом з червоного дерева і верхньою декою з ялини. Ця перевірена класична комбінація дозволяє отримати збалансоване і гучне звучання у всьому діапазоні частот.',
      briefDescription: 'Лівобічна версія акустичної гітари',
      count: 4,
      size: '100x300',
      weight: '800g',
      comments: [
        {
          id: 1,
          description: 'Comment 1 by first product',
          date: "14:00 31.03.2002",
        },
        {
          id: 2,
          description: 'Comment 2 by first product',
          date: "14:00 31.03.2002",
        }
  ]},
  {
      id: 2,
      imageUrl: 'https://1-m.com.ua/image/cache/catalog/p/48/48222/1598276079482221-240x240.webp',
      name: 'Скрипка STENTOR 1018 / C',
      detailInfo: 'На відміну від більшості бюджетних скрипок, ця виготовлена в точній відповідності зі специфікаціями і розмірами, оснащена накладкою грифа і кілками з деревини твердих порід. Комплектація включає в себе привабливий легкий кейс з коричневої нейлонової оббивкою і якісний деревяний смичок. Інструмент виготовлений з цільної деревини музичних порід і володіє винятковим співвідношенням ціна / якість; не варто навіть близько порівнювати його з аналогічними за ціною «виробами».',
      briefDescription: 'Акустична скрипка STENTOR 1018 / C STUDENT STANDARD 3/4',
      count: 10,
      size: '100x200',
      weight: '300g',
      comments: [
        {
          id: 1,
          description: 'Comment 1 by second product',
          date: "13:00 01.01.2003",
        },
        {
          id: 2,
          description: 'Comment 2 by second product',
          date: "13:00 01.01.2003",
        }
  ]},
  {
      id: 3,
      imageUrl: 'https://1-m.com.ua/image/cache/catalog/p/20/20768/1598159986207680-240x240.webp',
      name: 'Акордеон MAXTONE TA7234',
      detailInfo: 'Акордеон Maxtone TA-7234 - компактний доступний акордеон відмінно підійде початківцям музикантам',
      briefDescription: 'Акордеон',
      count: 7,
      size: '200x200',
      weight: '200g',
      comments: [
        {
          id: 1,
          description: 'Comment 1 by third product',
          date: "12:00 2.04.2004",
        },
        {
          id: 2,
          description: 'Comment 2 by third product',
          date: "12:00 2.04.2004",
        }
  ]},
],
isSortCount: false,
productDetailsPage:[
{
id: 1,
imageUrl: 'https://1-m.com.ua/image/cache/catalog/p/20/20844/1598160383208440-240x240.webp',
name: 'Ящірка',
detailInfo: 'Диван Кароліна з його простим, акуратним і універсальним дизайном підійде для приміщень різного типу.',
briefDescription: 'Короткий опис',
count: 4,
size: '200x200',
weight: '200g',
comments: [
  {
    id: 11,
    description: 'Comment 1 by first product',
    date: "14:00 31.03.2002",
  },
  {
    id: 12,
    description: 'Comment 2 by first product',
    date: "14:00 31.03.2002",
  }
]},
],
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
  let bylka = [...state.products].filter(item => item.id == action.productId)
  console.log(bylka)
  return{
    ...state,
    productDetailsPage: [...state.products].filter(item => item.id == action.productId)
  }
case 'EDIT_PRODUCT':
  const position = action.editProductData.id - 1;
  let allProduc = [...state.products];
  let bbb = allProduc.splice(position, 1, action.editProductData)
  console.log('ТУт якась х-ня',allProduc)
  console.log('Edit Product bbb',bbb)
   return{
    ...state,
    productDetailsPage: [allProduc[position]]
  }
case 'NEW_COMMENT':
  const proCom = [...state.products];
  const blet = proCom[action.productId-1].comments.push(action.newComment);
  return{
    ...state,
  products: proCom
  }
  case 'DELETE_COMMENT':
  
  let delElm = [...state.products].filter(item => item.id == action.productId)
    
let normalComments = delElm[0].comments.filter(item => item.id !== action.commentId)
delElm[0].comments = normalComments
    
return{
      ...state,
      productDetailsPage: delElm
    }
  
default:
  return state;
}
}


export default itemReducer;