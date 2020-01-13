$(function() {
  $(window).on('resize load', function() {
    if (
      ('True' == 'true' || 'True' == 'True') &&
      !$('.frontend-navbar-btn').is(':visible') &&
      $('.SignIn-master-page').length == 0 &&
      $('.Seconnecter-master-page').length == 0 &&
      $('.Register-master-page').length == 0 &&
      $('.Enregistrer-master-page').length == 0
    ) {
      calcWidth();
      if ($('#badge').length > 0)
        $('#liDashboard a span').after($('#badge').css('margin-left', '10px'));
      if ($('#badge-Survey').length > 0)
        $('#liSurveys a span').after(
          $('#badge-Survey').css('margin-left', '5px')
        );
    } else if ('True' == 'true' || 'True' == 'True') {
      if ($('#badge').length > 0)
        $('#liDashboard a span').after($('#badge').css('margin-left', '10px'));
      if ($('#badge-Survey').length > 0)
        $('#liSurveys a span').after(
          $('#badge-Survey').css('margin-left', '5px')
        );
    }
  });
});

function calcWidth() {
  if ($('.main-menu .menu-more').length == 0) return;

  var navwidth = 0;
  var morewidth = $('.main-menu .menu-more').outerWidth(true);
  $('.main-menu > li:not(.menu-more)').each(function() {
    navwidth += $(this).outerWidth(true);
  });

  navwidth +=
    $('.new-header-menu > .header-nav.nav-collapse .navbar-form').outerWidth(
      true
    ) +
    $('.new-header-menu > .header-nav.nav-collapse ul.nav').outerWidth(true) +
    $('#new-header-theme .brand.header-logo').outerWidth(true) +
    50;

  //var availablespace = $('nav').outerWidth(true) - morewidth;
  var availablespace =
    $('#new-header-theme > .navbar-inner').width() - morewidth;

    /*if (navwidth > availablespace) {
      var lastItem = $('.main-menu > li:not(.menu-more)').last();
      lastItem.attr('data-width', lastItem.outerWidth(true));
      lastItem.prependTo($('.main-menu .menu-more ul.dropdown-menu'));
      calcWidth();
      
    } else {
      var firstMoreElement = $('.main-menu li.menu-more li').first();
      if (navwidth + firstMoreElement.data('width') < availablespace) {
        firstMoreElement.insertBefore($('.main-menu .menu-more'));
      }
    }*/fixMenu(navwidth, availablespace);
}

// (function(Brainbank, $, undefined) {
//   Brainbank.Resources = Brainbank.Resources || {};

//   Brainbank.Resources.buttonCreation = function() {
$(document).ready(function() {
  var $container = $(
    '.horizontal-top-menu .navbar-inner .horizontal-nav .nav #liChallenges'
  );

  $container.after(
    `<li id="liResources" class="Resources-btn dropdown-submenu"><a class="dropdown-toggle" id="resource-dropdown" data-toggle="dropdown">Resources <span class="caret"></span></a>
        <ul id="resource-menu" class="dropdown-menu">
            <li><a target="_blank" href="https://ontariopowergeneration.sharepoint.com/sites/powernet/support/it/innovation/Documents/Innovation%20Portal%20FAQ.pdf">FAQ</a></li>
            <li><a target="_blank" href="https://ontariopowergeneration.sharepoint.com/sites/powernet/support/it/innovation/Documents/Challenge%20Guide.pdf">Challenge Guide</a></li>
            <li><a target="_blank" href="https://ontariopowergeneration.sharepoint.com/sites/powernet/support/it/innovation/Documents/Participation%20Guide.pdf">Participant Guide</a></li>
            <li><a target="_blank" href="https://ontariopowergeneration.sharepoint.com/sites/powernet/support/it/innovation/Documents/Lifecycle%20of%20an%20Idea.pdf">Lifecyle of an idea diagram</a></li>
            <li><a target="_blank" href="https://ontariopowergeneration.sharepoint.com/sites/powernet/support/it/innovation/Pages/Innovation-Sponsorship-Team.aspx">Innovation Sponsorship Team</a></li>
            <li><a target="_blank" href="//planbox.ca/opg_sandbox-_/ContentPages/Content12">Videos</a></li>
            <li><a target="_blank" norel="nofollower" href="https://innovatecentralcanada.blob.core.windows.net/innovate-storage/opg_sandbox/usercontent/3e2b0b51-37fc-48b7-8437-45aa43b79823.pdf">Process Guide</a></li>
        </ul>
    </li>`
  );
  var $containerTwo = $('#new-header-theme ul.main-menu #liIdeas');

  $containerTwo.after(
    `<li id="liResources" class="Resources-btn dropdown"><a class="dropdown-toggle" id="resource-dropdown" data-toggle="dropdown">Resources <span class="caret"></span></a>
        <ul id="resource-menu" class="dropdown-menu">
            <li><a target="_blank" href="https://ontariopowergeneration.sharepoint.com/sites/powernet/support/it/innovation/Documents/Canvas/OPG_Innovation_Canvas.pdf">OPG Innovation Canvas</a></li>
            <li><a target="_blank" href="https://ontariopowergeneration.sharepoint.com/sites/powernet/support/it/innovation/Pages/Innovation-Sponsorship-Team.aspx">Innovation Sponsorship Team</a></li>
            <li><a target="_blank" href="https://innovatecentralcanada.blob.core.windows.net/innovate-storage/opg_sandbox/usercontent/24d44ea4-8a78-4f3a-961a-b371de617205.pdf">Innovation Framework</a></li>
            <li><a target="_blank" href="https://planbox.ca/opg_sandbox-default/contentpages/content3">Reviewers List</a></li>
            <li><a target="_blank" href="https://planbox.ca/opg_sandbox-_/ContentPages/Content12">Videos</a></li>
            <li><a target="_blank" norel="nofollower" href="https://innovatecentralcanada.blob.core.windows.net/innovate-storage/opg_sandbox/usercontent/3e2b0b51-37fc-48b7-8437-45aa43b79823.pdf">Process Guide</a></li>
        </ul>
    </li>`
  );

  /*$(".horizontal-top-menu .navbar-inner .horizontal-nav .nav #liChallenges").after($resourcesDropdown); //Add to dropdown
	$("#new-header-theme ul.main-menu #liIdeas").after($resourcesDropdown); //Add to new header dropdown*/
  //  };
}); //((window.Brainbank = window.Brainbank || {}), jQuery);

