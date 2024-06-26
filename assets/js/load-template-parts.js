$(document).ready(function () {
  let docHeader = $('#document-header');
  let pageFooter = $('.page-footer');
  let title = $(docHeader).data('title');
  let subtitle = $(docHeader).data('subtitle');
  let pdf = $(docHeader).data('pdf');

  $(docHeader).load('https://onepagers.suffolklitlab.org/template-parts/page-header.html', function () {
    $(docHeader).find('h1').text(title);
    if (subtitle) $(docHeader).find('.subtitle').text(subtitle);
    if ($('body').hasClass('one-pager')) {
      $.get('https://onepagers.suffolklitlab.org/template-parts/nav-buttons.html', function (navButtons) {
        $(docHeader).append(navButtons);
        $(docHeader).promise().done(function () {
          if (pdf) {
            $('#header-nav-buttons .download-page').attr('href', pdf);
          } else {
            $('#header-nav-buttons .download-page').remove();
          }
        })
      });
    }
  });
  $.get('https://onepagers.suffolklitlab.org/template-parts/page-footer.html', function (pageFooterContent) {
    $(pageFooter).html(pageFooterContent);
    $('#document-container .page:not(:first-of-type)').append('<footer class="page-footer">' + pageFooterContent + '</footer>');
  });
  
  

  $(docHeader).promise().done(function () {
    $(pageFooter).promise().done(function () {
      $('body').show();
    });
  });
});