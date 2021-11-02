$('#sendBtn').click(function () {
  
  let selectedJob = $("#selectJob option:selected").val();
  let selectedEvent = $("input[name='event']:checked").val();

  var status = true
  var last_name = $('#last_name').val()
  var mobile = $('#mobile').val()
  var email = $('#email').val()
  var email_backup = $('#email_backup').val()
  var company = $('#company').val()
  var stockCode = $('#stockCode').val()
  var title = $('#title').val()
  var policy = $('#policy').val()
  var date = $('#00N2w00000Hh3C1').val()
  
  // 隱藏備註欄位
  let note = `股票代號：${$('#stockCode').val()}, 備用信箱：${$('#email_backup').val()}`
  $('#00N2w00000Hh3Mv').val(note)
  
  $Emailchecking2 = IsEmail($('#email').val())
  
  if ($Emailchecking2 == false && email !== '') {
    status = false
    $('.error.blank')
      .removeClass('show')
      .removeClass('flash')
    $('.error.wrong')
      .addClass('flash')
      .addClass('flash')
  } else {
    $('.error.wrong')
      .removeClass('show')
      .removeClass('flash')
  }
  if (email == '') {
    $('.error.blank')
      .addClass('show')
      .addClass('flash')
    status = false
  } else {
    $('.error.blank')
      .removeClass('show')
      .removeClass('flash')
    $('.errorMobileLength')
      .removeClass('show')
      .removeClass('flash')
  }
  if (!$('#policy').is(':checked')) {
    $('.checkbox .error')
      .addClass('show')
      .addClass('flash')
    status = false
  } else {
    $('.checkbox .error')
      .removeClass('show')
      .removeClass('flash')
  }

  if (mobile == '') {
    $('.errorMobile')
        .addClass('show')
        .addClass('flash')
    status = false
  } else if (mobile.length !== 10 && mobile.length !== 0) {
      $('.errorMobileLength')
          .addClass('show')
          .addClass('flash')
      $('.errorMobile')
          .removeClass('show')
          .removeClass('flash')
      status = false
  } else {
      $('.errorMobile')
          .removeClass('show')
          .removeClass('flash')
      $('.errorMobileLength')
          .removeClass('show')
          .removeClass('flash')
  }
  
  if (status && email && mobile && last_name && company && selectedJob && title && stockCode) {
    $('#sfBtn').click()
    $('form').hide()
    $('.tks').show()
  } else {
    if (email == '') {
      $('.errorMail')
        .addClass('show')
        .addClass('flash')
    }
    if (mobile == '') {
      $('.errorMobile')
        .addClass('show')
        .addClass('flash')
    }
    if (last_name == '') {
      $('.errorName')
        .addClass('show')
        .addClass('flash')
    }
    if (company == '') {
      $('.errorCompany')
        .addClass('show')
        .addClass('flash')
    }
    if (selectedJob == '') {
      $('.errorJob')
        .addClass('show')
        .addClass('flash')
    }
    if (selectedEvent == '') {
      $('.errorEvent')
        .addClass('show')
        .addClass('flash')
    }
    if (stockCode == '') {
      $('.errorStockCode')
        .addClass('show')
        .addClass('flash')
    }
    if (title == '') {
      $('.errorPosition')
        .addClass('show')
        .addClass('flash')
    }
    if (!$('#policy').is(':checked')) {
      $('.checkbox .errorPolicy')
        .addClass('show')
        .addClass('flash')
    }
    return false
  }
  
  // 如果必填欄位都過了 才會到這邊
  if (status) {
    $("#sfBtn").click();
    let data = {
      "date": date,
      "last_name": last_name,
      "mobile": mobile,
      "email": email,
      "email_backup": email_backup,
      "company": company,
      "stockCode": stockCode,
      "title": title,
      "job": selectedJob,
      "event": selectedEvent,
    }
     send(data);
    $(".tks").show();
  }
})

// 送資料去googlesheet
function send(data){
  $.ajax({
    type: "get",
    // api url - google appscript 產出的 url
    // sheet https://docs.google.com/spreadsheets/d/104neATR4PkGGGWLLeaHPSPVtsQSB7SIb9d749zBWrUo/edit#gid=0
    url: 'https://script.google.com/macros/s/AKfycbzzOyvOK8vRipFXZwuwceTrhuevE57RJIMdz6HZm-hNcx1Q4Ck/exec',
    data: data,
    dataType: "JSON",
    // 成功送出 會回頭觸發下面這塊感謝
    success: function (response) {
      // console.log(response);
      // alert('感謝，您已完成訂閱!');
    }
  });
}