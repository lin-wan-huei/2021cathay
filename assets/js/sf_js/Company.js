class Company {
  constructor(name) {
    this.name = name
  }
  
  getCompanyList() {
    let data = []
    stockCodeData.forEach(item => {
      if (data.length <= 20) {
        if (
          item.公司名稱.indexOf(this.name) !== -1 ||
          item.公司簡稱.indexOf(this.name) !== -1
        ) data.push(item)
      }
    })
    
    return data
  }
  
  static companyInputReset() {
    $('.searchResult').hide()
    $('.searchResult').empty()
  }
  
  static appendSearchItem(data) {
    let searchRsult = $('.searchResult')
    searchRsult.empty()
    data.forEach(item => searchRsult.append(`<div class="searchItem">${item.公司名稱}</div>`))
  }
  
  static handleSelectedData(data, selected) {
    let selectedData = data.filter(item => item.公司名稱 === selected)
    $('#stockCode').val(selectedData[0]['股票代號'])
  }
}

//------------------------------

const setSearchItem = (data) => {
  if (data.length > 0) {
    Company.appendSearchItem(data)
    $('.searchResult').fadeIn('slow')
    $('.searchItem').click((e) => searchItemClick(e, data))
  }
}

const searchItemClick = (e, data) => {
  let selected = e.target.innerText
  companyInput.val(selected)
  Company.handleSelectedData(data, selected)
  Company.companyInputReset()
}

//------------------------------

let companyInput = $('#company')
companyInput.keyup((event) => {
  if (!companyInput.val()) Company.companyInputReset()
  
  if (companyInput.val() !== '' && companyInput.val().length > 1) {
    Company.companyInputReset()
    let data = new Company(companyInput.val()).getCompanyList()
    setSearchItem(data)
  }
})

$(`input`).focus(()=> Company.companyInputReset())