$(document).ready(function() {
  $('#liEvaluation').after(
    `<li id="liReviewer" class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown">LiReviewer <span class="caret"></span></a>
        <ul class="dropdown-menu">
        <li><a target="_blank" href="https://ontariopowergeneration.sharepoint.com/sites/powernet/support/it/innovation/Documents/Canvas/OPG%20Business%20Model%20Canvas.pdf">Business Model Canvas</a></li>
        <li><a target="_blank" href="https://ontariopowergeneration.sharepoint.com/:p:/s/powernet/support/it/innovation/EYFp3MbE4V5AuwfDuB-SwhkBsec21_E-9M7ULQEVgPsv6Q">Innovation Pitch Deck Template</a></li>
        <li><a target="_blank" href="//d32ekf2zat2q3c.cloudfront.net/Client/OPG/Docs/Benefits_Estimation_Tool.xlsx">Benefits Estimation Tool</a></li>
        </ul>
    </li>`
  );
  $('#liEvaluation').appendTo('#liReviewer > ul');
  $('#liDashboard').appendTo('#liReviewer > ul');
  if (
    $(
      '.admin-dashboard-dropdown-submenu-constant a[href="/default/Reporting/ReportList"]'
    ).length > 0 ||
    $(
      '.admin-dashboard-dropdown-submenu-constant a[href="/external/Reporting/ReportList"]'
    ).length > 0
  ) {
    $('.main-menu').append(
      '<li id="liReports"><a href="/opg_sandbox-_/Reporting/ReportList"><i class="icon-large icon-white icon-charts"></i><span>Reports</span></a></li>'
    );
  }

  if (document.URL.split('#')[1] == 'resources') {
    $(
      '.horizontal-top-menu .navbar-inner .horizontal-nav .nav #liResources'
    ).addClass('active');
  } else {
    $(
      '.horizontal-top-menu .navbar-inner .horizontal-nav .nav #liResources'
    ).removeClass('active');
  }
});


let fixMenu = (navwidth, availablespace) => {
  let ulMainMenuCollection = document.getElementsByClassName("main-menu");//should have an Id, as it has not Id then get it by className
  let ulMainMenu = ulMainMenuCollection.item(0);

  let liMenuItems = [];
  ulMainMenu.querySelectorAll(":scope > li").forEach(li => liMenuItems.push(li));

  let liMenuItemMore = document.getElementsByClassName("menu-more").item(0);//should have an Id, as it has not Id then get it by className

  /**when the screen shrinks, menu must be inserted in menu-more */
  if (navwidth > availablespace) {//inserting adjacent-menu in menu-more
    let menu_before_LiMenuMore = liMenuItems[liMenuItems.length-2];
    //console.log('menu_before_LiMenuMore.querySelectorAll("ul").length ', menu_before_LiMenuMore.querySelectorAll("ul").length);
    if(menu_before_LiMenuMore.querySelectorAll("ul").length>0){//if it has children means it is a menu(has an UL inside for the submenu)
      menu_before_LiMenuMore.className = 'Resources-btn dropdown-submenu';
    }else{
      menu_before_LiMenuMore.className = '';//when the item-menu does not have submenu, it only occups its width so we have to remove the styles
    }
    
    liMenuItemMore.querySelector("ul").prepend(menu_before_LiMenuMore);
    menu_before_LiMenuMore.dataset.myWidth = menu_before_LiMenuMore.offsetWidth;

  } else {//expanded screen, remove menues from menu-more
      //console.log('liMenuItemMore.querySelectorAll(":scope > li") ', liMenuItemMore.querySelectorAll(":scope > li").length);
      liMenuItemMore.querySelectorAll(":scope > ul >li").forEach(
        itemMenu => {
          console.log(itemMenu, itemMenu.dataset.myWidth);
          if(itemMenu.dataset.myWidth>=0){
            //if (navwidth + itemMenu.dataset.myWidth  < availablespace) {
              ulMainMenu.insertBefore(itemMenu, liMenuItemMore);
              itemMenu.className = 'Resources-btn dropdown';
            //}
          }
      });
  }
}

